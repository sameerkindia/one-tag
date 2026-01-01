"use client";

import React from "react";
import AnimationText from "@/src/components/Animation-text";
import { FadeAnimation } from "@/src/motion-animations/FadeAnimation";
import Image from "next/image";
import { useLanguage } from "@/src/contexts/language-context";
import SubHeading from "@/src/components/SubHeading";

const bannerSection = {
  en: {
    // title: "ZKONG ESL Retail Cloud Platform",
    title: "Cloud Platform",
    description:
      "The leading retail IoT Cloud platform to manage your IoT, access your store and manage your labels as well as your items anytime, anywhere, thanks to our web interface available through a simple internet connection from your PC, Smartphone or Tablet",
    // cta: "Contact Us",
  },
  uz: {
    title: "Bulut platformasi",
    description: `
    Yetakchi IoT bulut platformasi bo‘lib, u IoT qurilmalarini boshqarish, do‘konga masofadan
kirish, elektron narx yorliqlari va mahsulotlarni istalgan payt va istalgan joydan boshqarish imkonini
beradi. Buning barchasi oddiy internet ulanishi orqali kompyuter, smartfon yoki planshetdan webinterfeys yordamida amalga oshiriladi.`,
    // cta: "Contact Us",
  },
  ru: {
    title: "Облачная платформа",
    description: `
    Передовая облачная IoT-платформа для розничной торговли, которая позволяет
управлять IoT-устройствами, получать доступ к магазину, управлять электронными ценниками
и товарами в любое время и из любого места благодаря веб-интерфейсу через простое
интернет-подключение с ПК, смартфона или планшета.`,
    // cta: "Contact Us",
  },
};

const revolutionarySection = {
  en: {
    title: "The Revolutionary Retail Cloud Platform",
    description:
      "Renew Your Business Model with the Revolutionary Cloud Electronic Shelf Labels System",
    cta: "Get More Info",
  },
  uz: {
    title: "Inqilobiy chakana savdo uchun bulut platformasi",
    description:
      "Bulut texnologiyasiga asoslangan inqilobiy elektron narx yorliqlari tizimi bilan biznes modelingizni yangilang",
    cta: "Get More Info",
  },
  ru: {
    title: "Революционная облачная платформа для ритейла",
    description:
      "Обновите свою бизнес-модель с помощью революционной облачной системы электронных ценников",
    cta: "Get More Info",
  },
};

