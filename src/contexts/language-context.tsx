"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type Language = "en" | "uz" | "ru"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const translations: Record<Language, Record<string, string>> = {
  en: {
    "nav.home": "Home",
    "nav.solutions": "Solutions",
    "nav.cases": "Cases",
    "nav.about": "About",
    "nav.contact": "Contact",
    "hero.badge": "Introducing Smart Retail Technology",
    "hero.title.line1": "Smart Electronic Shelf Labels",
    "hero.title.line2": "for Your Business.",
    "hero.description":
      "Transform your retail operations with Bluetooth and Wi-Fi powered smart price tags. Real-time updates, zero errors, maximum efficiency.",
    "hero.cta.primary": "Get Started",
    "hero.cta.secondary": "Explore Solutions",
  },
  uz: {
    "nav.home": "Bosh sahifa",
    "nav.solutions": "Yechimlar",
    "nav.cases": "Misollar",
    "nav.about": "Biz haqimizda",
    "nav.contact": "Aloqa",
    "hero.badge": "Aqlli savdo texnologiyasini taqdim etamiz",
    "hero.title.line1": "Aqlli elektron javon yorliqlari.",
    "hero.title.line2": "Sizning biznesingiz uchun.",
    "hero.description":
      "Bluetooth va Wi-Fi bilan ishlaydigan aqlli narx teglari bilan savdo operatsiyalaringizni o'zgartiring. Real vaqtda yangilanishlar, xatolar yo'q, maksimal samaradorlik.",
    "hero.cta.primary": "Boshlash",
    "hero.cta.secondary": "Yechimlarni ko'rish",
  },
  ru: {
    "nav.home": "Главная",
    "nav.solutions": "Решения",
    "nav.cases": "Кейсы",
    "nav.about": "О нас",
    "nav.contact": "Контакты",
    "hero.badge": "Представляем технологию умной розничной торговли",
    "hero.title.line1": "Умные электронные ценники",
    "hero.title.line2": "для вашего бизнеса.",
    "hero.description":
      "Трансформируйте свои розничные операции с помощью умных ценников на базе Bluetooth и Wi-Fi. Обновления в реальном времени, нулевые ошибки, максимальная эффективность.",
    "hero.cta.primary": "Начать",
    "hero.cta.secondary": "Изучить решения",
  },
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  useEffect(() => {
    const saved = localStorage.getItem("language") as Language
    if (saved && ["en", "uz", "ru"].includes(saved)) {
      setLanguage(saved)
    }
  }, [])

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem("language", lang)
  }

  const t = (key: string): string => {
    return translations[language][key] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider")
  }
  return context
}
