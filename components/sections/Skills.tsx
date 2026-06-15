'use client'

import { motion } from 'framer-motion'
import { OrnamentDivider } from '@/components/ui/OrnamentDivider'
import skillsData from '@/content/skills.json'

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

export function Skills() {
  return (
    <section id="skills" className="section-spacing px-6">
      <motion.div
        className="max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
      >
        <motion.div variants={itemVariants}>
          <p className="eyebrow">◈ — The disciplines</p>
          <h2 className="font-display text-4xl lg:text-5xl font-light italic text-parchment leading-tight mb-12">
            On the Acquisition of Knowledge
          </h2>
        </motion.div>

        <OrnamentDivider />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {skillsData.map((category) => (
            <motion.div
              key={category.category}
              variants={itemVariants}
              className="card-accent"
            >
              <h3 className="font-mono text-sm uppercase tracking-wide text-parchment mb-6 block">
                {category.category}
              </h3>
              <ul className="space-y-2">
                {category.items.map((skill) => (
                  <li key={skill.name} className="flex items-start gap-3">
                    <span className="text-violet-dim text-xs mt-1 flex-shrink-0">◈</span>
                    <span className="text-parchment-mid text-sm">{skill.name}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
