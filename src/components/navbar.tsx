"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon, Settings } from "lucide-react";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/src/contexts/language-context";
import { useTheme } from "@/src/contexts/theme-context";
import Image from "next/image";
import { AccessibilityToolbar } from "./accessibility-toolbar";

const navLinks = [
  { href: "/solutions", label: "nav.solutions" },
  { href: "/cases", label: "nav.cases" },
  { href: "/about", label: "nav.about" },
  { href: "/contact", label: "nav.contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showLangMenu, setShowLangMenu] = useState(false);
  const [showAccessibility, setShowAccessibility] = useState(false);
  const [mounted, setMounted] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null);
  const langRef = useRef<HTMLDivElement>(null);
  const accessRef = useRef<HTMLDivElement>(null);

  const pathname = usePathname();
  const { language, setLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }

      if (
        showLangMenu &&
        langRef.current &&
        !langRef.current.contains(event.target as Node)
      ) {
        setShowLangMenu(false);
      }

      if (
        showAccessibility &&
        accessRef.current &&
        !accessRef.current.contains(event.target as Node)
      ) {
        setShowAccessibility(false);
      }
    };

    // Only add listener if any menu is open
    if (isOpen || showLangMenu || showAccessibility) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen, showLangMenu, showAccessibility]); // Add all states
  //  Navbar scroll effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!mounted) return null;

  const languages = [
    { code: "en" as const, label: "English", flag: "/gb.svg" },
    { code: "uz" as const, label: "O'zbek", flag: "/uz.svg" },
    { code: "ru" as const, label: "Русский", flag: "/ru.svg" },
  ];

  const currentLang = languages.find((lang) => lang.code === language);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className={`fixed h-12 lg:h-16 top-0 left-0 right-0 z-50 transition-all duration-500 blue-nav mt-2`}
    >
      <div className="container mx-auto max-w-344 h-full px-4">
        <div
          className={`flex items-center justify-between h-full rounded-sm ${
            scrolled
              ? "md-glass max-mmd:shadow-lg max-mmd:backdrop-blur-md"
              : theme === "dark"
              ? "bg-fill-tertiary"
              : "md-glass"
          } ${isOpen ? "rounded-b-none md:rounded-b-sm" : ""}`}
        >
          {/* Mobile Logo */}
          <div
            className={`md:hidden px-4 rounded-sm py-2 border border-transparent`}
          >
            <Link href="/" className={`flex items-center gap-3 group`}>
              <motion.div className="relative w-30 2lg:w-32 xxl:w-36 aspect-40/10">
                <motion.div>
                  <Image
                    src={theme === "dark" ? "/logo2.svg" : "/logo1.svg"}
                    alt="Logo"
                    fill
                    priority
                    className="object-contain transition-all duration-300"
                  />
                </motion.div>
              </motion.div>
            </Link>
          </div>

          {/* Logo */}
          <div
            className={`hidden md:block px-4 rounded-sm py-2 border border-transparent ${
              scrolled
                ? "glass shadow-lg backdrop-blur-md"
                : theme === "dark"
                ? "bg-fill-tertiary"
                : "bg-fill-tertiary"
            }`}
          >
            <Link href="/" className={`flex items-center gap-3 group`}>
              <motion.div className="relative w-30 2lg:w-32 xxl:w-36 aspect-40/10">
                <motion.div>
                  <Image
                    src={theme === "dark" ? "/logo2.svg" : "/logo1.svg"}
                    alt="Logo"
                    fill
                    priority
                    className="object-contain transition-all duration-300"
                  />
                </motion.div>
              </motion.div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div
            className={`hidden md:flex items-center gap-4 lg:gap-6 px-4 rounded-sm py-1.5 3md:py-2 border bg-fill-tertiary border-transparent ${
              scrolled
                ? "glass bg-fill-tertiary shadow-lg backdrop-blur-md"
                : theme === "dark"
                ? "bg-fill-tertiary"
                : "bg-fill-tertiary"
            }`}
          >
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="relative group">
                <span className="text-sm font-light text-foreground/70 hover:text-foreground transition-all duration-300">
                  {t(link.label)}
                </span>
                {pathname === link.href && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-linear-to-r from-transparent via-primary to-transparent"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <motion.div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-linear-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
            ))}

            <div className="flex items-center gap-2">
              {/* Accessibility Toolbar */}
              <div ref={accessRef} className="relative">
                <motion.button
                  whileHover={{ scale: 1.05, rotate: 10 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    setShowAccessibility(!showAccessibility);
                    setShowLangMenu(false);
                  }}
                  className="p-2 lg:p-2.5 rounded-xl hover:bg-primary/10 transition-all cursor-pointer"
                >
                  <Settings className="w-5 h-5 text-muted-foreground" />
                </motion.button>

                <AnimatePresence>
                  {showAccessibility && (
                    <AccessibilityToolbar
                      onClose={() => setShowAccessibility(false)}
                    />
                  )}
                </AnimatePresence>
              </div>

              {/* Language Selector */}
              <div ref={langRef} className="relative">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    setShowLangMenu(!showLangMenu);
                    setShowAccessibility(false);
                  }}
                  className="p-2 lg:p-2.5 rounded-xl hover:bg-primary/10 transition-all flex items-center gap-2 cursor-pointer"
                >
                  {currentLang && (
                    <Image
                      src={currentLang.flag}
                      alt={currentLang.label}
                      width={22}
                      height={22}
                      className="rounded-full"
                    />
                  )}
                </motion.button>

                <AnimatePresence>
                  {showLangMenu && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="absolute right-0 mt-2 w-44 glass rounded-2xl shadow-xl border border-border/50 overflow-hidden backdrop-blur-xl"
                    >
                      {languages.map((lang) => (
                        <button
                          key={lang.code}
                          onClick={() => {
                            setLanguage(lang.code);
                            setShowLangMenu(false);
                          }}
                          className={`w-full flex items-center gap-3 px-4 py-3 text-left text-base font-light transition-all duration-300 ${
                            language === lang.code
                              ? "bg-primary/10 text-primary"
                              : "hover:bg-primary/5"
                          }`}
                        >
                          <Image
                            src={lang.flag}
                            alt={lang.label}
                            width={22}
                            height={22}
                            className="rounded-full"
                          />
                          {lang.label}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Theme Toggle */}
              {/* <motion.button
                whileHover={{ rotate: 20, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={toggleTheme}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="p-2.5 rounded-xl hover:bg-primary/10 transition-all"
              >
                {theme === "light" ? (
                  <Moon className="w-5 h-5 text-muted-foreground" />
                ) : (
                  <Sun className="w-5 h-5 text-muted-foreground" />
                )}
              </motion.button> */}
            </div>
          </div>

          <div className="md:hidden flex items-center">
            <div ref={accessRef} className="relative">
              <motion.button
                whileHover={{ scale: 1.05, rotate: 10 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  setShowAccessibility(!showAccessibility);
                  setShowLangMenu(false);
                }}
                className="p-2 lg:p-2.5 rounded-xl hover:bg-primary/10 transition-all cursor-pointer"
              >
                <Settings className="w-5 h-5" />
              </motion.button>

              <AnimatePresence>
                {showAccessibility && (
                  <AccessibilityToolbar
                    onClose={() => setShowAccessibility(false)}
                  />
                )}
              </AnimatePresence>
            </div>

            {/* Mobile Menu Toggle */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen((prev) => !prev)}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="p-2 rounded-xl hover:bg-primary/10 transition-all"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </motion.button>
          </div>
        </div>
      </div>

      {/*Fixed Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={menuRef}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className={`md:hidden glass backdrop-blur-md !border-t-0 border-border/50 rounded-b-sm mx-4 ${
              theme === "dark" ? "bg-gray-900/80" : "bg-white/70"
            }`}
          >
            <div className="container mx-auto px-6 py-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block py-2 text-lg font-medium transition-colors duration-300 ${
                    pathname === link.href
                      ? "text-primary"
                      : "text-foreground/70 hover:text-foreground"
                  }`}
                >
                  {t(link.label)}
                </Link>
              ))}

              {/* Theme + Language Switcher */}
              <div className="flex items-center justify-between pt-4 border-t border-border/40">
                {/* Theme Toggle */}
                {/* <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  onClick={toggleTheme}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl hover:bg-primary/10 transition-all"
                >
                  {theme === "light" ? (
                    <Moon className="w-5 h-5" />
                  ) : (
                    <Sun className="w-5 h-5" />
                  )}
                  <span className="text-sm font-medium">
                    {theme === "light" ? t("Dark Mode") : t("Light Mode")}
                  </span>
                </motion.button> */}

                {/* Language Selector */}
                <div className="flex items-center gap-3">
                  {languages.map((lang) => (
                    <motion.button
                      key={lang.code}
                      whileHover={{ scale: 1.08 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      onClick={() => {
                        setLanguage(lang.code);
                        setIsOpen(false);
                      }}
                      className={`flex items-center gap-1 px-2 py-1.5 rounded-lg text-sm font-medium transition-all duration-300 ${
                        language === lang.code
                          ? "bg-primary text-primary-foreground shadow-md"
                          : "hover:bg-primary/10"
                      }`}
                    >
                      <Image
                        src={lang.flag}
                        alt={lang.label}
                        width={22}
                        height={22}
                        className="rounded-full"
                      />
                      <span>{lang.code.toUpperCase()}</span>
                    </motion.button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
