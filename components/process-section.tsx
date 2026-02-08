'use client'

import { useLanguage } from '@/components/language-provider'

const stepKeys = [
  { number: '01', titleKey: 'process.discovery.title', descKey: 'process.discovery.description' },
  { number: '02', titleKey: 'process.design.title', descKey: 'process.design.description' },
  { number: '03', titleKey: 'process.development.title', descKey: 'process.development.description' },
  { number: '04', titleKey: 'process.launch.title', descKey: 'process.launch.description' },
]

export function ProcessSection() {
  const { t } = useLanguage()
  return (
    <section id="process" className="py-20 sm:py-32 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            {t('process.title')}
          </h2>
          <p className="mt-4 text-lg leading-8 text-muted-foreground text-pretty">
            {t('process.subtitle')}
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-5xl">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12">
            {stepKeys.map((step, index) => (
              <div key={step.number} className="relative">
                <div className="flex items-start gap-4">
                  <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-lg bg-accent text-accent-foreground font-bold text-xl">
                    {step.number}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground">{t(step.titleKey)}</h3>
                    <p className="mt-2 text-base leading-relaxed text-muted-foreground">{t(step.descKey)}</p>
                  </div>
                </div>
                {index < stepKeys.length - 1 && (
                  <div className="absolute left-7 top-14 h-full w-0.5 bg-border md:block hidden" aria-hidden="true" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
