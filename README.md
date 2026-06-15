# AI Engineer Portfolio

A modern, dark-themed portfolio website for AI engineers. Built with Next.js 14, Tailwind CSS, and Framer Motion.

## Features

- ✨ Responsive dark theme with purple/blue accent colors
- 🚀 Single-page hero with smooth scrolling
- 📝 MDX-based blog system
- 💬 Contact form with Resend email integration
- 🎨 Animated sections with Framer Motion
- 📱 Mobile-first design
- 🔍 SEO optimized with Next.js metadata
- 📊 Showcase projects, experience, and skills

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Blog**: MDX with gray-matter
- **Forms**: React Hook Form + Zod
- **Email**: Resend
- **Icons**: Lucide React + React Icons

## Getting Started

### Installation

```bash
npm install
```

### Environment Variables

Copy `.env.example` to `.env.local` and fill in your values:

```bash
cp .env.example .env.local
```

You'll need:
- `RESEND_API_KEY`: Get from [resend.com](https://resend.com)
- `CONTACT_EMAIL`: Your email address

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
portfolio/
├── app/                    # Next.js app directory
│   ├── page.tsx           # Homepage
│   ├── layout.tsx         # Root layout
│   ├── globals.css        # Global styles
│   ├── blog/              # Blog pages
│   └── api/contact        # Contact form API
├── components/
│   ├── layout/            # Navbar, Footer
│   ├── sections/          # Page sections (Hero, About, Skills, etc.)
│   └── ui/                # Reusable UI components
├── content/
│   ├── projects.json      # Projects data
│   ├── experience.json    # Experience data
│   ├── skills.json        # Skills data
│   └── blog/              # MDX blog posts
├── lib/
│   ├── types.ts          # TypeScript types
│   ├── utils.ts          # Utility functions
│   └── mdx.ts            # MDX parsing helpers
├── public/                # Static assets
│   ├── avatar.jpg         # Profile photo
│   ├── og-image.png       # OG image
│   └── projects/          # Project thumbnails
└── tailwind.config.ts     # Tailwind configuration
```

## Customization

### Personal Info

Edit `app/layout.tsx` to update:
- Site title and description
- Social media links
- Meta tags

### Content

- **Projects**: Edit `content/projects.json`
- **Experience**: Edit `content/experience.json`
- **Skills**: Edit `content/skills.json`
- **Blog Posts**: Add `.mdx` files to `content/blog/`

### Styling

All design tokens are in `tailwind.config.ts`. Customize:
- Colors (background, surface, accent, etc.)
- Fonts (Inter, JetBrains Mono)
- Animations (fade-up, glow)

## Blog Posts

Create new blog posts in `content/blog/` with `.mdx` extension:

```mdx
---
title: "Post Title"
description: "Short description"
date: "2025-01-15"
tags: ["tag1", "tag2"]
coverImage: "/blog/image.png"
---

Your content here...
```

## Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project
3. Import your repository
4. Add environment variables
5. Deploy

### Other Platforms

The project works on any Node.js hosting (Netlify, Railway, etc.). Just ensure:
- Node.js 18+
- Build command: `npm run build`
- Start command: `npm start`

## Performance Checklist

Before going live:

- [ ] All images use `next/image` component
- [ ] Added profile photo to `public/avatar.jpg`
- [ ] Updated content in JSON files
- [ ] Configured Resend API key
- [ ] Updated social media links
- [ ] Run Lighthouse audit (target 90+)
- [ ] Test on mobile devices
- [ ] Test contact form end-to-end

## License

MIT — feel free to use this as a template for your portfolio!

## Support

For issues or questions:
- Check the [Next.js docs](https://nextjs.org/docs)
- Review the [portfolio implementation plan](./portfolio-implementation-plan.md)
- Check component comments for implementation details
