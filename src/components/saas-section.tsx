"use client"
import Image from "next/image";
import React from "react";
import { FadeAnimation } from "../motion-animations/FadeAnimation";
import { useLanguage } from "../contexts/language-context";

function SaasSection() {
  const { t } = useLanguage();
  return (
    <section className="py-16 2md:py-20">
      <div className="container mx-auto px-4 max-w-7xl relative">
        <FadeAnimation direction="up" staggerChildren={0.5} className="flex flex-col sm:!grid grid-cols-2 items-center gap-6 gap-y-10">

          {/* <div className="sm:hidden">
            <Image
              src="/electronics-shelf.webp"
              alt="one tag solution saas"
              className="rounded-3xl"
              height={600}
              width={600}
            />
          </div> */}

          <div>
            <p className="text-base sm:text-lg lg:text-xl leading-relaxed text-gray-600 dark:text-gray-300">
              {t("ElectronicShelfLabel")}
            </p>
          </div>

          <div className="">
            <Image
              // src="/electronics-shelf.webp"
              src="/tags-bg.webp"
              alt="one tag solution saas"
              className="rounded-3xl aspect-6/3"
              height={600}
              width={600}
            />
          </div>

          <div>
            <Image
              src="/SASS-img.webp"
              alt="one tag solution saas"
              className="rounded-3xl aspect-6/3"
              height={600}
              width={600}
            />
          </div>
          <div>
            <p className="text-base sm:text-lg lg:text-xl leading-relaxed text-gray-600 dark:text-gray-300">
              {t("CloudeArchitecture")}
            </p>
          </div>
        </FadeAnimation>
      </div>
    </section>
  );
}

export default SaasSection;
