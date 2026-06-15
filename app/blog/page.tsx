'use client'

import { motion } from 'framer-motion'
import { OrnamentDivider } from '@/components/ui/OrnamentDivider'
import { getAllPosts } from '@/lib/mdx'
import { useEffect, useState } from 'react'
import { BlogPost } from '@/lib/types'

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

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getAllPosts().then((posts) => {
      setPosts(posts)
      setLoading(false)
    })
  }, [])

  return (
    <section className="section-spacing px-6">
      <motion.div
        className="max-w-5xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants}>
          <p className="eyebrow">◈ — Dispatches from the field</p>
          <h1 className="font-display text-5xl lg:text-6xl font-light italic text-parchment leading-tight mb-12">
            All Writing
          </h1>
        </motion.div>

        <OrnamentDivider />

        {loading ? (
          <motion.div variants={itemVariants} className="text-center py-12 text-parchment-dim">
            Loading posts...
          </motion.div>
        ) : posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {posts.map((post) => (
              <motion.a
                key={post.slug}
                href={`/blog/${post.slug}`}
                variants={itemVariants}
                className="group card-accent"
              >
                <h3 className="font-display text-lg font-light italic text-parchment group-hover:text-violet-bright transition-colors mb-3 leading-snug">
                  {post.title}
                </h3>
                <p className="text-caption mb-3 block">
                  {new Date(post.date).toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' })} · {post.readingTime} min read
                </p>
                {post.tags && (
                  <p className="text-caption">
                    {post.tags.join(' · ')}
                  </p>
                )}
                {post.description && (
                  <p className="text-parchment-mid text-sm mt-3 leading-relaxed">
                    {post.description}
                  </p>
                )}
              </motion.a>
            ))}
          </div>
        ) : (
          <motion.div variants={itemVariants} className="text-center py-12 text-parchment-dim">
            No blog posts yet. Check back soon!
          </motion.div>
        )}
      </motion.div>
    </section>
  )
}
