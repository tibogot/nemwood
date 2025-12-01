"use client";

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import AnimatedText from "./AnimatedText3";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    name: "Sophie Dubois",
    text: `L'équipe de Nemwood a créé une cuisine sur mesure qui dépasse toutes nos attentes. Chaque détail a été pensé avec soin et l'artisanat est d'une qualité exceptionnelle.`,
    image: "/images/profile-1.webp",
  },
  {
    name: "Marc Lefevre",
    text: `Notre escalier en bois massif est devenu la pièce maîtresse de notre maison. Un travail d'orfèvre qui allie beauté et fonctionnalité.`,
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

  // Update container height dynamically to handle viewport changes
  useEffect(() => {
    const updateHeight = () => {
      if (containerRef.current) {
        // Use the actual viewport height
        const vh = window.innerHeight;
        containerRef.current.style.height = `${vh}px`;
        // Refresh ScrollTrigger to recalculate
        ScrollTrigger.refresh();
      }
    };

    // Set initial height
    updateHeight();

    // Update on resize and orientation change
    window.addEventListener("resize", updateHeight);
    window.addEventListener("orientationchange", updateHeight);

    // Also listen for visual viewport changes (mobile browser UI show/hide)
    if (window.visualViewport) {
      window.visualViewport.addEventListener("resize", updateHeight);
    }

    return () => {
      window.removeEventListener("resize", updateHeight);
      window.removeEventListener("orientationchange", updateHeight);
      if (window.visualViewport) {
        window.visualViewport.removeEventListener("resize", updateHeight);
      }
    };
  }, []);

  useGSAP(
    () => {
      const ctx = gsap.context(() => {
        const cards = gsap.utils.toArray(".testimonial-card") as HTMLElement[];

        // Set initial state for all cards with varied starting rotations
        cards.forEach((card, i) => {
          // Start with more extreme rotations that are clearly different from final positions
          const initialRotation =
            i === 0 ? -25 : i === 1 ? 20 : i === 2 ? -30 : 25; // More varied starting rotations
          gsap.set(card, {
            y: "100vh",
            scale: 0.95,
            rotation: initialRotation,
          });
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
            invalidateOnRefresh: true, // Recalculate on viewport changes
          },
        });

        // Animate each card one by one with alternating rotations for natural stack look
        cards.forEach((card, i) => {
          // Create alternating rotations: left, right, left, right... (opposite of static card)
          const rotationDirection = i % 2 === 0 ? -1 : 1; // Start with left rotation to contrast static card
          // Increase rotation differences for more obvious animations
          const rotationAmount =
            i === 0 ? -8 : i === 1 ? 10 : i === 2 ? -12 : 18; // -8, 10, -12, 18 degrees

          tl.to(
            card,
            {
              y: 0,
              // opacity: 1,
              scale: 1,
              rotation: rotationAmount,
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
        className="bg-secondary relative overflow-hidden px-4 pt-4 text-white md:px-8 md:py-30"
        style={{ height: "100vh" }}
      >
        <Image
          src="/images/testimonial.webp"
          alt="Random from Picsum"
          fill
          className="rounded-sm object-cover"
          sizes="(max-width: 768px) 100vw, 80vw"
          // priority
          loading="lazy"
        />
        <AnimatedText delay={0.0} stagger={0.3}>
          <h2 className="font-ITCGaramondN text-primary relative text-5xl leading-tight md:text-7xl">
            Témoignages
          </h2>
        </AnimatedText>
        {/* <Image
          className="relative h-auto w-full"
          src="/logonew4.svg"
          alt="Logo"
          width={1200} // use a large width for SVG
          height={300} // adjust height proportionally
          quality={100}
          // priority
        /> */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative">
            {/* Static first card - always visible */}
            <div
              className="border-primary bg-secondary absolute top-1/2 left-1/2 flex h-[400px] w-[320px] flex-col rounded-sm border p-6 shadow-lg md:h-[450px] md:w-[350px]"
              style={{
                zIndex: 0,
                transform: "translate(-50%, -50%) rotate(2deg)",
              }}
            >
              {/* Main content - blockquote takes up most space */}
              <div className="flex flex-1 items-center justify-center">
                <blockquote className="font-HelveticaNow text-primary text-center text-base leading-relaxed md:text-lg md:leading-tight">
                  <span className="font-HelveticaNow text-5xl">&ldquo;</span>
                  {staticTestimonial.text}
                  <span className="font-HelveticaNow inline-block align-top text-5xl leading-none">
                    &rdquo;
                  </span>
                </blockquote>
              </div>

              {/* Bottom section with profile image and name */}
              <div className="mt-4 flex flex-col items-center space-y-3 border-t pt-4">
                <div className="relative h-12 w-12 md:h-14 md:w-14">
                  <Image
                    src={staticTestimonial.image}
                    alt={staticTestimonial.name}
                    fill
                    className="border-primary/20 rounded-full border-2 object-cover"
                    sizes="(max-width: 768px) 48px, 56px"
                    quality={85}
                    onError={(e) => {
                      // Fallback to a default avatar if image fails to load
                      const target = e.target as HTMLImageElement;
                      target.style.display = "none";
                      const fallback = document.createElement("div");
                      fallback.className =
                        "border-primary/20 h-12 w-12 md:h-14 md:w-14 rounded-full border-2 bg-primary/10 flex items-center justify-center";
                      fallback.innerHTML = `<span class="text-primary text-xs font-bold">${staticTestimonial.name.charAt(0)}</span>`;
                      target.parentNode?.appendChild(fallback);
                    }}
                  />
                </div>
                <p className="font-HelveticaNow text-primary text-center text-xs tracking-wide uppercase md:text-sm">
                  {staticTestimonial.name}
                </p>
              </div>
            </div>

            {/* Animated cards */}
            {testimonials.map((testimonial, i) => (
              <div
                key={i}
                className="testimonial-card border-primary bg-secondary absolute top-1/2 left-1/2 flex h-[400px] w-[320px] -translate-x-1/2 -translate-y-1/2 flex-col rounded-sm border p-6 shadow-lg md:h-[450px] md:w-[350px]"
                style={{ zIndex: i + 1 }}
              >
                {/* Main content - blockquote takes up most space */}
                <div className="flex flex-1 items-center justify-center">
                  <blockquote className="font-HelveticaNow text-primary text-center text-base leading-relaxed md:text-lg md:leading-tight">
                    <span className="font-HelveticaNow text-5xl">“</span>
                    {testimonial.text}
                    <span className="font-HelveticaNow inline-block align-top text-5xl leading-none">
                      “
                    </span>
                  </blockquote>
                </div>

                {/* Bottom section with profile image and name */}
                <div className="mt-4 flex flex-col items-center space-y-3 border-t pt-4">
                  <div className="relative h-12 w-12 md:h-14 md:w-14">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="border-primary/20 rounded-full border-2 object-cover"
                      sizes="(max-width: 768px) 48px, 56px"
                      quality={85}
                      onError={(e) => {
                        // Fallback to a default avatar if image fails to load
                        const target = e.target as HTMLImageElement;
                        target.style.display = "none";
                        const fallback = document.createElement("div");
                        fallback.className =
                          "border-primary/20 h-12 w-12 md:h-14 md:w-14 rounded-full border-2 bg-primary/10 flex items-center justify-center";
                        fallback.innerHTML = `<span class="text-primary text-xs font-bold">${testimonial.name.charAt(0)}</span>`;
                        target.parentNode?.appendChild(fallback);
                      }}
                    />
                  </div>
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
