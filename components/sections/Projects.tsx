'use client'

import { motion } from 'framer-motion'
import { OrnamentDivider } from '@/components/ui/OrnamentDivider'
import projectsData from '@/content/projects.json'
import Link from 'next/link'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
  },
}

export function Projects() {
  const featured = projectsData.filter((p) => p.featured).slice(0, 6)

  return (
    <section id="projects" className="section-spacing px-6">
      <motion.div
        className="max-w-3xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
      >
        <motion.div variants={itemVariants}>
          <p className="eyebrow">◈ — The collected works</p>
          <div className="flex justify-between items-baseline gap-8 mb-12">
            <h2 className="font-display text-4xl lg:text-5xl font-light italic text-parchment leading-tight">
              Of Systems Built
            </h2>
            <Link href="/projects" className="text-violet-dim hover:text-violet-bright transition-colors duration-300 font-mono text-xs uppercase tracking-ritual whitespace-nowrap">
              View all
            </Link>
          </div>
        </motion.div>

        <OrnamentDivider />

        <div className="space-y-px mb-12">
          {featured.map((project) => (
            <motion.a
              key={project.id}
              href={`/projects/${project.id}`}
              variants={itemVariants}
              className="block group border-l border-violet-dim hover:border-violet transition-colors duration-300 py-6 pl-6 pr-4"
            >
              <div className="flex justify-between items-start gap-4 mb-2">
                <h3 className="font-mono text-sm uppercase tracking-wide text-parchment group-hover:text-violet-bright transition-colors">
                  {project.title}
                </h3>
                <span className="text-violet-dim font-mono text-xs whitespace-nowrap flex-shrink-0">
                  {project.year}
                </span>
              </div>
              <p className="text-parchment-mid text-sm leading-relaxed mb-3">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags?.slice(0, 3).map((tag) => (
                  <span key={tag} className="text-violet-dim font-mono text-xs uppercase tracking-wide">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
