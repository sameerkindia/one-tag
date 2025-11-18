"use client"

import Head from "next/head"
import { useLanguage } from "../contexts/language-context"

export function DynamicHead() {
  const { language, t } = useLanguage()

  const titles: Record<string, string> = {
    en: "OneTag Smart Solutions - Smart Retail Technology",
    uz: "OneTag Smart Solutions - Aqlli Chakana Texnologiya",
    ru: "OneTag Smart Solutions - Умные Розничные Технологии",
  }

  const descriptions: Record<string, string> = {
    en: "Bluetooth and Wi-Fi powered smart price tags for modern retail stores",
    uz: "Bluetooth va Wi-Fi asosidagi aqlli narx yorliqlari zamonaviy do'konlar uchun",
    ru: "Умные ценники на основе Bluetooth и Wi-Fi для современных магазинов",
  }

  return (
    <Head>
      <title>{titles[language]}</title>
      <meta name="description" content={descriptions[language]} />
    </Head>
  )
}