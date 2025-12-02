"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState, useRef, Suspense } from "react";
import client from "@/sanityClient";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, ChevronDown } from "lucide-react";
import AnimatedText from "@/components/AnimatedText3";
import BlogPreview from "@/components/BlogPreview";
import dynamic from "next/dynamic";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Dynamic imports for non-critical components
const HorizScroll = dynamic(() => import("@/components/HorizScroll8"), {
  loading: () => <div className="h-96 animate-pulse bg-gray-100" />,
  ssr: false,
});

const CardsScroll = dynamic(() => import("@/components/CardsScroll5"), {
  loading: () => <div className="h-96 animate-pulse bg-gray-100" />,
  ssr: false,
});

const Testimonial = dynamic(() => import("@/components/Testimonial"), {
  loading: () => <div className="h-64 animate-pulse bg-gray-100" />,
  ssr: false,
});

const BlurryTextReveal = dynamic(() => import("@/components/TextReveal"), {
  loading: () => <div className="h-32 animate-pulse bg-gray-100" />,
  ssr: false,
});

const FAQ = dynamic(() => import("@/components/FAQ"), {
  loading: () => <div className="h-64 animate-pulse bg-gray-100" />,
  ssr: false,
});

const AnimatedBorderLines = dynamic(
  () => import("@/components/AnimatedBorderLines"),
  {
    loading: () => <div className="h-32 animate-pulse bg-gray-100" />,
    ssr: false,
  },
);

