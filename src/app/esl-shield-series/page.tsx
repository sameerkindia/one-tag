"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/src/contexts/language-context";

export default function ZkongShieldPage() {
  const { language } = useLanguage?.() ?? { language: "en" };

  /* ---------------- Dummy Data ---------------- */
  const hero = {
    title: "Shield Series ESL",
    subtitle1:
      "ZKONG Shield electronic retail price tags offer robust, durable digital signage, designed to withstand retail environments while providing clear, instant price and product updates, enhancing customer engagement.",
    subtitle2:
      "Choose ZKONG Shield Retail ESL for a reliable, cost-effective, and innovative retail ESL solution. Transform your store with ZKONG Shield today!",
    cta: "Contact Us",
  };

  // video
  const video = {
    videoId: "XaCATK6Cr9o?si=4LUhFvz9wzzTcnRn", // dummy - replace with real YT id
    title: "ZKONG Shield Series",
    description: "Robust & Digital Retail Labels",
  };

  // Section 3: horizontal tabs (models) - hover & click

  const modalSection = {
    title: "Models of ZKONG Shield Digital Retail Price Tags",
  };

  const models = [
    {
      id: "m1",
      name: '3.0" Shield',
      title: 'ZKONG Shield 3.0"',
      desc: "Compact shelf label for general retail.",
      img: "/placeholders/label-1.png",
      specs: [
        { k: "Resolution", v: "296×128" },
        { k: "Radio", v: "2.4GHz BLE" },
      ],
    },
    {
      id: "m2",
      name: '4.2" Shield',
      title: 'ZKONG Shield 4.2"',
      desc: "Bigger display for detailed pricing.",
      img: "/placeholders/label-2.png",
      specs: [
        { k: "Resolution", v: "480×272" },
        { k: "Battery", v: "CR2477" },
      ],
    },
    {
      id: "m3",
      name: '7.5" Shield',
      title: 'ZKONG Shield 7.5"',
      desc: "Large display for promotional content.",
      img: "/placeholders/label-3.png",
      specs: [
        { k: "Resolution", v: "640×384" },
        { k: "Battery", v: "Li-ion" },
      ],
    },
    {
      id: "m4",
      name: "Rugged",
      title: "ZKONG Shield Rugged",
      desc: "IP65 enclosure for harsh environments.",
      img: "/placeholders/label-4.png",
      specs: [
        { k: "Enclosure", v: "IP65" },
        { k: "Temp", v: "-20°C ~ 60°C" },
      ],
    },
  ];

  // Section 4: vertical tabs (features)

  const featuresSection = {
    title: "Features of ZKONG Shield Retail Electronic Shelf Labels",
  };

  const features = [
    {
      id: "f1",
      title: "Robust Durability",
      body: "Industrial-grade materials for long lifecycle in stores.",
      img: "/placeholders/feature-1.jpg",
    },
    {
      id: "f2",
      title: "Advanced Connectivity",
      body: "Stable 2.4GHz + BLE network and cloud management.",
      img: "/placeholders/feature-2.jpg",
    },
    {
      id: "f3",
      title: "Energy Saving",
      body: "Optimized refresh for long battery life.",
      img: "/placeholders/feature-3.jpg",
    },
    {
      id: "f4",
      title: "Easy Integration",
      body: "APIs and middleware to fit POS/ERP systems.",
      img: "/placeholders/feature-4.jpg",
    },
  ];

  // Section 6: carousel items
  const scenarios = [
    { id: "s1", title: "Electronics", img: "/placeholders/scenario-1.jpg" },
    { id: "s2", title: "Bakery", img: "/placeholders/scenario-2.jpg" },
    { id: "s3", title: "Fresh Produce", img: "/placeholders/scenario-3.jpg" },
    { id: "s4", title: "Pharmacy", img: "/placeholders/scenario-4.jpg" },
  ];

  // Section 7: cards
  const threeCards = [
    {
      id: "c1",
      title: "Instant Updates",
      body: "Push price changes instantly across all stores.",
      icon: "🕒",
    },
    {
      id: "c2",
      title: "Enterprise Security",
      body: "Secure cloud and device authorization.",
      icon: "🔒",
    },
    {
      id: "c3",
      title: "Dynamic Pricing",
      body: "Adjust promotions automatically by rule.",
      icon: "📈",
    },
  ];

  /* ---------------- UI state ---------------- */
  const [activeModelIndex, setActiveModelIndex] = useState(0);
  const [activeFeatureIndex, setActiveFeatureIndex] = useState(0);
  const [isModelsHovered, setIsModelsHovered] = useState(false); // optional visual flag
  const [isFeaturesHovered, setIsFeaturesHovered] = useState(false);

  // carousel ref
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const scrollCarousel = (dir: "left" | "right") => {
    if (!carouselRef.current) return;
    const width = carouselRef.current.clientWidth;
    carouselRef.current.scrollBy({
      left: dir === "left" ? -width : width,
      behavior: "smooth",
    });
  };

  /* ---------------- Helpers ---------------- */
  const onModelHover = (index: number) => {
    setActiveModelIndex(index);
    setIsModelsHovered(true);
  };
  const onModelLeave = () => setIsModelsHovered(false);

  const onFeatureHover = (index: number) => {
    setActiveFeatureIndex(index);
    setIsFeaturesHovered(true);
  };
  const onFeatureLeave = () => setIsFeaturesHovered(false);

  return (
    <div className="w-full bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      {/* ===== 1. Hero Banner ===== */}
      <section
        className={`relative py-24 bg-linear-to-r from-gray-200 to-gray-500 dark:from-gray-800 dark:to-gray-700 min-h-[35vw]`}
      >
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-black dark:text-white text-3xl md:text-4xl lg:text-5xl xl:text-[56px] mb-4">
            {hero.title}
          </h1>
          <p className="mt-3 mb-6 text-base md:text-lg xl:text-xl">
            {hero.subtitle1}
          </p>
          <p className="mt-3 mb-6 text-base md:text-lg xl:text-xl">
            {hero.subtitle2}
          </p>
          <div className="mt-6 flex justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-md">
              {hero.cta}
            </button>
          </div>
        </div>
      </section>

      {/* ===== 2. YouTube Video ===== */}
      <section className="py-14">
        <div className="container mx-auto px-4 max-w-7xl relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              {/* <h2 className="text-xl font-semibold">Product Video</h2> */}
              <h2 className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold">
                {video.title}
              </h2>
              <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl text-gray-600 dark:text-gray-300 mt-2">
                {video.description}
              </p>
            </div>

            <div className="w-full aspect-video rounded-xl overflow-hidden shadow">
              {/* YouTube embed */}
              <iframe
                title={video.title}
                src={`https://www.youtube.com/embed/${video.videoId}`}
                className="w-full h-full"
                frameBorder={0}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== 3. Horizontal Tabs (Models) - hover & click ===== */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-7xl relative">
          <h2 className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold text-center mb-6">
            {modalSection.title}
          </h2>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-4">
            <div className="flex flex-col gap-6">
              {/* pills list (wrap on small) */}
              <div className="flex flex-wrap gap-2">
                {models.map((m, i) => (
                  <button
                    key={m.id}
                    onMouseEnter={() => onModelHover(i)}
                    onMouseLeave={onModelLeave}
                    onClick={() => setActiveModelIndex(i)}
                    className={`text-sm px-3 py-2 rounded-md transition-all ${
                      activeModelIndex === i
                        ? "bg-blue-600 text-white shadow"
                        : "bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-200"
                    }`}
                    aria-pressed={activeModelIndex === i}
                  >
                    {m.name}
                  </button>
                ))}
              </div>
              <div className="">
                {/* <div className="mt-4 text-sm text-gray-600 dark:text-gray-300">
                  <div className="font-medium">
                    {models[activeModelIndex].title}
                  </div>
                  <div className="mt-1">{models[activeModelIndex].desc}</div>
                </div> */}

                {/* <div className="mt-4 hidden lg:block">
                  <ul className="space-y-2 text-sm">
                    {models[activeModelIndex].specs.map((s, idx) => (
                      <li
                        key={idx}
                        className="flex justify-between bg-gray-50 dark:bg-gray-700 p-2 rounded"
                      >
                        <span className="text-gray-600 dark:text-gray-300">
                          {s.k}
                        </span>
                        <span className="font-medium">{s.v}</span>
                      </li>
                    ))}
                  </ul>
                </div> */}
              </div>

              {/* preview */}
              <div className="">
                <div className="rounded-xl bg-gray-50 dark:bg-gray-700 p-6 flex flex-col md:flex-row gap-6 items-center">
                  <div className="w-full md:w-1/2 h-40 md:h-56 relative">
                    <Image
                      src={models[activeModelIndex].img}
                      alt={models[activeModelIndex].title}
                      fill
                      className="object-contain p-3"
                    />
                  </div>

                  <div className="w-full md:w-1/2">
                    <h3 className="text-lg font-semibold">
                      {models[activeModelIndex].title}
                    </h3>
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                      {models[activeModelIndex].desc}
                    </p>
                    <ul className="text-sm">
                      {models[activeModelIndex].specs.map((s, idx) => (
                        <li
                          key={idx}
                          className="flex gap-6 bg-gray-50 dark:bg-gray-700 py-0.5 px-2 rounded"
                        >
                          <span className="text-gray-600 dark:text-gray-300">
                            {s.k}
                          </span>
                          <span className="font-medium">{s.v}</span>
                        </li>
                      ))}
                    </ul>

                    {/* small specs for mobile */}
                    {/* <div className="mt-4 grid grid-cols-2 gap-2 md:hidden">
                      {models[activeModelIndex].specs.map((s, idx) => (
                        <div
                          key={idx}
                          className="bg-white dark:bg-gray-800 p-2 rounded text-xs"
                        >
                          <div className="text-gray-500">{s.k}</div>
                          <div className="font-medium">{s.v}</div>
                        </div>
                      ))}
                    </div> */}
                  </div>
                </div>

                {/* thumbnails */}
                {/* <div className="mt-4 grid grid-cols-4 gap-3">
                  {models.map((m, idx) => (
                    <button
                      key={m.id + "-thumb"}
                      onClick={() => setActiveModelIndex(idx)}
                      className={`rounded overflow-hidden border ${
                        activeModelIndex === idx
                          ? "ring-2 ring-blue-500"
                          : "border-gray-100 dark:border-gray-700"
                      }`}
                    >
                      <div className="relative w-full h-20">
                        <Image
                          src={m.img}
                          alt={m.title}
                          fill
                          className="object-contain p-2"
                        />
                      </div>
                    </button>
                  ))}
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 4. Vertical Tabs (Features) - hover & click ===== */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-7xl relative">
          <h2 className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold text-center mb-6">
            {featuresSection.title}
          </h2>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-4">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* vertical nav */}
              <div className="lg:col-span-4">
                <div className="space-y-3">
                  {features.map((f, i) => (
                    <button
                      key={f.id}
                      onMouseEnter={() => onFeatureHover(i)}
                      onMouseLeave={onFeatureLeave}
                      onClick={() => setActiveFeatureIndex(i)}
                      className={`w-full text-left p-3 rounded-md transition ${
                        activeFeatureIndex === i
                          ? "bg-blue-600 text-white"
                          : "bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-200"
                      }`}
                      aria-pressed={activeFeatureIndex === i}
                    >
                      <div className="font-medium">{f.title}</div>
                      <div className="text-xs mt-1 text-gray-500 dark:text-gray-300 line-clamp-2">
                        {f.body}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* preview */}
              <div className="lg:col-span-8">
                <div className="rounded-xl bg-gray-50 dark:bg-gray-700 p-6">
                  <div className="grid md:grid-cols-2 gap-6 items-center">
                    <div>
                      <h3 className="text-xl font-semibold">
                        {features[activeFeatureIndex].title}
                      </h3>
                      <p className="mt-3 text-gray-600 dark:text-gray-300">
                        {features[activeFeatureIndex].body}
                      </p>

                      <ul className="mt-4 list-disc list-inside text-sm text-gray-600 dark:text-gray-300">
                        <li>Example detail one for the feature</li>
                        <li>Example detail two for the feature</li>
                        <li>Example detail three for the feature</li>
                      </ul>
                    </div>

                    <div className="w-full h-48 relative rounded overflow-hidden bg-gray-100 dark:bg-gray-600">
                      <Image
                        src={features[activeFeatureIndex].img}
                        alt={features[activeFeatureIndex].title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 5. Text Left / Image Right ===== */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-7xl relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-semibold">
                What Makes ZKONG Shield Different?
              </h2>
              <p className="mt-4 text-gray-600 dark:text-gray-300">
                ZKONG Shield stands out for durability, energy efficiency, and
                seamless integration with retail backend systems. Designed to be
                reliable in intensive retail operations.
              </p>

              <ul className="mt-4 space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li>• Industrial material and robust enclosure</li>
                <li>• Optimized wireless performance for large stores</li>
                <li>• Cloud management and open APIs</li>
              </ul>
            </div>

            <div className="w-full h-64 relative rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-700">
              <Image
                src="/placeholders/left-right.jpg"
                alt="shelf"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== 6. Carousel (Usage Scenario) ===== */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-7xl relative">
          <h2 className="text-2xl font-semibold text-center mb-6">
            Usage Scenario of ZKONG Shield Retail Store Shelf Labels
          </h2>

          <div className="relative">
            <button
              onClick={() => scrollCarousel("left")}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white dark:bg-gray-700 shadow"
              aria-label="Previous"
            >
              ◀
            </button>

            <div
              ref={carouselRef}
              className="overflow-x-auto scroll-smooth no-scrollbar pb-4"
              style={{ scrollSnapType: "x mandatory" } as React.CSSProperties}
            >
              <div className="inline-flex gap-4">
                {scenarios.map((s) => (
                  <div
                    key={s.id}
                    className="min-w-[280px] md:min-w-[320px] bg-white dark:bg-gray-800 rounded-xl p-3 shadow shrink-0"
                    style={{ scrollSnapAlign: "center" } as React.CSSProperties}
                  >
                    <div className="relative w-full h-40 rounded overflow-hidden">
                      <Image
                        src={s.img}
                        alt={s.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="mt-3 text-sm font-medium text-center">
                      {s.title}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={() => scrollCarousel("right")}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white dark:bg-gray-700 shadow"
              aria-label="Next"
            >
              ▶
            </button>
          </div>
        </div>
      </section>

      {/* ===== 7. Three Simple Cards ===== */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="container mx-auto px-4 max-w-7xl relative">
          <h2 className="text-2xl font-semibold text-center mb-6">
            Key Benefits
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {threeCards.map((c) => (
              <div
                key={c.id}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow"
              >
                <div className="text-3xl">{c.icon}</div>
                <h3 className="mt-4 text-lg font-semibold">{c.title}</h3>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                  {c.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
