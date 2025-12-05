"use client";
import React, { useRef, useEffect } from "react";
import Image from "next/image";

interface Service {
  name: string;
  href: string;
  image: string;
}

const services: Service[] = [
  {
    name: "Escaliers",
    href: "/services/escaliers",
    image: "/images/stairs.webp",
  },
  {
    name: "Gardes-robes",
    href: "/services/garde-robes",
    image: "/images/wardrobe.webp",
  },
  {
    name: "Tables",
    href: "/services/tables",
    image: "/images/table.webp",
  },
  {
    name: "Cuisines",
    href: "/services/cuisines",
    image: "/images/kitchen.webp",
  },
  {
    name: "Bibliothèque",
    href: "/services/bibliotheque",
    image: "/images/woodshelf.webp",
  },
  {
    name: "Bureau",
    href: "/services/bureau",
    image: "/images/desk.webp",
  },
  {
    name: "Salle de bain",
    href: "/services/salle-de-bain",
    image: "/images/bathroom.webp",
  },
];

// Individual Service Component
interface ServiceItemProps {
  index: number;
  name: string;
  href: string;
  image: string;
}

function ServiceItem({ index, name, href, image }: ServiceItemProps) {
  const maskRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const mask = maskRef.current;
    if (!container || !mask) return;

    const handleMouseEnter = () => {
      mask.style.clipPath = "inset(0% 0% 0% 0%)";
    };

    const handleMouseLeave = () => {
      mask.style.clipPath = "inset(100% 0% 0% 0%)";
    };

    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="group border-primary relative cursor-pointer overflow-hidden border-b transition-all duration-500 last:border-b-0"
    >
      <a href={href} className="relative z-10 block">
        {/* Base Content Layer - Always Visible */}
        <div className="relative z-20 flex items-center px-2 py-3 md:px-8 md:py-4">
          <span className="text-primary absolute left-2 text-sm font-light md:left-8 md:text-lg lg:text-xl">
            {String(index + 1).padStart(2, "0")}
          </span>

          {/* Title Container - Centered */}
          <div className="relative mx-auto flex items-center justify-center">
            {/* Invisible spacer for alignment - positioned absolutely */}
            <div className="absolute right-full mr-12 h-[60px] w-[80px] md:h-[80px] md:w-[110px] lg:h-[100px] lg:w-[140px]"></div>
            <h3 className="text-primary text-3xl transition-all duration-500 group-hover:translate-x-2 md:text-6xl lg:text-8xl">
              {name}
            </h3>
          </div>

          <span className="text-primary absolute right-2 text-xs font-light md:right-8 md:text-sm lg:text-base">
            En savoir plus →
          </span>
        </div>

        {/* Mask Container - Reveals on Hover (Background + Image + Content) */}
        <div
          ref={maskRef}
          className="absolute inset-0 z-30 overflow-hidden"
          style={{
            clipPath: "inset(100% 0% 0% 0%)",
            transition: "clip-path 0.5s cubic-bezier(0.76, 0, 0.24, 1)",
          }}
        >
          {/* Brown Background */}
          <div className="bg-primary absolute inset-0"></div>

          {/* Content Inside Mask - Exact same structure as base layer for perfect alignment */}
          <div className="relative z-10 flex items-center px-2 py-3 md:px-8 md:py-4">
            <span className="text-secondary absolute left-2 text-sm font-light md:left-8 md:text-lg lg:text-xl">
              {String(index + 1).padStart(2, "0")}
            </span>

            {/* Title Container - Centered with Image */}
            <div className="relative mx-auto flex items-center justify-center">
              {/* Image - positioned absolutely to match base layer */}
              <div className="absolute right-full mr-12 h-[60px] w-[80px] overflow-hidden md:h-[80px] md:w-[110px] lg:h-[100px] lg:w-[140px]">
                <div className="relative h-full w-full overflow-hidden rounded-[1px]">
                  <Image
                    src={image}
                    alt={name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 80px, 140px"
                    draggable={false}
                  />
                </div>
              </div>

              <h3 className="text-secondary text-3xl transition-all duration-500 group-hover:translate-x-2 md:text-6xl lg:text-8xl">
                {name}
              </h3>
            </div>

            <span className="text-secondary absolute right-2 text-xs font-light md:right-8 md:text-sm lg:text-base">
              En savoir plus →
            </span>
          </div>
        </div>
      </a>
    </div>
  );
}

// Main Component
export default function ManyServices() {
  return (
    <section className="relative min-h-screen w-full py-16 md:py-20">
      {/* Title and Description */}
      <div className="mb-16 flex flex-col px-4 md:flex-row md:items-start md:justify-between md:gap-8 md:px-8">
        <h2 className="font-ITCGaramondN text-primary mb-4 text-3xl leading-tight md:mb-0 md:text-5xl lg:text-7xl">
          Nos services
        </h2>

        <p className="font-HelveticaNow text-primary text-base md:max-w-xl md:text-lg">
          Découvrez nos services de menuiserie sur mesure en Belgique. Nous vous
          accompagnons dans la réalisation de vos projets de menuiserie sur
          mesure en Belgique.
        </p>
      </div>

      {/* Mobile Card Layout */}
      <div className="block space-y-8 px-4 md:hidden">
        {services.map((service, index) => (
          <div
            key={`mobile-${service.name}`}
            className="group bg-secondary relative cursor-pointer overflow-hidden rounded-sm duration-300"
          >
            <a href={service.href} className="block">
              {/* Image */}
              <div className="aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={service.image}
                  alt={`${service.name} sur mesure par Nemwood - Menuisier artisan en Belgique`}
                  width={1000}
                  height={800}
                  className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  loading={index === 0 ? "eager" : "lazy"}
                  priority={index === 0}
                />
              </div>

              {/* Content */}
              <div className="py-6">
                {/* Number */}
                <p className="font-HelveticaNow text-primary/70 mb-3 text-xs tracking-wider uppercase">
                  {String(index + 1).padStart(2, "0")}
                </p>

                {/* Title */}
                <h3 className="font-ITCGaramondN text-primary mb-4 text-4xl leading-tight">
                  {service.name}
                </h3>

                {/* CTA */}
                <button className="font-HelveticaNow">
                  <div className="border-primary hover:bg-primary hover:text-secondary flex cursor-pointer items-center border border-solid px-4 py-2 transition-colors duration-300 ease-in-out">
                    <span>En savoir plus</span>
                    <div className="mt-0.5 ml-1">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5 12H19M19 12L12 5M19 12L12 19"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </button>
              </div>
            </a>
          </div>
        ))}
      </div>

      {/* Desktop Services List */}
      <div className="font-HelveticaNow mt-20 hidden md:mt-40 md:block">
        {services.map((service, index) => (
          <ServiceItem
            key={service.name}
            index={index}
            name={service.name}
            href={service.href}
            image={service.image}
          />
        ))}
      </div>
    </section>
  );
}
