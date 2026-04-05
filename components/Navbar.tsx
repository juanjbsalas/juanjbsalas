'use client'

import { useState, useEffect } from 'react'
import { Menu, X, FileText } from 'lucide-react'

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

const SECTION_IDS = ['home', 'experience', 'projects', 'about', 'contact']

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home')
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Track scroll position for navbar background
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Scroll spy using IntersectionObserver
  useEffect(() => {
    const observers: IntersectionObserver[] = []

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id)
        },
        { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
      )
      observer.observe(el)
      observers.push(observer)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [])

  const handleNavClick = (href: string) => {
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-cream/90 backdrop-blur-md shadow-sm border-b border-camo-100'
          : 'bg-transparent'
      }`}
      aria-label="Main navigation"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Name */}
          <button
            onClick={() => handleNavClick('#home')}
            className="text-camo-900 font-semibold text-lg tracking-tight hover:text-camo-700 transition-colors"
            aria-label="Go to top"
          >
            JS
          </button>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map(({ label, href }) => {
              const sectionId = href.replace('#', '')
              const isActive = activeSection === sectionId
              return (
                <button
                  key={href}
                  onClick={() => handleNavClick(href)}
                  className={`text-sm font-medium transition-colors relative pb-0.5 ${
                    isActive
                      ? 'text-camo-700'
                      : 'text-camo-900/70 hover:text-camo-700'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-camo-700 rounded-full" />
                  )}
                </button>
              )
            })}

            {/* Resume download button */}
            <a
              href="/resume.pdf"
              download="Juan_Salas_Resume.pdf"
              className="flex items-center gap-1.5 px-4 py-1.5 text-sm font-medium border border-camo-700 text-camo-700 rounded-md hover:bg-camo-700 hover:text-white transition-colors"
              aria-label="Download resume PDF"
            >
              <FileText size={14} />
              Resume
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 text-camo-900 hover:text-camo-700 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="md:hidden bg-cream/95 backdrop-blur-md border-b border-camo-100 px-6 py-4 flex flex-col gap-4">
          {NAV_LINKS.map(({ label, href }) => {
            const sectionId = href.replace('#', '')
            const isActive = activeSection === sectionId
            return (
              <button
                key={href}
                onClick={() => handleNavClick(href)}
                className={`text-left text-base font-medium py-1 transition-colors ${
                  isActive ? 'text-camo-700' : 'text-camo-900/70 hover:text-camo-700'
                }`}
              >
                {label}
              </button>
            )
          })}
          <a
            href="/resume.pdf"
            download="Juan_Salas_Resume.pdf"
            className="flex items-center gap-2 w-fit px-4 py-2 text-sm font-medium border border-camo-700 text-camo-700 rounded-md hover:bg-camo-700 hover:text-white transition-colors"
          >
            <FileText size={14} />
            Download Resume
          </a>
        </div>
      )}
    </nav>
  )
}
