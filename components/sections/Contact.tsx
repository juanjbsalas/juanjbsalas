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
      <div className="mb-12 text-center">
        <p className="text-sm font-semibold text-camo-700 uppercase tracking-widest mb-2">
          Contact
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-camo-900 tracking-tight mb-3">
          Let&apos;s connect
        </h2>
        <p className="text-camo-900/60 text-base leading-relaxed max-w-xl mx-auto">
          I&apos;m actively looking for software engineering internships for Fall 2026/Spring 2027. Whether
          you have an opportunity, a question, or just want to say hi — my inbox is open.
        </p>
      </div>

      <div className="flex flex-col gap-4 max-w-md mx-auto w-full">
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

        <a
          href="/juanjbsalas/juan_salas_resume.pdf"
          download="Juan_Salas_Resume.pdf"
          className="flex items-center justify-center gap-2 w-full px-6 py-3.5 bg-camo-700 text-white font-medium rounded-xl hover:bg-camo-900 transition-colors text-sm mt-2"
        >
          <FileText size={16} aria-hidden="true" />
          Download Resume
        </a>
      </div>
    </SectionWrapper>
  )
}
