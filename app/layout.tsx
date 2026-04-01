import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://juanjbsalas.github.io'),
  title: 'Juan Salas — Software Engineer',
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
    title: 'Juan Salas — Software Engineer',
    description:
      'CS & Applied Math student at Wofford College. Building full-stack web apps and software tools.',
    url: 'https://juanjbsalas.github.io',
    siteName: 'Juan Salas Portfolio',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Juan Salas — Software Engineer',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Juan Salas — Software Engineer',
    description:
      'CS & Applied Math student at Wofford College. Building full-stack web apps and software tools.',
    images: ['/images/og-image.png'],
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
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen bg-cream">{children}</body>
    </html>
  )
}
