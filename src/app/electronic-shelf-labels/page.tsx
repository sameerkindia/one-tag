"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import { Wrench, Users, Factory, Headphones } from "lucide-react";
import { useLanguage } from "@/src/contexts/language-context";
import EslBanner from "@/src/components/esl-components/EslBanner";
import EslVideoComponent from "@/src/components/esl-components/EslVideoComponent";
import EslHorizontalTab from "@/src/components/esl-components/EslhorizontalTab";
import EslVerticalTab from "@/src/components/esl-components/EslVerticalTab";
import EslCarousel from "@/src/components/esl-components/EslCarousel";
import SliderCarousel from "@/src/components/SliderCarousel";
import InfiniteMarquee from "@/src/components/InfiniteRunningMarquee";
import GradientBackground from "@/src/motion-animations/GradientBackground";
import FloatingParticles from "@/src/components/FloatingParticles";
import SubHeading from "@/src/components/SubHeading";

const hero = {
  en: {
    title: "Advanced Electronic Shelf Labels",
    subtitle1: "ZKONG -Leading the Digital Revolution of New Retail Industry",
    cta: "Contact Us",
  },
  ru: {
    title: "Advanced Electronic Shelf Labels",
    subtitle1: "ZKONG -Leading the Digital Revolution of New Retail Industry",
    cta: "Связаться с нами",
  },
  uz: {
    title: "Advanced Electronic Shelf Labels",
    subtitle1: "ZKONG -Leading the Digital Revolution of New Retail Industry",
    cta: "Biz bilan bog'laning",
  },
};

const videoData = {
  en: {
    title: "Electronic Shelf Label Technology",
    description:
      "The new generation of electronic shelf label system, applying the technology of ZKONG ESL Communication, Wi-Fi and IOT system, enable stores to achieve all digital functions without installing servers.",
    cta: "Get More Info",
  },
  ru: {
    title: "Electronic Shelf Label Technology",
    description:
      "The new generation of electronic shelf label system, applying the technology of ZKONG ESL Communication, Wi-Fi and IOT system, enable stores to achieve all digital functions without installing servers.",
    cta: "Get More Info",
  },
  uz: {
    title: "Electronic Shelf Label Technology",
    description:
      "The new generation of electronic shelf label system, applying the technology of ZKONG ESL Communication, Wi-Fi and IOT system, enable stores to achieve all digital functions without installing servers.",
    cta: "Get More Info",
  },
};

const eslFunctionSection = {
  en: {
    title: "Electronic Shelf Labels Function",
    data1: [
      {
        id: "f1",
        title: "Change Page Automatically",
        body: "The ESL will automatically and regularly switch the page and display the promotion content to meet the needs of daily marketing activities, especially frequent price changes.",
        img: "/ESL/EslFunction/automatically.webp",
      },
      {
        id: "f2",
        title: "Advertising	",
        body: "Install ZKONG large-size electronic shelf labels in shelves, central areas and entrances to ensure the coverage and exposure of brand advertising in shops.",
        img: "/ESL/EslFunction/advertising.webp",
      },
      {
        id: "f3",
        title: "Update Stock Automatically",
        body: "The inventory data on the electronic shelf label screen will be updated simultaneously with the inventory system when the user's management system is connected with the ZKONG cloud ESL system.",
        img: "/ESL/EslFunction/update-stock.webp",
      },
      {
        id: "f4",
        title: "Out of Stock Alert",
        body: "When the number of products on the shelf is lower than the set quantity, the LED lights on electronic shelf label will flash to inform the staff.",
        img: "/ESL/EslFunction/automatically.webp",
      },
    ],
    data2: [
      {
        id: "f1",
        title: "Product Positioning",
        body: "The LED on the ESL will flash to provide the product position and a product picking route for staffs.",
        img: "/ESL/EslFunction/positioning.webp",
      },
      {
        id: "f2",
        title: "Shopping Navigation",
        body: "When consumers click the product on the app, the app will provide the best route from the consumer's current location to the located product",
        img: "/ESL/EslFunction/navigation.webp",
      },
      {
        id: "f3",
        title: "Consumer Interaction",
        body: "The customers can enter the online store and comment on the app easily when they scan the QR code on the electronic shelf label or hold the smart phone close to the ESL",
        img: "/ESL/EslFunction/interaction.webp",
      },
      {
        id: "f4",
        title: "Display Management",
        body: "Combine the ZKONG cloud ESLs with the shelf facilitate to manage the shelf, allowing staff to display goods in a quick, efficient and standardized manner.",
        img: "/ESL/EslFunction/management.webp",
      },
      {
        id: "f5",
        title: "Brand Upgrading",
        body: "The ZKONG ESL improve the overall visual impact of the store, which also enhance the brand image.",
        img: "/ESL/EslFunction/upgrading.webp",
      },
    ],
  },
  uz: {
    title: "Electronic Shelf Labels Function",
    data1: [
      {
        id: "f1",
        title: "Change Page Automatically",
        body: "The ESL will automatically and regularly switch the page and display the promotion content to meet the needs of daily marketing activities, especially frequent price changes.",
        img: "/ESL/EslFunction/automatically.webp",
      },
      {
        id: "f2",
        title: "Advertising	",
        body: "Install ZKONG large-size electronic shelf labels in shelves, central areas and entrances to ensure the coverage and exposure of brand advertising in shops.",
        img: "/ESL/EslFunction/advertising.webp",
      },
      {
        id: "f3",
        title: "Update Stock Automatically",
        body: "The inventory data on the electronic shelf label screen will be updated simultaneously with the inventory system when the user's management system is connected with the ZKONG cloud ESL system.",
        img: "/ESL/EslFunction/update-stock.webp",
      },
      {
        id: "f4",
        title: "Out of Stock Alert",
        body: "When the number of products on the shelf is lower than the set quantity, the LED lights on electronic shelf label will flash to inform the staff.",
        img: "/ESL/EslFunction/automatically.webp",
      },
    ],
    data2: [
      {
        id: "f1",
        title: "Product Positioning",
        body: "The LED on the ESL will flash to provide the product position and a product picking route for staffs.",
        img: "/ESL/EslFunction/positioning.webp",
      },
      {
        id: "f2",
        title: "Shopping Navigation",
        body: "When consumers click the product on the app, the app will provide the best route from the consumer's current location to the located product",
        img: "/ESL/EslFunction/navigation.webp",
      },
      {
        id: "f3",
        title: "Consumer Interaction",
        body: "The customers can enter the online store and comment on the app easily when they scan the QR code on the electronic shelf label or hold the smart phone close to the ESL",
        img: "/ESL/EslFunction/interaction.webp",
      },
      {
        id: "f4",
        title: "Display Management",
        body: "Combine the ZKONG cloud ESLs with the shelf facilitate to manage the shelf, allowing staff to display goods in a quick, efficient and standardized manner.",
        img: "/ESL/EslFunction/management.webp",
      },
      {
        id: "f5",
        title: "Brand Upgrading",
        body: "The ZKONG ESL improve the overall visual impact of the store, which also enhance the brand image.",
        img: "/ESL/EslFunction/upgrading.webp",
      },
    ],
  },
  ru: {
    title: "Electronic Shelf Labels Function",
    data1: [
      {
        id: "f1",
        title: "Change Page Automatically",
        body: "The ESL will automatically and regularly switch the page and display the promotion content to meet the needs of daily marketing activities, especially frequent price changes.",
        img: "/ESL/EslFunction/automatically.webp",
      },
      {
        id: "f2",
        title: "Advertising	",
        body: "Install ZKONG large-size electronic shelf labels in shelves, central areas and entrances to ensure the coverage and exposure of brand advertising in shops.",
        img: "/ESL/EslFunction/advertising.webp",
      },
      {
        id: "f3",
        title: "Update Stock Automatically",
        body: "The inventory data on the electronic shelf label screen will be updated simultaneously with the inventory system when the user's management system is connected with the ZKONG cloud ESL system.",
        img: "/ESL/EslFunction/update-stock.webp",
      },
      {
        id: "f4",
        title: "Out of Stock Alert",
        body: "When the number of products on the shelf is lower than the set quantity, the LED lights on electronic shelf label will flash to inform the staff.",
        img: "/ESL/EslFunction/automatically.webp",
      },
    ],
    data2: [
      {
        id: "f1",
        title: "Product Positioning",
        body: "The LED on the ESL will flash to provide the product position and a product picking route for staffs.",
        img: "/ESL/EslFunction/positioning.webp",
      },
      {
        id: "f2",
        title: "Shopping Navigation",
        body: "When consumers click the product on the app, the app will provide the best route from the consumer's current location to the located product",
        img: "/ESL/EslFunction/navigation.webp",
      },
      {
        id: "f3",
        title: "Consumer Interaction",
        body: "The customers can enter the online store and comment on the app easily when they scan the QR code on the electronic shelf label or hold the smart phone close to the ESL",
        img: "/ESL/EslFunction/interaction.webp",
      },
      {
        id: "f4",
        title: "Display Management",
        body: "Combine the ZKONG cloud ESLs with the shelf facilitate to manage the shelf, allowing staff to display goods in a quick, efficient and standardized manner.",
        img: "/ESL/EslFunction/management.webp",
      },
      {
        id: "f5",
        title: "Brand Upgrading",
        body: "The ZKONG ESL improve the overall visual impact of the store, which also enhance the brand image.",
        img: "/ESL/EslFunction/upgrading.webp",
      },
    ],
  },
};

