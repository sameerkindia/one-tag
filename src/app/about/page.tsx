// // "use client"

// // import { useEffect } from "react"
// // import AOS from "aos"
// // import "aos/dist/aos.css"
// // import { Users, Target, Award, Globe } from "lucide-react"

// // const values = [
// //   {
// //     icon: Target,
// //     title: "Innovation First",
// //     description: "We bring cutting-edge technology to traditional retail environments.",
// //   },
// //   {
// //     icon: Users,
// //     title: "Customer Focus",
// //     description: "Your success is our priority. We provide dedicated support and training.",
// //   },
// //   {
// //     icon: Award,
// //     title: "Quality Assured",
// //     description: "Premium hardware and software built to last in demanding retail conditions.",
// //   },
// //   {
// //     icon: Globe,
// //     title: "Local Expertise",
// //     description: "Understanding Uzbekistan market needs with global technology standards.",
// //   },
// // ]

// // export default function AboutPage() {
// //   useEffect(() => {
// //     AOS.init({
// //       duration: 1000,
// //       once: true,
// //       offset: 120,
// //       easing: "ease-in-out",
// //     })
// //   }, [])

// //   return (
// //     <div className="relative min-h-screen pt-32 pb-20">
// //       <div className="fixed inset-0 -z-10 bg-linear-to-br from-slate-50 via-blue-50/30 to-slate-100" />

// //       <div className="container mx-auto px-4 max-w-7xl">
// //         {/* Heading Section */}
// //         <div data-aos="fade-up" className="text-center mb-16">
// //           <h1 className="text-5xl md:text-7xl font-light mb-6 text-balance">
// //             About
// //             <span className="block text-blue-500">OneTag Smart Solutions</span>
// //           </h1>
// //           <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
// //             We are pioneering the digital transformation of retail in Uzbekistan, bringing smart price tag technology to
// //             stores across the nation.
// //           </p>
// //         </div>

// //         {/* Mission Section */}
// //         <div data-aos="fade-up" data-aos-delay="100" className="glass rounded-3xl p-12 mb-16 shadow-xl">
// //           <h2 className="text-3xl font-light mb-6">Our Mission</h2>
// //           <p className="text-lg text-muted-foreground leading-relaxed mb-6">
// //             OneTag Smart Solutions is dedicated to revolutionizing retail operations through innovative smart price tag
// //             technology. We empower retailers with real-time pricing control, operational efficiency, and enhanced
// //             customer experiences.
// //           </p>
// //           <p className="text-lg text-muted-foreground leading-relaxed">
// //             Our Bluetooth and Wi-Fi enabled smart tags eliminate manual price changes, reduce errors, and enable dynamic
// //             pricing strategies that help retailers stay competitive in today's fast-paced market.
// //           </p>
// //         </div>

// //         {/* Values Section */}
// //         <div className="grid md:grid-cols-2 gap-6 mb-16">
// //           {values.map((value, index) => (
// //             <div
// //               key={value.title}
// //               data-aos="fade-up"
// //               data-aos-delay={index * 150}
// //               className="glass rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all"
// //             >
// //               <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-4">
// //                 <value.icon className="w-6 h-6 text-blue-500" />
// //               </div>
// //               <h3 className="text-2xl font-light mb-3">{value.title}</h3>
// //               <p className="text-muted-foreground leading-relaxed">{value.description}</p>
// //             </div>
// //           ))}
// //         </div>

// //         {/* CTA Section */}
// //         <div data-aos="zoom-in" data-aos-delay="200" className="glass rounded-3xl p-12 text-center shadow-xl">
// //           <h2 className="text-3xl font-light mb-4">Join the Smart Retail Revolution</h2>
// //           <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
// //             Partner with OneTag to transform your retail operations and stay ahead of the competition.
// //           </p>
// //           <a
// //             href="/contact"
// //             className="inline-block px-8 py-4 bg-blue-500 text-white rounded-xl font-medium hover:bg-blue-600 transition-colors"
// //           >
// //             Get Started Today
// //           </a>
// //         </div>
// //       </div>
// //     </div>
// //   )
// // }

// "use client"

// import { useEffect } from "react"
// import AOS from "aos"
// import "aos/dist/aos.css"
// import { Users, Target, Award, Globe } from "lucide-react"

// const values = [
//   {
//     icon: Target,
//     title: "Innovation First",
//     description: "We bring cutting-edge technology to traditional retail environments.",
//   },
//   {
//     icon: Users,
//     title: "Customer Focus",
//     description: "Your success is our priority. We provide dedicated support and training.",
//   },
//   {
//     icon: Award,
//     title: "Quality Assured",
//     description: "Premium hardware and software built to last in demanding retail conditions.",
//   },
//   {
//     icon: Globe,
//     title: "Local Expertise",
//     description: "Understanding Uzbekistan market needs with global technology standards.",
//   },
// ]

