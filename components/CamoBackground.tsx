'use client'

import { useEffect, useRef, useState, useCallback } from 'react'

interface CamoShape {
  id: number
  src: string
  left: number    // vw %
  top: number     // vh %
  size: number    // px
  rotation: number
  opacity: number
  speed: number   // parallax multiplier
}

function rand(min: number, max: number) {
  return min + Math.random() * (max - min)
}

function generateShapes(): CamoShape[] {
  // 3×3 grid with small jitter for a natural-but-even spread
  return Array.from({ length: 9 }, (_, i) => {
    const col = i % 3
    const row = Math.floor(i / 3)
    return {
      id: i,
      src: `/juanjbsalas/images/camo/camo${i + 1}.png`,
      left: col * 33 + 5 + rand(-4, 4),   // cols at ~5%, ~38%, ~71% + jitter
      top: row * 33 + rand(-5, 5),         // rows at ~0%, ~33%, ~66% + jitter
      size: rand(160, 380),
      rotation: 0,
      opacity: rand(0.04, 0.10),
      speed: rand(0.05, 0.35),
    }
  })
}

export default function CamoBackground() {
  const [shapes, setShapes] = useState<CamoShape[]>([])
  const shapeRefs = useRef<(HTMLDivElement | null)[]>([])
  const shapesRef = useRef<CamoShape[]>([])
  const rafRef = useRef<number>(0)
  const lastSwapScrollRef = useRef(0)

  const handleScroll = useCallback(() => {
    const scrollY = window.scrollY

    // Direct DOM mutation for parallax — no React re-render
    shapeRefs.current.forEach((el, i) => {
      const shape = shapesRef.current[i]
      if (!el || !shape) return
      const ty = -scrollY * shape.speed
      el.style.transform = `translateY(${ty}px)`
    })

    // Periodic swap: one shape repositions every ~600px of scroll
    if (scrollY - lastSwapScrollRef.current > 600) {
      lastSwapScrollRef.current = scrollY
      setShapes(prev => {
        if (prev.length === 0) return prev
        const next = [...prev]
        const idx = Math.floor(Math.random() * next.length)
        next[idx] = {
          ...next[idx],
          left: rand(5, 85),
          top: rand(80, 115),
          rotation: 0,
          opacity: rand(0.04, 0.10),
        }
        shapesRef.current = next
        return next
      })
    }
  }, [])

  useEffect(() => {
    const initial = generateShapes()
    setShapes(initial)
    shapesRef.current = initial

    const onScroll = () => {
      cancelAnimationFrame(rafRef.current)
      rafRef.current = requestAnimationFrame(handleScroll)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(rafRef.current)
    }
  }, [handleScroll])

  if (shapes.length === 0) return null

  return (
    <div
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: -1,
        overflow: 'hidden',
        pointerEvents: 'none',
      }}
    >
      {shapes.map((shape, i) => (
        <div
          key={shape.id}
          ref={el => { shapeRefs.current[i] = el }}
          style={{
            position: 'absolute',
            left: `${shape.left}%`,
            top: `${shape.top}vh`,
            width: shape.size,
            height: shape.size,
            opacity: shape.opacity,
            transform: 'translateY(0px)',
            transition: 'opacity 0.8s ease',
            willChange: 'transform',
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={shape.src}
            alt=""
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'contain',
            }}
          />
        </div>
      ))}
    </div>
  )
}
