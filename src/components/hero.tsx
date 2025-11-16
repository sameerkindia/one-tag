"use client";

import { useLanguage } from "@/src/contexts/language-context";
import { useTheme } from "../contexts/theme-context";
import { FadeAnimation } from "../motion-animations/FadeAnimation";

export function Hero() {
  const { t } = useLanguage();
  const { theme } = useTheme();

  // console.log(theme === "dark", " this is theme");

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

  // if (!theme) return null;

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden sm:rounded-b-4xl">
      {/* <div className="absolute inset-0 w-full h-full">
        <video
          key={theme}
          autoPlay
          muted
          loop
          className="inset-0 w-full h-full object-fill"
        >
          <source
            src={
              theme === "dark" ? "/banner-video-dark.mp4" : "/banner-video.mp4"
            }
            type="video/mp4"
          />
        </video>
      </div> */}
      <div
        className={`absolute inset-0 w-full h-full opacity-0 dark:opacity-100`}
      >
        <video
          key={theme}
          autoPlay
          muted
          loop
          className="inset-0 w-full h-full object-fill"
        >
          <source src={"/banner-video-dark.mp4"} type="video/mp4" />
        </video>
      </div>

      <div
        className={`absolute inset-0 w-full h-full opacity-100 dark:opacity-0`}
      >
        <video
          key={theme}
          autoPlay
          muted
          loop
          className="inset-0 w-full h-full object-fill"
        >
          <source src={"/banner-video.mp4"} type="video/mp4" />
        </video>
      </div>

      {/* Overlay */}
      {/* <div className="absolute inset-0 bg-black/40"></div> */}

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4 backdrop-blu r-sm">
        <FadeAnimation direction="up">
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6 text-black dark:text-white">
            <FadeAnimation
              direction="up"
              staggerChildren={0.3}
              className="flex flex-col"
            >
              <span className="" key={theme}>
                <span
                  key={theme}
                  className={`chroma-text chroma-text-animate text-nowrap ${
                    theme === "dark" ? "bg-gradient-dark" : "bg-gradient-light"
                  }`}
                >
                  {t("hero.title.line1").split(" ").slice(0, 1).join(" ")}
                </span>{" "}
                {t("hero.title.line1").split(" ").slice(1).join(" ")}
              </span>
              <span>{t("hero.title.line2")}</span>
            </FadeAnimation>
          </h1>

          <a
            href="/contact"
            className="inline-block mt-4 px-6 py-3 bg-black dark:bg-white hover:bg-black/80 dark:hover:bg-white/80 text-white dark:text-black rounded-2xl transition-all duration-300 min-w-[170px]"
          >
            More Info
          </a>
        </FadeAnimation>
      </div>
    </section>
  );
}
