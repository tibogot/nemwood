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
}

// Export all GSAP utilities for use throughout the application
export { gsap, ScrollTrigger, SplitText, Draggable, InertiaPlugin, useGSAP };
