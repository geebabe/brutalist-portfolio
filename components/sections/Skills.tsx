import skillsData from '@/content/skills.json'

const HEAVY = '━'.repeat(64)

export function Skills() {
  return (
    <section id="skills" style={{ padding: 'clamp(60px, 8vw, 100px) clamp(20px, 4vw, 48px)', borderTop: '1px solid #1F1F1F' }}>
      <div style={{ maxWidth: 900, margin: '0 auto' }}>
        <p className="divider heavy" style={{ marginBottom: 32 }}>{HEAVY}</p>

        <div className="prompt-line" style={{ marginBottom: 32 }}>
          <span className="prefix" style={{ color: '#00FF88' }}>$</span>
          <span style={{ color: '#E8E8E8', fontSize: 'clamp(20px, 2.5vw, 28px)', fontWeight: 700 }}>
            ls ./skills --group-by=category
          </span>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
          gap: '32px 48px',
        }}>
          {skillsData.map((category) => (
            <div key={category.category}>
              <div className="prompt-line" style={{ marginBottom: 4 }}>
                <span style={{ color: '#00FF88', fontSize: 13 }}>drwxr-xr-x</span>
                <span style={{ color: '#FFB800', fontSize: 13, marginLeft: 12 }}>{category.category}</span>
              </div>
              {category.items.map((skill) => (
                <div key={skill.name} className="prompt-line" style={{ paddingLeft: 8 }}>
                  <span style={{ color: '#444444', fontSize: 13 }}>-rw-r--r--</span>
                  <span style={{ color: '#888888', fontSize: 13, marginLeft: 12 }}>{skill.name}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
