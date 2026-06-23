import './global.css'
import type { Metadata } from 'next'
import { SiteHeader } from './components/site-header'
import { SiteFooter } from './components/site-footer'
import { ThemeScript } from './components/theme-script'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { baseUrl } from './sitemap'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Quinn Lawson",
    template: '%s | Quinn Lawson',
  },
  description: 'Personal portfolio and project showcase.',
  openGraph: {
    title: 'Your Site',
    description: 'Personal portfolio and project showcase.',
    url: baseUrl,
    siteName: 'Your Site',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <ThemeScript />
      </head>
      <body className="antialiased">
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
