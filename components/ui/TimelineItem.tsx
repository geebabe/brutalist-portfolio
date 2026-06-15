import { Experience } from '@/lib/types'
import { ExternalLink } from 'lucide-react'

interface TimelineItemProps extends Experience {
  index?: number
}

export function TimelineItem({ role, company, companyUrl, startDate, endDate, highlights, tags, index = 0 }: TimelineItemProps) {
  const isEven = index % 2 === 0

  return (
    <div className="relative mb-12">
      {/* Timeline dot */}
      <div className="absolute left-1/2 -translate-x-1/2 z-10">
        <div className="w-4 h-4 rounded-full bg-accent ring-4 ring-background" />
      </div>

      {/* Content container - alternates left/right */}
      <div className={`flex ${isEven ? 'justify-start' : 'justify-end'}`}>
        <div className="w-[calc(50%-20px)]">
          <div className="bg-surface rounded-lg p-6 border border-border hover:border-accent/50 transition-colors shadow-sm">
            {/* Header: Role and Company */}
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-foreground mb-1">{role}</h3>
              <a
                href={companyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-accent hover:text-accent-2 transition-colors text-sm font-medium"
              >
                {company}
                <ExternalLink size={14} />
              </a>
            </div>

            {/* Date range */}
            <div className="text-xs text-muted font-mono mb-4 pb-4 border-b border-border/50">
              {startDate} – {endDate}
            </div>

            {/* Highlights */}
            <ul className="space-y-2 mb-4">
              {highlights.map((highlight, idx) => (
                <li key={idx} className="text-sm text-muted leading-relaxed flex gap-2">
                  <span className="text-accent flex-shrink-0 mt-1">›</span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5">
              {tags.map((tag) => (
                <span key={tag} className="text-xs px-2.5 py-1 rounded-md bg-background border border-border/50 text-muted hover:border-accent/30 transition-colors">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
