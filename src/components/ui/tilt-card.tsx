"use client";
import React, { useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  glareEnabled?: boolean;
  tiltMaxAngle?: number;
}

export const TiltCard = ({
  children,
  className,
  containerClassName,
  glareEnabled = true,
  tiltMaxAngle = 8,
}: TiltCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState("");
  const [glarePosition, setGlarePosition] = useState({ x: 50, y: 50 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -tiltMaxAngle;
    const rotateY = ((x - centerX) / centerX) * tiltMaxAngle;

    setTransform(
      `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`
    );

    // Glare position
    const glareX = (x / rect.width) * 100;
    const glareY = (y / rect.height) * 100;
    setGlarePosition({ x: glareX, y: glareY });
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    setTransform("");
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={cn("relative", containerClassName)}
      style={{
        transform: transform,
        transition: isHovering
          ? "transform 0.1s ease-out"
          : "transform 0.4s ease-out",
        transformStyle: "preserve-3d",
      }}
    >
      <div className={cn("relative h-full w-full", className)}>
        {children}
        {/* Glare effect */}
        {glareEnabled && (
          <div
            className="pointer-events-none absolute inset-0 rounded-2xl overflow-hidden"
            style={{
              opacity: isHovering ? 1 : 0,
              transition: "opacity 0.3s ease-out",
            }}
          >
            <div
              className="absolute inset-0"
              style={{
                background: `radial-gradient(circle at ${glarePosition.x}% ${glarePosition.y}%, rgba(255, 191, 0, 0.15) 0%, transparent 60%)`,
                transition: "background 0.1s ease-out",
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
};
