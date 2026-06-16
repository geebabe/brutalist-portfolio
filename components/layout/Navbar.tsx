'use client'

import { useState } from 'react'
import Link from 'next/link'

const navLinks = [
  { label: 'about',      href: '#about' },
  { label: 'skills',     href: '#skills' },
  { label: 'projects',   href: '#projects' },
  { label: 'experience', href: '#experience' },
  { label: 'blog',       href: '/blog' },
  { label: 'contact',    href: '#contact' },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        width: '100%',
        zIndex: 50,
        height: '48px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 clamp(20px, 4vw, 48px)',
        background: '#0F0F0F',
        borderBottom: '1px solid #1F1F1F',
      }}
    >
      {/* Left: chrome dots + path */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <div style={{ display: 'flex', gap: '6px' }}>
          <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#FF5F57', display: 'block' }} />
          <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#FEBC2E', display: 'block' }} />
          <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#28C840', display: 'block' }} />
        </div>
        <Link
          href="/"
          style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: '#444444', textDecoration: 'none' }}
        >
          ~/portfolio
        </Link>
      </div>

      {/* Right: nav links (desktop) */}
      <div className="hidden md:flex" style={{ gap: '32px' }}>
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 13,
              color: '#888888',
              textDecoration: 'none',
              transition: 'color 0.1s linear',
            }}
            onMouseEnter={e => (e.currentTarget.style.color = '#E8E8E8')}
            onMouseLeave={e => (e.currentTarget.style.color = '#888888')}
          >
            {link.label}
          </a>
        ))}
      </div>

      {/* Mobile: [menu] button */}
      <button
        className="md:hidden"
        onClick={() => setIsOpen(!isOpen)}
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 13,
          color: '#00FF88',
          background: 'transparent',
          border: 'none',
          cursor: 'pointer',
        }}
      >
        {isOpen ? '[ close ]' : '[ menu ]'}
      </button>

      {/* Mobile dropdown */}
      {isOpen && (
        <div
          className="md:hidden"
          style={{
            position: 'absolute',
            top: '48px',
            left: 0,
            right: 0,
            background: '#0F0F0F',
            borderBottom: '1px solid #1F1F1F',
            padding: '16px clamp(20px, 4vw, 48px)',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 13,
                color: '#888888',
                textDecoration: 'none',
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
