"use client";

import React, { useRef } from "react";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsapConfig";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import AnimatedTextHorizontal from "./AnimatedTextHorizontal";
import AnimatedText from "./AnimatedText3";

// Position type for absolute positioning
interface Position {
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
  width?: string;
  height?: string;
}

// Image with position
interface ImageData {
  src: string;
  alt: string;
  position: Position;
  zIndex?: number;
  parallaxSpeed?: number; // negative = slower, positive = faster
}

// Text block with position
interface TextBlockData {
  number: string;
  title: string;
  paragraph: string;
  slug: string;
  position: Position;
  zIndex?: number;
  isCTASection?: boolean;
}

// Section data - each section is 100vw with absolutely positioned elements
interface SectionData {
  images: ImageData[];
  textBlocks: TextBlockData[];
}

const FreeLayoutScroll: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);

  // Free-form sections - 5 services with artistic layout
  const sections: SectionData[] = [
    // Section 1: Escaliers - Text left, images center and right
    {
      textBlocks: [
        {
          number: "1/5",
          title: "Escaliers",
          paragraph:
            "Ajoutez du caractère à votre intérieur avec un escalier en bois sur mesure, alliant robustesse, esthétique et finition artisanale. Bien plus qu'un passage entre les étages, l'escalier devient un élément architectural à part entière.",
          slug: "escaliers",
          position: {
            top: "20%",
            left: "3%",
            width: "28%",
          },
          zIndex: 10,
        },
      ],
      images: [
        {
          src: "/images/horiz-escalier.webp",
          alt: "Escalier sur mesure",
          position: {
            top: "12%",
            left: "46%",
            width: "42%",
            height: "60%",
          },
          zIndex: 1,
          parallaxSpeed: -150,
        },
        {
          src: "/images/horiz-garderobe.webp",
          alt: "Détail escalier",
          position: {
            top: "-28%",
            right: "-50%",
            width: "44%",
            height: "78%",
          },
          zIndex: 2,
          parallaxSpeed: 200,
        },
        {
          src: "/images/horiz-table.webp",
          alt: "Détail bois",
          position: {
            top: "68%",
            right: "8%",
            width: "22%",
            height: "38%",
          },
          zIndex: 3,
          parallaxSpeed: -100,
        },
      ],
    },
    // Section 2: Garde-robes - Image top-left, text bottom-left (below image 1)
    {
      textBlocks: [
        {
          number: "2/5",
          title: "Garde-robes",
          paragraph:
            "Concevez une garde-robe en bois massif qui vous ressemble : chaleureuse, fonctionnelle et entièrement personnalisée selon vos besoins et votre espace.",
          slug: "garde-robes",
          position: {
            top: "60%",
            left: "12%",
            width: "28%",
          },
          zIndex: 10,
        },
      ],
      images: [
        // {
        //   src: "/images/horiz-garderobe.webp",
        //   alt: "Garde-robe sur mesure",
        //   position: {
        //     top: "8%",
        //     left: "12%",
        //     width: "32%",
        //     height: "42%",
        //   },
        //   zIndex: 1,
        // },
        {
          src: "/images/horiz-table.webp",
          alt: "Détail garde-robe",
          position: {
            top: "12%",
            right: "-10%",
            width: "40%",
            height: "88%",
          },
          zIndex: 2,
          parallaxSpeed: -180,
        },
        {
          src: "/images/horiz-cuisine.webp",
          alt: "Détail intérieur",
          position: {
            top: "-5%",
            right: "-65%",
            width: "50%",
            height: "50%",
          },
          zIndex: 3,
          parallaxSpeed: 120,
        },
      ],
    },
    // Section 3: Tables - Text below landscape image from previous section
    {
      textBlocks: [
        {
          number: "3/5",
          title: "Tables",
          paragraph:
            "Créez votre table en bois sur mesure : pièce centrale de votre maison, unique, durable et façonnée à la main dans notre atelier.",
          slug: "tables",
          position: {
            top: "55%",
            left: "15%",
            width: "28%",
          },
          zIndex: 10,
        },
      ],
      images: [
        {
          src: "/images/horiz-cuisine.webp",
          alt: "Détail table",
          position: {
            top: "72%",
            left: "68%",
            width: "36%",
            height: "48%",
          },
          zIndex: 1,
          parallaxSpeed: -140,
        },
      ],
    },
    // Section 4: Cuisines - Text bleeding left, images center
    {
      textBlocks: [
        {
          number: "4/5",
          title: "Cuisines",
          paragraph:
            "Concevez une cuisine en bois massif qui vous ressemble : chaleureuse, fonctionnelle et entièrement personnalisée selon vos besoins et votre espace.",
          slug: "cuisines",
          position: {
            top: "20%",
            left: "-18%",
            width: "28%",
          },
          zIndex: 10,
        },
      ],
      images: [
        {
          src: "/images/horiz-cuisine.webp",
          alt: "Cuisine sur mesure",
          position: {
            top: "8%",
            left: "32%",
            width: "45%",
            height: "78%",
          },
          zIndex: 1,
          parallaxSpeed: -160,
        },
        {
          src: "/images/horiz-garderobe.webp",
          alt: "Détail cuisine",
          position: {
            top: "-5%",
            left: "60%",
            width: "40%",
            height: "52%",
          },
          zIndex: 2,
          parallaxSpeed: 100,
        },
      ],
    },
    // Section 5: Plus de services - Text bottom-left, large image right
    {
      textBlocks: [
        {
          number: "5/5",
          title: "Plus de services",
          paragraph:
            "Découvrez l'ensemble de nos services de menuiserie artisanale : bibliothèques, bureaux, salles de bain et bien plus encore.",
          slug: "services",
          position: {
            bottom: "15%",
            left: "8%",
            width: "28%",
          },
          zIndex: 10,
          isCTASection: true,
        },
      ],
      images: [
        {
          src: "/images/autres-services.webp",
          alt: "Autres services",
          position: {
            top: "0%",
            right: "0%",
            width: "45%",
            height: "100%",
          },
          zIndex: 1,
        },
      ],
    },
  ];

  useGSAP(
    () => {
      if (
        window.innerWidth < 768 ||
        !containerRef.current ||
        !scrollerRef.current
      )
        return;

      const setupScrollAnimation = () => {
        if (!scrollerRef.current || !containerRef.current) return;

        requestAnimationFrame(() => {
          if (!scrollerRef.current) return;

          const scrollWidth = scrollerRef.current.scrollWidth;
          const viewportWidth = window.innerWidth;
          const scrollDistance = scrollWidth - viewportWidth;

          if (scrollDistance <= 0) return;

          // Main horizontal scroll animation
          const scrollTween = gsap.to(scrollerRef.current, {
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
              normalizeScroll: true,
            } as ScrollTrigger.Vars & { normalizeScroll?: boolean },
          });

          // Parallax effect for images (except last section)
          const parallaxImages = containerRef.current?.querySelectorAll(
            "[data-parallax-speed]",
          );

          parallaxImages?.forEach((image) => {
            const speed = parseFloat(
              image.getAttribute("data-parallax-speed") || "0",
            );
            if (speed === 0) return;

            gsap.to(image, {
              x: speed,
              ease: "none",
              scrollTrigger: {
                trigger: containerRef.current,
                start: "top top",
                end: `+=${scrollDistance}`,
                scrub: 1,
              },
            });
          });

          requestAnimationFrame(() => {
            ScrollTrigger.refresh();
          });
        });
      };

      const timeoutId = setTimeout(setupScrollAnimation, 100);

      const handleResize = () => {
        ScrollTrigger.refresh();
        setTimeout(setupScrollAnimation, 50);
      };

      window.addEventListener("resize", handleResize);

      return () => {
        clearTimeout(timeoutId);
        window.removeEventListener("resize", handleResize);
      };
    },
    { scope: containerRef },
  );

  // Flatten all text blocks for mobile
  const allTextBlocks = sections.flatMap((s) => s.textBlocks);

  return (
    <>
      {/* Mobile Layout */}
      <div className="text-primary block w-full px-4 py-8 md:hidden md:px-8">
        <div className="space-y-8">
          {allTextBlocks.map((block, index) => (
            <div
              key={index}
              className="group bg-secondary relative cursor-pointer overflow-hidden rounded-sm duration-300"
            >
              <div className="aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={
                    sections[Math.floor(index / 2)]?.images[0]?.src ||
                    "/images/horiz-escalier.webp"
                  }
                  alt={block.title}
                  width={1000}
                  height={800}
                  className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  priority={index === 0}
                  loading={index === 0 ? "eager" : "lazy"}
                  fetchPriority={index === 0 ? "high" : "auto"}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="py-6">
                <AnimatedText>
                  <p className="font-HelveticaNow text-primary/70 mb-3 text-xs tracking-wider uppercase">
                    {block.number}
                  </p>
                  <h3 className="font-ITCGaramondN text-primary mb-4 text-4xl leading-tight">
                    {block.title}
                  </h3>
                  <p className="font-HelveticaNow text-primary/80 mb-6 text-base leading-relaxed">
                    {block.paragraph}
                  </p>
                </AnimatedText>
                <Link
                  href={
                    block.isCTASection ? "/services" : `/services/${block.slug}`
                  }
                  aria-label={`En savoir plus sur nos ${block.title.toLowerCase()}`}
                >
                  <button className="font-HelveticaNow">
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
          ))}
        </div>
      </div>

      {/* Desktop Layout - Free Form */}
      <div
        ref={containerRef}
        className="text-primary hidden h-screen w-full overflow-hidden md:block"
        aria-hidden="true"
        data-horizontal-scroll-free
      >
        <div ref={scrollerRef} className="flex h-full">
          {sections.map((section, sectionIndex) => (
            <div
              key={`section-${sectionIndex}`}
              className="scroll-section relative h-full w-screen min-w-screen flex-shrink-0"
            >
              {/* Images - absolutely positioned */}
              {section.images.map((image, imgIndex) => (
                <div
                  key={`img-${sectionIndex}-${imgIndex}`}
                  className="absolute overflow-hidden"
                  style={{
                    top: image.position.top,
                    right: image.position.right,
                    bottom: image.position.bottom,
                    left: image.position.left,
                    width: image.position.width,
                    height: image.position.height,
                    zIndex: image.zIndex || 1,
                  }}
                  data-parallax-speed={image.parallaxSpeed || 0}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                    loading="lazy"
                    sizes="50vw"
                  />
                </div>
              ))}

              {/* Text blocks - absolutely positioned */}
              {section.textBlocks.map((block, blockIndex) => (
                <div
                  key={`text-${sectionIndex}-${blockIndex}`}
                  className="absolute flex flex-col"
                  style={{
                    top: block.position.top,
                    right: block.position.right,
                    bottom: block.position.bottom,
                    left: block.position.left,
                    width: block.position.width,
                    zIndex: block.zIndex || 10,
                  }}
                >
                  {/* Number */}
                  <AnimatedTextHorizontal
                    horizontalContainer="[data-horizontal-scroll-free]"
                    sectionIndex={sectionIndex}
                    totalSections={sections.length}
                    stagger={0.1}
                    duration={0.6}
                    delay={0.1}
                    earlyTrigger={sectionIndex === 3}
                  >
                    <p className="font-HelveticaNow text-primary/70 mb-4 text-sm">
                      {block.number}
                    </p>
                  </AnimatedTextHorizontal>

                  {/* Title */}
                  <AnimatedTextHorizontal
                    horizontalContainer="[data-horizontal-scroll-free]"
                    sectionIndex={sectionIndex}
                    totalSections={sections.length}
                    stagger={0.1}
                    duration={0.6}
                    delay={0.2}
                    earlyTrigger={sectionIndex === 3}
                  >
                    <h3 className="font-ITCGaramondN mb-6 text-6xl leading-[0.85] md:text-7xl">
                      {block.title}
                    </h3>
                  </AnimatedTextHorizontal>

                  {/* Paragraph */}
                  <AnimatedTextHorizontal
                    horizontalContainer="[data-horizontal-scroll-free]"
                    sectionIndex={sectionIndex}
                    totalSections={sections.length}
                    stagger={0.05}
                    duration={0.5}
                    delay={0.4}
                    earlyTrigger={sectionIndex === 3}
                  >
                    <p className="font-HelveticaNow mb-6 text-base leading-relaxed">
                      {block.paragraph}
                    </p>
                  </AnimatedTextHorizontal>

                  {/* Button */}
                  <AnimatedTextHorizontal
                    horizontalContainer="[data-horizontal-scroll-free]"
                    sectionIndex={sectionIndex}
                    totalSections={sections.length}
                    stagger={0.05}
                    duration={0.5}
                    delay={0.55}
                    earlyTrigger={sectionIndex === 3}
                  >
                    <Link
                      href={
                        block.isCTASection
                          ? "/services"
                          : `/services/${block.slug}`
                      }
                      tabIndex={-1}
                      aria-hidden="true"
                    >
                      <button className="font-HelveticaNow" tabIndex={-1}>
                        <div className="border-primary hover:bg-primary hover:text-secondary flex cursor-pointer items-center border border-solid px-4 py-2 transition-colors duration-300 ease-in-out">
                          <span>
                            {block.isCTASection
                              ? "Découvrir tous nos services"
                              : "En savoir plus"}
                          </span>
                          <div className="mt-0.5 ml-1">
                            <ArrowRight size={18} strokeWidth={1.5} />
                          </div>
                        </div>
                      </button>
                    </Link>
                  </AnimatedTextHorizontal>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default FreeLayoutScroll;
