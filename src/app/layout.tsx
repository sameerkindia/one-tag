import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navbar } from "@/src/components/navbar"
import { Footer } from "@/src/components/footer"
import { AccessibilityToolbar } from "@/src/components/accessibility-toolbar"
import { LanguageProvider } from "@/src/contexts/language-context"
import { ThemeProvider } from "@/src/contexts/theme-context"
import "aos/dist/aos.css";
import PreferenceModalWrapper from "@/src/components/preference-modal-wrapper"
import ScrollToTop from "../components/scrollToTop"

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "OneTag Smart Solutions - Smart Retail Technology",
  description: "Bluetooth and Wi-Fi powered smart price tags for modern retail stores",
}



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body className="font-sans antialiased transition-colors duration-300">
        <ThemeProvider>
          <LanguageProvider>
            <Navbar />
            <ScrollToTop />
            <main className="min-h-screen">{children}</main>
            <Footer />
            {/* <PreferenceModalWrapper /> */}

          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}

