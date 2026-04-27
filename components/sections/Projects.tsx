'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, Trophy } from 'lucide-react'
import SectionWrapper from '@/components/SectionWrapper'
import ProjectCard from '@/components/ProjectCard'
import type { Project } from '@/components/ProjectCard'

const INVOICE_IMAGES = [
  '/juanjbsalas/images/invoicexchange/img1.png',
  '/juanjbsalas/images/invoicexchange/img2.png',
]

const SIMPLE_PROJECTS: Project[] = [
  {
    title: 'Planora',
    description:
      'A travel planning website for exploring destinations and organizing trip itineraries. Features destination browsing, trip scheduling, and a clean, map-friendly UI.',
    tech: ['HTML', 'Tailwind CSS', 'JavaScript'],
    image: '/juanjbsalas/images/placeholder-project.svg',
    githubUrl: 'https://github.com/juanjbsalas',
    liveUrl: 'https://juanjbsalas.github.io/Global-Voyage/',
  },
  {
    title: 'Open Seat',
    description:
      "A web scraper that monitors Wofford College's registration system and sends email notifications when a seat opens in a closed class section — saving students hours of manual checking.",
    tech: ['Python', 'Selenium', 'Flask', 'smtplib'],
    image: '/juanjbsalas/images/OpenSeat.png',
    githubUrl: 'https://github.com/juanjbsalas',
  },
  {
    title: 'CineScope',
    description:
      'A webapp that uses the OMDB API to fetch movie data, displaying ratings, cast, plot, and other info for any film — making it easy to look up what you want to watch.',
    tech: ['React', 'JavaScript', 'OMDB API', 'CSS'],
    image: '/juanjbsalas/images/cinescope.png',
    githubUrl: 'https://github.com/juanjbsalas',
  },
]

