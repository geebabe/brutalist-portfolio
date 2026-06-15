'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const heroVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
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

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden pt-16">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute inset-0 -z-10 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 600px 400px at 50% -100px, rgba(107, 94, 168, 0.12) 0%, transparent 70%)',
        }}
      />

      <motion.div
        variants={heroVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-3xl mx-auto px-6 w-full"
      >
        <motion.p variants={itemVariants} className="eyebrow">
          ◈ — Practitioner of artificial intelligence
        </motion.p>

        <motion.h1
          variants={itemVariants}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-light italic tracking-wide text-parchment-light mb-6 leading-none"
        >
          Nguyen Minh Chi
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="font-display text-xl md:text-2xl lg:text-3xl font-light italic text-parchment-dim max-w-2xl mx-auto leading-relaxed mb-12"
        >
          Building intelligent systems that think at the edge of language
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-center gap-6 mb-16">
          <Link
            href="#projects"
            className="btn-primary"
          >
            View the works
          </Link>
          <Link
            href="#contact"
            className="btn-secondary"
          >
            Open transmission
          </Link>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex justify-center gap-8 text-parchment-dim text-sm font-mono tracking-wide"
        >
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-violet transition-colors duration-300">
            GitHub
          </a>
          <span className="text-border-dim">·</span>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-violet transition-colors duration-300">
            LinkedIn
          </a>
          <span className="text-border-dim">·</span>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-violet transition-colors duration-300">
            Twitter
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}