const advantagesSection = {
  en: {
    title: "Cloud Platform Advantages",
    advantages: [
      {
        imgSrc: "/esl-cloud-platform/esl-cloud-sass.webp",
        heading: "SaaS system, no local installation required",
        data: [
          "Support unlimited accounts on the same server",
          "Computing capacity can be infinitely superimposed through server expansion",
          "Reduce the cost of software and hardware due to the increasement of local server",
        ],
      },
      {
        imgSrc: "/esl-cloud-platform/esl-cloud-template.webp",
        heading: "Comes with a template editor",
        data: [
          "Cloud-based templates, browser operation",
          "Visual and free editing, real-time preview",
          "huge template library, unlimited fonts, multi-language text",
          "Flexible triggering",
        ],
      },
      {
        imgSrc: "/esl-cloud-platform/esl-cloud-expansion.webp",
        heading: "Unlimited expansion",
        data: [
          "integrated a variety of intelligent devices such as EPD, LCD and AI cameras with one system",
          "Billions of information processing",
          "A single system supports millions of electronic shelf labels",
        ],
      },
      {
        imgSrc: "/esl-cloud-platform/esl-cloud-deployment.webp",
        heading: "Flexible deployment",
        data: [
          "Flexible options for SaaS public, private and local deployments",
          " Support globally distributed deployment and cluster deployment",
        ],
      },
      {
        imgSrc: "/esl-cloud-platform/esl-cloud-interface.webp",
        heading: "Interface opened",
        data: [
          "200+ API interfaces (the most open interface)",
          "Support different types of ERP, API and customized development with specific needs",
        ],
      },
      {
        imgSrc: "/esl-cloud-platform/esl-cloud-extensiveness.webp",
        heading: "Extensiveness",
        data: [
          "Supports Windows / Mac OS / Android / iOS and many other major system",
          "Built on a wide area network with global reach",
        ],
      },
      {
        imgSrc: "/esl-cloud-platform/esl-cloud-security.webp",
        heading: "Data security",
        data: [
          "Data storage records in the cloud",
          "Professional AES 128-bit encryption in the cloud",
          "Automatic detection and early warning mechanism",
        ],
      },
      {
        imgSrc: "/esl-cloud-platform/esl-cloud-plans.webp",
        heading: "Second development",
        data: [
          "Secondary development gives new features to software and hardware",
          "Private server build",
          "APP/mini app development",
        ],
      },
    ],
  },
  uz: {
    title: "Bulut platformasining afzalliklari",
    advantages: [
      {
        imgSrc: "/esl-cloud-platform/esl-cloud-sass.webp",
        heading: "SaaS tizimi — mahalliy o‘rnatish talab qilinmaydi",
        data: [
          "Bitta serverda cheksiz hisoblarni qo‘llab-quvvatlaydi",
          "Serverlarni kengaytirish orqali hisoblash quvvati cheksiz oshirilishi mumkin",
          "Mahalliy serverlarni kengaytirishga ehtiyoj qolmagani sabab dasturiy ta’minot va uskuna xarajatlari kamayadi",
        ],
      },
      {
        imgSrc: "/esl-cloud-platform/esl-cloud-template.webp",
        heading: " Shablon muharriri bilan birga keladi",
        data: [
          "Bulut asosidagi shablonlar, brauzer orqali boshqaruv",
          "Vizual va erkin tahrirlash, real vaqt rejimida ko‘rish",
          "Katta shablon kutubxonasi, cheksiz shriftlar, ko‘p tilli matn qo‘llab-quvvatlashi",
          "Moslashuvchan ishga tushirish imkoniyatlari",
        ],
      },
      {
        imgSrc: "/esl-cloud-platform/esl-cloud-expansion.webp",
        heading: "Cheksiz kengaytirish imkoniyati",
        data: [
          "EPD, LCD va AI kameralar kabi turli aqlli qurilmalarni bitta tizimga integratsiya qilish",
          "Milliardlab ma’lumotlarni qayta ishlash imkoniyat",
          "Bitta tizim millionlab elektron narx yorliqlarini qo‘llab-quvvatlay oladi",
        ],
      },
      {
        imgSrc: "/esl-cloud-platform/esl-cloud-deployment.webp",
        heading: "Moslashuvchan joriy etish (deploy) imkoniyati",
        data: [
          "SaaS’ni umumiy (public), xususiy (private) va lokal shaklda joriy etish uchun moslashuvchan variantlar",
          "Global miqyosda taqsimlangan tizimlarni va klasterli joriy etishni qo‘llab-quvvatlaydi",
        ],
      },
      {
        imgSrc: "/esl-cloud-platform/esl-cloud-interface.webp",
        heading: "Ochiq interfeys",
        data: [
          "200+ ta API interfeyslari (eng ochiq integratsiya imkoniyatlari)",
          "Turli ERP tizimlari, API va maxsus ehtiyojlar uchun moslashtirilgan ishlab chiqishni qo‘llabquvvatlaydi",
        ],
      },
      {
        imgSrc: "/esl-cloud-platform/esl-cloud-extensiveness.webp",
        heading: "Keng qamrovli imkoniyatlar",
        data: [
          "Windows / Mac OS / Android / iOS va boshqa ko‘plab asosiy tizimlarni qo‘llab-quvvatlaydi",
          "Keng qamrovli global tarmoq asosida qurilgan",
        ],
      },
      {
        imgSrc: "/esl-cloud-platform/esl-cloud-security.webp",
        heading: "Ma’lumotlar xavfsizlig",
        data: [
          "Ma’lumotlarni bulutda saqlash",
          "Bulutda professional AES 128-bit shifrlash",
          "Avtomatik aniqlash va erta ogohlantirish mexanizmi",
        ],
      },
      {
        imgSrc: "/esl-cloud-platform/esl-cloud-plans.webp",
        heading: "Ikkinchi darajali rivojlantirish",
        data: [
          "Ikkinchi darajali rivojlantirish dasturiy ta’minot va uskuna uchun yangi funksiyalar qo‘shadi",
          "Shaxsiy serverni yaratish",
          "Ilova / mini-ilova ishlab chiqish",
        ],
      },
    ],
  },
  ru: {
    title: "Преимущества облачной платформы",
    advantages: [
      {
        imgSrc: "/esl-cloud-platform/esl-cloud-sass.webp",
        heading: "SaaS-система, не требует локальной установки",
        data: [
          "Поддержка неограниченного количества аккаунтов на одном сервере",
          "Вычислительные мощности могут бесконечно расширяться за счет масштабирования серверов",
          "Снижение затрат на ПО и оборудование за счет отсутствия необходимости увеличиватьлокальные серверы",
        ],
      },
      {
        imgSrc: "/esl-cloud-platform/esl-cloud-template.webp",
        heading: "Встроенный редактор шаблонов",
        data: [
          "Облачные шаблоны, работа через браузер",
          "Визуальное и свободное редактирование, предпросмотр в реальном времени",
          "Огромная библиотека шаблонов, неограниченные шрифты, поддержка многоязычного текста",
          "Гибкие варианты запуска и применения",
        ],
      },
      {
        imgSrc: "/esl-cloud-platform/esl-cloud-expansion.webp",
        heading: "Неограниченное масштабирование",
        data: [
          "Интеграция различных интеллектуальных устройств (EPD, LCD, AI-камеры) в единую систему",
          "Обработка миллиардов информационных операций",
          "Одна система может поддерживать миллионы электронных ценников",
        ],
      },
      {
        imgSrc: "/esl-cloud-platform/esl-cloud-deployment.webp",
        heading: "Гибкое развертывание",
        data: [
          "Гибкие варианты публичного, частного и локального развертывания SaaS",
          "Поддержка глобально распределенного развертывания и кластерных решений",
        ],
      },
      {
        imgSrc: "/esl-cloud-platform/esl-cloud-interface.webp",
        heading: "Открытый интерфейс",
        data: [
          "Более 200 API-интерфейсов (максимально открытая интеграция)",
          "Поддержка различных типов ERP, API и кастомной разработки под конкретные требования",
        ],
      },
      {
        imgSrc: "/esl-cloud-platform/esl-cloud-extensiveness.webp",
        heading: " Широкие возможности",
        data: [
          "Поддерживает Windows / Mac OS / Android / iOS и многие другие основные системы",
          "Построена на глобальной сети с широким покрытием по всему миру",
        ],
      },
      {
        imgSrc: "/esl-cloud-platform/esl-cloud-security.webp",
        heading: "Безопасность данных",
        data: [
          "Хранение данных в облаке",
          "Профессиональное облачное шифрование AES 128-бит",
          "Автоматическое обнаружение и ранняя система предупреждений",
        ],
      },
      {
        imgSrc: "/esl-cloud-platform/esl-cloud-plans.webp",
        heading: "Вторичная разработка",
        data: [
          "Вторичная разработка добавляет новые функции программному обеспечению и оборудованию",
          "Развёртывание частного сервера",
          "Разработка приложений / мини-приложений",
        ],
      },
    ],
  },
};

