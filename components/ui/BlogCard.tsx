import { BlogPost } from '@/lib/types'
import Link from 'next/link'

export function BlogCard(post: BlogPost) {
  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })

  return (
    <Link href={`/blog/${post.slug}`}>
      <article className="rounded-xl bg-surface border border-border p-6 hover:border-accent/50 transition-colors group cursor-pointer h-full">
        <div className="flex gap-2 mb-3">
          {post.tags.slice(0, 2).map((tag) => (
            <span key={tag} className="text-xs px-2 py-1 rounded-full bg-background border border-border text-muted">
              {tag}
            </span>
          ))}
        </div>
        <h3 className="font-semibold group-hover:text-accent transition-colors">{post.title}</h3>
        <p className="text-sm text-muted mt-2 line-clamp-3">{post.description}</p>
        <div className="flex justify-between mt-4 text-xs text-muted font-mono">
          <span>{formattedDate}</span>
          <span>{post.readingTime} min read</span>
        </div>
      </article>
    </Link>
  )
}
