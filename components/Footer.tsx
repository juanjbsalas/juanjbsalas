import { Github, Linkedin } from 'lucide-react'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-camo-100 bg-cream py-8 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-camo-900/50">
          © {year} Juan Salas. All rights reserved.
        </p>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/juanjbsalas"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Juan Salas on GitHub"
            className="text-camo-900/50 hover:text-camo-700 transition-colors"
          >
            <Github size={18} />
          </a>
          <a
            href="https://linkedin.com/in/juanjbsalas"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Juan Salas on LinkedIn"
            className="text-camo-900/50 hover:text-camo-700 transition-colors"
          >
            <Linkedin size={18} />
          </a>
        </div>
      </div>
    </footer>
  )
}
