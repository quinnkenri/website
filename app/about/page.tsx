'use client'

import { useState } from 'react'
import { SkillIcons } from 'app/components/skill-icons'
import { CurrentlyWorking } from 'app/components/currently-working'

export default function AboutPage() {
  const [selected, setSelected] = useState<{ flag: string; alt: string; image: string; caption: string } | null>(null)
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-4xl px-6 pt-20 pb-16 sm:px-8">
        <h1 className="mb-8 text-3xl font-semibold tracking-tight">About Me</h1>

        <section className="mb-16">
          <p className="leading-relaxed">
            I am a third-year engineering student at the University of Saskatchewan in Saskatoon.
          </p>
        </section>

{/* Where I've Lived */}
<h2 className="mb-6 mt-16 text-center text-sm font-medium uppercase tracking-wider text-muted-foreground">
  Where I've Lived
</h2>
<div className="flex justify-center gap-4">
  {[
    { flag: '/flag1.png', alt: 'Winnipeg', image: '/DSC07900.JPG', caption: 'portage and main, 2020' },
    { flag: '/flag2.png', alt: 'Campbell River / Duncan / Cranbrook', image: '/photo2.jpg', caption: 'Your caption here' },
    { flag: '/flag3.png', alt: 'Moncton / Dieppe', image: '/photo3.jpg', caption: 'Your caption here' },
    { flag: '/flag4.png', alt: 'Saskatoon', image: '/photo4.jpg', caption: 'Your caption here' },
  ].map((item) => (
    <div key={item.flag} className="group relative">
      <span className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-foreground px-2 py-1 text-xs text-background opacity-0 transition-opacity delay-250 duration-200 group-hover:opacity-100">
        {item.alt}
      </span>
      <img
        src={item.flag}
        alt={item.alt}
        onClick={() => setSelected(item)}
        className="h-12 cursor-default rounded shadow-sm transition-shadow duration-300 hover:shadow-[0_0_10px_2px_rgba(255,255,255,0.4)]"
      />
    </div>
  ))}
</div>

{/* Lightbox modal */}
{selected && (
  <div
    className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
    onClick={() => setSelected(null)}
  >
    <div
      className="relative max-w-lg rounded-lg bg-background p-4 shadow-xl"
      onClick={(e) => e.stopPropagation()}
    >
      <button
        onClick={() => setSelected(null)}
        className="absolute right-3 top-3 text-muted-foreground hover:text-foreground"
      >
        ✕
      </button>
      <img
        src={selected.image}
        alt={selected.caption}
        className="rounded-lg w-full"
      />
      <p className="mt-3 text-center text-sm text-muted-foreground">{selected.caption}</p>
    </div>
  </div>
)}
      </div>
    </div>
  )
}
