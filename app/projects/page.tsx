'use client'

import { ProjectList, type Project } from 'app/components/project-list'

const projects: Project[] = [
  {
    title: 'Project Up',
    image: '/project1.jpg',  
    description: 'Supersonic competition rocket for Launch Canada 2025',
    tech: ['Solidworks', 'OpenRocket', 'Excel', 'Documentation and Reporting'],
    links: [{ label: 'USST', href: 'https://www.usst.ca/projects/rocket-iii' }],
    details: [
      { type: 'text', content: 'Contributed to the USST's 2025 competition rocket UP as a member of the aerostructure team. Helped design a set of removable aluminum fins and mounting rings that successfully kept the rocket stable on ascent.
        The rocket reached a maximum velocity Mach 1.2, and an apogee over 16,000ft, with the team placing 8th out of 17 competing teams. Our team won the Spirit Bear Award for exemplifying the spirit of teamwork.' },
    ],
  },
  // add more entries following the same shape
]

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
