"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { Draggable } from "gsap/Draggable";
import { InertiaPlugin } from "gsap/InertiaPlugin";
import { useGSAP } from "@gsap/react";

// Register all GSAP plugins once in a centralized location
// This prevents redundant registrations and ensures consistency
if (typeof window !== "undefined") {
  // Check if plugins are already registered to avoid duplicate registrations
  if (!gsap.core.globals()["ScrollTrigger"]) {
    gsap.registerPlugin(ScrollTrigger);
  }
  if (!gsap.core.globals()["SplitText"]) {
    gsap.registerPlugin(SplitText);
  }
  if (!gsap.core.globals()["Draggable"]) {
    gsap.registerPlugin(Draggable);
  }
  if (!gsap.core.globals()["InertiaPlugin"]) {
    gsap.registerPlugin(InertiaPlugin);
  }
  // Note: useGSAP is a hook from @gsap/react, not a plugin, so it doesn't need registration
}

// Export all GSAP utilities for use throughout the application
export { gsap, ScrollTrigger, SplitText, Draggable, InertiaPlugin, useGSAP };
