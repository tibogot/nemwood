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

      const sections = scrollerRef.current.querySelectorAll(".scroll-section");
      const scrollWidth = scrollerRef.current.scrollWidth;
      const viewportWidth = window.innerWidth;

      // Calculate the distance to scroll (total width - viewport width)
      const scrollDistance = scrollWidth - viewportWidth;

      // Create the horizontal scroll animation
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: `+=${scrollDistance}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      // Animate the horizontal scroll
      tl.to(scrollerRef.current, {
        x: -scrollDistance,
        ease: "none",
      });

      // Cleanup function is handled by useGSAP
    },
    { scope: containerRef },
  );

  return (
    <div ref={containerRef} className="h-screen w-full overflow-hidden">
      <div ref={scrollerRef} className="flex h-full" style={{ width: "400vw" }}>
        {/* Section 1 */}
        <div className="scroll-section relative flex h-full w-full items-center justify-center bg-gradient-to-br from-purple-600 to-blue-600">
          <div className="container mx-auto flex h-full items-center justify-between px-8">
            <div className="z-10 flex-1 text-white">
              <h2 className="mb-4 text-6xl font-bold opacity-90">
                Creative Design
              </h2>
              <h3 className="mb-6 text-2xl font-light opacity-80">
                Innovative Solutions
              </h3>
              <p className="max-w-2xl text-lg leading-relaxed opacity-90">
                Crafting beautiful and functional designs that captivate and
                inspire. Every pixel matters in creating exceptional user
                experiences.
              </p>
              <div className="mt-8">
                <button className="rounded-full bg-white px-8 py-3 font-semibold text-gray-800 transition-colors duration-300 hover:bg-gray-100">
                  Learn More
                </button>
              </div>
            </div>

            <div className="flex flex-1 justify-end">
              <div className="relative">
                <div className="absolute inset-0 rotate-3 transform rounded-2xl bg-white/20"></div>
                <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                  <Image
                    src="https://picsum.photos/400/600?random=1"
                    alt="Creative Design"
                    width={400}
                    height={600}
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Section indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 transform">
            <div className="flex space-x-2">
              <div className="h-2 w-2 rounded-full bg-white transition-all duration-300" />
              <div className="h-2 w-2 rounded-full bg-white/40 transition-all duration-300" />
              <div className="h-2 w-2 rounded-full bg-white/40 transition-all duration-300" />
              <div className="h-2 w-2 rounded-full bg-white/40 transition-all duration-300" />
            </div>
          </div>
        </div>

        {/* Section 2 */}
        <div className="scroll-section relative flex h-full w-full items-center justify-center bg-gradient-to-br from-emerald-500 to-teal-600">
          <div className="container mx-auto flex h-full items-center justify-between px-8">
            <div className="z-10 flex-1 text-white">
              <h2 className="mb-4 text-6xl font-bold opacity-90">Technology</h2>
              <h3 className="mb-6 text-2xl font-light opacity-80">
                Future Forward
              </h3>
              <p className="max-w-2xl text-lg leading-relaxed opacity-90">
                Embracing cutting-edge technologies to build scalable and robust
                applications that stand the test of time.
              </p>
              <div className="mt-8">
                <button className="rounded-full bg-white px-8 py-3 font-semibold text-gray-800 transition-colors duration-300 hover:bg-gray-100">
                  Learn More
                </button>
              </div>
            </div>

            <div className="flex flex-1 justify-end">
              <div className="relative">
                <div className="absolute inset-0 rotate-3 transform rounded-2xl bg-white/20"></div>
                <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                  <Image
                    src="https://picsum.photos/400/600?random=2"
                    alt="Technology"
                    width={400}
                    height={600}
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Section indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 transform">
            <div className="flex space-x-2">
              <div className="h-2 w-2 rounded-full bg-white/40 transition-all duration-300" />
              <div className="h-2 w-2 rounded-full bg-white transition-all duration-300" />
              <div className="h-2 w-2 rounded-full bg-white/40 transition-all duration-300" />
              <div className="h-2 w-2 rounded-full bg-white/40 transition-all duration-300" />
            </div>
          </div>
        </div>

        {/* Section 3 */}
        <div className="scroll-section relative flex h-full w-full items-center justify-center bg-gradient-to-br from-orange-500 to-red-600">
          <div className="container mx-auto flex h-full items-center justify-between px-8">
            <div className="z-10 flex-1 text-white">
              <h2 className="mb-4 text-6xl font-bold opacity-90">Innovation</h2>
              <h3 className="mb-6 text-2xl font-light opacity-80">
                Beyond Boundaries
              </h3>
              <p className="max-w-2xl text-lg leading-relaxed opacity-90">
                Pushing the limits of what's possible through creative thinking
                and innovative problem-solving approaches.
              </p>
              <div className="mt-8">
                <button className="rounded-full bg-white px-8 py-3 font-semibold text-gray-800 transition-colors duration-300 hover:bg-gray-100">
                  Learn More
                </button>
              </div>
            </div>

            <div className="flex flex-1 justify-end">
              <div className="relative">
                <div className="absolute inset-0 rotate-3 transform rounded-2xl bg-white/20"></div>
                <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                  <Image
                    src="https://picsum.photos/400/600?random=3"
                    alt="Innovation"
                    width={400}
                    height={600}
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Section indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 transform">
            <div className="flex space-x-2">
              <div className="h-2 w-2 rounded-full bg-white/40 transition-all duration-300" />
              <div className="h-2 w-2 rounded-full bg-white/40 transition-all duration-300" />
              <div className="h-2 w-2 rounded-full bg-white transition-all duration-300" />
              <div className="h-2 w-2 rounded-full bg-white/40 transition-all duration-300" />
            </div>
          </div>
        </div>

        {/* Section 4 */}
        <div className="scroll-section relative flex h-full w-full items-center justify-center bg-gradient-to-br from-indigo-600 to-purple-700">
          <div className="container mx-auto flex h-full items-center justify-between px-8">
            <div className="z-10 flex-1 text-white">
              <h2 className="mb-4 text-6xl font-bold opacity-90">Excellence</h2>
              <h3 className="mb-6 text-2xl font-light opacity-80">
                Quality First
              </h3>
              <p className="max-w-2xl text-lg leading-relaxed opacity-90">
                Delivering exceptional results through attention to detail,
                rigorous testing, and continuous improvement.
              </p>
              <div className="mt-8">
                <button className="rounded-full bg-white px-8 py-3 font-semibold text-gray-800 transition-colors duration-300 hover:bg-gray-100">
                  Learn More
                </button>
              </div>
            </div>

            <div className="flex flex-1 justify-end">
              <div className="relative">
                <div className="absolute inset-0 rotate-3 transform rounded-2xl bg-white/20"></div>
                <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                  <Image
                    src="https://picsum.photos/400/600?random=4"
                    alt="Excellence"
                    width={400}
                    height={600}
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Section indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 transform">
            <div className="flex space-x-2">
              <div className="h-2 w-2 rounded-full bg-white/40 transition-all duration-300" />
              <div className="h-2 w-2 rounded-full bg-white/40 transition-all duration-300" />
              <div className="h-2 w-2 rounded-full bg-white/40 transition-all duration-300" />
              <div className="h-2 w-2 rounded-full bg-white transition-all duration-300" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HorizScroll;
