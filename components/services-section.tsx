'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { useLanguage } from '@/components/language-provider'
import { Globe, RefreshCw, Cog, Zap, ShoppingCart, TrendingUp } from 'lucide-react'

const serviceKeys = [
  { icon: Globe, titleKey: 'services.website.title', descKey: 'services.website.description' },
  { icon: RefreshCw, titleKey: 'services.modernize.title', descKey: 'services.modernize.description' },
  { icon: Cog, titleKey: 'services.automation.title', descKey: 'services.automation.description' },
  { icon: Zap, titleKey: 'services.optimize.title', descKey: 'services.optimize.description' },
  { icon: ShoppingCart, titleKey: 'services.ecommerce.title', descKey: 'services.ecommerce.description' },
  { icon: TrendingUp, titleKey: 'services.growth.title', descKey: 'services.growth.description' },
]

export function ServicesSection() {
  const { t } = useLanguage()

  return (
    <section id="services" className="py-20 sm:py-32 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            {t('services.title')}
          </h2>
          <p className="mt-4 text-lg leading-8 text-muted-foreground text-pretty">
            {t('services.subtitle')}
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {serviceKeys.map((service) => (
            <Card key={service.titleKey} className="bg-card border-border hover:border-accent transition-colors">
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                  <service.icon className="h-6 w-6 text-accent" />
                </div>
                <CardTitle className="text-xl">{t(service.titleKey)}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">{t(service.descKey)}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
