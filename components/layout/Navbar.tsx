'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '#contact' },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 z-50 w-full py-4 px-6 md:px-12 bg-void/80 backdrop-blur-md transition-all duration-300 ${scrolled ? 'border-b border-border-dim' : 'border-b border-transparent'}`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="#" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="font-mono text-parchment text-xs uppercase tracking-ritual whitespace-nowrap">
          ◈ Nguyen Minh Chi
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-sans text-xs uppercase tracking-wide text-parchment-dim hover:text-parchment transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-parchment-light font-mono text-lg"
        >
          {isOpen ? '✕' : '◈'}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-deep-indigo/95 border-b border-border-dim mt-2 rounded">
          <div className="px-6 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block font-sans text-xs uppercase tracking-wide text-parchment-dim hover:text-parchment transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
