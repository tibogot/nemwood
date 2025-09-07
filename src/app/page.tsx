"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import client from "@/sanityClient";

import HorizScroll from "@/components/HorizScroll8";
import CardsScroll from "@/components/CardsScroll5";
import { ArrowRight, ChevronDown } from "lucide-react";
import Testimonial from "@/components/Testimonial";
import AnimatedText from "@/components/AnimatedText3";
import BlurryTextReveal from "@/components/TextReveal";
import ReverseCards from "@/components/ReverseCards2";
import BlogPreview from "@/components/BlogPreview";
import FAQ from "@/components/FAQ";
import AnimatedBorderLines from "@/components/AnimatedBorderLines";

export default function Home() {
  const [blogPosts, setBlogPosts] = useState<any[]>([]);

  useEffect(() => {
    async function fetchPosts() {
      const posts = await client.fetch(
        `*[_type == "post"]|order(_createdAt desc)[0...3]{
          _id,
          title,
          slug,
          description,
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

  return (
    <main className="wrapper bg-secondary">
      {/* Hero Section */}
      <section className="relative flex h-[100svh] flex-col items-center justify-center px-4 md:px-8">
        {/* Hero background image */}
        <Image
          className="absolute inset-0 h-full w-full object-cover"
          src="/images/iso2.webp"
          alt="Nemwood - Artisan menuisier en Belgique - Mobilier sur mesure en bois massif"
          fill
          sizes="100vw"
          quality={90}
          priority
        />

        {/* Hero text */}
        <h4 className="font-ITCGaramondN relative z-10 text-4xl text-white md:text-6xl">
          Meubles en bois sur mesure
        </h4>
      </section>

      <section className="text-primary section2 px-4 md:px-8">
        {/* <div className="py-40"></div> */}
        <div className="mx-auto py-20 text-center md:py-40">
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
        </div>

        {/* Big Image */}
        <div className="flex w-full justify-center pb-20">
          <div className="relative h-[600px] w-full md:h-[800px] md:w-4/5">
            <Image
              src="/images/nem1.png"
              alt="Nemwood furniture showcase"
              fill
              className="rounded-sm object-cover"
              sizes="(max-width: 768px) 100vw, 80vw"
              // loading="lazy"
              quality={90}
            />
          </div>
        </div>
      </section>
      {/* <ReverseCards /> */}
      <section className="border-primary text-primary flex w-full flex-col border-y px-4 py-10 pb-20 md:flex-row md:px-8 md:py-20 md:pb-40">
        <div className="left md:w-1/2">
          <div>
            <AnimatedText delay={0.0} stagger={0.3}>
              <h4 className="font-HelveticaNow text-primary/70 text-sm">
                A PROPOS
              </h4>
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

      <HorizScroll />

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
      <CardsScroll />

      <section className="text-primary flex w-full flex-col gap-6 px-4 py-10 md:flex-row md:gap-20 md:px-8 md:py-20">
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
            <AnimatedText delay={0.0} stagger={0.3}>
              <h1 className="font-ITCGaramondN text-4xl leading-none md:max-w-xl md:text-6xl">
                Designing experiences that resonate and scale
              </h1>
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
      </section>

      <section className="border-primary border-t py-40 md:py-80">
        <BlurryTextReveal />
      </section>

      <Testimonial />

      {/* FAQ Section */}
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

      {/* Blog Previews Section */}
      <section className="border-primary border-y px-4 py-10 md:px-8 md:py-20">
        <div className="flex w-full flex-col">
          <h2 className="font-ITCGaramondN text-primary text-5xl md:text-7xl">
            Actualités
          </h2>
        </div>

        {/* Mobile: Horizontal Scroll Carousel */}
        <div className="mt-20 md:hidden">
          <ul className="scrollbar-hide flex list-none gap-6 overflow-x-auto p-0 pb-4">
            {blogPosts.map((post, index) => (
              <div
                key={post._id}
                className={`${index === 0 ? "ml-0" : ""} ${index === blogPosts.length - 1 ? "mr-0" : ""}`}
              >
                <BlogPreview post={post} />
              </div>
            ))}
          </ul>
        </div>

        {/* Desktop: Regular Grid Layout */}
        <ul className="mt-20 hidden list-none flex-row justify-center gap-6 p-0 md:flex">
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
