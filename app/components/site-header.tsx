'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/blog', label: 'Blog' },
]

export function SiteHeader() {
  const [hidden, setHidden] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    let lastY = window.scrollY
    const onScroll = () => {
      const y = window.scrollY
      if (y > 80 && y > lastY) setHidden(true)
      else if (y < lastY) setHidden(false)
      lastY = y
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 border-b border-border bg-background transition-transform duration-200 ${
        hidden ? '-translate-y-full' : 'translate-y-0'
      }`}
    >
      <div className="mx-auto h-14 max-w-5xl overflow-x-auto sm:overflow-x-visible [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <div className="flex h-14 w-max min-w-full items-center justify-between gap-6 px-6 sm:w-auto">
          <Link
            href="/"
            className="shrink-0 text-sm font-semibold tracking-tight"
          >
            Your Site
          </Link>
          <nav className="flex shrink-0 gap-3 text-sm sm:gap-5">
            {navLinks.map((l) => {
              const isActive =
                l.path === '/'
                  ? pathname === '/'
                  : pathname.startsWith(l.path)
              return (
                <Link
                  key={l.path}
                  href={l.path}
                  className={`whitespace-nowrap ${
                    isActive
                      ? 'text-foreground'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {l.label}
                </Link>
              )
            })}
          </nav>
        </div>
      </div>
    </header>
  )
}
