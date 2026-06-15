# 🚀 AI Engineer Portfolio — Implementation Plan

> **Stack:** Next.js 14+ (App Router) · Tailwind CSS · Framer Motion · MDX · Vercel  
> **Goal:** Personal brand & visibility as an AI Engineer  
> **Style:** Dark & techy — dark background, purple/blue accent palette, dev-forward feel

---

## 📋 Table of Contents

1. [Project Setup](#1-project-setup)
2. [Folder Structure](#2-folder-structure)
3. [Design Tokens & Theme](#3-design-tokens--theme)
4. [Content Data Files](#4-content-data-files)
5. [Layout & Navigation](#5-layout--navigation)
6. [Section: Hero](#6-section-hero)
7. [Section: About](#7-section-about)
8. [Section: Skills & Stack](#8-section-skills--stack)
9. [Section: Projects](#9-section-projects)
10. [Section: Experience](#10-section-experience)
11. [Section: Blog Preview](#11-section-blog-preview)
12. [Section: Contact](#12-section-contact)
13. [Blog System (MDX)](#13-blog-system-mdx)
14. [API Route — Contact Form](#14-api-route--contact-form)
15. [SEO & Metadata](#15-seo--metadata)
16. [Deployment](#16-deployment)
17. [Data You Need to Prepare](#17-data-you-need-to-prepare)

---

## 1. Project Setup

### Initialize

```bash
npx create-next-app@latest portfolio --typescript --tailwind --app --eslint
cd portfolio
```

### Install dependencies

```bash
# Animation
npm install framer-motion

# MDX (blog)
npm install next-mdx-remote gray-matter reading-time

# UI components
npm install @radix-ui/react-toast lucide-react

# Icons for tech stack brands
npm install react-icons

# Form handling + validation
npm install react-hook-form zod @hookform/resolvers

# Email sending
npm install resend

# SEO
npm install next-sitemap

# Particles (hero background)
npm install @tsparticles/react @tsparticles/slim
```

### `next.config.ts` — enable MDX

```ts
const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'mdx'],
  images: {
    domains: ['your-image-host.com'], // add if using external images
  },
}
export default nextConfig
```

---

## 2. Folder Structure

```
portfolio/
├── app/
│   ├── layout.tsx              # Root layout, metadata, fonts
│   ├── page.tsx                # Main single-page shell (imports all sections)
│   ├── blog/
│   │   ├── page.tsx            # Full blog list
│   │   └── [slug]/
│   │       └── page.tsx        # Individual blog post
│   └── api/
│       └── contact/
│           └── route.ts        # Contact form email handler
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx          # Sticky nav with scroll spy
│   │   └── Footer.tsx          # Footer with social links
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Projects.tsx
│   │   ├── Experience.tsx
│   │   ├── BlogPreview.tsx
│   │   └── Contact.tsx
│   └── ui/
│       ├── SectionWrapper.tsx  # Consistent section padding + fade-in
│       ├── ProjectCard.tsx
│       ├── SkillBadge.tsx
│       ├── TimelineItem.tsx
│       ├── BlogCard.tsx
│       └── Toast.tsx
│
├── content/
│   ├── projects.json           # Project data
│   ├── experience.json         # Work history data
│   ├── skills.json             # Skills grouped by category
│   └── blog/
│       ├── my-first-post.mdx   # Blog posts (MDX)
│       └── ...
│
├── lib/
│   ├── mdx.ts                  # MDX parsing helpers
│   ├── utils.ts                # Utility functions (cn, etc.)
│   └── types.ts                # TypeScript interfaces
│
└── public/
    ├── avatar.jpg              # Your profile photo
    ├── og-image.png            # Default OG image (1200x630)
    └── projects/               # Project thumbnails
```

---

## 3. Design Tokens & Theme

### `tailwind.config.ts` — custom theme

```ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background:  '#0D0D14',   // near-black base
        surface:     '#13131F',   // card/section backgrounds
        border:      '#1E1E2E',   // subtle borders
        accent:      '#7F6FF0',   // purple accent (primary CTAs)
        'accent-2':  '#38BDF8',   // sky blue (secondary highlights)
        muted:       '#8B8BA0',   // secondary text
        foreground:  '#E8E8F0',   // primary text
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease forwards',
        'glow':    'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        glow: {
          '0%':   { boxShadow: '0 0 5px #7F6FF0' },
          '100%': { boxShadow: '0 0 20px #7F6FF0, 0 0 40px #7F6FF050' },
        },
      },
    },
  },
  plugins: [],
}
export default config
```

### Fonts — `app/layout.tsx`

```tsx
import { Inter, JetBrains_Mono } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })
const mono  = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' })
```

---

## 4. Content Data Files

### `content/projects.json`

```json
[
  {
    "id": "project-1",
    "title": "",
    "description": "",
    "longDescription": "",
    "tags": ["Python", "LangChain", "FastAPI"],
    "githubUrl": "",
    "liveUrl": "",
    "thumbnail": "/projects/project-1.png",
    "featured": true,
    "year": 2024
  }
]
```

**Fields per project:** `id`, `title`, `description` (1 sentence), `longDescription` (2–3 sentences), `tags[]`, `githubUrl`, `liveUrl` (optional), `thumbnail`, `featured` (bool — show on homepage), `year`

---

### `content/experience.json`

```json
[
  {
    "id": "job-1",
    "role": "",
    "company": "",
    "companyUrl": "",
    "location": "",
    "startDate": "2023-01",
    "endDate": "present",
    "highlights": [
      "",
      "",
      ""
    ],
    "tags": ["Python", "MLOps"]
  }
]
```

**Fields per role:** `role`, `company`, `companyUrl`, `location`, `startDate` (YYYY-MM), `endDate` (YYYY-MM or "present"), `highlights[]` (2–4 bullet points), `tags[]`

---

### `content/skills.json`

```json
[
  {
    "category": "LLM & AI",
    "icon": "Brain",
    "items": [
      { "name": "LangChain", "icon": "SiLangchain" },
      { "name": "LlamaIndex", "icon": "" },
      { "name": "OpenAI API", "icon": "SiOpenai" },
      { "name": "HuggingFace", "icon": "SiHuggingface" },
      { "name": "RAG", "icon": "" },
      { "name": "Fine-tuning", "icon": "" }
    ]
  },
  {
    "category": "MLOps & Infra",
    "icon": "Server",
    "items": [
      { "name": "MLflow", "icon": "" },
      { "name": "Docker", "icon": "SiDocker" },
      { "name": "FastAPI", "icon": "SiFastapi" },
      { "name": "Pinecone", "icon": "" },
      { "name": "AWS", "icon": "SiAmazon" }
    ]
  },
  {
    "category": "Languages",
    "icon": "Code",
    "items": [
      { "name": "Python", "icon": "SiPython" },
      { "name": "TypeScript", "icon": "SiTypescript" }
    ]
  }
]
```

---

## 5. Layout & Navigation

### `components/layout/Navbar.tsx`

**Behavior:**
- Fixed at top, background becomes `surface/80` with backdrop blur on scroll
- Logo/name on the left: clicking scrolls to top
- Nav links on the right: `About · Skills · Projects · Experience · Blog · Contact`
- Each link is an anchor (`href="#about"`) for smooth scroll
- Active link highlights based on scroll position (use `IntersectionObserver`)
- On mobile: hamburger icon → full-screen overlay menu

**Component details:**
```
<nav> fixed top-0 z-50 w-full
  <div> max-w-6xl mx-auto px-6 flex justify-between items-center h-16
    <Logo />                        ← your name or initials
    <DesktopLinks />                ← hidden on mobile
    <MobileMenuButton />            ← visible on mobile
  </div>
  <MobileDrawer isOpen={...} />    ← slides in from top or side
</nav>
```

**Scroll spy:** Add `id` props to each section div (`id="about"`, `id="skills"`, etc.) and use `IntersectionObserver` to detect which is in view.

---

### `components/layout/Footer.tsx`

```
<footer> border-t border-border py-8 mt-16
  <div> max-w-6xl mx-auto px-6 flex justify-between items-center
    <p> © 2025 [Your Name] · Built with Next.js
    <div> flex gap-4
      <a href="https://github.com/...">   GitHub icon
      <a href="https://linkedin.com/..."> LinkedIn icon
      <a href="https://twitter.com/...">  Twitter/X icon
  </div>
</footer>
```

---

### `components/ui/SectionWrapper.tsx`

Reusable wrapper for all sections. Handles:
- Consistent max-width + horizontal padding
- Vertical padding between sections (`py-20`)
- Scroll-triggered fade-up animation via Framer Motion

```tsx
// Usage in every section:
<SectionWrapper id="about">
  {/* section content */}
</SectionWrapper>
```

---

## 6. Section: Hero

**File:** `components/sections/Hero.tsx`

**Layout:**
```
<section> min-h-screen flex items-center relative overflow-hidden
  <ParticleBackground />     ← absolute positioned, z-0
  <div> relative z-10 max-w-6xl mx-auto px-6
    <p>  "Hi, I'm"             ← small, muted, font-mono
    <h1> [Your Full Name]      ← large, bold, gradient text
    <h2> "AI Engineer"         ← medium, accent color
    <p>  [Tagline]             ← 1-line description
    <div> flex gap-4 mt-8
      <Button> View My Work     ← primary (accent bg), scrolls to #projects
      <Button> Contact Me       ← secondary (outline), scrolls to #contact
    <div> flex gap-4 mt-6
      <a> GitHub icon link
      <a> LinkedIn icon link
      <a> Twitter/X icon link
```

**Name gradient:** Use `bg-clip-text text-transparent bg-gradient-to-r from-accent to-accent-2`

**Particle background:** Use `@tsparticles/react` with a network/neural-web preset. Keep it subtle — low opacity, small dots, thin lines. Color: accent purple.

**Animation:** Stagger children with Framer Motion `variants` + `staggerChildren: 0.1`

---

## 7. Section: About

**File:** `components/sections/About.tsx`

**Layout:**
```
<SectionWrapper id="about">
  <SectionTitle> About Me
  <div> grid grid-cols-1 md:grid-cols-2 gap-12 items-center
    <div>                         ← left: text content
      <p> [Bio paragraph 1]
      <p> [Bio paragraph 2]
      <div> mt-6 flex gap-3
        <Badge> 🇻🇳 Based in HCMC
        <Badge> Open to remote
        <Badge> [Current focus, e.g. "Building RAG systems"]
    <div>                         ← right: photo
      <img> avatar.jpg
             rounded-2xl, border border-accent/30, glow effect
```

**Bio tone:** Write in first person, conversational. What drew you to AI? What are you excited about right now? Keep it human.

**Photo:** Square or portrait, at least 400×400px. Add a subtle `box-shadow: 0 0 30px rgba(127,111,240,0.2)` glow.

---

## 8. Section: Skills & Stack

**File:** `components/sections/Skills.tsx`

**Layout:**
```
<SectionWrapper id="skills">
  <SectionTitle> Skills & Stack
  <div> grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6
    {skills.map(category =>
      <div> card — bg-surface rounded-xl p-6 border border-border
        <div> flex items-center gap-2 mb-4
          <Icon name={category.icon} />
          <h3> {category.category}
        <div> flex flex-wrap gap-2
          {category.items.map(skill =>
            <SkillBadge name={skill.name} icon={skill.icon} />
          )}
```

**`SkillBadge` component:**
```tsx
<span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full
                  bg-background border border-border text-sm text-muted
                  hover:border-accent hover:text-foreground transition-colors">
  {icon && <SiBrandIcon size={14} />}
  {name}
</span>
```

**Animation:** Stagger card entrance with Framer Motion `whileInView` + `viewport={{ once: true }}`

---

## 9. Section: Projects

**File:** `components/sections/Projects.tsx`

**Layout:**
```
<SectionWrapper id="projects">
  <div> flex justify-between items-center mb-10
    <SectionTitle> Featured Projects
    <Link href="/projects"> View all →   (optional)
  <div> grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6
    {featuredProjects.map(project =>
      <ProjectCard key={project.id} {...project} />
    )}
```

**`ProjectCard` component:**
```
<article> group relative rounded-xl overflow-hidden border border-border
           bg-surface hover:border-accent/50 transition-all duration-300
  <div> relative h-48 overflow-hidden
    <Image> thumbnail — object-cover, scales up slightly on hover (group-hover:scale-105)
    <div> absolute inset-0 bg-gradient-to-t from-surface to-transparent
  <div> p-6
    <h3> title — font-semibold text-foreground
    <p>  description — text-sm text-muted mt-2 line-clamp-2
    <div> flex flex-wrap gap-2 mt-4
      {tags.map(tag => <Badge>{tag}</Badge>)}
    <div> flex gap-3 mt-5
      <a href={githubUrl}> GitHub icon + "Code"
      {liveUrl && <a href={liveUrl}> ExternalLink icon + "Live"}
```

**Hover effect:** On card hover, show subtle purple border glow + slight lift (`hover:-translate-y-1`)

**Data source:** Import from `content/projects.json`, filter where `featured === true`

---

## 10. Section: Experience

**File:** `components/sections/Experience.tsx`

**Layout:**
```
<SectionWrapper id="experience">
  <SectionTitle> Experience
  <div> relative
    <div> absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border
                 ← vertical timeline line
    {experience.map((job, i) =>
      <TimelineItem key={job.id} {...job} side={i % 2 === 0 ? 'left' : 'right'} />
    )}
```

**`TimelineItem` component:**
```
<div> relative flex items-start gap-6 mb-10
  <div> timeline dot — w-3 h-3 rounded-full bg-accent
         absolute left-4 md:left-1/2 -translate-x-1/2 mt-1.5
  <div> card — ml-10 md:ml-0 md:w-[45%] bg-surface rounded-xl p-6 border border-border
    <div> flex justify-between items-start
      <div>
        <h3> role — font-semibold text-foreground
        <a href={companyUrl}> company — text-accent hover:underline
      <span> date range — text-xs font-mono text-muted
    <ul> mt-3 space-y-1
      {highlights.map(h => <li> text-sm text-muted)}
    <div> mt-4 flex flex-wrap gap-2
      {tags.map(t => <Badge small>{t}</Badge>)}
```

**Data source:** Import from `content/experience.json`, sorted by `startDate` descending (most recent first)

---

## 11. Section: Blog Preview

**File:** `components/sections/BlogPreview.tsx`

**Layout:**
```
<SectionWrapper id="blog">
  <div> flex justify-between items-center mb-10
    <SectionTitle> Writing
    <Link href="/blog"> All posts →
  <div> grid grid-cols-1 md:grid-cols-3 gap-6
    {latestPosts.slice(0, 3).map(post =>
      <BlogCard key={post.slug} {...post} />
    )}
```

**`BlogCard` component:**
```
<Link href={`/blog/${slug}`}>
  <article> rounded-xl bg-surface border border-border p-6
             hover:border-accent/50 transition-colors group
    <div> flex gap-2 mb-3
      {tags.map(t => <Badge small>{t}</Badge>)}
    <h3> title — font-semibold group-hover:text-accent transition-colors
    <p>  excerpt — text-sm text-muted mt-2 line-clamp-3
    <div> flex justify-between mt-4 text-xs text-muted font-mono
      <span> {date}
      <span> {readingTime} min read
```

**Data source:** Read MDX files from `content/blog/`, parse frontmatter with `gray-matter`, sort by date desc.

---

## 12. Section: Contact

**File:** `components/sections/Contact.tsx`

**Layout:**
```
<SectionWrapper id="contact">
  <div> max-w-2xl mx-auto text-center
    <SectionTitle> Get In Touch
    <p> text-muted — "Whether you have a project in mind, want to collaborate..."
  <form> mt-10 space-y-5
    <div> grid grid-cols-1 sm:grid-cols-2 gap-5
      <Input> name="name"    label="Name"    placeholder="Your name"
      <Input> name="email"   label="Email"   placeholder="your@email.com"
    <Textarea> name="message" label="Message" placeholder="Tell me about your project..."
               rows={5}
    <input type="hidden" name="honeypot" />   ← spam trap (never shown to user)
    <Button type="submit" loading={isLoading}> Send Message
  <div> mt-6 text-sm text-muted text-center
    "Or reach me directly at [your@email.com]"
```

**Form state:** Use `react-hook-form` + `zod` schema:
```ts
const schema = z.object({
  name:    z.string().min(2, 'Name must be at least 2 characters'),
  email:   z.string().email('Invalid email address'),
  message: z.string().min(20, 'Message must be at least 20 characters'),
})
```

**On submit:** POST to `/api/contact`. Show success/error toast using Radix Toast.

---

## 13. Blog System (MDX)

### Post frontmatter format

Every `.mdx` file in `content/blog/` needs this header:

```mdx
---
title: "How I Built a Production RAG Pipeline"
description: "A walkthrough of building a retrieval-augmented generation system..."
date: "2025-01-15"
tags: ["RAG", "LangChain", "Python"]
coverImage: "/blog/rag-pipeline.png"   # optional
---

Your content here...
```

### `lib/mdx.ts` — helper functions

```ts
// getAllPosts() — reads all MDX files, returns sorted list of frontmatter
// getPostBySlug(slug) — reads one MDX file and returns content + frontmatter
```

### Blog list page — `app/blog/page.tsx`

```
<main>
  <h1> All Posts
  <div> search/filter by tag (optional)
  <div> grid of <BlogCard /> components
```

### Blog post page — `app/blog/[slug]/page.tsx`

```
<article>
  <header>
    <h1> title
    <div> date · readingTime · tags
    <img> coverImage (if present)
  <div> prose prose-invert max-w-none
    <MDXRemote source={content} />
  <footer>
    <Link href="/blog"> ← Back to all posts
```

**Typography:** Use Tailwind Typography plugin (`@tailwindcss/typography`) with the `prose-invert` variant for dark mode. Customize `prose` to use your design tokens.

---

## 14. API Route — Contact Form

**File:** `app/api/contact/route.ts`

```ts
import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  const body = await req.json()

  // Honeypot check
  if (body.honeypot) {
    return NextResponse.json({ ok: true }) // silently ignore
  }

  // Validate with zod (same schema as frontend)
  // ...

  await resend.emails.send({
    from: 'Portfolio Contact <onboarding@resend.dev>',
    to: process.env.CONTACT_EMAIL!,
    subject: `New message from ${body.name}`,
    html: `
      <p><strong>From:</strong> ${body.name} (${body.email})</p>
      <p><strong>Message:</strong></p>
      <p>${body.message}</p>
    `,
  })

  return NextResponse.json({ ok: true })
}
```

**Environment variables needed:**
```
RESEND_API_KEY=re_...
CONTACT_EMAIL=your@email.com
```

---

## 15. SEO & Metadata

### Root metadata — `app/layout.tsx`

```ts
export const metadata: Metadata = {
  title: {
    default: '[Your Name] — AI Engineer',
    template: '%s | [Your Name]',
  },
  description: '[Your tagline — 1-2 sentences]',
  openGraph: {
    type: 'website',
    url: 'https://yoursite.com',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@yourhandle',
  },
}
```

### Blog post metadata — `app/blog/[slug]/page.tsx`

```ts
export async function generateMetadata({ params }) {
  const post = await getPostBySlug(params.slug)
  return {
    title: post.frontmatter.title,
    description: post.frontmatter.description,
    openGraph: {
      images: [post.frontmatter.coverImage ?? '/og-image.png'],
    },
  }
}
```

### `next-sitemap.config.js`

```js
module.exports = {
  siteUrl: 'https://yoursite.com',
  generateRobotsTxt: true,
}
```

Add to `package.json` scripts:
```json
"postbuild": "next-sitemap"
```

---

## 16. Deployment

### Steps

1. Push repo to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project → Import repo
3. Set environment variables in Vercel dashboard:
   - `RESEND_API_KEY`
   - `CONTACT_EMAIL`
4. Deploy — Vercel auto-detects Next.js, no config needed
5. Add custom domain in Vercel → Domains

### Performance checklist before going live

- [ ] All images use `next/image` component
- [ ] No unused dependencies in `package.json`
- [ ] `loading="lazy"` on below-fold images
- [ ] Particle animation uses `reducedMotion` check
- [ ] Run Lighthouse audit in Chrome DevTools — target 90+ on all metrics
- [ ] Test on mobile (iPhone + Android) before launching
- [ ] Test contact form end-to-end

---

## 17. Data You Need to Prepare

Before you start vibe coding, collect all of this content. Having it ready means you can drop it straight into the JSON files and MDX posts.

### 👤 Personal info

- [ ] Full name
- [ ] Job title (e.g. "AI Engineer" or something more specific)
- [ ] 1-line tagline (memorable, what you build or stand for)
- [ ] Bio — 2 short paragraphs. Cover: background, what draws you to AI, current focus
- [ ] Profile photo — min 400×400px, clear background preferred
- [ ] Your email address (for contact form destination)
- [ ] GitHub username
- [ ] LinkedIn URL
- [ ] Twitter/X handle (optional)
- [ ] Personal website domain you plan to use

### 💼 Projects (3–5 featured)

For each project, prepare:

- [ ] Title
- [ ] Short description (1 sentence, ~15 words)
- [ ] Longer description (2–3 sentences for the card detail)
- [ ] Tech stack tags used
- [ ] GitHub repo URL
- [ ] Live demo URL (if any)
- [ ] Thumbnail image — 16:9 ratio, min 800×450px (screenshot, diagram, or custom graphic)
- [ ] Year completed / started

### 🏢 Experience (all roles, most recent first)

For each role, prepare:

- [ ] Job title
- [ ] Company name + website URL
- [ ] City / Remote / Hybrid
- [ ] Start date (Month Year)
- [ ] End date (or "Present")
- [ ] 2–4 highlight bullets (achievements, not just duties — quantify where possible)
- [ ] Key tech/tools used

### 🧠 Skills

Go through this list and add/remove to match your real stack:

- [ ] LLM frameworks (LangChain, LlamaIndex, etc.)
- [ ] Models/providers (OpenAI, Anthropic, HuggingFace, etc.)
- [ ] Techniques (RAG, fine-tuning, prompt engineering, agents)
- [ ] Vector databases (Pinecone, Weaviate, Chroma, etc.)
- [ ] MLOps tools (MLflow, Weights & Biases, etc.)
- [ ] Languages (Python, TypeScript, SQL, etc.)
- [ ] Infra/cloud (AWS, GCP, Azure, Docker, etc.)
- [ ] Web frameworks (FastAPI, Next.js, etc.)

### ✍️ Blog posts (aim for 2–3 to start)

Suggested topics for an AI Engineer:
- [ ] A project deep-dive: "How I built [project name]"
- [ ] A technique explainer: "Practical RAG — what actually works in production"
- [ ] A lesson learned: "What I wish I knew before fine-tuning my first LLM"

For each post, prepare:
- [ ] Title
- [ ] Short description (for list page + SEO)
- [ ] Tags (2–4 keywords)
- [ ] Cover image (optional but recommended) — 1200×630px
- [ ] The content itself (can be written in Markdown)

### 🎨 Visual assets

- [ ] `public/avatar.jpg` — your profile photo
- [ ] `public/og-image.png` — Open Graph default image (1200×630px). Can be a dark card with your name and title.
- [ ] `public/projects/*.png` — thumbnails for each project
- [ ] `public/blog/*.png` — cover images for each blog post (optional)

### 🔧 Accounts to set up

- [ ] [Resend](https://resend.com) account — free tier (3,000 emails/month). Get your API key.
- [ ] [Vercel](https://vercel.com) account — free tier is plenty for a portfolio.
- [ ] Domain name — buy from Namecheap / Cloudflare Domains (connect to Vercel later)

---

*Good luck! Once you've got the data ready, vibe coding each section should flow naturally — the hardest part is always the content, not the code.*