// export default function AboutPage() {
//   useEffect(() => {
//     AOS.init({
//       duration: 1000,
//       once: true,
//       offset: 120,
//       easing: "ease-in-out",
//     })
//   }, [])

//   return (
//     <div
//       className="
//         relative min-h-screen pt-32 pb-20
//         bg-linear-to-br from-slate-50 via-white to-slate-100
//         dark:from-slate-950 dark:via-slate-900 dark:to-slate-950
//       "
//     >
//       {/* Background Glow */}
//       <div className="absolute inset-0 -z-10 overflow-hidden">
//         <div className="absolute -top-32 -right-32 w-96 h-96 bg-blue-500/10 dark:bg-blue-400/10 rounded-full blur-3xl" />
//         <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-indigo-400/10 dark:bg-indigo-600/10 rounded-full blur-3xl" />
//       </div>

//       <div className="container mx-auto px-4 max-w-7xl">
//         {/* 🔹 Heading Section */}
//         <div data-aos="fade-up" className="text-center mb-20">
//           <h1 className="text-5xl md:text-7xl font-light mb-6">
//             About{" "}
//             <span className="block text-blue-500 dark:text-blue-400 font-medium">
//               OneTag Smart Solutions
//             </span>
//           </h1>
//           <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
//             We are pioneering the digital transformation of retail in Uzbekistan, bringing smart price tag technology
//             to stores across the nation.
//           </p>
//         </div>

//         {/* 🔹 Mission Section */}
//         <div
//           data-aos="fade-up"
//           data-aos-delay="100"
//           className="
//             rounded-3xl p-12 mb-20 shadow-xl backdrop-blur-2xl
//             bg-linear-to-br from-white/80 to-white/50
//             dark:from-slate-900/90 dark:to-slate-800/70
//             border border-slate-200/50 dark:border-slate-700/60
//             transition-all duration-300 hover:shadow-blue-500/20
//           "
//         >
//           <h2 className="text-3xl font-light mb-6 text-blue-500 dark:text-blue-400">
//             Our Mission
//           </h2>
//           <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
//             OneTag Smart Solutions is dedicated to revolutionizing retail operations through innovative smart price tag
//             technology. We empower retailers with real-time pricing control, operational efficiency, and enhanced
//             customer experiences.
//           </p>
//           <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
//             Our Bluetooth and Wi-Fi enabled smart tags eliminate manual price changes, reduce errors, and enable dynamic
//             pricing strategies that help retailers stay competitive in today's fast-paced market.
//           </p>
//         </div>

//         {/* 🔹 Core Values Section */}
//         <div className="grid md:grid-cols-2 gap-8 mb-20">
//           {values.map((value, index) => (
//             <div
//               key={value.title}
//               data-aos="fade-up"
//               data-aos-delay={index * 150}
//               className="
//                 group rounded-2xl p-8 shadow-lg backdrop-blur-xl
//                 bg-linear-to-br from-white/80 to-white/60
//                 dark:from-slate-900/80 dark:to-slate-800/60
//                 border border-slate-200/50 dark:border-slate-700/50
//                 transition-all duration-300
//                 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-2
//               "
//             >
//               <div
//                 className="
//                   w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-5
//                   group-hover:bg-blue-500/20 transition-all duration-300
//                 "
//               >
//                 <value.icon className="w-7 h-7 text-blue-500" />
//               </div>
//               <h3 className="text-2xl font-light mb-3">{value.title}</h3>
//               <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
//                 {value.description}
//               </p>
//             </div>
//           ))}
//         </div>

//         {/* 🔹 CTA Section */}
//         <div
//           data-aos="zoom-in"
//           data-aos-delay="200"
//           className="
//             text-center rounded-3xl p-14 shadow-xl backdrop-blur-2xl
//             bg-linear-to-br from-blue-50/60 via-white/70 to-blue-100/50
//             dark:from-slate-900/80 dark:via-slate-800/70 dark:to-slate-900/60
//             border border-slate-200/50 dark:border-slate-700/50
//           "
//         >
//           <h2 className="text-3xl font-light mb-4 text-blue-500 dark:text-blue-400">
//             Join the Smart Retail Revolution
//           </h2>
//           <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
//             Partner with OneTag to transform your retail operations and stay ahead of the competition.
//           </p>
//           <a
//             href="/contact"
//             className="
//               inline-block px-10 py-4 text-lg font-medium
//               bg-blue-500 text-white rounded-2xl shadow-md
//               hover:bg-blue-600 dark:hover:bg-blue-500/90
//               transition-all hover:shadow-blue-500/30
//             "
//           >
//             Get Started Today
//           </a>
//         </div>
//       </div>
//     </div>
//   )
// }

