import { Header } from '@/components/header'
import { HeroSection } from '@/components/hero-section'
import { ServicesSection } from '@/components/services-section'
import { SolutionsSection } from '@/components/solutions-section'
import { ProcessSection } from '@/components/process-section'
import { CTASection } from '@/components/cta-section'
import { Footer } from '@/components/footer'

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <SolutionsSection />
        <ProcessSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
