"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { generateThumbnailPath, getVideoSettings } from "@/lib/video-utils";

interface LazyVideoProps {
  src: string;
  className?: string;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  controls?: boolean;
  poster?: string;
  thumbnail?: string; // Poster thumbnail for better UX
  preload?: "none" | "metadata" | "auto";
  bandwidthThreshold?: number; // Mbps threshold for autoplay
  context?: "showcase" | "background" | "interactive" | "mobile"; // Video context for optimization
}

export function LazyVideo({
  src,
  className = "",
  autoPlay,
  loop = true,
  muted = true,
  controls,
  poster,
  thumbnail,
  preload,
  bandwidthThreshold,
  context = "showcase",
}: LazyVideoProps) {
  // Get optimized settings based on context
  const settings = getVideoSettings(context);

  // Use provided props or fall back to optimized settings
  const finalAutoPlay = autoPlay !== undefined ? autoPlay : settings.autoPlay;
  const finalControls = controls !== undefined ? controls : settings.controls;
  const finalPreload = preload || settings.preload;
  const finalBandwidthThreshold =
    bandwidthThreshold || settings.bandwidthThreshold;

  // Auto-generate thumbnail if not provided
  const finalThumbnail = thumbnail || generateThumbnailPath(src);

  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [shouldPlay, setShouldPlay] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [retryCount, setRetryCount] = useState(0);
  const [bandwidth, setBandwidth] = useState<number | null>(null);
  const [showThumbnail, setShowThumbnail] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Bandwidth detection
  useEffect(() => {
    const detectBandwidth = async () => {
      try {
        // Simple bandwidth test using a small image
        const startTime = performance.now();
        const testImage = new Image();
        testImage.src = `data:image/svg+xml;base64,${btoa(`
          <svg width="1" height="1" xmlns="http://www.w3.org/2000/svg">
            <rect width="1" height="1" fill="transparent"/>
          </svg>
        `)}`;

        await new Promise((resolve) => {
          testImage.onload = resolve;
          testImage.onerror = resolve;
        });

        const endTime = performance.now();
        const duration = endTime - startTime;
        // Rough estimation - in real app, use proper bandwidth testing
        const estimatedBandwidth = 10 / (duration / 1000); // Rough Mbps estimation
        setBandwidth(estimatedBandwidth);
      } catch (error) {
        console.warn("Bandwidth detection failed:", error);
        setBandwidth(null);
      }
    };

    detectBandwidth();
  }, []);

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
              // Only load video if bandwidth is sufficient or unknown
              const shouldLoad =
                bandwidth === null || bandwidth >= finalBandwidthThreshold;
              if (shouldLoad) {
                video.src = src;
                video.load();
                setShowThumbnail(false);
              }
            }
          } else {
            setIsInView(false);
            if (finalAutoPlay && video) {
              video.pause();
              setShouldPlay(false);
            }
          }
        });
      },
      {
        threshold: 0.3, // Reduced threshold for better performance
        rootMargin: "50px", // Reduced margin to prevent premature loading
      }
    );

    observerRef.current.observe(video);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [src, isLoaded, finalAutoPlay, bandwidth, finalBandwidthThreshold]);

  // Video yüklendiğinde
  const handleLoadedData = () => {
    setIsLoaded(true);
    setHasError(false);
    if (finalAutoPlay && isInView) {
      setShouldPlay(true);
    }
  };

  // Video yükleme hatası
  const handleError = () => {
    console.warn(`Video yüklenemedi: ${src}, Retry: ${retryCount + 1}`);
    setHasError(true);

    // 3 kez deneme yap
    if (retryCount < 3) {
      setTimeout(() => {
        setRetryCount((prev) => prev + 1);
        setHasError(false);
        const video = videoRef.current;
        if (video) {
          video.load();
        }
      }, 2000 * (retryCount + 1)); // Exponential backoff
    }
  };

  // Video oynatma kontrolü
  useEffect(() => {
    const video = videoRef.current;
    if (!video || !isLoaded) return;

    if (shouldPlay && isInView && finalAutoPlay) {
      video.play().catch(() => {
        // Autoplay engellenmişse sessizce devam et
      });
    } else {
      video.pause();
    }
  }, [shouldPlay, isInView, finalAutoPlay, isLoaded]);

  // Video görünür olduğunda oynatmaya başla
  useEffect(() => {
    if (isInView && isLoaded && finalAutoPlay) {
      setShouldPlay(true);
    }
  }, [isInView, isLoaded, finalAutoPlay]);

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
      {/* Thumbnail overlay for better UX */}
      {showThumbnail && (finalThumbnail || poster) && (
        <div className="absolute inset-0 z-10">
          <img
            src={finalThumbnail || poster}
            alt="Video thumbnail"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          {/* Play button overlay */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/20">
            <motion.button
              className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                setShowThumbnail(false);
                const video = videoRef.current;
                if (video && !isLoaded) {
                  video.src = src;
                  video.load();
                }
              }}
            >
              <svg
                className="w-6 h-6 text-gray-800 ml-1"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </motion.button>
          </div>
        </div>
      )}

      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        autoPlay={false} // Kontrollü oynatma için false
        loop={loop}
        muted={muted}
        controls={finalControls}
        playsInline
        poster={poster}
        preload={finalPreload}
        onLoadedData={handleLoadedData}
        onError={handleError}
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
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 bg-neutral-800 flex items-center justify-center">
          <motion.div
            className="w-8 h-8 border-2 border-cyan-400 border-t-transparent rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
        </div>
      )}

      {/* Bandwidth warning for slow connections */}
      {bandwidth !== null &&
        bandwidth < finalBandwidthThreshold &&
        !isLoaded && (
          <div className="absolute inset-0 bg-neutral-800/90 flex flex-col items-center justify-center text-center p-4">
            <div className="text-yellow-400 mb-2">
              <svg
                className="w-12 h-12 mx-auto"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <p className="text-gray-300 text-sm mb-2">
              Yavaş bağlantı tespit edildi
            </p>
            <p className="text-gray-400 text-xs mb-4">
              Video otomatik oynatılmayacak
            </p>
            <button
              onClick={() => {
                const video = videoRef.current;
                if (video) {
                  video.src = src;
                  video.load();
                  setShowThumbnail(false);
                }
              }}
              className="text-cyan-400 hover:text-cyan-300 text-xs underline"
            >
              Yine de Yükle
            </button>
          </div>
        )}

      {/* Error fallback */}
      {hasError && retryCount >= 3 && (
        <div className="absolute inset-0 bg-neutral-800 flex flex-col items-center justify-center text-center p-4">
          <div className="text-red-400 mb-2">
            <svg
              className="w-12 h-12 mx-auto"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.268 19.5c-.77.833.192 2.5 1.732 2.5z"
              />
            </svg>
          </div>
          <p className="text-gray-300 text-sm mb-2">Video yüklenemedi</p>
          <button
            onClick={() => {
              setRetryCount(0);
              setHasError(false);
              const video = videoRef.current;
              if (video) {
                video.load();
              }
            }}
            className="text-cyan-400 hover:text-cyan-300 text-xs underline"
          >
            Tekrar Dene
          </button>
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
