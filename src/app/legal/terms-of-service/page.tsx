// "use client";

// import { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";

// export default function PrivacyPolicyPage() {
//   useEffect(() => {
//     AOS.init({
//       duration: 1000,
//       easing: "ease-in-out-cubic",
//       once: true,
//       offset: 100,
//     });
//   }, []);

//   return (
//     <div
//       className="
//         min-h-screen 
//         mt-20
//         bg-gradient-to-b 
//         from-gray-50 via-white to-gray-100 
//         dark:from-gray-900 dark:via-gray-950 dark:to-gray-800
//         transition-all duration-500
//         flex items-center justify-center px-6 py-16
//       "
//     >
//       <div
//         className="
//           max-w-4xl w-full rounded-2xl shadow-2xl 
//           bg-white/80 dark:bg-gray-900/80 
//           backdrop-blur-lg p-8 sm:p-12 
//           border border-gray-200 dark:border-gray-700
//           transition-all duration-500
//         "
//       >
//         <h1
//           data-aos="fade-down"
//           className="
//             text-4xl font-bold mb-6 
//             text-blue-600 dark:text-blue-400
//             text-center
//           "
//         >
//           Privacy Policy
//         </h1>

//         <p
//           data-aos="fade-up"
//           data-aos-delay="100"
//           className="
//             text-lg leading-relaxed mb-6 
//             text-gray-700 dark:text-gray-300
//           "
//         >
//           At <strong>OneTag Smart Solutions</strong>, your privacy is of utmost importance
//           to us. This Privacy Policy outlines how we collect, use, and safeguard your
//           personal information when you use our website and services.
//         </p>

//         {[
//           {
//             title: "1. Information We Collect",
//             text: "We may collect personal information such as your name, email address, and contact details when you use our services, register on our website, or contact us for support. Additionally, we collect non-personal data such as browser type, device information, and IP address for analytics and security purposes.",
//           },
//           {
//             title: "2. How We Use Your Information",
//             text: "Your information is used to improve our services, respond to inquiries, provide customer support, and send important updates. We may also use your data to enhance website performance and personalize your user experience.",
//           },
//           {
//             title: "3. Data Protection and Security",
//             text: "We employ advanced security measures to protect your personal information from unauthorized access, alteration, or disclosure. However, please note that no online system is entirely secure, and we cannot guarantee absolute security.",
//           },
//           {
//             title: "4. Cookies",
//             text: "Our website uses cookies to enhance your browsing experience. Cookies help us understand user behavior and preferences, allowing us to improve our content and services. You can choose to disable cookies through your browser settings, but this may affect certain functionalities.",
//           },
//           {
//             title: "5. Sharing of Information",
//             text: "We do not sell or rent your personal information. We may share limited data with trusted partners who help operate our website or provide business support, but only under strict confidentiality agreements.",
//           },
//           {
//             title: "6. Your Rights",
//             text: "You have the right to access, correct, or request deletion of your personal data. To exercise these rights, please contact us using the details provided below.",
//           },
//         ].map((section, index) => (
//           <div key={index}>
//             <h2
//               data-aos="fade-right"
//               data-aos-delay={200 + index * 200}
//               className="
//                 text-2xl font-semibold mt-8 mb-4
//                 text-gray-800 dark:text-gray-100
//               "
//             >
//               {section.title}
//             </h2>
//             <p
//               data-aos="fade-left"
//               data-aos-delay={300 + index * 200}
//               className="
//                 text-lg leading-relaxed
//                 text-gray-700 dark:text-gray-300
//               "
//             >
//               {section.text}
//             </p>
//           </div>
//         ))}

//         <h2
//           data-aos="fade-right"
//           data-aos-delay="1600"
//           className="
//             text-2xl font-semibold mt-8 mb-4
//             text-gray-800 dark:text-gray-100
//           "
//         >
//           7. Contact Us
//         </h2>
//         <p
//           data-aos="zoom-in"
//           data-aos-delay="1700"
//           className="
//             text-lg leading-relaxed
//             text-gray-700 dark:text-gray-300
//           "
//         >
//           If you have any questions about this Privacy Policy or wish to exercise your
//           rights, please reach out to us at{" "}
//           <a
//             href="https://mail.google.com/mail/?view=cm&fs=1&to=info@onetag.uz&su=Privacy%20Policy%20Query&body=Hello%20Team,"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-blue-600 dark:text-blue-400 hover:underline"
//           >
//             info@onetag.uz
//           </a>
//           .
//         </p>
//       </div>
//     </div>
//   );
// }


"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "@/src/contexts/theme-context";
import { FileText, CheckCircle, Shield, AlertTriangle, RefreshCw, Mail } from "lucide-react";

export default function TermsOfServicePage() {
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
      icon: CheckCircle,
      title: "1. Acceptance of Terms",
      content: "By using our website or services, you acknowledge that you have read, understood, and agree to these terms. If you do not agree with any portion of these terms, you must not use our website or services.",
      gradient: "from-blue-400 to-cyan-500",
    },
    {
      icon: Shield,
      title: "2. Use of Services",
      content: "Our services are intended for informational and business purposes only. You agree not to misuse our website, attempt unauthorized access, or engage in any activity that disrupts its functionality or compromises data security.",
      gradient: "from-purple-400 to-pink-500",
    },
    {
      icon: FileText,
      title: "3. Intellectual Property",
      content: "All content, logos, graphics, and software on this site are the property of OneTag Smart Solutions and are protected under intellectual property laws. You may not reproduce, distribute, or modify any part of this website without written permission.",
      gradient: "from-indigo-400 to-violet-500",
    },
    {
      icon: AlertTriangle,
      title: "4. Limitation of Liability",
      content: "OneTag Smart Solutions is not liable for any direct, indirect, or incidental damages resulting from the use or inability to use our website, services, or materials, even if advised of the possibility of such damages.",
      gradient: "from-red-400 to-orange-500",
    },
    {
      icon: RefreshCw,
      title: "5. Changes to Terms",
      content: "We may update or modify these Terms of Service at any time without prior notice. Continued use of our website after such updates constitutes acceptance of the revised terms.",
      gradient: "from-cyan-400 to-blue-500",
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
            className="text-5xl md:text-6xl font-bold mb-6 text-balance"
          >
            <span className="block">
              Terms of{" "}
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
                Service
              </span>
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            Welcome to <strong>OneTag Smart Solutions</strong>. By accessing or using our
            website, products, or services, you agree to comply with and be bound by the
            following Terms of Service. Please read them carefully before using our site.
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
              <div className="glass rounded-3xl p-8 shadow-2xl border border-primary/10 relative overflow-hidden group-hover:border-primary/20 transition-all duration-300">
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
            transition={{ duration: 0.8, delay: 0.7 }}
            className="glass rounded-3xl p-8 shadow-2xl border border-primary/10 relative overflow-hidden group hover:border-primary/20 transition-all duration-300"
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
              For any questions regarding these Terms, please contact us at{" "}
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