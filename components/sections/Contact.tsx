'use client'

import { motion } from 'framer-motion'
import { Toast } from '@/components/ui/Toast'
import { OrnamentDivider } from '@/components/ui/OrnamentDivider'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const schema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  message: z.string().min(20, 'Message must be at least 20 characters'),
})

type FormData = z.infer<typeof schema>

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

export function Contact() {
  const [loading, setLoading] = useState(false)
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  })

  const onSubmit = async (data: FormData) => {
    setLoading(true)
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setToast({ message: 'Message sent successfully!', type: 'success' })
        reset()
      } else {
        setToast({ message: 'Failed to send message', type: 'error' })
      }
    } catch (error) {
      setToast({ message: 'An error occurred', type: 'error' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="section-spacing px-6">
      <motion.div
        className="max-w-2xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
      >
        <motion.div variants={itemVariants}>
          <p className="eyebrow">◈ — Open transmission</p>
          <h2 className="font-display text-4xl lg:text-5xl font-light italic text-parchment leading-tight mb-4">
            Speak and be heard
          </h2>
        </motion.div>

        <OrnamentDivider />

        <motion.form onSubmit={handleSubmit(onSubmit)} variants={containerVariants} className="space-y-6 mt-12">
          <motion.div variants={itemVariants}>
            <label className="text-caption mb-2 block">Name</label>
            <input
              type="text"
              placeholder="Your name"
              {...register('name')}
              className="w-full px-0 py-2 bg-transparent border-b border-border-mid text-parchment placeholder-parchment-dim focus:outline-none focus:border-violet transition-colors duration-300"
            />
            {errors.name && <p className="text-violet-dim text-xs mt-2">{errors.name.message}</p>}
          </motion.div>

          <motion.div variants={itemVariants}>
            <label className="text-caption mb-2 block">Email</label>
            <input
              type="email"
              placeholder="your@email.com"
              {...register('email')}
              className="w-full px-0 py-2 bg-transparent border-b border-border-mid text-parchment placeholder-parchment-dim focus:outline-none focus:border-violet transition-colors duration-300"
            />
            {errors.email && <p className="text-violet-dim text-xs mt-2">{errors.email.message}</p>}
          </motion.div>

          <motion.div variants={itemVariants}>
            <label className="text-caption mb-2 block">Message</label>
            <textarea
              placeholder="Tell me about your project..."
              rows={4}
              {...register('message')}
              className="w-full px-0 py-2 bg-transparent border-b border-border-mid text-parchment placeholder-parchment-dim focus:outline-none focus:border-violet transition-colors duration-300 resize-none"
            />
            {errors.message && <p className="text-violet-dim text-xs mt-2">{errors.message.message}</p>}
          </motion.div>

          <motion.button
            variants={itemVariants}
            type="submit"
            disabled={loading}
            className="btn-primary mt-8"
          >
            {loading ? 'Sending transmission...' : 'Send transmission'}
          </motion.button>
        </motion.form>

        <motion.div variants={itemVariants} className="text-caption mt-8">
          Or reach me directly at{' '}
          <a href="mailto:minhchi1804@gmail.com" className="text-violet hover:text-violet-bright transition-colors duration-300">
            minhchi1804@gmail.com
          </a>
        </motion.div>
      </motion.div>

      {toast && <Toast message={toast.message} type={toast.type} />}
    </section>
  )
}
