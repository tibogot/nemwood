import type { Metadata } from "next";
import Image from "next/image";
import { generateMetadata } from "@/app/metadata";
import FAQ from "@/components/FAQ";
import AnimatedText from "@/components/AnimatedText3";
import ParallaxImage from "@/components/ParallaxImage";
import ServiceNavigation from "@/components/ServiceNavigation";
import BreadcrumbsSchema from "@/components/BreadcrumbsSchema";

export const metadata: Metadata = generateMetadata(
  "Tables en bois sur mesure en Belgique | Nemwood",
  "Fabrication de tables en bois massif sur mesure en Belgique. Tables à manger, tables basses, bureaux uniques et durables.",
  "/images/table.webp",
  "https://www.nemwood.be/services/tables",
);

export default function TablesPage() {
  return (
    <>
      <BreadcrumbsSchema
        items={[
          { name: "Accueil", url: "/" },
          { name: "Services", url: "/services" },
          { name: "Tables", url: "/services/tables" },
        ]}
      />
      <main className="bg-secondary text-primary">
      {/* Hero Section */}
      <section className="px-4 py-40 md:px-8 md:py-64">
        <div className="mx-auto max-w-4xl text-center">
          <AnimatedText isHero delay={0.0} stagger={0.3}>
            <h1 className="mb-6 text-5xl md:text-7xl">
              Tables en bois sur mesure
            </h1>
            <p className="font-HelveticaNow mx-auto max-w-2xl text-lg">
              Créez votre table en bois sur mesure : pièce centrale de votre
              maison, unique, durable et façonnée à la main dans notre atelier.
              Chaque table raconte une histoire et s'adapte parfaitement à votre
              mode de vie.
            </p>
          </AnimatedText>
        </div>
      </section>

      {/* Full Width Image Section with Parallax */}
      <ParallaxImage speed={1.5} className="h-[400px] md:h-[100svh]">
        <Image
          src="/images/table.webp"
          alt="Table en bois sur mesure - Artisanat Nemwood"
          fill
          className="object-cover"
          sizes="100vw"
          quality={85}
          priority
          fetchPriority="high"
        />
      </ParallaxImage>

      <section className="text-primary border-primary mx-auto border-y px-4 py-20 text-center md:px-8 md:py-40">
        <AnimatedText>
          <p className="font-HelveticaNow mx-auto text-lg md:max-w-2xl">
            La table autour de laquelle se rassemblent les vôtres. Pièce
            centrale de la maison, façonnée à la main dans notre atelier belge
            pour rassembler, partager et créer des souvenirs.
          </p>
        </AnimatedText>
      </section>

      {/* Section 01 - Text Left, Image Right (with image pushed down) */}
      <section className="w-full py-20 md:py-40">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-[1fr_1fr]">
            <div className="left">
              <div className="flex flex-row items-start gap-6 md:gap-8">
                <div className="shrink-0">
                  <span className="font-ITCGaramondN -mt-4 block text-8xl leading-none md:-mt-6 md:text-9xl">
                    01
                  </span>
                </div>
                <div className="flex min-w-0 flex-1 flex-col md:max-w-xl">
                  <AnimatedText>
                    <h2 className="font-ITCGaramondN text-4xl leading-none md:text-6xl">
                      La conception sur mesure
                    </h2>
                  </AnimatedText>
                  <AnimatedText>
                    <p className="font-HelveticaNow pt-8 text-lg">
                      Chaque table commence par une écoute attentive de vos
                      besoins. Nous analysons votre espace, vos habitudes de
                      vie, le nombre de convives et vos préférences esthétiques.
                      Que ce soit une table à manger pour rassembler toute la
                      famille, une table basse pour votre salon, ou un bureau
                      sur mesure pour votre espace de travail, nous adaptons
                      chaque dimension, chaque forme, chaque détail à votre
                      vision. Le résultat est une table unique qui s'intègre
                      parfaitement dans votre intérieur et répond exactement à
                      vos attentes.
                    </p>
                  </AnimatedText>
                </div>
              </div>
            </div>
            <div className="right flex flex-col items-start text-left">
              <div className="relative mt-10 h-[400px] w-full overflow-hidden bg-amber-400 select-none md:mt-16 md:h-[600px]">
                <Image
                  src="/images/atelier-1.webp"
                  alt="Table sur mesure Nemwood - Conception artisanale"
                  fill
                  className="object-cover transition-transform duration-500 ease-out hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 25vw"
                  quality={85}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="mb-10 md:mb-16">
            <div className="flex flex-row items-start gap-6 md:gap-8">
              <div className="shrink-0">
                <span className="font-ITCGaramondN -mt-4 block text-8xl leading-none opacity-0 md:-mt-6 md:text-9xl">
                  01
                </span>
              </div>
              <div className="flex min-w-0 flex-1 flex-col md:max-w-xl">
                <AnimatedText>
                  <p className="font-HelveticaNow text-lg">
                    Nous travaillons avec les plus belles essences de bois : chêne
                    pour sa robustesse et ses veines marquées, noyer pour son
                    élégance et sa chaleur, frêne pour sa légèreté et sa finesse.
                    Chaque essence est sélectionnée pour ses qualités spécifiques et
                    sa capacité à s'embellir avec le temps.
                  </p>
                </AnimatedText>
              </div>
            </div>
          </div>
          <div className="flex justify-center pt-10">
            <div className="relative h-[250px] w-full max-w-5xl overflow-hidden md:h-[500px]">
              <Image
                src="/images/table.webp"
                alt="Table en bois massif sur mesure Nemwood"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 80vw"
                quality={85}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 02 - Centered Layout */}
      <section className="w-full py-10 md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="mx-auto flex max-w-3xl flex-col items-center">
            <span className="font-ITCGaramondN text-8xl leading-none md:text-9xl">
              02
            </span>
            <AnimatedText>
              <h2 className="font-ITCGaramondN mt-6 text-4xl leading-none md:mt-8 md:text-6xl">
                L'artisanat du bois massif
              </h2>
            </AnimatedText>
            <div className="relative mt-10 h-[300px] w-full overflow-hidden md:mt-16 md:h-[450px]">
              <Image
                src="/images/wood-work.webp"
                alt="Fabrication artisanale de tables Nemwood"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 60vw"
                quality={85}
              />
            </div>
            <AnimatedText>
              <p className="font-HelveticaNow mt-10 w-full text-left text-lg md:mt-16">
                Dans notre atelier, chaque table est façonnée avec passion et
                expertise. Nos menuisiers maîtrisent les techniques ancestrales
                du travail du bois : sélection des planches, assemblage à tenons
                et mortaises, ponçage méticuleux. Nous privilégions le bois
                massif pour sa solidité exceptionnelle et sa capacité à résister
                aux épreuves du temps. Les pieds sont conçus pour supporter le
                poids de la table, les assemblages sont renforcés pour garantir
                une stabilité parfaite, même pour les plus grandes dimensions.
                Chaque geste compte, chaque détail est soigné.
              </p>
            </AnimatedText>
          </div>
        </div>
      </section>

      {/* Section 03 - Text Right, Image Left */}
      <section className="w-full py-10 md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-[1fr_1fr]">
            <div className="right flex flex-col items-start text-left md:order-1">
              <div className="relative h-[400px] w-full overflow-hidden bg-amber-400 select-none md:h-[600px]">
                <Image
                  src="/images/table.webp"
                  alt="Finition d'une table sur mesure Nemwood"
                  fill
                  className="object-cover transition-transform duration-500 ease-out hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 25vw"
                  quality={85}
                />
              </div>
            </div>
            <div className="left md:order-2">
              <div className="flex flex-row items-start gap-6 md:gap-8">
                <div className="shrink-0">
                  <span className="font-ITCGaramondN -mt-4 block text-8xl leading-none md:-mt-6 md:text-9xl">
                    03
                  </span>
                </div>
                <div className="flex min-w-0 flex-1 flex-col md:max-w-xl">
                  <AnimatedText>
                    <h2 className="font-ITCGaramondN text-4xl leading-none md:text-6xl">
                      La finition d'exception
                    </h2>
                  </AnimatedText>
                  <AnimatedText>
                    <p className="font-HelveticaNow pt-8 text-lg">
                      La finition transforme une table en œuvre d'art. Nous
                      proposons plusieurs options : huiles naturelles qui
                      pénètrent le bois et révèlent ses veines, vernis mat ou
                      satiné pour une protection durable, cires pour un aspect
                      chaleureux et authentique. Chaque finition est appliquée
                      en plusieurs couches, poncée entre chaque passage, pour
                      obtenir une surface lisse et résistante. Le résultat est
                      une table qui révèle toute la beauté du bois, protégée
                      contre les taches, l'humidité et l'usure, tout en
                      conservant son caractère naturel et chaleureux.
                    </p>
                  </AnimatedText>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 04 - Text Left, Image Right (aligned top) */}
      <section className="w-full py-10 md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-[1fr_1fr]">
            <div className="left">
              <div className="flex flex-row items-start gap-6 md:gap-8">
                <div className="shrink-0">
                  <span className="font-ITCGaramondN -mt-4 block text-8xl leading-none md:-mt-6 md:text-9xl">
                    04
                  </span>
                </div>
                <div className="flex min-w-0 flex-1 flex-col md:max-w-xl">
                  <AnimatedText>
                    <h2 className="font-ITCGaramondN text-4xl leading-none md:text-6xl">
                      L'accompagnement personnalisé
                    </h2>
                  </AnimatedText>
                  <AnimatedText>
                    <p className="font-HelveticaNow pt-8 text-lg">
                      De la première rencontre à l'installation finale, nous
                      vous accompagnons à chaque étape de votre projet. Nous
                      commençons par une visite à domicile pour comprendre votre
                      espace, vos besoins et votre style. Nous réalisons ensuite
                      un plan détaillé avec plusieurs propositions de design.
                      Une fois votre choix arrêté, nous vous fournissons un
                      devis transparent et un planning précis. Tout au long de
                      la fabrication, nous vous tenons informé de l'avancement.
                      L'installation est réalisée par nos équipes qui veillent à
                      chaque détail pour que votre table trouve parfaitement sa
                      place dans votre intérieur. Un meuble sur mesure, c'est
                      aussi un service sur mesure.
                    </p>
                  </AnimatedText>
                </div>
              </div>
            </div>
            <div className="right flex flex-col items-start text-left">
              <div className="relative h-[400px] w-full overflow-hidden bg-amber-400 select-none md:h-[600px]">
                <Image
                  src="/images/atelier-1.webp"
                  alt="Accompagnement personnalisé pour table sur mesure Nemwood"
                  fill
                  className="object-cover transition-transform duration-500 ease-out hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 25vw"
                  quality={85}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ
        title="Questions sur les tables"
        description="Découvrez les réponses aux questions les plus courantes sur nos tables en bois sur mesure."
        faqs={[
          {
            question: "Quels types de tables pouvez-vous réaliser ?",
            answer:
              "Nous réalisons tous types de tables : tables à manger, tables basses, tables de salon, tables de bureau, tables d'appoint. Chaque table est conçue selon vos dimensions et votre style.",
          },
          {
            question:
              "Quelles essences de bois recommandez-vous pour une table ?",
            answer:
              "Pour les tables, nous recommandons le chêne pour sa robustesse, le noyer pour son élégance, ou le frêne pour sa légèreté. Chaque essence a ses caractéristiques que nous vous expliquons lors du devis.",
          },
          {
            question: "Peut-on personnaliser la finition ?",
            answer:
              "Oui, nous proposons diverses finitions : huiles naturelles, vernis mat ou brillant, cires, ou même peintures. Chaque finition est choisie pour mettre en valeur le bois et s'adapter à votre intérieur.",
          },
          {
            question: "Quel est le délai de fabrication d'une table ?",
            answer:
              "Une table sur mesure prend généralement 2-3 semaines de fabrication, plus le temps de séchage et de finition. Nous vous fournissons un planning précis lors du devis.",
          },
        ]}
      />
      <ServiceNavigation />
    </main>
    </>
  );
}
