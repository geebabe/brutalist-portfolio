'use client'

import { motion } from 'framer-motion'
import { OrnamentDivider } from '@/components/ui/OrnamentDivider'
import experienceData from '@/content/experience.json'

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

const lineVariants = {
  hidden: { scaleY: 0, originY: 0 },
  visible: {
    scaleY: 1,
    transition: { duration: 1.5, ease: [0.16, 1, 0.3, 1] },
  },
}

export function Experience() {
  const sorted = [...experienceData].sort(
    (a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime()
  )

  return (
    <section id="experience" className="section-spacing px-6">
      <motion.div
        className="max-w-3xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
      >
        <motion.div variants={itemVariants}>
          <p className="eyebrow">◈ — A record of service</p>
          <h2 className="font-display text-4xl lg:text-5xl font-light italic text-parchment leading-tight mb-12">
            Experience
          </h2>
        </motion.div>

        <OrnamentDivider />

        <motion.div className="relative pl-10">
          <motion.div
            variants={lineVariants}
            className="absolute left-0 top-0 bottom-0 w-px bg-border-dim"
          />

          <div className="space-y-12">
            {sorted.map((job) => (
              <motion.div key={job.id} variants={itemVariants} className="relative">
                <span className="absolute -left-5 top-1 text-violet font-mono text-xs">◈</span>
                <div className="space-y-2 mb-4">
                  <h3 className="font-mono text-sm uppercase tracking-wide text-parchment">
                    {job.role}
                  </h3>
                  <p className="text-parchment-dim font-mono text-xs uppercase tracking-wide">
                    {job.company} · {new Date(job.startDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })} – {job.endDate ? new Date(job.endDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' }) : 'Present'} · {job.location}
                  </p>
                </div>
                <ul className="space-y-2 mb-4">
                  {job.highlights?.map((highlight, idx) => (
                    <li key={idx} className="flex gap-3 text-sm text-parchment-mid">
                      <span className="text-violet-dim flex-shrink-0 mt-1">◈</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
                {job.tags && (
                  <p className="text-parchment-dim font-mono text-xs uppercase tracking-wide">
                    {job.tags.join(' · ')}
                  </p>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