"use client";

import { motion } from "framer-motion";
import {
  Users,
  Target,
  Award,
  Globe,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import { useTheme } from "@/src/contexts/theme-context";
import { useEffect, useState } from "react";
import { FadeAnimation } from "@/src/motion-animations/FadeAnimation";
import FloatingParticles from "@/src/components/FloatingParticles";
import AnimationText from "@/src/components/Animation-text";
import { useLanguage } from "@/src/contexts/language-context";
import SubHeading from "@/src/components/SubHeading";

const heroSectionData = {
  en: {
    title: "About",
    subTitle: "Onetag",
    description:
      "We are pioneering the digital transformation of retail in Uzbekistan, bringing smart price tag technology to stores across the nation.",
  },
  uz: {
    title: "Kompaniya haqida",
    subTitle: "Onetag",
    description: `Biz O‘zbekistonda chakana savdoni raqamlashtirishda yetakchimiz va butun mamlakat bo‘ylab do‘konlarga aqlli narx yorliqlari texnologiyasini joriy etmoqdamiz`,
  },
  ru: {
    title: "О компании",
    subTitle: "Onetag",
    description: `Мы являемся пионерами в цифровой трансформации розничной торговли в Узбекистане внедряя технологию умных ценников в магазинах по всей стране`,
  },
};

const ourMissionData = {
  en: {
    title: "Our Mission",
    description1: `Onetag is dedicated to revolutionizing retail operations through innovative price tag technology. We empower retailers with real-time pricing control, operational efficiency, and enhanced customer experiences.`,
    description2: `Our Bluetooth and Wi-Fi enabled smart tags eliminate manual price changes, reduce errors, and enable dynamic pricing strategies that help retailers stay competitive in today’s fast-paced market.`,
  },
  ru: {
    title: "Наша миссия",
    description1: `Onetag стремится революционизировать розничные операции с помощью инновационной технологии умных ценников. Мы помогаем ритейлерам получать контроль над ценами в реальном времени, повышать операционную эффективность и улучшать клиентский опыт`,
    description2: `Наши умные ценники с поддержкой Bluetooth и Wi-Fi устраняют необходимость ручной смены цен, снижают количество ошибок и позволяют внедрять динамические ценовые стратегии, помогая ритейлерам оставаться конкурентоспособными на современном быстро меняющемся рынке.`,
  },
  uz: {
    title: "Bizning missiyamiz",
    description1: ` Onetag chakana savdo jarayonlarini innovatsion aqlli narx yorlig‘i texnologiyasi orqali tubdan o‘zgartirishga intiladi. Biz sotuvchilarga real vaqt rejimidagi narx nazorati, operatsion samaradorlik va mijozlar tajribasini yaxshilash imkoniyatini beramiz.`,
    description2: `Bluetooth va Wi-Fi qo‘llab-quvvatlovchi aqlli yorliqlarimiz qo‘lda narx almashtirish zaruratini yo‘q qiladi, xatolarni kamaytiradi va dinamik narxlash strategiyalarini yo‘lga qo‘yishga yordam beradi, bu esa sotuvchilarga bugungi tezkor bozor sharoitida raqobatbardosh bo‘lib qolishga imkon beradi.`,
  },
};

const valuesSection = {
  en: {
    values: [
      {
        icon: Target,
        title: "Innovation First",
        description:
          "We bring cutting-edge technology to traditional retail environments.",
        gradient: "from-blue-400 to-cyan-500",
      },
      {
        icon: Users,
        title: "Customer Focus",
        description:
          "Your success is our priority. We provide dedicated support and training.",
        gradient: "from-green-400 to-emerald-500",
      },
      {
        icon: Award,
        title: "Quality Assured",
        description:
          "Premium hardware and software built to last in demanding retail conditions.",
        gradient: "from-yellow-400 to-orange-500",
      },
      {
        icon: Globe,
        title: "Local Expertise",
        description:
          "Understanding Uzbekistan market needs with global technology standards.",
        gradient: "from-purple-400 to-pink-500",
      },
    ],
  },
  ru: {
    values: [
      {
        icon: Target,
        title: "Прежде всего инновации",
        description:
          "Мы внедряем передовые технологии в традиционную розничную торговлю.",
        gradient: "from-blue-400 to-cyan-500",
      },
      {
        icon: Users,
        title: "Ориентация на клиента",
        description:
          "Ваш успех — наш приоритет. Мы предоставляем специализированную поддержку и обучение.",
        gradient: "from-green-400 to-emerald-500",
      },
      {
        icon: Award,
        title: "Гарантированное качество",
        description:
          "Премиальное оборудование и программное обеспечение, созданные для работы в сложных условиях ритейла.",
        gradient: "from-yellow-400 to-orange-500",
      },
      {
        icon: Globe,
        title: "Локальная экспертиза",
        description:
          "Мы понимаем потребности рынка Узбекистана и сочетаем их с мировыми технологическими стандартами.",
        gradient: "from-purple-400 to-pink-500",
      },
    ],
  },
  uz: {
    values: [
      {
        icon: Target,
        title: "Innovatsiya birinchi o‘rinda",
        description:
          "Biz an’anaviy chakana savdoga ilg‘or texnologiyalarni olib kiramiz.",
        gradient: "from-blue-400 to-cyan-500",
      },
      {
        icon: Users,
        title: "Mijozga yo‘naltirilgan yondashuv",
        description:
          "Sizning muvaffaqiyatingiz biz uchun ustuvor. Biz qo‘llab-quvvatlash va o‘qitishni taqdim etamiz.",
        gradient: "from-green-400 to-emerald-500",
      },
      {
        icon: Award,
        title: "Sifat kafolatlangan",
        description:
          "Murakkab chakana savdo sharoitlariga mos, uzoq xizmat qiladigan premium uskuna va dasturiy ta’minot.",
        gradient: "from-yellow-400 to-orange-500",
      },
      {
        icon: Globe,
        title: "Mahalliy tajriba",
        description:
          " O‘zbekiston bozorining ehtiyojlarini global texnologik standartlar bilan uyg‘unlashtiramiz.",
        gradient: "from-purple-400 to-pink-500",
      },
    ],
  },
};

const joinUsSection = {
  en: {
    title: "Join the Smart Retail Revolution",
    description: `Partner with Onetag to transform your retail operations and stay ahead of the competition.`,
    btnText: "Get Started Today",
  },
  ru: {
    title: "Присоединяйтесь к революции умной розницы",
    description: `Станьте партнёром Onetag, чтобы трансформировать ваши розничные процессы и опережать конкурентов.`,
    btnText: "Начать уже сегодня",
  },
  uz: {
    title: "Aqlli chakana savdo inqilobiga qo‘shiling",
    description: `Onetag bilan hamkorlik qilib, chakana savdo jarayonlaringizni modernizatsiya qiling va raqobatchilardan oldinda bo‘ling.`,
    btnText: "Bugundan boshlang",
  },
};

const values = [
  {
    icon: Target,
    title: "Innovation First",
    description:
      "We bring cutting-edge technology to traditional retail environments.",
    gradient: "from-blue-400 to-cyan-500",
  },
  {
    icon: Users,
    title: "Customer Focus",
    description:
      "Your success is our priority. We provide dedicated support and training.",
    gradient: "from-green-400 to-emerald-500",
  },
  {
    icon: Award,
    title: "Quality Assured",
    description:
      "Premium hardware and software built to last in demanding retail conditions.",
    gradient: "from-yellow-400 to-orange-500",
  },
  {
    icon: Globe,
    title: "Local Expertise",
    description:
      "Understanding Uzbekistan market needs with global technology standards.",
    gradient: "from-purple-400 to-pink-500",
  },
];

export default function AboutPage() {
  const { theme } = useTheme();
  const [dimensions, setDimensions] = useState({ width: 1920, height: 1080 });
  const [mounted, setMounted] = useState(false);
  const { language } = useLanguage();

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

  return (
    <div className="relative min-h-screen pt-32 pb-14 sm:pb-20 overflow-hidden">
      {/* Enhanced background */}
      <motion.div
        animate={{
          background:
            theme === "dark"
              ? [
                  "radial-gradient(ellipse at 30% 40%, rgba(76, 158, 255, 0.12) 0%, transparent 50%), radial-gradient(ellipse at 70% 60%, rgba(76, 158, 255, 0.08) 0%, transparent 50%), linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)",
                  "radial-gradient(ellipse at 35% 45%, rgba(76, 158, 255, 0.15) 0%, transparent 50%), radial-gradient(ellipse at 65% 55%, rgba(76, 158, 255, 0.1) 0%, transparent 50%), linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)",
                  "radial-gradient(ellipse at 30% 40%, rgba(76, 158, 255, 0.12) 0%, transparent 50%), radial-gradient(ellipse at 70% 60%, rgba(76, 158, 255, 0.08) 0%, transparent 50%), linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)",
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
      <FloatingParticles />

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <FadeAnimation staggerChildren={0.3}>
          {/* Heading Section */}
          <FadeAnimation className="text-center mb-20">
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-[56px] font-bold leading-tight mb-6 text-black dark:text-white text-balance max-w-[1400px] mx-auto">
              <AnimationText>
                {heroSectionData[language].title}
              </AnimationText>{" "}
              <span>
              {heroSectionData[language].subTitle}
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {heroSectionData[language].description}
            </p>
          </FadeAnimation>

          {/* Mission Section */}
          <FadeAnimation
            staggerChildren={0.3}
            className="glass rounded-3xl p-10 3md:p-16 mb-16 3md:mb-20 shadow-2xl glow-blue relative overflow-hidden group"
          >
            {/* Shimmer effect */}
            <motion.div className="absolute inset-0 opacity-0 group-hover:opacity-100" />

            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-[56px] font-bold mb-5 3md:mb-8 relative z-10">
              <AnimationText>
                {ourMissionData[language].title}
              </AnimationText>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6 relative z-10">
              {ourMissionData[language].description1}
            </p>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed relative z-10">
              {ourMissionData[language].description2}
            </p>
          </FadeAnimation>

          {/* Values Section */}
          <FadeAnimation
            staggerChildren={0.3}
            className="grid md:grid-cols-2 gap-8 mb-16 sm:mb-20"
          >
            {valuesSection[language].values.map((value, index) => (
              <div
                key={value.title}
                className="group relative glass rounded-3xl p-6 3md:p-10 shadow-xl hover:shadow-2xl transition-all! hover:-translate-y-1.5 duration-500 overflow-hidden cursor-pointer h-full max-sm:text-center"
              >
                {/* Gradient overlay */}
                <motion.div
                  className={`absolute inset-0 bg-linear-to-br ${value.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                />

                {/* Shimmer */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100"
                  animate={{
                    background: [
                      "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent)",
                    ],
                    x: ["-100%", "200%"],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />

                <motion.div
                  className={`size-14 xl:size-16 rounded-2xl bg-linear-to-br ${value.gradient} flex items-center justify-center mb-4 3md:mb-6 shadow-lg relative z-10 max-sm:mx-auto`}
                >
                  <value.icon className="w-8 h-8 text-white" />
                </motion.div>
                <motion.h3
                  className="text-[23px] sm:text-[26px] xl:text-3xl font-bold mb-3 3md:mb-4 group-hover:text-primary transition-colors duration-300 relative z-10"
                  // whileHover={{ x: 4 }}
                >
                  {value.title}
                </motion.h3>
                <motion.p
                  className="text-muted-foreground leading-relaxed text-lg relative z-10"
                  // whileHover={{ x: 2 }}
                >
                  {value.description}
                </motion.p>
              </div>
            ))}
          </FadeAnimation>

          {/* CTA Section */}
          <FadeAnimation
            staggerChildren={0.3}
            className="glass rounded-3xl p-6 sm:p-14 2md:p-20 text-center shadow-2xl glow-blue relative overflow-hidden group"
          >
            {/* Background decoration */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <motion.div
                className="absolute -top-20 -right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>

            <SubHeading headingText={joinUsSection[language].title} lastIndex={2} customHeadingClass="mb-6" />
            {/* <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 relative z-10">
              {joinUsSection[language].title}
            </h2> */}
            <p className="text-lg md:text-xl text-muted-foreground mb-6 sm:mb-10 max-w-2xl mx-auto relative z-10">
              {joinUsSection[language].description}
            </p>
            <div className="relative z-10">
              <div>
                <Link
                  href="/contact"
                  className="group/btn relative inline-flex items-center gap-3 px-6 sm:px-10 py-3 sm:py-5 bg-linear-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-xl font-bold text-base 2md:text-lg shadow-xl shadow-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/70 transition-all duration-500 overflow-hidden"
                >
                  {/* Shimmer */}
                  <motion.div
                    className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent"
                    animate={{
                      x: ["-100%", "200%"],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                  <span className="relative z-10">
                    {joinUsSection[language].btnText}
                  </span>
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="relative z-10"
                  >
                    <ArrowRight className="w-5 h-5" />
                  </motion.div>
                </Link>
              </div>
            </div>
          </FadeAnimation>
        </FadeAnimation>
      </div>
    </div>
  );
}
