import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        void:            '#080810',
        'deep-indigo':   '#0E0C18',
        shadow:          '#151225',
        'border-dim':    '#1E1A35',
        'border-mid':    '#2E2850',
        'violet-dim':    '#4B3F88',
        violet:          '#6B5EA8',
        'violet-bright': '#9B8FD8',
        'parchment-dim': '#8A85A0',
        'parchment-mid': '#C4BEDC',
        parchment:       '#E8E4F0',
        'parchment-light': '#F5F2FF',
        'spice-gold':    '#C9A84C',
      },
      fontFamily: {
        display: ['Cormorant Garamond', 'serif'],
        sans:    ['Inter', 'system-ui', 'sans-serif'],
        mono:    ['JetBrains Mono', 'monospace'],
      },
      letterSpacing: {
        ritual:  '0.2em',
        wide:    '0.1em',
        normal:  '0.04em',
      },
      animation: {
        'glow-pulse': 'glowPulse 8s ease-in-out infinite',
        'fade-up':    'fadeUp 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        glowPulse: {
          '0%, 100%': { opacity: '0.6' },
          '50%':      { opacity: '1' },
        },
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      spacing: {
        section: 'clamp(80px, 12vw, 140px)',
      },
      maxWidth: {
        prose: '640px',
        wide: '900px',
        full: '1100px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
export default config
