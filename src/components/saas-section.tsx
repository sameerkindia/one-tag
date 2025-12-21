"use client";
import Image from "next/image";
import React from "react";
import { FadeAnimation } from "../motion-animations/FadeAnimation";
import { useLanguage } from "../contexts/language-context";

const se = {
  en: {
    esl: {
      heading: "What is an Electronic Shelf Label (ESL)?",
      description: `An electronic shelf label (ESL) is an electronic display device placed on the to replace traditional paper price tags. Each electronic shelf label is connected to the merchant’s computer database through a wireless network and displays the latest price information of the items accurately in real time.`,
    },
    smartRetail: {
      heading: "Cloud-Based SaaS Platform for Smart Retail",
      description: `The industry’s first fully developed cloud architecture based on the SaaS solved the challenge of centralized deployment and application of smart devices in stores, such as ESL price tags and LCD screens. The combination of software and hardware makes store management more efficient and intelligent, unlocking the full potential of smart retail.`,
    },
  },
  uz: {
    esl: {
      heading: "Elektron narx belgilari (ESL) nima?",
      description: `Elektron narx belgisi — bu peshtaxta chetiga o‘rnatiladigan va an’anaviy qog‘oz narx belgilarini almashtiradigan elektron displey qurilmasidir. Har bir elektron narx belgisi sotuvchining kompyuter bazasiga simli bo‘lmagan tarmoq orqali ulanadi va tovarlarning eng so‘nggi narxlarini real vaqt rejimida ko‘rsatadi.`,
    },
    smartRetail: {
      heading: "Bulutga asoslangan aqlli chakana savdo uchun SaaS platforma ",
      description: `SaaS modeli asosidagi sanoatdagi birinchi to‘liq bulutli arxitektura do‘konlarda ESL narx belgisi, LCD ekranlar kabi aqlli qurilmalarni markazlashgan tarzda joriy etish muammosini hal qildi. Dasturiy ta’minot va apparat uyg‘unligi do‘kon boshqaruvini yanada samarali va aqlli qiladi hamda aqlli chakana savdoning salohiyatini ochib beradi.`,
    },
  },
  ru: {
    esl: {
      heading: "Что такое электронный ценник (ESL)?",
      description: `Электронный ценник — это электронное дисплейное устройство, которое устанавливается на кромку полки и заменяет традиционные бумажные ценники. Каждая электронная ценник-табличка подключена к компьютерной базе данных продавца через беспроводную сеть и отображает актуальную информацию о ценах на товары в режиме реального времени.`,
    },
    smartRetail: {
      heading: "Облачная SaaS-платформа для умной розничной торговли",
      description: `Первая в отрасли полноценная облачная архитектура, основанная на модели SaaS, решила проблему централизованного развертывания и применения умных устройств в магазинах, таких как ESL-ценники, LCD-экраны. Комбинация программного обеспечения и оборудования делает управление магазином более эффективным и интеллектуальным, раскрывая потенциал умной розничной торговли.(переведи это на узбекский и английский.`,
    },
  },
};

function SaasSection() {
  const { t } = useLanguage();
  return (
    <section className="py-16 2md:py-20">
      <div className="container mx-auto px-4 max-w-7xl relative">
        <FadeAnimation
          direction="up"
          staggerChildren={0.5}
          className="flex flex-col items-center gap-6 gap-y-16"
        >
          <div className="grid sm:grid-cols-2 justify-between items-center gap-8">
            <div>
              <p className="text-base sm:text-lg lg:text-xl leading-relaxed text-gray-600 dark:text-gray-300">
                {t("ElectronicShelfLabel")}
              </p>
            </div>

            <div>
              <Image
                // src="/electronics-shelf.webp"
                src="/tags-bg.webp"
                alt="one tag solution saas"
                className="rounded-3xl aspect-6/3"
                // quality={80}
                height={600}
                width={600}
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 justify-between items-center gap-8">
            <div className="sm:order-1">
              <p className="text-base sm:text-lg lg:text-xl leading-relaxed text-gray-600 dark:text-gray-300">
                {t("CloudeArchitecture")}
              </p>
            </div>

            <div>
              <Image
                src="/SaaS-img.png"
                alt="one tag solution saas"
                className="rounded-3xl aspect-6/3"
                // quality={80}
                height={600}
                width={600}
              />
            </div>
          </div>
        </FadeAnimation>
      </div>
    </section>
  );
}

export default SaasSection;
