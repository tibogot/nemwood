"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { Draggable } from "gsap/Draggable";
import { InertiaPlugin } from "gsap/InertiaPlugin";
import { useGSAP } from "@gsap/react";

// Register all GSAP plugins once in a centralized location
// gsap.registerPlugin() is idempotent - safe to call multiple times without checking
// This ensures all plugins are available throughout the application
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, SplitText, Draggable, InertiaPlugin);

  // Avoid global refresh on window "load" while the user may already be mid-scroll
  // (e.g. horizontal pin). Resize is handled manually with safe refresh where needed.
  ScrollTrigger.config({
    autoRefreshEvents: "visibilitychange,DOMContentLoaded",
  });
}

/** Refresh ScrollTrigger without jumping the scroll position (safe mode). */
export function safeScrollTriggerRefresh() {
  if (typeof window !== "undefined") {
    ScrollTrigger.refresh(true);
  }
}

// Export all GSAP utilities for use throughout the application
export { gsap, ScrollTrigger, SplitText, Draggable, InertiaPlugin, useGSAP };
