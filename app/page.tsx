'use client'

import { ProjectList, type Project } from 'app/components/project-list'

const projects: Project[] = [
  {
    title: 'Project Name',
    image: '/project1.jpg',
    description: 'Short description shown in the modal.',
    tech: ['CAD', 'Python'],
    links: [{ label: 'GitHub', href: 'https://github.com/...' }],
    details: [
      { type: 'text', content: 'wrote this with the cartier pen do it sound different' },
    ],
  },
  // add more entries following the same shape
]

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-4xl px-6 pt-20 pb-16 sm:px-8">
<<<<<<< HEAD
        <h1 className="mb-8 text-3xl font-semibold tracking-tight">Projects</h1>
        <ProjectList projects={projects} />
=======
        <header className="flex flex-col items-center gap-6 md:flex-row md:items-start md:justify-between">
          <Avatar className="h-32 w-32 shrink-0 rounded-lg border border-border bg-muted md:h-48 md:w-48">
            <AvatarImage src="/headshot.jpg" alt="Quinn Lawson" />
            <AvatarFallback className="text-lg font-medium">QL</AvatarFallback>
          </Avatar>
          <div className="min-w-0 text-center md:text-left">
            <h1 className="text-3xl font-semibold tracking-tight">Quinn Lawson</h1>
            <p className="mt-2 text-muted-foreground">
              Hello! I am a 3rd year Mechanical Engineering student at the University of Saskatchewan.
            <br>
            </br>
            </p>
            <nav className="mt-5 flex flex-wrap justify-center gap-3 text-base md:justify-start">
              <a href="mailto:quinn.lawson@usask.ca" className="rounded border border-border px-3 py-1.5 text-primary hover:border-primary hover:no-underline">Email</a>
              <a href="https://github.com/quinnkenri" target="_blank" rel="noopener noreferrer" className="rounded border border-border px-3 py-1.5 text-primary hover:border-primary hover:no-underline">GitHub</a>
              <a href="https://linkedin.com/in/quinn-lawson123" target="_blank" rel="noopener noreferrer" className="rounded border border-border px-3 py-1.5 text-primary hover:border-primary hover:no-underline">LinkedIn</a>
            </nav>
          </div>
        </header>
>>>>>>> parent of 514e4eb (Update page.tsx)
      </div>
    </div>
  )
}
