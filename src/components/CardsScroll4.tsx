"use client";
import { useEffect } from "react";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function CardsScroll() {
  useEffect(() => {
    const scrollTriggerSettings = {
      trigger: ".main",
      start: "top 25%",
      toggleActions: "play reverse play reverse",
    };

    // Desktop animations
    const leftXValues = [-800, -900, -800];
    const rightXValues = [800, 900, 800];
    const leftRotationValues = [-30, -20, -35];
    const rightRotationValues = [30, 20, 35];
    const yValues = [100, -150, -400];

    // Mobile animations - alternating left/right for 4 cards
    const mobileXValues = [-400, 400, -400, 400]; // left, right, left, right
    const mobileRotationValues = [-15, 15, -15, 15];

    const isMobile = window.innerWidth < 768;

    if (isMobile) {
      // Mobile: animate single column cards
      gsap.utils.toArray(".mobile-card").forEach((card: any, index: number) => {
        gsap.to(card, {
          x: mobileXValues[index],
          rotation: mobileRotationValues[index],
          scrollTrigger: {
            trigger: ".main",
            start: "top center",
            end: "150% bottom",
            scrub: true,
          },
        });
      });

      // Mobile text animation
      gsap.to(".main-content", {
        y: -50,
        scrollTrigger: {
          trigger: ".main",
          start: "top center",
          end: "150% bottom",
          scrub: true,
        },
      });
    } else {
      // Desktop: original row-based animations
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

      // Desktop text animation
      gsap.to(".main-content", {
        y: -100,
        scrollTrigger: {
          trigger: ".main",
          start: "top center",
          end: "150% bottom",
          scrub: true,
        },
      });
    }

    // Set initial clip-path to hide text (prevents FOUC)
    gsap.set(".line", {
      clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
    });

    gsap.to(".line", {
      clipPath: "polygon(0 0%, 100% 0%, 100% 100%, 0 100%)",
      stagger: 0.1,
      duration: 0.5,
      ease: "power1.out",
      scrollTrigger: scrollTriggerSettings,
    });

    // Animate the main text content to stay centered relative to the moving cards
    gsap.to(".main-content", {
      y: -100, // Adjust this value to fine-tune the centering
      scrollTrigger: {
        trigger: ".main",
        start: "top center",
        end: "150% bottom",
        scrub: true,
      },
    });

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        trigger.kill();
      });
    };
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

  const generateMobileCards = () => {
    const cards = [];
    for (let i = 1; i <= 4; i++) {
      cards.push(
        <div
          className="mobile-card mx-4 mb-6 h-[280px] w-[calc(100%-2rem)] overflow-hidden rounded-sm will-change-transform"
          key={i}
        >
          <img
            src={`/img-${i}.jpg`}
            alt=""
            className="h-full w-full object-cover"
          />
        </div>,
      );
    }
    return cards;
  };

  return (
    <div>
      <section className="main relative flex h-[150vh] w-full flex-col items-center justify-center overflow-hidden text-center">
        <div className="main-content absolute top-1/2 flex w-full -translate-y-1/2 flex-col items-center justify-center">
          {/* <div className="logo">
            <img src="/logonav2.svg" alt="" />
          </div> */}
          <div className="copy font-ITCGaramondN text-primary flex flex-col items-center justify-center text-4xl leading-tight md:text-6xl">
            <div className="line">
              <p>Meubles en bois sur mesure</p>
            </div>
          </div>
        </div>

        {/* Desktop layout - hidden on mobile */}
        <div className="hidden md:block">{generateRows()}</div>

        {/* Mobile layout - hidden on desktop */}
        <div className="flex w-full flex-col items-center justify-center md:hidden">
          {generateMobileCards()}
        </div>
      </section>
    </div>
  );
}

export default CardsScroll;
