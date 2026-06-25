export const dynamic = 'force-dynamic'

async function getAccessToken() {
  const basic = Buffer.from(
    `${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`
  ).toString('base64')

  const tokenRes = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token: process.env.SPOTIFY_REFRESH_TOKEN!,
    }),
  })
  const data = await tokenRes.json()
  return data.access_token as string
}

export async function GET() {
  const accessToken = await getAccessToken()

  const nowPlayingRes = await fetch(
    'https://api.spotify.com/v1/me/player/currently-playing',
    { headers: { Authorization: `Bearer ${accessToken}` } }
  )

  if (nowPlayingRes.ok && nowPlayingRes.status !== 204) {
    const song = await nowPlayingRes.json()
    if (song?.item) {
      return Response.json({
        isPlaying: song.is_playing,
        title: song.item.name,
        artist: song.item.artists.map((a: { name: string }) => a.name).join(', '),
        albumArt: song.item.album.images[0]?.url,
        songUrl: song.item.external_urls.spotify,
      })
    }
  }

  // Nothing currently playing — fall back to the last played track
const recentRes = await fetch(
    'https://api.spotify.com/v1/me/player/recently-played?limit=1',
    { headers: { Authorization: `Bearer ${accessToken}` } }
  )

  if (!recentRes.ok) {
    const errorBody = await recentRes.text()
    return Response.json({ isPlaying: false, debugStatus: recentRes.status, debugError: errorBody })
  }

  const recent = await recentRes.json()
  const last = recent?.items?.[0]

  if (!last) {
    return Response.json({ isPlaying: false, debugStatus: recentRes.status, debugItems: recent?.items?.length ?? 0 })
  }

  return Response.json({
    isPlaying: false,
    title: last.track.name,
    artist: last.track.artists.map((a: { name: string }) => a.name).join(', '),
    albumArt: last.track.album.images[0]?.url,
    songUrl: last.track.external_urls.spotify,
    playedAt: last.played_at,
  })
}
