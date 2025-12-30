"use client";

import React from "react";
import Image from "next/image";
import SliderCarousel from "@/src/components/SliderCarousel";
import { FadeAnimation } from "@/src/motion-animations/FadeAnimation";
import AnimationText from "@/src/components/Animation-text";
import FloatingParticles from "@/src/components/FloatingParticles";
import { useLanguage } from "@/src/contexts/language-context";
import GradientBackground from "@/src/motion-animations/GradientBackground";
import SubHeading from "@/src/components/SubHeading";

const bannerSection = {
  en: {
    title: "Wireless Base Station & ESL Accessories",
    subtext: "For easier and seamless integration",
    ctaText: "Contact Us",
  },
  uz: {
    title: "Wireless Base Station & ESL Accessories",
    subtext: "For easier and seamless integration",
    ctaText: "Contact Us",
  },
  ru: {
    title: "Wireless Base Station & ESL Accessories",
    subtext: "For easier and seamless integration",
    ctaText: "Contact Us",
  },
};

const accessoriesSection = {
  en: {
    title: "ESL Accessories",
    accessoriesData: [
      {
        title: "ZKONG Holder",
        decs: "any display holder",
        products: [
          {
            id: 1,
            name: "Holder 1#",
            src: "/esl-accessories/products/holder/electronic-shelf.webp",
          },
          {
            id: 2,
            name: "3.7 Inch & 4.2 Inch Holder",
            src: "/esl-accessories/products/holder/iot-cloud-platform-open-source.webp",
          },
          {
            id: 3,
            name: "5.8 Inch &7.5 Inch Holder",
            src: "/esl-accessories/products/holder/iot-cloud-providers.webp",
          },
          {
            id: 4,
            name: "10.2 Inch & 11.6 Inch & 13.3 Inch Holder",
            src: "/esl-accessories/products/holder/iot-cloud-server.webp",
          },
        ],
      },
      {
        title: "ZKONG Wall Mounting Kit/Rail End Cap/Rail Incline Spacer",
        decs: "",
        products: [
          {
            id: 1,
            name: "Wall Mounting Kit",
            src: "/esl-accessories/products/wall/iot-cloud-services.webp",
          },
          {
            id: 2,
            name: "Wall Mounting Kit 2",
            src: "/esl-accessories/products/wall/iot-cloud-solutions.webp",
          },
          {
            id: 3,
            name: "Rail End Cap",
            src: "/esl-accessories/products/wall/rail-end-cap.webp",
          },
          {
            id: 4,
            name: "Rail Incline Spacer",
            src: "/esl-accessories/products/wall/rail-incline-spacer.webp",
          },
        ],
      },
      {
        title: "ZKONG Ice Pin/Floor Stand/Card Holder",
        decs: "",
        products: [
          {
            id: 1,
            name: "Ice Pin",
            src: "/esl-accessories/products/ice/ice-pin.webp",
          },
          {
            id: 2,
            name: "Floor Stand 30",
            src: "/esl-accessories/products/ice/floor-stand-30.webp",
          },
          {
            id: 3,
            name: "Floor Stand 301",
            src: "/esl-accessories/products/ice/floor-stand-301.webp",
          },
          {
            id: 4,
            name: "Card Holder",
            src: "/esl-accessories/products/ice/card-holder.webp",
          },
        ],
      },
      {
        title: "ZKONG Rail",
        decs: "all standard shelves",
        products: [
          {
            id: 1,
            name: "Rail #1",
            src: "/esl-accessories/products/rail/esl-rail-1_1717746526.webp",
          },
          {
            id: 2,
            name: "Rail #2",
            src: "/esl-accessories/products/rail/remote-iot-platform.webp",
          },
          {
            id: 3,
            name: "Rail #3",
            src: "/esl-accessories/products/rail/saas-iot-platform.webp",
          },
          {
            id: 4,
            name: "Rail #4",
            src: "/esl-accessories/products/rail/industrial-iot-cloud_1707187845.webp",
          },
          {
            id: 5,
            name: "Rail #5",
            src: "/esl-accessories/products/rail/internet-of-things-cloud-service.webp",
          },
          {
            id: 6,
            name: "Rail #6",
            src: "/esl-accessories/products/rail/esl-rail-6_1717746752.webp",
          },
          {
            id: 7,
            name: "Rail #7",
            src: "/esl-accessories/products/rail/esl-rail-7.webp",
          },
          {
            id: 8,
            name: "Rail #10",
            src: "/esl-accessories/products/rail/iot-cloud-applications.webp",
          },
          {
            id: 9,
            name: "Rail #12",
            src: "/esl-accessories/products/rail/esl-rail-12.webp",
          },
          {
            id: 10,
            name: "Rail #13",
            src: "/esl-accessories/products/rail/esl-rail-13.webp",
          },
          {
            id: 11,
            name: "Rail #14",
            src: "/esl-accessories/products/rail/iot-cloud-based-data-collection-storage-and-computing-services.webp",
          },
          {
            id: 12,
            name: "Rail #15",
            src: "/esl-accessories/products/rail/esl-rail-15.webp",
          },
          {
            id: 13,
            name: "Rail #16",
            src: "/esl-accessories/products/rail/esl-rail-16.webp",
          },
        ],
      },
      {
        title: "ZKONG Clamp",
        decs: "fruit and vegetable area",
        products: [
          {
            id: 1,
            name: "4.2_Clamp",
            src: "/esl-accessories/products/clamp/iot-platform-on-premise.webp",
          },
          {
            id: 2,
            name: "Clamp2#2",
            src: "/esl-accessories/products/clamp/iot-to-cloud.webp",
          },
          {
            id: 3,
            name: "Clamp1#",
            src: "/esl-accessories/products/clamp/meta-iot-cloud.webp",
          },
          {
            id: 4,
            name: "Clamp 2# 2",
            src: "/esl-accessories/products/clamp/on-premise-iot-platform.webp",
          },
          {
            id: 5,
            name: "Clamp 2# 3",
            src: "/esl-accessories/products/clamp/paas-in-iot.webp",
          },
        ],
      },
      {
        title: "ZKONG Hook",
        decs: "",
        products: [
          {
            id: 1,
            name: "Adjustable T Hook",
            src: "/esl-accessories/products/Hook/adjustable-t-hook.webp",
          },
          {
            id: 2,
            name: "S Hook",
            src: "/esl-accessories/products/Hook/s-hook.webp",
          },
          {
            id: 3,
            name: "7.5 Inch Hanging Kit",
            src: "/esl-accessories/products/Hook/iot-cloud-storage.webp",
          },
          {
            id: 4,
            name: "Round Ring",
            src: "/esl-accessories/products/Hook/iot-paas-providers.webp",
          },
        ],
      },
      {
        title: "Vertical Clamp/T Mount/Remove Tool",
        decs: "",
        products: [
          {
            id: 1,
            name: "Vertical Clamp 2#",
            src: "/esl-accessories/products/Vertical-Clamp/vertical-clamp-2.webp",
          },
          {
            id: 2,
            name: "Vertical Clamp 1#",
            src: "/esl-accessories/products/Vertical-Clamp/vertical-clamp-1.webp",
          },
          {
            id: 2,
            name: "T Mount 4#",
            src: "/esl-accessories/products/Vertical-Clamp/t-mount-4.webp",
          },
          {
            id: 2,
            name: "Remove Tool",
            src: "/esl-accessories/products/Vertical-Clamp/remove-tool.webp",
          },
        ],
      },
    ],
  },
  uz: {
    title: "ESL Accessories",
    accessoriesData: [
      {
        title: "ZKONG Holder",
        decs: "any display holder",
        products: [
          {
            id: 1,
            name: "Holder 1#",
            src: "/esl-accessories/products/holder/electronic-shelf.webp",
          },
          {
            id: 2,
            name: "3.7 Inch & 4.2 Inch Holder",
            src: "/esl-accessories/products/holder/iot-cloud-platform-open-source.webp",
          },
          {
            id: 3,
            name: "5.8 Inch &7.5 Inch Holder",
            src: "/esl-accessories/products/holder/iot-cloud-providers.webp",
          },
          {
            id: 4,
            name: "10.2 Inch & 11.6 Inch & 13.3 Inch Holder",
            src: "/esl-accessories/products/holder/iot-cloud-server.webp",
          },
        ],
      },
      {
        title: "ZKONG Wall Mounting Kit/Rail End Cap/Rail Incline Spacer",
        decs: "",
        products: [
          {
            id: 1,
            name: "Wall Mounting Kit",
            src: "/esl-accessories/products/wall/iot-cloud-services.webp",
          },
          {
            id: 2,
            name: "Wall Mounting Kit 2",
            src: "/esl-accessories/products/wall/iot-cloud-solutions.webp",
          },
          {
            id: 3,
            name: "Rail End Cap",
            src: "/esl-accessories/products/wall/rail-end-cap.webp",
          },
          {
            id: 4,
            name: "Rail Incline Spacer",
            src: "/esl-accessories/products/wall/rail-incline-spacer.webp",
          },
        ],
      },
      {
        title: "ZKONG Ice Pin/Floor Stand/Card Holder",
        decs: "",
        products: [
          {
            id: 1,
            name: "Ice Pin",
            src: "/esl-accessories/products/ice/ice-pin.webp",
          },
          {
            id: 2,
            name: "Floor Stand 30",
            src: "/esl-accessories/products/ice/floor-stand-30.webp",
          },
          {
            id: 3,
            name: "Floor Stand 301",
            src: "/esl-accessories/products/ice/floor-stand-301.webp",
          },
          {
            id: 4,
            name: "Card Holder",
            src: "/esl-accessories/products/ice/card-holder.webp",
          },
        ],
      },
      {
        title: "ZKONG Rail",
        decs: "all standard shelves",
        products: [
          {
            id: 1,
            name: "Rail #1",
            src: "/esl-accessories/products/rail/esl-rail-1_1717746526.webp",
          },
          {
            id: 2,
            name: "Rail #2",
            src: "/esl-accessories/products/rail/remote-iot-platform.webp",
          },
          {
            id: 3,
            name: "Rail #3",
            src: "/esl-accessories/products/rail/saas-iot-platform.webp",
          },
          {
            id: 4,
            name: "Rail #4",
            src: "/esl-accessories/products/rail/industrial-iot-cloud_1707187845.webp",
          },
          {
            id: 5,
            name: "Rail #5",
            src: "/esl-accessories/products/rail/internet-of-things-cloud-service.webp",
          },
          {
            id: 6,
            name: "Rail #6",
            src: "/esl-accessories/products/rail/esl-rail-6_1717746752.webp",
          },
          {
            id: 7,
            name: "Rail #7",
            src: "/esl-accessories/products/rail/esl-rail-7.webp",
          },
          {
            id: 8,
            name: "Rail #10",
            src: "/esl-accessories/products/rail/iot-cloud-applications.webp",
          },
          {
            id: 9,
            name: "Rail #12",
            src: "/esl-accessories/products/rail/esl-rail-12.webp",
          },
          {
            id: 10,
            name: "Rail #13",
            src: "/esl-accessories/products/rail/esl-rail-13.webp",
          },
          {
            id: 11,
            name: "Rail #14",
            src: "/esl-accessories/products/rail/iot-cloud-based-data-collection-storage-and-computing-services.webp",
          },
          {
            id: 12,
            name: "Rail #15",
            src: "/esl-accessories/products/rail/esl-rail-15.webp",
          },
          {
            id: 13,
            name: "Rail #16",
            src: "/esl-accessories/products/rail/esl-rail-16.webp",
          },
        ],
      },
      {
        title: "ZKONG Clamp",
        decs: "fruit and vegetable area",
        products: [
          {
            id: 1,
            name: "4.2_Clamp",
            src: "/esl-accessories/products/clamp/iot-platform-on-premise.webp",
          },
          {
            id: 2,
            name: "Clamp2#2",
            src: "/esl-accessories/products/clamp/iot-to-cloud.webp",
          },
          {
            id: 3,
            name: "Clamp1#",
            src: "/esl-accessories/products/clamp/meta-iot-cloud.webp",
          },
          {
            id: 4,
            name: "Clamp 2# 2",
            src: "/esl-accessories/products/clamp/on-premise-iot-platform.webp",
          },
          {
            id: 5,
            name: "Clamp 2# 3",
            src: "/esl-accessories/products/clamp/paas-in-iot.webp",
          },
        ],
      },
      {
        title: "ZKONG Hook",
        decs: "",
        products: [
          {
            id: 1,
            name: "Adjustable T Hook",
            src: "/esl-accessories/products/Hook/adjustable-t-hook.webp",
          },
          {
            id: 2,
            name: "S Hook",
            src: "/esl-accessories/products/Hook/s-hook.webp",
          },
          {
            id: 3,
            name: "7.5 Inch Hanging Kit",
            src: "/esl-accessories/products/Hook/iot-cloud-storage.webp",
          },
          {
            id: 4,
            name: "Round Ring",
            src: "/esl-accessories/products/Hook/iot-paas-providers.webp",
          },
        ],
      },
      {
        title: "Vertical Clamp/T Mount/Remove Tool",
        decs: "",
        products: [
          {
            id: 1,
            name: "Vertical Clamp 2#",
            src: "/esl-accessories/products/Vertical-Clamp/vertical-clamp-2.webp",
          },
          {
            id: 2,
            name: "Vertical Clamp 1#",
            src: "/esl-accessories/products/Vertical-Clamp/vertical-clamp-1.webp",
          },
          {
            id: 2,
            name: "T Mount 4#",
            src: "/esl-accessories/products/Vertical-Clamp/t-mount-4.webp",
          },
          {
            id: 2,
            name: "Remove Tool",
            src: "/esl-accessories/products/Vertical-Clamp/remove-tool.webp",
          },
        ],
      },
    ],
  },
  ru: {
    title: "ESL Accessories",
    accessoriesData: [
      {
        title: "ZKONG Holder",
        decs: "any display holder",
        products: [
          {
            id: 1,
            name: "Holder 1#",
            src: "/esl-accessories/products/holder/electronic-shelf.webp",
          },
          {
            id: 2,
            name: "3.7 Inch & 4.2 Inch Holder",
            src: "/esl-accessories/products/holder/iot-cloud-platform-open-source.webp",
          },
          {
            id: 3,
            name: "5.8 Inch &7.5 Inch Holder",
            src: "/esl-accessories/products/holder/iot-cloud-providers.webp",
          },
          {
            id: 4,
            name: "10.2 Inch & 11.6 Inch & 13.3 Inch Holder",
            src: "/esl-accessories/products/holder/iot-cloud-server.webp",
          },
        ],
      },
      {
        title: "ZKONG Wall Mounting Kit/Rail End Cap/Rail Incline Spacer",
        decs: "",
        products: [
          {
            id: 1,
            name: "Wall Mounting Kit",
            src: "/esl-accessories/products/wall/iot-cloud-services.webp",
          },
          {
            id: 2,
            name: "Wall Mounting Kit 2",
            src: "/esl-accessories/products/wall/iot-cloud-solutions.webp",
          },
          {
            id: 3,
            name: "Rail End Cap",
            src: "/esl-accessories/products/wall/rail-end-cap.webp",
          },
          {
            id: 4,
            name: "Rail Incline Spacer",
            src: "/esl-accessories/products/wall/rail-incline-spacer.webp",
          },
        ],
      },
      {
        title: "ZKONG Ice Pin/Floor Stand/Card Holder",
        decs: "",
        products: [
          {
            id: 1,
            name: "Ice Pin",
            src: "/esl-accessories/products/ice/ice-pin.webp",
          },
          {
            id: 2,
            name: "Floor Stand 30",
            src: "/esl-accessories/products/ice/floor-stand-30.webp",
          },
          {
            id: 3,
            name: "Floor Stand 301",
            src: "/esl-accessories/products/ice/floor-stand-301.webp",
          },
          {
            id: 4,
            name: "Card Holder",
            src: "/esl-accessories/products/ice/card-holder.webp",
          },
        ],
      },
      {
        title: "ZKONG Rail",
        decs: "all standard shelves",
        products: [
          {
            id: 1,
            name: "Rail #1",
            src: "/esl-accessories/products/rail/esl-rail-1_1717746526.webp",
          },
          {
            id: 2,
            name: "Rail #2",
            src: "/esl-accessories/products/rail/remote-iot-platform.webp",
          },
          {
            id: 3,
            name: "Rail #3",
            src: "/esl-accessories/products/rail/saas-iot-platform.webp",
          },
          {
            id: 4,
            name: "Rail #4",
            src: "/esl-accessories/products/rail/industrial-iot-cloud_1707187845.webp",
          },
          {
            id: 5,
            name: "Rail #5",
            src: "/esl-accessories/products/rail/internet-of-things-cloud-service.webp",
          },
          {
            id: 6,
            name: "Rail #6",
            src: "/esl-accessories/products/rail/esl-rail-6_1717746752.webp",
          },
          {
            id: 7,
            name: "Rail #7",
            src: "/esl-accessories/products/rail/esl-rail-7.webp",
          },
          {
            id: 8,
            name: "Rail #10",
            src: "/esl-accessories/products/rail/iot-cloud-applications.webp",
          },
          {
            id: 9,
            name: "Rail #12",
            src: "/esl-accessories/products/rail/esl-rail-12.webp",
          },
          {
            id: 10,
            name: "Rail #13",
            src: "/esl-accessories/products/rail/esl-rail-13.webp",
          },
          {
            id: 11,
            name: "Rail #14",
            src: "/esl-accessories/products/rail/iot-cloud-based-data-collection-storage-and-computing-services.webp",
          },
          {
            id: 12,
            name: "Rail #15",
            src: "/esl-accessories/products/rail/esl-rail-15.webp",
          },
          {
            id: 13,
            name: "Rail #16",
            src: "/esl-accessories/products/rail/esl-rail-16.webp",
          },
        ],
      },
      {
        title: "ZKONG Clamp",
        decs: "fruit and vegetable area",
        products: [
          {
            id: 1,
            name: "4.2_Clamp",
            src: "/esl-accessories/products/clamp/iot-platform-on-premise.webp",
          },
          {
            id: 2,
            name: "Clamp2#2",
            src: "/esl-accessories/products/clamp/iot-to-cloud.webp",
          },
          {
            id: 3,
            name: "Clamp1#",
            src: "/esl-accessories/products/clamp/meta-iot-cloud.webp",
          },
          {
            id: 4,
            name: "Clamp 2# 2",
            src: "/esl-accessories/products/clamp/on-premise-iot-platform.webp",
          },
          {
            id: 5,
            name: "Clamp 2# 3",
            src: "/esl-accessories/products/clamp/paas-in-iot.webp",
          },
        ],
      },
      {
        title: "ZKONG Hook",
        decs: "",
        products: [
          {
            id: 1,
            name: "Adjustable T Hook",
            src: "/esl-accessories/products/Hook/adjustable-t-hook.webp",
          },
          {
            id: 2,
            name: "S Hook",
            src: "/esl-accessories/products/Hook/s-hook.webp",
          },
          {
            id: 3,
            name: "7.5 Inch Hanging Kit",
            src: "/esl-accessories/products/Hook/iot-cloud-storage.webp",
          },
          {
            id: 4,
            name: "Round Ring",
            src: "/esl-accessories/products/Hook/iot-paas-providers.webp",
          },
        ],
      },
      {
        title: "Vertical Clamp/T Mount/Remove Tool",
        decs: "",
        products: [
          {
            id: 1,
            name: "Vertical Clamp 2#",
            src: "/esl-accessories/products/Vertical-Clamp/vertical-clamp-2.webp",
          },
          {
            id: 2,
            name: "Vertical Clamp 1#",
            src: "/esl-accessories/products/Vertical-Clamp/vertical-clamp-1.webp",
          },
          {
            id: 2,
            name: "T Mount 4#",
            src: "/esl-accessories/products/Vertical-Clamp/t-mount-4.webp",
          },
          {
            id: 2,
            name: "Remove Tool",
            src: "/esl-accessories/products/Vertical-Clamp/remove-tool.webp",
          },
        ],
      },
    ],
  },
};

