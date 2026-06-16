export function Footer() {
  return (
    <footer style={{ borderTop: '1px solid #1F1F1F', padding: '48px clamp(20px, 4vw, 48px)' }}>
      <div style={{ maxWidth: 900, margin: '0 auto' }}>
        <p style={{ color: '#444444', fontSize: 12, marginBottom: 8 }}>$ exit</p>
        <p style={{ color: '#444444', fontSize: 12, marginBottom: 24 }}>→ Connection closed.</p>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
          <span style={{ color: '#444444', fontSize: 12 }}># Nguyen Minh Chi · 2026 · Built with Next.js</span>
          <div style={{ display: 'flex', gap: 24 }}>
            <a
              href="https://github.com/minhchi1804"
              target="_blank"
              rel="noopener noreferrer"
              className="hover-green"
              style={{ fontSize: 12 }}
            >
              github
            </a>
            <a
              href="https://linkedin.com/in/minhchi1804"
              target="_blank"
              rel="noopener noreferrer"
              className="hover-green"
              style={{ fontSize: 12 }}
            >
              linkedin
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
