'use client'

import { useLanguage } from '@/components/language-provider'
import { Github, Linkedin, Twitter } from 'lucide-react'

const navigation = {
  services: [
    { name: 'Web Development', href: '#' },
    { name: 'Website Modernization', href: '#' },
    { name: 'Business Automation', href: '#' },
    { name: 'E-Commerce Solutions', href: '#' },
  ],
  company: [
    { name: 'About', href: '#' },
    { name: 'Portfolio', href: '#' },
    { name: 'Careers', href: '#' },
    { name: 'Contact', href: '#' },
  ],
  resources: [
    { name: 'Blog', href: '#' },
    { name: 'Case Studies', href: '#' },
    { name: 'Documentation', href: '#' },
    { name: 'Support', href: '#' },
  ],
  social: [
    {
      name: 'GitHub',
      href: '#',
      icon: Github,
    },
    {
      name: 'Twitter',
      href: '#',
      icon: Twitter,
    },
    {
      name: 'LinkedIn',
      href: '#',
      icon: Linkedin,
    },
  ],
}

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer id="contact" className="bg-secondary/30 border-t border-border">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-4">
            <span className="text-2xl font-bold text-foreground">
              Meetapi<span className="text-accent dark:text-accent">.dev</span>
            </span>
            <p className="text-sm leading-relaxed text-muted-foreground max-w-xs">
              {t('footer.tagline')}
            </p>
            <div className="flex space-x-4">
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-muted-foreground hover:text-accent transition-colors"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-5 w-5" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-foreground">{t('footer.services')}</h3>
                <ul role="list" className="mt-4 space-y-3">
                  {navigation.services.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-sm leading-6 text-muted-foreground hover:text-accent transition-colors">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-foreground">{t('footer.company')}</h3>
                <ul role="list" className="mt-4 space-y-3">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-sm leading-6 text-muted-foreground hover:text-accent transition-colors">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-foreground">{t('footer.legal')}</h3>
                <ul role="list" className="mt-4 space-y-3">
                  {navigation.resources.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-sm leading-6 text-muted-foreground hover:text-accent transition-colors">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-border pt-8">
          <p className="text-xs leading-5 text-muted-foreground text-center">
            &copy; {new Date().getFullYear()} Meetapi. {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  )
}