const modalsSection = {
  en: {
    title: "Models of ZKONG Shield Digital Retail Price Tags",
    allModels: [
      {
        name: "Shield",
        models: [
          {
            id: "m1",
            name: "ZKC15S-E4",
            title: "ZKC15S-E4 | 1.54 ″ Screen Retail Store Shelf Labels",
            desc: "Dot Matrix EPD Black/White/Red (Yellow)",
            img: "/ESL/Shield/ZKC15S-E4.gif",
            ind: {
              nfc: true,
              remove: true,
              led: true,
            },
            specs: [
              { k: "Size", v: "44.5*35.9*13.7mm" },
              { k: "Screen", v: "27*27mm" },
              { k: "Operate temperature", v: "0~40℃" },
              { k: "Battery", v: "600mAh" },
            ],
          },
          {
            id: "m2",
            name: "ZKC21S-E4",
            title: "ZKC21S-E4 | 2.13 ″ Screen Retail Store Shelf Labels",
            desc: "Dot Matrix EPD Black/White/Red (Yellow)",
            img: "/ESL/Shield/ZKC21S-E4.gif",
            ind: {
              nfc: true,
              remove: true,
              led: true,
            },
            specs: [
              { k: "Size", v: "70*36*14.3mm" },
              { k: "Screen", v: "48.6*23.7mm" },
              { k: "Operate temperature", v: "0~40℃" },
              { k: "Battery", v: "1200mAh" },
            ],
          },
          {
            id: "m3",
            name: "ZK21SF",
            title: "ZK21SF | 2.13 ″ Screen Retail Store Shelf Labels",
            desc: "Dot Matrix EPD Black/White",
            img: "/ESL/Shield/ZK21SF.gif",
            ind: {
              nfc: true,
              remove: true,
              led: true,
            },
            specs: [
              { k: "Size", v: "70*36*14.3mm" },
              { k: "Screen", v: "48.6*23.7mm" },
              { k: "Operate temperature", v: "-25°~25℃" },
              { k: "Battery", v: "1000mAh" },
            ],
          },
          {
            id: "m4",
            name: "ZKC26S-E4",
            title: "ZKC26S-E4 | 2.66 ″ Screen Retail Store Shelf Labels",
            desc: "",
            img: "/ESL/Shield/ZKC26S-E4.gif",
            ind: {
              nfc: true,
              remove: true,
              led: true,
            },
            specs: [
              { k: "Size", v: "83*41*14.3mm" },
              { k: "Screen", v: "60.1*30.7mm" },
              { k: "Operate temperature", v: "0~40℃" },
              { k: "Battery", v: "1200mAh" },
            ],
          },
          {
            id: "m5",
            name: "ZK26SF",
            title: "ZK26SF | 2.66 ″ Screen Retail Store Shelf Labels",
            desc: "Dot Matrix EPD Black/White",
            img: "/ESL/Shield/ZK26SF.gif",
            ind: {
              nfc: true,
              remove: true,
              led: true,
            },
            specs: [
              { k: "Size", v: "83*41*14.3mm" },
              { k: "Screen", v: "60.1*30.7mm" },
              { k: "Operate temperature", v: "-25~25℃" },
              { k: "Battery", v: "1000mAh" },
            ],
          },
          {
            id: "m6",
            name: "ZKC29S-E4",
            title: "ZKC29S-E4 | 2.9 ″ Screen Retail Store Shelf Labels",
            desc: "Dot Matrix EPD Black/White/Red (Yellow)",
            img: "/ESL/Shield/ZKC29S-E4.gif",
            ind: {
              nfc: true,
              remove: true,
              led: true,
            },
            specs: [
              { k: "Size", v: "90.41*41*14.3mm" },
              { k: "Screen", v: "66.9*29.1mm" },
              { k: "Operate temperature", v: "0~40℃" },
              { k: "Battery", v: "1200mAh" },
            ],
          },
          {
            id: "m7",
            name: "ZKC37S-E4",
            title: "ZKC37S-E4 | 3.7 ″ Screen Retail Store Shelf Labels",
            desc: "Dot Matrix EPD Black/White/Red (Yellow)",
            img: "/ESL/Shield/ZKC37S-E4.gif",
            ind: {
              nfc: true,
              remove: true,
              led: true,
            },
            specs: [
              { k: "Size", v: "104*56.4*11.2mm" },
              { k: "Screen", v: "81.54*47.04mm" },
              { k: "Operate temperature", v: "0~40℃" },
              { k: "Battery", v: "1200mAh" },
            ],
          },
        ],
      },
      {
        name: "Essential",
        models: [
          {
            id: "m1",
            name: "ZKC15V-E4",
            title: "ZKC15V-E4 | 1.54 ″Screen Lightweight Store Shelf Labels",
            desc: "Dot Matrix EPD Black/White/Red (Yellow)",
            img: "/ESL/Essential/ZKC15V-NE4.jpg",
            ind: {
              nfc: false,
              remove: false,
              led: false,
            },
            specs: [
              {
                k: "Size",
                v: "44.2*35.9*12.1mm",
              },
              {
                k: "Screen",
                v: "27*27mm",
              },
              {
                k: "Operate temperature",
                v: "0°~40℃",
              },
              {
                k: "Battery",
                v: "600mAh",
              },
            ],
          },
          {
            id: "m2",
            name: "ZKC18V-E4",
            title: "ZKC18V-E4 | 1.8 ″Screen Lightweight Store Shelf Labels",
            desc: "Dot Matrix EPD Black/White/Red (Yellow)",
            img: "/ESL/Essential/ZKC18V-NE4.jpg",
            ind: {
              nfc: false,
              remove: false,
              led: false,
            },
            specs: [
              {
                k: "Size",
                v: "52.5*35.9*12.1mm",
              },
              {
                k: "Screen",
                v: "36.06*27.05mm",
              },
              {
                k: "Operate temperature",
                v: "0°~40℃",
              },
              {
                k: "Battery",
                v: "600mAh",
              },
            ],
          },
          {
            id: "m3",
            name: "ZKC21V-E4",
            title: "ZKC21V-E4 | 2.13 ″Screen Lightweight Store Shelf Labels",
            desc: "Dot Matrix EPD Black/White/Red (Yellow)",
            img: "/ESL/Essential/ZKC21V-NE4.jpg",
            ind: {
              nfc: false,
              remove: false,
              led: false,
            },
            specs: [
              {
                k: "Size",
                v: "70*34.5*12.1mm",
              },
              {
                k: "Screen",
                v: "48.55*23.7mm",
              },
              {
                k: "Operate temperature",
                v: "0°~40℃",
              },
              {
                k: "Battery",
                v: "1200mAh",
              },
            ],
          },
          {
            id: "m4",
            name: "ZKC26V-E4",
            title: "ZKC26V-E4 | 2.66 ″Screen Lightweight Store Shelf Labels",
            desc: "Dot Matrix EPD Black/White/Red (Yellow)",
            img: "/ESL/Essential/ZKC26V-NE4.jpg",
            ind: {
              nfc: false,
              remove: false,
              led: false,
            },
            specs: [
              {
                k: "Size",
                v: "83*41*12.1mm",
              },
              {
                k: "Screen",
                v: "60.09*30.7mm",
              },
              {
                k: "Operate temperature",
                v: "0°~40℃",
              },
              {
                k: "Battery",
                v: "1200mAh",
              },
            ],
          },
          {
            id: "m5",
            name: "ZKC29V-E4",
            title: "ZKC29V-E4 | 2.9 ″Screen Lightweight Store Shelf Labels",
            desc: "Dot Matrix EPD Black/White/Red (Yellow)",
            img: "/ESL/Essential/ZKC29V-NE4.jpg",
            ind: {
              nfc: false,
              remove: false,
              led: false,
            },
            specs: [
              {
                k: "Size",
                v: "90*41*12.1mm",
              },
              {
                k: "Screen",
                v: "66.9*29.1mm",
              },
              {
                k: "Operate temperature",
                v: "0~40℃",
              },
              {
                k: "Battery",
                v: "1200mAh",
              },
            ],
          },
        ],
      },
      {
        name: "Perfomance",
        models: [
          {
            id: "m6",
            name: "ZKC37V-E4",
            title: "ZKC37V-E4 | 3.7 ″Screen Lightweight Store Shelf Labels",
            desc: "Dot Matrix EPD Black/White/Red (Yellow)",
            img: "/ESL/Perfomance/ZKC37V-NE4.png",
            ind: {
              nfc: false,
              remove: false,
              led: false,
            },
            specs: [
              {
                k: "Size",
                v: "103.6*57*11.2mm",
              },
              {
                k: "Screen",
                v: "81.54*47.04mm",
              },
              {
                k: "Operate temperature",
                v: "0°~40℃",
              },
              {
                k: "Battery",
                v: "1200mAh",
              },
            ],
          },
          {
            id: "m7",
            name: "ZKC42V-E4",
            title: "ZKC42V-E4 | 4.2 ″Screen Lightweight Store Shelf Labels",
            desc: "Dot Matrix EPD Black/White/Red (Yellow)",
            img: "/ESL/Perfomance/ZKC42V-NE4.jpg",
            ind: {
              nfc: false,
              remove: false,
              led: false,
            },
            specs: [
              {
                k: "Size",
                v: "104.8*87*12.8mm",
              },
              {
                k: "Screen",
                v: "84.8*63.6mm",
              },
              {
                k: "Operate temperature",
                v: "0~40℃",
              },
              {
                k: "Battery",
                v: "1200mAh",
              },
            ],
          },
          {
            id: "m8",
            name: "ZKC58V-E4",
            title: "ZKC58V-E4 | 5.8 ″Screen Lightweight Store Shelf Labels",
            desc: "Dot Matrix EPD Black/White/Red (Yellow)",
            img: "/ESL/Perfomance/ZKC58V-NE4.png",
            ind: {
              nfc: false,
              remove: false,
              led: false,
            },
            specs: [
              {
                k: "Size",
                v: "135.4*110*9mm",
              },
              {
                k: "Screen",
                v: "118.8*88.2mm",
              },
              {
                k: "Operate temperature",
                v: "0°~40℃",
              },
              {
                k: "Battery",
                v: "2400mAh",
              },
            ],
          },
          {
            id: "m9",
            name: "ZKC75V-E4",
            title: "ZKC75V-E4 | 7.5 ″Screen Lightweight Store Shelf Labels",
            desc: "Dot Matrix EPD Black/White/Red (Yellow)",
            img: "/ESL/Perfomance/ZKC75V-NE4.png",
            ind: {
              nfc: false,
              remove: false,
              led: false,
            },
            specs: [
              {
                k: "Size",
                v: "180.8*121.8*9mm",
              },
              {
                k: "Screen",
                v: "163.2*97.9mm",
              },
              {
                k: "Operate temperature",
                v: "0°~40℃",
              },
              {
                k: "Battery",
                v: "2400mAh",
              },
            ],
          },
        ],
      },
    ],
  },
  uz: {
    title: "Models of ZKONG Shield Digital Retail Price Tags",
    allModels: [
      {
        name: "Shield",
        models: [
          {
            id: "m1",
            name: "ZKC15S-E4",
            title: "ZKC15S-E4 | 1.54 ″ Screen Retail Store Shelf Labels",
            desc: "Dot Matrix EPD Black/White/Red (Yellow)",
            img: "/ESL/Shield/ZKC15S-E4.gif",
            ind: {
              nfc: true,
              remove: true,
              led: true,
            },
            specs: [
              { k: "Size", v: "44.5*35.9*13.7mm" },
              { k: "Screen", v: "27*27mm" },
              { k: "Operate temperature", v: "0~40℃" },
              { k: "Battery", v: "600mAh" },
            ],
          },
          {
            id: "m2",
            name: "ZKC21S-E4",
            title: "ZKC21S-E4 | 2.13 ″ Screen Retail Store Shelf Labels",
            desc: "Dot Matrix EPD Black/White/Red (Yellow)",
            img: "/ESL/Shield/ZKC21S-E4.gif",
            ind: {
              nfc: true,
              remove: true,
              led: true,
            },
            specs: [
              { k: "Size", v: "70*36*14.3mm" },
              { k: "Screen", v: "48.6*23.7mm" },
              { k: "Operate temperature", v: "0~40℃" },
              { k: "Battery", v: "1200mAh" },
            ],
          },
          {
            id: "m3",
            name: "ZK21SF",
            title: "ZK21SF | 2.13 ″ Screen Retail Store Shelf Labels",
            desc: "Dot Matrix EPD Black/White",
            img: "/ESL/Shield/ZK21SF.gif",
            ind: {
              nfc: true,
              remove: true,
              led: true,
            },
            specs: [
              { k: "Size", v: "70*36*14.3mm" },
              { k: "Screen", v: "48.6*23.7mm" },
              { k: "Operate temperature", v: "-25°~25℃" },
              { k: "Battery", v: "1000mAh" },
            ],
          },
          {
            id: "m4",
            name: "ZKC26S-E4",
            title: "ZKC26S-E4 | 2.66 ″ Screen Retail Store Shelf Labels",
            desc: "",
            img: "/ESL/Shield/ZKC26S-E4.gif",
            ind: {
              nfc: true,
              remove: true,
              led: true,
            },
            specs: [
              { k: "Size", v: "83*41*14.3mm" },
              { k: "Screen", v: "60.1*30.7mm" },
              { k: "Operate temperature", v: "0~40℃" },
              { k: "Battery", v: "1200mAh" },
            ],
          },
          {
            id: "m5",
            name: "ZK26SF",
            title: "ZK26SF | 2.66 ″ Screen Retail Store Shelf Labels",
            desc: "Dot Matrix EPD Black/White",
            img: "/ESL/Shield/ZK26SF.gif",
            ind: {
              nfc: true,
              remove: true,
              led: true,
            },
            specs: [
              { k: "Size", v: "83*41*14.3mm" },
              { k: "Screen", v: "60.1*30.7mm" },
              { k: "Operate temperature", v: "-25~25℃" },
              { k: "Battery", v: "1000mAh" },
            ],
          },
          {
            id: "m6",
            name: "ZKC29S-E4",
            title: "ZKC29S-E4 | 2.9 ″ Screen Retail Store Shelf Labels",
            desc: "Dot Matrix EPD Black/White/Red (Yellow)",
            img: "/ESL/Shield/ZKC29S-E4.gif",
            ind: {
              nfc: true,
              remove: true,
              led: true,
            },
            specs: [
              { k: "Size", v: "90.41*41*14.3mm" },
              { k: "Screen", v: "66.9*29.1mm" },
              { k: "Operate temperature", v: "0~40℃" },
              { k: "Battery", v: "1200mAh" },
            ],
          },
          {
            id: "m7",
            name: "ZKC37S-E4",
            title: "ZKC37S-E4 | 3.7 ″ Screen Retail Store Shelf Labels",
            desc: "Dot Matrix EPD Black/White/Red (Yellow)",
            img: "/ESL/Shield/ZKC37S-E4.gif",
            ind: {
              nfc: true,
              remove: true,
              led: true,
            },
            specs: [
              { k: "Size", v: "104*56.4*11.2mm" },
              { k: "Screen", v: "81.54*47.04mm" },
              { k: "Operate temperature", v: "0~40℃" },
              { k: "Battery", v: "1200mAh" },
            ],
          },
        ],
      },
      {
        name: "Essential",
        models: [
          {
            id: "m1",
            name: "ZKC15V-E4",
            title: "ZKC15V-E4 | 1.54 ″Screen Lightweight Store Shelf Labels",
            desc: "Dot Matrix EPD Black/White/Red (Yellow)",
            img: "/ESL/Essential/ZKC15V-NE4.jpg",
            ind: {
              nfc: false,
              remove: false,
              led: false,
            },
            specs: [
              {
                k: "Size",
                v: "44.2*35.9*12.1mm",
              },
              {
                k: "Screen",
                v: "27*27mm",
              },
              {
                k: "Operate temperature",
                v: "0°~40℃",
              },
              {
                k: "Battery",
                v: "600mAh",
              },
            ],
          },
          {
            id: "m2",
            name: "ZKC18V-E4",
            title: "ZKC18V-E4 | 1.8 ″Screen Lightweight Store Shelf Labels",
            desc: "Dot Matrix EPD Black/White/Red (Yellow)",
            img: "/ESL/Essential/ZKC18V-NE4.jpg",
            ind: {
              nfc: false,
              remove: false,
              led: false,
            },
            specs: [
              {
                k: "Size",
                v: "52.5*35.9*12.1mm",
              },
              {
                k: "Screen",
                v: "36.06*27.05mm",
              },
              {
                k: "Operate temperature",
                v: "0°~40℃",
              },
              {
                k: "Battery",
                v: "600mAh",
              },
            ],
          },
          {
            id: "m3",
            name: "ZKC21V-E4",
            title: "ZKC21V-E4 | 2.13 ″Screen Lightweight Store Shelf Labels",
            desc: "Dot Matrix EPD Black/White/Red (Yellow)",
            img: "/ESL/Essential/ZKC21V-NE4.jpg",
            ind: {
              nfc: false,
              remove: false,
              led: false,
            },
            specs: [
              {
                k: "Size",
                v: "70*34.5*12.1mm",
              },
              {
                k: "Screen",
                v: "48.55*23.7mm",
              },
              {
                k: "Operate temperature",
                v: "0°~40℃",
              },
              {
                k: "Battery",
                v: "1200mAh",
              },
            ],
          },
          {
            id: "m4",
            name: "ZKC26V-E4",
            title: "ZKC26V-E4 | 2.66 ″Screen Lightweight Store Shelf Labels",
            desc: "Dot Matrix EPD Black/White/Red (Yellow)",
            img: "/ESL/Essential/ZKC26V-NE4.jpg",
            ind: {
              nfc: false,
              remove: false,
              led: false,
            },
            specs: [
              {
                k: "Size",
                v: "83*41*12.1mm",
              },
              {
                k: "Screen",
                v: "60.09*30.7mm",
              },
              {
                k: "Operate temperature",
                v: "0°~40℃",
              },
              {
                k: "Battery",
                v: "1200mAh",
              },
            ],
          },
          {
            id: "m5",
            name: "ZKC29V-E4",
            title: "ZKC29V-E4 | 2.9 ″Screen Lightweight Store Shelf Labels",
            desc: "Dot Matrix EPD Black/White/Red (Yellow)",
            img: "/ESL/Essential/ZKC29V-NE4.jpg",
            ind: {
              nfc: false,
              remove: false,
              led: false,
            },
            specs: [
              {
                k: "Size",
                v: "90*41*12.1mm",
              },
              {
                k: "Screen",
                v: "66.9*29.1mm",
              },
              {
                k: "Operate temperature",
                v: "0~40℃",
              },
              {
                k: "Battery",
                v: "1200mAh",
              },
            ],
          },
        ],
      },
      {
        name: "Perfomance",
        models: [
          {
            id: "m6",
            name: "ZKC37V-E4",
            title: "ZKC37V-E4 | 3.7 ″Screen Lightweight Store Shelf Labels",
            desc: "Dot Matrix EPD Black/White/Red (Yellow)",
            img: "/ESL/Perfomance/ZKC37V-NE4.png",
            ind: {
              nfc: false,
              remove: false,
              led: false,
            },
            specs: [
              {
                k: "Size",
                v: "103.6*57*11.2mm",
              },
              {
                k: "Screen",
                v: "81.54*47.04mm",
              },
              {
                k: "Operate temperature",
                v: "0°~40℃",
              },
              {
                k: "Battery",
                v: "1200mAh",
              },
            ],
          },
          {
            id: "m7",
            name: "ZKC42V-E4",
            title: "ZKC42V-E4 | 4.2 ″Screen Lightweight Store Shelf Labels",
            desc: "Dot Matrix EPD Black/White/Red (Yellow)",
            img: "/ESL/Perfomance/ZKC42V-NE4.jpg",
            ind: {
              nfc: false,
              remove: false,
              led: false,
            },
            specs: [
              {
                k: "Size",
                v: "104.8*87*12.8mm",
              },
              {
                k: "Screen",
                v: "84.8*63.6mm",
              },
              {
                k: "Operate temperature",
                v: "0~40℃",
              },
              {
                k: "Battery",
                v: "1200mAh",
              },
            ],
          },
          {
            id: "m8",
            name: "ZKC58V-E4",
            title: "ZKC58V-E4 | 5.8 ″Screen Lightweight Store Shelf Labels",
            desc: "Dot Matrix EPD Black/White/Red (Yellow)",
            img: "/ESL/Perfomance/ZKC58V-NE4.png",
            ind: {
              nfc: false,
              remove: false,
              led: false,
            },
            specs: [
              {
                k: "Size",
                v: "135.4*110*9mm",
              },
              {
                k: "Screen",
                v: "118.8*88.2mm",
              },
              {
                k: "Operate temperature",
                v: "0°~40℃",
              },
              {
                k: "Battery",
                v: "2400mAh",
              },
            ],
          },
          {
            id: "m9",
            name: "ZKC75V-E4",
            title: "ZKC75V-E4 | 7.5 ″Screen Lightweight Store Shelf Labels",
            desc: "Dot Matrix EPD Black/White/Red (Yellow)",
            img: "/ESL/Perfomance/ZKC75V-NE4.png",
            ind: {
              nfc: false,
              remove: false,
              led: false,
            },
            specs: [
              {
                k: "Size",
                v: "180.8*121.8*9mm",
              },
              {
                k: "Screen",
                v: "163.2*97.9mm",
              },
              {
                k: "Operate temperature",
                v: "0°~40℃",
              },
              {
                k: "Battery",
                v: "2400mAh",
              },
            ],
          },
        ],
      },
    ],
  },
  ru: {
    title: "Models of ZKONG Shield Digital Retail Price Tags",
    allModels: [
      {
        name: "Shield",
        models: [
          {
            id: "m1",
            name: "ZKC15S-E4",
            title: "ZKC15S-E4 | 1.54 ″ Screen Retail Store Shelf Labels",
            desc: "Dot Matrix EPD Black/White/Red (Yellow)",
            img: "/ESL/Shield/ZKC15S-E4.gif",
            ind: {
              nfc: true,
              remove: true,
              led: true,
            },
            specs: [
              { k: "Size", v: "44.5*35.9*13.7mm" },
              { k: "Screen", v: "27*27mm" },
              { k: "Operate temperature", v: "0~40℃" },
              { k: "Battery", v: "600mAh" },
            ],
          },
          {
            id: "m2",
            name: "ZKC21S-E4",
            title: "ZKC21S-E4 | 2.13 ″ Screen Retail Store Shelf Labels",
            desc: "Dot Matrix EPD Black/White/Red (Yellow)",
            img: "/ESL/Shield/ZKC21S-E4.gif",
            ind: {
              nfc: true,
              remove: true,
              led: true,
            },
            specs: [
              { k: "Size", v: "70*36*14.3mm" },
              { k: "Screen", v: "48.6*23.7mm" },
              { k: "Operate temperature", v: "0~40℃" },
              { k: "Battery", v: "1200mAh" },
            ],
          },
          {
            id: "m3",
            name: "ZK21SF",
            title: "ZK21SF | 2.13 ″ Screen Retail Store Shelf Labels",
            desc: "Dot Matrix EPD Black/White",
            img: "/ESL/Shield/ZK21SF.gif",
            ind: {
              nfc: true,
              remove: true,
              led: true,
            },
            specs: [
              { k: "Size", v: "70*36*14.3mm" },
              { k: "Screen", v: "48.6*23.7mm" },
              { k: "Operate temperature", v: "-25°~25℃" },
              { k: "Battery", v: "1000mAh" },
            ],
          },
          {
            id: "m4",
            name: "ZKC26S-E4",
            title: "ZKC26S-E4 | 2.66 ″ Screen Retail Store Shelf Labels",
            desc: "",
            img: "/ESL/Shield/ZKC26S-E4.gif",
            ind: {
              nfc: true,
              remove: true,
              led: true,
            },
            specs: [
              { k: "Size", v: "83*41*14.3mm" },
              { k: "Screen", v: "60.1*30.7mm" },
              { k: "Operate temperature", v: "0~40℃" },
              { k: "Battery", v: "1200mAh" },
            ],
          },
          {
            id: "m5",
            name: "ZK26SF",
            title: "ZK26SF | 2.66 ″ Screen Retail Store Shelf Labels",
            desc: "Dot Matrix EPD Black/White",
            img: "/ESL/Shield/ZK26SF.gif",
            ind: {
              nfc: true,
              remove: true,
              led: true,
            },
            specs: [
              { k: "Size", v: "83*41*14.3mm" },
              { k: "Screen", v: "60.1*30.7mm" },
              { k: "Operate temperature", v: "-25~25℃" },
              { k: "Battery", v: "1000mAh" },
            ],
          },
          {
            id: "m6",
            name: "ZKC29S-E4",
            title: "ZKC29S-E4 | 2.9 ″ Screen Retail Store Shelf Labels",
            desc: "Dot Matrix EPD Black/White/Red (Yellow)",
            img: "/ESL/Shield/ZKC29S-E4.gif",
            ind: {
              nfc: true,
              remove: true,
              led: true,
            },
            specs: [
              { k: "Size", v: "90.41*41*14.3mm" },
              { k: "Screen", v: "66.9*29.1mm" },
              { k: "Operate temperature", v: "0~40℃" },
              { k: "Battery", v: "1200mAh" },
            ],
          },
          {
            id: "m7",
            name: "ZKC37S-E4",
            title: "ZKC37S-E4 | 3.7 ″ Screen Retail Store Shelf Labels",
            desc: "Dot Matrix EPD Black/White/Red (Yellow)",
            img: "/ESL/Shield/ZKC37S-E4.gif",
            ind: {
              nfc: true,
              remove: true,
              led: true,
            },
            specs: [
              { k: "Size", v: "104*56.4*11.2mm" },
              { k: "Screen", v: "81.54*47.04mm" },
              { k: "Operate temperature", v: "0~40℃" },
              { k: "Battery", v: "1200mAh" },
            ],
          },
        ],
      },
      {
        name: "Essential",
        models: [
          {
            id: "m1",
            name: "ZKC15V-E4",
            title: "ZKC15V-E4 | 1.54 ″Screen Lightweight Store Shelf Labels",
            desc: "Dot Matrix EPD Black/White/Red (Yellow)",
            img: "/ESL/Essential/ZKC15V-NE4.jpg",
            ind: {
              nfc: false,
              remove: false,
              led: false,
            },
            specs: [
              {
                k: "Size",
                v: "44.2*35.9*12.1mm",
              },
              {
                k: "Screen",
                v: "27*27mm",
              },
              {
                k: "Operate temperature",
                v: "0°~40℃",
              },
              {
                k: "Battery",
                v: "600mAh",
              },
            ],
          },
          {
            id: "m2",
            name: "ZKC18V-E4",
            title: "ZKC18V-E4 | 1.8 ″Screen Lightweight Store Shelf Labels",
            desc: "Dot Matrix EPD Black/White/Red (Yellow)",
            img: "/ESL/Essential/ZKC18V-NE4.jpg",
            ind: {
              nfc: false,
              remove: false,
              led: false,
            },
            specs: [
              {
                k: "Size",
                v: "52.5*35.9*12.1mm",
              },
              {
                k: "Screen",
                v: "36.06*27.05mm",
              },
              {
                k: "Operate temperature",
                v: "0°~40℃",
              },
              {
                k: "Battery",
                v: "600mAh",
              },
            ],
          },
          {
            id: "m3",
            name: "ZKC21V-E4",
            title: "ZKC21V-E4 | 2.13 ″Screen Lightweight Store Shelf Labels",
            desc: "Dot Matrix EPD Black/White/Red (Yellow)",
            img: "/ESL/Essential/ZKC21V-NE4.jpg",
            ind: {
              nfc: false,
              remove: false,
              led: false,
            },
            specs: [
              {
                k: "Size",
                v: "70*34.5*12.1mm",
              },
              {
                k: "Screen",
                v: "48.55*23.7mm",
              },
              {
                k: "Operate temperature",
                v: "0°~40℃",
              },
              {
                k: "Battery",
                v: "1200mAh",
              },
            ],
          },
          {
            id: "m4",
            name: "ZKC26V-E4",
            title: "ZKC26V-E4 | 2.66 ″Screen Lightweight Store Shelf Labels",
            desc: "Dot Matrix EPD Black/White/Red (Yellow)",
            img: "/ESL/Essential/ZKC26V-NE4.jpg",
            ind: {
              nfc: false,
              remove: false,
              led: false,
            },
            specs: [
              {
                k: "Size",
                v: "83*41*12.1mm",
              },
              {
                k: "Screen",
                v: "60.09*30.7mm",
              },
              {
                k: "Operate temperature",
                v: "0°~40℃",
              },
              {
                k: "Battery",
                v: "1200mAh",
              },
            ],
          },
          {
            id: "m5",
            name: "ZKC29V-E4",
            title: "ZKC29V-E4 | 2.9 ″Screen Lightweight Store Shelf Labels",
            desc: "Dot Matrix EPD Black/White/Red (Yellow)",
            img: "/ESL/Essential/ZKC29V-NE4.jpg",
            ind: {
              nfc: false,
              remove: false,
              led: false,
            },
            specs: [
              {
                k: "Size",
                v: "90*41*12.1mm",
              },
              {
                k: "Screen",
                v: "66.9*29.1mm",
              },
              {
                k: "Operate temperature",
                v: "0~40℃",
              },
              {
                k: "Battery",
                v: "1200mAh",
              },
            ],
          },
        ],
      },
      {
        name: "Perfomance",
        models: [
          {
            id: "m6",
            name: "ZKC37V-E4",
            title: "ZKC37V-E4 | 3.7 ″Screen Lightweight Store Shelf Labels",
            desc: "Dot Matrix EPD Black/White/Red (Yellow)",
            img: "/ESL/Perfomance/ZKC37V-NE4.png",
            ind: {
              nfc: false,
              remove: false,
              led: false,
            },
            specs: [
              {
                k: "Size",
                v: "103.6*57*11.2mm",
              },
              {
                k: "Screen",
                v: "81.54*47.04mm",
              },
              {
                k: "Operate temperature",
                v: "0°~40℃",
              },
              {
                k: "Battery",
                v: "1200mAh",
              },
            ],
          },
          {
            id: "m7",
            name: "ZKC42V-E4",
            title: "ZKC42V-E4 | 4.2 ″Screen Lightweight Store Shelf Labels",
            desc: "Dot Matrix EPD Black/White/Red (Yellow)",
            img: "/ESL/Perfomance/ZKC42V-NE4.jpg",
            ind: {
              nfc: false,
              remove: false,
              led: false,
            },
            specs: [
              {
                k: "Size",
                v: "104.8*87*12.8mm",
              },
              {
                k: "Screen",
                v: "84.8*63.6mm",
              },
              {
                k: "Operate temperature",
                v: "0~40℃",
              },
              {
                k: "Battery",
                v: "1200mAh",
              },
            ],
          },
          {
            id: "m8",
            name: "ZKC58V-E4",
            title: "ZKC58V-E4 | 5.8 ″Screen Lightweight Store Shelf Labels",
            desc: "Dot Matrix EPD Black/White/Red (Yellow)",
            img: "/ESL/Perfomance/ZKC58V-NE4.png",
            ind: {
              nfc: false,
              remove: false,
              led: false,
            },
            specs: [
              {
                k: "Size",
                v: "135.4*110*9mm",
              },
              {
                k: "Screen",
                v: "118.8*88.2mm",
              },
              {
                k: "Operate temperature",
                v: "0°~40℃",
              },
              {
                k: "Battery",
                v: "2400mAh",
              },
            ],
          },
          {
            id: "m9",
            name: "ZKC75V-E4",
            title: "ZKC75V-E4 | 7.5 ″Screen Lightweight Store Shelf Labels",
            desc: "Dot Matrix EPD Black/White/Red (Yellow)",
            img: "/ESL/Perfomance/ZKC75V-NE4.png",
            ind: {
              nfc: false,
              remove: false,
              led: false,
            },
            specs: [
              {
                k: "Size",
                v: "180.8*121.8*9mm",
              },
              {
                k: "Screen",
                v: "163.2*97.9mm",
              },
              {
                k: "Operate temperature",
                v: "0°~40℃",
              },
              {
                k: "Battery",
                v: "2400mAh",
              },
            ],
          },
        ],
      },
    ],
  },
};

