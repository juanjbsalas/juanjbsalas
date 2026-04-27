import Image from 'next/image'

export interface Project {
  title: string
  description: string
  tech: string[]
  image: string
  githubUrl: string
  liveUrl?: string
}

interface ProjectCardProps {
  project: Project
  featured?: boolean
}

export default function ProjectCard({ project, featured = false }: ProjectCardProps) {
  const { title, description, tech, image } = project

  return (
    <article
      className={`group flex flex-col bg-white rounded-xl border border-camo-100 overflow-hidden
        transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-camo-300
        ${featured ? 'ring-1 ring-camo-700/20' : ''}`}
    >
      {/* Project image */}
      <div className="relative aspect-video bg-camo-100 overflow-hidden">
        <Image
          src={image}
          alt={`${title} project screenshot`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {featured && (
          <span className="absolute top-3 left-3 px-2 py-0.5 bg-camo-700 text-white text-xs font-medium rounded">
            Featured
          </span>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5 gap-3">
        <h3 className="font-semibold text-camo-900 text-lg leading-snug">{title}</h3>
        <p className="text-sm text-camo-900/65 leading-relaxed flex-1">{description}</p>

        {/* Tech stack pills */}
        <div className="flex flex-wrap gap-1.5">
          {tech.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 bg-camo-100 text-camo-700 text-xs font-medium rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

      </div>
    </article>
  )
}
