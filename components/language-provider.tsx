'use client'

import { createContext, useContext, useState, useEffect, type ReactNode } from 'react'

type Language = 'en' | 'es'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const translations = {
  en: {
    // Header
    'nav.services': 'Services',
    'nav.solutions': 'Solutions',
    'nav.process': 'Process',
    'nav.contact': 'Contact',
    'nav.getStarted': 'Get Started',
    
    // Hero
    'hero.title': 'Transform Your Business with Intelligent Web Solutions',
    'hero.subtitle': 'We specialize in creating cutting-edge websites, powerful automations, and strategic digital solutions that drive real business growth.',
    'hero.cta': 'Start Your Project',
    'hero.learnMore': 'Learn More',
    
    // Services
    'services.title': 'Our Services',
    'services.subtitle': 'Comprehensive web solutions tailored to your business needs',
    'services.website.title': 'New Websites',
    'services.website.description': 'Launch your digital presence with a custom-built, modern website designed to attract and convert your ideal customers.',
    'services.modernize.title': 'Site Modernization',
    'services.modernize.description': 'Revitalize your existing website with modern design, improved performance, and enhanced user experience.',
    'services.automation.title': 'Business Automation',
    'services.automation.description': 'Streamline operations with custom automation solutions that save time and reduce manual tasks.',
    'services.optimize.title': 'Automation Optimization',
    'services.optimize.description': 'Enhance and refine your current automation systems for maximum efficiency and reliability.',
    'services.ecommerce.title': 'E-Commerce Platforms',
    'services.ecommerce.description': 'Build powerful online stores with seamless checkout experiences and integrated payment solutions.',
    'services.growth.title': 'Digital Growth',
    'services.growth.description': 'Develop data-driven strategies to expand your online presence and accelerate business growth.',
    
    // Solutions
    'solutions.title': 'Technical Excellence',
    'solutions.subtitle': 'Built with cutting-edge technologies for superior performance',
    'solutions.webdev.title': 'Modern Web Development',
    'solutions.webdev.description': 'Next.js, React, TypeScript for fast, scalable applications',
    'solutions.responsive.title': 'Responsive Design',
    'solutions.responsive.description': 'Mobile-first approach ensuring perfect experience on all devices',
    'solutions.performance.title': 'Performance Optimization',
    'solutions.performance.description': 'Lightning-fast load times and smooth interactions',
    'solutions.security.title': 'Security First',
    'solutions.security.description': 'Enterprise-grade security protecting your data and users',
    'solutions.scalable.title': 'Scalable Infrastructure',
    'solutions.scalable.description': 'Built to grow with your business needs',
    'solutions.cloud.title': 'Cloud-Native Architecture',
    'solutions.cloud.description': 'Leveraging modern cloud platforms for reliability',
    
    // Process
    'process.title': 'Our Proven Process',
    'process.subtitle': 'From concept to launch, we guide you every step of the way',
    'process.discovery.title': 'Discovery',
    'process.discovery.description': 'We analyze your business needs, goals, and target audience to create a tailored strategy.',
    'process.design.title': 'Design & Planning',
    'process.design.description': 'Crafting intuitive user experiences and detailed technical architecture.',
    'process.development.title': 'Development',
    'process.development.description': 'Building your solution with clean code, best practices, and continuous testing.',
    'process.launch.title': 'Launch & Support',
    'process.launch.description': 'Deploying your project and providing ongoing support for continuous improvement.',
    
    // CTA
    'cta.title': 'Ready to Transform Your Business?',
    'cta.subtitle': 'Let\'s discuss how our web solutions can accelerate your growth.',
    'cta.button': 'Schedule Free Consultation',
    
    // Footer
    'footer.tagline': 'Transforming businesses through intelligent web solutions.',
    'footer.services': 'Services',
    'footer.company': 'Company',
    'footer.about': 'About',
    'footer.careers': 'Careers',
    'footer.blog': 'Blog',
    'footer.contact': 'Contact',
    'footer.legal': 'Legal',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
    'footer.rights': 'All rights reserved.',
  },
  es: {
    // Header
    'nav.services': 'Servicios',
    'nav.solutions': 'Soluciones',
    'nav.process': 'Proceso',
    'nav.contact': 'Contacto',
    'nav.getStarted': 'Comenzar',
    
    // Hero
    'hero.title': 'Transforma Tu Negocio con Soluciones Web Inteligentes',
    'hero.subtitle': 'Nos especializamos en crear sitios web de vanguardia, automatizaciones potentes y soluciones digitales estratégicas que impulsan el crecimiento real del negocio.',
    'hero.cta': 'Iniciar Tu Proyecto',
    'hero.learnMore': 'Saber Más',
    
    // Services
    'services.title': 'Nuestros Servicios',
    'services.subtitle': 'Soluciones web integrales adaptadas a las necesidades de tu negocio',
    'services.website.title': 'Nuevos Sitios Web',
    'services.website.description': 'Lanza tu presencia digital con un sitio web moderno y personalizado, diseñado para atraer y convertir a tus clientes ideales.',
    'services.modernize.title': 'Modernización de Sitios',
    'services.modernize.description': 'Revitaliza tu sitio web existente con diseño moderno, mejor rendimiento y experiencia de usuario mejorada.',
    'services.automation.title': 'Automatización Empresarial',
    'services.automation.description': 'Optimiza operaciones con soluciones de automatización personalizadas que ahorran tiempo y reducen tareas manuales.',
    'services.optimize.title': 'Optimización de Automatización',
    'services.optimize.description': 'Mejora y perfecciona tus sistemas de automatización actuales para máxima eficiencia y confiabilidad.',
    'services.ecommerce.title': 'Plataformas E-Commerce',
    'services.ecommerce.description': 'Construye tiendas en línea poderosas con experiencias de compra fluidas y soluciones de pago integradas.',
    'services.growth.title': 'Crecimiento Digital',
    'services.growth.description': 'Desarrolla estrategias basadas en datos para expandir tu presencia en línea y acelerar el crecimiento del negocio.',
    
    // Solutions
    'solutions.title': 'Excelencia Técnica',
    'solutions.subtitle': 'Construido con tecnologías de vanguardia para un rendimiento superior',
    'solutions.webdev.title': 'Desarrollo Web Moderno',
    'solutions.webdev.description': 'Next.js, React, TypeScript para aplicaciones rápidas y escalables',
    'solutions.responsive.title': 'Diseño Responsive',
    'solutions.responsive.description': 'Enfoque mobile-first garantizando experiencia perfecta en todos los dispositivos',
    'solutions.performance.title': 'Optimización de Rendimiento',
    'solutions.performance.description': 'Tiempos de carga ultrarrápidos e interacciones fluidas',
    'solutions.security.title': 'Seguridad Primero',
    'solutions.security.description': 'Seguridad de nivel empresarial protegiendo tus datos y usuarios',
    'solutions.scalable.title': 'Infraestructura Escalable',
    'solutions.scalable.description': 'Construido para crecer con las necesidades de tu negocio',
    'solutions.cloud.title': 'Arquitectura Cloud-Native',
    'solutions.cloud.description': 'Aprovechando plataformas cloud modernas para confiabilidad',
    
    // Process
    'process.title': 'Nuestro Proceso Probado',
    'process.subtitle': 'Desde el concepto hasta el lanzamiento, te guiamos en cada paso',
    'process.discovery.title': 'Descubrimiento',
    'process.discovery.description': 'Analizamos las necesidades de tu negocio, objetivos y audiencia para crear una estrategia personalizada.',
    'process.design.title': 'Diseño y Planificación',
    'process.design.description': 'Creación de experiencias de usuario intuitivas y arquitectura técnica detallada.',
    'process.development.title': 'Desarrollo',
    'process.development.description': 'Construyendo tu solución con código limpio, mejores prácticas y pruebas continuas.',
    'process.launch.title': 'Lanzamiento y Soporte',
    'process.launch.description': 'Desplegando tu proyecto y proporcionando soporte continuo para mejora constante.',
    
    // CTA
    'cta.title': '¿Listo para Transformar Tu Negocio?',
    'cta.subtitle': 'Discutamos cómo nuestras soluciones web pueden acelerar tu crecimiento.',
    'cta.button': 'Agendar Consulta Gratuita',
    
    // Footer
    'footer.tagline': 'Transformando negocios a través de soluciones web inteligentes.',
    'footer.services': 'Servicios',
    'footer.company': 'Compañía',
    'footer.about': 'Acerca de',
    'footer.careers': 'Carreras',
    'footer.blog': 'Blog',
    'footer.contact': 'Contacto',
    'footer.legal': 'Legal',
    'footer.privacy': 'Política de Privacidad',
    'footer.terms': 'Términos de Servicio',
    'footer.rights': 'Todos los derechos reservados.',
  },
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en')

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language | null
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'es')) {
      setLanguageState(savedLanguage)
    }
  }, [])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem('language', lang)
  }

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
