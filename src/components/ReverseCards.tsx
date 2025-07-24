"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function ReverseCards() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftCardRef = useRef<HTMLDivElement>(null);
  const rightCardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!leftCardRef.current || !rightCardRef.current || !sectionRef.current)
      return;

    // Set initial positions (cards start spread out and rotated)
    gsap.set(leftCardRef.current, {
      x: -400,
      y: 200,
      rotation: -25,
      transformOrigin: "center center",
    });

    gsap.set(rightCardRef.current, {
      x: 400,
      y: 200,
      rotation: 25,
      transformOrigin: "center center",
    });

    // Animate cards to center on scroll
    const leftAnimation = gsap.to(leftCardRef.current, {
      x: 0,
      y: 0,
      rotation: 0,
      ease: "power2.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        end: "top 20%",
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress;
          if (leftCardRef.current) {
            leftCardRef.current.style.transform = `translateX(${-400 + progress * 400}px) translateY(${200 - progress * 200}px) rotate(${-25 + progress * 25}deg)`;
          }
        },
      },
    });

    const rightAnimation = gsap.to(rightCardRef.current, {
      x: 0,
      y: 0,
      rotation: 0,
      ease: "power2.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        end: "top 20%",
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress;
          if (rightCardRef.current) {
            rightCardRef.current.style.transform = `translateX(${400 - progress * 400}px) translateY(${200 - progress * 200}px) rotate(${25 - progress * 25}deg)`;
          }
        },
      },
    });

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        trigger.kill();
      });
    };
  }, []);

  return (
    <div>
      <section
        ref={sectionRef}
        className="text-primary border-b-primary flex h-[600px] w-full flex-col gap-10 overflow-hidden border-b border-solid px-4 pt-0 pb-20 md:h-[600px] md:flex-row md:px-8"
      >
        {/* Left Card */}
        <div
          ref={leftCardRef}
          className="left relative flex flex-col will-change-transform md:w-1/2"
        >
          {/* Image Container */}
          <div className="absolute inset-0 h-full w-full overflow-hidden rounded-sm bg-amber-400 select-none">
            <Image
              src="/images/woman-garden.webp"
              alt=""
              width={1000}
              height={800}
              className="h-full w-full object-cover transition-transform duration-500 ease-out hover:scale-110"
              priority
            />
          </div>

          {/* Text over Image */}
          <div className="z-10 mt-auto p-6 text-left text-white">
            <h2 className="font-ITCGaramondN text-5xl">Lights</h2>
            <p className="text-sm">
              This is a small description for the left card.
            </p>
            <button className="font-HelveticaNow mt-4">
              <div className="border-secondary hover:border-primary hover:bg-primary hover:text-secondary flex cursor-pointer items-center border border-solid px-4 py-2 transition-colors duration-300 ease-in-out">
                <span>Read more</span>
                <div className="mt-0.5 ml-1">
                  <ArrowRight size={18} strokeWidth={1.5} />
                </div>
              </div>
            </button>
          </div>
        </div>

        {/* Right Card */}
        <div
          ref={rightCardRef}
          className="right relative flex flex-col will-change-transform md:w-1/2"
        >
          {/* Image Container */}
          <div className="absolute inset-0 h-full w-full overflow-hidden rounded-sm bg-amber-400 select-none">
            <Image
              src="/images/dress.webp"
              alt=""
              width={1000}
              height={800}
              className="h-full w-full object-cover transition-transform duration-500 ease-out hover:scale-110"
              priority
            />
          </div>

          {/* Text over Image */}
          <div className="z-10 mt-auto p-6 text-left text-white">
            <h2 className="font-ITCGaramondN text-5xl">Tables</h2>
            <p className="text-sm">
              This is a small description for the left card.
            </p>
            <button className="font-HelveticaNow mt-4">
              <div className="border-secondary hover:border-primary hover:bg-primary hover:text-secondary flex cursor-pointer items-center border border-solid px-4 py-2 transition-colors duration-300 ease-in-out">
                <span>Read more</span>
                <div className="mt-0.5 ml-1">
                  <ArrowRight size={18} strokeWidth={1.5} />
                </div>
              </div>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ReverseCards;
