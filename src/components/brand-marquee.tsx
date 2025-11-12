import Image from "next/image";
import React from "react";
import { FadeAnimation } from "../motion-animations/FadeAnimation";

function BrandMarquee() {
  return (
    <section className="py-12 sm:py-16 2md:py-20">
      <div className="container mx-auto px-6 max-w-6xl">
        <FadeAnimation staggerChildren={0.3}>
          <FadeAnimation staggerChildren={0.3} className="text-center mb-10 2md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mx-auto mb-6">
              Brands We{" "}
              <span className="bg-linear-to-r from-primary via-blue-400 to-primary bg-clip-text text-transparent">
                Collaborate With
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Drive store operation development by cutting-edge technology,
              superior products and perfect services have brought us numerous
              commendations.
            </p>
          </FadeAnimation>

          <FadeAnimation staggerChildren={0.3} className="text-center">
            <p className="text-xl bg-linear-to-r from-primary via-blue-400 to-primary bg-clip-text text-transparent max-w-3xl mx-auto mb-6 font-bold">
              Trusted by leading brands worldwide
            </p>

            {/* <div className="marquee max-w-[760px] mx-auto">
              <div className="marquee-content">
                <div className="flex items-center gap-12">
                  {[...Array(2)].map((_, i) => (
                    <React.Fragment key={i}>
                      <Image
                        src="/brands/7-eleven.svg"
                        className="min-w-20"
                        height={100}
                        width={100}
                        alt="logo"
                      />
                      <Image
                        src="/brands/carrefour.svg"
                        className="min-w-20"
                        height={100}
                        width={100}
                        alt="logo"
                      />
                      <Image
                        src="/brands/lenovo.svg"
                        className="min-w-20"
                        height={100}
                        width={100}
                        alt="logo"
                      />
                      <Image
                        src="/brands/samsung.svg"
                        className="min-w-20"
                        height={100}
                        width={100}
                        alt="logo"
                      />
                      <Image
                        src="/brands/walmart.svg"
                        className="min-w-20"
                        height={100}
                        width={100}
                        alt="logo"
                      />
                      <Image
                        src="/brands/xiaomi.svg"
                        className="min-w-20"
                        height={100}
                        width={100}
                        alt="logo"
                      />
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div> */}
            <div className="flex items-center justify-center flex-wrap gap-y-4 gap-8 lg:gap-12">
              <Image
                src="/brands/7-eleven.svg"
                className="size-16 sm:size-20"
                height={80}
                width={100}
                alt="logo"
              />
              <Image
                src="/brands/carrefour.svg"
                className="size-16 sm:size-20"
                height={80}
                width={100}
                alt="logo"
              />
              <Image
                src="/brands/lenovo.svg"
                className="size-16 sm:size-20"
                height={80}
                width={100}
                alt="logo"
              />
              <Image
                src="/brands/samsung.svg"
                className="size-16 sm:size-20"
                height={80}
                width={100}
                alt="logo"
              />
              <Image
                src="/brands/walmart.svg"
                className="size-16 sm:size-20"
                height={80}
                width={100}
                alt="logo"
              />
              <Image
                src="/brands/xiaomi.svg"
                className="size-16 sm:size-20"
                height={80}
                width={100}
                alt="logo"
              />
            </div>
          </FadeAnimation>
        </FadeAnimation>
      </div>
    </section>
  );
}

export default BrandMarquee;
