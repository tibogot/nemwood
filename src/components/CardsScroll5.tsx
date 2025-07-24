"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

function CardsScroll() {
  const mainContentRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLParagraphElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    // Wait for fonts to load before splitting
    document.fonts.ready.then(() => {
      const scrollTriggerSettings = {
        trigger: ".main",
        start: "top 25%",
        toggleActions: "play reverse play reverse",
      };

      const leftXValues = [-800, -900, -800];
      const rightXValues = [800, 900, 800];
      const leftRotationValues = [-30, -20, -35];
      const rightRotationValues = [30, 20, 35];
      const yValues = [100, -150, -400];

      // Animate cards
      gsap.utils.toArray(".row").forEach((row: any, index: number) => {
        const cardLeft = row.querySelector(".card-left");
        const cardRight = row.querySelector(".card-right");

        if (cardLeft) {
          gsap.to(cardLeft, {
            x: leftXValues[index],
            scrollTrigger: {
              trigger: ".main",
              start: "top center",
              end: "150% bottom",
              scrub: true,
              onUpdate: (self) => {
                const progress = self.progress;
                cardLeft.style.transform = `translateX(${progress * leftXValues[index]}px) translateY(${progress * yValues[index]}px) rotate(${progress * leftRotationValues[index]}deg)`;
              },
            },
          });
        }

        if (cardRight) {
          gsap.to(cardRight, {
            x: rightXValues[index],
            scrollTrigger: {
              trigger: ".main",
              start: "top center",
              end: "150% bottom",
              scrub: true,
              onUpdate: (self) => {
                const progress = self.progress;
                cardRight.style.transform = `translateX(${progress * rightXValues[index]}px) translateY(${progress * yValues[index]}px) rotate(${progress * rightRotationValues[index]}deg)`;
              },
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
          mask: "lines", // Use built-in mask instead of clip-path
          autoSplit: true,
          onSplit: (self: any) => {
            // Animate lines using the mask
            return gsap.from(self.lines, {
              yPercent: 100,
              stagger: 0.15,
              duration: 0.8,
              ease: "power2.out",
              scrollTrigger: scrollTriggerSettings,
            });
          },
        });
      }

      if (descriptionRef.current) {
        descriptionSplit = SplitText.create(descriptionRef.current, {
          type: "lines",
          mask: "lines", // Use built-in mask instead of clip-path
          autoSplit: true,
          onSplit: (self: any) => {
            // Animate lines with delay using the mask
            return gsap.from(self.lines, {
              yPercent: 100,
              stagger: 0.1,
              duration: 0.6,
              ease: "power2.out",
              delay: 0.4,
              scrollTrigger: scrollTriggerSettings,
            });
          },
        });
      }

      // Animate the main text content to stay centered relative to the moving cards
      gsap.to(".main-content", {
        y: -100,
        scrollTrigger: {
          trigger: ".main",
          start: "top center",
          end: "150% bottom",
          scrub: true,
        },
      });

      // Cleanup function
      return () => {
        // Kill all ScrollTriggers
        ScrollTrigger.getAll().forEach((trigger) => {
          trigger.kill();
        });

        // Properly clean up SplitText instances
        if (titleSplit) {
          titleSplit.revert();
        }
        if (descriptionSplit) {
          descriptionSplit.revert();
        }
      };
    }); // End of document.fonts.ready.then()
  }, []);

  const generateRows = () => {
    const rows = [];
    for (let i = 1; i <= 3; i++) {
      rows.push(
        <div className="row m-4 flex w-full justify-center gap-4" key={i}>
          <div className="card card-left h-[240px] w-[50%] overflow-hidden rounded-sm will-change-transform md:h-[360px] md:w-[40%]">
            <img
              src={`/img-${2 * i - 1}.jpg`}
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
          <div className="card card-right h-[240px] w-[50%] overflow-hidden rounded-sm will-change-transform md:h-[360px] md:w-[40%]">
            <img
              src={`/img-${2 * i}.jpg`}
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
        </div>,
      );
    }
    return rows;
  };

  return (
    <div>
      <section className="main relative flex w-full flex-col items-center justify-center overflow-hidden text-center">
        <div
          className="main-content absolute top-1/2 flex w-full -translate-y-1/2 flex-col items-center justify-center px-4 md:px-8"
          ref={mainContentRef}
        >
          <div className="copy font-ITCGaramondN text-primary flex flex-col items-center justify-center text-6xl">
            <p ref={titleRef}>
              Meubles en bois <br />
              sur mesure
            </p>
            <p
              ref={descriptionRef}
              className="font-HelveticaNow mx-auto mt-8 text-lg leading-tight md:max-w-2xl"
            >
              Vous cherchez un artisan menuisier en Belgique pour créer des
              meubles en bois sur mesure ? Nemwood est spécialisé dans la
              fabrication artisanale de tables, chaises, garde-robes, escaliers
              et même de décors pour le cinéma.
            </p>
          </div>
        </div>
        {generateRows()}
      </section>
    </div>
  );
}

export default CardsScroll;
