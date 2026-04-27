'use client'

import { Lock } from 'lucide-react'
import SectionWrapper from '@/components/SectionWrapper'

const PROJECTS = [
  {
    name: '🌅 SunsetWatch',
    platform: 'iOS App',
    description:
      "An iOS app that tracks and notifies users of the best time to go outside for a sunset. Uses the device's location alongside live weather models to predict optimal sunset conditions throughout the day.",
    status: 'In Progress',
    tech: ['Swift', 'SwiftUI', 'CoreLocation', 'WeatherKit'],
  },
  {
    name: '🏡 EstateWatch',
    platform: 'Startup',
    description:
      'A startup focused on streamlining the estate probate process end-to-end. More details are limited for business reasons — stay tuned.',
    status: 'Stealth',
    tech: [],
  },
]

export default function CurrentlyBuilding() {
  return (
    <SectionWrapper id="building" className="bg-camo-100/40">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-2 h-2 rounded-full bg-camo-500 animate-pulse" aria-hidden="true" />
        <span className="text-sm font-semibold text-camo-700 uppercase tracking-widest">
          Currently Building
        </span>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        {PROJECTS.map((project) => (
          <div
            key={project.name}
            className="bg-white rounded-xl border border-camo-100 border-l-4 border-l-camo-500 p-6 flex flex-col gap-4"
          >
            <div>
              <div className="flex items-center gap-2 mb-1">
                <h3 className="text-lg font-bold text-camo-900">{project.name}</h3>
                <span className="px-2 py-0.5 text-xs font-semibold rounded-full bg-camo-100 text-camo-700">
                  {project.status}
                </span>
              </div>
              <p className="text-xs font-medium text-camo-500 mb-2">{project.platform}</p>
              <p className="text-sm text-camo-900/60 leading-relaxed">{project.description}</p>
            </div>

            {project.tech.length > 0 && (
              <div className="flex flex-wrap gap-1.5">
                {project.tech.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-0.5 bg-camo-100 text-camo-700 text-xs font-medium rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {project.status === 'Stealth' && (
              <div className="flex items-center gap-1.5 text-xs text-camo-900/40">
                <Lock size={12} />
                <span>Details withheld for business reasons</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </SectionWrapper>
  )
}
