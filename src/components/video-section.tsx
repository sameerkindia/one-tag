import Image from "next/image";
import React from "react";
import { FadeAnimation } from "../motion-animations/FadeAnimation";

function VideoSection() {
  return (
    <section className="py-3 sm:py-10 lg:py-20">
      <FadeAnimation className="mx-auto px-4 max-w-7xl relative aspect-1248/702">
        <figure className="absolute h-full w-full top-0 left-0">
          <video autoPlay muted loop>
            <source src="/hero-video.mp4" type="video/mp4"></source>
          </video>
        </figure>
        <div className="aspect-1248/702 flex items-start bg-black/30">
          <div className="max-w-[450px] lg:max-w-[600px] xl:max-w-[700px] m-3.5 min-[380px]:m-5 sm:m-10">
            <h3 className="text-2xl sm:!text-3xl md:!text-4xl lg:!text-5xl xl:!text-6xl font-bold text-white leading-snug text-pretty">Cutting-edge technlogy for retail</h3>
            <hr className="border-t-[3] lg:border-t-4 w-2/4 sm:w-3/4" />
            <p className="!text-xl sm:!text-2xl md:!text-3xl lg:!text-4xl xl:!text-5xl font-semibold text-white">Powered by Cloud & IoT</p>
            <p className="text-xs min-[375px]:!text-base sm:!text-[18px] md:!text-[20px] lg:!text-[24px] xl:!text-[29px] font-semibold text-white">
              ESL | ERP | POS | AP | Saas | CMS | ROI
            </p>
          </div>
        </div>
      </FadeAnimation>
    </section>
  );
}

export default VideoSection;
