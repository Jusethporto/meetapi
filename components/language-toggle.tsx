'use client'

import { Button } from '@/components/ui/button'
import { useLanguage } from '@/components/language-provider'
import { Languages } from 'lucide-react'

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage()

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'es' : 'en')
  }

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLanguage}
      className="gap-x-2"
      aria-label="Toggle language"
    >
      <Languages className="h-4 w-4" />
      <span className="text-sm font-medium">{language === 'en' ? 'ES' : 'EN'}</span>
    </Button>
  )
}