const advantagesSection = {
  en: {
    cards: [
      {
        id: 1,
        title: "Integration of Multiple Systems",
        description: `ZKONG electronic pricing labels can simply connect retailer's ERP or POS system for smarter store management.`,
      },
      {
        id: 2,
        title: "Smart Pricing, One-Click Updates",
        description: `One-click price changes, ZKONG electronic shelf label update in seconds, supports bulk pricing changes, reducing human errors; Scheduled updates for promotional events.`,
      },
      {
        id: 3,
        title: "Superior Information Display Quality",
        description: `Multi-Color E-Ink Price Tags and Full-Color LCD price tags, a better way of store displays.`,
      },
      {
        id: 4,
        title: "Uniform Pricing for All Outlets",
        description: `Wth ZKONG electronic shelf price tags, the headquarters can centrally control pricing, assign permissions to different outlets, and manage product display and promotions in all outlets.`,
      },
      {
        id: 5,
        title: "Traffic Analytics for Collaborative Decision-Making",
        description: `Deploy millimeter-wave radars to precisely track the number of daily visitors. Produce regular reports to aid in formulating marketing strategies.`,
      },
    ],
  },
  uz: {
    cards: [
      {
        id: 1,
        title: "Integration of Multiple Systems",
        description: `ZKONG electronic pricing labels can simply connect retailer's ERP or POS system for smarter store management.`,
      },
      {
        id: 2,
        title: "Smart Pricing, One-Click Updates",
        description: `One-click price changes, ZKONG electronic shelf label update in seconds, supports bulk pricing changes, reducing human errors; Scheduled updates for promotional events.`,
      },
      {
        id: 3,
        title: "Superior Information Display Quality",
        description: `Multi-Color E-Ink Price Tags and Full-Color LCD price tags, a better way of store displays.`,
      },
      {
        id: 4,
        title: "Uniform Pricing for All Outlets",
        description: `Wth ZKONG electronic shelf price tags, the headquarters can centrally control pricing, assign permissions to different outlets, and manage product display and promotions in all outlets.`,
      },
      {
        id: 5,
        title: "Traffic Analytics for Collaborative Decision-Making",
        description: `Deploy millimeter-wave radars to precisely track the number of daily visitors. Produce regular reports to aid in formulating marketing strategies.`,
      },
    ],
  },
  ru: {
    cards: [
      {
        id: 1,
        title: "Integration of Multiple Systems",
        description: `ZKONG electronic pricing labels can simply connect retailer's ERP or POS system for smarter store management.`,
      },
      {
        id: 2,
        title: "Smart Pricing, One-Click Updates",
        description: `One-click price changes, ZKONG electronic shelf label update in seconds, supports bulk pricing changes, reducing human errors; Scheduled updates for promotional events.`,
      },
      {
        id: 3,
        title: "Superior Information Display Quality",
        description: `Multi-Color E-Ink Price Tags and Full-Color LCD price tags, a better way of store displays.`,
      },
      {
        id: 4,
        title: "Uniform Pricing for All Outlets",
        description: `Wth ZKONG electronic shelf price tags, the headquarters can centrally control pricing, assign permissions to different outlets, and manage product display and promotions in all outlets.`,
      },
      {
        id: 5,
        title: "Traffic Analytics for Collaborative Decision-Making",
        description: `Deploy millimeter-wave radars to precisely track the number of daily visitors. Produce regular reports to aid in formulating marketing strategies.`,
      },
    ],
  },
};

