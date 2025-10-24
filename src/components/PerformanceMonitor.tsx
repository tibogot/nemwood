"use client";

import { useEffect } from "react";

export default function PerformanceMonitor() {
  useEffect(() => {
    // Only run in production and in browser
    if (
      typeof window === "undefined" ||
      process.env.NODE_ENV !== "production"
    ) {
      return;
    }

    // Core Web Vitals monitoring
    const reportWebVitals = (metric: any) => {
      // Send to Google Analytics if available
      if (typeof window !== "undefined" && window.gtag) {
        window.gtag("event", metric.name, {
          event_category: "Web Vitals",
          event_label: metric.id,
          value: Math.round(
            metric.name === "CLS" ? metric.value * 1000 : metric.value,
          ),
          non_interaction: true,
        });
      }

      // Log to console in development
      console.log("Web Vital:", metric);
    };

    // LCP (Largest Contentful Paint)
    const observerLCP = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1];
      reportWebVitals({
        name: "LCP",
        value: lastEntry.startTime,
        id: lastEntry.id,
      });
    });
    observerLCP.observe({ entryTypes: ["largest-contentful-paint"] });

    // FID (First Input Delay)
    const observerFID = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        reportWebVitals({
          name: "FID",
          value: entry.processingStart - entry.startTime,
          id: entry.name,
        });
      });
    });
    observerFID.observe({ entryTypes: ["first-input"] });

    // CLS (Cumulative Layout Shift)
    let clsValue = 0;
    const observerCLS = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry: any) => {
        if (!entry.hadRecentInput) {
          clsValue += entry.value;
        }
      });
      reportWebVitals({
        name: "CLS",
        value: clsValue,
        id: "cls-observer",
      });
    });
    observerCLS.observe({ entryTypes: ["layout-shift"] });

    // FCP (First Contentful Paint)
    const observerFCP = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        reportWebVitals({
          name: "FCP",
          value: entry.startTime,
          id: entry.name,
        });
      });
    });
    observerFCP.observe({ entryTypes: ["paint"] });

    // TTFB (Time to First Byte)
    const observerTTFB = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        reportWebVitals({
          name: "TTFB",
          value: entry.responseStart - entry.requestStart,
          id: entry.name,
        });
      });
    });
    observerTTFB.observe({ entryTypes: ["navigation"] });

    // Cleanup observers
    return () => {
      observerLCP.disconnect();
      observerFID.disconnect();
      observerCLS.disconnect();
      observerFCP.disconnect();
      observerTTFB.disconnect();
    };
  }, []);

  return null;
}
