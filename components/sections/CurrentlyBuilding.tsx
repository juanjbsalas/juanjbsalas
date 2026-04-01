import { Github, ExternalLink, GitCommit } from 'lucide-react'
import SectionWrapper from '@/components/SectionWrapper'

const PROJECT = {
  name: 'InvoiceXchange',
  tagline: 'A multi-sided invoice factoring platform for the agricultural supply chain.',
  description:
    'invoiceXchange is a multi-sided invoice factoring platform for the agricultural supply chain. Suppliers get paid within 24 hours. Manufacturers keep their payment terms. Investors earn a predictable 8% APY on asset backed deals.',
  progress: 90,
  status: 'Active development',
  tech: ['Next.js', 'TypeScript', 'Supabase', 'Tailwind CSS'],
  devLogs: [
    'Set up Next.js 14 project with App Router and TypeScript',
    'Designed database schema for clients, invoices, and line items',
    'Implemented authentication flow with session management',
    'Building invoice creation UI with live preview',
  ],
  githubUrl: 'https://github.com/juanjbsalas',
  liveUrl: '',
}

export default function CurrentlyBuilding() {
  return (
    <SectionWrapper id="building" className="bg-camo-100/40">
      {/* Section label */}
      <div className="flex items-center gap-3 mb-8">
        <div className="w-2 h-2 rounded-full bg-camo-500 animate-pulse" aria-hidden="true" />
        <span className="text-sm font-semibold text-camo-700 uppercase tracking-widest">
          Currently Building
        </span>
      </div>

      {/* Featured card */}
      <div className="relative bg-white rounded-2xl border-l-4 border-l-camo-700 border border-camo-100 shadow-sm overflow-hidden">
        <div className="p-8 lg:p-10">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left: info */}
            <div className="flex flex-col gap-5">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h2 className="text-2xl font-bold text-camo-900">{PROJECT.name}</h2>
                  <span className="px-2.5 py-0.5 bg-camo-100 text-camo-700 text-xs font-semibold rounded-full">
                    {PROJECT.status}
                  </span>
                </div>
                <p className="text-camo-700 font-medium text-sm mb-2">{PROJECT.tagline}</p>
                <p className="text-camo-900/60 text-sm leading-relaxed">{PROJECT.description}</p>
              </div>

              {/* Progress bar */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold text-camo-900/60 uppercase tracking-wider">
                    Progress
                  </span>
                  <span className="text-xs font-bold text-camo-700">{PROJECT.progress}%</span>
                </div>
                <div className="h-2 bg-camo-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-camo-700 rounded-full transition-all duration-1000"
                    style={{ width: `${PROJECT.progress}%` }}
                    role="progressbar"
                    aria-valuenow={PROJECT.progress}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-label="Project completion"
                  />
                </div>
              </div>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-1.5">
                {PROJECT.tech.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-0.5 bg-camo-100 text-camo-700 text-xs font-medium rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex items-center gap-5">
                <a
                  href={PROJECT.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="InvoiceXchange GitHub repository"
                  className="flex items-center gap-2 text-sm font-medium text-camo-700 hover:text-camo-900 transition-colors"
                >
                  <Github size={16} />
                  View on GitHub
                </a>
                {PROJECT.liveUrl && (
                  <a
                    href={PROJECT.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="InvoiceXchange live demo"
                    className="flex items-center gap-2 text-sm font-medium text-camo-700 hover:text-camo-900 transition-colors"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                )}
              </div>
            </div>

            {/* Right: dev logs */}
            <div className="flex flex-col gap-3">
              <h3 className="text-xs font-semibold text-camo-900/50 uppercase tracking-widest mb-1">
                Dev Log
              </h3>
              <ul className="space-y-3">
                {PROJECT.devLogs.map((log, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <GitCommit
                      size={15}
                      className="text-camo-500 flex-shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <span className="text-sm text-camo-900/70 leading-relaxed">{log}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Decorative accent */}
        <div
          className="absolute top-0 right-0 w-40 h-40 bg-camo-100 rounded-full -translate-y-20 translate-x-20 opacity-50"
          aria-hidden="true"
        />
      </div>
    </SectionWrapper>
  )
}