const whyChooseSection = {
  en: {
    heading: "Why Choose Electronic Price Labels From ZKONG?",
    subheading: "ZKONG Electronic Price Labels – Boost Efficiency & Accuracy",
    description:
      "Experience the future of retail with ZKONG’s electronic price labels. Real-time updates and easy integration.",
    cards: [
      {
        title: "Industry Leader",
        text: "ZKONG has 18 years of experience in the IoT wireless communication industry and specializes in ESL and LCD smart hardware for the retail sector. With over 220 domestic and international patents, ZKONG continuously expands its global business, establishing professional localized teams in North America, Hong Kong, Japan, and Europe to provide industry-leading electronic shelf label products to customers.",
        index: "01",
        icon: Wrench,
      },
      {
        title: "Product Advantages",
        text: "ZKONG offers over 50 models of electronic price labels, ensuring flexible use in multiple industries. Our products are renowned for their high-definition display, instant price updates, and long-lasting battery life. ZKONG electronic price labels feature e-ink screens, and the smart pricing feature enables updates of prices, QR codes even product images within 3 seconds. The 5-10 year long battery life ensures reliable long-term performance.",
        index: "02",
        icon: Users,
      },
      {
        title: "Advanced Manufacturing",
        text: "ZKONG possesses a self-owned manufacturing base of over 40,000㎡, with an annual production capacity exceeding 50 million units, effortlessly meeting global market demands for electronic price labels. Our in-house production lines allow ZKONG to offer any level of product customization, fulfilling flexible customer needs. The MES + ERP digital management system ensures the quality of every component leaving our facility.",
        index: "03",
        icon: Factory,
      },
      {
        title: "Custom Service",
        text: "ZKONG provides tailored software and hardware product solutions. The ZKONG cloud platform offers open interfaces, supporting various types of ERP, API, and customized development for specific requirements. The platform features a visual design, allowing for highly customizable screen templates. It also supports personalized customization of product shells, frames, colors, and corporate logos, creating exclusive electronic price labels tailored to your brand image and products.",
        index: "04",
        icon: Headphones,
      },
    ],
  },
  uz: {
    heading: "Why Choose Electronic Price Labels From ZKONG?",
    subheading: "ZKONG Electronic Price Labels – Boost Efficiency & Accuracy",
    description:
      "Experience the future of retail with ZKONG’s electronic price labels. Real-time updates and easy integration.",
    cards: [
      {
        title: "Industry Leader",
        text: "ZKONG has 18 years of experience in the IoT wireless communication industry and specializes in ESL and LCD smart hardware for the retail sector. With over 220 domestic and international patents, ZKONG continuously expands its global business, establishing professional localized teams in North America, Hong Kong, Japan, and Europe to provide industry-leading electronic shelf label products to customers.",
        index: "01",
        icon: Wrench,
      },
      {
        title: "Product Advantages",
        text: "ZKONG offers over 50 models of electronic price labels, ensuring flexible use in multiple industries. Our products are renowned for their high-definition display, instant price updates, and long-lasting battery life. ZKONG electronic price labels feature e-ink screens, and the smart pricing feature enables updates of prices, QR codes even product images within 3 seconds. The 5-10 year long battery life ensures reliable long-term performance.",
        index: "02",
        icon: Users,
      },
      {
        title: "Advanced Manufacturing",
        text: "ZKONG possesses a self-owned manufacturing base of over 40,000㎡, with an annual production capacity exceeding 50 million units, effortlessly meeting global market demands for electronic price labels. Our in-house production lines allow ZKONG to offer any level of product customization, fulfilling flexible customer needs. The MES + ERP digital management system ensures the quality of every component leaving our facility.",
        index: "03",
        icon: Factory,
      },
      {
        title: "Custom Service",
        text: "ZKONG provides tailored software and hardware product solutions. The ZKONG cloud platform offers open interfaces, supporting various types of ERP, API, and customized development for specific requirements. The platform features a visual design, allowing for highly customizable screen templates. It also supports personalized customization of product shells, frames, colors, and corporate logos, creating exclusive electronic price labels tailored to your brand image and products.",
        index: "04",
        icon: Headphones,
      },
    ],
  },
  ru: {
    heading: "Why Choose Electronic Price Labels From ZKONG?",
    subheading: "ZKONG Electronic Price Labels – Boost Efficiency & Accuracy",
    description:
      "Experience the future of retail with ZKONG’s electronic price labels. Real-time updates and easy integration.",
    cards: [
      {
        title: "Industry Leader",
        text: "ZKONG has 18 years of experience in the IoT wireless communication industry and specializes in ESL and LCD smart hardware for the retail sector. With over 220 domestic and international patents, ZKONG continuously expands its global business, establishing professional localized teams in North America, Hong Kong, Japan, and Europe to provide industry-leading electronic shelf label products to customers.",
        index: "01",
        icon: Wrench,
      },
      {
        title: "Product Advantages",
        text: "ZKONG offers over 50 models of electronic price labels, ensuring flexible use in multiple industries. Our products are renowned for their high-definition display, instant price updates, and long-lasting battery life. ZKONG electronic price labels feature e-ink screens, and the smart pricing feature enables updates of prices, QR codes even product images within 3 seconds. The 5-10 year long battery life ensures reliable long-term performance.",
        index: "02",
        icon: Users,
      },
      {
        title: "Advanced Manufacturing",
        text: "ZKONG possesses a self-owned manufacturing base of over 40,000㎡, with an annual production capacity exceeding 50 million units, effortlessly meeting global market demands for electronic price labels. Our in-house production lines allow ZKONG to offer any level of product customization, fulfilling flexible customer needs. The MES + ERP digital management system ensures the quality of every component leaving our facility.",
        index: "03",
        icon: Factory,
      },
      {
        title: "Custom Service",
        text: "ZKONG provides tailored software and hardware product solutions. The ZKONG cloud platform offers open interfaces, supporting various types of ERP, API, and customized development for specific requirements. The platform features a visual design, allowing for highly customizable screen templates. It also supports personalized customization of product shells, frames, colors, and corporate logos, creating exclusive electronic price labels tailored to your brand image and products.",
        index: "04",
        icon: Headphones,
      },
    ],
  },
};

const eslSystemSection = {
  en: {
    title: "Electronic Shelf Label System",
    description: `ZKONG Intelligent Retail Cloud Platform is an Internet of Things cloud platform based on safety monitoring and management of Bluetooth devices. The intelligent electronic shelf label system can access a variety of offline application scenarios, provide API interface to docking various application systems, and realize intelligent upgrading.`,
    cards: [
      {
        id: 1,
        heading: "Multi-device Support",
        data: ["PC", "Mobile"],
      },
      {
        id: 2,
        heading: "Customized Freedom",
        data: ["API interface", "SDK", "Firmware"],
      },
      {
        id: 3,
        heading: "Functional Integration",
        data: ["Traffic statistics", "Transducers", "Information Display"],
      },
    ],
  },
  uz: {
    title: "Electronic Shelf Label System",
    description: `ZKONG Intelligent Retail Cloud Platform is an Internet of Things cloud platform based on safety monitoring and management of Bluetooth devices. The intelligent electronic shelf label system can access a variety of offline application scenarios, provide API interface to docking various application systems, and realize intelligent upgrading.`,
    cards: [
      {
        id: 1,
        heading: "Multi-device Support",
        data: ["PC", "Mobile"],
      },
      {
        id: 2,
        heading: "Customized Freedom",
        data: ["API interface", "SDK", "Firmware"],
      },
      {
        id: 3,
        heading: "Functional Integration",
        data: ["Traffic statistics", "Transducers", "Information Display"],
      },
    ],
  },
  ru: {
    title: "Electronic Shelf Label System",
    description: `ZKONG Intelligent Retail Cloud Platform is an Internet of Things cloud platform based on safety monitoring and management of Bluetooth devices. The intelligent electronic shelf label system can access a variety of offline application scenarios, provide API interface to docking various application systems, and realize intelligent upgrading.`,
    cards: [
      {
        id: 1,
        heading: "Multi-device Support",
        data: ["PC", "Mobile"],
      },
      {
        id: 2,
        heading: "Customized Freedom",
        data: ["API interface", "SDK", "Firmware"],
      },
      {
        id: 3,
        heading: "Functional Integration",
        data: ["Traffic statistics", "Transducers", "Information Display"],
      },
    ],
  },
};

