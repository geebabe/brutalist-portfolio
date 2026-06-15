'use client'

import { useState, useEffect } from 'react'

interface ToastProps {
  message: string
  type?: 'success' | 'error'
  duration?: number
}

export function Toast({ message, type = 'success', duration = 3000 }: ToastProps) {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(false), duration)
    return () => clearTimeout(timer)
  }, [duration])

  if (!isVisible) return null

  const borderColor = type === 'success' ? 'border-l-violet' : 'border-l-violet-dim'
  const textColor = type === 'success' ? 'text-parchment-light' : 'text-violet-dim'

  return (
    <div className={`fixed bottom-6 right-6 border-l-2 ${borderColor} bg-shadow/80 backdrop-blur-sm ${textColor} px-6 py-4 font-mono text-sm uppercase tracking-wide z-50 flex items-center justify-between gap-4`}>
      <span>{message}</span>
      <button onClick={() => setIsVisible(false)} className="text-parchment-dim hover:text-parchment transition-colors duration-300">
        ✕
      </button>
    </div>
  )
}
