import TimelineItem from '@/components/TimelineItem'

export interface TimelineEntry {
  role: string
  company: string
  dates: string
  logo?: string
  bullets?: string[]
}

export default function Timeline({ items }: { items: TimelineEntry[] }) {
  return (
    <div>
      {items.map((item, i) => (
        <TimelineItem
          key={i}
          role={item.role}
          company={item.company}
          dates={item.dates}
          logo={item.logo}
          bullets={item.bullets}
          isLast={i === items.length - 1}
        />
      ))}
    </div>
  )
}
