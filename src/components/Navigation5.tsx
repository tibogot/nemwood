"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Logo from "./Logo";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import ThemeToggle from "./ThemeToggle";

// Register the SplitText plugin
gsap.registerPlugin(SplitText);

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [splitTextReady, setSplitTextReady] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const menuItemsRef = useRef<(HTMLDivElement | null)[]>([]);
  const burgerLine1Ref = useRef<HTMLDivElement>(null);
  const burgerLine2Ref = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLAnchorElement>(null);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
    { name: "Blog", href: "/blog" },
  ];

  // Store split text instances for cleanup
  const splitTextInstances = useRef<SplitText[]>([]);

  // Enhanced font loading detection
  useEffect(() => {
    const checkFontsLoaded = async () => {
      try {
        if (document.fonts && document.fonts.ready) {
          await document.fonts.ready;

          // Additional check to ensure ITCGaramondN is specifically loaded
          if (document.fonts.check) {
            const fontChecks = [
              "1em ITCGaramondN",
              '1em "ITC Garamond Narrow"', // fallback name
            ];

            let fontFound = false;
            for (const fontCheck of fontChecks) {
              if (document.fonts.check(fontCheck)) {
                fontFound = true;
                break;
              }
            }

            if (fontFound) {
              // Wait a bit more to ensure rendering is complete
              setTimeout(() => setFontsLoaded(true), 150);
            } else {
              // Fallback - wait longer if font isn't detected
              setTimeout(() => setFontsLoaded(true), 500);
            }
          } else {
            // Fallback for browsers without font.check
            setTimeout(() => setFontsLoaded(true), 300);
          }
        } else {
          // Fallback for browsers that don't support document.fonts
          setTimeout(() => setFontsLoaded(true), 500);
        }
      } catch (error) {
        console.warn("Font loading detection failed, using fallback:", error);
        setTimeout(() => setFontsLoaded(true), 500);
      }
    };

    checkFontsLoaded();
  }, []);

  // Check if mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Prevent body scroll when menu is open on mobile
  useEffect(() => {
    if (isMobile && isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen, isMobile]);

  // Create SplitText instances with proper timing
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
              linkElement.offsetHeight;

              const split = new SplitText(linkElement, {
                type: "chars",
                charsClass: "split-char",
              });

              // Verify the split was successful
              if (split.chars && split.chars.length > 0) {
                splitTextInstances.current[index] = split;

                // Set initial state for split characters
                gsap.set(split.chars, {
                  y: isMobile ? 60 : 100,
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
  }, [fontsLoaded, isMobile]);

  const { contextSafe } = useGSAP(() => {
    if (!fontsLoaded || !splitTextReady) return;

    // Position burger lines properly - much thinner lines
    gsap.set(burgerLine1Ref.current, {
      y: -3,
      rotation: 0,
      transformOrigin: "center",
    });
    gsap.set(burgerLine2Ref.current, {
      y: 3,
      rotation: 0,
      transformOrigin: "center",
    });

    // Initial state - menu items hidden
    gsap.set(menuItemsRef.current, {
      y: isMobile ? 50 : -30,
      opacity: 0,
    });

    // Set overlay initial state
    gsap.set(overlayRef.current, {
      opacity: 0,
      pointerEvents: "none",
    });
  }, [isMobile, fontsLoaded, splitTextReady]);

  const openMenu = contextSafe(() => {
    if (!splitTextReady) return;

    const tl = gsap.timeline();
    const menuHeight = isMobile ? "100vh" : "60vh";

    // 1. Animate burger lines to form X with enhanced animation
    tl.to(burgerLine1Ref.current, {
      rotation: 45,
      y: 0,
      duration: 0.6,
      ease: "back.out(1.7)",
    }).to(
      burgerLine2Ref.current,
      {
        rotation: -45,
        y: 0,
        duration: 0.6,
        ease: "back.out(1.7)",
      },
      0,
    );

    // 2. Show overlay on mobile
    if (isMobile) {
      tl.to(
        overlayRef.current,
        {
          opacity: 0.8,
          pointerEvents: "auto",
          duration: 0.6,
          ease: "power2.out",
        },
        0.1,
      );
    }

    // 3. Stretch the navbar down with improved easing
    tl.to(
      menuRef.current,
      {
        height: menuHeight,
        duration: 0.9,
        ease: "power3.inOut",
      },
      0.1,
    );

    // 4. Logo fade animation on mobile
    if (isMobile && logoRef.current) {
      tl.to(
        logoRef.current,
        {
          opacity: 0.3,
          scale: 0.8,
          duration: 0.5,
          ease: "power2.out",
        },
        0.2,
      );
    }

    // 5. Show menu items container with enhanced stagger
    tl.to(
      menuItemsRef.current,
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: isMobile ? 0.1 : 0.15,
        ease: "back.out(1.2)",
      },
      0.4,
    );

    // 6. Animate individual letters with enhanced stagger
    splitTextInstances.current.forEach((split, index) => {
      if (split && split.chars && split.chars.length > 0) {
        tl.to(
          split.chars,
          {
            y: 0,
            opacity: 1,
            rotationX: 0,
            duration: 1,
            stagger: {
              each: isMobile ? 0.02 : 0.03,
              from: "start",
            },
            ease: "back.out(1.4)",
          },
          0.6 + index * (isMobile ? 0.08 : 0.1),
        );
      }
    });
  });

  const closeMenu = contextSafe(() => {
    if (!splitTextReady) return;

    const tl = gsap.timeline();

    // 1. Hide individual letters first with reverse stagger
    splitTextInstances.current.forEach((split, index) => {
      if (split && split.chars && split.chars.length > 0) {
        tl.to(
          split.chars,
          {
            y: isMobile ? 60 : 100,
            opacity: 0,
            rotationX: -90,
            duration: 0.5,
            stagger: {
              each: 0.015,
              from: "end",
            },
            ease: "power2.in",
          },
          index * 0.04,
        );
      }
    });

    // 2. Hide menu items container
    tl.to(
      menuItemsRef.current,
      {
        y: isMobile ? 50 : -30,
        opacity: 0,
        duration: 0.5,
        stagger: 0.06,
        ease: "power2.in",
      },
      0.2,
    );

    // 3. Restore logo on mobile
    if (isMobile && logoRef.current) {
      tl.to(
        logoRef.current,
        {
          opacity: 1,
          scale: 1,
          duration: 0.5,
          ease: "power2.out",
        },
        0.3,
      );
    }

    // 4. Hide overlay on mobile
    if (isMobile) {
      tl.to(
        overlayRef.current,
        {
          opacity: 0,
          pointerEvents: "none",
          duration: 0.4,
          ease: "power2.in",
        },
        0.4,
      );
    }

    // 5. Collapse navbar back to original size
    tl.to(
      menuRef.current,
      {
        height: "4rem", // h-16 = 64px = 4rem
        duration: 0.8,
        ease: "power3.inOut",
      },
      0.3,
    );

    // 6. Reset burger lines with bounce effect
    tl.to(
      burgerLine1Ref.current,
      {
        rotation: 0,
        y: -3,
        duration: 0.7,
        ease: "back.out(1.5)",
      },
      0.4,
    ).to(
      burgerLine2Ref.current,
      {
        rotation: 0,
        y: 3,
        duration: 0.7,
        ease: "back.out(1.5)",
      },
      0.4,
    );

    // 7. Reset characters to initial state after closing
    tl.call(() => {
      splitTextInstances.current.forEach((split) => {
        if (split && split.chars) {
          gsap.set(split.chars, {
            y: isMobile ? 60 : 100,
            opacity: 0,
            rotationX: -90,
            transformOrigin: "0% 50% -50",
          });
        }
      });
    });
  });

  const toggleMenu = () => {
    if (isMenuOpen) {
      closeMenu();
    } else {
      openMenu();
    }
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    if (isMenuOpen) {
      closeMenu();
      setIsMenuOpen(false);
    }
  };

  const handleOverlayClick = () => {
    if (isMenuOpen && isMobile) {
      closeMenu();
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      {/* Mobile Overlay */}
      <div
        ref={overlayRef}
        className="fixed inset-0 z-40 bg-black md:hidden"
        onClick={handleOverlayClick}
      />

      <nav
        ref={menuRef}
        className="bg-secondary fixed top-0 right-0 left-0 z-50 h-16 overflow-hidden border-b border-[#504630]/30 backdrop-blur-sm select-none md:pb-8"
      >
        <div className="h-16 px-4 md:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo - Much Larger */}
            <Link
              ref={logoRef}
              href="/"
              className="flex items-center space-x-2 transition-all duration-300 hover:scale-105"
            >
              <Logo
                width={48}
                height={48}
                className="text-primary h-8 w-8 md:h-10 md:w-10"
              />
            </Link>

            {/* Right side - Theme Toggle and Burger Menu */}
            <div className="flex items-center gap-4">
              {/* Theme Toggle */}
              <ThemeToggle />

              {/* Burger Menu Button - Much thinner lines */}
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

        {/* Menu Content */}
        <div
          className={`flex h-full px-4 py-8 md:items-end md:px-8 md:py-16 ${isMobile ? "absolute inset-x-0 top-16 bottom-0" : ""}`}
        >
          <div
            className={`flex w-full ${
              isMobile
                ? "h-full flex-col items-center justify-center space-y-8"
                : "flex-row gap-8 md:gap-16"
            }`}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {navItems.map((item, index) => (
              <div
                key={item.name}
                ref={(el) => {
                  menuItemsRef.current[index] = el;
                }}
                className="group relative"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <Link
                  href={item.href}
                  className={`font-ITCGaramondN block transition-all duration-300 ${
                    isMobile
                      ? "text-center text-5xl sm:text-6xl"
                      : "text-4xl md:text-6xl lg:text-8xl"
                  } ${
                    hoveredIndex !== null && hoveredIndex !== index
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

                {/* Hover underline effect */}
                {/* <div className="bg-primary/50 absolute bottom-0 left-0 h-0.5 w-0 transition-all duration-500 group-hover:w-full" /> */}
              </div>
            ))}
          </div>
        </div>
      </nav>

      {/* Enhanced CSS for split characters and mobile optimization */}
      <style jsx>{`
        .split-char {
          display: inline-block;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
          transform-style: preserve-3d;
        }

        /* Ensure fonts are loaded before showing text */
        .font-ITCGaramondN {
          font-display: block;
        }

        /* Smooth scrolling for mobile */
        @media (max-width: 767px) {
          html {
            -webkit-overflow-scrolling: touch;
          }
        }

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
    </>
  );
}
