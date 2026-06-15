export interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  tags: string[]
  githubUrl: string
  liveUrl?: string
  thumbnail: string
  featured: boolean
  year: number
}

export interface Experience {
  id: string
  role: string
  company: string
  companyUrl: string
  location: string
  startDate: string
  endDate: string
  highlights: string[]
  tags: string[]
}

export interface SkillCategory {
  category: string
  icon: string
  items: Array<{
    name: string
    icon?: string
  }>
}

export interface BlogPost {
  slug: string
  title: string
  description: string
  date: string
  tags: string[]
  coverImage?: string
  content: string
  readingTime: number
}