const superiorSystemSection = {
  en: {
    title: "ZKONG Retail Cloud ESL Platform Superior system",
    cardData: [
      {
        heading: "Shop Management",
        imgSrc: "/esl-cloud-platform/superior/shop-management.webp",
        data: [
          "Data interfacing",
          "Staff account",
          "Marketing management",
          "Product binding management",
          "Permission settings",
        ],
      },
      {
        heading: "Facilities Management",
        imgSrc: "/esl-cloud-platform/superior/facilities-management.webp",
        data: [
          "Data upgrading",
          "Task management",
          "Equipment scheduling",
          "People-Goods interaction",
          "Data security",
        ],
      },
      {
        heading: "Tools Management",
        imgSrc: "/esl-cloud-platform/superior/tools-management.webp",
        data: ["Template", "Monitoring and warning", "Journal Management"],
      },
      {
        heading: "Application Solutions",
        imgSrc: "/esl-cloud-platform/superior/application-solutions.webp",
        data: [
          "Smart Picking",
          "Passenger flow monitoring",
          "Display/inventory monitoring",
          "Analysis of consumer behavior",
        ],
      },
    ],
  },
  uz: {
    title: "ZKONG Retail Cloud ESL Platform Superior system",
    cardData: [
      {
        heading: "Shop Management",
        imgSrc: "/esl-cloud-platform/superior/shop-management.webp",
        data: [
          "Data interfacing",
          "Staff account",
          "Marketing management",
          "Product binding management",
          "Permission settings",
        ],
      },
      {
        heading: "Facilities Management",
        imgSrc: "/esl-cloud-platform/superior/facilities-management.webp",
        data: [
          "Data upgrading",
          "Task management",
          "Equipment scheduling",
          "People-Goods interaction",
          "Data security",
        ],
      },
      {
        heading: "Tools Management",
        imgSrc: "/esl-cloud-platform/superior/tools-management.webp",
        data: ["Template", "Monitoring and warning", "Journal Management"],
      },
      {
        heading: "Application Solutions",
        imgSrc: "/esl-cloud-platform/superior/application-solutions.webp",
        data: [
          "Smart Picking",
          "Passenger flow monitoring",
          "Display/inventory monitoring",
          "Analysis of consumer behavior",
        ],
      },
    ],
  },
  ru: {
    title: "ZKONG Retail Cloud ESL Platform Superior system",
    cardData: [
      {
        heading: "Shop Management",
        imgSrc: "/esl-cloud-platform/superior/shop-management.webp",
        data: [
          "Data interfacing",
          "Staff account",
          "Marketing management",
          "Product binding management",
          "Permission settings",
        ],
      },
      {
        heading: "Facilities Management",
        imgSrc: "/esl-cloud-platform/superior/facilities-management.webp",
        data: [
          "Data upgrading",
          "Task management",
          "Equipment scheduling",
          "People-Goods interaction",
          "Data security",
        ],
      },
      {
        heading: "Tools Management",
        imgSrc: "/esl-cloud-platform/superior/tools-management.webp",
        data: ["Template", "Monitoring and warning", "Journal Management"],
      },
      {
        heading: "Application Solutions",
        imgSrc: "/esl-cloud-platform/superior/application-solutions.webp",
        data: [
          "Smart Picking",
          "Passenger flow monitoring",
          "Display/inventory monitoring",
          "Analysis of consumer behavior",
        ],
      },
    ],
  },
};

