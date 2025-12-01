import React, { useRef, useState, useEffect } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";

interface SliderCarouselProps<T> {
  data: T[];
  renderCard: (item: T, index: number) => React.ReactNode;
  containerClass ?: string;
}

function SliderCarousel<T>({ data, renderCard,containerClass="" }: SliderCarouselProps<T>) {
  const holderRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const updateScrollButtons = () => {
    if (holderRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = holderRef.current;

      // max scroll position
      const maxScrollLeft = scrollWidth - clientWidth;

      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < maxScrollLeft);
    }
  };

  useEffect(() => {
    const el = holderRef.current;
    if (!el) return;

    updateScrollButtons(); // run once on mount

    el.addEventListener("scroll", updateScrollButtons);
    window.addEventListener("resize", updateScrollButtons);

    return () => {
      el.removeEventListener("scroll", updateScrollButtons);
      window.removeEventListener("resize", updateScrollButtons);
    };
  }, [data]);

  const scrollByCard = (direction: "left" | "right") => {
    if (holderRef.current) {
      const cardWidth = holderRef.current.offsetWidth / 4; // 1/4 of container
      holderRef.current.scrollBy({
        left: direction === "left" ? -cardWidth : cardWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className={`relative flex items-center w-full p-4 ${containerClass}`}>
      {/* LEFT ARROW */}
      {canScrollLeft && (
        <button
          onClick={() => scrollByCard("left")}
          className="absolute left-0 z-10 bg-gray-800/60 hover:bg-gray-900 cursor-pointer text-white p-2 rounded-full"
        >
          <ChevronLeft />
        </button>
      )}

      {/* SLIDER */}
      <div
        ref={holderRef}
        className="flex overflow-x-auto scroll-smooth no-scrollbar w-full"
      >
        {data.map((item, i) => (
          <div key={i} className="w-1/4 shrink-0 px-2">
            {renderCard(item, i)}
          </div>
        ))}
      </div>

      {/* RIGHT ARROW */}
      {canScrollRight && (
        <button
          onClick={() => scrollByCard("right")}
          className="absolute right-0 z-10 bg-gray-800/60 hover:bg-gray-900 cursor-pointer text-white p-2 rounded-full"
        >
          <ChevronRight />
        </button>
      )}
    </div>
  );
}

export default SliderCarousel;
