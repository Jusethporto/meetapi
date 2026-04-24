'use client'

import { Button } from '@/components/ui/button'
import { useLanguage } from '@/components/language-provider'
import { RevealOnScroll } from '@/components/reveal-on-scroll'
import { ArrowRight } from 'lucide-react'

export function HeroSection() {
  const { t } = useLanguage()
  return (
    <section className="relative overflow-hidden bg-background py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <RevealOnScroll variant="fade-up" threshold={0.1}>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl text-balance">
              {t('hero.title')}
            </h1>
          </RevealOnScroll>
          <RevealOnScroll variant="fade-up" delay={150} threshold={0.1}>
            <p className="mt-6 text-lg leading-8 text-muted-foreground sm:text-xl text-pretty">
              {t('hero.subtitle')}
            </p>
          </RevealOnScroll>
          <RevealOnScroll variant="fade-up" delay={300} threshold={0.1}>
            <div className="mt-10 flex items-center justify-center gap-x-6 flex-wrap gap-y-4">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 h-12 px-8 text-base">
                {t('hero.cta')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="h-12 px-8 text-base bg-transparent">
                {t('hero.learnMore')}
              </Button>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  )
}
