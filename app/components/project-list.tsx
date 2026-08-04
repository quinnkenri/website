'use client'

import { useEffect, useState } from 'react'

export type DetailBlock =
  | { type: 'text'; content: string }
  | { type: 'image'; src: string; alt: string; width: number; height: number; caption?: string }
  | { type: 'video'; src: string; alt: string; caption?: string; poster?: string }

export type Project = {
  title: string
  image?: string
  description: string
  tech: string[]
  links?: { label: string; href: string }[]
  details?: DetailBlock[]
}

function ExternalLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
      {children}
    </a>
  )
}

function DetailBlocks({ blocks }: { blocks: DetailBlock[] }) {
  return (
    <div className="space-y-4">
      {blocks.map((b, i) => {
        if (b.type === 'text') {
          return (
            <p key={i} className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line">
              {b.content}
            </p>
          )
        }
        if (b.type === 'video') {
          return (
            <figure key={i} className="space-y-1">
              <video
                src={b.src}
                aria-label={b.alt}
                poster={b.poster}
                controls
                preload="metadata"
                playsInline
                className="w-full rounded border border-border"
              />
              {b.caption && (
                <figcaption className="text-center text-xs text-muted-foreground">{b.caption}</figcaption>
              )}
            </figure>
          )
        }
        return (
          <figure key={i} className="space-y-1">
            <img
              src={b.src}
              alt={b.alt}
              width={b.width}
              height={b.height}
              loading="lazy"
              className="w-full rounded border border-border"
            />
            {b.caption && (
              <figcaption className="text-center text-xs text-muted-foreground">{b.caption}</figcaption>
            )}
          </figure>
        )
      })}
    </div>
  )
}

export function ProjectList({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState<Project | null>(null)

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setActive(null) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  if (projects.length === 0) {
    return (
      <p className="text-sm italic text-muted-foreground">
        No projects yet. Add entries to your project list when you&apos;re ready.
      </p>
    )
  }

  return (
    <>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {projects.map((p) => (
          <div
            key={p.title}
            className="flex flex-col overflow-hidden rounded-lg border border-border bg-card"
          >
            {p.image && (
              <div className="aspect-video w-full overflow-hidden bg-muted">
                <img src={p.image} alt={p.title} className="h-full w-full object-cover" />
              </div>
            )}
            <div className="flex flex-1 flex-col justify-between p-4">
              <div>
                <h3 className="font-medium">{p.title}</h3>
                <p className="mt-1 text-xs text-muted-foreground line-clamp-2">{p.description}</p>
              </div>
              <button
                type="button"
                onClick={() => setActive(p)}
                className="mt-4 self-start rounded border border-border px-3 py-1 text-xs text-muted-foreground hover:border-primary hover:text-primary"
              >
                More details
              </button>
            </div>
          </div>
        ))}
      </div>

      {active && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
          onClick={() => setActive(null)}
        >
          <div
            className="relative flex flex-col w-full max-w-2xl max-h-[90vh] rounded-lg bg-background shadow-xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-border px-6 py-4 shrink-0">
              <h3 className="text-lg font-medium">{active.title}</h3>
              <button
                type="button"
                onClick={() => setActive(null)}
                className="text-muted-foreground hover:text-foreground"
              >
                ✕
              </button>
            </div>
            <div className="overflow-y-auto px-6 py-5 space-y-4">
              {active.image && (
                <img src={active.image} alt={active.title} className="w-full rounded-lg object-cover max-h-64" />
              )}
              <p className="text-sm leading-relaxed">{active.description}</p>
              {active.details && active.details.length > 0 && (
                <DetailBlocks blocks={active.details} />
              )}
              {active.tech.length > 0 && (
                <p className="text-xs text-muted-foreground">{active.tech.join(' · ')}</p>
              )}
              {active.links && (
                <div className="flex gap-3 text-sm">
                  {active.links.map((l) => (
                    <ExternalLink key={l.label} href={l.href}>{l.label}</ExternalLink>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
