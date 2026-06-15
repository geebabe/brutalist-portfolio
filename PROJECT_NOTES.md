# AI Engineer Portfolio — Project Implementation Notes

**Project Type**: Next.js portfolio with Bene Gesserit aesthetic  
**Status**: UI redesign complete, ready for content verification & deployment  
**Last Updated**: 2026-06-15 (Session 3)

---

## Session 3 Summary: Complete UI Redesign

### What Was Done
✅ **Entire UI redesigned** using Bene Gesserit aesthetic from `bene-gesserit-style-guide.md`
- Zero rounded corners anywhere
- Left-border accent system on all cards
- Glyph decorations (◈ ⊕ ✦) instead of emojis
- Slow animations (0.9s–1.5s duration)
- Single accent color (violet) throughout
- Typography system: Cormorant Garamond (display), Inter (body), JetBrains Mono (labels)

### Components Redesigned (10 total)
1. Hero — Centered, Cormorant italic name, ambient glow
2. Navbar — Backdrop blur, glyph logo, scroll border
3. About — Asymmetric grid, sepia photo filter
4. Skills — Category cards, glyph markers, no icons
5. Projects — Vertical list, no thumbnails, left borders
6. Experience — Timeline line, glyph branch points
7. Blog — Left-border cards, serif titles
8. Contact — Bottom-border inputs only
9. Footer — Minimal, monospace links
10. OrnamentDivider (NEW) — Signature divider with three glyphs

### Files Changed
- **New**: `components/ui/OrnamentDivider.tsx`
- **Updated**: `app/globals.css`, `tailwind.config.ts`, `app/layout.tsx`, 9 section components, 2 layout components, Toast component, blog page
- **Deleted**: 4 old duplicate components from `/components/` root (Hero, About, Skills, Projects)
- **Documentation**: `REDESIGN_SUMMARY.md` (complete design guide)

### Build Status
✅ Production build passes  
✅ Dev server running on port 3001  
✅ No TypeScript errors

---

## Next Actions (In Order)

### Phase 1: Visual Verification (URGENT — Do This Now)
Open http://localhost:3001 and verify:
```
Hero section:
  ✓ Glyph appears above name
  ✓ Name in Cormorant Garamond italic
  ✓ Subtle glow animation behind (fades in/out)
  ✓ Two buttons with borders only (no background)
  ✓ Social links in monospace with bullet separators

Navbar:
  ✓ Fixed at top
  ✓ Logo is "◈ Nguyen Minh Chi" in monospace
  ✓ Links visible on desktop
  ✓ Mobile menu works (◈ icon toggles)
  ✓ Border appears when scrolled past 60px

All sections:
  ✓ Eyebrow labels visible (◈ — description)
  ✓ Dividers render with three glyphs decreasing in size
  ✓ Left borders on cards/lists
  ✓ No rounded corners anywhere
  ✓ Violet color on hover states

Form:
  ✓ Inputs have bottom borders only (no fill)
  ✓ Placeholder text visible
  ✓ Focus state is violet border
```

### Phase 2: Add Required Images
- [ ] Save profile photo as `public/avatar.jpg` (380×500px)
  - Will have sepia filter + violet glow automatically applied
- [ ] Save OG image as `public/og-image.png` (1200×630px)
  - Used for social sharing (Twitter, LinkedIn, etc.)

### Phase 3: Test Content Display
- [ ] Verify skills display correctly in categories
- [ ] Verify projects show without thumbnails
- [ ] Verify experience timeline renders properly
- [ ] Verify blog posts display if any exist

### Phase 4: Email Setup
```bash
# 1. Sign up at https://resend.com
# 2. Create API key
# 3. Add to .env.local:
RESEND_API_KEY=your_key_here
CONTACT_EMAIL=minhchi1804@gmail.com

# 4. Test contact form in browser
```

