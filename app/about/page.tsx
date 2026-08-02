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

<div className="mt-16 flex justify-center gap-4">
  <img src="/flag1.jpg" alt="Flag 1" className="h-12 rounded shadow-sm" />
  <img src="/flag2.jpg" alt="Flag 2" className="h-12 rounded shadow-sm" />
  <img src="/flag3.jpg" alt="Flag 3" className="h-12 rounded shadow-sm" />
  <img src="/flag4.jpg" alt="Flag 4" className="h-12 rounded shadow-sm" />
</div>
      </div>
    </div>
  )
}
