'use client'

import { Card, CardContent } from '@/components/ui/card'
import { useLanguage } from '@/components/language-provider'
import { Code2, Database, LineChart, Lock, Smartphone, Cloud } from 'lucide-react'

const solutionKeys = [
  { icon: Code2, titleKey: 'solutions.webdev.title', descKey: 'solutions.webdev.description', metric: '99.9%', metricLabel: 'Uptime' },
  { icon: Smartphone, titleKey: 'solutions.responsive.title', descKey: 'solutions.responsive.description', metric: '100%', metricLabel: 'Mobile Ready' },
  { icon: LineChart, titleKey: 'solutions.performance.title', descKey: 'solutions.performance.description', metric: '<1s', metricLabel: 'Load Time' },
  { icon: Lock, titleKey: 'solutions.security.title', descKey: 'solutions.security.description', metric: 'SSL', metricLabel: 'Encrypted' },
  { icon: Database, titleKey: 'solutions.scalable.title', descKey: 'solutions.scalable.description', metric: '1000x', metricLabel: 'Scalable' },
  { icon: Cloud, titleKey: 'solutions.cloud.title', descKey: 'solutions.cloud.description', metric: '24/7', metricLabel: 'Available' },
]

export function SolutionsSection() {
  const { t } = useLanguage()

  return (
    <section id="solutions" className="py-20 sm:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            {t('solutions.title')}
          </h2>
          <p className="mt-4 text-lg leading-8 text-muted-foreground text-pretty">
            {t('solutions.subtitle')}
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 xl:grid-cols-3">
          {solutionKeys.map((solution) => (
            <Card key={solution.titleKey} className="bg-card border-border group hover:border-accent transition-colors">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
                    <solution.icon className="h-6 w-6 text-accent" />
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-foreground">{solution.metric}</div>
                    <div className="text-xs text-muted-foreground">{solution.metricLabel}</div>
                  </div>
                </div>
                <h3 className="mt-4 text-lg font-semibold text-foreground">{t(solution.titleKey)}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t(solution.descKey)}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
