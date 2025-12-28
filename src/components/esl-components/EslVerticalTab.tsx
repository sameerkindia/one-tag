"use client";

import React, { useState } from "react";
import Image from "next/image";

type Feature = {
  id: string;
  title: string;
  body: string;
  img: string;
};

interface EslVerticalTabProps {
  position?: "left" | "right";
  featureData: Feature[];
}

function EslVerticalTab({
  position = "left",
  featureData,
}: EslVerticalTabProps) {
  const [activeFeatureIndex, setActiveFeatureIndex] = useState(0);
  const [isFeaturesHovered, setIsFeaturesHovered] = useState(false);

  const onFeatureLeave = () => setIsFeaturesHovered(false);

  const onFeatureHover = (index: number) => {
    setActiveFeatureIndex(index);
    setIsFeaturesHovered(true);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-full">
      <div className="w-full h-48 relative rounded overflow-hidden bg-gray-100 dark:bg-gray-600">
        <Image
          src={featureData[activeFeatureIndex].img}
          alt={featureData[activeFeatureIndex].title}
          fill
          className="object-cover"
        />
      </div>
      {/* Tabs */}
      <div className={`lg:col-span-4 ${position === "left" ? "" : "order-1"}`}>
        <div className="lg:col-span-8">
        <div className="rounded-xl bg-gray-50 dark:bg-gray-700 p-6 h-full">
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div className={`${position === "left" ? "" : "order-1"}`}>
              <h3 className="text-xl font-semibold">
                {featureData[activeFeatureIndex].title}
              </h3>
              <p className="mt-3 text-gray-600 dark:text-gray-300">
                {featureData[activeFeatureIndex].body}
              </p>
            </div>

            <div className="w-full h-48 relative rounded overflow-hidden bg-gray-100 dark:bg-gray-600">
              <Image
                src={featureData[activeFeatureIndex].img}
                alt={featureData[activeFeatureIndex].title}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
        <div className="space-y-3">
          {featureData.map((f, i) => (
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

      {/* Preview */}
      <div className="lg:col-span-8">
        <div className="rounded-xl bg-gray-50 dark:bg-gray-700 p-6 h-full">
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div className={`${position === "left" ? "" : "order-1"}`}>
              <h3 className="text-xl font-semibold">
                {featureData[activeFeatureIndex].title}
              </h3>
              <p className="mt-3 text-gray-600 dark:text-gray-300">
                {featureData[activeFeatureIndex].body}
              </p>
            </div>

            <div className="w-full h-48 relative rounded overflow-hidden bg-gray-100 dark:bg-gray-600">
              <Image
                src={featureData[activeFeatureIndex].img}
                alt={featureData[activeFeatureIndex].title}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EslVerticalTab;
