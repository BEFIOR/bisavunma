"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface LazyVideoProps {
  src: string;
  className?: string;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  controls?: boolean;
  poster?: string;
}

export function LazyVideo({
  src,
  className = "",
  autoPlay = true,
  loop = true,
  muted = true,
  controls = false,
  poster,
}: LazyVideoProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [shouldPlay, setShouldPlay] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Intersection Observer ile video görünürlüğünü takip et
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            if (!isLoaded) {
              // Video henüz yüklenmemişse yükle
              video.src = src;
              video.load();
            }
          } else {
            setIsInView(false);
            if (autoPlay && video) {
              video.pause();
              setShouldPlay(false);
            }
          }
        });
      },
      {
        threshold: 0.5, // Video %50 görünür olduğunda tetikle
        rootMargin: "100px", // 100px öncesinden hazırla
      }
    );

    observerRef.current.observe(video);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [src, isLoaded, autoPlay]);

  // Video yüklendiğinde
  const handleLoadedData = () => {
    setIsLoaded(true);
    if (autoPlay && isInView) {
      setShouldPlay(true);
    }
  };

  // Video oynatma kontrolü
  useEffect(() => {
    const video = videoRef.current;
    if (!video || !isLoaded) return;

    if (shouldPlay && isInView && autoPlay) {
      video.play().catch(() => {
        // Autoplay engellenmişse sessizce devam et
      });
    } else {
      video.pause();
    }
  }, [shouldPlay, isInView, autoPlay, isLoaded]);

  // Video görünür olduğunda oynatmaya başla
  useEffect(() => {
    if (isInView && isLoaded && autoPlay) {
      setShouldPlay(true);
    }
  }, [isInView, isLoaded, autoPlay]);

  return (
    <motion.div
      className={`relative overflow-hidden ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: isLoaded ? 1 : 0 }}
      transition={{ duration: 0.3 }}
      style={{
        minHeight: "inherit",
        width: "100%",
        height: "100%",
      }}
    >
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        autoPlay={false} // Kontrollü oynatma için false
        loop={loop}
        muted={muted}
        controls={controls}
        playsInline
        poster={poster}
        onLoadedData={handleLoadedData}
        onError={() => {
          console.warn(`Video yüklenemedi: ${src}`);
        }}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />

      {/* Loading indicator */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-neutral-800 flex items-center justify-center">
          <motion.div
            className="w-8 h-8 border-2 border-cyan-400 border-t-transparent rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
        </div>
      )}
    </motion.div>
  );
}

// Video container component with fade-in animation
interface VideoContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function VideoContainer({
  children,
  className = "",
}: VideoContainerProps) {
  return (
    <motion.div
      className={`bg-neutral-900/50 backdrop-blur border border-neutral-800 rounded-2xl p-8 ${className}`}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
    >
      <div className="aspect-video bg-neutral-800 rounded-xl overflow-hidden">
        {children}
      </div>
    </motion.div>
  );
}
