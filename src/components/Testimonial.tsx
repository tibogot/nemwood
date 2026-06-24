"use client";

import React, { useRef, useEffect, useState } from "react";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsapConfig";
import Image from "next/image";
import AnimatedText from "./AnimatedText3";

const testimonials = [
  {
    name: "Caroline Y",
    text: `Nous tenons a te remercier pour le magnifique travail que tu as fait chez nous et pour ta gentillesse. `,
    image: "/images/profile-1.webp",
  },
  {
    name: "Catherine Orléans",
    text: ` Nous sommes ravis du rendu de la table. C' est exactement ce que nous voulions et maintenant nous pouvons en profiter. Un grand merci ! `,
    image: "/images/profile-2.webp",
  },
  {
    name: "Claire Martinez",
    text: `Des garde-robes parfaitement intégrées qui optimisent notre espace. Le savoir-faire traditionnel au service du design contemporain.`,
    image: "/images/profile-3.webp",
  },
];

// Static first card that's always visible
const staticTestimonial = {
  name: "Marie Dubois",
  text: `Un travail exceptionnel qui allie tradition et modernité. Nemwood a su transformer notre vision en réalité avec un savoir-faire remarquable.`,
  image: "/images/profile-1.webp",
};

export default function Testimonial() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [pinReady, setPinReady] = useState(false);

  // Defer pin ScrollTrigger until the section is near the viewport.
  // Creating pinned sections far below while the user is in the horizontal
  // scroll used to trigger a global refresh and jump the page to here.
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setPinReady(true);
          observer.disconnect();
        }
      },
      { rootMargin: "100% 0px 100% 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useGSAP(
    () => {
      if (!pinReady) return;

      const ctx = gsap.context(() => {
        const cards = gsap.utils.toArray(".testimonial-card") as HTMLElement[];

        // Set initial state for all cards with varied starting rotations
        cards.forEach((card, i) => {
          const initialRotation =
            i === 0 ? -25 : i === 1 ? 20 : i === 2 ? -30 : 25;
          gsap.set(card, {
            y: "100vh",
            scale: 0.95,
            rotation: initialRotation,
          });
        });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: `+=${cards.length * 100}%`,
            scrub: 1,
            pin: true,
            invalidateOnRefresh: true,
          },
        });

        cards.forEach((card, i) => {
          const rotationAmount =
            i === 0 ? -8 : i === 1 ? 10 : i === 2 ? -12 : 18;

          tl.to(
            card,
            {
              y: 0,
              scale: 1,
              rotation: rotationAmount,
              duration: 1,
              ease: "power2.out",
            },
            i * 0.5,
          );
        });
      }, containerRef);

      return () => ctx.revert();
    },
    { scope: containerRef, dependencies: [pinReady] },
  );

  return (
    <>
      <section
        ref={containerRef}
        className="bg-secondary relative overflow-hidden px-4 pt-4 text-white md:px-8 md:py-30"
        style={{ height: "100dvh", minHeight: "100vh" }}
      >
        <Image
          src="/images/radiateur.jpg"
          alt="Random from Picsum"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 80vw"
          loading="lazy"
        />
        <AnimatedText delay={0.0} stagger={0.3}>
          <h2 className="font-ITCGaramondN relative mt-16 text-5xl leading-tight text-[#fffcf5] md:mt-0 md:text-7xl">
            Témoignages
          </h2>
        </AnimatedText>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative">
            {/* Static first card - always visible */}
            <div
              className="border-primary bg-secondary absolute top-1/2 left-1/2 flex h-[400px] w-[85vw] max-w-[320px] flex-col rounded-sm border p-6 shadow-lg md:h-[450px] md:max-w-[350px]"
              style={{
                zIndex: 0,
                transform: "translate(-50%, -50%) rotate(2deg)",
              }}
            >
              <div className="flex flex-1 items-center justify-center">
                <blockquote className="font-HelveticaNow text-primary text-center text-base leading-relaxed md:text-lg md:leading-tight">
                  <span className="font-HelveticaNow text-5xl">&ldquo;</span>
                  {staticTestimonial.text}
                  <span className="font-HelveticaNow inline-block align-top text-5xl leading-none">
                    &rdquo;
                  </span>
                </blockquote>
              </div>

              <div className="mt-4 flex flex-col items-center space-y-3 border-t pt-4">
                <p className="font-HelveticaNow text-primary text-center text-xs tracking-wide uppercase md:text-sm">
                  {staticTestimonial.name}
                </p>
              </div>
            </div>

            {/* Animated cards */}
            {testimonials.map((testimonial, i) => (
              <div
                key={i}
                className="testimonial-card border-primary bg-secondary absolute top-1/2 left-1/2 flex h-[400px] w-[85vw] max-w-[320px] -translate-x-1/2 -translate-y-1/2 flex-col rounded-sm border p-6 shadow-lg md:h-[450px] md:max-w-[350px]"
                style={{ zIndex: i + 1 }}
              >
                <div className="flex flex-1 items-center justify-center">
                  <blockquote className="font-HelveticaNow text-primary text-center text-base leading-relaxed md:text-lg md:leading-tight">
                    <span className="font-HelveticaNow text-5xl">“</span>
                    {testimonial.text}
                    <span className="font-HelveticaNow inline-block align-top text-5xl leading-none">
                      “
                    </span>
                  </blockquote>
                </div>

                <div className="mt-4 flex flex-col items-center space-y-3 border-t pt-4">
                  <p className="font-HelveticaNow text-primary text-center text-xs tracking-wide uppercase md:text-sm">
                    {testimonial.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
