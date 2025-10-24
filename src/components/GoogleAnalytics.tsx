"use client";

import Script from "next/script";
import { useEffect } from "react";

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

      {/* Event tracking with debouncing to reduce main thread impact */}
      <Script
        id="google-analytics-events"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `
            // Debounced event tracking to reduce main thread blocking
            let eventTimeout;
            function debouncedGtag(event, category, label, value) {
              clearTimeout(eventTimeout);
              eventTimeout = setTimeout(() => {
                if (window.gtag) {
                  window.gtag('event', event, {
                    event_category: category,
                    event_label: label,
                    value: value
                  });
                }
              }, 100);
            }
            
            // Track contact form submissions with debouncing
            document.addEventListener('submit', function(e) {
              if (e.target && e.target.tagName === 'FORM') {
                debouncedGtag('form_submit', 'engagement', 'contact_form', 1);
              }
            });
            
            // Track phone number clicks with debouncing
            document.addEventListener('click', function(e) {
              if (e.target && e.target.href && e.target.href.includes('tel:')) {
                debouncedGtag('phone_click', 'engagement', 'phone_call', 1);
              }
            });
            
            // Track email clicks with debouncing
            document.addEventListener('click', function(e) {
              if (e.target && e.target.href && e.target.href.includes('mailto:')) {
                debouncedGtag('email_click', 'engagement', 'email_contact', 1);
              }
            });
          `,
        }}
      />
    </>
  );
}
