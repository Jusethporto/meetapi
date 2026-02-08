'use client'

import { Button } from '@/components/ui/button'
import { useLanguage } from '@/components/language-provider'
import { ArrowRight } from 'lucide-react'

export function CTASection() {
  const { t } = useLanguage()
  return (
    <section className="py-20 sm:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl bg-accent px-6 py-16 sm:px-16 sm:py-24">
          <div className="relative mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-accent-foreground sm:text-4xl text-balance">
              {t('cta.title')}
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-accent-foreground/90 text-pretty">
              {t('cta.subtitle')}
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button size="lg" variant="secondary" className="h-12 px-8 text-base bg-background text-foreground hover:bg-background/90">
                {t('cta.button')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
