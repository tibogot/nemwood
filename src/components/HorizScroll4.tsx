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

  useGSAP(
    () => {
      if (!containerRef.current || !scrollerRef.current) return;

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

      // Parallax effect for images - they move at a different speed
      const images = gsap.utils.toArray<HTMLElement>(".parallax-image");
      images.forEach((image, index) => {
        gsap.to(image, {
          x: -60, // Lower parallax movement to avoid gaps
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: `+=${scrollDistance}`,
            scrub: 2, // Different scrub value for parallax effect
            invalidateOnRefresh: true,
            //@ts-ignore
            normalizeScroll: true,
          },
        });
      });

      // Cleanup function is handled by useGSAP
    },
    { scope: containerRef },
  );

  return (
    <div
      ref={containerRef}
      className="h-screen w-full overflow-hidden text-[#89402C]"
    >
      <div ref={scrollerRef} className="flex h-full" style={{ width: "400vw" }}>
        {/* Section 1 */}
        <div className="scroll-section flex h-full w-screen flex-col md:flex-row">
          <div className="flex h-full w-1/2 flex-col justify-between pt-30 pb-20 pl-4 md:pl-8">
            <div>
              <p className="font-HelveticaNow text-lg leading-tight">ABOUT</p>
              <h2 className="font-ITCGaramondN mt-8 mb-4 text-8xl">
                Escaliers
              </h2>
            </div>
            <p className="font-HelveticaNow w-1/2 text-lg leading-tight">
              Vous cherchez un artisan menuisier en Belgique pour créer des
              meubles en bois sur mesure ? Nemwood est spécialisé dans la
              fabrication artisanale de tables, chaises, garde-robes, escaliers
              et même de décors pour le cinéma.
            </p>
          </div>

          <div className="h-full w-1/2 overflow-hidden">
            <Image
              src="https://picsum.photos/1000/800?random=1"
              alt="Creative Design"
              width={1000}
              height={800}
              className="parallax-image h-full w-[160%] object-cover"
            />
          </div>
        </div>

        {/* Section 2 */}
        <div className="scroll-section flex h-full w-screen">
          <div className="flex h-full w-1/2 flex-col justify-between pt-30 pb-20 pl-4 md:pl-8">
            <div>
              <p className="font-HelveticaNow text-lg leading-tight">ABOUT</p>
              <h2 className="font-ITCGaramondN mt-8 mb-4 text-8xl">
                Garde-robes
              </h2>
            </div>
            <p className="font-HelveticaNow w-1/2 text-lg leading-tight">
              Vous cherchez un artisan menuisier en Belgique pour créer des
              meubles en bois sur mesure ? Nemwood est spécialisé dans la
              fabrication artisanale de tables, chaises, garde-robes, escaliers
              et même de décors pour le cinéma.
            </p>
          </div>

          <div className="h-full w-1/2 overflow-hidden">
            <Image
              src="https://picsum.photos/1000/800?random=2"
              alt="Creative Design"
              width={1000}
              height={800}
              className="parallax-image h-full w-[160%] object-cover"
            />
          </div>
        </div>

        {/* Section 3 */}
        <div className="scroll-section flex h-full w-screen">
          <div className="flex h-full w-1/2 flex-col justify-between pt-30 pb-20 pl-4 md:pl-8">
            <div>
              <p className="font-HelveticaNow text-lg leading-tight">ABOUT</p>
              <h2 className="font-ITCGaramondN mt-8 mb-4 text-8xl">Tables</h2>
            </div>
            <p className="font-HelveticaNow w-1/2 text-lg leading-tight">
              Vous cherchez un artisan menuisier en Belgique pour créer des
              meubles en bois sur mesure ? Nemwood est spécialisé dans la
              fabrication artisanale de tables, chaises, garde-robes, escaliers
              et même de décors pour le cinéma.
            </p>
          </div>

          <div className="h-full w-1/2 overflow-hidden">
            <Image
              src="https://picsum.photos/1000/800?random=3"
              alt="Creative Design"
              width={1000}
              height={800}
              className="parallax-image h-full w-[160%] object-cover"
            />
          </div>
        </div>

        {/* Section 4 */}
        <div className="scroll-section flex h-full w-screen">
          <div className="flex h-full w-1/2 flex-col justify-between pt-30 pb-20 pl-4 md:pl-8">
            <div>
              <p className="font-HelveticaNow text-lg leading-tight">ABOUT</p>
              <h2 className="font-ITCGaramondN mt-8 mb-4 text-8xl">Cuisines</h2>
            </div>
            <p className="font-HelveticaNow w-1/2 text-lg leading-tight">
              Vous cherchez un artisan menuisier en Belgique pour créer des
              meubles en bois sur mesure ? Nemwood est spécialisé dans la
              fabrication artisanale de tables, chaises, garde-robes, escaliers
              et même de décors pour le cinéma.
            </p>
          </div>

          <div className="h-full w-1/2 overflow-hidden">
            <Image
              src="https://picsum.photos/1000/800?random=4"
              alt="Creative Design"
              width={1000}
              height={800}
              className="parallax-image h-full w-[160%] object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HorizScroll;
