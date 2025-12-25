import React from "react";
import AnimationText from "../Animation-text";

type EslHero = {
  hero: { title: string; subtitle1?: string; subtitle2?: string; cta: string };
  language?: string;
};

function EslBanner({ hero, language }: EslHero) {
  return (
    <section
      className={`relative pt-30 pb-16 sm:py-24 bg-linear-to-r from-gray-200 to-gray-500 dark:from-gray-800 dark:to-gray-700`}
    >
      <div className="max-w-5xl flex items-center justify-center flex-col mx-auto px-4 sm:px-6 text-center min-h-[28vw]">
        <h1 className="text-black dark:text-white text-3xl md:text-4xl lg:text-5xl xl:text-[56px] mb-4 font-bold text-pretty">
          <AnimationText onRepeat>
            {hero.title.split(" ").slice(0, 2).join(" ")}
          </AnimationText>{" "}
          {hero.title.split(" ").slice(2).join(" ")}
        </h1>
        {hero.subtitle1 && (
          <p className="text-base md:text-lg lg:text-xl 2lg:text-2xl font-medium 3md:mt-3 mb-4 3md:mb-6">
            {hero.subtitle1}
          </p>
        )}
        {hero.subtitle2 && (
          <p className="text-base md:text-lg lg:text-xl 2lg:text-2xl font-medium 3md:mt-3 mb-4 3md:mb-6">
            {hero.subtitle2}
          </p>
        )}
        <div className="mt-3 sm:mt-6 flex justify-center">
          <a
            href="/"
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-md"
          >
            {hero.cta}
          </a>
        </div>
      </div>
    </section>
  );
}

export default EslBanner;
