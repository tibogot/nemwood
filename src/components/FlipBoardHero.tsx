"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsapConfig";
import Image from "next/image";

// Cooldown time in milliseconds for tile animations
const COOLDOWN = 1000;

export default function FlipBoardHero(): React.JSX.Element {
  const boardRef = useRef<HTMLDivElement>(null);
  const isFlippedRef = useRef<boolean>(false);

  // Fixed grid dimensions - ALWAYS 4 rows and 6 columns (24 squares total)
  const ROWS = 4;
  const COLS = 6;

  // Responsive perspective
  const perspective = "1000px";

  useEffect(() => {
    // Reset flip state when dimensions change
    isFlippedRef.current = false;
    const tiles: HTMLElement[] = [];

    const animateTile = (tile: HTMLElement, tiltY: number): void => {
      gsap
        .timeline()
        .set(tile, {
          rotateX: isFlippedRef.current ? 180 : 0,
          rotateY: 0,
        })
        .to(tile, {
          rotateX: isFlippedRef.current ? 450 : 270,
          rotateY: tiltY,
          duration: 0.5,
          ease: "power2.out",
        })
        .to(
          tile,
          {
            rotateX: isFlippedRef.current ? 540 : 360,
            rotateY: 0,
            duration: 0.5,
            ease: "power2.out",
          },
          "-=0.25",
        );
    };

    const flipAllTiles = (): void => {
      isFlippedRef.current = !isFlippedRef.current;
      gsap.to(tiles, {
        rotateX: isFlippedRef.current ? 180 : 0,
        duration: 1,
        stagger: {
          amount: 0.5,
          from: "random",
        },
        ease: "power2.inOut",
      });
    };

    // Collect all tile elements
    if (boardRef.current) {
      const tileElements =
        boardRef.current.querySelectorAll<HTMLElement>(".tile");
      tileElements.forEach((tile) => {
        // Reset tile rotation when dimensions change
        gsap.set(tile, { rotateX: 0, rotateY: 0 });
        tiles.push(tile);
      });
    }

    // Initialize tile animations
    const lastEnterTimes: number[] = new Array(tiles.length).fill(0);
    const eventHandlers: (() => void)[] = [];
    const clickHandlers: (() => void)[] = [];

    tiles.forEach((tile, index) => {
      const handleMouseEnter = (): void => {
        const currentTime = Date.now();
        if (currentTime - lastEnterTimes[index] > COOLDOWN) {
          lastEnterTimes[index] = currentTime;

          let tiltY = 0;
          const col = index % COLS;

          // Tilt based on column position (COLS is always 6)
          if (col === 0) tiltY = -40;
          else if (col === COLS - 1) tiltY = 40;
          else if (col === 1) tiltY = -20;
          else if (col === COLS - 2) tiltY = 20;
          else if (col === 2) tiltY = -10;
          else tiltY = 10;

          animateTile(tile, tiltY);
        }
      };

      const handleClick = (): void => {
        flipAllTiles();
      };

      eventHandlers.push(handleMouseEnter);
      clickHandlers.push(handleClick);
      tile.addEventListener("mouseenter", handleMouseEnter);
      tile.addEventListener("click", handleClick);
    });

    return () => {
      tiles.forEach((tile, index) => {
        if (eventHandlers[index]) {
          tile.removeEventListener("mouseenter", eventHandlers[index]);
        }
        if (clickHandlers[index]) {
          tile.removeEventListener("click", clickHandlers[index]);
        }
      });
    };
  }, []);

  return (
    <div className="relative h-[100vh] w-full">
      <div
        ref={boardRef}
        className="grid h-full w-full gap-0.5 md:gap-1"
        style={{
          perspective,
          gridTemplateRows: "repeat(4, 1fr)", // Always 4 rows
          gridTemplateColumns: "repeat(6, 1fr)", // Always 6 columns
        }}
      >
        {Array.from({ length: ROWS * COLS }).map((_, index) => {
          // Always 24 tiles (4×6)
          const rowIndex = Math.floor(index / COLS);
          const colIndex = index % COLS;
          return (
            <div
              key={index}
              className="tile relative h-full w-full cursor-pointer"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Front Face */}
              <div
                className="tile-face tile-front absolute h-full w-full overflow-hidden rounded bg-slate-600 md:rounded-lg"
                style={{
                  backfaceVisibility: "hidden",
                }}
              >
                <div className="absolute inset-0 overflow-hidden rounded md:rounded-lg">
                  <div
                    className="relative h-full w-full"
                    style={{
                      width: `${COLS * 100}%`,
                      height: `${ROWS * 100}%`,
                      left: `-${colIndex * 100}%`,
                      top: `-${rowIndex * 100}%`,
                    }}
                  >
                    <Image
                      src="/flip.svg"
                      alt="Front face"
                      fill
                      className="object-cover"
                      sizes="100vw"
                      quality={85}
                      unoptimized={false}
                    />
                  </div>
                </div>
              </div>

              {/* Back Face */}
              <div
                className="tile-face tile-back absolute h-full w-full overflow-hidden rounded bg-slate-700 md:rounded-lg"
                style={{
                  backfaceVisibility: "hidden",
                  transform: "rotateX(180deg)",
                }}
              >
                <div className="absolute inset-0 overflow-hidden rounded md:rounded-lg">
                  <div
                    className="relative h-full w-full"
                    style={{
                      width: `${COLS * 100}%`,
                      height: `${ROWS * 100}%`,
                      left: `-${colIndex * 100}%`,
                      top: `-${rowIndex * 100}%`,
                    }}
                  >
                    <Image
                      src="/images/Apropos-nemwood.webp"
                      alt="Back face"
                      fill
                      className="object-cover"
                      sizes="100vw"
                      quality={85}
                      unoptimized={false}
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
