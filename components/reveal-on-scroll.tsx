'use client'

import { useScrollReveal } from '../hooks/use-scroll-reveal'
import { cn } from '../lib/utils'

type RevealVariant = 'fade-up' | 'fade-in' | 'fade-left' | 'fade-right'

interface RevealOnScrollProps {
    children: React.ReactNode
    ClassName?: string
    variant?: RevealVariant
    delay?: number
    threshold?: number
}

const variantStyles: Record<RevealVariant, { hidden: string; visible: string }> = {
  'fade-up': {
    hidden: 'opacity-0 translate-y-10',
    visible: 'opacity-100 translate-y-0',
  },
  'fade-in': {
    hidden: 'opacity-0',
    visible: 'opacity-100',
  },
  'fade-left': {
    hidden: 'opacity-0 -translate-x-10',
    visible: 'opacity-100 translate-x-0',
  },
  'fade-right': {
    hidden: 'opacity-0 translate-x-10',
    visible: 'opacity-100 translate-x-0',
  },
}

export function RevealOnScroll({
  children,
  ClassName,
  variant = 'fade-up',
  delay = 0,
  threshold = 0.15,
}: RevealOnScrollProps) {
  const { ref, isVisible } = useScrollReveal({ threshold })
  const { hidden, visible } = variantStyles[variant]

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn(
        'transition-all duration-700 ease-out',
        isVisible ? visible : hidden,
        ClassName
      )}
    >
      {children}
    </div>
  )
}