export const baseUrl = 'https://quinnlawson.vercel.app'

export default async function sitemap() {
  let routes = ['', '/projects', '/about'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  return routes
}
