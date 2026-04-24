'use client'

import { Button } from '@/components/ui/button'
import { useLanguage } from '@/components/language-provider'
import { RevealOnScroll } from '@/components/reveal-on-scroll'
import { useEffect, useMemo, useRef, useState } from 'react'

export function HeroSection() {
  const { t } = useLanguage()

  const script = useMemo(
    () => [
      'Initializing personal intelligence...',
      'Connecting data sources...',
      'Training intelligence model...',
      'Generating API endpoint...',
      'Status: Ready',
    ],
    [],
  )

  const [lines, setLines] = useState<string[]>([''])
  const [lineIndex, setLineIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const timeoutsRef = useRef<number[]>([])

  useEffect(() => {
    const clearAll = () => {
      for (const id of timeoutsRef.current) window.clearTimeout(id)
      timeoutsRef.current = []
    }

    clearAll()

    const typeTick = () => {
      const current = script[lineIndex] ?? ''
      const isLineDone = charIndex >= current.length

      if (!isLineDone) {
        setLines((prev) => {
          const next = [...prev]
          const active = next[lineIndex] ?? ''
          next[lineIndex] = active + current[charIndex]
          return next
        })

        setCharIndex((c) => c + 1)

        const speed = current[charIndex] === '.' ? 55 : 22
        timeoutsRef.current.push(window.setTimeout(typeTick, speed))
        return
      }

      if (lineIndex < script.length - 1) {
        timeoutsRef.current.push(
          window.setTimeout(() => {
            setLines((prev) => (prev[lineIndex + 1] ? prev : [...prev, '']))
            setLineIndex((i) => i + 1)
            setCharIndex(0)
          }, 520),
        )
        return
      }

      timeoutsRef.current.push(
        window.setTimeout(() => {
          setLines([''])
          setLineIndex(0)
          setCharIndex(0)
        }, 1400),
      )
    }

    timeoutsRef.current.push(window.setTimeout(typeTick, 500))

    return () => clearAll()
  }, [charIndex, lineIndex, script])

  return (
    <section className="relative overflow-hidden bg-[#0B0F19] py-20 sm:py-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-gradient-to-br from-indigo-500/30 via-sky-500/20 to-fuchsia-500/25 blur-3xl" />
        <div className="absolute -bottom-40 right-[-120px] h-[520px] w-[520px] rounded-full bg-gradient-to-br from-fuchsia-500/25 via-indigo-500/20 to-sky-500/15 blur-3xl" />
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="mx-auto max-w-2xl text-center lg:mx-0 lg:text-left">
            <RevealOnScroll variant="fade-up" threshold={0.1}>
              <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl text-balance">
                {t('hero.title')}
              </h1>
            </RevealOnScroll>
            <RevealOnScroll variant="fade-up" delay={150} threshold={0.1}>
              <p className="mt-6 text-lg leading-8 text-white/70 sm:text-xl text-pretty">
                {t('hero.subtitle')}
              </p>
            </RevealOnScroll>
            <RevealOnScroll variant="fade-up" delay={300} threshold={0.1}>
              <div className="mt-10 flex items-center justify-center gap-x-6 flex-wrap gap-y-4 lg:justify-start">
                <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 h-12 px-8 text-base">
                  <a href="https://wa.me/573135714785" target="_blank" rel="noopener noreferrer">
                    {t('hero.cta')}
                    <span className="ml-2 h-5 w-5" />
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="h-12 px-8 text-base bg-transparent text-white border-white/15 hover:bg-white/5 hover:text-white">
                  {t('hero.learnMore')}
                </Button>
              </div>
            </RevealOnScroll>
          </div>

          <RevealOnScroll variant="fade-up" delay={200} threshold={0.1}>
            <div className="relative mx-auto w-full max-w-xl">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-indigo-500/35 via-sky-500/15 to-fuchsia-500/25 blur-xl" />
              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.65)] backdrop-blur-xl">
                <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.04] px-4 py-3">
                  <div className="h-2.5 w-2.5 rounded-full bg-rose-400/80" />
                  <div className="h-2.5 w-2.5 rounded-full bg-amber-300/80" />
                  <div className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
                  <div className="ml-3 text-xs font-medium text-white/55">meetapi://terminal</div>
                </div>

                <div className="px-5 py-5 sm:px-6 sm:py-6">
                  <div className="font-mono text-[13px] leading-6 text-white/80 sm:text-sm">
                    {lines.map((line, i) => {
                      const isActive = i === lineIndex
                      return (
                        <div key={i} className="flex gap-3">
                          <span className="select-none text-white/35">$</span>
                          <span className="whitespace-pre-wrap break-words">
                            {line}
                            {isActive ? <span className="ml-0.5 inline-block h-4 w-2 align-[-2px] bg-white/80 terminal-cursor" /> : null}
                          </span>
                        </div>
                      )
                    })}
                  </div>

                  <div className="mt-5 rounded-xl border border-white/10 bg-black/25 px-4 py-3">
                    <div className="text-xs text-white/55">Endpoint</div>
                    <div className="mt-1 font-mono text-sm text-white/85">POST /v1/intelligence</div>
                  </div>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>

      <style jsx>{`
        .terminal-cursor {
          animation: terminalBlink 1s steps(2, start) infinite;
        }
        @keyframes terminalBlink {
          to {
            opacity: 0;
          }
        }
      `}</style>
    </section>
  )
}
