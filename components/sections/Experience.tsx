import SectionWrapper from '@/components/SectionWrapper'
import Timeline, { type TimelineEntry } from '@/components/Timeline'

const EXPERIENCE: TimelineEntry[] = [
  {
    role: 'Software Engineer Intern',
    company: 'BMW Group',
    dates: 'August 2026 – December 2026',
    logo: '/images/BMW.webp',
    bullets: [
      'Software engineering for a high-voltage battery manufacturing plant + digital twins 🔋',
      'Automated time zone sync across 250+ KUKA robots with a PowerShell + Python tool used by 3+ teams, projecting $150K+ in annual savings.',
    ],
  },
  {
    role: 'Software Engineer Intern',
    company: 'American Express',
    dates: 'June 2026 – August 2026',
    logo: '/images/american-express-logo.png',
    bullets: [
      'Enterprise FinOps + Internal AI Consumption',
      'Built a Python ETL pipeline surfacing per-user AI token consumption that enabled renegotiation of the Devin AI enterprise contract, saving $1.5M.',
    ],
  },
  {
    role: 'Software Developer Intern',
    company: 'Wofford College',
    dates: 'September 2025 – May 2026',
    logo: '/images/wofford-terrier.png',
    bullets: [
      'Tutoring page + software testing + Workday integration 👨🏻‍💻',
      'Improved administrative workflows for 1,500+ users with ASP.NET web forms, cutting data-entry time by 30%.',
    ],
  },
  {
    role: 'Software Engineer Apprentice',
    company: 'Red Ventures',
    dates: 'June 2025 – August 2025',
    logo: '/images/red-ventures-logo.png',
    bullets: [
      'Travel services web app development',
      'Led a 4-person team to ship a live travel site on Vercel in 1 week, teaching Git to 4 first-time contributors.',
    ],
  },
  {
    role: 'Energy Systems Research',
    company: 'Wofford College',
    dates: 'May 2024 – May 2025',
    logo: '/images/wofford-terrier.png',
    bullets: [
      'Electrical grid data analysis + systems research',
      'Analyzed energy consumption for 1.4M+ users across 82.7 TWh and 30+ power companies, informing grid optimization efforts.',
    ],
  },
  {
    role: 'Engineering Intern',
    company: 'Montes Electric INC',
    dates: 'June 2023 – August 2023',
    logo: '/images/montes-electic-logo.png',
    bullets: [
      'Performed construction take-offs for underground wiring on 10+ solar farms by analyzing site plans and specifications, resulting in accurate material estimates that improved project planning.',
      'Designed an Excel-based payroll tracking system by automating calculations, resulting in over $1,000 in cost savings and improved budget efficiency.',
    ],
  },
]

export default function Experience() {
  return (
    <SectionWrapper id="experience">
      <h2 className="mb-12 text-3xl sm:text-4xl font-bold text-camo-900 tracking-tight">
        Experience
      </h2>
      <Timeline items={EXPERIENCE} />
    </SectionWrapper>
  )
}
