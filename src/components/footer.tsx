"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Linkedin, Instagram } from "lucide-react";
import { LiaTelegram } from "react-icons/lia";
import { useTheme } from "@/src/contexts/theme-context";

interface FooterLinks {
  product: { label: string; href: string }[];
  company: { label: string; href: string }[];
  legal: { label: string; href: string }[];
  [key: string]: { label: string; href: string }[];
}

const footerLinks: FooterLinks = {
  product: [
    { label: "Solutions", href: "/solutions" },
    { label: "Case Studies", href: "/cases" },
    { label: "Pricing", href: "/contact" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Careers", href: "/about" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/legal/privacy" },
    { label: "Terms of Service", href: "/legal/terms-of-service" },
  ],
};

const socialLinks = [
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/company/onetag-uz",
    label: "LinkedIn",
  },
  {
    icon: Instagram,
    href: "https://www.instagram.com/onetag.uz",
    label: "Instagram",
  },
  { icon: LiaTelegram, href: "https://t.me/onetag_uz", label: "Telegram" },
];

export function Footer() {
  const { theme } = useTheme();

  return (
    <footer
      className={`relative overflow-hidden mt-6 2md:mt-16 border-t-2 transition-all duration-500 backdrop-blur-3xl
  md:rounded-t-3xl
  ${
    theme === "dark"
      ? "bg-linear-to-b from-[#0a0a0a] via-[#111] to-[#0a0a0a] text-gray-300 border-white/10 shadow-[0_-10px_30px_rgba(255,255,255,0.05)]"
      : "bg-linear-to-b from-[#f8f9fa] via-[#f1f3f5] to-[#e9ecef] text-gray-800 border-gray-300 shadow-[0_-10px_30px_rgba(0,0,0,0.1)]"
  }`}
    >
      {/* Decorative Top Glow */}
      <div className="absolute -top-16 left-0 w-full h-32 bg-linear-to-b from-blue-500/10 to-transparent blur-2xl pointer-events-none" />

      <div className="container mx-auto px-6 md:px-10 max-w-7xl py-10">
        {/* Top Grid */}
        <div className="grid gap-6 sm:gap-12 sm:grid-cols-2 lg:grid-cols-5 mb-6">
          {/* Brand + Description */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="w-40"
              >
                {theme === "dark" ? (
                  <img
                    src="/logo2.svg"
                    alt="OneTag"
                    className="w-full h-auto"
                  />
                ) : (
                  <img
                    src="/logo1.svg"
                    alt="OneTag"
                    className="w-full h-auto"
                  />
                )}
              </motion.div>
            </Link>

            <p
              className={`leading-relaxed mb-4 max-w-sm font-light transition-colors duration-300 ${
                theme === "dark"
                  ? "text-gray-400 hover:text-gray-200"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Pioneering smart retail technology in Uzbekistan. Transform your
              store with intelligent price tags.
            </p>

            <div className="flex items-center gap-3 my-4">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=info@onetag.uz&su=Hello%20OneTag"
                className={`flex items-center gap-2 text-md font-light !transition-all duration-300 cursor-pointer ${
                  theme === "dark"
                    ? "text-gray-400 hover:text-gray-200"
                    : "text-gray-600 hover:text-gray-900"
                }}`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-mail size-5 text-inherit drop-shadow-xl stroke-2"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </svg>
                <span>info@onetag.uz</span>
              </a>
              <a
                href="tel:+998999178111"
                className={`flex items-center gap-2 text-md font-light !transition-all duration-300 cursor-pointer ${
                  theme === "dark"
                    ? "text-gray-400 hover:text-gray-200"
                    : "text-gray-600 hover:text-gray-900"
                }}`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-phone size-5 text-inherit drop-shadow-xl stroke-2"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <span>+998999178111</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-5 flex-wrap">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className={`relative group size-8 p-1.5 flex items-center justify-center rounded-[5px] transition-all duration-500 shadow-[inset_0_0_3px_rgba(0,0,0,0.3),0_4px_10px_rgba(0,0,0,0.2)]
                    ${
                      theme === "dark"
                        ? "bg-[#1a1a1a] border border-white/10 hover:shadow-blue-500/50"
                        : "bg-white border border-gray-200 hover:shadow-blue-400/40"
                    }`}
                >
                  <social.icon
                    className={`w-6 h-6 transition-colors duration-300 ${
                      theme === "dark"
                        ? "text-gray-300 group-hover:text-blue-400"
                        : "text-gray-700 group-hover:text-blue-600"
                    }`}
                  />
                  <span
                    className={`absolute inset-0 opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-500 bg-linear-to-br
                      ${
                        theme === "dark"
                          ? "from-blue-500/20 to-purple-500/20"
                          : "from-blue-400/15 to-purple-400/15"
                      }`}
                  />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {["product", "company", "legal"].map((section) => (
            <div key={section}>
              <motion.h3
                className={`font-medium mb-3 sm:mb-4 text-xl capitalize transition-colors ${
                  theme === "dark" ? "text-white" : "text-gray-900"
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                {section}
              </motion.h3>
              <ul className="space-y-2 sm:space-y-3">
                {footerLinks[section].map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className={`transition-colors duration-300 text-md font-light hover:border-b-2 hover:border-blue-500 ${
                        theme === "dark"
                          ? "text-white/70 hover:text-white"
                          : "text-gray-600 hover:text-gray-900"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div
          className={`border-t pt-6 sm:pt-8 text-center flex flex-col sm:flex-row items-center justify-center gap-3 transition-colors ${
            theme === "dark" ? "border-white/10" : "border-blue-100"
          }`}
        >
          <p
            className={`text-sm sm:text-base font-light ${
              theme === "dark"
                ? "text-gray-400 hover:text-gray-200"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            Copyright © {new Date().getFullYear()} Onetag LLC. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