function InvoiceXchangeCard() {
  const [current, setCurrent] = useState(0)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const startTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current)
    timerRef.current = setInterval(() => {
      setCurrent((c) => (c + 1) % INVOICE_IMAGES.length)
    }, 5000)
  }

  useEffect(() => {
    startTimer()
    return () => { if (timerRef.current) clearInterval(timerRef.current) }
  }, [])

  const go = (index: number) => {
    setCurrent(index)
    startTimer()
  }

  const prev = () => go((current === 0 ? INVOICE_IMAGES.length - 1 : current - 1))
  const next = () => go((current + 1) % INVOICE_IMAGES.length)

  return (
    <div className="relative bg-white rounded-2xl border border-camo-100 border-l-4 border-l-camo-700 shadow-sm overflow-hidden mb-6">
      <div className="p-6 lg:p-8">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left: info */}
          <div className="flex flex-col gap-5">
            {/* Title + hackathon badge */}
            <div>
              <div className="flex items-center gap-3 mb-3 flex-wrap">
                <h3 className="text-2xl font-bold text-camo-900">InvoiceXchange</h3>
                <span className="flex items-center gap-1 px-2.5 py-0.5 bg-amber-50 text-amber-700 border border-amber-200 text-xs font-semibold rounded-full">
                  <Trophy size={11} />
                  Honorary Mention
                </span>
              </div>

              {/* Winthrop hackathon row */}
              <div className="flex items-center gap-2 mb-3">
                <div className="relative w-5 h-5 flex-shrink-0">
                  <Image
                    src="/juanjbsalas/images/winthrop.png"
                    alt="Winthrop University"
                    fill
                    className="object-contain"
                    sizes="20px"
                  />
                </div>
                <span className="text-xs font-semibold text-camo-600 uppercase tracking-wider">
                  Winthrop Hackathon
                </span>
              </div>

              <p className="text-camo-700 font-medium text-sm mb-2">
                A multi-sided invoice factoring platform for the agricultural supply chain.
              </p>
              <p className="text-camo-900/60 text-sm leading-relaxed">
                Suppliers get paid within 24 hours. Manufacturers keep their payment terms.
                Investors earn a predictable 8% APY on asset-backed deals. Built and pitched
                at Winthrop University&apos;s hackathon, where it earned an honorary mention.
              </p>
            </div>

            {/* Tech pills */}
            <div className="flex flex-wrap gap-1.5">
              {['Next.js', 'TypeScript', 'Supabase', 'Tailwind CSS'].map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-0.5 bg-camo-100 text-camo-700 text-xs font-medium rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right: auto-sliding image carousel */}
          <div className="flex flex-col gap-2">
            <p className="text-xs font-semibold text-camo-900/50 uppercase tracking-widest">Preview</p>
            <div className="relative rounded-lg overflow-hidden bg-camo-100 aspect-video">
              <Image
                src={INVOICE_IMAGES[current]}
                alt={`InvoiceXchange screenshot ${current + 1}`}
                fill
                className="object-cover transition-opacity duration-500"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <button
                onClick={prev}
                aria-label="Previous image"
                className="absolute left-2 top-1/2 -translate-y-1/2 p-1 rounded-full bg-white/80 hover:bg-white text-camo-700 shadow transition-colors"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                onClick={next}
                aria-label="Next image"
                className="absolute right-2 top-1/2 -translate-y-1/2 p-1 rounded-full bg-white/80 hover:bg-white text-camo-700 shadow transition-colors"
              >
                <ChevronRight size={16} />
              </button>
              <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1.5">
                {INVOICE_IMAGES.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => go(i)}
                    aria-label={`Go to image ${i + 1}`}
                    className={`w-1.5 h-1.5 rounded-full transition-colors ${
                      i === current ? 'bg-camo-700' : 'bg-white/70'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function HotelLensCard() {
  return (
    <article className="group flex flex-col bg-white rounded-xl border border-camo-100 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-camo-300">
      {/* Header image area with hackathon badge */}
      <div className="relative aspect-video bg-camo-100 overflow-hidden flex items-center justify-center">
        <Image
          src="/juanjbsalas/images/placeholder-project.svg"
          alt="HotelLens project screenshot"
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Hackathon badge overlay */}
        <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2 py-1 bg-white/90 backdrop-blur-sm rounded-md shadow-sm">
          <div className="relative w-4 h-4 flex-shrink-0">
            <Image
              src="/juanjbsalas/images/gtech.png"
              alt="Georgia Tech"
              fill
              className="object-contain"
              sizes="16px"
            />
          </div>
          <span className="text-xs font-semibold text-camo-800">Georgia Tech Hackathon</span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5 gap-3">
        <h3 className="font-semibold text-camo-900 text-lg leading-snug">HotelLens</h3>
        <p className="text-sm text-camo-900/65 leading-relaxed flex-1">
          A webapp helping travelers aged 18–21 find hotels that allow check-in under 21 —
          a surprisingly difficult problem for young adults. Built at Georgia Tech&apos;s hackathon.
        </p>
        <div className="flex flex-wrap gap-1.5">
          {['React', 'JavaScript', 'Tailwind CSS'].map((tag) => (
            <span key={tag} className="px-2 py-0.5 bg-camo-100 text-camo-700 text-xs font-medium rounded-full">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  )
}

const KOOZIE_SLIDES = [
  { type: 'video' as const, src: '/juanjbsalas/images/smartkoozie/2.mp4' },
  { type: 'image' as const, src: '/juanjbsalas/images/smartkoozie/anatomy.png' },
  { type: 'image' as const, src: '/juanjbsalas/images/smartkoozie/flow.png' },
  { type: 'image' as const, src: '/juanjbsalas/images/smartkoozie/overview.png' },
  { type: 'image' as const, src: '/juanjbsalas/images/smartkoozie/prototype.png' },
  { type: 'image' as const, src: '/juanjbsalas/images/smartkoozie/smartkoozieapp.png' },
]

function SmartKoozieCard() {
  const [current, setCurrent] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const id = setInterval(() => {
      setVisible(false)
      setTimeout(() => {
        setCurrent((c) => (c + 1) % KOOZIE_SLIDES.length)
        setVisible(true)
      }, 300)
    }, 3000)
    return () => clearInterval(id)
  }, [])

  const slide = KOOZIE_SLIDES[current]

  return (
    <article className="group flex flex-col bg-white rounded-xl border border-camo-100 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-camo-300">
      <div className="relative aspect-video bg-black overflow-hidden">
        <div className={`absolute inset-0 transition-opacity duration-300 ${visible ? 'opacity-100' : 'opacity-0'}`}>
        {slide.type === 'video' ? (
          <video
            key="koozie-video"
            src={slide.src}
            poster="/juanjbsalas/images/smartkoozie/poster.png"
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          />
        ) : (
          <Image
            key={slide.src}
            src={slide.src}
            alt="Smart Koozie"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        )}
        </div>
      </div>
      <div className="flex flex-col flex-1 p-5 gap-3">
        <h3 className="font-semibold text-camo-900 text-lg leading-snug">Smart Koozie</h3>
        <p className="text-sm text-camo-900/65 leading-relaxed flex-1">
          A Bluetooth-enabled drink cooler controlled via an iPhone app. Uses a Peltier module
          for active cooling and an Arduino Nano ESP32 for wireless communication via the RemoteXY platform.
        </p>
        <div className="flex flex-wrap gap-1.5">
          {['Arduino', 'C++', 'RemoteXY', 'Peltier Module'].map((tag) => (
            <span key={tag} className="px-2 py-0.5 bg-camo-100 text-camo-700 text-xs font-medium rounded-full">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  )
}

export default function Projects() {
  return (
    <SectionWrapper id="projects" className="bg-camo-100/30">
      <div className="mb-12">
        <p className="text-sm font-semibold text-camo-700 uppercase tracking-widest mb-2">
          Projects
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-camo-900 tracking-tight">
          Projects
        </h2>
        <p className="mt-3 text-camo-900/60 text-base max-w-xl">
          A selection of projects across web development and embedded systems.
        </p>
      </div>

      {/* InvoiceXchange — wide featured card */}
      <InvoiceXchangeCard />

      {/* Project grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <HotelLensCard />
        <SmartKoozieCard />
        {SIMPLE_PROJECTS.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </SectionWrapper>
  )
}