export default function ZKONGPlatform() {
  // const { theme } = useTheme();
  const { language } = useLanguage();

  return (
    <div className="min-h-screen text-gray-900 transition-colors duration-300 dark:text-white">
      {/* Hero Section */}
      <section className="min-h-[60vh] sm:min-h-[70vh] flex items-center relative px-6 pt-12 pb-6 sm:py-16 2m:py-20 overflow-hidden bg-linear-to-r from-gray-200 to-gray-500 dark:from-gray-800 dark:to-gray-700">
        {/* subtle light/dark background shapes */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -left-20 -top-32 w-96 h-96 rounded-full blur-3xl bg-linear-to-br from-blue-200/30 to-purple-300/30 dark:from-blue-900/20 dark:to-purple-900/20"></div>
        </div>

        <FadeAnimation className="max-w-6xl mx-auto text-center relative z-10">
          <h1 className="text-black dark:text-white text-3xl md:text-4xl lg:text-5xl xl:text-[56px] font-bold text-pretty mb-6">
            <AnimationText onRepeat>
              {bannerSection[language].title.split(" ").slice(0, 1).join(" ")}
            </AnimationText>{" "}
            {bannerSection[language].title.split(" ").slice(1).join(" ")}
          </h1>
          <p className="text-base sm:text-lg 2md:text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-4xl mx-auto">
            {bannerSection[language].description}
          </p>
          {/* <button
            aria-label="get started with us"
            className="inline-block mt-4 px-6 py-3 bg-black dark:bg-white hover:bg-black/80 dark:hover:bg-white/80 text-white dark:text-black rounded-2xl transition-all duration-300 min-w-[170px]"
          >
            {bannerSection[language].cta}
          </button> */}
        </FadeAnimation>
      </section>

      <section className="py-12 sm:py-16 2m:py-20 bg-slate-200 dark:bg-[#3b434c]">
        <div className="container mx-auto px-4 max-w-7xl relative">
          <FadeAnimation className="text-center relative z-10 mb-10">
            <SubHeading
              headingText={revolutionarySection[language].title}
              lastIndex={2}
              customHeadingClass="text-center mb-6"
            />
            {/* <h2 className="text-black dark:text-white text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-6">
              <AnimationText>
                {revolutionarySection[language].title
                  .split(" ")
                  .slice(0, 2)
                  .join(" ")}
              </AnimationText>{" "}
              <span className="text-blue-600 dark:text-blue-400">
                {revolutionarySection[language].title
                  .split(" ")
                  .slice(2)
                  .join(" ")}
              </span>
            </h2> */}
            <p className="text-base sm:text-lg 2md:text-xl text-gray-700 dark:text-gray-300 mb-4 sm:mb-8 max-w-4xl mx-auto text-pretty">
              {revolutionarySection[language].description}
            </p>
            {/* <a
              href="/"
              aria-label="Get More Info about our product us"
              className="inline-block mt-4 px-6 py-3 border-2 border-black dark:border-white hover:bg-black dark:hover:bg-white text-black dark:text-white hover:text-white dark:hover:text-black rounded-lg transition-all duration-300 min-w-[170px] cursor-pointer"
            >
              {revolutionarySection[language].cta}
            </a> */}
          </FadeAnimation>
          <FadeAnimation className="dark:bg-white p-4">
            <Image
              src={`/esl-cloud-platform/retail-cloud-platform-${language}.webp`}
              alt="cloud platform"
              width={1200}
              height={800}
            />
          </FadeAnimation>
        </div>
      </section>

      {/* Platform Architecture Diagram */}
      {/* <section className="px-6 py-16 max-w-7xl mx-auto">
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
      </section> */}

      {/* Platform Advantages */}
      <section className="px-6 py-12 sm:py-16 2m:py-20 max-w-7xl mx-auto">
        <FadeAnimation>
          <SubHeading
            headingText={advantagesSection[language].title}
            lastIndex={4}
            customHeadingClass="text-center mb-10 sm:mb-16"
          />
          {/* <h2 className="text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white">
            <AnimationText>
              {advantagesSection[language].title
                .split(" ")
                .slice(0, 4)
                .join(" ")}
            </AnimationText>{" "}
            <span className="text-blue-600 dark:text-blue-400">
              {advantagesSection[language].title.split(" ").slice(4).join(" ")}
            </span>
          </h2> */}
        </FadeAnimation>

        <FadeAnimation>
          <div className="space-y-12">
            {advantagesSection[language].advantages.map((advantage, index) => (
              <div
                key={index}
                className="grid md:grid-cols-2 gap-4 sm:gap-8 items-center"
              >
                {/* Image Section */}
                <div
                  className={`rounded-2xl border dark:border-gray-700 bg-linear-to-br 
        from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30 
        overflow-hidden 
        ${index % 2 === 1 ? "md:order-2" : "md:order-1"}`}
                >
                  <div className="relative flex items-center justify-center h-48">
                    <Image
                      src={advantage.imgSrc}
                      alt={advantage.heading}
                      fill
                    />
                  </div>
                </div>

                {/* Text Section */}
                <div
                  className={`${index % 2 === 1 ? "md:order-1" : "md:order-2"}`}
                >
                  <h3 className="text-lg sm:text-xl 2md:text-2xl font-bold mb-2.5 sm:mb-4 text-blue-600 dark:text-blue-300">
                    {advantage.heading}
                  </h3>
                  <ul className="cloud-platform-ul">
                    {advantage.data.map((item, i) => (
                      <li key={i}>- {item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </FadeAnimation>
      </section>

      {/* ESL Platform Superior System */}
      {/* <section className="px-6 py-12 sm:py-16 2m:py-20 max-w-7xl mx-auto">
        <FadeAnimation>
          <SubHeading
            headingText={superiorSystemSection[language].title}
            lastIndex={4}
            customHeadingClass="text-center mb-10 sm:mb-16"
          />
        </FadeAnimation>

        <FadeAnimation>
          <div className="grid md:grid-cols-2 gap-8">
            {superiorSystemSection[language].cardData.map((card, index) => (
              <div
                key={index}
                className="rounded-2xl border dark:border-gray-700 bg-linear-to-br from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30 hover:border-blue-500 transition-all overflow-hidden"
              >
                <div className="flex items-center justify-center mb-2 sm:mb-6">
                  <div className="relative w-full h-40 rounded-full flex items-center justify-center">
                    <Image src={card.imgSrc} alt={card.heading} fill />
                  </div>
                </div>
                <div className="p-4 sm:p-8">
                  <h3 className="text-xl 2lg:text-2xl font-bold text-center mb-4 text-gray-900 dark:text-white">
                    {card.heading}
                  </h3>
                  <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                    {card.data.map((item, index) => (
                      <li className="flex items-start">
                        <span key={index}>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </FadeAnimation>
      </section> */}

      {/* CTA Section */}
      {/* <section className="px-6 py-12 sm:py-16 2m:py-20 max-w-6xl mx-auto text-center">
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
      </section> */}

      {/* Latest Innovations Section */}
      {/* <section className="px-6 py-16 max-w-7xl mx-auto mb-20">
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
      </section> */}
    </div>
  );
}
