import { Avatar, AvatarFallback } from 'app/components/ui/avatar'
import { ProjectList, type Project } from 'app/components/project-list'
import { SkillIcons } from 'app/components/skill-icons'
import { CurrentlyWorking } from 'app/components/currently-working'

const projects: Project[] = []

export default function Page() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-4xl px-6 pt-20 pb-16 sm:px-8">
        <header className="mb-16 flex flex-col items-center gap-6 md:flex-row md:items-start md:justify-between">
          <Avatar
            className="h-32 w-32 shrink-0 border border-border bg-muted md:h-48 md:w-48"
          >
            <AvatarFallback className="text-lg font-medium">YN</AvatarFallback>
          </Avatar>
          <div className="min-w-0 text-center md:text-left">
            <h1 className="text-3xl font-semibold tracking-tight">
              Quinn Lawson
            </h1>
            <p className="mt-2 text-muted-foreground">
              3rd year Mechanical Engineering student at the University of Saskatchewan
              <br />
              <br />
              Hello!
            </p>
            <nav className="mt-5 flex flex-wrap justify-center gap-3 text-base md:justify-start">
              <a
                href="quinn.lawson@usask.ca"
                className="rounded border border-border px-3 py-1.5 text-primary hover:border-primary hover:no-underline"
              >
                Email
              </a>
              <a
                href="https://github.com/quinnkenri"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded border border-border px-3 py-1.5 text-primary hover:border-primary hover:no-underline"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/quinn-lawson-123"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded border border-border px-3 py-1.5 text-primary hover:border-primary hover:no-underline"
              >
                LinkedIn
              </a>
              <a
                href="/blog"
                className="rounded border border-border px-3 py-1.5 text-primary hover:border-primary hover:no-underline md:hidden"
              >
                Blog
              </a>
            </nav>
          </div>
        </header>

        <section className="mb-6">
          <h2 className="mb-3 text-sm font-medium uppercase tracking-wider text-muted-foreground">
            About
          </h2>
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

        <section className="mb-16">
          <h2 className="mb-6 text-sm font-medium uppercase tracking-wider text-muted-foreground">
            Projects
          </h2>
          <ProjectList projects={projects} />
        </section>

        <section className="mb-16">
          <h2 className="mb-3 text-sm font-medium uppercase tracking-wider text-muted-foreground">
            Skills
          </h2>
          <SkillIcons />
        </section>
      </div>
    </div>
  )
}
