"use client";
import Image from "next/image";
import React from "react";
import { FadeAnimation } from "../motion-animations/FadeAnimation";
import { useLanguage } from "../contexts/language-context";

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
                quality={80}
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
                quality={80}
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
