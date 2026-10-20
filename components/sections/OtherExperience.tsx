import SectionWrapper from '@/components/SectionWrapper'
import Timeline, { type TimelineEntry } from '@/components/Timeline'

const OTHER_EXPERIENCE: TimelineEntry[] = [
  {
    role: 'Head Resident Assistant',
    company: 'Wofford College',
    dates: 'August 2025 – May 2026',
    logo: '/images/wofford-terrier.png',
    bullets: ['Managed 10+ RAs across 400+ residents; received RA of the Year award (for a second time) 🏆'],
  },
  {
    role: 'Resident Assistant',
    company: 'Wofford College',
    dates: 'August 2024 – May 2025',
    logo: '/images/wofford-terrier.png',
    bullets: ['Received First-Year RA of the Year award 🏆'],
  },
  {
    role: 'Information Technology Help Desk',
    company: 'Wofford College',
    // TODO: add dates
    dates: '',
    logo: '/images/wofford-terrier.png',
    bullets: [
      'Provided technical support to students, faculty, and staff, troubleshooting hardware, software, account, and network issues across campus.',
    ],
  },
]

export default function OtherExperience() {
  return (
    <SectionWrapper id="other-experience" className="bg-camo-100/30">
      <h2 className="mb-12 text-3xl sm:text-4xl font-bold text-camo-900 tracking-tight">
        Other Experience
      </h2>
      <Timeline items={OTHER_EXPERIENCE} />
    </SectionWrapper>
  )
}
