import React from "react";

type EslHero = {
  hero: { title: string; subtitle1?: string; subtitle2?: string; cta: string };
  language ?: string
};

function EslBanner({ hero, language }: EslHero) {
  return (
    <section
      className={`relative py-24 bg-linear-to-r from-gray-200 to-gray-500 dark:from-gray-800 dark:to-gray-700 min-h-[35vw]`}
    >
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h1 className="text-black dark:text-white text-3xl md:text-4xl lg:text-5xl xl:text-[56px] mb-4">
          {hero.title}
        </h1>
        {hero.subtitle1 && <p className="mt-3 mb-6 text-base md:text-lg xl:text-xl">
          {hero.subtitle1}
        </p>}
        {hero.subtitle1 && <p className="mt-3 mb-6 text-base md:text-lg xl:text-xl">
          {hero.subtitle2}
        </p>}
        <div className="mt-6 flex justify-center">
          <a href="/" className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-md">
            {hero.cta}
          </a>
        </div>
      </div>
    </section>
  );
}

export default EslBanner;
