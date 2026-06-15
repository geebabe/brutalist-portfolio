import { cn } from '@/lib/utils'
import { ReactNode } from 'react'

interface SectionWrapperProps {
  id?: string
  children: ReactNode
  className?: string
}

export function SectionWrapper({ id, children, className }: SectionWrapperProps) {
  return (
    <section id={id} className={cn('py-20 px-6', className)}>
      <div className="max-w-6xl mx-auto">
        {children}
      </div>
    </section>
  )
}
