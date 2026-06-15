import { ReactNode } from 'react'

interface SkillBadgeProps {
  name: string
  icon?: ReactNode
}

export function SkillBadge({ name, icon }: SkillBadgeProps) {
  return (
    <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-background border border-border text-sm text-muted hover:border-accent hover:text-foreground transition-colors">
      {icon}
      {name}
    </span>
  )
}
