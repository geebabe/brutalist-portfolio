import { Project } from '@/lib/types'
import { ExternalLink, Github } from 'lucide-react'
import Image from 'next/image'

export function ProjectCard(project: Project) {
  return (
    <article className="group relative rounded-xl overflow-hidden border border-border bg-surface hover:border-accent/50 transition-all duration-300 hover:-translate-y-1">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={project.thumbnail}
          alt={project.title}
          width={400}
          height={225}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent" />
      </div>
      <div className="p-6">
        <h3 className="font-semibold text-foreground">{project.title}</h3>
        <p className="text-sm text-muted mt-2 line-clamp-2">{project.description}</p>
        <div className="flex flex-wrap gap-2 mt-4">
          {project.tags.map((tag) => (
            <span key={tag} className="text-xs px-2 py-1 rounded-full bg-background border border-border text-muted">
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-3 mt-5">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-accent hover:text-accent-2 transition-colors"
          >
            <Github size={16} />
            Code
          </a>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-accent hover:text-accent-2 transition-colors"
            >
              <ExternalLink size={16} />
              Live
            </a>
          )}
        </div>
      </div>
    </article>
  )
}