const carouselData = {
  en: {
    title: "Electronic Shelf Labels Application Scenarios",
    description1: `1. suitable for environment which requires perfect display of products' details`,
    description2: `2. large-size versions perfectly for poster display, promotion notification and other scenarios`,
    imageData: [
      {
        name: "Fresh Food",
        description: `Keep your fresh food section up-to-date with ZKONG electronic shelf tags. These digital shelf edge labels allow for quick price adjustments and real-time updates, ensuring compliance with market changes. The electronic price tag display helps maintain freshness and transparency, improving customer confidence in your products.`,
        src: "/ESL/carouselmages/fresh-food.webp",
      },
      {
        name: "Pharmacy",
        description: `Streamline your pharmacy operations with ZKONG electronic pricing labels. These digital shelf edge labels offer accurate and timely price updates, reducing manual errors. The LCD price tag ensures that customers receive the most current information on medications and health products, enhancing their shopping experience.`,
        src: "/ESL/carouselmages/pharmacy.webp",
      },
      {
        name: "Smart Office",
        description: `Transform your smart office with ZKONG Digital Name Plate. The E-ink Nameplate saves time, money and manual labor by replacing paper nameplates thanks to the E Ink technology for optimal legibility and minimal eye strain.`,
        src: "/ESL/carouselmages/smart-office.webp",
      },
      {
        name: "Supermarket",
        description: `Enhance your supermarket's efficiency with ZKONG electronic shelf labels. These digital shelf edge labels provide real-time pricing updates, ensuring accuracy and saving labor costs. With electronic price tag displays, you can easily manage promotions and stock levels, offering a seamless shopping experience for your customers.`,
        src: "/ESL/carouselmages/supermarket.webp",
      },
      {
        name: "Warehouse",
        description: `Improve your warehouse management with ZKONG electronic shelf labels and digital signage warehouse. These digital shelf edge labels offer real-time inventory tracking and dynamic pricing updates, streamlining operations and reducing errors. The digital shelf label ensures accurate stock information, enhancing efficiency and productivity in your warehouse environment.`,
        src: "/ESL/carouselmages/warehouse.webp",
      },
      {
        name: "Cosmetics",
        description: `Upgrade your cosmetics section with ZKONG electronic shelf edge labels. These digital price labels offer dynamic pricing and instant updates, perfect for fast-paced retail environments. The sleek electronic price tag display complements the aesthetic of your products, while ensuring accurate and up-to-date information for shoppers.`,
        src: "/ESL/carouselmages/cosmetics.webp",
      },
      {
        name: "Electronics",
        description: `Optimize your electronics store with ZKONG electronic shelf price tags. These digital shelf labelling solutions provide precise and real-time pricing, enhancing customer trust and satisfaction. The electronic price tag display is ideal for showcasing detailed product information, helping customers make informed purchasing decisions.`,
        src: "/ESL/carouselmages/electronics.webp",
      },
    ],
  },
  uz: {
    title: "Electronic Shelf Labels Application Scenarios",
    description1: `1. suitable for environment which requires perfect display of products' details`,
    description2: `2. large-size versions perfectly for poster display, promotion notification and other scenarios`,
    imageData: [
      {
        name: "Fresh Food",
        description: `Keep your fresh food section up-to-date with ZKONG electronic shelf tags. These digital shelf edge labels allow for quick price adjustments and real-time updates, ensuring compliance with market changes. The electronic price tag display helps maintain freshness and transparency, improving customer confidence in your products.`,
        src: "/ESL/carouselmages/fresh-food.webp",
      },
      {
        name: "Pharmacy",
        description: `Streamline your pharmacy operations with ZKONG electronic pricing labels. These digital shelf edge labels offer accurate and timely price updates, reducing manual errors. The LCD price tag ensures that customers receive the most current information on medications and health products, enhancing their shopping experience.`,
        src: "/ESL/carouselmages/pharmacy.webp",
      },
      {
        name: "Smart Office",
        description: `Transform your smart office with ZKONG Digital Name Plate. The E-ink Nameplate saves time, money and manual labor by replacing paper nameplates thanks to the E Ink technology for optimal legibility and minimal eye strain.`,
        src: "/ESL/carouselmages/smart-office.webp",
      },
      {
        name: "Supermarket",
        description: `Enhance your supermarket's efficiency with ZKONG electronic shelf labels. These digital shelf edge labels provide real-time pricing updates, ensuring accuracy and saving labor costs. With electronic price tag displays, you can easily manage promotions and stock levels, offering a seamless shopping experience for your customers.`,
        src: "/ESL/carouselmages/supermarket.webp",
      },
      {
        name: "Warehouse",
        description: `Improve your warehouse management with ZKONG electronic shelf labels and digital signage warehouse. These digital shelf edge labels offer real-time inventory tracking and dynamic pricing updates, streamlining operations and reducing errors. The digital shelf label ensures accurate stock information, enhancing efficiency and productivity in your warehouse environment.`,
        src: "/ESL/carouselmages/warehouse.webp",
      },
      {
        name: "Cosmetics",
        description: `Upgrade your cosmetics section with ZKONG electronic shelf edge labels. These digital price labels offer dynamic pricing and instant updates, perfect for fast-paced retail environments. The sleek electronic price tag display complements the aesthetic of your products, while ensuring accurate and up-to-date information for shoppers.`,
        src: "/ESL/carouselmages/cosmetics.webp",
      },
      {
        name: "Electronics",
        description: `Optimize your electronics store with ZKONG electronic shelf price tags. These digital shelf labelling solutions provide precise and real-time pricing, enhancing customer trust and satisfaction. The electronic price tag display is ideal for showcasing detailed product information, helping customers make informed purchasing decisions.`,
        src: "/ESL/carouselmages/electronics.webp",
      },
    ],
  },
  ru: {
    title: "Electronic Shelf Labels Application Scenarios",
    description1: `1. suitable for environment which requires perfect display of products' details`,
    description2: `2. large-size versions perfectly for poster display, promotion notification and other scenarios`,
    imageData: [
      {
        name: "Fresh Food",
        description: `Keep your fresh food section up-to-date with ZKONG electronic shelf tags. These digital shelf edge labels allow for quick price adjustments and real-time updates, ensuring compliance with market changes. The electronic price tag display helps maintain freshness and transparency, improving customer confidence in your products.`,
        src: "/ESL/carouselmages/fresh-food.webp",
      },
      {
        name: "Pharmacy",
        description: `Streamline your pharmacy operations with ZKONG electronic pricing labels. These digital shelf edge labels offer accurate and timely price updates, reducing manual errors. The LCD price tag ensures that customers receive the most current information on medications and health products, enhancing their shopping experience.`,
        src: "/ESL/carouselmages/pharmacy.webp",
      },
      {
        name: "Smart Office",
        description: `Transform your smart office with ZKONG Digital Name Plate. The E-ink Nameplate saves time, money and manual labor by replacing paper nameplates thanks to the E Ink technology for optimal legibility and minimal eye strain.`,
        src: "/ESL/carouselmages/smart-office.webp",
      },
      {
        name: "Supermarket",
        description: `Enhance your supermarket's efficiency with ZKONG electronic shelf labels. These digital shelf edge labels provide real-time pricing updates, ensuring accuracy and saving labor costs. With electronic price tag displays, you can easily manage promotions and stock levels, offering a seamless shopping experience for your customers.`,
        src: "/ESL/carouselmages/supermarket.webp",
      },
      {
        name: "Warehouse",
        description: `Improve your warehouse management with ZKONG electronic shelf labels and digital signage warehouse. These digital shelf edge labels offer real-time inventory tracking and dynamic pricing updates, streamlining operations and reducing errors. The digital shelf label ensures accurate stock information, enhancing efficiency and productivity in your warehouse environment.`,
        src: "/ESL/carouselmages/warehouse.webp",
      },
      {
        name: "Cosmetics",
        description: `Upgrade your cosmetics section with ZKONG electronic shelf edge labels. These digital price labels offer dynamic pricing and instant updates, perfect for fast-paced retail environments. The sleek electronic price tag display complements the aesthetic of your products, while ensuring accurate and up-to-date information for shoppers.`,
        src: "/ESL/carouselmages/cosmetics.webp",
      },
      {
        name: "Electronics",
        description: `Optimize your electronics store with ZKONG electronic shelf price tags. These digital shelf labelling solutions provide precise and real-time pricing, enhancing customer trust and satisfaction. The electronic price tag display is ideal for showcasing detailed product information, helping customers make informed purchasing decisions.`,
        src: "/ESL/carouselmages/electronics.webp",
      },
    ],
  },
};

const gallerysection = {
  en: {
    title: "Gallery of ZKONG Electronic Shelf Labels",
  },
  uz: {
    title: "Gallery of ZKONG Electronic Shelf Labels",
  },
  ru: {
    title: "Gallery of ZKONG Electronic Shelf Labels",
  },
};

