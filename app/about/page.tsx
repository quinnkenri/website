import { SkillIcons } from 'app/components/skill-icons'
import { CurrentlyWorking } from 'app/components/currently-working'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-4xl px-6 pt-20 pb-16 sm:px-8">
        <h1 className="mb-8 text-3xl font-semibold tracking-tight">About</h1>

        <section className="mb-16">
          <p className="leading-relaxed">
            I am a third-year engineering student.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="mb-3 text-sm font-medium uppercase tracking-wider text-muted-foreground">
            Currently
          </h2>
          <CurrentlyWorking blurb="Describe what you're focused on right now." />
        </section>

<h2 className="mb-6 mt-16 text-center text-sm font-medium uppercase tracking-wider text-muted-foreground">
  Where I've Lived
</h2>
<div className="flex justify-center gap-4">
        
<div className="flex justify-center gap-4">
  {[
    { src: '/flag1.png', alt: 'Winnipeg' },
    { src: '/flag2.png', alt: 'Campbell River / Duncan / Cranbrook' },
    { src: '/flag3.png', alt: 'Moncton / Dieppe' },
    { src: '/flag4.png', alt: 'Saskatoon' },
  ].map(({ src, alt }) => (
    <div key={src} className="group relative">
      <span className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-foreground px-2 py-1 text-xs text-background opacity-0 transition-opacity delay-400 duration-200 group-hover:opacity-100">
        {alt}
      </span>
      <img src={src} alt={alt} className="h-12 rounded shadow-sm" />
    </div>
  ))}
</div>
      </div>
    </div>
  )
}