export default function Home() {
  const [blogPosts, setBlogPosts] = useState<any[]>([]);
  const bigImgRef = useRef<HTMLDivElement>(null);
  const heroLogoRef = useRef<HTMLDivElement>(null);

  // GSAP animation for big image scale on scroll - optimized for performance
  useGSAP(
    () => {
      if (!bigImgRef.current) return;

      // Use requestIdleCallback to defer non-critical animations
      const scheduleAnimation = () => {
        if ("requestIdleCallback" in window) {
          requestIdleCallback(() => {
            setupAnimation();
          });
        } else {
          setTimeout(setupAnimation, 0);
        }
      };

      const setupAnimation = () => {
        if (!bigImgRef.current) return;

        // Reset to initial state first to prevent jump on navigation
        gsap.set(bigImgRef.current, { scale: 0.5 });

        // Use will-change for better performance
        gsap.set(bigImgRef.current, { willChange: "transform" });

        // Create scroll-triggered scale animation with optimized settings
        const animation = gsap.to(bigImgRef.current, {
          scale: 1,
          duration: 1,
          ease: "power2.out",
          force3D: true, // Force hardware acceleration
          scrollTrigger: {
            trigger: bigImgRef.current,
            start: "top 80%",
            end: "bottom 80%",
            scrub: 1,
            id: "big-img-scale",
            onUpdate: () => {
              // Use transform3d for better performance
              if (bigImgRef.current) {
                gsap.set(bigImgRef.current, { force3D: true });
              }
            },
          },
        });

        // Add completion handler separately
        animation.eventCallback("onComplete", () => {
          // Remove will-change after animation completes
          if (bigImgRef.current) {
            gsap.set(bigImgRef.current, { willChange: "auto" });
          }
        });

        // Store animation reference for cleanup
        (bigImgRef.current as any).scrollAnimation = animation;
      };

      // Delay ScrollTrigger setup to avoid conflict with scroll-to-top navigation
      const timeoutId = setTimeout(scheduleAnimation, 100);

      // Cleanup function
      return () => {
        clearTimeout(timeoutId);
        if (bigImgRef.current && (bigImgRef.current as any).scrollAnimation) {
          (bigImgRef.current as any).scrollAnimation.kill();
        }
        ScrollTrigger.getById("big-img-scale")?.kill();
      };
    },
    { scope: bigImgRef },
  );

  // Animate hero logo after PageLoader completes (same pattern as AnimatedText with isHero)
  useEffect(() => {
    if (!heroLogoRef.current) return;

    // Set initial state (logo starts from below)
    gsap.set(heroLogoRef.current, {
      y: 100,
      opacity: 0,
    });

    const handlePageLoaderComplete = () => {
      if (!heroLogoRef.current) return;

      // Wait same delay as hero text (200ms) before animating
      setTimeout(() => {
        if (!heroLogoRef.current) return;

        gsap.to(heroLogoRef.current, {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power2.out",
        });
      }, 200);
    };

    // Check if PageLoader is already complete
    if (document.documentElement.classList.contains("page-loader-complete")) {
      handlePageLoaderComplete();
    } else {
      // Listen for PageLoader completion
      window.addEventListener("pageLoaderComplete", handlePageLoaderComplete);

      return () => {
        window.removeEventListener(
          "pageLoaderComplete",
          handlePageLoaderComplete,
        );
      };
    }
  }, []);

  useEffect(() => {
    // Defer blog posts loading to improve initial page load
    const fetchPosts = async () => {
      try {
        const posts = await client.fetch(
          `*[_type == "post" && language == "fr"]|order(_createdAt desc)[0...3]{
            _id,
            title,
            slug,
            description,
            mainImage {
              asset->{url}
            },
            publishedAt,
            body,
            language
          }`,
        );
        setBlogPosts(posts);
      } catch (error) {
        console.error("Error fetching blog posts:", error);
      }
    };

    // Use requestIdleCallback to defer non-critical data fetching
    if ("requestIdleCallback" in window) {
      requestIdleCallback(() => {
        fetchPosts();
      });
    } else {
      setTimeout(fetchPosts, 100);
    }
  }, []);

  return (
    <main className="wrapper bg-secondary">
      {/* Hero Section */}
      <section className="relative flex h-[100svh] flex-col items-center justify-between px-4 pt-20 pb-10 md:px-8 md:pt-24 md:pb-16">
        {/* Hero background image */}
        <Image
          className="absolute inset-0 h-full w-full object-cover"
          src="/images/hero-nemwood.webp"
          alt="Nemwood - Artisan menuisier en Belgique - Mobilier sur mesure en bois massif"
          fill
          sizes="100vw"
          quality={85}
          priority
          fetchPriority="high"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
        />

        {/* Logo and location text centered in hero */}
        <div className="absolute top-1/2 right-0 left-0 z-10 flex w-full -translate-y-1/2 flex-col items-center justify-center px-4 md:px-8">
          <div
            ref={heroLogoRef}
            className="flex w-full items-center justify-center text-[#FFFCF5]"
          >
            <img src="/logohero.svg" alt="Nemwood" className="h-auto w-full" />
          </div>
          <div className="pointer-events-none mt-8 flex justify-center md:mt-12">
            <AnimatedText isHero>
              <span className="font-ITCGaramondN text-4xl text-[#fffcf5]">
                Brussels, Belgium
              </span>
            </AnimatedText>
          </div>
        </div>
      </section>

      <section className="text-primary section2 px-4 md:px-8">
        {/* <div className="mx-auto py-20 text-center md:py-40">
          <AnimatedText delay={0.0} stagger={0.3}>
            <h1 className="mb-6">Meubles en bois sur mesure</h1>
            <p className="font-HelveticaNow mx-auto max-w-2xl text-lg">
              Vous cherchez un artisan menuisier en Belgique pour créer des
              meubles en bois sur mesure ? Nemwood est spécialisé dans la
              fabrication artisanale de tables, chaises, garde-robes, escaliers
              et même de décors pour le cinéma.
            </p>
            <p className="font-HelveticaNow text-primary/70 mx-auto mt-4 max-w-2xl text-sm leading-tight">
              En activité depuis 2016 en Belgique.
            </p>
          </AnimatedText>
        </div> */}

        <section className="text-primary bg-secondary intro mx-auto px-4 py-20 text-center md:px-8 md:py-20">
          <AnimatedText delay={0.0} stagger={0.3}>
            <h1 className="font-ITCGaramondN mx-auto mb-6 max-w-4xl text-6xl">
              Meubles en bois sur mesure
            </h1>
            <p className="font-HelveticaNow mx-auto max-w-2xl text-lg">
              Vous cherchez un artisan menuisier en Belgique pour créer des
              meubles en bois sur mesure ? Nemwood est spécialisé dans la
              fabrication artisanale de tables, chaises, garde-robes, escaliers
              et même de décors pour le cinéma.
            </p>
          </AnimatedText>
        </section>

        {/* Big Image */}
        <div
          ref={bigImgRef}
          className="big-img flex w-full justify-center pb-20"
        >
          <div className="relative h-[600px] w-full md:h-[800px] md:w-4/5">
            <Image
              src="/images/BBP Dansaert 5.webp"
              alt="Nemwood furniture showcase"
              fill
              className="rounded-sm object-cover"
              sizes="(max-width: 768px) 100vw, 80vw"
              loading="lazy"
              quality={80}
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
            />
          </div>
        </div>
      </section>
      {/* <ReverseCards /> */}
      <section className="border-primary text-primary flex w-full flex-col gap-8 border-y px-4 py-10 pb-20 md:flex-row md:gap-12 md:px-8 md:py-20 md:pb-40">
        <div className="left md:w-1/2">
          <div>
            <AnimatedText delay={0.0} stagger={0.3}>
              {/* <h4 className="font-HelveticaNow text-primary/70 text-sm">
                A PROPOS
              </h4> */}
              <h2 className="mt-8 md:max-w-xl">Notre savoir-faire</h2>
              <p className="font-HelveticaNow mt-8 text-lg md:max-w-xl">
                Chez Nemwood, artisan ébéniste en Belgique, chaque meuble est
                conçu sur mesure dans notre atelier. Spécialisés dans la
                fabrication de meubles en bois massif, nous créons des cuisines
                sur mesure, mobilier de salon, escaliers et aménagements
                uniques. Notre savoir-faire artisanal privilégie le bois massif
                durable, travaillé à la main pour des créations authentiques et
                durables, parfaitement adaptées à votre intérieur.
              </p>
            </AnimatedText>

            <Link href="/a-propos">
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
        <div className="left mt-8 flex flex-col items-center justify-center text-center md:mt-0 md:w-1/2">
          <div className="w-full md:max-w-xl">
            <AnimatedBorderLines
              stagger={0.15}
              duration={0.6}
              delay={0.2}
              start="top 85%"
            >
              {[
                "Un artisanat de haute qualité",
                "Bois massif & éco-responsabilité",
                "Solutions Personnalisées",
                "Design & fonctionnalité",
              ].map((text, index) => (
                <div
                  key={index}
                  className="border-primary/50 mt-4 border-t pt-4"
                >
                  <div className="flex items-center justify-start gap-3">
                    <span className="text-primary relative top-[1px] text-3xl leading-none">
                      •
                    </span>

                    <p className="font-HelveticaNow text-left text-lg">
                      {text}
                    </p>
                  </div>
                </div>
              ))}
            </AnimatedBorderLines>
          </div>
        </div>
      </section>

      <Suspense fallback={<div className="h-96 animate-pulse bg-gray-100" />}>
        <HorizScroll />
      </Suspense>

      <section className="text-primary border-primary mx-auto border-y px-4 py-20 text-center md:px-8 md:py-40">
        {/* <h1 className="font-ITCGaramondN mb-6 text-6xl">
          Creativity to design
        </h1> */}
        <AnimatedText>
          <p className="font-HelveticaNow mx-auto text-lg md:max-w-2xl">
            Basés en Belgique, nous valorisons le travail du bois local, la
            précision des finitions, et un accompagnement sur-mesure tout au
            long du projet. Chaque meuble est conçu en étroite collaboration
            avec nos clients, pour répondre parfaitement à leurs attentes.
          </p>
        </AnimatedText>
      </section>

      <Suspense fallback={<div className="h-96 animate-pulse bg-gray-100" />}>
        <CardsScroll />
      </Suspense>

      {/* <section className="text-primary flex w-full flex-col gap-6 px-4 py-10 md:flex-row md:gap-20 md:px-8 md:py-20">
        <div className="left relative h-[400px] md:h-[400px] md:w-1/2">
          <Image
            src="/images/nem1.png"
            alt="Nemwood furniture showcase"
            fill
            className="rounded-sm object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            loading="lazy"
            quality={80}
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
          />
        </div>

        <div className="right flex flex-col justify-between md:h-[400px] md:w-1/2">
          <div>
            <AnimatedText delay={0.0} stagger={0.3}>
              <h2 className="font-ITCGaramondN text-4xl leading-none md:max-w-xl md:text-6xl">
                Meubles en bois sur mesure pour votre intérieur
              </h2>
              <p className="font-HelveticaNow mt-8 max-w-xl text-lg">
                Vous cherchez un artisan menuisier en Belgique pour créer des
                meubles en bois sur mesure ? <br />
                Nemwood est spécialisé dans la fabrication artisanale de tables,
                chaises, garde-robes, escaliers et même de décors pour le
                cinéma.
              </p>
            </AnimatedText>
          </div>

          <div className="mt-10">
            <button className="font-HelveticaNow">
              <div className="border-primary hover:bg-primary hover:text-secondary inline-flex items-center border border-solid px-4 py-2 transition-colors duration-300 ease-in-out">
                <span>En savoir plus</span>
                <div className="mt-0.5 ml-1">
                  <ArrowRight size={18} strokeWidth={1.5} />
                </div>
              </div>
            </button>
          </div>
        </div>
      </section> */}

      <section className="border-primary border-y py-40 md:py-80">
        <Suspense fallback={<div className="h-32 animate-pulse bg-gray-100" />}>
          <BlurryTextReveal />
        </Suspense>
      </section>

      <Suspense fallback={<div className="h-64 animate-pulse bg-gray-100" />}>
        <Testimonial />
      </Suspense>

      {/* FAQ Section */}
      <Suspense fallback={<div className="h-64 animate-pulse bg-gray-100" />}>
        <FAQ
          title="Questions fréquentes"
          description="Trouvez les réponses aux questions les plus courantes sur nos services de menuiserie sur mesure en Belgique."
          faqs={[
            {
              question: "Proposez-vous des devis gratuits ?",
              answer:
                "Oui, nous proposons des devis gratuits et sans engagement pour tous nos projets de menuiserie sur mesure. Contactez-nous pour planifier une visite et discuter de vos besoins.",
            },
            {
              question: "Quels types de bois utilisez-vous ?",
              answer:
                "Nous travaillons exclusivement avec du bois massif de qualité supérieure : chêne, hêtre, noyer, frêne et autres essences durables. Chaque essence est sélectionnée selon le projet et vos préférences esthétiques.",
            },
            {
              question: "Combien de temps prend la réalisation d'un projet ?",
              answer:
                "Les délais varient selon la complexité du projet. Un escalier simple prend 4-6 semaines, une garde-robe 3-4 semaines, et une cuisine complète 6-8 semaines. Nous vous fournissons un planning détaillé lors du devis.",
            },
            {
              question: "Travaillez-vous dans toute la Belgique ?",
              answer:
                "Oui, nous intervenons dans toute la Belgique. Nos artisans se déplacent pour les mesures, l'installation et le suivi de vos projets, quel que soit votre lieu de résidence.",
            },
          ]}
        />
      </Suspense>

      {/* Blog Previews Section */}
      <section className="border-primary border-y px-4 py-10 md:px-8 md:py-20">
        <div className="flex w-full">
          <AnimatedText delay={0.0} stagger={0.3}>
            <h2 className="font-ITCGaramondN text-primary text-5xl md:text-7xl">
              Actualités
            </h2>
          </AnimatedText>
        </div>

        {/* Mobile: Horizontal Scroll Carousel */}
        <div className="mt-8 md:hidden">
          <ul className="scrollbar-hide flex list-none gap-6 overflow-x-auto p-0">
            {blogPosts.map((post, index) => (
              <BlogPreview
                key={post._id}
                post={post}
                layout="horizontal-scroll"
                className={`${index === 0 ? "ml-0" : ""} ${index === blogPosts.length - 1 ? "mr-0" : ""}`}
              />
            ))}
          </ul>
        </div>

        {/* Desktop: Regular Grid Layout */}
        <ul className="mt-8 hidden list-none flex-row justify-start gap-8 p-0 md:mt-20 md:flex">
          {blogPosts.map((post) => (
            <BlogPreview
              key={post._id}
              post={post}
              layout="grid"
              className="flex-1"
            />
          ))}
        </ul>
        <div className="mt-3 md:mt-6">
          <Link
            href="/blog"
            className="font-HelveticaNow text-primary font-medium underline"
          >
            Voir tous les articles
          </Link>
        </div>
      </section>
    </main>
  );
}
