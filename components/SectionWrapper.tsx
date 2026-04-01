'use client'

import { useEffect, useRef } from 'react'

interface SectionWrapperProps {
  id: string
  className?: string
  children: React.ReactNode
}

/**
 * Wraps a section with a fade-in-on-scroll effect using IntersectionObserver.
 * Also applies consistent vertical padding and max-width centering.
 */
export default function SectionWrapper({ id, className = '', children }: SectionWrapperProps) {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('section-visible')
          observer.unobserve(el)
        }
      },
      { threshold: 0.08 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id={id}
      ref={ref}
      className={`section-hidden py-24 px-6 lg:px-8 ${className}`}
    >
      <div className="max-w-6xl mx-auto">{children}</div>
    </section>
  )
}
