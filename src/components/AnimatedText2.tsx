"use client";
import { useRef, ReactNode } from "react";
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
  const splitRefs = useRef<any[]>([]); // Store all SplitText instances for cleanup

  useGSAP(
    () => {
      if (!wrapperRef.current) return;

      // Wait for fonts to load before splitting
      document.fonts.ready.then(() => {
        splitRefs.current = [];

        const children = Array.from(
          //@ts-ignore
          wrapperRef.current.children,
        ) as HTMLElement[];

        children.forEach((child) => {
          const split = SplitText.create(child, {
            type: "lines",
            mask: "lines",
            autoSplit: true,
          });

          splitRefs.current.push(split);

          gsap.from(split.lines, {
            yPercent: 100,
            stagger,
            duration,
            ease,
            delay,
            scrollTrigger: {
              trigger: trigger || child,
              start,
              toggleActions,
            },
          });
        });
      });

      return () => {
        splitRefs.current.forEach((split) => split.revert());
        splitRefs.current = [];
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
