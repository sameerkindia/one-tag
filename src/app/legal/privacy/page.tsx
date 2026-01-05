"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "@/src/contexts/theme-context";
import { Shield, Database, Eye, Mail } from "lucide-react";

export default function PrivacyPolicyPage() {
  const { theme } = useTheme();
  const [dimensions, setDimensions] = useState({ width: 1920, height: 1080 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  if (!mounted) return null;

  const sections = [
    {
      icon: Database,
      title: "Information We Collect",
      content: "We may collect information such as your name, email address, company name, and message details when you contact us through forms or email.",
      gradient: "from-blue-400 to-cyan-500",
    },
    {
      icon: Eye,
      title: "How We Use Your Information",
      content: "The information you provide helps us respond to your inquiries, communicate updates, and improve our services. We do not sell, rent, or share your data with third parties.",
      gradient: "from-purple-400 to-pink-500",
    },
  ];

  return (
    <div className="relative min-h-screen pt-32 pb-20 overflow-hidden">
      {/* Enhanced animated background */}
      <motion.div
        animate={{
          background: theme === "dark"
            ? [
                "radial-gradient(ellipse at 20% 30%, rgba(76, 158, 255, 0.12) 0%, transparent 50%), radial-gradient(ellipse at 80% 70%, rgba(76, 158, 255, 0.08) 0%, transparent 50%), linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)",
                "radial-gradient(ellipse at 25% 35%, rgba(76, 158, 255, 0.15) 0%, transparent 50%), radial-gradient(ellipse at 75% 65%, rgba(76, 158, 255, 0.1) 0%, transparent 50%), linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)",
                "radial-gradient(ellipse at 20% 30%, rgba(76, 158, 255, 0.12) 0%, transparent 50%), radial-gradient(ellipse at 80% 70%, rgba(76, 158, 255, 0.08) 0%, transparent 50%), linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)",
              ]
            : [
                "linear-gradient(135deg, #F9FAFB 0%, #E6EBF5 30%, #D1E3F8 60%, #F9FAFB 100%)",
                "linear-gradient(135deg, #E6EBF5 0%, #F9FAFB 30%, #E6EBF5 60%, #D1E3F8 100%)",
                "linear-gradient(135deg, #F9FAFB 0%, #E6EBF5 30%, #D1E3F8 60%, #F9FAFB 100%)",
              ],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="fixed inset-0 -z-10"
      />

      {/* Floating particles */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        {[...Array(18)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/20 rounded-full blur-sm"
            initial={{
              x: Math.random() * dimensions.width,
              y: Math.random() * dimensions.height,
              opacity: 0,
            }}
            animate={{
              x: [null, Math.random() * dimensions.width],
              y: [null, Math.random() * dimensions.height],
              opacity: [0, 0.5, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 6 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Background decorations */}
      <motion.div
        className="absolute top-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.4, 0.3],
          x: [0, -40, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        {/* Enhanced Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 2md:mb-16"
        >
    
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 text-balance"
          >
            <span className="block">
              Privacy{" "}
              <span
                className="bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    theme === "dark"
                      ? "linear-gradient(90deg, #4c9eff, #7bb3ff, #4c9eff)"
                      : "linear-gradient(90deg, #2563eb, #3b82f6, #2563eb)",
                  backgroundSize: "200% 100%",
                  animation: "shimmer 3s ease-in-out infinite",
                }}
              >
                Policy
              </span>
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            At OneTag Smart Solutions, we value your privacy and are committed to
            protecting your personal information. This policy outlines how we
            collect, use, and safeguard the data you share with us.
          </motion.p>
        </motion.div>

        {/* Enhanced Sections */}
        <div className="space-y-8">
          {sections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 50, rotateX: -10 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className="relative group"
            >
              <div className="glass rounded-3xl p-6 2lg:p-8 shadow-2xl border border-primary/10 relative overflow-hidden group-hover:border-primary/20 transition-all duration-300">
                {/* Shimmer effect */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-20"
                  style={{
                    background: `linear-gradient(90deg, transparent, rgba(76, 158, 255, 0.1), transparent)`,
                  }}
                  animate={{
                    x: ["-100%", "200%"],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 3,
                    ease: "linear",
                  }}
                />

                <div className="relative z-10">
                  <motion.div
                    className="flex items-start gap-6"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                  >
                    <motion.div
                      className={`w-14 h-14 rounded-xl bg-gradient-to-br ${section.gradient} opacity-30 flex items-center justify-center flex-shrink-0 group-hover/item:opacity-50 transition-all duration-300 ring-2 ring-primary/20 group-hover:ring-primary/40 shadow-xl shadow-primary/20`}
                      whileHover={{ scale: 1.15, rotate: 360 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                    >
                      <section.icon className="w-7 h-7 text-white drop-shadow-xl stroke-[2.5]" />
                    </motion.div>
                    <div className="flex-1">
                      <motion.h2
                        className={`text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r ${section.gradient} bg-clip-text text-transparent`}
                        initial={{ opacity: 0, y: -10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                      >
                        {section.title}
                      </motion.h2>
                      <motion.p
                        className="text-lg text-muted-foreground leading-relaxed"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                      >
                        {section.content}
                      </motion.p>
                    </div>
                  </motion.div>
                </div>

                {/* Bottom gradient line */}
                <motion.div
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${section.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  style={{ transformOrigin: "left" }}
                />
              </div>
            </motion.div>
          ))}

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="glass rounded-3xl p-6 2lg:p-8 shadow-2xl border border-primary/10 relative overflow-hidden group hover:border-primary/20 transition-all duration-300"
          >
            {/* Shimmer effect */}
            <motion.div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-20"
              style={{
                background: `linear-gradient(90deg, transparent, rgba(76, 158, 255, 0.1), transparent)`,
              }}
              animate={{
                x: ["-100%", "200%"],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 3,
                ease: "linear",
              }}
            />

            <motion.p
              className="text-lg text-muted-foreground leading-relaxed relative z-10"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              If you have any questions about our privacy policy, please contact us at{" "}
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=info@onetag.uz&su=Hello%20OneTag&body=Hi%20Team,"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 font-semibold inline-flex items-center gap-2 transition-colors group/link"
              >
                <Mail className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                info@onetag.uz
              </a>
              .
            </motion.p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}