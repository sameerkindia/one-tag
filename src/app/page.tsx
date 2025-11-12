// "use client"

// import { Hero } from "@/src/components/hero"
// import { FeaturesGrid } from "@/src/components/features-grid"
// import { ProductShowcase } from "@/src/components/product-showcase"
// import { CTASection } from "@/src/components/cta-section"
// import { motion } from "framer-motion"

// export default function Home() {
//   return (
//     <div className="relative">
//       <motion.div
//         animate={{
//           background: [
//             "linear-gradient(135deg, #F9FAFB 0%, #E6EBF5 30%, #D1E3F8 60%, #F9FAFB 100%)",
//             "linear-gradient(135deg, #E6EBF5 0%, #F9FAFB 30%, #E6EBF5 60%, #D1E3F8 100%)",
//             "linear-gradient(135deg, #F9FAFB 0%, #E6EBF5 30%, #D1E3F8 60%, #F9FAFB 100%)",
//           ],
//         }}
//         transition={{
//           duration: 25,
//           repeat: Number.POSITIVE_INFINITY,
//           ease: "linear",
//         }}
//         className="fixed inset-0 -z-10 dark:bg-gradient-to-br dark:from-slate-950 dark:via-blue-950/20 dark:to-slate-950"
//       />

//       <Hero />
//       <FeaturesGrid />
//       <ProductShowcase />
//       <CTASection />
//     </div>
//   )
// }

"use client";

import { useState, useEffect } from "react";
import { Hero } from "@/src/components/hero";
import { FeaturesGrid } from "@/src/components/features-grid";
import { ProductShowcase } from "@/src/components/product-showcase";
import { CTASection } from "@/src/components/cta-section";
import { motion } from "framer-motion";
import { useTheme } from "@/src/contexts/theme-context";
import SaasSection from "../components/saas-section";
import VideoSection from "../components/video-section";
import BrandMarquee from "../components/brand-marquee";

export default function Home() {
  const { theme } = useTheme();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="relative overflow-hidden">
      {/* 🌌 Animated gradient background */}
      <motion.div
        animate={{
          background:
            theme === "dark"
              ? [
                  "radial-gradient(ellipse at 20% 30%, rgba(76,158,255,0.15) 0%, transparent 50%), radial-gradient(ellipse at 80% 70%, rgba(76,158,255,0.1) 0%, transparent 50%), linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)",
                  "radial-gradient(ellipse at 25% 35%, rgba(76,158,255,0.18) 0%, transparent 50%), radial-gradient(ellipse at 75% 65%, rgba(76,158,255,0.12) 0%, transparent 50%), linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)",
                ]
              : [
                  "linear-gradient(135deg, #F9FAFB 0%, #E6EBF5 30%, #D1E3F8 60%, #F9FAFB 100%)",
                  "linear-gradient(135deg, #E6EBF5 0%, #F9FAFB 30%, #E6EBF5 60%, #D1E3F8 100%)",
                ],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="fixed inset-0 -z-10"
      />

      {/* ✨ Floating 3D Particles (only after client render) */}
      {isClient && (
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full bg-blue-400/30 blur-[2px]"
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                opacity: 0,
                scale: 0,
              }}
              animate={{
                x: [null, Math.random() * window.innerWidth],
                y: [null, Math.random() * window.innerHeight],
                opacity: [0, 0.6, 0],
                scale: [0, 1.5, 0],
                rotate: [0, 360],
              }}
              transition={{
                duration: 6 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 3,
                ease: "easeInOut",
              }}
              style={{
                filter: "drop-shadow(0 0 6px rgba(59,130,246,0.5))",
              }}
            />
          ))}
        </div>
      )}

      {/* 🧩 Content Sections */}
      <Hero />
      <SaasSection />
      <VideoSection />
      <FeaturesGrid />
      <ProductShowcase />
      <BrandMarquee />
      <CTASection />
    </div>
  );
}
