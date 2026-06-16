import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'terminal-black': '#090909',
        surface:          '#0F0F0F',
        'surface-raised': '#141414',
        border:           '#1F1F1F',
        'border-active':  '#2F2F2F',
        green:            '#00FF88',
        'green-dim':      '#00CC6A',
        'green-muted':    'rgba(0,255,136,0.2)',
        amber:            '#FFB800',
        red:              '#FF3333',
        white:            '#E8E8E8',
        gray:             '#888888',
        'gray-dim':       '#444444',
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'monospace'],
      },
      borderRadius: {
        DEFAULT: '0',
        none:    '0',
        sm:      '0',
        md:      '0',
        lg:      '0',
        xl:      '0',
        full:    '9999px',
      },
      animation: {
        blink:    'blink 1s step-end infinite',
        scanline: 'scanline 8s linear infinite',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%':      { opacity: '0' },
        },
        scanline: {
          '0%':   { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
      },
      spacing: {
        1: '8px',
        2: '16px',
        3: '24px',
        4: '32px',
        5: '40px',
        6: '48px',
        8: '64px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

export default config
