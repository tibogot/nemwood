"use client";

import { useEffect, useRef, ReactNode } from "react";
import { useLenis } from "lenis/react";

interface ParallaxImageProps {
  children: ReactNode;
  speed?: number;
  className?: string;
}

export default function ParallaxImage({
  children,
  speed = 0.5,
  className = "",
}: ParallaxImageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const lenis = useLenis();

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || !contentRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const isVisible = rect.bottom >= 0 && rect.top <= window.innerHeight;

      if (isVisible) {
        // Calculate the parallax offset based on how much of the container is visible
        const scrollProgress =
          (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
        const parallaxOffset = (scrollProgress - 0.5) * 100 * speed;

        contentRef.current.style.transform = `translateY(${parallaxOffset}px)`;
      }
    };

    // Use Lenis scroll events if available, otherwise fallback to window scroll
    if (lenis) {
      lenis.on("scroll", handleScroll);
      handleScroll(); // Initial call
      return () => {
        lenis.off("scroll", handleScroll);
      };
    } else {
      // Fallback for when Lenis is not available
      window.addEventListener("scroll", handleScroll, { passive: true });
      handleScroll(); // Initial call
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [speed, lenis]);

  return (
    <div ref={containerRef} className={`relative overflow-hidden ${className}`}>
      <div ref={contentRef} className="relative h-full w-full">
        {children}
      </div>
    </div>
  );
}
