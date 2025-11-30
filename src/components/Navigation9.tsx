"use client";

import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import Logo from "./Logo3";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLenis } from "lenis/react";
import ThemeToggle from "./ThemeToggle";
import { usePathname } from "next/navigation";
import ServicesCarousel from "./ServicesCarousel";

// Register GSAP plugins
gsap.registerPlugin(SplitText, ScrollTrigger);

interface Navigation9Props {
  variant?: "primary" | "secondary";
}

export default function Navigation9({
  variant = "secondary",
}: Navigation9Props) {
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
  const navRef = useRef<HTMLElement>(null);
  
  // Lenis instance for scroll detection
  const lenis = useLenis();

  // Determine base color class based on variant
  const baseColorClass =
    variant === "primary" ? "text-primary" : "text-secondary";

  // Navigation items and SplitText-related state (mirrors Navigation7)
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
  const [isServicesHovered, setIsServicesHovered] = useState(false);
  const splitTextInstances = useRef<SplitText[]>([]);

  // Master GSAP timeline for burger + overlay + links (open/close)
  const masterTimelineRef = useRef<gsap.core.Timeline | null>(null);

  // Helper function to check if mobile - safe for SSR
  const isMobile = () => {
    if (typeof window === "undefined") return false;
    return window.innerWidth < 768;
  };

  // State to track if we're on mobile
  const [isMobileDevice, setIsMobileDevice] = useState(false);

  // Check mobile status on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobileDevice(isMobile());
    };

    // Initial check
    checkMobile();

    // Listen for resize events
    window.addEventListener("resize", checkMobile);
    window.addEventListener("orientationchange", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
      window.removeEventListener("orientationchange", checkMobile);
    };
  }, []);

  // Helper function to get accurate viewport height on mobile
  // For menu overlay, we use the maximum of all possible height values
  // to ensure it fills the entire screen even when address bars are hidden
  const getViewportHeight = () => {
    if (typeof window === "undefined") return 0;
    // Get all possible height values
    const innerHeight = window.innerHeight;
    const visualHeight = window.visualViewport?.height || innerHeight;
    const docHeight = document.documentElement.clientHeight;
    // Use the maximum to ensure menu fills entire screen regardless of address bar state
    return Math.max(innerHeight, visualHeight, docHeight);
  };

  // Handle mobile viewport changes (address bar show/hide)
  useEffect(() => {
    if (!isMobileDevice) return;

    const handleViewportChange = () => {
      // Update overlay height when open - use 100dvh for mobile to ensure full screen
      if (overlayRef.current && isMenuOpen) {
        const targetHeight = isMobileDevice ? "100dvh" : "75vh";
        // Update both the element directly and the timeline if it's playing
        gsap.set(overlayRef.current, {
          height: targetHeight,
        });
        // Also update the timeline animation target if menu is open
        if (masterTimelineRef.current && masterTimelineRef.current.isActive()) {
          masterTimelineRef.current.getChildren().forEach((child) => {
            if (
              child &&
              typeof child === "object" &&
              "vars" in child &&
              child.vars &&
              typeof child.vars === "object" &&
              "target" in child.vars &&
              child.vars.target === overlayRef.current &&
              "height" in child.vars
            ) {
              gsap.to(overlayRef.current, {
                height: targetHeight,
                duration: 0.3,
                ease: "power2.out",
              });
            }
          });
        }
      }
    };

    // Listen for viewport changes
    window.addEventListener("resize", handleViewportChange);
    window.addEventListener("orientationchange", handleViewportChange);

    // Also listen for visual viewport changes (more reliable for mobile)
    if (window.visualViewport) {
      window.visualViewport.addEventListener("resize", handleViewportChange);
    }

    return () => {
      window.removeEventListener("resize", handleViewportChange);
      window.removeEventListener("orientationchange", handleViewportChange);
      if (window.visualViewport) {
        window.visualViewport.removeEventListener(
          "resize",
          handleViewportChange,
        );
      }
    };
  }, [isMenuOpen, isMobileDevice]);

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

  // Hero "fixed" color (ignores dark mode) for logo + burger when over hero
  // Uses your off-white brand color so dark mode never affects it
  const heroFixedColorClass = "text-[#fffcf5]";

  // Whether we are in the hero-state variant (home + over hero)
  const isHeroState = pathname === "/" && isOverHero;

  // Effective color for closed navbar logo + burger
  // - On home and still over hero: use fixed hero color (ignores dark mode)
  // - Otherwise: always use primary for better contrast on solid secondary background
  const effectiveColorClass = isHeroState
    ? heroFixedColorClass
    : "text-primary";

  // Font loading detection (same as Navigation7)
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

  // Store scroll position in a ref to persist across renders
  const savedScrollPosition = useRef<number>(0);

  // Prevent body scroll when menu is open on mobile
  useEffect(() => {
    if (isMobileDevice && isMenuOpen) {
      // Store original values
      const originalOverflow = document.body.style.overflow;
      const originalPosition = document.body.style.position;
      const originalTop = document.body.style.top;
      const originalWidth = document.body.style.width;

      // Stop Lenis to prevent any ongoing scroll animations
      if (lenis) {
        lenis.stop();
      }

      // Get current scroll position from Lenis (more accurate than window.scrollY)
      // Fallback to window.scrollY if Lenis is not available
      const scrollY = lenis ? lenis.scroll : window.scrollY;
      
      // Store scroll position in ref for later restoration
      savedScrollPosition.current = scrollY;

      // Apply scroll lock
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";

      return () => {
        // Get the scroll position to restore
        const scrollYToRestore = savedScrollPosition.current;
        
        // Restore body styles
        document.body.style.overflow = originalOverflow;
        document.body.style.position = originalPosition;
        document.body.style.top = originalTop;
        document.body.style.width = originalWidth;

        // Restore scroll position immediately and synchronously
        // Set on both window and documentElement to ensure it sticks
        if (scrollYToRestore >= 0) {
          // Set scroll position on document element first (most reliable)
          document.documentElement.scrollTop = scrollYToRestore;
          document.body.scrollTop = scrollYToRestore;
          
          // Also set via window.scrollTo for compatibility
          window.scrollTo(0, scrollYToRestore);
          
          if (lenis) {
            // Update Lenis to match the scroll position we just set
            lenis.scrollTo(scrollYToRestore, { immediate: true });
            // Resume Lenis after a tiny delay to ensure scroll is set
            requestAnimationFrame(() => {
              lenis.start();
            });
          }
        }
      };
    } else {
      // Resume Lenis if it was stopped
      if (lenis) {
        lenis.start();
      }
      document.body.style.overflow = "unset";
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
    }
  }, [isMenuOpen, isMobileDevice, lenis]);

  // Create SplitText instances for nav links (adapted from Navigation7/6)
  useEffect(() => {
    if (!fontsLoaded) return;

    const createSplitTextInstances = () => {
      // Clean up existing instances first
      splitTextInstances.current.forEach((split) => {
        if (split) split.revert();
      });
      splitTextInstances.current = [];

      let allInstancesCreated = true;

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

      // Initial state for overlay: collapsed height (same as Navigation7)
      // Use helper function to get accurate viewport height (handles address bar on mobile)
      const viewportHeight = getViewportHeight();
      // Match Navigation6 feel: full viewport on mobile, ~75vh on desktop
      const openHeight = isMobileDevice
        ? viewportHeight
        : viewportHeight * 0.75;

      if (overlayRef.current) {
        gsap.set(overlayRef.current, {
          height: 0,
          pointerEvents: "none",
        });
      }

      // Initial state - menu items hidden
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
      // Use 100dvh for mobile to ensure full screen coverage regardless of address bar state
      // For desktop, use 75vh
      const currentOpenHeight = isMobileDevice ? "100dvh" : "75vh";
      tl.to(
        overlayRef.current,
        {
          height: currentOpenHeight,
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
    { dependencies: [fontsLoaded, splitTextReady, isMobileDevice] },
  );

  const toggleMenu = contextSafe(() => {
    if (!masterTimelineRef.current) return;

    if (isMenuOpen) {
      setIsMenuOpen(false);
      masterTimelineRef.current.reverse();
    } else {
      // Update timeline to use 100dvh for mobile (ensures full screen regardless of address bar)
      if (isMobileDevice && overlayRef.current) {
        const targetHeight = "100dvh";
        // Update the timeline's target height dynamically before playing
        masterTimelineRef.current.getChildren().forEach((child) => {
          if (
            child &&
            typeof child === "object" &&
            "vars" in child &&
            child.vars &&
            typeof child.vars === "object" &&
            "target" in child.vars &&
            child.vars.target === overlayRef.current &&
            "height" in child.vars
          ) {
            (child.vars as { height?: number | string }).height = targetHeight;
          }
        });
      }
      setIsMenuOpen(true);
      masterTimelineRef.current.play();
    }
  });

  const closeMenu = contextSafe(() => {
    if (!masterTimelineRef.current || !isMenuOpen) return;
    setIsMenuOpen(false);
    masterTimelineRef.current.reverse();
  });

  // Handle click on menu links (close menu)
  const handleLinkClick = () => {
    if (!masterTimelineRef.current || !isMenuOpen) return;
    setIsMenuOpen(false);
    masterTimelineRef.current.reverse();
  };

  // Reset hover states when pathname changes to prevent stale hover state
  useEffect(() => {
    setHoveredIndex(null);
    setIsServicesHovered(false);
  }, [pathname]);

  // Smooth navbar hide/show on scroll using Lenis and GSAP
  useEffect(() => {
    if (!navRef.current || !lenis) return;

    let lastScrollY = lenis.scroll;
    let scrollTimeout: NodeJS.Timeout;
    let currentAnimation: gsap.core.Tween | null = null;

    // Animation properties - same for both directions
    const animationProps = {
      duration: 0.6,
      ease: "power2.out" as const,
    };

    const handleScroll = () => {
      if (!navRef.current || isMenuOpen) {
        // Don't hide navbar when menu is open - ensure it's visible
        if (currentAnimation) {
          currentAnimation.kill();
          currentAnimation = null;
        }
        gsap.to(navRef.current, {
          y: 0,
          ...animationProps,
        });
        return;
      }

      const currentScrollY = lenis.scroll;
      const scrollDifference = currentScrollY - lastScrollY;

      // Only trigger if scroll difference is significant (avoid jitter)
      if (Math.abs(scrollDifference) > 5) {
        // Kill any ongoing animation
        if (currentAnimation) {
          currentAnimation.kill();
        }

        if (scrollDifference > 0 && currentScrollY > 64) {
          // Scrolling down - hide navbar (only after scrolling past navbar)
          currentAnimation = gsap.to(navRef.current, {
            y: -64, // Move up by navbar height
            ...animationProps,
          });
        } else if (scrollDifference < 0) {
          // Scrolling up - show navbar (same animation properties)
          currentAnimation = gsap.to(navRef.current, {
            y: 0, // Move back to original position
            ...animationProps,
          });
        }
      }

      lastScrollY = currentScrollY;

      // Clear existing timeout
      clearTimeout(scrollTimeout);
      
      // Reset flag after scroll stops
      scrollTimeout = setTimeout(() => {
        // Cleanup
      }, 150);
    };

    // Listen to Lenis scroll events
    lenis.on("scroll", handleScroll);

    // Cleanup
    return () => {
      lenis.off("scroll", handleScroll);
      clearTimeout(scrollTimeout);
      if (currentAnimation) {
        currentAnimation.kill();
      }
    };
  }, [lenis, isMenuOpen]);

  // Extended state for services highlighting (from Navigation6)
  const isOnServiceSubpage = pathname?.startsWith("/services/") || false;

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
              // Disabled logo for home page - same structure/offset as base nav, always primary (theme-aware)
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
              // Active logo for other pages - same structure/offset as base nav, always primary (theme-aware)
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

              {/* Animated burger (to X) inside the overlay */}
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

        {/* Services Carousel - always rendered for smooth animations */}
        {/* Wrap in a click-stopper so arrow clicks don't bubble and close the menu */}
        <div onClick={(e) => e.stopPropagation()}>
          <ServicesCarousel
            isVisible={isServicesHovered}
            onMouseEnter={() => setIsServicesHovered(true)}
            onMouseLeave={() => setIsServicesHovered(false)}
            onLinkClick={handleLinkClick}
          />
        </div>

        {/* Menu links content - centered on mobile, bottom on desktop */}
        <div
          className="flex flex-1 items-center justify-center px-4 text-3xl md:items-end md:justify-start md:px-8 md:text-4xl"
          onClick={(e) => e.stopPropagation()}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <div className="flex w-full flex-col items-center space-y-2 pb-8 md:flex-row md:items-end md:justify-start md:gap-8 md:space-y-0">
            {navItems.map((item, index) => {
              const isCurrentPage = pathname === item.href;
              const isServices = item.name === "Services";

              // Treat carousel visibility as if Services is being hovered
              const servicesIndex = navItems.findIndex(
                (navItem) => navItem.name === "Services",
              );
              const effectiveHoveredIndex = isServicesHovered
                ? servicesIndex
                : hoveredIndex;

              return (
                <div
                  key={item.name}
                  ref={(el) => {
                    menuItemsRef.current[index] = el;
                  }}
                  className={`group relative flex-shrink-0 py-2 md:py-0 ${
                    isServices ? "pb-2" : ""
                  }`}
                  onMouseEnter={() => {
                    setHoveredIndex(index);
                    if (isServices) {
                      setIsServicesHovered(true);
                    } else {
                      // If hovering other links, hide services carousel
                      setIsServicesHovered(false);
                    }
                  }}
                  onMouseLeave={() => {
                    setHoveredIndex(null);
                    // Don't hide services carousel when leaving Services link
                    // It will stay visible until hovering other links or carousel is left
                  }}
                >
                  {isCurrentPage ? (
                    // Disabled link for current page
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
                        // Current page logic: fade current page (or Services when on service subpage)
                        isCurrentPage || (isOnServiceSubpage && isServices)
                          ? "text-primary/50"
                          : // Hover logic: fade non-hovered items when something is hovered
                            effectiveHoveredIndex !== null &&
                              effectiveHoveredIndex !== index
                            ? "text-primary/50"
                            : "text-primary"
                      }`}
                      onClick={handleLinkClick}
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
        ref={navRef}
        className={`fixed top-0 right-0 left-0 z-40 h-16 select-none transition-colors duration-300 ${
          !isHeroState ? "bg-secondary" : ""
        }`}
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

              {/* Base burger - animates in sync and rotates */}
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

      {/* Enhanced CSS for split characters and navigation layout */}
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
