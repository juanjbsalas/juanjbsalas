import SectionWrapper from '@/components/SectionWrapper'
import TimelineItem from '@/components/TimelineItem'

const EXPERIENCE = [
  {
    role: 'Incoming Software Engineer Intern',
    company: 'American Express',
    dates: 'June 2026 – August 2026',
    logo: '/juanjbsalas/images/american-express-logo.png',
    bullets: ['Joining the American Express technology team for Summer 2026.'],
  },
  {
    role: 'Web Developer',
    company: 'Wofford College',
    dates: 'September 2025 – Present',
    logo: '/juanjbsalas/images/wofford-terrier.png',
    bullets: [
      'Improved administrative workflows for 1,500+ users by implementing ASP.NET web forms with JavaScript, VB, and SQL, cutting data-entry time by 30% and ensuring 99% uptime of the university\'s website.',
    ],
  },
  {
    role: 'Head Resident Assistant',
    company: 'Wofford College',
    dates: 'August 2025 – Present',
    logo: '/juanjbsalas/images/wofford-terrier.png',
  },
  {
    role: 'Software Engineer Apprentice',
    company: 'Red Ventures',
    dates: 'June 2025 – August 2025',
    logo: '/juanjbsalas/images/red-ventures-logo.png',
    bullets: [
      'Engineered web apps including a travel site with 10+ real-time flight offers via Amadeus API and a movie directory with 100% accurate OMDb API data, integrating JS and Tailwind CSS for rendering and styling.',
    ],
  },
  {
    role: 'Energy Systems Research',
    company: 'Wofford College',
    dates: 'May 2024 – May 2025',
    logo: '/juanjbsalas/images/wofford-terrier.png',
    bullets: [
      'Analyzed energy consumption for 1.5M+ users by processing 82.7 TWh across 30+ power companies using Excel, producing insights that inform grid optimization efforts.',
    ],
  },
  {
    role: 'Engineering Intern',
    company: 'Montes Electric INC',
    dates: 'June 2023 – August 2023',
    logo: '/juanjbsalas/images/montes-electic-logo.png',
    bullets: [
      'Performed construction take-offs for underground wiring on 10+ solar farms by analyzing site plans, producing accurate material estimates that improved project planning.',
    ],
  },
  {
    role: 'BS Computer Science & Applied Mathematics',
    company: 'Wofford College',
    dates: 'Aug 2023 – May 2027',
    logo: '/juanjbsalas/images/wofford-terrier.png',
    bullets: [
      'Relevant courses: Data Structures & Algorithms, Algorithm Design & Analysis, Embedded Systems, Computer Architecture, Operating Systems, Theory of Computation, Applied AI, Complex Analysis, Modern Physics.',
    ],
  },
]

export default function Experience() {
  return (
    <SectionWrapper id="experience">
      {/* Section heading */}
      <div className="mb-12">
        <p className="text-sm font-semibold text-camo-700 uppercase tracking-widest mb-2">
          Experience
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-camo-900 tracking-tight">
          Where I&apos;ve worked &amp; studied
        </h2>
      </div>

      {/* Timeline */}
      <div>
        {EXPERIENCE.map((item, i) => (
          <TimelineItem
            key={i}
            role={item.role}
            company={item.company}
            dates={item.dates}
            logo={item.logo}
            bullets={item.bullets}
            isLast={i === EXPERIENCE.length - 1}
          />
        ))}
      </div>
    </SectionWrapper>
  )
}
