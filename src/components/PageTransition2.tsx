"use client";

import Logo from "./Logo4";
import { useRef, ReactNode } from "react";
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

  useGSAP(
    () => {
      const createBlocks = () => {
        if (!overlayRef.current) return;
        overlayRef.current.innerHTML = "";
        blocksRef.current = [];

        for (let i = 0; i < 20; i++) {
          const block = document.createElement("div");
          // Using Tailwind classes for styling
          block.className = "flex-1 h-full bg-[#222]";
          // Set initial transform state via GSAP instead of CSS class
          overlayRef.current.appendChild(block);
          blocksRef.current.push(block);
        }
      };

      // Define animation functions
      const revealPage = () => {
        gsap.set(blocksRef.current, { scaleX: 1, transformOrigin: "right" });

        gsap.to(blocksRef.current, {
          scaleX: 0,
          duration: 0.4,
          stagger: 0.02,
          ease: "power2.out",
          transformOrigin: "right",
          onComplete: () => {
            isTransitioning.current = false;
          },
        });
      };

      const initialLoadSequence = () => {
        // Start with everything visible (blocks covering screen)
        gsap.set(blocksRef.current, { scaleX: 1, transformOrigin: "right" });
        gsap.set(logoOverlayRef.current, { opacity: 1 });

        const logoPath = logoRef.current?.querySelector("path");
        if (logoPath && pathLengthRef.current !== null) {
          gsap.set(logoPath, {
            strokeDashoffset: pathLengthRef.current,
            fill: "transparent",
          });

          // Initial loading sequence with logo animation
          const tl = gsap.timeline({
            onComplete: () => {
              isTransitioning.current = false;
              isInitialLoad.current = false; // Mark that initial load is complete
            },
          });

          // 1. Show logo drawing animation
          tl.to(logoPath, {
            strokeDashoffset: 0,
            duration: 1.5,
            ease: "power2.inOut",
            delay: 0.5, // Small delay before logo starts
          })
            // 2. Hide logo overlay
            .to(
              logoOverlayRef.current,
              {
                opacity: 0,
                duration: 0.3,
                ease: "power2.inOut",
              },
              "+=0.3",
            )
            // 3. Reveal page by sliding blocks away
            .to(
              blocksRef.current,
              {
                scaleX: 0,
                duration: 0.6,
                stagger: 0.03,
                ease: "power2.out",
                transformOrigin: "right",
              },
              "-=0.1",
            );
        } else {
          // Fallback if logo path isn't available
          revealPage();
        }
      };

      const coverPage = (url: string) => {
        if (
          !logoRef.current ||
          !logoOverlayRef.current ||
          !blocksRef.current.length
        ) {
          console.warn(
            "PageTransition: Required refs not available, skipping transition",
          );
          router.push(url);
          return;
        }

        const logoPath = logoRef.current.querySelector("path");
        if (!logoPath || pathLengthRef.current === null) {
          console.warn(
            "PageTransition: Logo path not found or not initialized, skipping transition",
          );
          router.push(url);
          return;
        }

        const tl = gsap.timeline({
          onComplete: () => router.push(url),
        });

        tl.to(blocksRef.current, {
          scaleX: 1,
          duration: 0.4,
          stagger: 0.02,
          ease: "power2.out",
          transformOrigin: "left",
        })
          .set(logoOverlayRef.current, { opacity: 1 }, "-=0.2")
          .set(
            logoPath,
            {
              strokeDashoffset: pathLengthRef.current, // Use cached length
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

      // Initialize everything
      createBlocks();

      gsap.set(blocksRef.current, { scaleX: 0, transformOrigin: "left" });

      if (logoRef.current) {
        const path = logoRef.current.querySelector("path");
        if (path) {
          try {
            const length = path.getTotalLength();
            pathLengthRef.current = length;
            gsap.set(path, {
              strokeDasharray: length,
              strokeDashoffset: length,
              fill: "transparent",
              stroke: "currentColor",
            });
          } catch (error) {
            console.warn("PageTransition: Error setting up logo path:", error);
          }
        }
      }

      // Show loading animation on initial load, quick reveal on navigation
      if (isInitialLoad.current) {
        initialLoadSequence();
      } else {
        revealPage();
      }
      isMounted.current = true;

      const handleRouteChange = (url: string) => {
        if (isTransitioning.current || !isMounted.current) return;
        isTransitioning.current = true;
        coverPage(url);
      };

      const handleLinkClick = (e: Event) => {
        e.preventDefault();
        const target = e.currentTarget as HTMLAnchorElement;
        const url = new URL(target.href).pathname;
        if (url !== pathname) {
          handleRouteChange(url);
        }
      };

      const links =
        document.querySelectorAll<HTMLAnchorElement>('a[href^="/"]');
      links.forEach((link) => {
        link.addEventListener("click", handleLinkClick);
      });

      return () => {
        isMounted.current = false;
        links.forEach((link) => {
          link.removeEventListener("click", handleLinkClick);
        });
      };
    },
    { scope: containerRef, dependencies: [router, pathname] },
  );

  return (
    <div ref={containerRef}>
      <div
        ref={overlayRef}
        className="pointer-events-none fixed inset-0 z-[1000] flex"
      />
      <div
        ref={logoOverlayRef}
        className="pointer-events-none fixed inset-0 z-[1000] flex items-center justify-center bg-[#222] opacity-0"
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
