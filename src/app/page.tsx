"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import client from "@/sanityClient";

import HorizScroll from "@/components/HorizScroll7";
import CardsScroll from "@/components/CardsScroll5";
import { ArrowRight, ChevronDown } from "lucide-react";
import Testimonial from "@/components/Testimonial";
import AnimatedText from "@/components/AnimatedText3";
import BlurryTextReveal from "@/components/TextReveal";
import ReverseCards from "@/components/ReverseCards2";
import BlogPreview from "@/components/BlogPreview";

export default function Home() {
  const [blogPosts, setBlogPosts] = useState<any[]>([]);
  const [secondImageVisible, setSecondImageVisible] = useState(false);

  useEffect(() => {
    async function fetchPosts() {
      const posts = await client.fetch(
        `*[_type == "post"]|order(_createdAt desc)[0...3]{
          _id,
          title,
          slug,
          mainImage {
            asset->{url}
          },
          publishedAt,
          body
        }`,
      );
      setBlogPosts(posts);
    }
    fetchPosts();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setSecondImageVisible(true);
          observer.unobserve(entry.target);
        }
      });
    });

    const secondImageElement = document.querySelector(
      ".second-image-container",
    );
    if (secondImageElement) {
      observer.observe(secondImageElement);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <main className="wrapper bg-secondary">
      {/* Hero Section */}
      <section className="hero-section bg-secondary relative flex h-[100svh] flex-col items-center justify-between px-4 pt-20 pb-10 md:px-8">
        {/* Critical hero content for immediate LCP */}

        {/* Hero background image - PRIMARY LCP ELEMENT */}
        <Image
          className="absolute inset-0 h-full w-full object-cover"
          src="/images/iso2.webp"
          alt="Nemwood - Artisan menuisier en Belgique - Mobilier sur mesure en bois massif"
          fill
          sizes="100vw"
          quality={90}
          priority
          fetchPriority="high"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
        />
        {/* <div className="absolute inset-0 h-full w-full bg-gradient-to-b from-transparent to-black opacity-30"></div> */}
        {/* <Image
          className="relative z-10 h-auto w-full"
          src="/logonew4.svg"
          alt="Logo"
          width={1200} // use a large width for SVG
          height={300} // adjust height proportionally
          quality={100}
          priority
          fetchPriority="high"
        /> */}
        {/* <header className="hero-header">
          <AnimatedText isHero={true} duration={1.2}>
            <p className="font-HelveticaNow relative z-10 max-w-2xl text-center text-sm text-[#fffcf5] uppercase">
              Mobilier sur mesure en Belgique
            </p>
          </AnimatedText>
        </header> */}
        {/* <div className="relative z-10 mx-auto flex flex-col items-center text-center select-none">
          <p className="font-HelveticaNow text-2xl leading-tight text-white">
            Scroll
          </p>
          <ChevronDown color="white" />
        </div> */}
      </section>

      <section className="text-primary section2 px-4 md:px-8">
        {/* <div className="py-40"></div> */}
        <div className="mx-auto py-20 text-center md:py-40">
          <AnimatedText delay={0.0} stagger={0.3}>
            <h1
              className="mb-6"
              style={{
                opacity: 1,
                visibility: "visible",
                transform: "none",
                animation: "none",
                transition: "none",
              }}
            >
              Meubles en bois sur mesure
            </h1>
            <p className="font-HelveticaNow mx-auto max-w-2xl text-lg">
              Vous cherchez un artisan menuisier en Belgique pour créer des
              meubles en bois sur mesure ? Nemwood est spécialisé dans la
              fabrication artisanale de tables, chaises, garde-robes, escaliers
              et même de décors pour le cinéma.
            </p>
            <p className="font-HelveticaNow text-primary/70 mx-auto mt-4 max-w-2xl text-sm leading-tight">
              En activité depuis 2016 en Belgique.{" "}
            </p>
          </AnimatedText>
        </div>

        {/*Big Image - Optimized for LCP */}
        <div className="second-image-container flex w-full justify-center pb-20">
          <div className="relative h-[600px] w-full md:h-[800px] md:w-4/5">
            {secondImageVisible && (
              <Image
                src="/images/nem1.png"
                alt="Nemwood furniture showcase"
                fill
                className="rounded-sm object-cover"
                sizes="(max-width: 768px) 100vw, 80vw"
                loading="lazy"
                quality={90}
              />
            )}
          </div>
        </div>
      </section>
      <ReverseCards />
      <section className="text-primary flex w-full flex-col px-4 py-10 pb-20 md:flex-row md:px-8 md:py-20 md:pb-40">
        <div className="left md:w-1/2">
          <div>
            <AnimatedText>
              <h4 className="font-HelveticaNow text-primary/70 text-sm">
                A PROPOS
              </h4>
              <h2 className="mt-8 md:max-w-xl">
                Fabrication artisanale par Nemwood
              </h2>
            </AnimatedText>
            <p className="font-HelveticaNow mt-8 text-lg md:max-w-xl">
              Chez Nemwood, chaque meuble est une œuvre unique. Spécialisés dans
              la fabrication de mobilier en bois sur mesure en Belgique, nous
              mettons notre savoir-faire artisanal au service de vos projets,
              qu’il s’agisse d’aménager une cuisine, un salon, un escalier ou
              tout autre espace de vie. Nous utilisons exclusivement du bois
              massif durable, travaillé à la main avec passion pour créer des
              pièces uniques, durables et parfaitement adaptées à vos
              besoins.{" "}
            </p>
            <Link href="/about">
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
            {[
              "Un artisanat de haute qualité",
              "Bois massif & éco-responsabilité",
              "Solutions Personnalisées",
              "Design & fonctionnalité",
            ].map((text, index) => (
              <div key={index} className="border-primary/50 mt-4 border-t pt-4">
                <div className="flex items-center justify-start gap-3">
                  <span className="text-primary relative top-[1px] text-3xl leading-none">
                    •
                  </span>
                  <p className="font-HelveticaNow text-left text-lg">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <HorizScroll />

      <section className="text-primary mx-auto px-4 py-20 text-center md:px-8 md:py-40">
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
      <CardsScroll />

      {/* <section className="text-primary flex w-full flex-col gap-20 px-4 py-10 pb-20 md:flex-row md:px-8 md:py-20 md:pb-40">
        <div className="left relative h-[400px] md:h-[700px] md:w-1/2">
          <Image
            src="/images/nem1.png"
            alt="Random from Picsum"
            fill
            className="rounded-sm object-cover"
            sizes="(max-width: 768px) 100vw, 80vw"
            priority
          />
        </div>

        <div className="right flex flex-col justify-between md:h-[700px] md:w-1/2">
          <div>
            <h1 className="font-ITCGaramondN text-4xl leading-none md:max-w-xl md:text-6xl">
              Designing experiences that resonate and scale
            </h1>
            <p className="font-HelveticaNow mt-8 max-w-xl text-lg">
              Vous cherchez un artisan menuisier en Belgique pour créer des
              meubles en bois sur mesure ? <br />
              Nemwood est spécialisé dans la fabrication artisanale de tables,
              chaises, garde-robes, escaliers et même de décors pour le cinéma.
            </p>
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

      <section className="pb-80">
        <BlurryTextReveal />
      </section>

      <Testimonial />
      {/* Blog Previews Section */}
      <section className="px-4 py-10 md:px-8 md:py-20">
        <div className="flex w-full flex-col items-center">
          <h2 className="font-ITCGaramondN text-primary text-6xl md:text-8xl">
            Actualités
          </h2>
        </div>

        <ul className="mt-20 flex list-none flex-col gap-8 p-0 md:flex-row md:justify-center md:gap-6">
          {blogPosts.map((post) => (
            <BlogPreview key={post._id} post={post} />
          ))}
        </ul>
        <div className="mt-6">
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
