"use client";

import Logo from "./Logo4";
import { useRef, ReactNode, useCallback } from "react";
import { useRouter, usePathname } from "next/navigation";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

// Register the useGSAP hook
gsap.registerPlugin(useGSAP);

interface PageTransitionProps {
  children: ReactNode;
}

export default function PageTransition({ children }: PageTransitionProps) {
  const router = useRouter();
  const pathname = usePathname();
  const containerRef = useRef<HTMLDivElement | null>(null);
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const logoRef = useRef<SVGSVGElement | null>(null);
  const logoOverlayRef = useRef<HTMLDivElement | null>(null);
  const blocksRef = useRef<HTMLDivElement[]>([]);
  const isTransitioning = useRef(false);
  const isMounted = useRef(false);
  const pathLengthRef = useRef<number | null>(null);
  const isInitialLoad = useRef(true);
  const currentTimeline = useRef<gsap.core.Timeline | null>(null);
  const linkListenersRef = useRef<Map<HTMLAnchorElement, (e: Event) => void>>(
    new Map(),
  );

  // Cleanup function for timelines
  const cleanupTimeline = useCallback(() => {
    if (currentTimeline.current) {
      currentTimeline.current.kill();
      currentTimeline.current = null;
    }
  }, []);

  // Safe router navigation with error handling
  const safeRouterPush = useCallback(
    (url: string) => {
      try {
        router.push(url);
      } catch (error) {
        console.error("PageTransition: Router navigation failed:", error);
        // Fallback to window navigation
        window.location.href = url;
      }
    },
    [router],
  );

  useGSAP(
    () => {
      const createBlocks = () => {
        if (!overlayRef.current) return;

        // Clear existing blocks and timeline
        cleanupTimeline();
        overlayRef.current.innerHTML = "";
        blocksRef.current = [];

        const blockCount = Math.min(
          20,
          Math.max(10, Math.floor(window.innerWidth / 100)),
        );

        for (let i = 0; i < blockCount; i++) {
          const block = document.createElement("div");
          block.className = "flex-1 h-full bg-[#222] will-change-transform";
          block.style.backfaceVisibility = "hidden"; // Optimize for animations
          overlayRef.current.appendChild(block);
          blocksRef.current.push(block);
        }
      };

      // Initialize logo path with better error handling
      const initializeLogoPath = () => {
        if (!logoRef.current) return false;

        const path = logoRef.current.querySelector("path");
        if (!path) return false;

        try {
          // Force the SVG to be laid out/painted first
          logoRef.current.getBoundingClientRect();

          const length = path.getTotalLength();
          pathLengthRef.current = length;

          // Use GSAP.set for better performance
          gsap.set(path, {
            strokeDasharray: length,
            strokeDashoffset: length,
            fill: "transparent",
            stroke: "currentColor",
          });

          // Force another reflow to ensure properties are applied
          path.getBoundingClientRect();

          return true;
        } catch (error) {
          console.warn("PageTransition: Error initializing logo path:", error);
          return false;
        }
      };

      // Animation functions with better error handling
      const revealPage = () => {
        if (!blocksRef.current.length) return;

        cleanupTimeline();

        gsap.set(blocksRef.current, {
          scaleX: 1,
          transformOrigin: "right",
          force3D: true,
        });
        //@ts-ignore
        currentTimeline.current = gsap.to(blocksRef.current, {
          scaleX: 0,
          duration: 0.4,
          stagger: 0.02,
          ease: "power2.out",
          transformOrigin: "right",
          force3D: true,
          onComplete: () => {
            isTransitioning.current = false;
            currentTimeline.current = null;
          },
          onInterrupt: () => {
            isTransitioning.current = false;
            currentTimeline.current = null;
          },
        });
      };

      const initialLoadSequence = () => {
        if (!blocksRef.current.length) return;

        cleanupTimeline();

        // Set initial states
        gsap.set(blocksRef.current, {
          scaleX: 1,
          transformOrigin: "right",
          force3D: true,
        });
        gsap.set(logoOverlayRef.current, { opacity: 1 });

        const logoPath = logoRef.current?.querySelector("path");
        if (logoPath && pathLengthRef.current !== null) {
          gsap.set(logoPath, {
            strokeDashoffset: pathLengthRef.current,
            fill: "transparent",
          });

          // Create timeline with better error handling
          currentTimeline.current = gsap.timeline({
            onComplete: () => {
              isTransitioning.current = false;
              isInitialLoad.current = false;
              currentTimeline.current = null;
            },
            onInterrupt: () => {
              isTransitioning.current = false;
              currentTimeline.current = null;
            },
          });

          currentTimeline.current
            .to(logoPath, {
              strokeDashoffset: 0,
              duration: 1.5,
              ease: "power2.inOut",
              delay: 0.5,
            })
            .to(
              logoOverlayRef.current,
              {
                opacity: 0,
                duration: 0.3,
                ease: "power2.inOut",
              },
              "+=0.3",
            )
            .to(
              blocksRef.current,
              {
                scaleX: 0,
                duration: 0.6,
                stagger: 0.03,
                ease: "power2.out",
                transformOrigin: "right",
                force3D: true,
              },
              "-=0.1",
            );
        } else {
          // Fallback if logo path isn't available
          revealPage();
        }
      };

      const coverPage = (url: string) => {
        // Validate required elements
        const requiredElements = [
          logoRef.current,
          logoOverlayRef.current,
          blocksRef.current.length > 0,
        ];

        if (!requiredElements.every(Boolean)) {
          console.warn(
            "PageTransition: Required elements not available, using fallback navigation",
          );
          safeRouterPush(url);
          return;
        }

        const logoPath = logoRef.current!.querySelector("path");
        if (!logoPath) {
          console.warn(
            "PageTransition: Logo path not found, using fallback navigation",
          );
          safeRouterPush(url);
          return;
        }

        // Re-initialize logo path to ensure it's in the correct state
        let pathLength = pathLengthRef.current;
        if (pathLength === null) {
          try {
            pathLength = logoPath.getTotalLength();
            pathLengthRef.current = pathLength;
          } catch (error) {
            console.warn(
              "PageTransition: Could not get path length, using fallback navigation",
            );
            safeRouterPush(url);
            return;
          }
        }

        // Ensure the path is properly set up for animation
        gsap.set(logoPath, {
          strokeDasharray: pathLength,
          stroke: "currentColor",
          fill: "transparent",
        });

        // Force a reflow to ensure the properties are applied before animation
        logoPath.getBoundingClientRect();

        cleanupTimeline();

        currentTimeline.current = gsap.timeline({
          onComplete: () => {
            safeRouterPush(url);
            currentTimeline.current = null;
          },
          onInterrupt: () => {
            safeRouterPush(url);
            currentTimeline.current = null;
          },
        });

        currentTimeline.current
          .to(blocksRef.current, {
            scaleX: 1,
            duration: 0.4,
            stagger: 0.02,
            ease: "power2.out",
            transformOrigin: "left",
            force3D: true,
          })
          .set(logoOverlayRef.current, { opacity: 1 }, "-=0.2")
          .set(
            logoPath,
            {
              strokeDashoffset: pathLength,
              fill: "transparent",
            },
            "-=0.25",
          )
          .to(
            logoPath,
            {
              strokeDashoffset: 0,
              duration: 2,
              ease: "power2.inOut",
            },
            "-=0.5",
          )
          .to(logoOverlayRef.current, {
            opacity: 0,
            duration: 0.25,
            ease: "power2.inOut",
          });
      };

      // Initialize everything with better error handling
      try {
        createBlocks();

        // Set initial block states
        if (blocksRef.current.length > 0) {
          gsap.set(blocksRef.current, {
            scaleX: 0,
            transformOrigin: "left",
            force3D: true,
          });
        }

        // Initialize logo
        initializeLogoPath();

        // Run appropriate animation sequence
        if (isInitialLoad.current) {
          initialLoadSequence();
        } else {
          revealPage();
        }

        isMounted.current = true;
      } catch (error) {
        console.error("PageTransition: Initialization failed:", error);
        isMounted.current = true; // Still mark as mounted to prevent issues
      }

      // Enhanced link handling with better cleanup
      const handleLinkClick = (e: Event) => {
        e.preventDefault();
        const target = e.currentTarget as HTMLAnchorElement;

        try {
          const url = new URL(target.href).pathname;
          if (url !== pathname && !isTransitioning.current) {
            isTransitioning.current = true;
            coverPage(url);
          }
        } catch (error) {
          console.error("PageTransition: Link handling failed:", error);
          // Fallback to default navigation
          window.location.href = target.href;
        }
      };

      // Improved link listener management
      const updateLinkListeners = () => {
        // Clean up existing listeners
        linkListenersRef.current.forEach((listener, link) => {
          link.removeEventListener("click", listener);
        });
        linkListenersRef.current.clear();

        // Add new listeners
        const links =
          document.querySelectorAll<HTMLAnchorElement>('a[href^="/"]');
        links.forEach((link) => {
          const listener = (e: Event) => handleLinkClick(e);
          link.addEventListener("click", listener);
          linkListenersRef.current.set(link, listener);
        });
      };

      // Set up link listeners with a slight delay to catch dynamically added links
      updateLinkListeners();
      const linkUpdateTimer = setTimeout(updateLinkListeners, 100);

      // Cleanup function
      return () => {
        clearTimeout(linkUpdateTimer);
        isMounted.current = false;

        // Clean up timeline
        cleanupTimeline();

        // Clean up link listeners
        linkListenersRef.current.forEach((listener, link) => {
          link.removeEventListener("click", listener);
        });
        linkListenersRef.current.clear();
      };
    },
    { scope: containerRef, dependencies: [router, pathname] },
  );

  return (
    <div ref={containerRef}>
      <div
        ref={overlayRef}
        className="pointer-events-none fixed inset-0 z-[1000] flex"
        style={{ willChange: "transform" }}
      />
      <div
        ref={logoOverlayRef}
        className="pointer-events-none fixed inset-0 z-[1000] flex items-center justify-center bg-[#222] opacity-0"
        style={{ willChange: "opacity" }}
      >
        <div className="text-primary flex h-[200px] w-[200px] items-center justify-center p-5">
          <Logo ref={logoRef} />
        </div>
      </div>
      {children}

      {/* Component-specific styles that can't be handled by Tailwind */}
      <style jsx>{`
        /* Custom scrollbar for webkit browsers */
        ::-webkit-scrollbar {
          width: 6px;
        }

        ::-webkit-scrollbar-track {
          background: transparent;
        }

        ::-webkit-scrollbar-thumb {
          background: rgba(80, 70, 48, 0.3);
          border-radius: 3px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: rgba(80, 70, 48, 0.5);
        }
      `}</style>
    </div>
  );
}
