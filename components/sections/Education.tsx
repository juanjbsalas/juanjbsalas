import SectionWrapper from '@/components/SectionWrapper'
import Timeline, { type TimelineEntry } from '@/components/Timeline'

const EDUCATION: TimelineEntry[] = [
  {
    role: 'BS Computer Science & Applied Mathematics',
    company: 'Wofford College',
    dates: '2023-2027',
    logo: '/images/wofford-terrier.png',
    bullets: [
      'Relevant courses: Data Structures & Algorithms, Algorithm Design & Analysis, Embedded Systems, Computer Architecture, Operating Systems, Theory of Computation, Applied AI, Complex Analysis, Modern Physics.',
    ],
  },
]

export default function Education() {
  return (
    <SectionWrapper id="education">
      <h2 className="mb-12 text-3xl sm:text-4xl font-bold text-camo-900 tracking-tight">
        Education
      </h2>
      <Timeline items={EDUCATION} />
    </SectionWrapper>
  )
}
