"use client";

import React, { useRef } from "react";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsapConfig";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import AnimatedText from "./AnimatedText3";
import AnimatedTextHorizontal from "./AnimatedTextHorizontal";

// Absolute positioning with x coordinate
interface Position {
  x: string; // Horizontal position from left edge of canvas (e.g., "5vw", "110vw")
  y?: string; // Vertical position (top, bottom, or percentage)
  top?: string;
  bottom?: string;
  width?: string;
  height?: string;
  maxWidth?: string;
  maxHeight?: string;
}

// Image element
interface ImageElement {
  type: "image";
  src: string;
  alt: string;
  position: Position;
  zIndex?: number;
  parallaxSpeed?: number;
}

// Text block element
interface TextElement {
  type: "text";
  number: string;
  title: string;
  paragraph: string;
  slug: string;
  position: Position;
  zIndex?: number;
  isCTASection?: boolean;
  sectionIndex: number; // For animation purposes
}

type CanvasElement = ImageElement | TextElement;

const FreeLayoutScroll: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const scrollTweenRef = useRef<gsap.core.Tween | null>(null);
  const parallaxTweensRef = useRef<gsap.core.Tween[]>([]);

  // Total canvas width - adjusted for better breathing layout
  const totalCanvasWidth = "500vw";

  // All elements on a continuous canvas with proper breathing room
  const elements: CanvasElement[] = [
    // SECTION 1: ESCALIERS (0-95vw) - ~95vw breathing space
    // Text - left side
    {
      type: "text",
      number: "1/5",
      title: "Escaliers",
      paragraph:
        "Ajoutez du caractère à votre intérieur avec un escalier en bois sur mesure, alliant robustesse, esthétique et finition artisanale. Bien plus qu'un passage entre les étages, l'escalier devient un élément architectural à part entière. Conçu sur mesure dans notre atelier, chaque projet révèle la beauté du bois et s'intègre parfaitement à votre intérieur. Un savoir-faire artisanal pour un ouvrage élégant et durable.",
      slug: "escaliers",
      position: {
        x: "2vw",
        top: "50%",
        width: "min(600px, 35vw)",
        maxWidth: "600px",
      },
      zIndex: 10,
      sectionIndex: 0,
    },
    // Large image - center right
    {
      type: "image",
      src: "/images/Escalier 5.webp",
      alt: "Escalier sur mesure",
      position: {
        x: "40vw",
        top: "15%",
        width: "min(720px, 42vw)",
        height: "min(750px, 65vh)",
        maxWidth: "720px",
        maxHeight: "750px",
      },
      zIndex: 2,
      parallaxSpeed: -150,
    },
    // Small image - bottom right
    {
      type: "image",
      src: "/images/Escalier 2.webp",
      alt: "Détail bois",
      position: {
        x: "85vw",
        bottom: "-2%",
        width: "min(400px, 28vw)",
        height: "min(550px, 48vh)",
        maxWidth: "400px",
        maxHeight: "550px",
      },
      zIndex: 1,
      parallaxSpeed: -100,
    },

    // SECTION 2: GARDE-ROBES (100vw-195vw) - ~95vw breathing space
    // Small image - top left
    {
      type: "image",
      src: "/images/horiz-garderobe.webp",
      alt: "Garde-robe sur mesure",
      position: {
        x: "180vw",
        top: "8%",
        width: "min(480px, 30vw)",
        height: "min(380px, 30vh)",
        maxWidth: "480px",
        maxHeight: "380px",
      },
      zIndex: 1,
    },
    // Text - bottom left
    {
      type: "text",
      number: "2/5",
      title: "Garde-robes",
      paragraph:
        "Concevez une garde-robe en bois massif qui vous ressemble : chaleureuse, fonctionnelle et entièrement personnalisée selon vos besoins et votre espace. Parce que chaque intérieur est unique, votre garde-robe mérite d'être pensée sur mesure. Nous créons des espaces de rangement en bois massif alliant élégance naturelle et organisation optimale.",
      slug: "garde-robes",
      position: {
        x: "115vw",
        bottom: "15%",
        width: "min(600px, 35vw)",
        maxWidth: "600px",
      },
      zIndex: 10,
      sectionIndex: 1,
    },
    // Large image - right side
    {
      type: "image",
      src: "/images/Escalier 5.webp",
      alt: "Détail garde-robe",
      position: {
        x: "155vw",
        top: "20%",
        width: "min(620px, 42vw)",
        height: "min(680px, 62vh)",
        maxWidth: "620px",
        maxHeight: "680px",
      },
      zIndex: 2,
      parallaxSpeed: -180,
    },

    // SECTION 3: TABLES (200vw-295vw) - ~95vw breathing space
    // Text - left
    {
      type: "text",
      number: "3/5",
      title: "Tables",
      paragraph:
        "Créez votre table en bois sur mesure : pièce centrale de votre maison, unique, durable et façonnée à la main dans notre atelier. La table est le cœur de votre foyer où se partagent repas et moments précieux. Chaque création s'intègre parfaitement à votre espace et reflète votre style. Un savoir-faire artisanal pour un mobilier authentique, robuste et intemporel.",
      slug: "tables",
      position: {
        x: "215vw",
        top: "18%",
        width: "min(600px, 35vw)",
        maxWidth: "600px",
      },
      zIndex: 10,
      sectionIndex: 2,
    },
    // Large image - center right
    {
      type: "image",
      src: "/images/Table 5.webp",
      alt: "Détail table",
      position: {
        x: "265vw",
        top: "12%",
        width: "min(520px, 36vw)",
        height: "min(620px, 56vh)",
        maxWidth: "520px",
        maxHeight: "620px",
      },
      zIndex: 1,
      parallaxSpeed: -140,
    },
    // Small image - bottom left
    {
      type: "image",
      src: "/images/table-a-manger-2.jpg",
      alt: "Table détail",
      position: {
        x: "215vw",
        bottom: "3%",
        width: "min(480px, 30vw)",
        height: "min(380px, 30vh)",
        maxWidth: "480px",
        maxHeight: "380px",
      },
      zIndex: 2,
      parallaxSpeed: 100,
    },

    // SECTION 4: CUISINES (300vw-395vw) - ~95vw breathing space
    // Text - left
    {
      type: "text",
      number: "4/5",
      title: "Cuisines",
      paragraph:
        "Concevez une cuisine en bois massif qui vous ressemble : chaleureuse, fonctionnelle et entièrement personnalisée selon vos besoins et votre espace. La cuisine est le cœur vivant de votre maison, un espace de partage qui mérite toute notre attention. Nous créons des cuisines en bois massif sur mesure alliant authenticité et ergonomie adaptée à votre quotidien. Un savoir-faire artisanal pour une cuisine unique, pratique et durable.",
      slug: "cuisines",
      position: {
        x: "305vw",
        top: "8%",
        width: "min(600px, 35vw)",
        maxWidth: "600px",
      },
      zIndex: 10,
      sectionIndex: 3,
    },
    // Large image - right
    {
      type: "image",
      src: "/images/horiz-cuisine.webp",
      alt: "Cuisine sur mesure",
      position: {
        x: "360vw",
        top: "8%",
        width: "min(680px, 48vw)",
        height: "min(720px, 68vh)",
        maxWidth: "680px",
        maxHeight: "720px",
      },
      zIndex: 1,
      parallaxSpeed: -160,
    },
    // Small image - bottom left
    {
      type: "image",
      src: "/images/cuisine2.jpg",
      alt: "Détail cuisine",
      position: {
        x: "305vw",
        bottom: "10%",
        width: "min(480px, 32vw)",
        height: "min(420px, 36vh)",
        maxWidth: "480px",
        maxHeight: "420px",
      },
      zIndex: 2,
      parallaxSpeed: 100,
    },

    // SECTION 5: PLUS DE SERVICES (400vw-500vw) - Final 100vw section
    // Text - left side (takes up ~40vw)
    {
      type: "text",
      number: "5/5",
      title: "Plus de services",
      paragraph:
        "Découvrez l'ensemble de nos services de menuiserie artisanale : bibliothèques, bureaux, salles de bain et bien plus encore. Chaque création est pensée pour s'intégrer harmonieusement à votre espace et sublimer votre intérieur avec l'authenticité du bois massif.",
      slug: "services",
      position: {
        x: "405vw",
        top: "50%",
        width: "min(550px, 32vw)",
        maxWidth: "550px",
      },
      zIndex: 10,
      isCTASection: true,
      sectionIndex: 4,
    },
    // Full-height image - right side (pinned to right edge, 55vw wide)
    {
      type: "image",
      src: "/images/autres-services.webp",
      alt: "Autres services",
      position: {
        x: "445vw",
        top: "0",
        width: "55vw",
        height: "100%",
      },
      zIndex: 1,
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

      const setupScrollAnimation = async () => {
        if (!scrollerRef.current || !containerRef.current) return;

        // CRITICAL: Wait for fonts to load before calculating widths
        // This prevents incorrect width calculations that cause jumping
        if (document.fonts && document.fonts.ready) {
          await document.fonts.ready;
        }

        // Additional delay to ensure SplitText animations have completed
        await new Promise((resolve) => setTimeout(resolve, 200));

        // Clean up existing ScrollTriggers
        if (scrollTweenRef.current) {
          scrollTweenRef.current.kill();
          scrollTweenRef.current = null;
        }
        parallaxTweensRef.current.forEach((tween) => {
          if (tween) tween.kill();
        });
        parallaxTweensRef.current = [];

        requestAnimationFrame(() => {
          if (!scrollerRef.current || !containerRef.current) return;

          // Force a reflow to ensure width is calculated
          scrollerRef.current.offsetWidth;

          const scrollWidth = scrollerRef.current.scrollWidth;
          const viewportWidth = window.innerWidth;
          const scrollDistance = scrollWidth - viewportWidth;

          console.log('HorizScroll9 - scrollWidth:', scrollWidth, 'viewportWidth:', viewportWidth, 'scrollDistance:', scrollDistance);

          if (scrollDistance <= 0) return;

          // Main horizontal scroll animation
          scrollTweenRef.current = gsap.to(scrollerRef.current, {
            x: -scrollDistance,
            ease: "none",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top top",
              end: () => `+=${scrollDistance}`,
              scrub: 1,
              pin: true,
              anticipatePin: 1,
              invalidateOnRefresh: true,
              pinSpacing: true,
              // normalizeScroll removed - conflicts with Lenis smooth scroll
              markers: false, // Set to true for debugging
            },
          });

          // Parallax effect for images
          const parallaxImages = containerRef.current?.querySelectorAll(
            "[data-parallax-speed]",
          );

          parallaxImages?.forEach((image) => {
            const speed = parseFloat(
              image.getAttribute("data-parallax-speed") || "0",
            );
            if (speed === 0) return;

            const parallaxTween = gsap.to(image, {
              x: speed,
              ease: "none",
              scrollTrigger: {
                trigger: containerRef.current,
                start: "top top",
                end: `+=${scrollDistance}`,
                scrub: 1,
              },
            });
            parallaxTweensRef.current.push(parallaxTween);
          });

          // Single ScrollTrigger refresh after setup
          ScrollTrigger.refresh();
        });
      };

      // Increased timeout to ensure fonts and SplitText are fully loaded
      // This prevents width calculation issues that cause jumping
      const timeoutId = setTimeout(setupScrollAnimation, 500);

      const handleResize = () => {
        ScrollTrigger.refresh();
        setTimeout(setupScrollAnimation, 50);
      };

      window.addEventListener("resize", handleResize);

      return () => {
        clearTimeout(timeoutId);
        window.removeEventListener("resize", handleResize);

        if (scrollTweenRef.current) {
          scrollTweenRef.current.kill();
          scrollTweenRef.current = null;
        }
        parallaxTweensRef.current.forEach((tween) => {
          if (tween) tween.kill();
        });
        parallaxTweensRef.current = [];
      };
    },
    { scope: containerRef },
  );

  // Extract text elements for mobile
  const textElements = elements.filter(
    (el): el is TextElement => el.type === "text",
  );
  const imageElements = elements.filter(
    (el): el is ImageElement => el.type === "image",
  );

  return (
    <>
      {/* Mobile Layout */}
      <div className="text-primary block w-full px-4 py-8 md:hidden md:px-8">
        <div className="space-y-8">
          {textElements.map((block, index) => (
            <div
              key={index}
              className="group bg-secondary relative cursor-pointer overflow-hidden rounded-sm duration-300"
            >
              <div className="relative h-[300px] w-full overflow-hidden rounded-sm md:h-[400px]">
                <Image
                  src={
                    imageElements[index * 2]?.src ||
                    "/images/horiz-escalier.webp"
                  }
                  alt={block.title}
                  fill
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  priority={index === 0}
                  loading={index === 0 ? "eager" : "lazy"}
                  fetchPriority={index === 0 ? "high" : "auto"}
                  sizes="(max-width: 768px) 100vw, 384px"
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

      {/* Desktop Layout - Continuous Canvas */}
      <div
        ref={containerRef}
        className="text-primary hidden h-screen w-full overflow-hidden md:block"
        data-horizontal-scroll-free
      >
        <div
          ref={scrollerRef}
          className="relative h-full will-change-transform"
          style={{
            width: totalCanvasWidth,
            minWidth: totalCanvasWidth,
            maxWidth: totalCanvasWidth,
            paddingTop: "clamp(3rem, 6vw, 5rem)",
            paddingBottom: "clamp(3rem, 6vw, 5rem)",
            // Force GPU acceleration for smoother horizontal scroll
            transform: "translateZ(0)",
            backfaceVisibility: "hidden",
          }}
        >
          {/* Render all elements */}
          {elements.map((element, index) => {
            if (element.type === "text") {
              return (
                <div
                  key={`text-${index}`}
                  className="scroll-section absolute px-2"
                  style={{
                    left: element.position.x,
                    top: element.position.top,
                    bottom: element.position.bottom,
                    width: element.position.width,
                    maxWidth: element.position.maxWidth,
                    zIndex: element.zIndex || 10,
                    transform:
                      element.position.top === "50%"
                        ? "translateY(-50%)"
                        : undefined,
                  }}
                >
                  <div className="w-full">
                    {/* Number */}
                    <AnimatedTextHorizontal
                      horizontalContainer="[data-horizontal-scroll-free]"
                      sectionIndex={element.sectionIndex}
                      totalSections={5}
                      stagger={0.1}
                      duration={0.6}
                      delay={0.1}
                      earlyTrigger={false}
                    >
                      <p className="font-HelveticaNow text-primary/70 mb-4 text-sm">
                        {element.number}
                      </p>
                    </AnimatedTextHorizontal>

                    {/* Title */}
                    <AnimatedTextHorizontal
                      horizontalContainer="[data-horizontal-scroll-free]"
                      sectionIndex={element.sectionIndex}
                      totalSections={5}
                      stagger={0.1}
                      duration={0.6}
                      delay={0.2}
                      earlyTrigger={false}
                    >
                      <h3 className="font-ITCGaramondN text-primary mb-6 text-4xl leading-[0.9] break-words md:text-5xl lg:text-6xl xl:text-7xl">
                        {element.title}
                      </h3>
                    </AnimatedTextHorizontal>

                    {/* Paragraph */}
                    <AnimatedTextHorizontal
                      horizontalContainer="[data-horizontal-scroll-free]"
                      sectionIndex={element.sectionIndex}
                      totalSections={5}
                      stagger={0.05}
                      duration={0.5}
                      delay={0.4}
                      earlyTrigger={false}
                    >
                      <p className="font-HelveticaNow text-primary/90 mb-6 max-w-full text-lg leading-relaxed break-words hyphens-auto">
                        {element.paragraph}
                      </p>
                    </AnimatedTextHorizontal>

                    {/* Button */}
                    <AnimatedTextHorizontal
                      horizontalContainer="[data-horizontal-scroll-free]"
                      sectionIndex={element.sectionIndex}
                      totalSections={5}
                      stagger={0.05}
                      duration={0.5}
                      delay={0.55}
                      earlyTrigger={false}
                    >
                      <Link
                        href={
                          element.isCTASection
                            ? "/services"
                            : `/services/${element.slug}`
                        }
                      >
                        <button className="font-HelveticaNow">
                          <div className="border-primary hover:bg-primary hover:text-secondary flex cursor-pointer items-center border border-solid px-4 py-2 transition-colors duration-300 ease-in-out">
                            <span>
                              {element.isCTASection
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
                </div>
              );
            } else {
              // Image element
              const sizesValue = `(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40vw`;

              return (
                <div
                  key={`img-${index}`}
                  className="absolute overflow-hidden"
                  style={{
                    left: element.position.x,
                    top: element.position.top,
                    bottom: element.position.bottom,
                    width: element.position.width,
                    height: element.position.height,
                    maxWidth: element.position.maxWidth,
                    maxHeight: element.position.maxHeight,
                    zIndex: element.zIndex || 1,
                  }}
                  data-parallax-speed={element.parallaxSpeed || 0}
                >
                  <Image
                    src={element.src}
                    alt={element.alt}
                    fill
                    className="object-cover"
                    loading="lazy"
                    sizes={sizesValue}
                    quality={75}
                    fetchPriority="auto"
                  />
                </div>
              );
            }
          })}
        </div>
      </div>
    </>
  );
};

export default FreeLayoutScroll;
