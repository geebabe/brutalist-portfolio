export function Footer() {
  return (
    <footer className="border-t border-border-dim py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-caption">
        <p>
          © 2025 Nguyen Minh Chi · Built with Next.js
        </p>
        <div className="flex gap-6 font-mono text-xs uppercase tracking-wide">
          <a
            href="https://github.com/minhchi1804"
            target="_blank"
            rel="noopener noreferrer"
            className="text-parchment-dim hover:text-violet transition-colors duration-300"
          >
            GitHub
          </a>
          <span className="text-border-dim">·</span>
          <a
            href="https://linkedin.com/in/minhchi1804"
            target="_blank"
            rel="noopener noreferrer"
            className="text-parchment-dim hover:text-violet transition-colors duration-300"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  )
}
