'use client'

import { useEffect, useState } from 'react'

type NowPlaying = {
  isPlaying: boolean
  title?: string
  artist?: string
  albumArt?: string
  songUrl?: string
  playedAt?: string
}

function timeAgo(isoDate: string) {
  const seconds = Math.floor((Date.now() - new Date(isoDate).getTime()) / 1000)
  if (seconds < 60) return 'just now'
  const minutes = Math.floor(seconds / 60)
  if (minutes < 60) return `${minutes}m ago`
  const hours = Math.floor(minutes / 60)
  if (hours < 24) return `${hours}h ago`
  const days = Math.floor(hours / 24)
  return `${days}d ago`
}

export function SpotifyNowPlaying() {
  const [data, setData] = useState<NowPlaying | null>(null)

  useEffect(() => {
    const load = () =>
      fetch('/api/spotify-now-playing')
        .then((res) => res.json())
        .then(setData)
        .catch(() => setData({ isPlaying: false }))

    load()
    const interval = setInterval(load, 30000)
    return () => clearInterval(interval)
  }, [])

  if (!data?.title) {
    return <span className="text-xs text-muted-foreground">Nothing played yet</span>
  }

  return (
    
      href={data.songUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 rounded-lg border border-border bg-muted/30 px-2 py-1 hover:border-primary"
    >
      {data.albumArt && (
        <img src={data.albumArt} alt={data.title} className="h-8 w-8 rounded" />
      )}
      <span className="min-w-0 text-left">
        <span className="block truncate text-xs font-medium text-foreground">{data.title}</span>
        <span className="block truncate text-xs text-muted-foreground">
          {data.artist} · {data.isPlaying ? 'Now playing' : data.playedAt ? timeAgo(data.playedAt) : ''}
        </span>
      </span>
    </a>
  )
}
