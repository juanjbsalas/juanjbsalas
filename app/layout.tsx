import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'
import CamoBackground from '@/components/CamoBackground'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://juansalas.dev'),
  title: 'Juan Salas | Software Engineer',
  description:
    'CS & Applied Math student at Wofford College. Building full-stack web apps and software tools. Open to software engineering internships.',
  keywords: [
    'Juan Salas',
    'software engineer',
    'portfolio',
    'Wofford College',
    'internship',
    'full-stack',
    'web development',
  ],
  authors: [{ name: 'Juan Salas', url: 'https://github.com/juanjbsalas' }],
  openGraph: {
    title: 'Juan Salas | Software Engineer',
    description:
      'CS & Applied Math student at Wofford College. Building full-stack web apps and software tools.',
    url: 'https://juansalas.dev',
    siteName: 'Juan Salas Portfolio',
    // Preview image comes from app/opengraph-image.tsx
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Juan Salas | Software Engineer',
    description:
      'CS & Applied Math student at Wofford College. Building full-stack web apps and software tools.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="min-h-screen bg-cream">
        <CamoBackground />
        {children}
      </body>
    </html>
  )
}
