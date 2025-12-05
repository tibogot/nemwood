"use client";

import Script from "next/script";
import { useEffect, useRef } from "react";

// TypeScript declarations for gtag
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

const GA_MEASUREMENT_ID =
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "GA_MEASUREMENT_ID";

export default function GoogleAnalytics() {
  if (!GA_MEASUREMENT_ID || GA_MEASUREMENT_ID === "GA_MEASUREMENT_ID") {
    return null; // Don't render if no GA ID provided
  }

  // Refs to store event handlers and timeout for cleanup
  const eventTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const formSubmitHandlerRef = useRef<((e: Event) => void) | null>(null);
  const phoneClickHandlerRef = useRef<((e: Event) => void) | null>(null);
  const emailClickHandlerRef = useRef<((e: Event) => void) | null>(null);

  useEffect(() => {
    // Initialize dataLayer immediately to prevent blocking
    if (typeof window !== "undefined") {
      window.dataLayer = window.dataLayer || [];
      window.gtag =
        window.gtag ||
        function () {
          window.dataLayer.push(arguments);
        };
    }
  }, []);

  // Set up event listeners with proper cleanup
  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    // Debounced event tracking function to reduce main thread blocking
    const debouncedGtag = (
      event: string,
      category: string,
      label: string,
      value: number,
    ) => {
      if (eventTimeoutRef.current) {
        clearTimeout(eventTimeoutRef.current);
      }
      eventTimeoutRef.current = setTimeout(() => {
        if (window.gtag) {
          window.gtag("event", event, {
            event_category: category,
            event_label: label,
            value: value,
          });
        }
      }, 100);
    };

    // Track contact form submissions with debouncing
    const handleFormSubmit = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target && target.tagName === "FORM") {
        debouncedGtag("form_submit", "engagement", "contact_form", 1);
      }
    };

    // Track phone number clicks with debouncing
    const handlePhoneClick = (e: Event) => {
      const target = e.target as HTMLElement;
      // Check if the clicked element or its parent is a link with tel: href
      const link = target.closest("a") as HTMLAnchorElement | null;
      if (link && link.href && link.href.includes("tel:")) {
        debouncedGtag("phone_click", "engagement", "phone_call", 1);
      }
    };

    // Track email clicks with debouncing
    const handleEmailClick = (e: Event) => {
      const target = e.target as HTMLElement;
      // Check if the clicked element or its parent is a link with mailto: href
      const link = target.closest("a") as HTMLAnchorElement | null;
      if (link && link.href && link.href.includes("mailto:")) {
        debouncedGtag("email_click", "engagement", "email_contact", 1);
      }
    };

    // Store handlers in refs for cleanup
    formSubmitHandlerRef.current = handleFormSubmit;
    phoneClickHandlerRef.current = handlePhoneClick;
    emailClickHandlerRef.current = handleEmailClick;

    // Add event listeners
    document.addEventListener("submit", handleFormSubmit, { passive: true });
    document.addEventListener("click", handlePhoneClick, { passive: true });
    document.addEventListener("click", handleEmailClick, { passive: true });

    // Cleanup function
    return () => {
      // Clear any pending timeout
      if (eventTimeoutRef.current) {
        clearTimeout(eventTimeoutRef.current);
        eventTimeoutRef.current = null;
      }

      // Remove event listeners
      if (formSubmitHandlerRef.current) {
        document.removeEventListener("submit", formSubmitHandlerRef.current);
        formSubmitHandlerRef.current = null;
      }
      if (phoneClickHandlerRef.current) {
        document.removeEventListener("click", phoneClickHandlerRef.current);
        phoneClickHandlerRef.current = null;
      }
      if (emailClickHandlerRef.current) {
        document.removeEventListener("click", emailClickHandlerRef.current);
        emailClickHandlerRef.current = null;
      }
    };
  }, []);

  return (
    <>
      {/* Load GA script with lowest priority to avoid blocking */}
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        onLoad={() => {
          // Initialize GA after script loads
          if (typeof window !== "undefined" && window.gtag) {
            window.gtag("js", new Date());
            window.gtag("config", GA_MEASUREMENT_ID, {
              page_title: "Nemwood - Meubles en bois sur mesure",
              page_location: window.location.href,
              send_page_view: true,
              anonymize_ip: true,
              allow_google_signals: false,
              allow_ad_personalization_signals: false,
              custom_map: {
                custom_parameter_1: "service_type",
                custom_parameter_2: "location",
              },
            });
          }
        }}
      />
    </>
  );
}
