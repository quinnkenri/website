'use client'

import Link from 'next/link'
import { Avatar, AvatarFallback, AvatarImage } from 'app/components/ui/avatar'
import { ProjectList } from 'app/components/project-list'
import { projects } from 'app/lib/projects'

export default function Page() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-4xl px-6 pt-20 pb-16 sm:px-8">

        {/* Bio header */}
        <header className="flex flex-col items-center gap-6 md:flex-row md:items-start md:justify-between">
          <Avatar className="h-32 w-32 shrink-0 rounded-lg border border-border bg-muted md:h-48 md:w-48">
            <AvatarImage src="/headshot.jpg" alt="Quinn Lawson" />
            <AvatarFallback className="text-lg font-medium">QL</AvatarFallback>
          </Avatar>
          <div className="min-w-0 text-center md:text-left">
            <h1 className="text-3xl font-semibold tracking-tight">Quinn Lawson</h1>
            <p className="mt-2 text-muted-foreground">
              Hello! I am a 3rd year Mechanical Engineering student at the University of Saskatchewan.
            </p>
            <nav className="mt-5 flex flex-wrap justify-center gap-3 text-base md:justify-start">
              <a href="mailto:quinn.lawson@usask.ca" className="rounded border border-border px-3 py-1.5 text-primary hover:border-primary hover:no-underline">Email</a>
              <a href="https://github.com/quinnkenri" target="_blank" rel="noopener noreferrer" className="rounded border border-border px-3 py-1.5 text-primary hover:border-primary hover:no-underline">GitHub</a>
              <a href="https://linkedin.com/in/quinn-lawson123" target="_blank" rel="noopener noreferrer" className="rounded border border-border px-3 py-1.5 text-primary hover:border-primary hover:no-underline">LinkedIn</a>
            </nav>
          </div>
        </header>

        {/* Featured projects */}
        <div className="mt-16">
<ProjectList projects={projects.filter(p => p.title === 'Theseus' || p.title === 'Up')} />        </div>

        {/* See more button */}
        <div className="mt-8 flex justify-center">
          <Link
            href="/projects"
            className="rounded border border-border px-5 py-2 text-sm text-muted-foreground hover:border-primary hover:text-primary"
          >
            See more
          </Link>
        </div>

      </div>
    </div>
  )
}
