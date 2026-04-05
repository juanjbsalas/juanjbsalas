'use client'

import Image from 'next/image'

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

export default function Hero() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-6 lg:px-8 pt-16">
      <div className="max-w-3xl mx-auto">
        {/* Availability badges */}
        <div
          className="flex flex-col items-center gap-2 mb-8 animate-fade-in"
          style={{ animationFillMode: 'both' }}
        >
          {/* Open badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-green-300 bg-green-50 text-xs font-medium text-green-700">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" aria-hidden="true" />
            Open for Fall 2026 and Spring 2027 internships/roles
          </div>
          {/* Closed badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-red-300 bg-red-50 text-xs font-medium text-red-600">
            <span className="w-2 h-2 rounded-full bg-red-500" aria-hidden="true" />
            Closed for Summer 2026 Internships
          </div>
        </div>

        {/* Name */}
        <h1
          className="text-5xl sm:text-6xl lg:text-7xl font-bold text-camo-900 tracking-tight leading-none mb-5 animate-fade-up"
          style={{ animationFillMode: 'both', animationDelay: '100ms' }}
        >
          Juan Salas
        </h1>

        {/* Subtitle */}
        <p
          className="flex items-center justify-center gap-2 flex-wrap text-lg sm:text-xl text-camo-900/60 font-medium mb-4 animate-fade-up"
          style={{ animationFillMode: 'both', animationDelay: '200ms' }}
        >
          CS &amp; Applied Math ·&nbsp;
          <span className="inline-flex items-center gap-1.5">
            <Image
              src="/juanjbsalas/images/wofford-terrier.png"
              alt="Wofford College Terrier"
              width={24}
              height={24}
              className="inline-block object-contain"
            />
            Wofford College
          </span>
        </p>

        {/* Tagline */}
        <p
          className="text-base sm:text-lg text-camo-500 italic mb-10 animate-fade-up"
          style={{ animationFillMode: 'both', animationDelay: '300ms' }}
        >
          Building invoice investment marketplace using Typescript + AI technologies
        </p>

        {/* CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up"
          style={{ animationFillMode: 'both', animationDelay: '400ms' }}
        >
          <button
            onClick={() => scrollTo('experience')}
            className="w-full sm:w-auto px-7 py-3 bg-camo-700 text-white font-medium rounded-lg hover:bg-camo-900 transition-colors text-sm"
          >
            View Experience
          </button>
          <button
            onClick={() => scrollTo('contact')}
            className="w-full sm:w-auto px-7 py-3 border border-camo-700 text-camo-700 font-medium rounded-lg hover:bg-camo-700 hover:text-white transition-colors text-sm"
          >
            Contact Me
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-fade-in"
        style={{ animationFillMode: 'both', animationDelay: '700ms' }}
        aria-hidden="true"
      >
        <span className="text-xs text-camo-900/30 tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-camo-300 to-transparent" />
      </div>
    </div>
  )
}
