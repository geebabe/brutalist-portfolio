'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { OrnamentDivider } from '@/components/ui/OrnamentDivider'

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

export function About() {
  return (
    <section id="about" className="section-spacing px-6">
      <motion.div
        className="max-w-5xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
      >
        <motion.div variants={itemVariants}>
          <p className="eyebrow">◈ — On the nature of the work</p>
          <h2 className="font-display text-4xl lg:text-5xl font-light italic text-parchment leading-tight mb-4">
            On Building Minds
          </h2>
        </motion.div>

        <OrnamentDivider />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-start">
          <motion.div variants={containerVariants} className="space-y-6">
            <motion.p variants={itemVariants} className="text-body">
              As an AI Engineer, I specialize in architecting and implementing sophisticated AI systems that push the boundaries of language understanding and generation. My work involves leveraging cutting-edge large language models and machine learning techniques to solve complex problems in resource-constrained settings.
            </motion.p>
            <motion.p variants={itemVariants} className="text-body">
              Currently building production conversational AI systems at VinBigData. Previously developed scalable RAG pipelines and document-AI services at IMT Solutions. Focused on bridging the gap between research and production deployment, with particular emphasis on low-resource NLP and multilingual systems.
            </motion.p>
            <motion.p variants={itemVariants} className="text-caption">
              HO CHI MINH CITY, VIETNAM · OPEN TO REMOTE · AI ENGINEERING
            </motion.p>
          </motion.div>

          <motion.div variants={itemVariants} className="flex justify-center md:justify-end">
            <div className="relative w-72 h-96">
              <Image
                src="/avatar.jpg"
                alt="Profile"
                width={288}
                height={384}
                className="w-full h-full object-cover border border-border-dim"
                style={{
                  filter: 'grayscale(20%) sepia(10%)',
                  boxShadow: '0 0 40px rgba(107, 94, 168, 0.15)',
                }}
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
