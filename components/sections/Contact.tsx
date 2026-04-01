'use client'

import { Mail, Github, Linkedin, FileText, ExternalLink } from 'lucide-react'
import SectionWrapper from '@/components/SectionWrapper'

const CONTACT_LINKS = [
  {
    icon: Mail,
    label: 'Email',
    href: 'mailto:jbsalas05@gmail.com',
    display: 'jbsalas05@gmail.com',
    external: false,
  },
  {
    icon: Github,
    label: 'GitHub',
    href: 'https://github.com/juanjbsalas',
    display: 'github.com/juanjbsalas',
    external: true,
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/juanjbsalas',
    display: 'linkedin.com/in/juanjbsalas',
    external: true,
  },
]

export default function Contact() {
  return (
    <SectionWrapper id="contact" className="bg-camo-100/30">
      {/* Section heading */}
      <div className="mb-12 max-w-xl">
        <p className="text-sm font-semibold text-camo-700 uppercase tracking-widest mb-2">
          Contact
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-camo-900 tracking-tight mb-3">
          Let&apos;s connect
        </h2>
        <p className="text-camo-900/60 text-base leading-relaxed">
          I&apos;m actively looking for software engineering internships for Summer 2025. Whether
          you have an opportunity, a question, or just want to say hi — my inbox is open.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Contact links */}
        <div className="flex flex-col gap-4">
          {CONTACT_LINKS.map(({ icon: Icon, label, href, display, external }) => (
            <a
              key={label}
              href={href}
              target={external ? '_blank' : undefined}
              rel={external ? 'noopener noreferrer' : undefined}
              aria-label={label}
              className="flex items-center gap-4 p-4 bg-white rounded-xl border border-camo-100 hover:border-camo-300 hover:shadow-sm transition-all group"
            >
              <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-camo-100 text-camo-700 group-hover:bg-camo-700 group-hover:text-white transition-colors flex-shrink-0">
                <Icon size={18} aria-hidden="true" />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-xs font-semibold text-camo-900/40 uppercase tracking-wider">
                  {label}
                </span>
                <span className="text-sm font-medium text-camo-900 truncate">{display}</span>
              </div>
              {external && (
                <ExternalLink
                  size={14}
                  className="ml-auto text-camo-900/30 group-hover:text-camo-700 flex-shrink-0 transition-colors"
                  aria-hidden="true"
                />
              )}
            </a>
          ))}

          {/* Resume download button */}
          <a
            href="/resume.pdf"
            download="Juan_Salas_Resume.pdf"
            className="flex items-center justify-center gap-2 w-full px-6 py-3.5 bg-camo-700 text-white font-medium rounded-xl hover:bg-camo-900 transition-colors text-sm mt-2"
          >
            <FileText size={16} aria-hidden="true" />
            Download Resume
          </a>
        </div>

        {/* Embedded resume viewer */}
        <div className="flex flex-col gap-3">
          <h3 className="text-xs font-semibold text-camo-900/50 uppercase tracking-widest">
            Resume Preview
          </h3>
          <div className="relative w-full rounded-xl border border-camo-100 overflow-hidden bg-white shadow-sm" style={{ height: '480px' }}>
            <iframe
              src="/resume.pdf"
              title="Juan Salas Resume"
              className="w-full h-full"
              aria-label="Juan Salas resume PDF preview"
            />
            {/* Fallback for browsers that block PDF iframes */}
            <noscript>
              <div className="absolute inset-0 flex items-center justify-center bg-camo-100">
                <a
                  href="/resume.pdf"
                  className="text-camo-700 underline text-sm"
                >
                  View resume PDF
                </a>
              </div>
            </noscript>
          </div>
          <p className="text-xs text-camo-900/40 text-center">
            Can&apos;t see the preview?{' '}
            <a href="/resume.pdf" download className="text-camo-700 hover:underline">
              Download directly
            </a>
          </p>
        </div>
      </div>
    </SectionWrapper>
  )
}
