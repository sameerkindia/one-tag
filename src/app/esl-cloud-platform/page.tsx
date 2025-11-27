"use client";

import React from "react";
import {
  Server,
  Shield,
  Cloud,
  Zap,
  Lock,
  Layers,
  MonitorPlay,
  Database,
  Sun,
  Moon,
} from "lucide-react";
import { useTheme } from "@/src/contexts/theme-context";
import AnimationText from "@/src/components/Animation-text";
import { FadeAnimation } from "@/src/motion-animations/FadeAnimation";
import Image from "next/image";
// import CloudBanner from "./Cloudbanner";
// import { useTheme } from "next-themes";

export default function ZKONGPlatform() {
  // const { theme } = useTheme();

  // helper to show theme effective theme (system fallback)
  //   const theme = theme === "system" ? resolvedTheme : theme;

  return (
    <div className="min-h-screen bg-white text-gray-900 transition-colors duration-300 dark:bg-gray-900 dark:text-white">
      {/* Hero Section */}
      <section className="min-h-[70vh] flex items-center relative px-6 py-20 overflow-hidden">
        {/* subtle light/dark background shapes */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -left-20 -top-32 w-96 h-96 rounded-full blur-3xl bg-linear-to-br from-blue-200/30 to-purple-300/30 dark:from-blue-900/20 dark:to-purple-900/20"></div>
        </div>

        <FadeAnimation className="max-w-6xl mx-auto text-center relative z-10">
          <h1 className="text-black dark:text-white text-3xl md:text-4xl lg:text-5xl xl:text-[56px] font-bold mb-6">
            <AnimationText onRepeat={true}>ZKONG ESL</AnimationText> Retail
            Cloud Platform
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-4xl mx-auto">
            The leading retail IoT Cloud platform to manage your IoT, access
            your store and manage your labels as well as your items anytime,
            anywhere, thanks to our web interface available through a simple
            internet connection from your PC, Smartphone or Tablet.
          </p>
          <button
            aria-label="get started with us"
            className="inline-block mt-4 px-6 py-3 bg-black dark:bg-white hover:bg-black/80 dark:hover:bg-white/80 text-white dark:text-black rounded-2xl transition-all duration-300 min-w-[170px]"
          >
            Get Started
          </button>
        </FadeAnimation>
      </section>

      <section>
        <div className="container mx-auto px-4 max-w-7xl relative">
          <FadeAnimation className="max-w-6xl mx-auto text-center relative z-10 mb-10">
            <h2 className="text-black dark:text-white text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-6">
              <AnimationText onRepeat={true}>The Revolutionary</AnimationText>
              Retail Cloud Platform
            </h2>
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-4xl mx-auto">
              Renew Your Business Model with the Revolutionary Cloud Electronic
              Shelf Labels System
            </p>
            <a
              href="/"
              aria-label="Get More Info about our product us"
              className="inline-block mt-4 px-6 py-3 border-2 border-black dark:border-white hover:bg-black/80 dark:hover:bg-white/80 text-black dark:text-white rounded-lg transition-all duration-300 min-w-[170px] cursor-pointer"
            >
              Get More Info
            </a>
          </FadeAnimation>
          <FadeAnimation className="dark:bg-white p-4">
            <Image
              src="/esl-cloud-platform/retail-cloud-platform.webp"
              alt="cloud platform"
              width={1200}
              height={800}
            />
          </FadeAnimation>
        </div>
      </section>

      {/* Platform Architecture Diagram */}
      <section className="px-6 py-16 max-w-7xl mx-auto">
        <div className="rounded-2xl p-8 border bg-gray-50/60 border-gray-200 dark:bg-gray-800/60 dark:border-gray-700">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            ESL Integration Architecture
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-24 h-24 mx-auto mb-4 rounded-lg flex items-center justify-center shadow-md bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-800 dark:to-blue-700">
                <Database className="w-12 h-12 text-blue-600 dark:text-blue-200" />
              </div>
              <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">
                POS/Backend Systems
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Integrated data sources
              </p>
            </div>

            <div className="text-center">
              <div className="w-24 h-24 mx-auto mb-4 rounded-lg flex items-center justify-center shadow-md bg-gradient-to-br from-purple-100 to-purple-200 dark:from-purple-800 dark:to-purple-700">
                <Cloud className="w-12 h-12 text-purple-600 dark:text-purple-200" />
              </div>
              <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">
                ZKONG Cloud ESL
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Central management platform
              </p>
            </div>

            <div className="text-center">
              <div className="w-24 h-24 mx-auto mb-4 rounded-lg flex items-center justify-center shadow-md bg-gradient-to-br from-cyan-100 to-cyan-200 dark:from-cyan-800 dark:to-cyan-700">
                <MonitorPlay className="w-12 h-12 text-cyan-600 dark:text-cyan-200" />
              </div>
              <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">
                CloudGW - SAP
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Gateway communication
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-4 rounded-lg border bg-white/60 dark:bg-gray-900/40 border-gray-200 dark:border-gray-700 text-center">
              <Server className="w-8 h-8 mb-2 text-blue-500" />
              <p className="text-sm text-gray-800 dark:text-gray-200">
                ESL Base Station
              </p>
            </div>

            <div className="p-4 rounded-lg border bg-white/60 dark:bg-gray-900/40 border-gray-200 dark:border-gray-700 text-center">
              <Layers className="w-8 h-8 mb-2 text-purple-500" />
              <p className="text-sm text-gray-800 dark:text-gray-200">
                ZKONG AP Database
              </p>
            </div>

            <div className="p-4 rounded-lg border bg-white/60 dark:bg-gray-900/40 border-gray-200 dark:border-gray-700 text-center">
              <Zap className="w-8 h-8 mb-2 text-yellow-500" />
              <p className="text-sm text-gray-800 dark:text-gray-200">
                Real-time Updates
              </p>
            </div>

            <div className="p-4 rounded-lg border bg-white/60 dark:bg-gray-900/40 border-gray-200 dark:border-gray-700 text-center">
              <Shield className="w-8 h-8 mb-2 text-green-500" />
              <p className="text-sm text-gray-800 dark:text-gray-200">
                Secure Protocol
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Advantages */}
      <section className="px-6 py-16 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white">
          ZKONG ESL Retail Cloud Platform{" "}
          <span className="text-blue-600 dark:text-blue-400">Advantages</span>
        </h2>

        <div className="space-y-12">
          {/* Advantage 1 */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="p-8 rounded-2xl border dark:border-gray-700 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30">
              <div className="flex items-center justify-center h-48">
                <Cloud className="w-32 h-32 text-blue-500 dark:text-blue-300" />
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4 text-blue-600 dark:text-blue-300">
                Rapid Deployment
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                No need for on-premise servers or complex infrastructure. Our
                cloud-based solution enables quick deployment with minimal setup
                time, reducing your time-to-market and operational complexity.
              </p>
            </div>
          </div>

          {/* Advantage 2 */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <h3 className="text-2xl font-bold mb-4 text-purple-600 dark:text-purple-300">
                Cost-Effective Solution
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Eliminate expensive hardware investments and maintenance costs.
                Pay only for what you use with our flexible pricing model,
                making enterprise-grade ESL technology accessible to businesses
                of all sizes.
              </p>
            </div>

            <div className="order-1 md:order-2 p-8 rounded-2xl border dark:border-gray-700 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/30 dark:to-purple-800/30">
              <div className="flex items-center justify-center h-48">
                <img
                  src="https://images.unsplash.com/photo-1556742044-3c52d6e88c62?w=400&h=300&fit=crop"
                  alt="Retail pricing"
                  className="rounded-lg w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Advantage 3 */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="p-8 rounded-2xl border dark:border-gray-700 bg-gradient-to-br from-cyan-50 to-cyan-100 dark:from-cyan-900/30 dark:to-cyan-800/30">
              <div className="flex items-center justify-center h-48">
                <Shield className="w-32 h-32 text-cyan-500 dark:text-cyan-300" />
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4 text-cyan-600 dark:text-cyan-300">
                High Availability & Security
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Built on enterprise-grade cloud infrastructure with 99.9% uptime
                guarantee. Advanced encryption and security protocols protect
                your data with military-grade security standards.
              </p>
            </div>
          </div>

          {/* Advantage 4 */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <h3 className="text-2xl font-bold mb-4 text-pink-600 dark:text-pink-300">
                Scalability & Flexibility
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Easily scale from a single store to thousands of locations. Our
                platform grows with your business, handling millions of ESL
                updates simultaneously without performance degradation.
              </p>
            </div>

            <div className="order-1 md:order-2 p-8 rounded-2xl border dark:border-gray-700 bg-gradient-to-br from-pink-50 to-pink-100 dark:from-pink-900/30 dark:to-pink-800/30">
              <div className="flex items-center justify-center h-48">
                <Layers className="w-32 h-32 text-pink-500 dark:text-pink-300" />
              </div>
            </div>
          </div>

          {/* Advantage 5 */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="p-8 rounded-2xl border dark:border-gray-700 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/30 dark:to-green-800/30">
              <div className="flex items-center justify-center h-48">
                <Zap className="w-32 h-32 text-green-500 dark:text-green-300" />
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4 text-green-600 dark:text-green-300">
                Real-Time Updates
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Instant price and product information updates across all your
                locations. Respond to market changes in real-time and maintain
                pricing accuracy across your entire retail network.
              </p>
            </div>
          </div>

          {/* Advantage 6 */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <h3 className="text-2xl font-bold mb-4 text-orange-600 dark:text-orange-300">
                Enhanced Management
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Centralized dashboard for complete control over all ESL devices.
                Monitor performance, track battery levels, and manage updates
                from a single intuitive interface accessible anywhere.
              </p>
            </div>

            <div className="order-1 md:order-2 p-8 rounded-2xl border dark:border-gray-700 bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/30 dark:to-orange-800/30">
              <div className="flex items-center justify-center h-48">
                <Server className="w-32 h-32 text-orange-500 dark:text-orange-300" />
              </div>
            </div>
          </div>

          {/* Advantage 7 */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="p-8 rounded-2xl border dark:border-gray-700 bg-gradient-to-br from-indigo-50 to-indigo-100 dark:from-indigo-900/30 dark:to-indigo-800/30">
              <div className="flex items-center justify-center h-48">
                <Lock className="w-32 h-32 text-indigo-500 dark:text-indigo-300" />
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4 text-indigo-600 dark:text-indigo-300">
                Data Privacy
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Complete data sovereignty with GDPR compliance and local data
                storage options. Your sensitive business information remains
                secure and under your control at all times.
              </p>
            </div>
          </div>

          {/* Advantage 8 */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <h3 className="text-2xl font-bold mb-4 text-yellow-600 dark:text-yellow-300">
                API Integration
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Seamless integration with existing retail systems including POS,
                ERP, and inventory management. Our RESTful APIs and
                comprehensive documentation make integration straightforward and
                efficient.
              </p>
            </div>

            <div className="order-1 md:order-2 p-8 rounded-2xl border dark:border-gray-700 bg-gradient-to-br from-yellow-50 to-yellow-100 dark:from-yellow-900/30 dark:to-yellow-800/30">
              <div className="flex items-center justify-center h-48">
                <Database className="w-32 h-32 text-yellow-500 dark:text-yellow-300" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ESL Platform Superior System */}
      <section className="px-6 py-16 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white">
          ZKONG Retail Cloud ESL Platform{" "}
          <span className="text-blue-600 dark:text-blue-400">
            Superior System
          </span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Big Data Platform */}
          <div className="p-8 rounded-2xl border dark:border-gray-700 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30 hover:border-blue-500 transition-all">
            <div className="flex items-center justify-center mb-6">
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center">
                <Database className="w-10 h-10 text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-center mb-4 text-gray-900 dark:text-white">
              Big Data Platform
            </h3>
            <ul className="space-y-3 text-gray-700 dark:text-gray-300">
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">•</span>
                <span>Real-time data collection and analysis</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">•</span>
                <span>Advanced analytics and insights</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">•</span>
                <span>Predictive maintenance algorithms</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">•</span>
                <span>Customer behavior tracking</span>
              </li>
            </ul>
          </div>

          {/* Tag Label Management */}
          <div className="p-8 rounded-2xl border dark:border-gray-700 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/30 dark:to-purple-800/30 hover:border-purple-500 transition-all">
            <div className="flex items-center justify-center mb-6">
              <div className="w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center">
                <Layers className="w-10 h-10 text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-center mb-4 text-gray-900 dark:text-white">
              Tag Label Management
            </h3>
            <ul className="space-y-3 text-gray-700 dark:text-gray-300">
              <li className="flex items-start">
                <span className="text-purple-400 mr-2">•</span>
                <span>Template design and customization</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-400 mr-2">•</span>
                <span>Multi-language support</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-400 mr-2">•</span>
                <span>Dynamic content updates</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-400 mr-2">•</span>
                <span>Bulk operations and scheduling</span>
              </li>
            </ul>
          </div>

          {/* Store Management */}
          <div className="p-8 rounded-2xl border dark:border-gray-700 bg-gradient-to-br from-cyan-50 to-cyan-100 dark:from-cyan-900/30 dark:to-cyan-800/30 hover:border-cyan-500 transition-all">
            <div className="flex items-center justify-center mb-6">
              <div className="w-20 h-20 bg-cyan-600 rounded-full flex items-center justify-center">
                <Server className="w-10 h-10 text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-center mb-4 text-gray-900 dark:text-white">
              Store Management
            </h3>
            <ul className="space-y-3 text-gray-700 dark:text-gray-300">
              <li className="flex items-start">
                <span className="text-cyan-400 mr-2">•</span>
                <span>Multi-store hierarchy management</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-400 mr-2">•</span>
                <span>Device monitoring and control</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-400 mr-2">•</span>
                <span>Role-based access control</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-400 mr-2">•</span>
                <span>Performance metrics dashboard</span>
              </li>
            </ul>
          </div>

          {/* AI-Powered Analytics */}
          <div className="p-8 rounded-2xl border dark:border-gray-700 bg-gradient-to-br from-pink-50 to-pink-100 dark:from-pink-900/30 dark:to-pink-800/30 hover:border-pink-500 transition-all">
            <div className="flex items-center justify-center mb-6">
              <div className="w-20 h-20 bg-pink-600 rounded-full flex items-center justify-center">
                <Zap className="w-10 h-10 text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-center mb-4 text-gray-900 dark:text-white">
              AI-Powered Analytics
            </h3>
            <ul className="space-y-3 text-gray-700 dark:text-gray-300">
              <li className="flex items-start">
                <span className="text-pink-400 mr-2">•</span>
                <span>Intelligent pricing recommendations</span>
              </li>
              <li className="flex items-start">
                <span className="text-pink-400 mr-2">•</span>
                <span>Demand forecasting</span>
              </li>
              <li className="flex items-start">
                <span className="text-pink-400 mr-2">•</span>
                <span>Automated anomaly detection</span>
              </li>
              <li className="flex items-start">
                <span className="text-pink-400 mr-2">•</span>
                <span>Machine learning optimization</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20 max-w-6xl mx-auto text-center">
        <div className="p-12 rounded-3xl border dark:border-gray-700 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/30 shadow-lg">
          <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
            Ready to Transform Your{" "}
            <span className="text-blue-600 dark:text-blue-400">
              Retail Operations?
            </span>
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Join leading retailers worldwide who trust ZKONG ESL platform to
            deliver seamless pricing updates and enhanced customer experiences.
          </p>
          <button className="px-10 py-5 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-semibold text-lg transition-transform transform hover:scale-105 shadow-xl">
            Schedule a Demo
          </button>
        </div>
      </section>

      {/* Latest Innovations Section */}
      <section className="px-6 py-16 max-w-7xl mx-auto mb-20">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white">
          Latest Innovations and Trends in the{" "}
          <span className="text-blue-600 dark:text-blue-400">Retail IoT</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-6 rounded-xl border dark:border-gray-700 bg-gray-50/50 dark:bg-gray-800/40 hover:border-blue-500 transition">
            <div className="w-full h-40 rounded-lg mb-4 flex items-center justify-center bg-gradient-to-br from-blue-600 to-blue-800">
              <Cloud className="w-16 h-16 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
              Cloud Integration
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Seamless cloud connectivity enabling real-time updates across
              global retail networks.
            </p>
          </div>

          <div className="p-6 rounded-xl border dark:border-gray-700 bg-gray-50/50 dark:bg-gray-800/40 hover:border-purple-500 transition">
            <div className="w-full h-40 rounded-lg mb-4 flex items-center justify-center bg-gradient-to-br from-purple-600 to-purple-800">
              <Zap className="w-16 h-16 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
              IoT Sensors
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Advanced sensor technology for inventory tracking and
              environmental monitoring.
            </p>
          </div>

          <div className="p-6 rounded-xl border dark:border-gray-700 bg-gray-50/50 dark:bg-gray-800/40 hover:border-cyan-500 transition">
            <div className="w-full h-40 rounded-lg mb-4 flex items-center justify-center bg-gradient-to-br from-cyan-600 to-cyan-800">
              <MonitorPlay className="w-16 h-16 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
              Digital Signage
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Interactive displays transforming customer engagement and shopping
              experiences.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
