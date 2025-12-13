"use client";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { gsap, ScrollTrigger, SplitText, useGSAP } from "@/lib/gsapConfig";
import Logo from "./Logo";
import { ArrowRight } from "lucide-react";

function CardsScroll() {
  const mainContentRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLParagraphElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const mainRef = useRef<HTMLElement>(null); // Add ref for main section

  // Store SplitText instances and context for cleanup
  const splitTextInstancesRef = useRef<any[]>([]);
  const contextRef = useRef<gsap.Context | null>(null);

  useGSAP(
    () => {
      if (!mainRef.current) return;

      // Clean up any existing context
      if (contextRef.current) {
        contextRef.current.revert();
        contextRef.current = null;
      }

      // Track if component is still mounted
      let isMounted = true;

      // Wait for fonts to load before splitting
      const setupAnimations = () => {
        if (!isMounted || !mainRef.current) return;

        // Create GSAP context for automatic cleanup
        contextRef.current = gsap.context(() => {
          const scrollTriggerSettings = {
            trigger: mainRef.current, // Use ref instead of class selector
            start: "top 25%",
            toggleActions: "play reverse play reverse",
          };

          const leftXValues = [-800, -900, -800];
          const rightXValues = [800, 900, 800];
          const leftRotationValues = [-30, -20, -35];
          const rightRotationValues = [30, 20, 35];
          const yValues = [100, -150, -250];

          // Animate cards using GSAP transforms for smooth rendering
          gsap.utils.toArray(".row").forEach((row: any, index: number) => {
            const cardLeft = row.querySelector(".card-left");
            const cardRight = row.querySelector(".card-right");

            if (cardLeft && mainRef.current) {
              // Use GSAP's transform properties which handle sub-pixel rounding automatically
              gsap.to(cardLeft, {
                x: leftXValues[index],
                y: yValues[index],
                rotation: leftRotationValues[index],
                ease: "none",
                scrollTrigger: {
                  trigger: mainRef.current,
                  start: "top center",
                  end: "bottom top",
                  scrub: true,
                },
              });
            }

            if (cardRight && mainRef.current) {
              // Use GSAP's transform properties which handle sub-pixel rounding automatically
              gsap.to(cardRight, {
                x: rightXValues[index],
                y: yValues[index],
                rotation: rightRotationValues[index],
                ease: "none",
                scrollTrigger: {
                  trigger: mainRef.current,
                  start: "top center",
                  end: "bottom top",
                  scrub: true,
                },
              });
            }
          });

          // Modern SplitText with built-in mask
          let titleSplit: any = null;
          let descriptionSplit: any = null;

          if (titleRef.current) {
            titleSplit = SplitText.create(titleRef.current, {
              type: "lines",
              mask: "lines",
              autoSplit: true,
              aria: "none", // Disable automatic aria-label addition
              onSplit: (self: any) => {
                gsap.from(self.lines, {
                  yPercent: 100,
                  stagger: 0.15,
                  duration: 0.8,
                  ease: "power2.out",
                  scrollTrigger: scrollTriggerSettings,
                });
              },
            });
            splitTextInstancesRef.current.push(titleSplit);
          }

          if (descriptionRef.current) {
            descriptionSplit = SplitText.create(descriptionRef.current, {
              type: "lines",
              mask: "lines",
              autoSplit: true,
              aria: "none", // Disable automatic aria-label addition
              onSplit: (self: any) => {
                gsap.from(self.lines, {
                  yPercent: 100,
                  stagger: 0.1,
                  duration: 0.6,
                  ease: "power2.out",
                  delay: 0.4,
                  scrollTrigger: scrollTriggerSettings,
                });
              },
            });
            splitTextInstancesRef.current.push(descriptionSplit);
          }

          // Animate the main text content
          if (mainContentRef.current && mainRef.current) {
            ScrollTrigger.create({
              trigger: mainRef.current, // Use ref instead of class selector
              start: "top center",
              end: "bottom top",
              scrub: true,
              animation: gsap.to(mainContentRef.current, {
                y: -100,
                ease: "none",
              }),
            });
          }
        }, mainRef); // Scope context to mainRef for automatic cleanup
      };

      // Check if fonts are already loaded
      if (document.fonts.status === "loaded") {
        setupAnimations();
      } else {
        document.fonts.ready.then(setupAnimations);
      }

      // Cleanup function
      return () => {
        isMounted = false;

        // Revert GSAP context (automatically cleans up all animations and ScrollTriggers)
        if (contextRef.current) {
          contextRef.current.revert();
          contextRef.current = null;
        }

        // Properly clean up SplitText instances (needed for revert)
        splitTextInstancesRef.current.forEach((splitInstance) => {
          if (splitInstance && splitInstance.revert) {
            splitInstance.revert();
          }
        });
        splitTextInstancesRef.current = [];
      };
    },
    { scope: mainRef },
  );

  const generateRows = () => {
    const cardImages = [
      "card-cacheradiateur",
      "card-rondin",
      "card-copeaux",
      "card-oak",
      "card-plan",
      "card-poutre",
    ];

    const rows = [];
    for (let i = 1; i <= 3; i++) {
      rows.push(
        <div className="row m-4 flex w-full justify-center gap-4" key={i}>
          <div
            className="card card-left relative h-[240px] w-[50%] overflow-hidden rounded-sm will-change-transform md:h-[360px] md:w-[40%]"
            style={{
              backfaceVisibility: "hidden",
              transformStyle: "preserve-3d",
            }}
          >
            <Image
              src={`/images/${cardImages[2 * i - 2]}.webp`}
              alt={`Réalisation ${2 * i - 1} - Meubles en bois sur mesure par Nemwood, menuisier artisan en Belgique`}
              fill
              sizes="(max-width: 768px) 50vw, 40vw"
              className="object-cover"
              loading="lazy"
            />
          </div>
          <div
            className="card card-right relative h-[240px] w-[50%] overflow-hidden rounded-sm will-change-transform md:h-[360px] md:w-[40%]"
            style={{
              backfaceVisibility: "hidden",
              transformStyle: "preserve-3d",
            }}
          >
            <Image
              src={`/images/${cardImages[2 * i - 1]}.webp`}
              alt={`Réalisation ${2 * i} - Mobilier artisanal en bois massif créé par Nemwood en Belgique`}
              fill
              sizes="(max-width: 768px) 50vw, 40vw"
              className="object-cover"
              loading="lazy"
            />
          </div>
        </div>,
      );
    }
    return rows;
  };

  return (
    <div>
      <section
        ref={mainRef} // Add ref to main section
        className="main border-primary relative flex h-[100vh] w-full flex-col items-center justify-center overflow-hidden border-b pt-20 text-center md:h-[140vh]"
        // style={{ height: "140vh" }}
      >
        <div
          className="main-content absolute top-1/2 flex w-full -translate-y-1/2 flex-col items-center justify-center px-4 md:px-8"
          ref={mainContentRef}
        >
          <div className="copy text-primary flex flex-col items-center justify-center">
            <h2 className="text-5xl md:text-7xl" ref={titleRef}>
              Nos spécialités <br />
              artisanales
            </h2>
            <p
              ref={descriptionRef}
              className="font-HelveticaNow mx-auto mt-8 text-lg md:max-w-lg"
            >
              Découvrez notre gamme complète : escaliers sur mesure, garde-robes
              personnalisées, cuisines uniques et tables en bois massif. Chaque
              création est pensée pour s'harmoniser parfaitement avec votre
              intérieur.
            </p>
            <Link href="/services">
              <button className="font-HelveticaNow mt-10">
                <div className="border-primary hover:bg-primary hover:text-secondary flex cursor-pointer items-center border border-solid px-4 py-2 transition-colors duration-300 ease-in-out">
                  <span>En savoir plus</span>
                  <div className="mt-0.5 ml-1">
                    <ArrowRight size={18} strokeWidth={1.5} />
                  </div>
                </div>
              </button>
            </Link>
          </div>
        </div>
        {generateRows()}
      </section>
    </div>
  );
}

export default CardsScroll;