const wirelessSection = {
  en: {
    title: "Wireless Base Station",
    description: "Bluetooth + WiFi Base Transmission System Equipment",
    equipmentData: [
      {
        heading: "ZAP - C (Ceiling)",
        imgSrc: "/esl-accessories/ZAP-C.webp",
        subHeading: "Electronic shelf label transmission system equipment",
        features: [
          "Size: 180*180*33mm",
          "Operate temperature: -10°~60℃",
          "Power: 48V POE",
          "Weight: 500g",
          "Frequency: 2.4GHz+5GHz",
          "Wi-Fi Speed: 1167Mbps",
          "Coverage: Indoor 30m radius",
        ],
      },
      {
        heading: "ZAP - DX (Ceiling)",
        imgSrc: "/esl-accessories/ZAP-DX.webp",
        subHeading: "BLE / Wi-Fi dual module wireless base station",
        features: [
          "Size: 215*215*39mm",
          "Operate temperature: -10°~60℃",
          "Power: 48V POE",
          "Weight: 500g",
          "Frequency: 2.4GHz+5GHz",
          "Wi-Fi Speed: 1167Mbps",
          "Coverage: Indoor 30m radius",
        ],
      },
    ],
  },
  uz: {
    title: "Wireless Base Station",
    description: "Bluetooth + WiFi Base Transmission System Equipment",
    equipmentData: [
      {
        heading: "ZAP - C (Ceiling)",
        imgSrc: "/esl-accessories/ZAP-C.webp",
        subHeading: "Electronic shelf label transmission system equipment",
        features: [
          "Size: 180*180*33mm",
          "Operate temperature: -10°~60℃",
          "Power: 48V POE",
          "Weight: 500g",
          "Frequency: 2.4GHz+5GHz",
          "Wi-Fi Speed: 1167Mbps",
          "Coverage: Indoor 30m radius",
        ],
      },
      {
        heading: "ZAP - DX (Ceiling)",
        imgSrc: "/esl-accessories/ZAP-DX.webp",
        subHeading: "BLE / Wi-Fi dual module wireless base station",
        features: [
          "Size: 215*215*39mm",
          "Operate temperature: -10°~60℃",
          "Power: 48V POE",
          "Weight: 500g",
          "Frequency: 2.4GHz+5GHz",
          "Wi-Fi Speed: 1167Mbps",
          "Coverage: Indoor 30m radius",
        ],
      },
    ],
  },
  ru: {
    title: "Wireless Base Station",
    description: "Bluetooth + WiFi Base Transmission System Equipment",
    equipmentData: [
      {
        heading: "ZAP - C (Ceiling)",
        imgSrc: "/esl-accessories/ZAP-C.webp",
        subHeading: "Electronic shelf label transmission system equipment",
        features: [
          "Size: 180*180*33mm",
          "Operate temperature: -10°~60℃",
          "Power: 48V POE",
          "Weight: 500g",
          "Frequency: 2.4GHz+5GHz",
          "Wi-Fi Speed: 1167Mbps",
          "Coverage: Indoor 30m radius",
        ],
      },
      {
        heading: "ZAP - DX (Ceiling)",
        imgSrc: "/esl-accessories/ZAP-DX.webp",
        subHeading: "BLE / Wi-Fi dual module wireless base station",
        features: [
          "Size: 215*215*39mm",
          "Operate temperature: -10°~60℃",
          "Power: 48V POE",
          "Weight: 500g",
          "Frequency: 2.4GHz+5GHz",
          "Wi-Fi Speed: 1167Mbps",
          "Coverage: Indoor 30m radius",
        ],
      },
    ],
  },
};

