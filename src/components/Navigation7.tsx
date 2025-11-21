"use client";

import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import Logo from "./Logo3";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import ThemeToggle from "./ThemeToggle";
import { usePathname } from "next/navigation";

// Register GSAP plugins
gsap.registerPlugin(SplitText);

interface Navigation7Props {
  variant?: "primary" | "secondary";
}

export default function Navigation7({
  variant = "secondary",
}: Navigation7Props) {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Animated burger lines inside the overlay "mask"
  const burgerLine1Ref = useRef<HTMLDivElement>(null);
  const burgerLine2Ref = useRef<HTMLDivElement>(null);

  // Animated burger lines in the base nav (animates in sync, even if covered by mask)
  const baseBurgerLine1Ref = useRef<HTMLDivElement>(null);
  const baseBurgerLine2Ref = useRef<HTMLDivElement>(null);

  // Static header logo/burger in the base nav
  const logoRef = useRef<HTMLAnchorElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  // Determine base color class based on variant
  const baseColorClass =
    variant === "primary" ? "text-primary" : "text-secondary";

  // Navigation items and SplitText-related state (mirrors Navigation5)
  const navItems = [
    { name: "Home", href: "/" },
    { name: "A propos", href: "/a-propos" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
    { name: "Blog", href: "/blog" },
  ];

  const menuItemsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [splitTextReady, setSplitTextReady] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const splitTextInstances = useRef<SplitText[]>([]);

  // Master GSAP timeline for burger + overlay + links (open/close)
  const masterTimelineRef = useRef<gsap.core.Timeline | null>(null);

  // Track if we are over the home hero section (transparent nav) or past it (solid nav)
  const [isOverHero, setIsOverHero] = useState(pathname === "/");

  useEffect(() => {
    if (pathname !== "/") {
      setIsOverHero(false);
      return;
    }

    const handleScroll = () => {
      const vh = window.innerHeight || 0;
      // Once we've scrolled roughly past the hero (full viewport hero), switch to solid nav
      setIsOverHero(window.scrollY < vh - 80);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  // Effective color for closed navbar logo + burger
  // - On home and still over hero: use variant color (can be secondary on light background)
  // - Otherwise: always use primary for better contrast on solid secondary background
  const effectiveColorClass =
    pathname === "/" && isOverHero ? baseColorClass : "text-primary";

  // Font loading detection (simplified version from Navigation5)
  useEffect(() => {
    const checkFontsLoaded = async () => {
      try {
        if (document.fonts && document.fonts.ready) {
          await document.fonts.ready;
          setTimeout(() => setFontsLoaded(true), 50);
        } else {
          setTimeout(() => setFontsLoaded(true), 100);
        }
      } catch (error) {
        console.warn("Font loading detection failed, using fallback:", error);
        setTimeout(() => setFontsLoaded(true), 100);
      }
    };

    checkFontsLoaded();
  }, []);

  // Create SplitText instances for nav links (adapted from Navigation5)
  useEffect(() => {
    if (!fontsLoaded) return;

    const createSplitTextInstances = () => {
      // Clean up existing instances first
      splitTextInstances.current.forEach((split) => {
        if (split) split.revert();
      });
      splitTextInstances.current = [];

      let allInstancesCreated = true;
      const isMobileDevice =
        typeof window !== "undefined" ? window.innerWidth < 768 : false;

      menuItemsRef.current.forEach((item, index) => {
        if (item) {
          const linkElement = item.querySelector("a");
          if (linkElement) {
            try {
              // Ensure text is visible and properly styled
              gsap.set(linkElement, {
                visibility: "visible",
                opacity: 1,
              });

              // Force a reflow to ensure the element is fully rendered
              // eslint-disable-next-line @typescript-eslint/no-unused-expressions
              (linkElement as HTMLElement).offsetHeight;

              const split = new SplitText(linkElement, {
                type: "chars",
                charsClass: "split-char",
              });

              // Verify the split was successful
              if (split.chars && split.chars.length > 0) {
                splitTextInstances.current[index] = split;

                // Set initial state for split characters (excluding spaces)
                const visibleChars = split.chars.filter(
                  (char: Element) =>
                    char.textContent && char.textContent.trim() !== "",
                ) as HTMLElement[];
                gsap.set(visibleChars, {
                  y: isMobileDevice ? 60 : 100,
                  opacity: 0,
                  rotationX: -90,
                  transformOrigin: "0% 50% -50",
                });
              } else {
                console.warn(
                  `SplitText failed for item ${index}:`,
                  linkElement.textContent,
                );
                allInstancesCreated = false;
              }
            } catch (error) {
              console.error(
                `Error creating SplitText for item ${index}:`,
                error,
              );
              allInstancesCreated = false;
            }
          }
        }
      });

      if (allInstancesCreated) {
        setSplitTextReady(true);
      } else {
        // Retry after a short delay if some instances failed
        setTimeout(createSplitTextInstances, 100);
      }
    };

    // Use requestAnimationFrame to ensure DOM is ready
    requestAnimationFrame(() => {
      setTimeout(createSplitTextInstances, 100);
    });

    // Cleanup function
    return () => {
      splitTextInstances.current.forEach((split) => {
        if (split) split.revert();
      });
      splitTextInstances.current = [];
      setSplitTextReady(false);
    };
  }, [fontsLoaded]);

  const { contextSafe } = useGSAP(
    () => {
      if (!fontsLoaded || !splitTextReady) return;

      // Position burger lines properly - much thinner lines (overlay + base stay in perfect sync)
      const topLines = [
        burgerLine1Ref.current,
        baseBurgerLine1Ref.current,
      ].filter(Boolean) as HTMLElement[];
      const bottomLines = [
        burgerLine2Ref.current,
        baseBurgerLine2Ref.current,
      ].filter(Boolean) as HTMLElement[];

      gsap.set(topLines, {
        y: -3,
        rotation: 0,
        transformOrigin: "center",
      });
      gsap.set(bottomLines, {
        y: 3,
        rotation: 0,
        transformOrigin: "center",
      });

      // Initial state for overlay: collapsed height (mirrors Navigation5 behaviour)
      const isMobile =
        typeof window !== "undefined" ? window.innerWidth < 768 : false;
      const viewportHeight =
        typeof window !== "undefined" ? window.innerHeight : 0;
      const openHeight = isMobile ? viewportHeight : viewportHeight * 0.6; // 100vh mobile, 60vh desktop

      if (overlayRef.current) {
        gsap.set(overlayRef.current, {
          height: 0,
          pointerEvents: "none",
        });
      }

      // Initial state - menu items hidden (same as Navigation5)
      const isMobileDevice =
        typeof window !== "undefined" ? window.innerWidth < 768 : false;
      gsap.set(menuItemsRef.current, {
        y: isMobileDevice ? 50 : -30,
        opacity: 0,
      });

      // Build master timeline for open (and reverse for close)
      const tl = gsap.timeline({ paused: true });

      // 1. Burger morph to X (overlay + base burgers)
      tl.to(
        topLines,
        {
          rotation: 45,
          y: 0,
          duration: 0.6,
          ease: "back.out(1.7)",
        },
        0,
      ).to(
        bottomLines,
        {
          rotation: -45,
          y: 0,
          duration: 0.6,
          ease: "back.out(1.7)",
        },
        0,
      );

      // 2. Overlay opens by increasing height
      tl.to(
        overlayRef.current,
        {
          height: openHeight,
          pointerEvents: "auto",
          duration: 0.9,
          ease: "power3.inOut",
        },
        0.1,
      );

      // 3. Show menu items container with enhanced stagger
      tl.to(
        menuItemsRef.current,
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: isMobileDevice ? 0.1 : 0.15,
          ease: "back.out(1.2)",
        },
        0.4,
      );

      // 4. Animate individual letters with enhanced stagger
      splitTextInstances.current.forEach((split, index) => {
        if (split && split.chars && split.chars.length > 0) {
          const visibleChars = split.chars.filter(
            (char: Element) =>
              char.textContent && char.textContent.trim() !== "",
          ) as HTMLElement[];
          tl.to(
            visibleChars,
            {
              y: 0,
              opacity: 1,
              rotationX: 0,
              duration: 1,
              stagger: {
                each: isMobileDevice ? 0.02 : 0.03,
                from: "start",
              },
              ease: "back.out(1.4)",
            },
            0.6 + index * (isMobileDevice ? 0.08 : 0.1),
          );
        }
      });

      masterTimelineRef.current = tl;
    },
    { dependencies: [fontsLoaded, splitTextReady] },
  );

  const toggleMenu = contextSafe(() => {
    if (!masterTimelineRef.current) return;

    if (isMenuOpen) {
      // Close: immediately mark state closed so rotate-180 matches Navigation5,
      // then reverse master timeline
      setIsMenuOpen(false);
      masterTimelineRef.current.reverse();
    } else {
      // Open: immediately mark state open so rotate-180 matches Navigation5,
      // then play master timeline
      setIsMenuOpen(true);
      masterTimelineRef.current.play();
    }
  });

  const closeMenu = contextSafe(() => {
    if (!masterTimelineRef.current || !isMenuOpen) return;
    setIsMenuOpen(false);
    masterTimelineRef.current.reverse();
  });

  return (
    <>
      {/* Full-screen overlay menu - acts as an inset mask using clip-path */}
      <div
        ref={overlayRef}
        className="bg-secondary fixed inset-0 z-60 flex flex-col overflow-hidden text-center"
        onClick={closeMenu}
      >
        {/* Overlay header with its own primary logo + animated burger - perfectly aligned with base nav */}
        <div className="h-16 px-4 md:px-8" onClick={(e) => e.stopPropagation()}>
          <div className="flex h-16 items-center justify-between">
            {/* Primary logo inside the mask */}
            {pathname === "/" ? (
              // Disabled logo for home page - same structure/offset as base nav, but primary color
              <Link
                href="#"
                className="pointer-events-none flex cursor-default items-center space-x-2 transition-all duration-300"
                style={{ transform: "translateY(-4px)" }}
                title="You are currently on the home page"
                onClick={(e) => e.preventDefault()}
              >
                <Logo width={120} height={52} className="text-primary" />
              </Link>
            ) : (
              // Active logo for other pages - same structure/offset as base nav, but primary color
              <Link
                href="/"
                className="flex items-center space-x-2 transition-all duration-300 hover:scale-105"
                style={{ transform: "translateY(-4px)" }}
                onClick={closeMenu}
              >
                <Logo width={120} height={52} className="text-primary" />
              </Link>
            )}

            <div className="flex items-center gap-4">
              <ThemeToggle />

              {/* Animated burger (to X) inside the overlay - matches Navigation5 rotation */}
              <button
                onClick={toggleMenu}
                className={`text-primary relative flex h-10 w-10 cursor-pointer flex-col items-center justify-center transition-all duration-300 hover:scale-110 focus:outline-none md:h-8 md:w-8 ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
                aria-label="Toggle menu"
                aria-expanded={isMenuOpen}
              >
                <div
                  ref={burgerLine1Ref}
                  className="absolute h-px w-7 rounded-full bg-current transition-colors duration-200 md:w-8"
                />
                <div
                  ref={burgerLine2Ref}
                  className="absolute h-px w-7 rounded-full bg-current transition-colors duration-200 md:w-8"
                />
              </button>
            </div>
          </div>
        </div>

        {/* Menu links content - vertically lower in the overlay (mirrors Navigation5 feel) */}
        <div
          className="flex flex-1 items-end px-4 text-3xl md:px-8 md:text-4xl"
          onClick={(e) => e.stopPropagation()}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <div className="flex w-full flex-col items-center space-y-2 pb-8 md:flex-row md:items-end md:justify-start md:gap-8 md:space-y-0">
            {navItems.map((item, index) => {
              const isCurrentPage = pathname === item.href;
              return (
                <div
                  key={item.name}
                  ref={(el) => {
                    menuItemsRef.current[index] = el;
                  }}
                  className="group relative flex-shrink-0 py-2 md:py-0"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  {isCurrentPage ? (
                    // Disabled link for current page - using Link but disabled
                    <Link
                      href="#"
                      className="font-ITCGaramondN text-primary/30 current-page-link pointer-events-none block cursor-default text-center text-5xl leading-tight transition-all duration-300 sm:text-6xl md:text-left md:text-[clamp(40px,6vw,120px)]"
                      style={{
                        visibility:
                          fontsLoaded && splitTextReady ? "visible" : "hidden",
                        opacity: fontsLoaded && splitTextReady ? 1 : 0,
                      }}
                      title="You are currently on this page"
                      onClick={(e) => e.preventDefault()}
                    >
                      {item.name}
                    </Link>
                  ) : (
                    // Active link for other pages
                    <Link
                      href={item.href}
                      className={`font-ITCGaramondN block cursor-pointer text-center text-5xl leading-tight transition-all duration-300 sm:text-6xl md:text-left md:text-[clamp(40px,6vw,120px)] ${
                        hoveredIndex !== null && hoveredIndex !== index
                          ? "text-primary/50"
                          : "text-primary"
                      }`}
                      onClick={closeMenu}
                      style={{
                        visibility:
                          fontsLoaded && splitTextReady ? "visible" : "hidden",
                        opacity: fontsLoaded && splitTextReady ? 1 : 0,
                      }}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom border at the visible bottom of the overlay */}
        <div className="pointer-events-none absolute right-0 bottom-0 left-0 border-b border-[#504630]/30" />
      </div>

      <nav
        className="fixed top-0 right-0 left-0 z-40 h-16 select-none"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative z-10 h-16 px-4 md:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo - Much Larger */}
            {pathname === "/" ? (
              // Disabled logo for home page - using Link but disabled
              <Link
                ref={logoRef}
                href="#"
                className="pointer-events-none flex cursor-default items-center space-x-2 transition-all duration-300"
                style={{ transform: "translateY(-4px)" }}
                title="You are currently on the home page"
                onClick={(e) => e.preventDefault()}
              >
                <Logo width={120} height={52} className={effectiveColorClass} />
              </Link>
            ) : (
              // Active logo for other pages
              <Link
                ref={logoRef}
                href="/"
                className="flex items-center space-x-2 transition-all duration-300 hover:scale-105"
                style={{ transform: "translateY(-4px)" }}
              >
                <Logo width={120} height={52} className={effectiveColorClass} />
              </Link>
            )}

            {/* Right side - Theme Toggle and Burger Menu */}
            <div className="flex items-center gap-4">
              {/* Theme Toggle */}
              <ThemeToggle />

              {/* Base burger - animates in sync and rotates like Navigation5 */}
              <button
                onClick={toggleMenu}
                className={`${effectiveColorClass} relative flex h-10 w-10 cursor-pointer flex-col items-center justify-center transition-all duration-300 hover:scale-110 focus:outline-none md:h-8 md:w-8 ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
                aria-label="Toggle menu"
                aria-expanded={isMenuOpen}
              >
                <div
                  ref={baseBurgerLine1Ref}
                  className="absolute h-px w-7 rounded-full bg-current transition-colors duration-200 md:w-8"
                />
                <div
                  ref={baseBurgerLine2Ref}
                  className="absolute h-px w-7 rounded-full bg-current transition-colors duration-200 md:w-8"
                />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Enhanced CSS for split characters and navigation layout (from Navigation5) */}
      <style jsx>{`
        .split-char {
          display: inline-block;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
          transform-style: preserve-3d;
        }

        .font-ITCGaramondN {
          font-display: block;
        }

        .font-ITCGaramondN a {
          white-space: nowrap;
        }

        .group {
          white-space: nowrap;
          overflow: hidden;
        }

        .current-page-link .split-char {
          text-decoration: line-through;
          text-decoration-skip-ink: none;
        }

        @media (min-width: 768px) {
          .font-ITCGaramondN a {
            font-size: clamp(40px, 6vw, 120px) !important;
          }
        }
      `}</style>
    </>
  );
}
