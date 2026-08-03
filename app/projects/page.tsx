'use client'

import { ProjectList, type Project } from 'app/components/project-list'

const projects: Project[] = [
  {
    title: 'Theseus',
    image: '/project1.jpg',  
    description: 'Supersonic competition rocket for Launch Canada 2026',
    tech: ['Inventor', 'OpenRocket', 'Python', 'Documentation and Reporting'],
    links: [{ label: 'USST', href: 'https://www.usst.ca/projects/rocket-iii' }],
    details: [
      { type: 'text', content: `Contributed to the USST's 2025 competition rocket UP. As a member of the aerostructure team, I helped design a set of removable aluminum fins and mounting rings that successfully kept the rocket stable on ascent.
        
        The rocket reached a maximum velocity Mach 1.2, and an apogee over 16,000ft, with the team placing 8th out of 17 competing teams. Our team also won the Spirit Bear Award for exemplifying the spirit of teamwork.` },
    ],
  },
    {
    title: 'Wind-Powered Sail Cart',
    image: '/project1.jpg',  
    description: 'ME-229 Engineering Design Project',
    tech: ['Inventor', 'Documentation and Reporting'],
    links: [{ label: 'USST', href: 'https://www.usst.ca/projects/rocket-iii' }],
    details: [
      { type: 'text', content: `Contributed to the USST's 2025 competition rocket UP. As a member of the aerostructure team, I helped design a set of removable aluminum fins and mounting rings that successfully kept the rocket stable on ascent.
        
        The rocket reached a maximum velocity Mach 1.2, and an apogee over 16,000ft, with the team placing 8th out of 17 competing teams. Our team also won the Spirit Bear Award for exemplifying the spirit of teamwork.` },
    ],
  },
    {
    title: 'Up',
    image: '/project1.jpg',  
    description: 'Supersonic competition rocket for Launch Canada 2025',
    tech: ['Solidworks', 'OpenRocket', 'Excel', 'Documentation and Reporting'],
    links: [{ label: 'USST', href: 'https://www.usst.ca/projects/rocket-iii' }],
    details: [
      { type: 'text', content: `Contributed to the USST's 2025 competition rocket Up. As a member of the aerostructure team, I helped design a set of removable aluminum fins and mounting rings that successfully kept the rocket stable on ascent.
        
        The rocket reached a maximum velocity Mach 1.2, and an apogee over 16,000ft, with the team placing 8th out of 17 competing teams. Our team also won the Spirit Bear Award for exemplifying the spirit of teamwork.` },
    ],
  },
    {
    title: 'Omnidirectional RC Car',
    image: '/project1.jpg',  
    description: 'ENGR-102 Engineering Project',
    tech: ['Solidworks', 'OpenRocket', 'Excel', 'Documentation and Reporting'],
    links: [{ label: 'USST', href: 'https://www.usst.ca/projects/rocket-iii' }],
    details: [
      { type: 'text', content: `Contributed to the USST's 2025 competition rocket UP. As a member of the aerostructure team, I helped design a set of removable aluminum fins and mounting rings that successfully kept the rocket stable on ascent.
        
        The rocket reached a maximum velocity Mach 1.2, and an apogee over 16,000ft, with the team placing 8th out of 17 competing teams. Our team also won the Spirit Bear Award for exemplifying the spirit of teamwork.` },
    ],
  },
      {
    title: 'Golf Putters',
    image: '/project1.jpg',  
    description: 'Designing custom putter heads',
    tech: ['Fusion 360'],
    links: [{ label: 'This could be you with this putter', href: 'https://www.youtube.com/watch?v=u9KrMQDU94g' }],
    details: [
      { type: 'text', content: `Every year a new putter comes out where it looks like nothing changed (except the price, which goes up). For a high school project I decided to test out some more radical changes.
        
        This triangular mallet putter primarily reflects high-school level CAD skills, but is actually surprisingly functional. I 3D-printed a prototype out of PLA with 100% infill, attached it to the shaft from a thrift store putter, and tested it on the course. I find the shape is actually quite helpful in alignment, at least as much as the usual stripe!
        
        If machined out of 6061 this would be a heavy putter, around 400-450 grams. The lie angle as tested was 78 degrees, but 70 degrees would likely work better. One day I will get it machined and test it for real...` },
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