const accessoriesData = [
  {
    title: "ZKONG Holder",
    decs: "any display holder",
    products: [
      {
        id: 1,
        name: "Holder 1#",
        src: "/esl-accessories/products/holder/electronic-shelf.webp",
      },
      {
        id: 2,
        name: "3.7 Inch & 4.2 Inch Holder",
        src: "/esl-accessories/products/holder/iot-cloud-platform-open-source.webp",
      },
      {
        id: 3,
        name: "5.8 Inch &7.5 Inch Holder",
        src: "/esl-accessories/products/holder/iot-cloud-providers.webp",
      },
      {
        id: 4,
        name: "10.2 Inch & 11.6 Inch & 13.3 Inch Holder",
        src: "/esl-accessories/products/holder/iot-cloud-server.webp",
      },
    ],
  },
  {
    title: "ZKONG Wall Mounting Kit/Rail End Cap/Rail Incline Spacer",
    decs: "",
    products: [
      {
        id: 1,
        name: "Wall Mounting Kit",
        src: "/esl-accessories/products/wall/iot-cloud-services.webp",
      },
      {
        id: 2,
        name: "Wall Mounting Kit 2",
        src: "/esl-accessories/products/wall/iot-cloud-solutions.webp",
      },
      {
        id: 3,
        name: "Rail End Cap",
        src: "/esl-accessories/products/wall/rail-end-cap.webp",
      },
      {
        id: 4,
        name: "Rail Incline Spacer",
        src: "/esl-accessories/products/wall/rail-incline-spacer.webp",
      },
    ],
  },
  {
    title: "ZKONG Ice Pin/Floor Stand/Card Holder",
    decs: "",
    products: [
      {
        id: 1,
        name: "Ice Pin",
        src: "/esl-accessories/products/ice/ice-pin.webp",
      },
      {
        id: 2,
        name: "Floor Stand 30",
        src: "/esl-accessories/products/ice/floor-stand-30.webp",
      },
      {
        id: 3,
        name: "Floor Stand 301",
        src: "/esl-accessories/products/ice/floor-stand-301.webp",
      },
      {
        id: 4,
        name: "Card Holder",
        src: "/esl-accessories/products/ice/card-holder.webp",
      },
    ],
  },
  {
    title: "ZKONG Rail",
    decs: "all standard shelves",
    products: [
      {
        id: 1,
        name: "Rail #1",
        src: "/esl-accessories/products/rail/esl-rail-1_1717746526.webp",
      },
      {
        id: 2,
        name: "Rail #2",
        src: "/esl-accessories/products/rail/remote-iot-platform.webp",
      },
      {
        id: 3,
        name: "Rail #3",
        src: "/esl-accessories/products/rail/saas-iot-platform.webp",
      },
      {
        id: 4,
        name: "Rail #4",
        src: "/esl-accessories/products/rail/industrial-iot-cloud_1707187845.webp",
      },
      {
        id: 5,
        name: "Rail #5",
        src: "/esl-accessories/products/rail/internet-of-things-cloud-service.webp",
      },
      {
        id: 6,
        name: "Rail #6",
        src: "/esl-accessories/products/rail/esl-rail-6_1717746752.webp",
      },
      {
        id: 7,
        name: "Rail #7",
        src: "/esl-accessories/products/rail/esl-rail-7.webp",
      },
      {
        id: 8,
        name: "Rail #10",
        src: "/esl-accessories/products/rail/iot-cloud-applications.webp",
      },
      {
        id: 9,
        name: "Rail #12",
        src: "/esl-accessories/products/rail/esl-rail-12.webp",
      },
      {
        id: 10,
        name: "Rail #13",
        src: "/esl-accessories/products/rail/esl-rail-13.webp",
      },
      {
        id: 11,
        name: "Rail #14",
        src: "/esl-accessories/products/rail/iot-cloud-based-data-collection-storage-and-computing-services.webp",
      },
      {
        id: 12,
        name: "Rail #15",
        src: "/esl-accessories/products/rail/esl-rail-15.webp",
      },
      {
        id: 13,
        name: "Rail #16",
        src: "/esl-accessories/products/rail/esl-rail-16.webp",
      },
    ],
  },
  {
    title: "ZKONG Clamp",
    decs: "fruit and vegetable area",
    products: [
      {
        id: 1,
        name: "4.2_Clamp",
        src: "/esl-accessories/products/clamp/iot-platform-on-premise.webp",
      },
      {
        id: 2,
        name: "Clamp2#2",
        src: "/esl-accessories/products/clamp/iot-to-cloud.webp",
      },
      {
        id: 3,
        name: "Clamp1#",
        src: "/esl-accessories/products/clamp/meta-iot-cloud.webp",
      },
      {
        id: 4,
        name: "Clamp 2# 2",
        src: "/esl-accessories/products/clamp/on-premise-iot-platform.webp",
      },
      {
        id: 5,
        name: "Clamp 2# 3",
        src: "/esl-accessories/products/clamp/paas-in-iot.webp",
      },
    ],
  },
  {
    title: "ZKONG Hook",
    decs: "",
    products: [
      {
        id: 1,
        name: "Adjustable T Hook",
        src: "/esl-accessories/products/Hook/adjustable-t-hook.webp",
      },
      {
        id: 2,
        name: "S Hook",
        src: "/esl-accessories/products/Hook/s-hook.webp",
      },
      {
        id: 3,
        name: "7.5 Inch Hanging Kit",
        src: "/esl-accessories/products/Hook/iot-cloud-storage.webp",
      },
      {
        id: 4,
        name: "Round Ring",
        src: "/esl-accessories/products/Hook/iot-paas-providers.webp",
      },
    ],
  },
  {
    title: "Vertical Clamp/T Mount/Remove Tool",
    decs: "",
    products: [
      {
        id: 1,
        name: "Vertical Clamp 2#",
        src: "/esl-accessories/products/Vertical-Clamp/vertical-clamp-2.webp",
      },
      {
        id: 2,
        name: "Vertical Clamp 1#",
        src: "/esl-accessories/products/Vertical-Clamp/vertical-clamp-1.webp",
      },
      {
        id: 2,
        name: "T Mount 4#",
        src: "/esl-accessories/products/Vertical-Clamp/t-mount-4.webp",
      },
      {
        id: 2,
        name: "Remove Tool",
        src: "/esl-accessories/products/Vertical-Clamp/remove-tool.webp",
      },
    ],
  },
];

