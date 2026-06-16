import type { Metadata } from 'next'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'Nguyen Minh Chi — AI Engineer',
    template: '%s | Nguyen Minh Chi',
  },
  description: 'AI Engineer focused on LLM applications, RAG systems, and agentic workflows. Building production-ready solutions for multilingual settings.',
  openGraph: {
    type: 'website',
    url: 'https://minhchi.dev',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@minhchi1804',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-terminal-black text-gray font-mono">
        <Navbar />
        <main className="pt-12">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
