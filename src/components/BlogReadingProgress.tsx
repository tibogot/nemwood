"use client";

import { useLenis } from "lenis/react";

export default function BlogReadingProgress() {
  const lenis = useLenis((lenis) => {
    // This callback runs on every scroll
  });

  // Get current scroll progress (0 to 1)
  const progress = lenis?.progress || 0;

  return (
    <div className="fixed top-0 left-0 z-50 h-1 w-full bg-gray-200/30">
      <div
        className="bg-primary h-full transition-all duration-100"
        style={{ width: `${progress * 100}%` }}
      />
    </div>
  );
}
