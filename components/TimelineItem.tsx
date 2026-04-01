import Image from 'next/image'

interface TimelineItemProps {
  role: string
  company: string
  dates: string
  logo?: string
  bullets?: string[]
  isLast?: boolean
}

export default function TimelineItem({
  role,
  company,
  dates,
  logo,
  bullets,
  isLast = false,
}: TimelineItemProps) {
  return (
    <div className="relative pl-8">
      {/* Vertical line */}
      {!isLast && (
        <div className="absolute left-[11px] top-5 bottom-0 w-px bg-camo-100" aria-hidden="true" />
      )}

      {/* Dot marker */}
      <div
        className="absolute left-0 top-1.5 w-[22px] h-[22px] rounded-full border-2 border-camo-700 bg-cream flex items-center justify-center"
        aria-hidden="true"
      >
        <div className="w-2 h-2 rounded-full bg-camo-700" />
      </div>

      {/* Content */}
      <div className="pb-8">
        <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
          <div>
            <h3 className="font-semibold text-camo-900 text-lg">{role}</h3>
            <div className="flex items-center gap-2 mt-0.5">
              {logo && (
                <div className="relative w-5 h-5 flex-shrink-0">
                  <Image
                    src={logo}
                    alt={`${company} logo`}
                    fill
                    className="object-contain"
                    sizes="20px"
                  />
                </div>
              )}
              <p className="text-camo-700 font-medium text-sm">{company}</p>
            </div>
          </div>
          <time className="text-sm text-camo-900/50 whitespace-nowrap">{dates}</time>
        </div>

        {bullets && bullets.length > 0 && (
          <ul className="mt-3 space-y-2">
            {bullets.map((bullet, i) => (
              <li key={i} className="flex gap-2 text-sm text-camo-900/70 leading-relaxed">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-camo-500 flex-shrink-0" aria-hidden="true" />
                {bullet}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}
