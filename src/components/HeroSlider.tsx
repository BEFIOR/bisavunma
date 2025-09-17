"use client";

import Image from "next/image";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type ImageItem = { src: string; alt?: string } | string;

type Props = {
  images: ImageItem[];
  className?: string;
  autoplay?: boolean;
  interval?: number; // ms
  loop?: boolean;
  priorityFirst?: boolean;
};

export default function HeroSlider({
  images,
  className,
  autoplay = false,
  interval = 5000,
  loop = true,
  priorityFirst = true,
}: Props) {
  const slides = useMemo(
    () =>
      images.map((item) =>
        typeof item === "string" ? { src: item, alt: "" } : item
      ),
    [images]
  );

  const [index, setIndex] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const totalSlides = slides.length;

  const next = useCallback(() => {
    setIndex((i) => {
      const last = totalSlides - 1;
      if (i === last) return loop ? 0 : last;
      return i + 1;
    });
  }, [loop, totalSlides]);

  const prev = useCallback(() => {
    setIndex((i) => {
      const last = totalSlides - 1;
      if (i === 0) return loop ? last : 0;
      return i - 1;
    });
  }, [loop, totalSlides]);

  useEffect(() => {
    if (!autoplay || totalSlides <= 1) return;
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      next();
    }, Math.max(2000, interval));
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [autoplay, interval, next, totalSlides]);

  const showControls = totalSlides > 1;

  return (
    <div className={"relative w-full h-full " + (className ?? "")}
      aria-roledescription="carousel"
      aria-label="Ürün görsel galerisi"
    >
      {/* Slides */}
      <div
        className="relative w-full h-full overflow-hidden rounded-2xl"
      >
        <div
          className="flex w-full h-full transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {slides.map((img, i) => (
            <div key={img.src + i} className="w-full h-full flex-shrink-0">
              <div className="relative w-full h-full flex items-center justify-center bg-neutral-800">
                <Image
                  src={img.src}
                  alt={img.alt || `Görsel ${i + 1}`}
                  fill
                  sizes="(min-width: 1024px) 600px, 100vw"
                  className="object-contain"
                  priority={priorityFirst && i === 0}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Controls */}
        {showControls && (
          <>
            <button
              type="button"
              aria-label="Önceki görsel"
              onClick={prev}
              className="absolute left-3 top-1/2 -translate-y-1/2 z-20 inline-flex items-center justify-center w-10 h-10 rounded-full bg-black/50 hover:bg-black/70 text-white border border-white/10"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              aria-label="Sonraki görsel"
              onClick={next}
              className="absolute right-3 top-1/2 -translate-y-1/2 z-20 inline-flex items-center justify-center w-10 h-10 rounded-full bg-black/50 hover:bg-black/70 text-white border border-white/10"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </>
        )}
      </div>

      {/* Dots */}
      {showControls && (
        <div className="absolute bottom-3 left-0 right-0 z-20 flex items-center justify-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              aria-label={`Görsel ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-2 rounded-full transition-all ${
                i === index ? "bg-white w-6" : "bg-white/50 w-2 hover:bg-white/80"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
