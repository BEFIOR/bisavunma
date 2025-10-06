"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "@/lib/icons";

// Note: Swiper components are not used in this simplified implementation

interface GallerySliderProps {
  images: string[];
}

export default function GallerySlider({ images }: GallerySliderProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  if (!isLoaded) {
    // Fallback for SSR
    return (
      <div className="relative bg-gradient-to-br from-gray-900/50 to-black/80 backdrop-blur-sm rounded-3xl border border-gray-700/50 shadow-2xl overflow-hidden">
        <div className="aspect-[4/3] flex items-center justify-center">
          <div className="text-white">Loading gallery...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative group">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-transparent rounded-3xl pointer-events-none z-10"></div>

      {/* Main Gallery */}
      <div className="relative bg-gradient-to-br from-gray-900/50 to-black/80 backdrop-blur-sm rounded-3xl border border-gray-700/50 shadow-2xl overflow-hidden">
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={images[currentIndex]}
            alt={`Galeri Görseli ${currentIndex + 1}`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
            className="object-cover transition-transform duration-700 hover:scale-110"
            priority={currentIndex < 4}
            loading={currentIndex < 4 ? "eager" : "lazy"}
          />

          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-black/50 backdrop-blur-sm text-white rounded-full border border-white/20 flex items-center justify-center transition-all duration-300 hover:bg-black/70 hover:scale-110 hover:border-blue-500/50 group"
        >
          <ChevronLeft className="w-6 h-6 transition-transform group-hover:-translate-x-0.5" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-black/50 backdrop-blur-sm text-white rounded-full border border-white/20 flex items-center justify-center transition-all duration-300 hover:bg-black/70 hover:scale-110 hover:border-blue-500/50 group"
        >
          <ChevronRight className="w-6 h-6 transition-transform group-hover:translate-x-0.5" />
        </button>
      </div>

      {/* Pagination Dots */}
      <div className="mt-6 flex justify-center items-center space-x-3">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "bg-gradient-to-r from-blue-500 to-purple-500 scale-125 shadow-lg shadow-blue-500/50"
                : "bg-white/40 hover:bg-white/80 hover:scale-110"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
