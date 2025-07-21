"use client";
import { useRef, ReactNode } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

interface AnimatedTextProps {
  children: ReactNode;
  trigger?: string | HTMLElement; // Custom trigger element
  start?: string; // ScrollTrigger start position
  toggleActions?: string; // ScrollTrigger toggle actions
  stagger?: number; // Stagger between lines
  duration?: number; // Animation duration
  delay?: number; // Animation delay
  ease?: string; // Animation ease
  className?: string; // Additional CSS classes for wrapper
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
}: AnimatedTextProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const splitRef = useRef<any>(null);

  useGSAP(
    () => {
      // Wait for fonts to load before splitting
      document.fonts.ready.then(() => {
        if (!wrapperRef.current) return;

        const scrollTriggerSettings = {
          trigger: trigger || wrapperRef.current,
          start,
          toggleActions,
        };

        // Create SplitText with built-in mask on all text content inside wrapper
        splitRef.current = SplitText.create(wrapperRef.current, {
          type: "lines",
          mask: "lines",
          autoSplit: true,
          onSplit: (self: any) => {
            // Animate lines using the mask
            return gsap.from(self.lines, {
              yPercent: 100,
              stagger,
              duration,
              ease,
              delay,
              scrollTrigger: scrollTriggerSettings,
            });
          },
        });
      });

      // Cleanup function
      return () => {
        if (splitRef.current) {
          splitRef.current.revert();
          splitRef.current = null;
        }
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
      ],
    },
  );

  return (
    <div ref={wrapperRef} className={className}>
      {children}
    </div>
  );
}

export default AnimatedText;
