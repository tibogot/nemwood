"use client";

import { useRef } from "react";
import { useLenis } from "lenis/react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "@/lib/gsapConfig";

interface TocItem {
  id: string;
  label: string;
}

interface TableOfContentsProps {
  items: TocItem[];
  lastUpdate?: string;
}

export default function TableOfContents({
  items,
  lastUpdate = "26 décembre 2025",
}: TableOfContentsProps) {
  const lenis = useLenis();
  const navRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (!navRef.current || !containerRef.current || !lenis) return;

      // Only pin on desktop (md and above) - mobile doesn't need sticky TOC
      const checkDesktop = () =>
        window.matchMedia("(min-width: 768px)").matches;
      if (!checkDesktop()) return;

      // Get the content section to determine when to unpin
      const contentSection = containerRef.current.closest("section");
      if (!contentSection) return;

      // Sync ScrollTrigger with Lenis smooth scroll
      // Note: scrollerProxy can be called multiple times safely, it will update the existing proxy
      ScrollTrigger.scrollerProxy(document.body, {
        scrollTop(value?: number) {
          if (arguments.length && lenis) {
            lenis.scrollTo(value!, {
              duration: 0.6,
              easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            });
          }
          return lenis ? lenis.scroll : window.pageYOffset;
        },
        getBoundingClientRect() {
          return {
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: window.innerHeight,
          };
        },
        pinType: document.body.style.transform ? "transform" : "fixed",
      });

      // Update ScrollTrigger on Lenis scroll
      let ticking = false;
      const handleScroll = () => {
        if (!ticking) {
          requestAnimationFrame(() => {
            ScrollTrigger.update();
            ticking = false;
          });
          ticking = true;
        }
      };
      lenis.on("scroll", handleScroll);

      // Store references for cleanup
      let pinTrigger: ScrollTrigger | null = null;
      let setupTimeout: NodeJS.Timeout | null = null;
      let mediaQuery: MediaQueryList | null = null;
      let handleMediaChange: (() => void) | null = null;
      let handleResize: (() => void) | null = null;

      // Small delay to ensure DOM is ready before creating pin
      setupTimeout = setTimeout(() => {
        if (!navRef.current || !contentSection) return;

        // Kill any existing ScrollTriggers on this element to avoid conflicts
        ScrollTrigger.getAll().forEach((st) => {
          if (
            st.trigger === navRef.current ||
            st.vars.trigger === navRef.current
          ) {
            st.kill();
          }
        });

        // Create ScrollTrigger pin
        pinTrigger = ScrollTrigger.create({
          trigger: navRef.current,
          start: "top top+=80", // Start pinning when nav reaches 80px from top (matching top-20)
          endTrigger: contentSection,
          end: "bottom bottom", // Unpin when content section ends
          pin: true,
          pinSpacing: false, // Don't add spacing - the aside container maintains its width in flex layout
          // anticipatePin: 1,
          scroller: document.body,
        });

        // Handle responsive changes
        mediaQuery = window.matchMedia("(min-width: 768px)");
        handleMediaChange = () => {
          ScrollTrigger.refresh();
        };
        mediaQuery.addEventListener("change", handleMediaChange);

        // Refresh on resize
        handleResize = () => {
          ScrollTrigger.refresh();
        };
        window.addEventListener("resize", handleResize);

        // Initial refresh after setup with a small delay to ensure everything is ready
        setTimeout(() => {
          ScrollTrigger.refresh();
        }, 100);
      }, 50);

      return () => {
        // Cleanup timeout
        if (setupTimeout) {
          clearTimeout(setupTimeout);
        }
        // Cleanup pin trigger
        if (pinTrigger) {
          pinTrigger.kill();
        }
        // Cleanup scroll listener
        if (lenis) {
          lenis.off("scroll", handleScroll);
        }
        // Cleanup media query listener
        if (mediaQuery && handleMediaChange) {
          mediaQuery.removeEventListener("change", handleMediaChange);
        }
        // Cleanup resize listener
        if (handleResize) {
          window.removeEventListener("resize", handleResize);
        }
      };
    },
    { scope: containerRef, dependencies: [lenis] },
  );

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string,
  ) => {
    e.preventDefault();
    if (!lenis) return;

    const element = document.getElementById(id);
    if (element) {
      // Calculate the target scroll position
      // Get the element's position relative to the document
      const rect = element.getBoundingClientRect();
      const scrollTop = lenis.scroll || window.pageYOffset;
      // Calculate target position, subtracting 80px for sticky header offset (matching scroll-mt-20)
      const targetY = rect.top + scrollTop - 80;

      lenis.scrollTo(targetY, {
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });
    }
  };

  // Parse label to separate number/prefix from title
  const parseLabel = (label: string) => {
    // Match patterns like "1. Title", "Article 1 - Title", etc.
    const match = label.match(/^(\d+\.|Article\s+\d+\s*-\s*)\s*(.+)$/);
    if (match) {
      return { prefix: match[1].trim(), title: match[2] };
    }
    // If no match, return the whole label as title
    return { prefix: "", title: label };
  };

  return (
    <aside
      ref={containerRef}
      className="md:w-[35%] md:max-w-[700px] md:flex-shrink-0"
    >
      <nav ref={navRef}>
        <h3 className="font-HelveticaNow mb-6 text-base md:text-lg">
          Table des matières
        </h3>
        <ul className="font-HelveticaNow text-base md:text-lg">
          {items.map((item) => {
            const { prefix, title } = parseLabel(item.label);
            return (
              <li key={item.id} className="border-primary/70 border-t py-2">
                <a
                  href={`#${item.id}`}
                  onClick={(e) => handleLinkClick(e, item.id)}
                  className="text-primary/70 hover:text-primary flex gap-2 transition-colors"
                >
                  {prefix && <span className="flex-shrink-0">{prefix}</span>}
                  <span>{title}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}
