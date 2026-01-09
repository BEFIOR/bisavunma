"use client";
import React, { useRef, useState, useCallback } from "react";
import { cn } from "@/lib/utils";

interface MagneticCardProps {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  borderGlow?: boolean;
  magnetStrength?: number;
}

export const MagneticCard = ({
  children,
  className,
  containerClassName,
  borderGlow = true,
  magnetStrength = 0.15,
}: MagneticCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [borderPosition, setBorderPosition] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!cardRef.current) return;

      const rect = cardRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      // Magnetic pull effect
      const deltaX = (e.clientX - centerX) * magnetStrength;
      const deltaY = (e.clientY - centerY) * magnetStrength;
      setPosition({ x: deltaX, y: deltaY });

      // Subtle rotation
      const rotateX = ((e.clientY - centerY) / rect.height) * -5;
      const rotateY = ((e.clientX - centerX) / rect.width) * 5;
      setRotation({ x: rotateX, y: rotateY });

      // Border glow position (0-100 percentage around the border)
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const perimeter = 2 * (rect.width + rect.height);
      
      let pos = 0;
      if (y < rect.height * 0.2) {
        // Top edge
        pos = (x / rect.width) * 25;
      } else if (x > rect.width * 0.8) {
        // Right edge
        pos = 25 + (y / rect.height) * 25;
      } else if (y > rect.height * 0.8) {
        // Bottom edge
        pos = 50 + ((rect.width - x) / rect.width) * 25;
      } else if (x < rect.width * 0.2) {
        // Left edge
        pos = 75 + ((rect.height - y) / rect.height) * 25;
      } else {
        // Center - use angle
        const angle = Math.atan2(y - rect.height / 2, x - rect.width / 2);
        pos = ((angle + Math.PI) / (2 * Math.PI)) * 100;
      }
      setBorderPosition(pos);
    },
    [magnetStrength]
  );

  const handleMouseEnter = () => setIsHovering(true);

  const handleMouseLeave = () => {
    setIsHovering(false);
    setPosition({ x: 0, y: 0 });
    setRotation({ x: 0, y: 0 });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={cn("relative", containerClassName)}
      style={{
        transform: `translate(${position.x}px, ${position.y}px) perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
        transition: isHovering
          ? "transform 0.15s ease-out"
          : "transform 0.5s cubic-bezier(0.23, 1, 0.32, 1)",
      }}
    >
      {/* Animated border glow */}
      {borderGlow && (
        <div
          className="absolute -inset-[1px] rounded-2xl opacity-0 transition-opacity duration-300 pointer-events-none"
          style={{
            opacity: isHovering ? 1 : 0,
            background: `conic-gradient(from ${borderPosition * 3.6}deg at 50% 50%, 
              transparent 0deg,
              transparent 60deg,
              rgba(14, 165, 233, 0.6) 90deg,
              rgba(56, 189, 248, 0.8) 120deg,
              rgba(14, 165, 233, 0.6) 150deg,
              transparent 180deg,
              transparent 360deg
            )`,
          }}
        />
      )}

      {/* Card content */}
      <div
        className={cn(
          "relative h-full w-full rounded-2xl bg-neutral-900 border border-neutral-800",
          isHovering && "border-sky-500/30",
          className
        )}
        style={{
          transition: "border-color 0.3s ease-out",
        }}
      >
        {/* Inner glow */}
        <div
          className="absolute inset-0 rounded-2xl pointer-events-none"
          style={{
            opacity: isHovering ? 1 : 0,
            background: `radial-gradient(circle at ${50 + position.x * 0.5}% ${50 + position.y * 0.5}%, rgba(14, 165, 233, 0.08) 0%, transparent 60%)`,
            transition: "opacity 0.3s ease-out",
          }}
        />
        {children}
      </div>
    </div>
  );
};
