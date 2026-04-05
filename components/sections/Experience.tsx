import SectionWrapper from '@/components/SectionWrapper'
import TimelineItem from '@/components/TimelineItem'

const EXPERIENCE = [
  {
    role: 'Incoming Software Engineer Intern',
    company: 'American Express',
    dates: 'June 2026 – August 2026',
    logo: '/juanjbsalas/images/american-express-logo.png',
  },
  {
    role: 'Web Developer',
    company: 'Wofford College',
    dates: 'September 2025 – Present',
    logo: '/juanjbsalas/images/wofford-terrier.png',
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
  },
  {
    role: 'Energy Systems Research',
    company: 'Wofford College',
    dates: 'May 2024 – May 2025',
    logo: '/juanjbsalas/images/wofford-terrier.png',
  },
  {
    role: 'Engineering Intern',
    company: 'Montes Electric INC',
    dates: 'June 2023 – August 2023',
    logo: '/juanjbsalas/images/montes-electic-logo.png',
  },
  {
    role: 'BS Computer Science & Applied Mathematics',
    company: 'Wofford College',
    dates: 'Aug 2023 – May 2027',
    logo: '/juanjbsalas/images/wofford-terrier.png',
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
            isLast={i === EXPERIENCE.length - 1}
          />
        ))}
      </div>
    </SectionWrapper>
  )
}