const modalSection = {
  en: {
    title: "Models of ZKONG Shield Digital Retail Price Tags",
    models: [
      {
        id: "m1",
        name: "ZKC15S-E4",
        title: "ZKC15S-E4 | 1.54 ″ Screen Retail Store Shelf Labels",
        desc: "Dot Matrix EPD Black/White/Red (Yellow)",
        img: "/ESL/Shield/ZKC15S-E4.gif",
        ind: {
          nfc: true,
          remove: true,
          led: true,
        },
        specs: [
          { k: "Size", v: "44.5*35.9*13.7mm" },
          { k: "Screen", v: "27*27mm" },
          { k: "Operate temperature", v: "0~40℃" },
          { k: "Battery", v: "600mAh" },
        ],
      },
      {
        id: "m2",
        name: "ZKC21S-E4",
        title: "ZKC21S-E4 | 2.13 ″ Screen Retail Store Shelf Labels",
        desc: "Dot Matrix EPD Black/White/Red (Yellow)",
        img: "/ESL/Shield/ZKC21S-E4.gif",
        ind: {
          nfc: true,
          remove: true,
          led: true,
        },
        specs: [
          { k: "Size", v: "70*36*14.3mm" },
          { k: "Screen", v: "48.6*23.7mm" },
          { k: "Operate temperature", v: "0~40℃" },
          { k: "Battery", v: "1200mAh" },
        ],
      },
      {
        id: "m3",
        name: "ZK21SF",
        title: "ZK21SF | 2.13 ″ Screen Retail Store Shelf Labels",
        desc: "Dot Matrix EPD Black/White",
        img: "/ESL/Shield/ZK21SF.gif",
        ind: {
          nfc: true,
          remove: true,
          led: true,
        },
        specs: [
          { k: "Size", v: "70*36*14.3mm" },
          { k: "Screen", v: "48.6*23.7mm" },
          { k: "Operate temperature", v: "-25°~25℃" },
          { k: "Battery", v: "1000mAh" },
        ],
      },
      {
        id: "m4",
        name: "ZKC26S-E4",
        title: "ZKC26S-E4 | 2.66 ″ Screen Retail Store Shelf Labels",
        desc: "",
        img: "/ESL/Shield/ZKC26S-E4.gif",
        ind: {
          nfc: true,
          remove: true,
          led: true,
        },
        specs: [
          { k: "Size", v: "83*41*14.3mm" },
          { k: "Screen", v: "60.1*30.7mm" },
          { k: "Operate temperature", v: "0~40℃" },
          { k: "Battery", v: "1200mAh" },
        ],
      },
      {
        id: "m5",
        name: "ZK26SF",
        title: "ZK26SF | 2.66 ″ Screen Retail Store Shelf Labels",
        desc: "Dot Matrix EPD Black/White",
        img: "/ESL/Shield/ZK26SF.gif",
        ind: {
          nfc: true,
          remove: true,
          led: true,
        },
        specs: [
          { k: "Size", v: "83*41*14.3mm" },
          { k: "Screen", v: "60.1*30.7mm" },
          { k: "Operate temperature", v: "-25~25℃" },
          { k: "Battery", v: "1000mAh" },
        ],
      },
      {
        id: "m6",
        name: "ZKC29S-E4",
        title: "ZKC29S-E4 | 2.9 ″ Screen Retail Store Shelf Labels",
        desc: "Dot Matrix EPD Black/White/Red (Yellow)",
        img: "/ESL/Shield/ZKC29S-E4.gif",
        ind: {
          nfc: true,
          remove: true,
          led: true,
        },
        specs: [
          { k: "Size", v: "90.41*41*14.3mm" },
          { k: "Screen", v: "66.9*29.1mm" },
          { k: "Operate temperature", v: "0~40℃" },
          { k: "Battery", v: "1200mAh" },
        ],
      },
      {
        id: "m7",
        name: "ZKC37S-E4",
        title: "ZKC37S-E4 | 3.7 ″ Screen Retail Store Shelf Labels",
        desc: "Dot Matrix EPD Black/White/Red (Yellow)",
        img: "/ESL/Shield/ZKC37S-E4.gif",
        ind: {
          nfc: true,
          remove: true,
          led: true,
        },
        specs: [
          { k: "Size", v: "104*56.4*11.2mm" },
          { k: "Screen", v: "81.54*47.04mm" },
          { k: "Operate temperature", v: "0~40℃" },
          { k: "Battery", v: "1200mAh" },
        ],
      },
    ],
  },
  ru: {
    title: "Модели цифровых розничных ценников ZKONG Shield",
    models: [
      {
        id: "m1",
        name: "ZKC15S-E4",
        title: "ZKC15S-E4 | 1.54 ″ Электронные ценники для розничного магазина",
        desc: "Матричный EPD Черный/Белый/Красный (Желтый)",
        img: "/ESL/Shield/ZKC15S-E4.gif",
        ind: {
          nfc: true,
          remove: true,
          led: true,
        },
        specs: [
          { k: "Размер", v: "44.5*35.9*13.7mm" },
          { k: "Экран", v: "27*27mm" },
          { k: "Рабочая температура", v: "0~40℃" },
          { k: "Батарея", v: "600mAh" },
        ],
      },
      {
        id: "m2",
        name: "ZKC21S-E4",
        title: "ZKC21S-E4 | 2.13 ″ Электронные ценники для розничного магазина",
        desc: "Матричный EPD Черный/Белый/Красный (Желтый)",
        img: "/ESL/Shield/ZKC21S-E4.gif",
        ind: {
          nfc: true,
          remove: true,
          led: true,
        },
        specs: [
          { k: "Размер", v: "70*36*14.3mm" },
          { k: "Экран", v: "48.6*23.7mm" },
          { k: "Рабочая температура", v: "0~40℃" },
          { k: "Батарея", v: "1200mAh" },
        ],
      },
      {
        id: "m3",
        name: "ZK21SF",
        title: "ZK21SF | 2.13 ″ Электронные ценники для розничного магазина",
        desc: "Матричный EPD Черный/Белый",
        img: "/ESL/Shield/ZK21SF.gif",
        ind: {
          nfc: true,
          remove: true,
          led: true,
        },
        specs: [
          { k: "Размер", v: "70*36*14.3mm" },
          { k: "Экран", v: "48.6*23.7mm" },
          { k: "Рабочая температура", v: "-25°~25℃" },
          { k: "Батарея", v: "1000mAh" },
        ],
      },
      {
        id: "m4",
        name: "ZKC26S-E4",
        title: "ZKC26S-E4 | 2.66 ″ Электронные ценники для розничного магазина",
        desc: "Матричный EPD Черный/Белый/Красный (Желтый)",
        img: "/ESL/Shield/ZKC26S-E4.gif",
        ind: {
          nfc: true,
          remove: true,
          led: true,
        },
        specs: [
          { k: "Размер", v: "83*41*14.3mm" },
          { k: "Экран", v: "60.1*30.7mm" },
          { k: "Рабочая температура", v: "0~40℃" },
          { k: "Батарея", v: "1200mAh" },
        ],
      },
      {
        id: "m5",
        name: "ZK26SF",
        title: "ZK26SF | 2.66 ″ Электронные ценники для розничного магазина",
        desc: "Матричный EPD Черный/Белый",
        img: "/ESL/Shield/ZK26SF.gif",
        ind: {
          nfc: true,
          remove: true,
          led: true,
        },
        specs: [
          { k: "Размер", v: "83*41*14.3mm" },
          { k: "Экран", v: "60.1*30.7mm" },
          { k: "Рабочая температура", v: "-25~25℃" },
          { k: "Батарея", v: "1000mAh" },
        ],
      },
      {
        id: "m6",
        name: "ZKC29S-E4",
        title: "ZKC29S-E4 | 2.9 ″ Электронные ценники для розничного магазина",
        desc: "Матричный EPD Черный/Белый/Красный (Желтый)",
        img: "/ESL/Shield/ZKC29S-E4.gif",
        ind: {
          nfc: true,
          remove: true,
          led: true,
        },
        specs: [
          { k: "Размер", v: "90.41*41*14.3mm" },
          { k: "Экран", v: "66.9*29.1mm" },
          { k: "Рабочая температура", v: "0~40℃" },
          { k: "Батарея", v: "1200mAh" },
        ],
      },
      {
        id: "m7",
        name: "ZKC37S-E4",
        title: "ZKC37S-E4 | 3.7 ″ Электронные ценники для розничного магазина",
        desc: "Матричный EPD Черный/Белый/Красный (Желтый)",
        img: "/ESL/Shield/ZKC37S-E4.gif",
        ind: {
          nfc: true,
          remove: true,
          led: true,
        },
        specs: [
          { k: "Размер", v: "104*56.4*11.2mm" },
          { k: "Экран", v: "81.54*47.04mm" },
          { k: "Рабочая температура", v: "0~40℃" },
          { k: "Батарея", v: "1200mAh" },
        ],
      },
    ],
  },
  uz: {
    title: "ZKONG Shield Raqamli Chakana Narx Yorliqlarining Modellar",
    models: [
      {
        id: "m1",
        name: "ZKC15S-E4",
        title:
          "ZKC15S-E4 | 1.54 ″ Ekranli Chakana Savdo Do'koni Tokcha Yorliqlari",
        desc: "Nuqtali Matritsali EPD Qora/Oq/Qizil (Sariq)",
        img: "/ESL/Shield/ZKC15S-E4.gif",
        ind: {
          nfc: true,
          remove: true,
          led: true,
        },
        specs: [
          { k: "O'lchami", v: "44.5*35.9*13.7mm" },
          { k: "Ekran", v: "27*27mm" },
          { k: "Ishlash harorati", v: "0~40℃" },
          { k: "Batareya", v: "600mAh" },
        ],
      },
      {
        id: "m2",
        name: "ZKC21S-E4",
        title:
          "ZKC21S-E4 | 2.13 ″ Ekranli Chakana Savdo Do'koni Tokcha Yorliqlari",
        desc: "Nuqtali Matritsali EPD Qora/Oq/Qizil (Sariq)",
        img: "/ESL/Shield/ZKC21S-E4.gif",
        ind: {
          nfc: true,
          remove: true,
          led: true,
        },
        specs: [
          { k: "O'lchami", v: "70*36*14.3mm" },
          { k: "Ekran", v: "48.6*23.7mm" },
          { k: "Ishlash harorati", v: "0~40℃" },
          { k: "Batareya", v: "1200mAh" },
        ],
      },
      {
        id: "m3",
        name: "ZK21SF",
        title:
          "ZK21SF | 2.13 ″ Ekranli Chakana Savdo Do'koni Tokcha Yorliqlari",
        desc: "Nuqtali Matritsali EPD Qora/Oq",
        img: "/ESL/Shield/ZK21SF.gif",
        ind: {
          nfc: true,
          remove: true,
          led: true,
        },
        specs: [
          { k: "O'lchami", v: "70*36*14.3mm" },
          { k: "Ekran", v: "48.6*23.7mm" },
          { k: "Ishlash harorati", v: "-25°~25℃" },
          { k: "Batareya", v: "1000mAh" },
        ],
      },
      {
        id: "m4",
        name: "ZKC26S-E4",
        title:
          "ZKC26S-E4 | 2.66 ″ Ekranli Chakana Savdo Do'koni Tokcha Yorliqlari",
        desc: "Nuqtali Matritsali EPD Qora/Oq/Qizil (Sariq)",
        img: "/ESL/Shield/ZKC26S-E4.gif",
        ind: {
          nfc: true,
          remove: true,
          led: true,
        },
        specs: [
          { k: "O'lchami", v: "83*41*14.3mm" },
          { k: "Ekran", v: "60.1*30.7mm" },
          { k: "Ishlash harorati", v: "0~40℃" },
          { k: "Batareya", v: "1200mAh" },
        ],
      },
      {
        id: "m5",
        name: "ZK26SF",
        title:
          "ZK26SF | 2.66 ″ Ekranli Chakana Savdo Do'koni Tokcha Yorliqlari",
        desc: "Nuqtali Matritsali EPD Qora/Oq",
        img: "/ESL/Shield/ZK26SF.gif",
        ind: {
          nfc: true,
          remove: true,
          led: true,
        },
        specs: [
          { k: "O'lchami", v: "83*41*14.3mm" },
          { k: "Ekran", v: "60.1*30.7mm" },
          { k: "Ishlash harorati", v: "-25~25℃" },
          { k: "Batareya", v: "1000mAh" },
        ],
      },
      {
        id: "m6",
        name: "ZKC29S-E4",
        title:
          "ZKC29S-E4 | 2.9 ″ Ekranli Chakana Savdo Do'koni Tokcha Yorliqlari",
        desc: "Nuqtali Matritsali EPD Qora/Oq/Qizil (Sariq)",
        img: "/ESL/Shield/ZKC29S-E4.gif",
        ind: {
          nfc: true,
          remove: true,
          led: true,
        },
        specs: [
          { k: "O'lchami", v: "90.41*41*14.3mm" },
          { k: "Ekran", v: "66.9*29.1mm" },
          { k: "Ishlash harorati", v: "0~40℃" },
          { k: "Batareya", v: "1200mAh" },
        ],
      },
      {
        id: "m7",
        name: "ZKC37S-E4",
        title:
          "ZKC37S-E4 | 3.7 ″ Ekranli Chakana Savdo Do'koni Tokcha Yorliqlari",
        desc: "Nuqtali Matritsali EPD Qora/Oq/Qizil (Sariq)",
        img: "/ESL/Shield/ZKC37S-E4.gif",
        ind: {
          nfc: true,
          remove: true,
          led: true,
        },
        specs: [
          { k: "O'lchami", v: "104*56.4*11.2mm" },
          { k: "Ekran", v: "81.54*47.04mm" },
          { k: "Ishlash harorati", v: "0~40℃" },
          { k: "Batareya", v: "1200mAh" },
        ],
      },
    ],
  },
};

const models = {
  en: [
    {
      id: "m1",
      tab: '3.0"',
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
      tab: '4.2"',
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
      tab: '7.5"',
      title: 'ZKONG Shield 7.5"',
      desc: "Large display for promotions.",
      img: "/placeholders/label-3.png",
      specs: [
        { k: "Resolution", v: "640×384" },
        { k: "Battery", v: "Li-ion" },
      ],
    },
  ],
  ru: [
    // same structure with RU strings (dummy)
    {
      id: "m1",
      tab: '3.0"',
      title: 'ZKONG Shield 3.0"',
      desc: "Компактный ценник для розницы.",
      img: "/placeholders/label-1.png",
      specs: [
        { k: "Разрешение", v: "296×128" },
        { k: "Радио", v: "2.4GHz BLE" },
      ],
    },
    // ... other models
  ],
  uz: [
    // uz translations
    {
      id: "m1",
      tab: '3.0"',
      title: 'ZKONG Shield 3.0"',
      desc: "Umumiy chakana sotuv uchun ixcham yorliq.",
      img: "/placeholders/label-1.png",
      specs: [
        { k: "Oʻlchov", v: "296×128" },
        { k: "Radio", v: "2.4GHz BLE" },
      ],
    },
  ],
};

const features = {
  en: [
    {
      catId: "core",
      catTitle: "Core Features",
      subs: [
        {
          id: "core-1",
          title: "Robust Durability",
          body: "Industrial-grade materials for long lifecycle.",
          img: "/placeholders/feature-1.jpg",
        },
        {
          id: "core-2",
          title: "IP65 Option",
          body: "Rugged variant for harsh environments.",
          img: "/placeholders/feature-4.jpg",
        },
      ],
    },
    {
      catId: "connect",
      catTitle: "Connectivity",
      subs: [
        {
          id: "conn-1",
          title: "Cloud Management",
          body: "Centralized control and OTA updates.",
          img: "/placeholders/feature-2.jpg",
        },
        {
          id: "conn-2",
          title: "BLE + WiFi",
          body: "Stable wireless backbone for many devices.",
          img: "/placeholders/feature-2.jpg",
        },
      ],
    },
    {
      catId: "power",
      catTitle: "Power & Efficiency",
      subs: [
        {
          id: "p-1",
          title: "Long Battery Life",
          body: "Optimized refresh strategy to extend battery.",
          img: "/placeholders/feature-3.jpg",
        },
      ],
    },
  ],
  ru: [
    // RU mirror structure (dummy text)
  ],
  uz: [
    // UZ mirror structure (dummy text)
  ],
};

