# AI Engineer Portfolio — Claude Instructions

## Project overview
Next.js 14 portfolio for Nguyen Minh Chi (AI Engineer, Ho Chi Minh City). Single-page layout with sections: Hero, About, Skills, Projects, Experience, Blog, Contact.

## Visual system — Brutalist Terminal
All UI follows `personal_information/brutalist_style.md` strictly. Key rules:

- **One font only:** JetBrains Mono (300/400/500/700). Never add a second typeface.
- **Zero border-radius.** Enforced globally with `border-radius: 0 !important` in globals.css.
- **No framer-motion on the main page.** No scroll-triggered reveals. Content appears immediately.
- **Palette:** `#090909` bg · `#00FF88` green accent · `#FFB800` amber (sparingly) · `#888888` gray body · `#E8E8E8` white headings/commands
- **Terminal grammar:** `$` prefix = commands/headings · `→` = output/descriptions · `#` = comments/metadata
- **No JS hover handlers in Server Components.** Use CSS classes `.hover-green`, `.hover-white-from-green`, `.hover-green-from-white` defined in globals.css instead.

## Content data
- `content/skills.json` — skill categories and items
- `content/projects.json` — project entries (featured flag, tags, year)
- `content/experience.json` — job history (startDate, endDate, highlights, tags)
- `content/blog/*.mdx` — blog posts

## Key files
| File | Purpose |
|---|---|
| `app/globals.css` | All CSS variables, global reset, utility classes, animations |
| `tailwind.config.ts` | Terminal color tokens, mono-only font, border-radius overrides |
| `app/layout.tsx` | Font import, body className |
| `components/layout/Navbar.tsx` | Fixed nav, chrome dots, ~/portfolio, mobile [menu] |
| `components/layout/Footer.tsx` | $ exit / Connection closed. |
| `components/sections/Hero.tsx` | TerminalWindow + Typewriter (client component) |
| `components/sections/About.tsx` | $ cat README.md layout, grayscale photo |
| `components/sections/Skills.tsx` | ls -l format with amber categories |
| `components/sections/Projects.tsx` | $ cat projects/slug.md per project |
| `components/sections/Experience.tsx` | git log format with amber commit hashes |
| `components/sections/BlogPreview.tsx` | ls ./blog --sort=date file listing (client) |
| `components/sections/Contact.tsx` | ./contact.sh terminal form, inline success (client) |

## What NOT to do
- No border-radius anywhere
- No second font (no Inter, no Cormorant, no system-ui)
- No colors outside the palette (no purples, no blues, no gradients)
- No scroll-reveal animations
- No loading spinners (show Processing... text instead)
- No success modals (show inline Message sent. [200 OK])
- No emojis anywhere
- No #FFFFFF — use #E8E8E8

## Commands
```bash
npm run dev    # development server
npm run build  # production build (also runs next-sitemap postbuild)
```
