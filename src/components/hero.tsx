"use client";

import { useLanguage } from "@/src/contexts/language-context";
import { useTheme } from "../contexts/theme-context";
import { FadeAnimation } from "../motion-animations/FadeAnimation";

export function Hero() {
  const { t } = useLanguage();
  const { theme } = useTheme();

  // const slides = [
  //   {
  //     type: "video",
  //     src: "/hero-video.mp4",
  //   },
  //   {
  //     type: "image",
  //     src: "/banner.webp",
  //     title1: t("hero.title.line1"),
  //     title2: t("hero.title.line2"),
  //   },
  // ];

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden sm:rounded-b-4xl">
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          muted
          loop
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/banner-video-animation.mp4" type="video/mp4"></source>
        </video>
        {/* <video autoPlay muted loop className="absolute inset-0 w-full h-full object-cover">
            <source src="/hero-video.mp4" type="video/mp4"></source>
        </video> */}

        {/* Overlay */}
        {/* <div className="absolute inset-0 bg-black/40"></div> */}


        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4 backdrop-blu r-sm">
          <FadeAnimation direction="up">
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6 text-black">
            
              <FadeAnimation
                direction="up"
                staggerChildren={0.3}
                className="flex flex-col"
              >
                <span className="">
                  <span className="chroma-text chroma-text-animate text-nowrap mr-2 xs:mr-3">
                    {t("hero.title.line1").split(" ").slice(0, 1).join(" ")}
                  </span>{" "}
                  {t("hero.title.line1").split(" ").slice(1).join(" ")}
                </span>
                <span>{t("hero.title.line2")}</span>
              </FadeAnimation>
            </h1>

            <a
              href="/contact"
              className="inline-block mt-4 px-6 py-3 bg-black hover:bg-black/80 text-white rounded-2xl transition-all duration-300 min-w-[170px]"
            >
              More Info
            </a>
          </FadeAnimation>
        </div>
      </div>
    </section>
  );
}
