'use server'

import { promises as fs } from 'fs'
import path from 'path'
import matter from 'gray-matter'
import readingTime from 'reading-time'
import { BlogPost } from './types'

const postsDirectory = path.join(process.cwd(), 'content/blog')

export async function getAllPosts(): Promise<BlogPost[]> {
  try {
    const files = await fs.readdir(postsDirectory)
    const posts = await Promise.all(
      files
        .filter((file) => file.endsWith('.mdx'))
        .map(async (file) => {
          const filePath = path.join(postsDirectory, file)
          const content = await fs.readFile(filePath, 'utf8')
          const { data, content: markdown } = matter(content)
          const slug = file.replace('.mdx', '')
          const reading = readingTime(markdown)

          return {
            slug,
            title: data.title || 'Untitled',
            description: data.description || '',
            date: data.date || new Date().toISOString().split('T')[0],
            tags: data.tags || [],
            coverImage: data.coverImage,
            content: markdown,
            readingTime: Math.ceil(reading.minutes),
          }
        })
    )

    return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  } catch (error) {
    console.error('Error reading blog posts:', error)
    return []
  }
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const filePath = path.join(postsDirectory, `${slug}.mdx`)
    const content = await fs.readFile(filePath, 'utf8')
    const { data, content: markdown } = matter(content)
    const reading = readingTime(markdown)

    return {
      slug,
      title: data.title || 'Untitled',
      description: data.description || '',
      date: data.date || new Date().toISOString().split('T')[0],
      tags: data.tags || [],
      coverImage: data.coverImage,
      content: markdown,
      readingTime: Math.ceil(reading.minutes),
    }
  } catch (error) {
    console.error(`Error reading post ${slug}:`, error)
    return null
  }
}