const featuresSection = {
  en: {
    features: [
      {
        id: "f1",
        title: "Robust Durability",
        body: "ZKONG Shield Retail Electronic Shelf Labels are designed with a focus on durability to withstand the demanding conditions of a retail environment. These electronic shelf labels are encased in a protective shield that guards against dust, moisture, and the wear and tear that comes from frequent handling by customers and staff. This robust construction ensures that the labels remain functional and legible for a longer period, reducing the need for frequent replacements and maintenance.",
        img: "/placeholders/feature-1.jpg",
      },
      {
        id: "f2",
        title: "Advanced Connectivity",
        body: "A standout feature of the ZKONG Shield Electronic Retail Price Tags is their advanced connectivity capabilities. Utilizing the latest in wireless communication technology, these e-ink retail shelf tags can quickly and reliably receive updates from the store’s central management system. This ensures that pricing and product information displayed is always current, enhancing the shopping experience for customers and streamlining operations for the retailer.",
        img: "/placeholders/feature-2.jpg",
      },
      {
        id: "f3",
        title: "Energy-Efficient Operation",
        body: "Energy efficiency is a key consideration in the design of the ZKONG Shield Electronic Retail Price Tags. By employing e-ink display technology, these retail shelf tags consume power only when updating information, significantly extending the battery life.",
        img: "/placeholders/feature-3.jpg",
      },
    ],
  },
  ru: {
    features: [
      {
        id: "f1",
        title: "Повышенная долговечность",
        body: "Электронные ценники ZKONG Shield разработаны с акцентом на долговечность, чтобы выдерживать сложные условия розничной среды. Эти электронные ценники заключены в защитный экран, который защищает от пыли, влаги и износа, возникающего при частом обращении со стороны покупателей и персонала. Эта прочная конструкция гарантирует, что ценники остаются функциональными и разборчивыми в течение более длительного периода, уменьшая потребность в частой замене и обслуживании.",
        img: "/placeholders/feature-1.jpg",
      },
      {
        id: "f2",
        title: "Расширенные возможности подключения",
        body: "Отличительной особенностью электронных розничных ценников ZKONG Shield являются их расширенные возможности подключения. Используя новейшие технологии беспроводной связи, эти розничные ценники на электронных чернилах могут быстро и надежно получать обновления из центральной системы управления магазина. Это гарантирует, что отображаемая информация о ценах и продуктах всегда актуальна, что улучшает качество покупок для клиентов и оптимизирует операции для розничного продавца.",
        img: "/placeholders/feature-2.jpg",
      },
      {
        id: "f3",
        title: "Энергоэффективная работа",
        body: "Энергоэффективность является ключевым фактором при разработке электронных розничных ценников ZKONG Shield. Благодаря использованию технологии e-ink дисплея, эти розничные ценники потребляют электроэнергию только при обновлении информации, что значительно продлевает срок службы батареи.",
        img: "/placeholders/feature-3.jpg",
      },
    ],
  },
  uz: {
    features: [
      {
        id: "f1",
        title: "Mustahkam Chidamlilik",
        body: "ZKONG Shield Chakana Savdo Elektron Tokcha Yorliqlari chakana savdo muhitining og'ir sharoitlariga bardosh berish uchun chidamlilikka e'tibor qaratilgan holda ishlab chiqilgan. Ushbu elektron tokcha yorliqlari chang, namlik va mijozlar hamda xodimlar tomonidan tez-tez ishlatilishidan kelib chiqadigan eskirishdan himoya qiluvchi himoya qalqoni bilan qoplangan. Bu mustahkam konstruktsiya yorliqlarning uzoqroq vaqt davomida funktsional va o'qilishi mumkinligini ta'minlaydi, bu esa tez-tez almashtirish va texnik xizmat ko'rsatish zaruratini kamaytiradi.",
        img: "/placeholders/feature-1.jpg",
      },
      {
        id: "f2",
        title: "Kengaytirilgan Ulanish",
        body: "ZKONG Shield Elektron Chakana Narx Yorliqlarining ajralib turadigan xususiyati ularning ilg'or ulanish imkoniyatlaridir. Simsiz aloqa texnologiyasidagi eng so'nggi yutuqlardan foydalangan holda, bu e-ink chakana tokcha yorliqlari do'konning markaziy boshqaruv tizimidan yangilanishlarni tez va ishonchli tarzda qabul qila oladi. Bu aks ettirilgan narxlar va mahsulot ma'lumotlari har doim dolzarb bo'lishini ta'minlaydi, mijozlar uchun xarid qilish tajribasini oshiradi va chakana sotuvchi uchun operatsiyalarni tartibga soladi.",
        img: "/placeholders/feature-2.jpg",
      },
      {
        id: "f3",
        title: "Energiya-Tejamkor Ishlash",
        body: "Energiya samaradorligi ZKONG Shield Elektron Chakana Narx Yorliqlari dizaynida asosiy e'tibor hisoblanadi. E-ink displey texnologiyasini qo'llash orqali bu chakana tokcha yorliqlari faqat ma'lumotlarni yangilashda quvvat sarflaydi, bu esa batareyaning ishlash muddatini sezilarli darajada uzaytiradi.",
        img: "/placeholders/feature-3.jpg",
      },
    ],
  },
};

const contentSection5 = {
  en: {
    title: "What Makes ZKONG Shield Different",
    paragraphs: [
      "ZKONG Shield combines durability, connectivity and battery efficiency to deliver accurate pricing and promotional content at scale.",
      "Built for heavy retail operations and seamless integration into enterprise systems.",
    ],
    image: "/placeholders/left-right.jpg",
  },
  ru: {
    title: "Что отличает ZKONG Shield",
    paragraphs: [
      "ZKONG Shield сочетает в себе прочность, подключение и энергоэффективность.",
      "Разработано для интенсивной розничной эксплуатации и интеграции в корпоративные системы.",
    ],
    image: "/placeholders/left-right.jpg",
  },
  uz: {
    title: "ZKONG Shield'ni ajratib turuvchi jihatlar",
    paragraphs: [
      "ZKONG Shield mustahkamlik, ulanish va batareya samaradorligini birlashtiradi.",
      "Katta chakana operatsiyalar uchun va korporativ tizimlarga uzluksiz integratsiya uchun yaratilgan.",
    ],
    image: "/placeholders/left-right.jpg",
  },
};

const scenarios = {
  en: [
    { id: "s1", title: "Electronics", img: "/placeholders/scenario-1.jpg" },
    { id: "s2", title: "Bakery", img: "/placeholders/scenario-2.jpg" },
    { id: "s3", title: "Fresh Produce", img: "/placeholders/scenario-3.jpg" },
  ],
  ru: [
    // RU duplicates
  ],
  uz: [
    // UZ duplicates
  ],
};

const marquee = {
  en: {
    items: [
      "Instant Price Updates",
      "5+ Years Battery Life",
      "Cloud-based Management",
      "IP65 Enclosure Option",
      "Open APIs for Integration",
    ],
  },
  ru: {
    items: [
      "Мгновенные обновления цен",
      "Батарея 5+ лет",
      "Облачное управление",
      "Корпус IP65",
      "Открытые API",
    ],
  },
  uz: {
    items: [
      "Lahzali narx yangilanishlari",
      "5+ yil batareya",
      "Bulutli boshqaruv",
      "IP65 korpus",
      "Ochiq API",
    ],
  },
};

const gallery = {
  en: [
    {
      id: "g1",
      img: "/placeholders/gallery-1.jpg",
      title: "Shield Series 1",
    },
    {
      id: "g2",
      img: "/placeholders/gallery-2.jpg",
      title: "Shield Series 2",
    },
    {
      id: "g3",
      img: "/placeholders/gallery-3.jpg",
      title: "Shield Series 3",
    },
    {
      id: "g4",
      img: "/placeholders/gallery-4.jpg",
      title: "Shield Series 4",
    },
    {
      id: "g5",
      img: "/placeholders/gallery-1.jpg",
      title: "Shield Series 5",
    },
    {
      id: "g6",
      img: "/placeholders/gallery-2.jpg",
      title: "Shield Series 6",
    },
  ],
  ru: [
    // RU
  ],
  uz: [
    // UZ
  ],
};

