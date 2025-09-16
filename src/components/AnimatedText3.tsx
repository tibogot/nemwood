"use client";
import { useRef, ReactNode, useState, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

interface AnimatedTextProps {
  children: ReactNode;
  trigger?: string | HTMLElement;
  start?: string;
  toggleActions?: string;
  stagger?: number;
  duration?: number;
  delay?: number;
  ease?: string;
  className?: string;
  isHero?: boolean; // New prop for hero text
}

function AnimatedText({
  children,
  trigger,
  start = "top 75%",
  toggleActions = "play reverse play reverse",
  stagger = 0.15,
  duration = 0.8,
  delay = 0,
  ease = "power2.out",
  className = "",
  isHero = false,
}: AnimatedTextProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const splitRefs = useRef<any[]>([]); // Store all SplitText instances for cleanup
  const [fontsReady, setFontsReady] = useState(false);
  const [splitTextCreated, setSplitTextCreated] = useState(false);
  const [pageLoaderReady, setPageLoaderReady] = useState(false);

  // Enhanced font loading detection - similar to Navigation component
  useEffect(() => {
    const checkFontsLoaded = async () => {
      try {
        if (document.fonts && document.fonts.ready) {
          await document.fonts.ready;

          // Additional check to ensure specific fonts are loaded
          if (document.fonts.check) {
            const fontChecks = [
              "1em ITCGaramondN",
              '1em "ITC Garamond Narrow"',
              "16px serif", // fallback check
            ];

            let fontFound = false;
            for (const fontCheck of fontChecks) {
              if (document.fonts.check(fontCheck)) {
                fontFound = true;
                break;
              }
            }

            if (fontFound) {
              // For hero text, don't set fontsReady yet - wait for PageLoader
              if (!isHero) {
                setTimeout(() => setFontsReady(true), 150);
              }
            } else {
              // Fallback - wait longer if font isn't detected
              if (!isHero) {
                setTimeout(() => setFontsReady(true), 400);
              }
            }
          } else {
            // Fallback for browsers without font.check
            if (!isHero) {
              setTimeout(() => setFontsReady(true), 300);
            }
          }
        } else {
          // Fallback for browsers that don't support document.fonts
          if (!isHero) {
            setTimeout(() => setFontsReady(true), 500);
          }
        }
      } catch (error) {
        console.warn(
          "Font loading detection failed in AnimatedText, using fallback:",
          error,
        );
        if (!isHero) {
          setTimeout(() => setFontsReady(true), 500);
        }
      }
    };

    checkFontsLoaded();
  }, [isHero]);

  // For hero text, also wait for PageLoader to complete
  useEffect(() => {
    if (!isHero) return;

    const handlePageLoaderComplete = () => {
      // Set PageLoader ready and fonts ready for hero text
      setPageLoaderReady(true);
      setTimeout(() => setFontsReady(true), 200);
    };

    // Check if PageLoader is already complete
    if (document.documentElement.classList.contains("page-loader-complete")) {
      handlePageLoaderComplete();
    } else {
      // Listen for PageLoader completion
      window.addEventListener("pageLoaderComplete", handlePageLoaderComplete);

      return () => {
        window.removeEventListener(
          "pageLoaderComplete",
          handlePageLoaderComplete,
        );
      };
    }
  }, [isHero]);

  // Add CSS to prevent FOUC - ensure text is hidden until GSAP takes control
  useEffect(() => {
    const styleId = "animated-text-fouc-prevention";

    // Check if style already exists
    if (!document.getElementById(styleId)) {
      const styleElement = document.createElement("style");
      styleElement.id = styleId;
      styleElement.textContent = `
        .animated-text-wrapper {
          overflow: hidden;
        }
        
        /* Fix for SplitText clipping with tight line heights */
        .animated-text-wrapper.overflow-visible {
          overflow: visible !important;
        }
        
        /* Fix for SplitText line clipping - add padding to split lines */
        .animated-text-wrapper.overflow-visible .split-line {
          padding-top: 0.1em !important;
          padding-bottom: 0.1em !important;
        }
        
        /* Hide text until animation is ready */
        .animated-text-wrapper.fouc-prevent {
          visibility: hidden !important;
          opacity: 0 !important;
        }
      `;
      document.head.appendChild(styleElement);
    }
  }, []);

  useGSAP(
    () => {
      if (!wrapperRef.current || !fontsReady) return;

      // For hero text, also wait for PageLoader to be ready
      if (isHero && !pageLoaderReady) return;

      // Add FOUC prevention class initially
      wrapperRef.current.classList.add("fouc-prevent");

      const createSplitTextInstances = () => {
        // Clean up existing instances
        splitRefs.current.forEach((split) => {
          if (split) split.revert();
        });
        splitRefs.current = [];

        const children = Array.from(
          wrapperRef.current!.children,
        ) as HTMLElement[];

        if (children.length === 0) return;

        let allInstancesCreated = true;

        children.forEach((child, index) => {
          try {
            // Hide the original text element to prevent FOUC
            gsap.set(child, {
              visibility: "hidden",
              opacity: 0,
            });

            // Force a reflow to ensure the element is fully rendered
            child.offsetHeight;

            const split = SplitText.create(child, {
              type: "lines",
              mask: "lines",
              autoSplit: true,
              aria: "none", // Disable automatic aria-label addition
            });

            // Fix for tight line heights - add padding to split lines
            if (
              wrapperRef.current?.classList.contains("overflow-visible") &&
              split.lines
            ) {
              split.lines.forEach((line: Element) => {
                const htmlLine = line as HTMLElement;
                htmlLine.style.paddingTop = "0.1em";
                htmlLine.style.paddingBottom = "0.1em";
              });
            }

            // Verify the split was successful
            if (split && split.lines && split.lines.length > 0) {
              splitRefs.current.push(split);

              // Set initial state to prevent FOUC
              gsap.set(split.lines, {
                yPercent: 100,
                autoAlpha: 0, // This prevents FOUC by setting visibility: hidden initially
              });

              // For hero text, use immediate animation without ScrollTrigger
              if (isHero) {
                // Remove FOUC prevention class and make element visible for hero text
                if (wrapperRef.current) {
                  wrapperRef.current.classList.remove("fouc-prevent");
                }
                gsap.set(child, { visibility: "visible", opacity: 1 });

                gsap.to(split.lines, {
                  yPercent: 0,
                  autoAlpha: 1, // Reveal with autoAlpha for smooth transition
                  stagger,
                  duration,
                  ease,
                  delay: delay + index * 0.1, // Add slight delay between multiple children
                });
              } else {
                // Regular scroll-triggered animation - use a more reliable trigger strategy
                const animation = gsap.to(split.lines, {
                  yPercent: 0,
                  autoAlpha: 1, // Reveal with autoAlpha for smooth transition
                  stagger,
                  duration,
                  ease,
                  delay: delay + 0.3, // Small delay to ensure page transition is complete
                  scrollTrigger: {
                    trigger: trigger || wrapperRef.current || child,
                    start: "top 80%", // More reliable start position
                    toggleActions: "play none none reverse",
                    refreshPriority: -1, // Lower priority for better performance
                    onEnter: () => {
                      // Remove FOUC prevention class and make element visible
                      if (wrapperRef.current) {
                        wrapperRef.current.classList.remove("fouc-prevent");
                      }
                      gsap.set(child, { visibility: "visible", opacity: 1 });
                      // Ensure animation plays when entering viewport
                    },
                  },
                });
              }
            } else {
              console.warn(
                `SplitText failed for AnimatedText child ${index}:`,
                child.textContent,
              );
              allInstancesCreated = false;
            }
          } catch (error) {
            console.error(
              `Error creating SplitText for AnimatedText child ${index}:`,
              error,
            );
            allInstancesCreated = false;
          }
        });

        if (allInstancesCreated) {
          setSplitTextCreated(true);
        } else {
          // Retry after a short delay if some instances failed
          setTimeout(createSplitTextInstances, 100);
        }
      };

      // Use requestAnimationFrame and additional timeout for better timing
      requestAnimationFrame(() => {
        const additionalDelay = isHero ? 200 : 100;
        setTimeout(createSplitTextInstances, additionalDelay);
      });

      return () => {
        splitRefs.current.forEach((split) => {
          if (split) split.revert();
        });
        splitRefs.current = [];
        setSplitTextCreated(false);
      };
    },
    {
      dependencies: [
        trigger,
        start,
        toggleActions,
        stagger,
        duration,
        delay,
        ease,
        fontsReady,
        pageLoaderReady,
        isHero,
      ],
    },
  );

  return (
    <div
      ref={wrapperRef}
      className={`animated-text-wrapper fouc-prevent ${className}`}
    >
      {children}
    </div>
  );
}

export default AnimatedText;
