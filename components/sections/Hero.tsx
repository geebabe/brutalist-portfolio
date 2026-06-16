'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const LINES = [
  { prefix: '$', text: 'whoami', color: '#E8E8E8' },
  { prefix: '→', text: 'Nguyen Minh Chi · AI Engineer', color: '#888888' },
  { prefix: '$', text: 'cat about.txt', color: '#E8E8E8' },
  { prefix: '→', text: 'Building intelligent systems that think at the edge of language.', color: '#888888' },
  { prefix: '→', text: 'Based in Ho Chi Minh City. Open to remote.', color: '#888888' },
  { prefix: '→', text: 'Currently: RAG pipelines, agent architectures, production MLOps.', color: '#888888' },
  { prefix: '$', text: 'ls ./links', color: '#E8E8E8' },
  { prefix: '→', text: 'github  linkedin  email', color: '#888888' },
]

function Typewriter() {
  const [displayed, setDisplayed] = useState<string[]>([])
  const [currentLine, setCurrentLine] = useState(0)
  const [currentChar, setCurrentChar] = useState(0)
  const [done, setDone] = useState(false)

  useEffect(() => {
    if (currentLine >= LINES.length) {
      setDone(true)
      return
    }
    const line = LINES[currentLine]
    if (currentChar < line.text.length) {
      const t = setTimeout(() => {
        setDisplayed(prev => {
          const next = [...prev]
          next[currentLine] = (next[currentLine] || '') + line.text[currentChar]
          return next
        })
        setCurrentChar(c => c + 1)
      }, 35)
      return () => clearTimeout(t)
    } else {
      const t = setTimeout(() => {
        setCurrentLine(l => l + 1)
        setCurrentChar(0)
      }, 400)
      return () => clearTimeout(t)
    }
  }, [currentLine, currentChar])

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
      {LINES.map((line, i) => (
        <div key={i} className="prompt-line">
          <span
            className="prefix"
            style={{ color: line.prefix === '$' ? '#00FF88' : '#888888' }}
          >
            {line.prefix}
          </span>
          <span style={{ color: line.color }}>
            {displayed[i] || ''}
            {i === currentLine && !done && <span className="cursor" />}
          </span>
        </div>
      ))}
      {done && (
        <div className="prompt-line">
          <span className="prefix" style={{ color: '#00FF88' }}>$</span>
          <span className="cursor" />
        </div>
      )}
    </div>
  )
}

export function Hero() {
  return (
    <section
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        padding: 'clamp(80px, 10vw, 120px) clamp(20px, 4vw, 48px) clamp(60px, 8vw, 100px)',
      }}
    >
      {/* CRT scanline */}
      <div className="scanline" />

      <div style={{ maxWidth: 900, width: '100%', margin: '0 auto' }}>
        {/* Terminal window */}
        <div className="terminal-window" style={{ marginBottom: 32 }}>
          <div className="terminal-chrome">
            <div className="chrome-dots">
              <span style={{ background: '#FF5F57' }} />
              <span style={{ background: '#FEBC2E' }} />
              <span style={{ background: '#28C840' }} />
            </div>
            <span className="chrome-title">bash — 80×24</span>
          </div>
          <div className="terminal-body">
            <Typewriter />
          </div>
        </div>

        {/* CTA buttons */}
        <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
          <Link href="#projects" className="btn-primary">
            view ./projects
          </Link>
          <Link href="#contact" className="btn-secondary">
            open ./contact
          </Link>
        </div>
      </div>
    </section>
  )
}
