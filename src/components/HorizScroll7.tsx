"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const HorizScroll: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);

  // Data for sections
  const sections = [
    {
      title: "Escaliers",
      description:
        "Vous cherchez un artisan menuisier en Belgique pour créer des meubles en bois sur mesure ? Nemwood est spécialisé dans la fabrication artisanale de tables, chaises, garde-robes, escaliers et même de décors pour le cinéma.",
      image: "/images/stairs.webp",
    },
    {
      title: "Garde-robes",
      description:
        "Vous cherchez un artisan menuisier en Belgique pour créer des meubles en bois sur mesure ? Nemwood est spécialisé dans la fabrication artisanale de tables, chaises, garde-robes, escaliers et même de décors pour le cinéma.",
      image: "/images/wardrobe.webp",
    },
    {
      title: "Tables",
      description:
        "Vous cherchez un artisan menuisier en Belgique pour créer des meubles en bois sur mesure ? Nemwood est spécialisé dans la fabrication artisanale de tables, chaises, garde-robes, escaliers et même de décors pour le cinéma.",
      image: "/images/table.webp",
    },
    {
      title: "Cuisines",
      description:
        "Vous cherchez un artisan menuisier en Belgique pour créer des meubles en bois sur mesure ? Nemwood est spécialisé dans la fabrication artisanale de tables, chaises, garde-robes, escaliers et même de décors pour le cinéma.",
      image: "/images/kitchen.webp",
    },
  ];

  useGSAP(
    () => {
      // Only run horizontal scroll animation on desktop (md and up)
      if (
        window.innerWidth < 768 ||
        !containerRef.current ||
        !scrollerRef.current
      )
        return;

      // Force refresh ScrollTrigger to work properly with Lenis
      ScrollTrigger.refresh();

      const scrollWidth = scrollerRef.current.scrollWidth;
      const viewportWidth = window.innerWidth;

      // Calculate the distance to scroll (total width - viewport width)
      const scrollDistance = scrollWidth - viewportWidth;

      // Create the horizontal scroll animation
      const horizontalScrollAnimation = gsap.to(scrollerRef.current, {
        x: -scrollDistance,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: `+=${scrollDistance}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          //@ts-ignore
          normalizeScroll: true,
        },
      });

      // Cleanup function is handled by useGSAP
    },
    { scope: containerRef },
  );

  return (
    <>
      {/* Mobile Layout */}
      <div className="text-primary block w-full py-8 md:hidden">
        <div className="space-y-8 px-4">
          {sections.map((section, index) => (
            <div
              key={index}
              className="group bg-secondary relative cursor-pointer overflow-hidden rounded-sm transition-shadow duration-300 hover:shadow-xl"
            >
              {/* Image at the top */}
              <div className="aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={section.image}
                  alt={section.title}
                  width={1000}
                  height={800}
                  className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  priority={index === 0}
                  // priority
                />
              </div>

              {/* Content below the image */}
              <div className="mt-6">
                <p className="font-HelveticaNow text-primary/70 mb-3 text-xs tracking-wider uppercase">
                  ABOUT
                </p>
                <h2 className="font-ITCGaramondN text-primary mb-4 text-5xl leading-tight">
                  {section.title}
                </h2>
                <p className="font-HelveticaNow text-primary/80 text-base leading-relaxed">
                  {section.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop Layout */}
      <div
        ref={containerRef}
        className="text-primary hidden h-screen w-full overflow-hidden md:block"
      >
        <div
          ref={scrollerRef}
          className="flex h-full"
          style={{ width: "400vw" }}
        >
          {sections.map((section, index) => (
            <div
              key={index}
              className="scroll-section flex h-full w-screen flex-col md:flex-row"
            >
              <div className="flex h-full w-1/2 flex-col justify-between pt-30 pb-20 pl-4 md:pl-8">
                <div>
                  <p className="font-HelveticaNow text-primary/70 text-sm leading-tight">
                    ABOUT
                  </p>
                  <h3 className="font-ITCGaramondN mt-8 mb-4 text-8xl">
                    {section.title}
                  </h3>
                </div>
                <p className="font-HelveticaNow w-1/2 text-lg leading-tight">
                  {section.description}
                </p>
              </div>

              <div className="group h-full w-1/2 cursor-pointer overflow-hidden">
                <Image
                  src={section.image}
                  alt={section.title}
                  width={1000}
                  height={800}
                  className="parallax-image h-full w-[160%] object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                  priority={index === 0}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default HorizScroll;
