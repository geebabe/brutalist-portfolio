import { SectionWrapper } from '@/components/ui/SectionWrapper'
import { getPostBySlug, getAllPosts } from '@/lib/mdx'
import { MDXRemote } from 'next-mdx-remote/rsc'
import Link from 'next/link'
import { Metadata } from 'next'
import Image from 'next/image'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const post = await getPostBySlug(slug)

  if (!post) {
    return { title: 'Post Not Found' }
  }

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      images: [post.coverImage || '/og-image.png'],
    },
  }
}

export async function generateStaticParams() {
  const posts = await getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params
  const post = await getPostBySlug(slug)

  if (!post) {
    return (
      <SectionWrapper>
        <h1 className="text-4xl font-bold text-foreground">Post not found</h1>
      </SectionWrapper>
    )
  }

  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <div className="pt-16">
      <SectionWrapper>
        <article className="max-w-2xl mx-auto">
          <header className="mb-8">
            <Link href="/blog" className="text-accent hover:text-accent-2 mb-4 inline-block">
              ← Back to all posts
            </Link>
            <h1 className="text-4xl font-bold text-foreground mb-4">{post.title}</h1>
            <div className="flex gap-4 text-sm text-muted mb-6">
              <span>{formattedDate}</span>
              <span>•</span>
              <span>{post.readingTime} min read</span>
            </div>
            {post.tags.length > 0 && (
              <div className="flex gap-2 mb-6">
                {post.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 rounded-full bg-surface border border-border text-sm text-muted">
                    {tag}
                  </span>
                ))}
              </div>
            )}
            {post.coverImage && (
              <div className="relative w-full h-96 mb-8">
                <Image
                  src={post.coverImage}
                  alt={post.title}
                  fill
                  className="rounded-lg object-cover"
                />
              </div>
            )}
          </header>

          <div className="prose prose-invert max-w-none text-muted prose-headings:text-foreground prose-a:text-accent prose-strong:text-foreground">
            <MDXRemote source={post.content} />
          </div>

          <footer className="mt-12 pt-8 border-t border-border">
            <Link href="/blog" className="text-accent hover:text-accent-2">
              ← Back to all posts
            </Link>
          </footer>
        </article>
      </SectionWrapper>
    </div>
  )
}
