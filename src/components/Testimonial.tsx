"use client";

import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    name: "Rachel Bornstein",
    text: `Oyom has been shaped by kindred spirits, a community of sorts, all seekers themselves, with a deep desire to create and experience a healthier world.`,
    image: "https://picsum.photos/id/1011/400/300",
  },
  {
    name: "James Carter",
    text: `This community changed my life! It's like a warm hug for the soul.`,
    image: "https://picsum.photos/id/1027/400/300",
  },
  {
    name: "Lena Smith",
    text: `A place of growth, healing, and connection.`,
    image: "https://picsum.photos/id/1005/400/300",
  },
];

export default function Testimonial() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const ctx = gsap.context(() => {
        const cards = gsap.utils.toArray(".testimonial-card") as HTMLElement[];

        // Set initial state for all cards
        gsap.set(cards, {
          y: "100vh",
          // opacity: 0,
          scale: 0.8,
          rotation: 0,
        });

        // Create the main timeline with ScrollTrigger
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: `+=${cards.length * 100}%`,
            scrub: 1,
            pin: true,
            anticipatePin: 1,
          },
        });

        // Animate each card one by one
        cards.forEach((card, i) => {
          tl.to(
            card,
            {
              y: 0,
              // opacity: 1,
              scale: 1,
              rotation: (i - 1) * 3, // Slight rotation for stacking effect
              duration: 1,
              ease: "power2.out",
            },
            i * 0.5, // Stagger the animations
          );
        });
      }, containerRef);

      return () => ctx.revert();
    },
    { scope: containerRef },
  );

  return (
    <>
      <section
        ref={containerRef}
        className="bg-secondary relative h-[100vh] overflow-hidden px-4 py-30 text-white md:px-8"
      >
        <Image
          src="/images/testimonial.webp"
          alt="Random from Picsum"
          fill
          className="rounded-sm object-cover"
          sizes="(max-width: 768px) 100vw, 80vw"
          priority
        />
        {/* <h1 className="font-ITCGaramondN text-secondary relative text-6xl md:text-8xl">
          Témoignages clients
        </h1> */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative">
            {testimonials.map((testimonial, i) => (
              <div
                key={i}
                className="testimonial-card border-primary bg-secondary absolute top-1/2 left-1/2 flex h-[450px] w-[350px] -translate-x-1/2 -translate-y-1/2 flex-col rounded-sm border p-6 shadow-2xl"
                style={{ zIndex: i + 1 }}
              >
                <div className="flex-1">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="h-48 w-full rounded-sm object-cover"
                  />
                  <blockquote className="font-NHD text-primary mt-6 text-center text-lg leading-tight">
                    “ {testimonial.text} “
                  </blockquote>
                </div>
                <div className="mt-4 border-t pt-4">
                  <p className="font-NHD text-primary text-center text-sm uppercase">
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
