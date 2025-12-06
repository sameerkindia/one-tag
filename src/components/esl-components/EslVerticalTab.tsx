"use client";

import React, { useState } from "react";
import Image from "next/image";

// type EslVerticalTab = {
//   featureData: {
//     title: string;
//     features: [
//       {
//         id: string;
//         title: string;
//         body: string;
//         img: string;
//       }
//     ];
//   };
// };


type Feature = {
  id: string;
  title: string;
  body: string;
  img: string;
};

type FeatureData = {
  title: string;
  features: Feature[];
};

interface EslVerticalTabProps {
  featureData: FeatureData;
}


function EslVerticalTab({ featureData }: EslVerticalTabProps) {
  const [activeFeatureIndex, setActiveFeatureIndex] = useState(0);
  const [isFeaturesHovered, setIsFeaturesHovered] = useState(false);
  const onFeatureLeave = () => setIsFeaturesHovered(false);

  const onFeatureHover = (index: number) => {
    setActiveFeatureIndex(index);
    setIsFeaturesHovered(true);
  };
  return (
    <section className="py-12">
      <div className="container mx-auto px-4 max-w-7xl relative">
        <h2 className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold text-center mb-6">
          {featureData.title}
        </h2>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* vertical nav */}
            <div className="lg:col-span-4">
              <div className="space-y-3">
                {featureData.features.map((f, i) => (
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
                      {featureData.features[activeFeatureIndex].title}
                    </h3>
                    <p className="mt-3 text-gray-600 dark:text-gray-300">
                      {featureData.features[activeFeatureIndex].body}
                    </p>
                  </div>

                  <div className="w-full h-48 relative rounded overflow-hidden bg-gray-100 dark:bg-gray-600">
                    <Image
                      src={featureData.features[activeFeatureIndex].img}
                      alt={featureData.features[activeFeatureIndex].title}
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
  );
}

export default EslVerticalTab;
