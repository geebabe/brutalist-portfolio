import experienceData from '@/content/experience.json'

const HEAVY = '━'.repeat(64)

function fmtDate(dateStr: string) {
  const d = new Date(dateStr)
  return d.toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
}

function shortHash(id: string) {
  const chars = 'abcdef0123456789'
  let hash = ''
  for (let i = 0; i < 7; i++) {
    hash += chars[(id.charCodeAt(i % id.length) * (i + 1)) % chars.length]
  }
  return hash
}

export function Experience() {
  const sorted = [...experienceData].sort(
    (a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime()
  )

  return (
    <section id="experience" style={{ padding: 'clamp(60px, 8vw, 100px) clamp(20px, 4vw, 48px)', borderTop: '1px solid #1F1F1F' }}>
      <div style={{ maxWidth: 900, margin: '0 auto' }}>
        <p className="divider heavy" style={{ marginBottom: 32 }}>{HEAVY}</p>

        <div className="prompt-line" style={{ marginBottom: 48 }}>
          <span className="prefix" style={{ color: '#00FF88' }}>$</span>
          <span style={{ color: '#E8E8E8', fontSize: 'clamp(20px, 2.5vw, 28px)', fontWeight: 700 }}>
            git log --oneline --experience
          </span>
        </div>

        {sorted.map((job, idx) => {
          const isHead = idx === 0
          const startLabel = fmtDate(job.startDate)
          const endLabel = job.endDate ? fmtDate(job.endDate) : 'Present'

          return (
            <div key={job.id}>
              {idx > 0 && (
                <p className="divider heavy" style={{ margin: '32px 0' }}>{HEAVY}</p>
              )}

              <div className="prompt-line" style={{ marginBottom: 4 }}>
                <span style={{ color: '#444444' }}>commit</span>
                <span style={{ color: '#FFB800', marginLeft: 8 }}>{shortHash(job.id)}</span>
                {isHead && (
                  <span style={{ color: '#00FF88', marginLeft: 8 }}>(HEAD → present)</span>
                )}
              </div>

              <div className="prompt-line" style={{ marginBottom: 4 }}>
                <span style={{ color: '#444444' }}>Author:</span>
                <span style={{ color: '#888888', marginLeft: 8 }}>Nguyen Minh Chi</span>
              </div>

              <div className="prompt-line" style={{ marginBottom: 16 }}>
                <span style={{ color: '#444444' }}>Date:</span>
                <span style={{ color: '#444444', marginLeft: 8 }}>{startLabel} — {endLabel}</span>
              </div>

              <div style={{ paddingLeft: 24, marginBottom: 12 }}>
                <p style={{ color: '#E8E8E8', fontSize: 15, fontWeight: 700, marginBottom: 12 }}>
                  {job.role} @{' '}
                  <a
                    href={job.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover-green-from-white"
                  >
                    {job.company}
                  </a>
                </p>

                <ul style={{ display: 'flex', flexDirection: 'column', gap: 4, marginBottom: 12 }}>
                  {job.highlights.map((h, i) => (
                    <li key={i} style={{ display: 'flex', gap: 8, alignItems: 'flex-start' }}>
                      <span style={{ color: '#444444', flexShrink: 0 }}>-</span>
                      <span style={{ color: '#888888', fontSize: 13, lineHeight: 1.8 }}>{h}</span>
                    </li>
                  ))}
                </ul>

                {job.tags && (
                  <div className="prompt-line">
                    <span style={{ color: '#444444' }}>Tags:</span>
                    <span style={{ color: '#888888', marginLeft: 8, fontSize: 13 }}>
                      {job.tags.join(' · ')}
                    </span>
                  </div>
                )}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
