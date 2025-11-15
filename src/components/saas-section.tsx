import Image from "next/image";
import React from "react";
import { FadeAnimation } from "../motion-animations/FadeAnimation";

function SaasSection() {
  return (
    <section className="py-16 2md:py-20">
      <div className="mx-auto px-4 max-w-7xl relative">
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
              Electronic shelf label, is an electronic display device mainly
              placed on the shelf-edge, to replaces the traditional paper price
              label. Each electronic shelf label is connected to the merchant's
              computer database through wireless network and displays the latest
              price information of the items accurately in real time.
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
              The industry's first true cloud architecture, using the SaaS
              model, solved the dilemma of centralized deployment and
              application of smart hardware devices in shops, such as ESL, LCD,
              AI cameras, etc. The combination of software and hardware makes
              in-store management more efficient and intelligent, unleashing the
              potential of smart retail.
            </p>
          </div>
        </FadeAnimation>
      </div>
    </section>
  );
}

export default SaasSection;
