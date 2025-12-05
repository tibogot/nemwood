"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { Draggable } from "gsap/Draggable";
import { InertiaPlugin } from "gsap/InertiaPlugin";
import { useGSAP } from "@gsap/react";

// Register all GSAP plugins once in a centralized location
// Check if plugins are already registered to avoid unnecessary re-registration
// This ensures all plugins are available throughout the application
if (typeof window !== "undefined") {
  const globals = gsap.core.globals();
  if (!globals["ScrollTrigger"]) {
    gsap.registerPlugin(ScrollTrigger);
  }
  if (!globals["SplitText"]) {
    gsap.registerPlugin(SplitText);
  }
  if (!globals["Draggable"]) {
    gsap.registerPlugin(Draggable);
  }
  if (!globals["InertiaPlugin"]) {
    gsap.registerPlugin(InertiaPlugin);
  }
}

// Export all GSAP utilities for use throughout the application
export { gsap, ScrollTrigger, SplitText, Draggable, InertiaPlugin, useGSAP };