export default function ZkongShieldRebuilt() {
  const { language } = useLanguage(); // en, ru, uz

  const [activeTab, setActiveTab] = useState(
    modalsSection[language].allModels[0].name
  );

  const cards = [1, 2, 3, 4, 5];
  const [active, setActive] = useState(1); // default expanded
  const [hover, setHover] = useState<number | null>(null);

  const getWidth = (id: number) => {
    const current = hover ?? active;
    return id === current ? "flex-[2]" : "flex-[1]";
  };

  // Carousel ref
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const scrollCarousel = (dir: "left" | "right") => {
    if (!carouselRef.current) return;
    const width = carouselRef.current.clientWidth;
    carouselRef.current.scrollBy({
      left: dir === "left" ? -width : width,
      behavior: "smooth",
    });
  };

  /* ---------------- Render ---------------- */

  return (
    <div className="w-full text-gray-900 dark:text-white">
      {/* ---------- 1. Hero Banner ---------- */}
      <GradientBackground />
      <FloatingParticles />
      
      <EslBanner hero={hero[language]} />
      <EslVideoComponent videoData={videoData[language]} />

      <section className="secondary-background py-20">
        <div className="container mx-auto px-4 max-w-7xl relative">
          <SubHeading headingText={eslFunctionSection[language].title} lastIndex={3} customHeadingClass="text-center mb-12" />
          {/* <h2 className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold text-center mb-6">
            {eslFunctionSection[language].title}
          </h2> */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-4 mb-8">
            <EslVerticalTab featureData={eslFunctionSection[language].data1} />
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-4">
            <EslVerticalTab
              featureData={eslFunctionSection[language].data2}
              position="right"
            />
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-7xl relative">
          <SubHeading headingText={modalsSection[language].title} lastIndex={3} customHeadingClass="text-center mb-12 text-pretty" />
          {/* <h2 className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold text-center mb-6">
            {modalsSection[language].title}
          </h2> */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-4">
            <div className="flex border-b border-gray-200 mb-8">
              {modalsSection[language].allModels.map((tab) => (
                <button
                  key={tab.name}
                  onClick={() => setActiveTab(tab.name)}
                  className={`px-4 py-2 text-sm font-medium focus:outline-none cursor-pointer
              ${
                activeTab === tab.name
                  ? "border-b-2 border-blue-500 text-blue-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}
                >
                  {tab.name}
                </button>
              ))}
            </div>
            {modalsSection[language].allModels.map(
              (tab) =>
                activeTab === tab.name && <EslHorizontalTab sectionData={tab} />
            )}
          </div>
        </div>
      </section>

      <section className="secondary-background py-20">
        <div className="container mx-auto px-4 max-w-7xl relative w-full flex items-center justify-center bg-cover bg-center">
          <div className="relative flex w-full aspect-5/2 overflow-hidden rounded">
            <Image
              src={"/ESL/zkong-electronic-shelf-labels-advantage.webp"}
              alt="zkong-electronic-shelf-labels-advantage"
              fill
            />

            {advantagesSection[language].cards.map((item, index) => {
              const current = hover ?? active; // single source of truth for visuals
              const isCurrent = index === current;

              return (
                <div
                  key={index}
                  onMouseEnter={() => setHover(index)}
                  onMouseLeave={() => setHover(null)} // clear hover, DON'T set active here
                  onClick={() => setActive(index)} // set active only on click
                  className={`relative flex items-center justify-center
          transition-all duration-500 ease-[cubic-bezier(0.22,0.61,0.36,1)] cursor-pointer
          ${getWidth(index)} ${isCurrent ? "bg-white" : "bg-transparent"}`}
                >
                  <span
                    className={`size-6 bg-white rounded-full text-base font-bold transition-colors duration-300 text-black text-center
                    ${isCurrent ? "hidden" : "block"}`}
                  >
                    {index + 1}
                  </span>

                  {/* Extra text appears when current (hover or active) */}
                  <div
                    className={`absolute bottom-4 flex flex-col items-center justify-center w-full text-base 2lg:text-lg font-medium transition-opacity duration-300 p-4 text-center h-full overflow-hidden
                    ${isCurrent ? "opacity-100 text-gray-500" : "opacity-0"}`}
                  >
                    <h6 className="font-semibold">{item.title}</h6>
                    <p className="font-normal">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <SubHeading headingText={whyChooseSection[language].heading} lastIndex={2} />
          {/* <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            {whyChooseSection[language].heading}
          </h2> */}
          <p className="text-base 2lg:text-lg xxl:text-xl leading-relaxed text-slate-600 dark:text-blue-200 mb-2">
            {whyChooseSection[language].subheading}
          </p>
          <p className="text-base 2lg:text-lg xxl:text-xl leading-relaxed text-slate-600 dark:text-gray-300 mb-16 max-w-3xl mx-auto">
            {whyChooseSection[language].description}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 2lg:gap-6">
            {whyChooseSection[language].cards.map((card, i) => (
              <div
                key={i}
                className="relative bg-white dark:bg-white/5 backdrop-blur border border-slate-200 dark:border-white/10 rounded-xl px-4 2lg:px-6 py-6 text-left hover:bg-slate-50 dark:hover:bg-white/10 transition"
              >
                <card.icon className="w-8 h-8 mb-4 text-blue-600 dark:text-blue-400" />
                <h3 className="text-base 2lg:text-lg font-semibold mb-3">{card.title}</h3>
                <p className="text-sm text-slate-600 dark:text-gray-300 leading-relaxed">
                  {card.text}
                </p>
                <div className="absolute bottom-4 right-6 text-xl text-slate-400 dark:text-white/40">
                  {card.index}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="secondary-background relative w-full py-20">
        <div className="container mx-auto px-4 max-w-7xl relative w-full">
          <div className="text-center">
            <SubHeading headingText={eslSystemSection[language].title} lastIndex={3} />
            {/* <h2 className="text-3xl font-semibold text-slate-600 dark:text-blue-200 md:text-4xl">
              {eslSystemSection[language].title}
            </h2> */}
            <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-blue-200 md:text-base">
              {eslSystemSection[language].description}
            </p>
          </div>

          {/* Cards */}
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {eslSystemSection[language].cards.map((card) => (
              <div
                key={card.id}
                className="rounded-2xl bg-white p-8 shadow-lg dark:bg-white/5 dark:backdrop-blur"
              >
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                  {card.heading}
                </h3>
                <div className="mt-3 h-px w-full bg-slate-200 dark:bg-white/10" />
                <ul className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-300">
                  {card.data.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-blue-600 dark:bg-blue-400" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="container mx-auto px-4 max-w-7xl relative w-full mt-24">
          <div className="text-center">
            <h2 className="text-3xl 2lg:text-4xl font-semibold text-slate-600 dark:text-blue-200">
              {gallerysection[language].title}
            </h2>
          </div>

          <InfiniteMarquee />
        </div>
      </section>

      {/* <section className="secondary-background relative w-full py-24">
        <div className="container mx-auto px-4 max-w-7xl relative w-full">
          <div className="text-center">
            <h2 className="text-3xl font-semibold text-slate-600 dark:text-blue-200 md:text-4xl">
              {gallerysection[language].title}
            </h2>
          </div>

          <InfiniteMarquee />
        </div>
      </section> */}

      <section className="relative w-full py-24">
        <div className="container mx-auto px-4 max-w-7xl relative w-full">
          <div className="mb-6 text-center">
            <SubHeading headingText={carouselData[language].title} lastIndex={3} />
            {/* <h2 className="text-2xl font-semibold text-center mb-4">
              {carouselData[language].title}
            </h2> */}
            <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-blue-200 md:text-base">
              {carouselData[language].description1}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-blue-200 md:text-base">
              {carouselData[language].description2}
            </p>
          </div>
          <SliderCarousel
            data={carouselData[language].imageData}
            renderCard={(item, i) => (
              <div className="group relative h-[500px] rounded-lg flex flex-col items-center justify-center overflow-hidden shadow-lg">
                <Image
                  src={item.src}
                  alt={item.name}
                  fill
                  className="opacity-75"
                />
                <div className="z-1 flex flex-col justify-between h-full w-full">
                  <div className="bg-white dark:bg-slate-700 h-1/2 w-full p-2 opacity-0 group-hover:opacity-100">
                    <p className="text-slate-600 dark:text-slate-300 select-none">
                      {item.description}
                    </p>
                  </div>
                  <h3
                    className="font-bold p-4 text-right text-white
                  "
                  >
                    {item.name}
                  </h3>
                </div>
              </div>
            )}
            columns={3}
            infinite
          />
        </div>
      </section>
    </div>
  );
}




      {/* ---------- 3. Horizontal Tabs (Models) ---------- */}
      {/* <section className="max-w-7xl mx-auto px-6 py-12">
        <h3 className="text-center text-2xl font-semibold mb-6">
          {language === "ru"
            ? "Модели"
            : language === "uz"
            ? "Modellar"
            : "Models of ZKONG Shield Digital Retail Price Tags"}
        </h3>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-4">
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="lg:w-1/3">
              <div className="flex flex-wrap gap-2">
                {modelList.map((m: any, i: number) => (
                  <button
                    key={m.id}
                    onMouseEnter={() => setActiveModelIndex(i)}
                    onClick={() => setActiveModelIndex(i)}
                    className={`px-3 py-2 rounded-md text-sm transition ${
                      activeModelIndex === i
                        ? "bg-blue-600 text-white"
                        : "bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-200"
                    }`}
                    aria-pressed={activeModelIndex === i}
                  >
                    {m.tab}
                  </button>
                ))}
              </div>

              <div className="mt-4 text-sm text-gray-600 dark:text-gray-300">
                <div className="font-medium">
                  {modelList[activeModelIndex].title}
                </div>
                <div className="mt-1">{modelList[activeModelIndex].desc}</div>
              </div>

              <div className="mt-4 hidden lg:block">
                <ul className="space-y-2 text-sm">
                  {modelList[activeModelIndex].specs.map(
                    (s: any, idx: number) => (
                      <li
                        key={idx}
                        className="flex justify-between bg-gray-50 dark:bg-gray-700 p-2 rounded"
                      >
                        <span className="text-gray-600 dark:text-gray-300">
                          {s.k}
                        </span>
                        <strong>{s.v}</strong>
                      </li>
                    )
                  )}
                </ul>
              </div>
            </div>

            <div className="lg:w-2/3">
              <div className="rounded-xl bg-gray-50 dark:bg-gray-700 p-6 flex gap-6 flex-col md:flex-row items-center">
                <div className="w-full md:w-1/2 h-44 relative">
                  <Image
                    src={modelList[activeModelIndex].img}
                    alt={modelList[activeModelIndex].title}
                    fill
                    className="object-contain p-3"
                  />
                </div>

                <div className="w-full md:w-1/2">
                  <h4 className="text-xl font-semibold">
                    {modelList[activeModelIndex].title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 mt-2">
                    {modelList[activeModelIndex].desc}
                  </p>

                  <ul className="mt-4 space-y-2 text-sm">
                    {modelList[activeModelIndex].specs.map(
                      (s: any, idx: number) => (
                        <li key={idx} className="flex justify-between">
                          <span className="text-gray-500">{s.k}</span>
                          <span className="font-medium">{s.v}</span>
                        </li>
                      )
                    )}
                  </ul>

                  <div className="mt-4 flex gap-3">
                    <button className="px-4 py-2 bg-blue-600 text-white rounded">
                      Download Spec
                    </button>
                    <button className="px-4 py-2 border rounded bg-white dark:bg-gray-800">
                      Contact Sales
                    </button>
                  </div>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-4 gap-3">
                {modelList.map((m: any, idx: number) => (
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
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* ---------- 4. Vertical Two-layer Tabs (Categories & Sub-tabs) ---------- */}
      {/* <section className="max-w-7xl mx-auto px-6 py-12">
        <h3 className="text-center text-2xl font-semibold mb-6">
          {language === "ru"
            ? "Функции"
            : language === "uz"
            ? "Xususiyatlar"
            : "Features"}
        </h3>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-3">
              <div className="space-y-3">
                {featuresList.map((cat: any, catIdx: number) => (
                  <button
                    key={cat.catId}
                    onClick={() => {
                      setActiveFeatureCatIndex(catIdx);
                      setActiveFeatureSubIndex(0);
                    }}
                    onMouseEnter={() => {
                      setActiveFeatureCatIndex(catIdx);
                      setActiveFeatureSubIndex(0);
                    }}
                    className={`w-full text-left p-3 rounded-md transition ${
                      activeFeatureCatIndex === catIdx
                        ? "bg-blue-600 text-white"
                        : "bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-200"
                    }`}
                  >
                    <div className="font-medium">{cat.catTitle}</div>
                    <div className="text-xs text-gray-500 dark:text-gray-300 mt-1">
                      {cat.subs.length} items
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div className="lg:col-span-3">
              <div className="space-y-3">
                {(featuresList[activeFeatureCatIndex]?.subs || []).map(
                  (sub: any, subIdx: number) => (
                    <button
                      key={sub.id}
                      onClick={() => setActiveFeatureSubIndex(subIdx)}
                      onMouseEnter={() => setActiveFeatureSubIndex(subIdx)}
                      className={`w-full text-left p-3 rounded-md transition ${
                        activeFeatureSubIndex === subIdx
                          ? "bg-blue-500 text-white"
                          : "bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-200"
                      }`}
                    >
                      <div className="font-medium">{sub.title}</div>
                      <div className="text-xs text-gray-500 dark:text-gray-300 mt-1 line-clamp-2">
                        {sub.body}
                      </div>
                    </button>
                  )
                )}
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-xl bg-gray-50 dark:bg-gray-700 p-6">
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div>
                    <h4 className="text-xl font-semibold">
                      {
                        (featuresList[activeFeatureCatIndex]?.subs || [])[
                          activeFeatureSubIndex
                        ]?.title
                      }
                    </h4>
                    <p className="mt-3 text-gray-600 dark:text-gray-300">
                      {
                        (featuresList[activeFeatureCatIndex]?.subs || [])[
                          activeFeatureSubIndex
                        ]?.body
                      }
                    </p>

                    <ul className="mt-4 list-disc list-inside text-sm text-gray-600 dark:text-gray-300">
                      <li>Example detail for the selected feature</li>
                      <li>Benefit description based on the feature</li>
                      <li>Integration example or usage note</li>
                    </ul>
                  </div>

                  <div className="w-full h-48 relative rounded overflow-hidden bg-gray-100 dark:bg-gray-600">
                    <Image
                      src={
                        (featuresList[activeFeatureCatIndex]?.subs || [])[
                          activeFeatureSubIndex
                        ]?.img || "/placeholders/feature-1.jpg"
                      }
                      alt="feature preview"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}


            {/* ---------- 5. Text Left / Image Right ---------- */}
      {/* <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-semibold">
              {contentSection5[language].title}
            </h3>
            {contentSection5[language].paragraphs.map((p, idx) => (
              <p key={idx} className="mt-4 text-gray-600 dark:text-gray-300">
                {p}
              </p>
            ))}

            <ul className="mt-4 space-y-2 text-sm text-gray-700 dark:text-gray-300">
              <li>• Industrial-grade hardware</li>
              <li>• Cloud management and real-time updates</li>
              <li>• Open APIs for integration</li>
            </ul>
          </div>

          <div className="w-full h-64 relative rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-700">
            <Image
              src={contentSection5[language].image}
              alt="what makes different"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section> */}

      {/* ---------- 6. Carousel (Usage Scenario) ---------- */}
      {/* <section className="max-w-7xl mx-auto px-6 py-12">
        <h3 className="text-2xl font-semibold text-center mb-6">
          {language === "ru"
            ? "Сценарии использования"
            : language === "uz"
            ? "Foydalanish ssenariylari"
            : "Usage Scenarios"}
        </h3>

        <div className="relative">
          <button
            onClick={() => scrollCarousel("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white dark:bg-gray-700 shadow"
            aria-label="prev"
          >
            ◀
          </button>

          <div
            ref={carouselRef}
            className="overflow-x-auto scroll-smooth no-scrollbar pb-4"
            style={{ scrollSnapType: "x mandatory" } as React.CSSProperties}
          >
            <div className="inline-flex gap-4">
              {((scenarios as any)[language] || (scenarios as any).en).map(
                (s: any) => (
                  <div
                    key={s.id}
                    className="min-w-[280px] md:min-w-[320px] bg-white dark:bg-gray-800 rounded-xl p-3 shadow shrink-0"
                    style={{ scrollSnapAlign: "center" } as React.CSSProperties}
                  >
                    <div className="relative w-full h-44 rounded overflow-hidden">
                      <Image
                        src={s.img}
                        alt={s.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="mt-3 text-center font-medium">
                      {s.title}
                    </div>
                  </div>
                )
              )}
            </div>
          </div>

          <button
            onClick={() => scrollCarousel("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white dark:bg-gray-700 shadow"
            aria-label="next"
          >
            ▶
          </button>
        </div>
      </section> */}

      {/* ---------- 7. Infinite Marquee ---------- */}
      {/* <section className="max-w-7xl mx-auto px-6 py-12">
        <h3 className="text-2xl font-semibold text-center mb-6">
          {language === "ru"
            ? "Преимущества"
            : language === "uz"
            ? "Afzalliklar"
            : "Key Advantages"}
        </h3>

        <div className="overflow-hidden border rounded-lg bg-gray-50 dark:bg-gray-800">
          <div className="marquee whitespace-nowrap flex items-center">
            {Array(2)
              .fill(0)
              .map((_, cycle) => (
                <div key={cycle} className="flex gap-8 px-6 py-4">
                  {marquee[language].items.map((it: string, idx: number) => (
                    <div
                      key={idx}
                      className="inline-flex items-center gap-3 bg-white dark:bg-gray-700 px-4 py-2 rounded shadow text-sm"
                    >
                      <span className="font-medium">{it}</span>
                    </div>
                  ))}
                </div>
              ))}
          </div>
        </div>

        <style jsx>{`
          .marquee {
            animation: marqueeAnim 18s linear infinite;
          }
          .marquee:hover {
            animation-play-state: paused;
          }
          @keyframes marqueeAnim {
            0% {
              transform: translateX(0%);
            }
            100% {
              transform: translateX(-50%);
            }
          }
        `}</style>
      </section> */}

      {/* <section className="max-w-7xl mx-auto px-6 py-12">
        <h3 className="text-2xl font-semibold text-center mb-6">
          {language === "ru"
            ? "Галерея"
            : language === "uz"
            ? "Galereya"
            : "Product Gallery"}
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {((gallery as any)[language] || (gallery as any).en).map((g: any) => (
            <div
              key={g.id}
              className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow"
            >
              <div className="relative w-full h-44 rounded overflow-hidden">
                <Image
                  src={g.img}
                  alt={g.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="mt-3 font-medium">{g.title}</div>
              <div className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                Short product phrase
              </div>
            </div>
          ))}
        </div>
      </section> */}