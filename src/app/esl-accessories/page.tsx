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
    title: " Simsiz bazaviy stansiya va ESL aksessuarlari",
    subtext: " Oson va muammosiz integratsiya uchun",
    ctaText: "Contact Us",
  },
  ru: {
    title: "Беспроводная базовая станция и аксессуары для ESL",
    subtext: "Для более простой и бесшовной интеграции",
    ctaText: "Contact Us",
  },
};

const accessoriesSection = {
  en: {
    title: "ESL Accessories",
    accessoriesData: [
      {
        title: "Holder",
        decs: "any display holder",
        products: [
          {
            id: 1,
            name: "Holder 1#",
            src: "/esl-accessories/products/Holder D/1.png",
          },
          {
            id: 2,
            name: "3.7 Inch & 4.2 Inch Holder",
            src: "/esl-accessories/products/Holder D/2.png",
          },
          {
            id: 3,
            name: "5.8 Inch &7.5 Inch Holder",
            src: "/esl-accessories/products/Holder D/3.png",
          },
          {
            id: 4,
            name: "10.2 Inch & 11.6 Inch & 13.3 Inch Holder",
            src: "/esl-accessories/products/Holder D/4.png",
          },
        ],
      },
      {
        title: "Wall Mounting Kit/Rail End Cap/Rail Incline Spacer",
        decs: "",
        products: [
          {
            id: 1,
            name: "Wall Mounting Kit",
            src: "/esl-accessories/products/Wall D/1.png",
          },
          {
            id: 2,
            name: "Wall Mounting Kit 2",
            src: "/esl-accessories/products/Wall D/2.png",
          },
          {
            id: 3,
            name: "Rail End Cap",
            src: "/esl-accessories/products/Wall D/3.png",
          },
          {
            id: 4,
            name: "Rail Incline Spacer",
            src: "/esl-accessories/products/Wall D/4.png",
          },
        ],
      },
      {
        title: "Ice Pin/Floor Stand/Card Holder",
        decs: "",
        products: [
          {
            id: 1,
            name: "Ice Pin",
            src: "/esl-accessories/products/Ice D/1.png",
          },
          {
            id: 2,
            name: "Floor Stand 30",
            src: "/esl-accessories/products/Ice D/2.png",
          },
          {
            id: 3,
            name: "Floor Stand 301",
            src: "/esl-accessories/products/Ice D/3.png",
          },
          {
            id: 4,
            name: "Card Holder",
            src: "/esl-accessories/products/Ice D/4.png",
          },
        ],
      },
      {
        title: "Rail",
        decs: "all standard shelves",
        products: [
          {
            id: 1,
            name: "Rail #1",
            src: "/esl-accessories/products/Rail D/1.png",
          },
          {
            id: 2,
            name: "Rail #2",
            src: "/esl-accessories/products/Rail D/2.png",
          },
          {
            id: 3,
            name: "Rail #3",
            src: "/esl-accessories/products/Rail D/3.png",
          },
          {
            id: 4,
            name: "Rail #4",
            src: "/esl-accessories/products/Rail D/4.png",
          },
          {
            id: 5,
            name: "Rail #5",
            src: "/esl-accessories/products/Rail D/5.png",
          },
          {
            id: 6,
            name: "Rail #6",
            src: "/esl-accessories/products/Rail D/6.png",
          },
          {
            id: 7,
            name: "Rail #7",
            src: "/esl-accessories/products/Rail D/7.png",
          },
          {
            id: 8,
            name: "Rail #10",
            src: "/esl-accessories/products/Rail D/8.png",
          },
          {
            id: 9,
            name: "Rail #12",
            src: "/esl-accessories/products/Rail D/9.png",
          },
          {
            id: 10,
            name: "Rail #13",
            src: "/esl-accessories/products/Rail D/10.png",
          },
          {
            id: 11,
            name: "Rail #14",
            src: "/esl-accessories/products/Rail D/11.png",
          },
          {
            id: 12,
            name: "Rail #15",
            src: "/esl-accessories/products/Rail D/12.png",
          },
          {
            id: 13,
            name: "Rail #16",
            src: "/esl-accessories/products/Rail D/13.png",
          },
        ],
      },
      {
        title: "Clamp",
        decs: "fruit and vegetable area",
        products: [
          {
            id: 1,
            name: "4.2_Clamp",
            src: "/esl-accessories/products/Clamp/1.png",
          },
          {
            id: 2,
            name: "Clamp2#2",
            src: "/esl-accessories/products/Clamp/2.png",
          },
          {
            id: 3,
            name: "Clamp1#",
            src: "/esl-accessories/products/Clamp/3.png",
          },
          {
            id: 4,
            name: "Clamp 2# 2",
            src: "/esl-accessories/products/Clamp/4.png",
          },
          {
            id: 5,
            name: "Clamp 2# 3",
            src: "/esl-accessories/products/Clamp/5.png",
          },
        ],
      },
      {
        title: "Hook",
        decs: "",
        products: [
          {
            id: 1,
            name: "Adjustable T Hook",
            src: "/esl-accessories/products/Hook D/1.png",
          },
          {
            id: 2,
            name: "S Hook",
            src: "/esl-accessories/products/Hook D/2.png",
          },
          {
            id: 3,
            name: "7.5 Inch Hanging Kit",
            src: "/esl-accessories/products/Hook D/3.png",
          },
          {
            id: 4,
            name: "Round Ring",
            src: "/esl-accessories/products/Hook D/4.png",
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
            src: "/esl-accessories/products/Vertical D/1.png",
          },
          {
            id: 2,
            name: "Vertical Clamp 1#",
            src: "/esl-accessories/products/Vertical D/2.png",
          },
          {
            id: 2,
            name: "T Mount 4#",
            src: "/esl-accessories/products/Vertical D/3.png",
          },
          {
            id: 2,
            name: "Remove Tool",
            src: "/esl-accessories/products/Vertical D/4.png",
          },
        ],
      },
    ],
  },
  uz: {
    title: "ESL aksessuarlari",
    accessoriesData: [
      {
        title: "Ushlagich",
        decs: "turli displey ushlagichlari",
        products: [
          {
            id: 1,
            name: "Holder 1#",
            src: "/esl-accessories/products/Holder D/1.png",
          },
          {
            id: 2,
            name: "3.7 Inch & 4.2 Inch Holder",
            src: "/esl-accessories/products/Holder D/2.png",
          },
          {
            id: 3,
            name: "5.8 Inch &7.5 Inch Holder",
            src: "/esl-accessories/products/Holder D/3.png",
          },
          {
            id: 4,
            name: "10.2 Inch & 11.6 Inch & 13.3 Inch Holder",
            src: "/esl-accessories/products/Holder D/4.png",
          },
        ],
      },
      {
        title:
          "Devor o‘rnatish to‘plami / rels uch qopqog‘i / rels burchak moslamasi",
        decs: "",
        products: [
          {
            id: 1,
            name: "Wall Mounting Kit",
            src: "/esl-accessories/products/Wall D/1.png",
          },
          {
            id: 2,
            name: "Wall Mounting Kit 2",
            src: "/esl-accessories/products/Wall D/2.png",
          },
          {
            id: 3,
            name: "Rail End Cap",
            src: "/esl-accessories/products/Wall D/3.png",
          },
          {
            id: 4,
            name: "Rail Incline Spacer",
            src: "/esl-accessories/products/Wall D/4.png",
          },
        ],
      },
      {
        title:
          "Muzlatkich vitrinasi uchun mahkamlash pinni / pol stendi / karta ushlagichi",
        decs: "",
        products: [
          {
            id: 1,
            name: "Ice Pin",
            src: "/esl-accessories/products/Ice D/1.png",
          },
          {
            id: 2,
            name: "Floor Stand 30",
            src: "/esl-accessories/products/Ice D/2.png",
          },
          {
            id: 3,
            name: "Floor Stand 301",
            src: "/esl-accessories/products/Ice D/3.png",
          },
          {
            id: 4,
            name: "Card Holder",
            src: "/esl-accessories/products/Ice D/4.png",
          },
        ],
      },
      {
        title: "Rels",
        decs: " barcha standart javonlar uchun",
        products: [
          {
            id: 1,
            name: "Rail #1",
            src: "/esl-accessories/products/Rail D/1.png",
          },
          {
            id: 2,
            name: "Rail #2",
            src: "/esl-accessories/products/Rail D/2.png",
          },
          {
            id: 3,
            name: "Rail #3",
            src: "/esl-accessories/products/Rail D/3.png",
          },
          {
            id: 4,
            name: "Rail #4",
            src: "/esl-accessories/products/Rail D/4.png",
          },
          {
            id: 5,
            name: "Rail #5",
            src: "/esl-accessories/products/Rail D/5.png",
          },
          {
            id: 6,
            name: "Rail #6",
            src: "/esl-accessories/products/Rail D/6.png",
          },
          {
            id: 7,
            name: "Rail #7",
            src: "/esl-accessories/products/Rail D/7.png",
          },
          {
            id: 8,
            name: "Rail #10",
            src: "/esl-accessories/products/Rail D/8.png",
          },
          {
            id: 9,
            name: "Rail #12",
            src: "/esl-accessories/products/Rail D/9.png",
          },
          {
            id: 10,
            name: "Rail #13",
            src: "/esl-accessories/products/Rail D/10.png",
          },
          {
            id: 11,
            name: "Rail #14",
            src: "/esl-accessories/products/Rail D/11.png",
          },
          {
            id: 12,
            name: "Rail #15",
            src: "/esl-accessories/products/Rail D/12.png",
          },
          {
            id: 13,
            name: "Rail #16",
            src: "/esl-accessories/products/Rail D/13.png",
          },
        ],
      },
      {
        title: "Qisqich",
        decs: "meva-sabzavot bo‘limi uchun",
        products: [
          {
            id: 1,
            name: "4.2_Clamp",
            src: "/esl-accessories/products/Clamp/1.png",
          },
          {
            id: 2,
            name: "Clamp2#2",
            src: "/esl-accessories/products/Clamp/2.png",
          },
          {
            id: 3,
            name: "Clamp1#",
            src: "/esl-accessories/products/Clamp/3.png",
          },
          {
            id: 4,
            name: "Clamp 2# 2",
            src: "/esl-accessories/products/Clamp/4.png",
          },
          {
            id: 5,
            name: "Clamp 2# 3",
            src: "/esl-accessories/products/Clamp/5.png",
          },
        ],
      },
      {
        title: "Ilgak",
        decs: "",
        products: [
          {
            id: 1,
            name: "Adjustable T Hook",
            src: "/esl-accessories/products/Hook D/1.png",
          },
          {
            id: 2,
            name: "S Hook",
            src: "/esl-accessories/products/Hook D/2.png",
          },
          {
            id: 3,
            name: "7.5 Inch Hanging Kit",
            src: "/esl-accessories/products/Hook D/3.png",
          },
          {
            id: 4,
            name: "Round Ring",
            src: "/esl-accessories/products/Hook D/4.png",
          },
        ],
      },
      {
        title: "Vertikal qisqich / T-o‘rnatkich / o‘rnatish va yechish asbobi",
        decs: "",
        products: [
          {
            id: 1,
            name: "Vertical Clamp 2#",
            src: "/esl-accessories/products/Vertical D/1.png",
          },
          {
            id: 2,
            name: "Vertical Clamp 1#",
            src: "/esl-accessories/products/Vertical D/2.png",
          },
          {
            id: 2,
            name: "T Mount 4#",
            src: "/esl-accessories/products/Vertical D/3.png",
          },
          {
            id: 2,
            name: "Remove Tool",
            src: "/esl-accessories/products/Vertical D/4.png",
          },
        ],
      },
    ],
  },
  ru: {
    title: "Аксессуары для ESL",
    accessoriesData: [
      {
        title: "Держатель",
        decs: "любые держатели дисплеев",
        products: [
          {
            id: 1,
            name: "Holder 1#",
            src: "/esl-accessories/products/Holder D/1.png",
          },
          {
            id: 2,
            name: "3.7 Inch & 4.2 Inch Holder",
            src: "/esl-accessories/products/Holder D/2.png",
          },
          {
            id: 3,
            name: "5.8 Inch &7.5 Inch Holder",
            src: "/esl-accessories/products/Holder D/3.png",
          },
          {
            id: 4,
            name: "10.2 Inch & 11.6 Inch & 13.3 Inch Holder",
            src: "/esl-accessories/products/Holder D/4.png",
          },
        ],
      },
      {
        title:
          "Набор для настенного крепления / торцевая заглушка рейки / наклонный адаптер рейки",
        decs: "",
        products: [
          {
            id: 1,
            name: "Wall Mounting Kit",
            src: "/esl-accessories/products/Wall D/1.png",
          },
          {
            id: 2,
            name: "Wall Mounting Kit 2",
            src: "/esl-accessories/products/Wall D/2.png",
          },
          {
            id: 3,
            name: "Rail End Cap",
            src: "/esl-accessories/products/Wall D/3.png",
          },
          {
            id: 4,
            name: "Rail Incline Spacer",
            src: "/esl-accessories/products/Wall D/4.png",
          },
        ],
      },
      {
        title:
          "Крепёж для морозильных витрин / напольная стойка / держатель карточек",
        decs: "",
        products: [
          {
            id: 1,
            name: "Ice Pin",
            src: "/esl-accessories/products/Ice D/1.png",
          },
          {
            id: 2,
            name: "Floor Stand 30",
            src: "/esl-accessories/products/Ice D/2.png",
          },
          {
            id: 3,
            name: "Floor Stand 301",
            src: "/esl-accessories/products/Ice D/3.png",
          },
          {
            id: 4,
            name: "Card Holder",
            src: "/esl-accessories/products/Ice D/4.png",
          },
        ],
      },
      {
        title: "Рейка",
        decs: "для всех стандартных полок",
        products: [
          {
            id: 1,
            name: "Rail #1",
            src: "/esl-accessories/products/Rail D/1.png",
          },
          {
            id: 2,
            name: "Rail #2",
            src: "/esl-accessories/products/Rail D/2.png",
          },
          {
            id: 3,
            name: "Rail #3",
            src: "/esl-accessories/products/Rail D/3.png",
          },
          {
            id: 4,
            name: "Rail #4",
            src: "/esl-accessories/products/Rail D/4.png",
          },
          {
            id: 5,
            name: "Rail #5",
            src: "/esl-accessories/products/Rail D/5.png",
          },
          {
            id: 6,
            name: "Rail #6",
            src: "/esl-accessories/products/Rail D/6.png",
          },
          {
            id: 7,
            name: "Rail #7",
            src: "/esl-accessories/products/Rail D/7.png",
          },
          {
            id: 8,
            name: "Rail #10",
            src: "/esl-accessories/products/Rail D/8.png",
          },
          {
            id: 9,
            name: "Rail #12",
            src: "/esl-accessories/products/Rail D/9.png",
          },
          {
            id: 10,
            name: "Rail #13",
            src: "/esl-accessories/products/Rail D/10.png",
          },
          {
            id: 11,
            name: "Rail #14",
            src: "/esl-accessories/products/Rail D/11.png",
          },
          {
            id: 12,
            name: "Rail #15",
            src: "/esl-accessories/products/Rail D/12.png",
          },
          {
            id: 13,
            name: "Rail #16",
            src: "/esl-accessories/products/Rail D/13.png",
          },
        ],
      },
      {
        title: "Зажим",
        decs: "для отдела фруктов и овощей",
        products: [
          {
            id: 1,
            name: "4.2_Clamp",
            src: "/esl-accessories/products/Clamp/1.png",
          },
          {
            id: 2,
            name: "Clamp2#2",
            src: "/esl-accessories/products/Clamp/2.png",
          },
          {
            id: 3,
            name: "Clamp1#",
            src: "/esl-accessories/products/Clamp/3.png",
          },
          {
            id: 4,
            name: "Clamp 2# 2",
            src: "/esl-accessories/products/Clamp/4.png",
          },
          {
            id: 5,
            name: "Clamp 2# 3",
            src: "/esl-accessories/products/Clamp/5.png",
          },
        ],
      },
      {
        title: "Крючок",
        decs: "",
        products: [
          {
            id: 1,
            name: "Adjustable T Hook",
            src: "/esl-accessories/products/Hook D/1.png",
          },
          {
            id: 2,
            name: "S Hook",
            src: "/esl-accessories/products/Hook D/2.png",
          },
          {
            id: 3,
            name: "7.5 Inch Hanging Kit",
            src: "/esl-accessories/products/Hook D/3.png",
          },
          {
            id: 4,
            name: "Round Ring",
            src: "/esl-accessories/products/Hook D/4.png",
          },
        ],
      },
      {
        title:
          "Вертикальный зажим / Т-крепление / инструмент для установки и снятия",
        decs: "",
        products: [
          {
            id: 1,
            name: "Vertical Clamp 2#",
            src: "/esl-accessories/products/Vertical D/1.png",
          },
          {
            id: 2,
            name: "Vertical Clamp 1#",
            src: "/esl-accessories/products/Vertical D/2.png",
          },
          {
            id: 2,
            name: "T Mount 4#",
            src: "/esl-accessories/products/Vertical D/3.png",
          },
          {
            id: 2,
            name: "Remove Tool",
            src: "/esl-accessories/products/Vertical D/4.png",
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
    title: "Simsiz bazaviy stansiya",
    description: "Bluetooth + WiFi uzatish tizimi uskunasi",
    equipmentData: [
      {
        heading: "ZAP-C (shiftga o‘rnatiladigan)",
        imgSrc: "/esl-accessories/ZAP-C.webp",
        subHeading: "Elektron narx yorlig‘i uzatish tizimi uskunasi",
        features: [
          "O‘lchami: 180×180×33 mm",
          "Ishlash harorati: −10° ~ 60°C",
          "Quvvat: 48V POE",
          "Vazn: 500 g",
          "Chastota: 2.4GHz + 5GHz",
          "Wi-Fi tezligi: 1167 Mbps",
          "Qamrov: yopiq joyda 30 m radius",
        ],
      },
      {
        heading: "ZAP-DX (shiftga o‘rnatiladigan)",
        imgSrc: "/esl-accessories/ZAP-DX.webp",
        subHeading: "BLE / Wi-Fi ikkita modulga ega simsiz bazaviy stansiya",
        features: [
          "O‘lchami: 215×215×39 mm",
          "Ishlash harorati: −10° ~ 60°C",
          "Quvvat: 48V POE",
          "Vazn: 500 g",
          "Chastota: 2.4GHz + 5GHz",
          "Wi-Fi tezligi: 1167 Mbps",
          "Qamrov: yopiq joyda 30 m radius",
        ],
      },
    ],
  },
  ru: {
    title: "Беспроводная базовая станция",
    description: "Оборудование базовой системы передачи Bluetooth + WiFi",
    equipmentData: [
      {
        heading: "ZAP-C (потолочная)",
        imgSrc: "/esl-accessories/ZAP-C.webp",
        subHeading: "Оборудование системы передачи для электронных ценников",
        features: [
          "Размер: 180×180×33 мм",
          "Рабочая температура: −10° ~ 60°C",
          "Питание: 48V POE",
          "Вес: 500 г",
          "Частота: 2.4GHz + 5GHz",
          "Скорость Wi-Fi: 1167 Mbps",
          "Зона покрытия: до 30 м внутри помещения",
        ],
      },
      {
        heading: "ZAP-DX (потолочная)",
        imgSrc: "/esl-accessories/ZAP-DX.webp",
        subHeading: "Двухмодульная беспроводная базовая станция BLE / Wi-Fi",
        features: [
          "Размер: 215×215×39 мм",
          "Рабочая температура: −10° ~ 60°C",
          "Питание: 48V POE",
          "Вес: 500 г",
          "Частота: 2.4GHz + 5GHz",
          "Скорость Wi-Fi: 1167 Mbps",
          "Зона покрытия: до 30 м внутри помещения",
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
        src: "/esl-accessories/products/Holder D/1.png",
      },
      {
        id: 2,
        name: "3.7 Inch & 4.2 Inch Holder",
        src: "/esl-accessories/products/Holder D/2.webp",
      },
      {
        id: 3,
        name: "5.8 Inch &7.5 Inch Holder",
        src: "/esl-accessories/products/Holder D/3.webp",
      },
      {
        id: 4,
        name: "10.2 Inch & 11.6 Inch & 13.3 Inch Holder",
        src: "/esl-accessories/products/Holder D/4.webp",
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
        src: "/esl-accessories/products/Wall D/1.webp",
      },
      {
        id: 2,
        name: "Wall Mounting Kit 2",
        src: "/esl-accessories/products/Wall D/2.webp",
      },
      {
        id: 3,
        name: "Rail End Cap",
        src: "/esl-accessories/products/Wall D/3.webp",
      },
      {
        id: 4,
        name: "Rail Incline Spacer",
        src: "/esl-accessories/products/Wall D/4.webp",
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
        src: "/esl-accessories/products/Ice D/1.webp",
      },
      {
        id: 2,
        name: "Floor Stand 30",
        src: "/esl-accessories/products/Ice D/2.webp",
      },
      {
        id: 3,
        name: "Floor Stand 301",
        src: "/esl-accessories/products/Ice D/3.webp",
      },
      {
        id: 4,
        name: "Card Holder",
        src: "/esl-accessories/products/Ice D/4.webp",
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
        src: "/esl-accessories/products/Rail D/1.webp",
      },
      {
        id: 2,
        name: "Rail #2",
        src: "/esl-accessories/products/Rail D/2.webp",
      },
      {
        id: 3,
        name: "Rail #3",
        src: "/esl-accessories/products/Rail D/3.webp",
      },
      {
        id: 4,
        name: "Rail #4",
        src: "/esl-accessories/products/Rail D/4.webp",
      },
      {
        id: 5,
        name: "Rail #5",
        src: "/esl-accessories/products/Rail D/5.webp",
      },
      {
        id: 6,
        name: "Rail #6",
        src: "/esl-accessories/products/Rail D/6.webp",
      },
      {
        id: 7,
        name: "Rail #7",
        src: "/esl-accessories/products/Rail D/7.webp",
      },
      {
        id: 8,
        name: "Rail #10",
        src: "/esl-accessories/products/Rail D/8.webp",
      },
      {
        id: 9,
        name: "Rail #12",
        src: "/esl-accessories/products/Rail D/9.webp",
      },
      {
        id: 10,
        name: "Rail #13",
        src: "/esl-accessories/products/Rail D/10.webp",
      },
      {
        id: 11,
        name: "Rail #14",
        src: "/esl-accessories/products/Rail D/11.webp",
      },
      {
        id: 12,
        name: "Rail #15",
        src: "/esl-accessories/products/Rail D/12.webp",
      },
      {
        id: 13,
        name: "Rail #16",
        src: "/esl-accessories/products/Rail D/13.webp",
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
        src: "/esl-accessories/products/Clamp/1.webp",
      },
      {
        id: 2,
        name: "Clamp2#2",
        src: "/esl-accessories/products/Clamp/2.webp",
      },
      {
        id: 3,
        name: "Clamp1#",
        src: "/esl-accessories/products/Clamp/3.webp",
      },
      {
        id: 4,
        name: "Clamp 2# 2",
        src: "/esl-accessories/products/Clamp/4.webp",
      },
      {
        id: 5,
        name: "Clamp 2# 3",
        src: "/esl-accessories/products/Clamp/5.webp",
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
        src: "/esl-accessories/products/Hook D/1.webp",
      },
      {
        id: 2,
        name: "S Hook",
        src: "/esl-accessories/products/Hook D/2.webp",
      },
      {
        id: 3,
        name: "7.5 Inch Hanging Kit",
        src: "/esl-accessories/products/Hook D/3.webp",
      },
      {
        id: 4,
        name: "Round Ring",
        src: "/esl-accessories/products/Hook D/4.webp",
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
        src: "/esl-accessories/products/Vertical D/1.webp",
      },
      {
        id: 2,
        name: "Vertical Clamp 1#",
        src: "/esl-accessories/products/Vertical D/2.webp",
      },
      {
        id: 2,
        name: "T Mount 4#",
        src: "/esl-accessories/products/Vertical D/3.webp",
      },
      {
        id: 2,
        name: "Remove Tool",
        src: "/esl-accessories/products/Vertical D/4.webp",
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
      <section className="min-h-[500px] sm:min-h-[70vh] relative w-full flex items-center justify-center bg-linear-to-r from-gray-200 to-gray-500 dark:from-gray-800 dark:to-gray-700 overflow-hidden py-28">
        {/* <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -left-20 -top-32 w-96 h-96 rounded-full blur-3xl bg-linear-to-br from-blue-200/30 to-purple-300/30 dark:from-blue-900/20 dark:to-purple-900/20"></div>
        </div> */}

        <Image src='/esl-accessories/ESL-accessories-bg.png' alt="ESL background image" fill />
              
        <div className="absolute z-1 inset-0 pointer-events-none">
          {/* <div className="absolute -left-20 -top-32 w-96 h-96 rounded-full blur-3xl bg-linear-to-br from-blue-200/30 to-purple-300/30 dark:from-blue-900/20 dark:to-purple-900/20"></div> */}
          <div className="absolute h-full w-full blur-2px bg-[#3a3a3a75]"></div>
        </div>

        {/* ESL-accessories-bg.png */}

        <div className="max-w-6xl mx-auto text-center relative z-10 p-6 sm:p-8 2md:p-12 rounded-2xl glass">
          <FadeAnimation staggerChildren={0.3}>
            <h1 className="text-black dark:text-white text-3xl md:text-4xl lg:text-5xl xl:text-[56px] mb-4 font-bold">
              <AnimationText onRepeat>
                {bannerSection[language].title.split(" ").slice(0, 2).join(" ")}
              </AnimationText>{" "}
              {bannerSection[language].title.split(" ").slice(2).join(" ")}
            </h1>
            <p className="text-base md:text-lg xl:text-xl">
              {bannerSection[language].subtext}
            </p>
            {/* <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
              {bannerSection[language].ctaText}
            </button> */}
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
                className="esl-accessories-slider flex even:flex-row-reverse bg-white dark:bg-gray-800 p-0 rounded-xl shadow overflow-hidden"
              >
                <div className="col-span-3 bg-blue-600 text-white p-4 sm:p-6 font-semibold min-h-[140px] flex flex-col items-center justify-center text-center w-56 2lg:w-64">
                  <p className="text-center text-xs sm:text-base">
                    {accessorie.title}
                  </p>
                  {accessorie.decs && (
                    <p className="text-[10px] sm:text-xs">{accessorie.decs}</p>
                  )}
                </div>

                <SliderCarousel
                  data={accessorie.products}
                  sliderCardClass="!px-0"
                  containerClass="!p-0 esl-accessories-slider-container"
                  columns={4}
                  responsive={{
                    base: 1,
                    md: 3,
                  }}
                  // responsive={{lg: 3 , md: 2, sm: 1}}
                  renderCard={(item: any, i) => (
                    <div className="h-52 2lg:h-60 flex flex-col items-center justify-between p-4 gap-6 transition-all duration-300 hover:bg-neutral-800">
                      <h3 className="text-sm font-bold text-center text-white">
                        {item.name}
                      </h3>
                      <div className="relative max-h-34 2lg:max-h-40 h-full w-full">
                      <Image
                        src={item.src}
                        alt={item.name}
                        // height={60}
                        // width={40}
                        quality={100}
                        fill
                        className="object-contain"
                        // className="max-h-34 2lg:max-h-40 w-24 2lg:w-30 h-full"
                      />
                      </div>
                      {/* <img
                        src={item.src}
                        alt={item.name}
                        className="max-h-34 2lg:max-h-40 h-full w-fit 2lg:w- 30 object-cover"
                      /> */}
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
                <h3 className="text-xl 2md:text-2xl font-semibold">
                  {data.heading}
                </h3>
                <p className="text-base 2md:text-lg font-medium">
                  {data.subHeading}
                </p>
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
