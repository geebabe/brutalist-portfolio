'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const schema = z.object({
  name:    z.string().min(2, 'Name must be at least 2 characters'),
  email:   z.string().email('Invalid email address'),
  message: z.string().min(20, 'Message must be at least 20 characters'),
})

type FormData = z.infer<typeof schema>

const HEAVY = '━'.repeat(64)

const inputStyle: React.CSSProperties = {
  background: 'transparent',
  border: 'none',
  borderBottom: '1px solid #1F1F1F',
  padding: '4px 0',
  fontFamily: "'JetBrains Mono', monospace",
  fontSize: 14,
  color: '#E8E8E8',
  width: '100%',
  outline: 'none',
  caretColor: '#00FF88',
  transition: 'border-color 0.1s linear',
}

export function Contact() {
  const [loading, setLoading]   = useState(false)
  const [success, setSuccess]   = useState(false)
  const [serverError, setServerError] = useState('')

  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
  })

  const onSubmit = async (data: FormData) => {
    setLoading(true)
    setServerError('')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (res.ok) {
        setSuccess(true)
        reset()
      } else {
        setServerError('→ Error: Failed to send. [500]')
      }
    } catch {
      setServerError('→ Error: Network failure. Try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" style={{ padding: 'clamp(60px, 8vw, 100px) clamp(20px, 4vw, 48px)', borderTop: '1px solid #1F1F1F' }}>
      <div style={{ maxWidth: 900, margin: '0 auto' }}>
        <p className="divider heavy" style={{ marginBottom: 32 }}>{HEAVY}</p>

        <div className="prompt-line" style={{ marginBottom: 48 }}>
          <span className="prefix" style={{ color: '#00FF88' }}>$</span>
          <span style={{ color: '#E8E8E8', fontSize: 'clamp(20px, 2.5vw, 28px)', fontWeight: 700 }}>
            ./contact.sh
          </span>
        </div>

        <div style={{ maxWidth: 640 }}>
          <div className="prompt-line" style={{ marginBottom: 24 }}>
            <span style={{ color: '#444444' }}>#</span>
            <span style={{ color: '#444444', marginLeft: 12 }}>Send a transmission</span>
          </div>

          {success ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <div className="prompt-line">
                <span className="prefix" style={{ color: '#888888' }}>→</span>
                <span style={{ color: '#00FF88' }}>Message sent. [200 OK]</span>
              </div>
              <div className="prompt-line">
                <span className="prefix" style={{ color: '#888888' }}>→</span>
                <span style={{ color: '#888888' }}>I&apos;ll get back to you soon.</span>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* Name */}
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 16, marginBottom: 16 }}>
                <label style={{ fontSize: 13, color: '#888888', whiteSpace: 'nowrap', flexShrink: 0, width: 200 }}>
                  <span style={{ color: '#00FF88' }}>→ </span>Enter your name:
                </label>
                <div style={{ flex: 1 }}>
                  <input
                    type="text"
                    {...register('name')}
                    style={inputStyle}
                    onFocus={e => (e.currentTarget.style.borderBottomColor = '#00FF88')}
                    onBlur={e => (e.currentTarget.style.borderBottomColor = '#1F1F1F')}
                  />
                  {errors.name && (
                    <p style={{ color: '#FF3333', fontSize: 12, marginTop: 4 }}>→ {errors.name.message}</p>
                  )}
                </div>
              </div>

              {/* Email */}
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 16, marginBottom: 16 }}>
                <label style={{ fontSize: 13, color: '#888888', whiteSpace: 'nowrap', flexShrink: 0, width: 200 }}>
                  <span style={{ color: '#00FF88' }}>→ </span>Enter your email:
                </label>
                <div style={{ flex: 1 }}>
                  <input
                    type="email"
                    {...register('email')}
                    style={inputStyle}
                    onFocus={e => (e.currentTarget.style.borderBottomColor = '#00FF88')}
                    onBlur={e => (e.currentTarget.style.borderBottomColor = '#1F1F1F')}
                  />
                  {errors.email && (
                    <p style={{ color: '#FF3333', fontSize: 12, marginTop: 4 }}>→ {errors.email.message}</p>
                  )}
                </div>
              </div>

              {/* Message */}
              <div style={{ marginBottom: 24 }}>
                <div className="prompt-line" style={{ marginBottom: 8 }}>
                  <span style={{ color: '#00FF88' }}>→ </span>
                  <span style={{ color: '#888888' }}>Enter your message:</span>
                </div>
                <textarea
                  {...register('message')}
                  rows={5}
                  style={{
                    ...inputStyle,
                    resize: 'vertical',
                    minHeight: 100,
                    border: '1px solid #1F1F1F',
                    padding: 12,
                  }}
                  onFocus={e => (e.currentTarget.style.borderColor = '#00FF88')}
                  onBlur={e => (e.currentTarget.style.borderColor = '#1F1F1F')}
                />
                {errors.message && (
                  <p style={{ color: '#FF3333', fontSize: 12, marginTop: 4 }}>→ {errors.message.message}</p>
                )}
              </div>

              {serverError && (
                <p style={{ color: '#FF3333', fontSize: 13, marginBottom: 16 }}>{serverError}</p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="btn-primary"
                style={{ opacity: loading ? 0.7 : 1 }}
              >
                {loading ? 'sending...' : 'send --message'}
              </button>
            </form>
          )}

          {/* Direct links */}
          <div style={{ marginTop: 48 }}>
            <div className="prompt-line" style={{ marginBottom: 8 }}>
              <span style={{ color: '#444444' }}>#</span>
              <span style={{ color: '#444444', marginLeft: 12 }}>Or reach me directly:</span>
            </div>
            {[
              { label: 'email',    value: 'minhchi1804@gmail.com', href: 'mailto:minhchi1804@gmail.com' },
              { label: 'github',   value: 'github.com/minhchi1804',  href: 'https://github.com/minhchi1804' },
              { label: 'linkedin', value: 'linkedin.com/in/minhchi1804', href: 'https://linkedin.com/in/minhchi1804' },
            ].map(({ label, value, href }) => (
              <div key={label} className="prompt-line">
                <span className="prefix" style={{ color: '#888888' }}>→</span>
                <span>
                  <span style={{ color: '#E8E8E8', display: 'inline-block', width: 80 }}>{label}:</span>
                  <a
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="hover-white-from-green"
                  >
                    {value}
                  </a>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
