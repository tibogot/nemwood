"use client";

import { ReactNode, useEffect } from "react";
import { ReactLenis, useLenis } from "lenis/react";

interface LenisProviderProps {
  children: ReactNode;
}

function LenisController() {
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) return;

    const handlePageTransitionStart = () => {
      // Stop Lenis scrolling during page transitions to prevent jitter
      lenis.stop();
    };

    const handlePageTransitionComplete = () => {
      // Resume Lenis after page transition completes
      // Small delay to ensure animations have settled
      setTimeout(() => {
        lenis.start();
      }, 100);
    };

    window.addEventListener("pageTransitionStart", handlePageTransitionStart);
    window.addEventListener(
      "pageTransitionComplete",
      handlePageTransitionComplete,
    );

    return () => {
      window.removeEventListener(
        "pageTransitionStart",
        handlePageTransitionStart,
      );
      window.removeEventListener(
        "pageTransitionComplete",
        handlePageTransitionComplete,
      );
    };
  }, [lenis]);

  return null;
}

export default function LenisProvider({ children }: LenisProviderProps) {
  return (
    <ReactLenis
      root
      options={{
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        syncTouch: false,
      }}
    >
      <LenisController />
      {children}
    </ReactLenis>
  );
}
