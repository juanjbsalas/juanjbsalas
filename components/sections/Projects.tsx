import SectionWrapper from '@/components/SectionWrapper'
import ProjectCard from '@/components/ProjectCard'
import type { Project } from '@/components/ProjectCard'

const PROJECTS: Project[] = [
  {
    title: 'Planora',
    description:
      'A travel planning website for exploring destinations and organizing trip itineraries. Features destination browsing, trip scheduling, and a clean, map-friendly UI.',
    tech: ['HTML', 'Tailwind CSS', 'JavaScript'],
    image: '/juanjbsalas/images/placeholder-project.svg',
    githubUrl: 'https://github.com/juanjbsalas',
    liveUrl: 'https://juanjbsalas.github.io/Global-Voyage/',
  },
  {
    title: 'Open Seat',
    description:
      'A web scraper that monitors Wofford College\u2019s registration system and sends email notifications when a seat opens in a closed class section \u2014 saving students hours of manual checking.',
    tech: ['Python', 'Selenium', 'Flask', 'smtplib'],
    image: '/juanjbsalas/images/placeholder-project.svg',
    githubUrl: 'https://github.com/juanjbsalas',
  },
  {
    title: 'Smart Koozie',
    description:
      'A Bluetooth-enabled drink cooler controlled via an iPhone app. Uses a Peltier module for active cooling and an Arduino Nano ESP32 for wireless communication via the RemoteXY platform.',
    tech: ['Arduino', 'C++', 'RemoteXY', 'Peltier Module'],
    image: '/juanjbsalas/images/placeholder-project.svg',
    githubUrl: 'https://github.com/juanjbsalas',
  },
]

export default function Projects() {
  return (
    <SectionWrapper id="projects" className="bg-camo-100/30">
      {/* Section heading */}
      <div className="mb-12">
        <p className="text-sm font-semibold text-camo-700 uppercase tracking-widest mb-2">
          Projects
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-camo-900 tracking-tight">
          Things I&apos;ve built
        </h2>
        <p className="mt-3 text-camo-900/60 text-base max-w-xl">
          A selection of projects across web development and embedded systems.
        </p>
      </div>

      {/* Project grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROJECTS.map((project, i) => (
          <ProjectCard key={project.title} project={project} featured={i === 0} />
        ))}
      </div>
    </SectionWrapper>
  )
}
