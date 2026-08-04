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
      { type: 'text', content: `Contributed to the USST's 2026 competition rocket Theseus. As an aerostructure team lead, I helped design a set of removable carbon fiber fins and aluminum mounting brackets for them.
        
        The rocket will fly soon!` },
    ],
  },
    {
    title: 'Wind-Powered Sail Cart',
    image: '/cart.jpg',  
    description: 'ME-229 Engineering Design Project',
    tech: ['Inventor', 'Documentation and Reporting'],
    links: [{ label: 'Presentation video', href: 'https://www.youtube.com/watch?v=Kg3sbk-dOGU' }],
    details: [
      { type: 'text', content: `Class project, see video for more.` },
    ],
  },
    {
    title: 'Up',
    image: '/Up2025.jpg',  
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
    image: '/car.jpg',  
    description: 'ENGR-102 Engineering Project',
    tech: ['Arduino', 'Android'],
    links: [{ label: 'Demonstration video', href: 'https://youtu.be/wNtzX0Gwb_g' }],
    details: [
      { type: 'text', content: `Omnidirectional RC Car project for ENGR-102 Engineering Design, an open-ended design course where teams of 2 built "something" in a month. 
      
      The frame of the car is a metal plate from a Merkur construction set. The controller app runs on Android 4.4, communicating with the Arduino Uno through an HD-05 Bluetooth board. Four DC motors are controlled with an L293D board and connected to the mechanum wheels. Due to the high power draw of the motors, the motor controller board has an independent power supply (4 AA batteries). A single 9V battery powers the Arduino and HD-05.
      
      Check out the demonstration video to see the car in action!` },
    ],
  },
      {
    title: 'Golf Putters',
    image: '/putterhead.jpg',  
    description: 'Designing custom putter heads',
    tech: ['Fusion 360'],
    links: [{ label: 'This could be you with this putter', href: 'https://www.youtube.com/watch?v=u9KrMQDU94g' }],
    details: [
      { type: 'text', content: `Every year a new putter comes out where it looks like nothing changed except the price. For a high school project I decided to test out some more radical updates.
        
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