### Phase 5: Full Testing
- [ ] All internal links work (#about, #skills, etc.)
- [ ] External links work (GitHub, LinkedIn, Twitter)
- [ ] Contact form sends emails
- [ ] Mobile layout looks good (test iPhone, iPad)
- [ ] Animations smooth (no janky performance)
- [ ] No console errors

### Phase 6: Deployment
```bash
# Push to GitHub
git add .
git commit -m "Redesign: Bene Gesserit aesthetic"
git push

# Deploy to Vercel (free, connects to GitHub)
# Add env variables in Vercel dashboard
```

---

## Design System Reference

### Colors (Tailwind Classes)
```
Background:  bg-void (#080810)
Text:        text-parchment (#E8E4F0)
Text dim:    text-parchment-dim (#8A85A0)
Accent:      text-violet (#6B5EA8)
Hover:       hover:text-violet-bright
Borders:     border-border-dim (#1E1A35)
```

### Typography (Classes)
```
Display:    font-display italic (Cormorant Garamond)
Body:       text-body (Inter 300)
Caption:    text-caption (JetBrains Mono)
Eyebrow:    eyebrow (monospace, violet)
```

### Components (Utility Classes)
```
.btn-primary      → Bordered button, hollow
.btn-secondary    → Text-only button
.card-accent      → Left-border container
.section-spacing  → Generous padding (clamp)
.eyebrow          → Small monospace label
```

### Spacing
```
Sections:  clamp(80px, 12vw, 140px)
Padding:   clamp(24px, 5vw, 80px)
Gap:       Use Tailwind gap-* classes
```

### Animations (All Elements)
```
Duration:  0.9s (fade-up), 1.2s (titles), 1.5s (lines)
Easing:    cubic-bezier(0.16, 1, 0.3, 1)
Stagger:   0.1s between children
Trigger:   whileInView with margin: "-80px"
```

---

## Common Patterns

### New Section Template
```tsx
'use client'
import { motion } from 'framer-motion'
import { OrnamentDivider } from '@/components/ui/OrnamentDivider'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
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

export function SectionName() {
  return (
    <section className="section-spacing px-6">
      <motion.div
        className="max-w-3xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
      >
        <motion.div variants={itemVariants}>
          <p className="eyebrow">◈ — Section title</p>
          <h2 className="font-display text-4xl lg:text-5xl font-light italic text-parchment">
            Heading
          </h2>
        </motion.div>

        <OrnamentDivider />

        {/* Content here */}
      </motion.div>
    </section>
  )
}
```

### Left-Border Card
```tsx
<div className="card-accent">
  {/* Content automatically gets left border that changes to violet on hover */}
</div>
```

---

## Strict Rules (Do NOT Break)

1. **No rounded corners anywhere** — Zero border-radius
2. **Single accent color** — Use violet (#6B5EA8) only
3. **No pure white/black** — Use parchment/void instead
4. **Left borders only** — No full boxes around cards
5. **No gradients** — Except hero ambient glow
6. **No shadows** — Clean, flat design
7. **No emojis** — Use glyphs: ◈ ⊕ ✦
8. **No filled buttons** — Transparent with border only
9. **All animations 0.9s+** — Never snappy transitions
10. **Always use eyebrow labels** — Every section starts with `◈ —`

---

## File Locations Quick Reference

| What | Where |
|------|-------|
| Content | `content/skills.json`, `content/projects.json`, `content/experience.json` |
| Blog posts | `content/blog/*.mdx` |
| Images | `public/avatar.jpg`, `public/og-image.png` |
| Styles | `app/globals.css` (colors, utilities, animations) |
| Config | `tailwind.config.ts` (theme colors, fonts) |
| Components | `components/sections/` (major), `components/ui/` (reusable) |

---

## Deployment Checklist

- [ ] npm run build passes
- [ ] All images added (avatar.jpg, og-image.png)
- [ ] RESEND_API_KEY configured
- [ ] All content verified in browser
- [ ] Mobile layout tested
- [ ] Lighthouse score 90+
- [ ] Pushed to GitHub
- [ ] Deployed to Vercel
- [ ] Environment variables set in Vercel
- [ ] Domain configured (if custom)
- [ ] Live URL tested

---

## Troubleshooting

### Dev server won't start
```bash
npm run dev
# If port 3000 in use, tries 3001
# If still fails, check: lsof -i :3001
```

### Build fails
```bash
npm run build
# Check for TypeScript errors
# All section imports must be from components/sections/
```

### Images not loading
```
avatar.jpg must be in public/
og-image.png must be in public/
Check browser console for errors
```

### Colors look different
```
Make sure you're using Tailwind classes:
- bg-void (not #080810)
- text-parchment (not #E8E4F0)
- border-violet-dim (not #4B3F88)
```

---

## Philosophy & Vision

The Bene Gesserit aesthetic represents:
- **Ancient**: Ceremonial, deliberate, manuscript-like
- **Modern**: Built with latest tech (Next.js, React, Framer Motion)
- **Meaningful**: Every design choice has purpose
- **Quiet Authority**: Doesn't shout, commands attention through refinement

This is NOT a minimalist design. It's ornate but restrained. Every glyph, spacing, and animation serves the whole.

---

**Last Updated**: 2026-06-15  
**Next Session Focus**: Visual verification → Add images → Deploy
