'use client'

import { useState, useEffect } from 'react'
import { Sun, Moon } from 'lucide-react'

/**
 * Light/dark switch. Follows the system setting until the visitor picks a theme,
 * then remembers their choice in localStorage.
 */
export default function ThemeToggle() {
  const [dark, setDark] = useState<boolean | null>(null)

  useEffect(() => {
    setDark(document.documentElement.classList.contains('dark'))

    // Keep following the system setting while the visitor hasn't chosen
    const media = window.matchMedia('(prefers-color-scheme: dark)')
    const onSystemChange = (e: MediaQueryListEvent) => {
      let saved: string | null = null
      try { saved = localStorage.getItem('theme') } catch {}
      if (saved) return
      document.documentElement.classList.toggle('dark', e.matches)
      setDark(e.matches)
    }
    media.addEventListener('change', onSystemChange)
    return () => media.removeEventListener('change', onSystemChange)
  }, [])

  const toggle = () => {
    const next = !dark
    document.documentElement.classList.toggle('dark', next)
    try { localStorage.setItem('theme', next ? 'dark' : 'light') } catch {}
    setDark(next)
  }

  return (
    <button
      onClick={toggle}
      aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={dark ? 'Switch to light mode' : 'Switch to dark mode'}
      className="p-2 rounded-lg text-camo-900/70 hover:text-camo-700 hover:bg-camo-100 transition-colors"
    >
      {/* Render nothing until mounted so the icon matches the real theme */}
      {dark === null ? <span className="block w-5 h-5" /> : dark ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  )
}
