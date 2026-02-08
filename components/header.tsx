'use client'

import { Button } from '@/components/ui/button'
import { ThemeToggle } from '@/components/theme-toggle'
import { LanguageToggle } from '@/components/language-toggle'
import { useLanguage } from '@/components/language-provider'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { t } = useLanguage()

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8">
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="text-2xl font-bold text-foreground">
              Meetapi<span className="text-accent dark:text-accent">.dev</span>
            </span>
          </a>
        </div>
        <div className="flex lg:hidden items-center gap-x-2">
          <LanguageToggle />
          <ThemeToggle />
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Toggle menu</span>
            {mobileMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-8">
          <a href="#services" className="text-sm font-medium leading-6 text-foreground hover:text-accent transition-colors">
            {t('nav.services')}
          </a>
          <a href="#solutions" className="text-sm font-medium leading-6 text-foreground hover:text-accent transition-colors">
            {t('nav.solutions')}
          </a>
          <a href="#process" className="text-sm font-medium leading-6 text-foreground hover:text-accent transition-colors">
            {t('nav.process')}
          </a>
          <a href="#contact" className="text-sm font-medium leading-6 text-foreground hover:text-accent transition-colors">
            {t('nav.contact')}
          </a>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-3 lg:items-center">
          <LanguageToggle />
          <ThemeToggle />
          <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
            {t('nav.getStarted')}
          </Button>
        </div>
      </nav>
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-border/40">
          <div className="space-y-1 px-4 pb-3 pt-2">
            <a
              href="#services"
              className="block rounded-md px-3 py-2 text-base font-medium text-foreground hover:bg-secondary"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t('nav.services')}
            </a>
            <a
              href="#solutions"
              className="block rounded-md px-3 py-2 text-base font-medium text-foreground hover:bg-secondary"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t('nav.solutions')}
            </a>
            <a
              href="#process"
              className="block rounded-md px-3 py-2 text-base font-medium text-foreground hover:bg-secondary"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t('nav.process')}
            </a>
            <a
              href="#contact"
              className="block rounded-md px-3 py-2 text-base font-medium text-foreground hover:bg-secondary"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t('nav.contact')}
            </a>
            <div className="pt-2">
              <Button size="lg" className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                {t('nav.getStarted')}
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
