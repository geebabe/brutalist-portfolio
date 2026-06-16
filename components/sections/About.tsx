import Image from 'next/image'

const HEAVY = '━'.repeat(64)

const quickFacts = [
  { key: 'Location',  value: 'Ho Chi Minh City, Vietnam' },
  { key: 'Status',    value: 'Open to remote opportunities' },
  { key: 'Focus',     value: 'LLM systems, RAG, production ML' },
  { key: 'Languages', value: 'Python, TypeScript, SQL' },
]

export function About() {
  return (
    <section id="about" style={{ padding: 'clamp(60px, 8vw, 100px) clamp(20px, 4vw, 48px)', borderTop: '1px solid #1F1F1F' }}>
      <div style={{ maxWidth: 900, margin: '0 auto' }}>
        <p className="divider heavy" style={{ marginBottom: 32 }}>{HEAVY}</p>

        <div className="prompt-line" style={{ marginBottom: 32 }}>
          <span className="prefix" style={{ color: '#00FF88' }}>$</span>
          <span style={{ color: '#E8E8E8', fontSize: 'clamp(20px, 2.5vw, 28px)', fontWeight: 700 }}>
            cat README.md
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_200px] gap-12 items-start">
          {/* Prose */}
          <div>
            <div className="prompt-line" style={{ marginBottom: 16 }}>
              <span className="prefix" style={{ color: '#444444' }}>#</span>
              <span style={{ color: '#00FF88', fontWeight: 700, fontSize: 16 }}>About</span>
            </div>

            <div style={{ maxWidth: 640, marginBottom: 32 }}>
              <div className="prompt-line" style={{ marginBottom: 8 }}>
                <span className="prefix" style={{ color: '#888888' }}>→</span>
                <span style={{ color: '#888888' }}>
                  As an AI Engineer, I architect and build production AI systems — RAG pipelines, agentic workflows, and LLM-powered services that run at scale. My work lives at the intersection of research and deployment.
                </span>
              </div>
              <div className="prompt-line" style={{ marginBottom: 8 }}>
                <span className="prefix" style={{ color: '#888888' }}>→</span>
                <span style={{ color: '#888888' }}>
                  Previously at VinBigData and IMT Solutions, building conversational AI and intelligent document processing systems serving thousands of users daily.
                </span>
              </div>
              <div className="prompt-line">
                <span className="prefix" style={{ color: '#888888' }}>→</span>
                <span style={{ color: '#888888' }}>
                  Curious about low-resource NLP and multilingual systems. Ships things that actually work in production.
                </span>
              </div>
            </div>

            <div className="prompt-line" style={{ marginBottom: 16 }}>
              <span className="prefix" style={{ color: '#444444' }}>#</span>
              <span style={{ color: '#00FF88', fontWeight: 700, fontSize: 16 }}>Quick facts</span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              {quickFacts.map(({ key, value }) => (
                <div key={key} className="prompt-line">
                  <span className="prefix" style={{ color: '#888888' }}>→</span>
                  <span>
                    <span style={{ color: '#E8E8E8', display: 'inline-block', width: 96 }}>{key}</span>
                    <span style={{ color: '#888888' }}>{value}</span>
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Photo */}
          <div>
            <Image
              src="/avatar.jpg"
              alt="Nguyen Minh Chi"
              width={200}
              height={200}
              style={{
                width: '100%',
                aspectRatio: '1',
                objectFit: 'cover',
                filter: 'contrast(1.05)',
                border: '1px solid #1F1F1F',
                display: 'block',
              }}
            />
            <p style={{ fontSize: 11, color: '#444444', textAlign: 'center', marginTop: 8 }}>
              # avatar.jpg · 2025
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
