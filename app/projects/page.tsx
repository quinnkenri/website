'use client'

import { ProjectList, type Project } from 'app/components/project-list'

const projects: Project[] = []

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-4xl px-6 pt-20 pb-16 sm:px-8">
        <h1 className="mb-8 text-3xl font-semibold tracking-tight">Projects</h1>
        <ProjectList projects={projects} />
      </div>
    </div>
  )
}
