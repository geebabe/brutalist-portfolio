'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { getAllPosts } from '@/lib/mdx'
import { BlogPost } from '@/lib/types'

const HEAVY = '━'.repeat(64)

function fmtDate(dateStr: string) {
  const d = new Date(dateStr)
  const y = d.getFullYear()
  const m = String(d.getMonth() + 1).padStart(2, '0')
  const day = String(d.getDate()).padStart(2, '0')
  return `${y}-${m}-${day}`
}

export function BlogPreview() {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getAllPosts().then((p) => {
      setPosts(p.slice(0, 5))
      setLoading(false)
    })
  }, [])

  return (
    <section id="blog" style={{ padding: 'clamp(60px, 8vw, 100px) clamp(20px, 4vw, 48px)', borderTop: '1px solid #1F1F1F' }}>
      <div style={{ maxWidth: 900, margin: '0 auto' }}>
        <p className="divider heavy" style={{ marginBottom: 32 }}>{HEAVY}</p>

        <div className="prompt-line" style={{ marginBottom: 32 }}>
          <span className="prefix" style={{ color: '#00FF88' }}>$</span>
          <span style={{ color: '#E8E8E8', fontSize: 'clamp(20px, 2.5vw, 28px)', fontWeight: 700 }}>
            ls ./blog --sort=date
          </span>
        </div>

        {loading ? (
          <div className="prompt-line">
            <span className="prefix" style={{ color: '#888888' }}>→</span>
            <span style={{ color: '#888888' }}>Processing...</span>
          </div>
        ) : posts.length === 0 ? (
          <>
            <div className="prompt-line" style={{ marginBottom: 8 }}>
              <span style={{ color: '#444444' }}>#</span>
              <span style={{ color: '#444444', marginLeft: 12 }}>0 posts found</span>
            </div>
            <div className="prompt-line">
              <span className="prefix" style={{ color: '#888888' }}>→</span>
              <span style={{ color: '#888888' }}>No posts yet. Check back soon.</span>
            </div>
          </>
        ) : (
          <>
            <div className="prompt-line" style={{ marginBottom: 16 }}>
              <span style={{ color: '#444444' }}>#</span>
              <span style={{ color: '#444444', marginLeft: 12 }}>{posts.length} posts found</span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  style={{ textDecoration: 'none' }}
                >
                  <div className="blog-row">
                    <span style={{ color: '#444444', fontSize: 13 }}>{fmtDate(post.date)}</span>
                    <span style={{ color: '#444444', fontSize: 13 }}>[{post.readingTime} min]</span>
                    <span className="blog-slug" style={{ color: '#888888', fontSize: 13, transition: 'color 0.1s linear' }}>
                      {post.slug}.md
                    </span>
                  </div>
                </Link>
              ))}
            </div>

            <div style={{ marginTop: 24 }}>
              <div className="prompt-line">
                <span className="prefix" style={{ color: '#00FF88' }}>$</span>
                <Link
                  href="/blog"
                  className="hover-green"
                  style={{ marginLeft: 12 }}
                >
                  ls ./blog --all
                </Link>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  )
}