export default function ESLAccessoriesPage() {
  const { language } = useLanguage();

  return (
    <div className="w-full min-h-screen text-gray-900 dark:text-white">
      <GradientBackground />
      <FloatingParticles />
      {/* HERO SECTION */}
      <section className="relative w-full min-h-[35vw] flex items-center justify-center bg-linear-to-r from-gray-200 to-gray-500 dark:from-gray-800 dark:to-gray-700 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -left-20 -top-32 w-96 h-96 rounded-full blur-3xl bg-linear-to-br from-blue-200/30 to-purple-300/30 dark:from-blue-900/20 dark:to-purple-900/20"></div>
        </div>
        <div className="relative z-10 text-center px-6">
          <FadeAnimation staggerChildren={0.3}>
            <h1 className="text-black dark:text-white text-3xl md:text-4xl lg:text-5xl xl:text-[56px] mb-4 font-bold">
              <AnimationText onRepeat>
                {bannerSection[language].title.split(" ").slice(0, 2).join(" ")}
              </AnimationText>{" "}
              {bannerSection[language].title.split(" ").slice(2).join(" ")}
            </h1>
            <p className="mb-6 text-base md:text-lg xl:text-xl">
              {bannerSection[language].subtext}
            </p>
            <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
              {bannerSection[language].ctaText}
            </button>
          </FadeAnimation>
        </div>
      </section>

      {/* BREADCRUMB */}
      {/* <div className="w-full border-b border-gray-200 dark:border-gray-700 py-3 text-sm px-6 bg-white dark:bg-gray-800">
        Home / Solution / ESL Accessory
      </div> */}

      <section className="max-w-7xl mx-auto py-16 px-6 space-y-20">
        <div className="text-center mb-10 2md:mb-16">
          {/* <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-center mx-auto mb-6">
            <AnimationText onRepeat>
              {accessoriesSection[language].title
                .split(" ")
                .slice(0, 1)
                .join(" ")}
            </AnimationText>{" "}
            {accessoriesSection[language].title.split(" ").slice(1).join(" ")}
          </h2> */}
          <SubHeading
            headingText={accessoriesSection[language].title}
            lastIndex={1}
          />
        </div>

        <div className="flex flex-col gap-6">
          {accessoriesSection[language].accessoriesData.map(
            (accessorie, index) => (
              <div
                key={index}
                className="flex even:flex-row-reverse bg-white dark:bg-gray-800 p-0 rounded-xl shadow overflow-hidden"
              >
                <div className="col-span-3 bg-blue-600 text-white p-4 sm:p-6 font-semibold min-h-[140px] flex flex-col items-center justify-center w-56 2lg:w-64">
                  <p className="text-center text-sm sm:text-base">{accessorie.title}</p>
                  {accessorie.decs && (
                    <p className="text-xs">{accessorie.decs}</p>
                  )}
                </div>

                <SliderCarousel
                  data={accessorie.products}
                  sliderCardClass="!px-0"
                  containerClass="!p-0"
                  responsive={{lg: 3 , md: 2, sm: 1}}
                  renderCard={(item: any, i) => (
                    <div className="h-52 2lg:h-60 flex flex-col items-center justify-between p-4 gap-6 transition-all duration-300 hover:bg-neutral-800">
                      <h3 className="text-sm font-bold text-center text-white">
                        {item.name}
                      </h3>
                      <Image
                        src={item.src}
                        alt={item.name}
                        height={60}
                        width={40}
                        quality={100}
                        className="max-h-34 2lg:max-h-40 w-24 2lg:w-30 object-contain"
                      />
                      {/* <p>{item.price}</p>
                    <span className="text-sm text-gray-600">{item.color}</span> */}
                    </div>
                  )}
                />

                {/* <div className="col-span-9 grid grid-cols-4 gap-4">
            {Array(8)
              .fill(0)
              .map((_, i) => (
                <div
                  key={i}
                  className="w-full h-28 bg-gray-200 dark:bg-gray-700 rounded-lg"
                />
              ))}
          </div> */}
              </div>
            )
          )}
        </div>
      </section>

      {/* WIRELESS BASE STATION */}
      <section className="max-w-7xl mx-auto py-10 2lg:py-16 px-6 space-y-20">
        <div className="text-center mb-10 2lg:mb-16">
          <SubHeading
            headingText={wirelessSection[language].title}
            lastIndex={1}
          />
          <p className="text-base 2md:text-lg 2lg:text-xl leading-relaxed">
            {wirelessSection[language].description}
          </p>
        </div>

        <div className="space-y-18 2lg:space-y-24">
        {wirelessSection[language].equipmentData.map((data, index) => (
          <div
            key={index}
            className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-2.5 2lg:gap-10 items-center"
          >
            <div className="relative w-68 2lg:w-80 mx-auto aspect-square bg-gray-200 dark:bg-gray-700 rounded-xl">
              <Image
                src={data.imgSrc}
                alt={data.heading}
                fill
                className="aspect-square"
              />
            </div>
            <div className="space-y-2 text-left">
              <h3 className="text-xl 2md:text-2xl font-semibold">{data.heading}</h3>
              <p className="text-base 2md:text-lg font-medium">{data.subHeading}</p>
              {data.features.map((feature, index) => (
                <p key={index}>{feature}</p>
              ))}
            </div>
          </div>
        ))}
        </div>

        
        {/* <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-24">
          <div className="relative w-80 mx-auto aspect-square bg-gray-200 dark:bg-gray-700 rounded-xl">
            <Image
              src="/esl-accessories/ZAP-C.webp"
              alt="ZAP - C"
              fill
              className="aspect-square"
            />
          </div>
          <div className="space-y-2 text-left">
            <h3 className="text-2xl font-semibold">ZAP - C (Ceiling)</h3>
            <p>Electronic shelf label transmission system equipment</p>
            <p>Size: 180*180*33mm</p>
            <p>Operate temperature: -10°~60℃</p>
            <p>Power: 48V POE</p>
            <p>Weight: 500g</p>
            <p>Frequency: 2.4GHz+5GHz</p>
            <p>Wi-Fi Speed: 1167Mbps</p>
            <p>Coverage: Indoor 30m radius</p>
          </div>
        </div>

        
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="relative w-80 mx-auto aspect-square bg-gray-200 dark:bg-gray-700 rounded-xl">
            <Image
              src="/esl-accessories/ZAP-DX.webp"
              alt="ZAP - C"
              fill
              className="aspect-square"
            />
          </div>
          <div className="space-y-2 text-left">
            <h3 className="text-2xl font-semibold">ZAP - DX (Ceiling)</h3>
            <p>BLE / Wi-Fi dual module wireless base station</p>
            <p>Size: 215*215*39mm</p>
            <p>Operate temperature: -10°~60℃</p>
            <p>Power: 48V POE</p>
            <p>Weight: 500g</p>
            <p>Frequency: 2.4GHz+5GHz</p>
            <p>Wi-Fi Speed: 1167Mbps</p>
            <p>Coverage: Indoor 30m radius</p>
          </div>
        </div> */}
      </section>
    </div>
  );
}
