import projectsData from '@/content/projects.json'

const HEAVY = '━'.repeat(64)

function slugify(title: string) {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
}

export function Projects() {
  const featured = projectsData.filter((p) => p.featured)

  return (
    <section id="projects" style={{ padding: 'clamp(60px, 8vw, 100px) clamp(20px, 4vw, 48px)', borderTop: '1px solid #1F1F1F' }}>
      <div style={{ maxWidth: 900, margin: '0 auto' }}>
        <p className="divider heavy" style={{ marginBottom: 32 }}>{HEAVY}</p>

        <div className="prompt-line" style={{ marginBottom: 48 }}>
          <span className="prefix" style={{ color: '#00FF88' }}>$</span>
          <span style={{ color: '#E8E8E8', fontSize: 'clamp(20px, 2.5vw, 28px)', fontWeight: 700 }}>
            ls ./projects --featured
          </span>
        </div>

        {featured.map((project, idx) => (
          <div key={project.id}>
            {idx > 0 && (
              <p className="divider light" style={{ margin: '32px 0' }}>{'─'.repeat(64)}</p>
            )}

            <div className="prompt-line" style={{ marginBottom: 12 }}>
              <span className="prefix" style={{ color: '#00FF88' }}>$</span>
              <span style={{ color: '#E8E8E8' }}>
                cat projects/{slugify(project.title)}.md
              </span>
            </div>

            <div style={{ paddingLeft: 26 }}>
              <div className="prompt-line" style={{ marginBottom: 8 }}>
                <span style={{ color: '#444444' }}>#</span>
                <span style={{ color: '#E8E8E8', fontSize: 16, fontWeight: 700, marginLeft: 12 }}>
                  {project.title}
                </span>
              </div>

              <div style={{ maxWidth: 640, marginBottom: 12 }}>
                {project.longDescription.split('. ').filter(Boolean).slice(0, 3).map((sentence, i) => (
                  <div key={i} className="prompt-line">
                    <span className="prefix" style={{ color: '#888888' }}>→</span>
                    <span style={{ color: '#888888' }}>{sentence}{sentence.endsWith('.') ? '' : '.'}</span>
                  </div>
                ))}
              </div>

              <div style={{ marginBottom: 8 }}>
                <div className="prompt-line" style={{ marginBottom: 4 }}>
                  <span style={{ color: '#444444' }}>#</span>
                  <span style={{ color: '#E8E8E8', marginLeft: 12 }}>Stack</span>
                </div>
                <div className="prompt-line">
                  <span className="prefix" style={{ color: '#888888' }}>→</span>
                  <span style={{ color: '#888888' }}>{project.tags.join(' · ')}</span>
                </div>
              </div>

              <div className="prompt-line" style={{ marginBottom: 8 }}>
                <span style={{ color: '#444444' }}>#</span>
                <span style={{ color: '#E8E8E8', marginLeft: 12 }}>Year</span>
                <span style={{ color: '#888888', marginLeft: 24 }}>→ {project.year}</span>
              </div>

              {(project.githubUrl || project.liveUrl) && (
                <div>
                  <div className="prompt-line" style={{ marginBottom: 4 }}>
                    <span style={{ color: '#444444' }}>#</span>
                    <span style={{ color: '#E8E8E8', marginLeft: 12 }}>Links</span>
                  </div>
                  {project.githubUrl && (
                    <div className="prompt-line">
                      <span className="prefix" style={{ color: '#888888' }}>→</span>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover-white-from-green"
                      >
                        [source: {project.githubUrl}]
                      </a>
                    </div>
                  )}
                  {project.liveUrl && (
                    <div className="prompt-line">
                      <span className="prefix" style={{ color: '#888888' }}>→</span>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover-white-from-green"
                      >
                        [live: {project.liveUrl}]
                      </a>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
