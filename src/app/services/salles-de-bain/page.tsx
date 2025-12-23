import type { Metadata } from "next";
import Image from "next/image";
import ParallaxImage from "@/components/ParallaxImage";
import AnimatedText from "@/components/AnimatedText3";
import { generateMetadata } from "@/app/metadata";
import FAQ from "@/components/FAQ";
import ServiceNavigation from "@/components/ServiceNavigation";
import BreadcrumbsSchema from "@/components/BreadcrumbsSchema";

export const metadata: Metadata = generateMetadata(
  "Salles de bain sur mesure en Belgique | Nemwood",
  "Salles de bain en bois sur mesure pour créer un espace de détente unique. Fabrication artisanale en Belgique par Nemwood.",
  "/images/horiz-cuisine.webp",
  "https://www.nemwood.be/services/salles-de-bain",
);

export default function SalleDeBainPage() {
  return (
    <>
      <BreadcrumbsSchema
        items={[
          { name: "Accueil", url: "/" },
          { name: "Services", url: "/services" },
          { name: "Salles de bain", url: "/services/salles-de-bain" },
        ]}
      />
      <main className="bg-secondary text-primary">
      {/* Hero Section */}
      <section className="px-4 py-40 md:px-8 md:py-64">
        <div className="mx-auto max-w-4xl text-center">
          <AnimatedText isHero delay={0.0} stagger={0.3}>
            <h1 className="mb-6 text-5xl md:text-7xl">Salles de bain</h1>
            <p className="font-HelveticaNow mx-auto max-w-2xl text-lg">
              Salles de bain en bois sur mesure pour créer un espace de détente
              unique et fonctionnel. Chaque salle de bain est conçue pour allier
              esthétique et praticité dans un environnement humide.
            </p>
          </AnimatedText>
        </div>
      </section>

      {/* Full Width Image Section with Parallax */}
      <ParallaxImage speed={1.5} className="h-[400px] md:h-[100svh]">
        <Image
          src="/images/horiz-cuisine.webp"
          alt="Salle de bain sur mesure Nemwood"
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
            Espace de sérénité. Des salles de bain en bois qui résistent à
            l'humidité, façonnées en Belgique pour créer un havre de paix où le
            temps suspend son vol.
          </p>
        </AnimatedText>
      </section>

      {/* Section 01 - Text Left, Image Right */}
      <section className="w-full py-20 md:py-40">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-[1fr_1fr]">
            <div className="left">
              <div className="flex flex-col items-start gap-6 md:flex-row md:gap-8">
                <div className="shrink-0">
                  <span className="font-ITCGaramondN -mt-4 block text-8xl leading-none md:-mt-6 md:text-9xl">
                    01
                  </span>
                </div>
                <div className="flex min-w-0 w-full flex-col md:flex-1 md:max-w-xl">
                  <AnimatedText>
                    <h2 className="font-ITCGaramondN text-4xl leading-none md:text-6xl">
                      Les essences résistantes à l'humidité
                    </h2>
                  </AnimatedText>
                  <AnimatedText>
                    <p className="font-HelveticaNow pt-8 text-lg">
                      Une salle de bain en bois doit être conçue avec des
                      essences naturellement résistantes à l'humidité. Nous
                      travaillons avec le teck, l'iroko, le chêne traité, ou le
                      cèdre rouge, essences qui résistent parfaitement aux
                      variations d'humidité et à la condensation. Chaque essence
                      est sélectionnée pour ses qualités spécifiques : le teck
                      pour son élégance et sa résistance naturelle, l'iroko pour
                      sa durabilité exceptionnelle, le chêne traité pour sa
                      robustesse. Nous appliquons aussi des traitements
                      hydrofuges supplémentaires pour garantir une protection
                      maximale. Le résultat est un bois qui conserve sa beauté
                      même dans un environnement humide constant.
                    </p>
                  </AnimatedText>
                </div>
              </div>
            </div>
            <div className="right flex flex-col items-start text-left">
              <div className="relative h-[480px] w-full overflow-hidden bg-amber-400 select-none md:h-[620px]">
                <Image
                  src="/images/atelier-1.webp"
                  alt="Salle de bain en bois résistant à l'humidité Nemwood"
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

      {/* Section 02 - Image Left, Text Right with overlapping */}
      <section className="w-full py-10 md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-[1fr_1fr]">
            <div className="right relative flex flex-col items-start text-left md:order-1">
              <div className="relative h-[450px] w-full overflow-hidden bg-amber-400 select-none md:h-[610px]">
                <Image
                  src="/images/wood-work.webp"
                  alt="Fabrication artisanale de salle de bain Nemwood"
                  fill
                  className="object-cover transition-transform duration-500 ease-out hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 25vw"
                  quality={85}
                />
              </div>
              {/* Overlapping smaller image */}
              <div className="absolute right-8 -bottom-12 h-[270px] w-[60%] overflow-hidden bg-amber-400 select-none md:right-12 md:-bottom-16 md:h-[340px]">
                <Image
                  src="/images/horiz-cuisine.webp"
                  alt="Détail de la salle de bain sur mesure"
                  fill
                  className="object-cover transition-transform duration-500 ease-out hover:scale-105"
                  sizes="(max-width: 768px) 30vw, 15vw"
                  quality={85}
                />
              </div>
            </div>
            <div className="left md:order-2">
              <div className="flex flex-col items-start gap-6 md:flex-row md:gap-8">
                <div className="shrink-0">
                  <span className="font-ITCGaramondN -mt-4 block text-8xl leading-none md:-mt-6 md:text-9xl">
                    02
                  </span>
                </div>
                <div className="flex min-w-0 w-full flex-col md:flex-1 md:max-w-xl">
                  <AnimatedText>
                    <h2 className="font-ITCGaramondN text-4xl leading-none md:text-6xl">
                      L'aménagement sur mesure
                    </h2>
                  </AnimatedText>
                  <AnimatedText>
                    <p className="font-HelveticaNow pt-8 text-lg">
                      Chaque salle de bain est un espace unique avec ses
                      contraintes : dimensions, position des arrivées d'eau,
                      évacuations, fenêtres. Nous concevons des aménagements qui
                      optimisent chaque centimètre disponible. Meubles vasque
                      sur mesure, rangements intégrés dans les angles, niches
                      dans les murs, bancs de douche personnalisés, étagères
                      adaptées. Chaque élément est pensé pour créer un espace de
                      rangement optimal tout en conservant une esthétique
                      apaisante. Nous intégrons aussi des solutions spécifiques
                      : rangements pour produits de soin, séchoirs intégrés,
                      espaces pour serviettes. Le résultat est une salle de bain
                      où chaque objet a sa place, créant un espace de détente
                      organisé et harmonieux.
                    </p>
                  </AnimatedText>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 03 - Centered Layout */}
      <section className="w-full py-10 md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="mx-auto flex max-w-3xl flex-col items-center">
            <span className="font-ITCGaramondN text-8xl leading-none md:text-9xl">
              03
            </span>
            <AnimatedText>
              <h2 className="font-ITCGaramondN mt-6 text-4xl leading-none md:mt-8 md:text-6xl">
                Les finitions hydrofuges
              </h2>
            </AnimatedText>
            <div className="relative mt-10 h-[340px] w-full overflow-hidden md:mt-16 md:h-[500px]">
              <Image
                src="/images/horiz-cuisine.webp"
                alt="Finition hydrofuge de salle de bain Nemwood"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 60vw"
                quality={85}
              />
            </div>
            <AnimatedText>
              <p className="font-HelveticaNow mt-10 w-full text-left text-lg md:mt-16">
                La finition d'une salle de bain en bois doit être spécifiquement
                adaptée à l'humidité constante. Nous appliquons des finitions
                hydrofuges professionnelles : huiles spéciales pour l'humidité,
                vernis polyuréthane hydrofuge, cires résistantes à l'eau. Chaque
                finition est appliquée en plusieurs couches, avec un ponçage
                méticuleux entre chaque passage, pour créer une barrière
                imperméable efficace. Nous prêtons une attention particulière
                aux zones critiques : autour de la douche, près du lavabo, sur
                les surfaces horizontales. Le bois est aussi traité avant la
                pose pour une protection en profondeur. Le résultat est un bois
                qui résiste parfaitement à l'humidité tout en conservant son
                aspect naturel et chaleureux, créant un espace de détente qui
                traverse les années.
              </p>
            </AnimatedText>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ
        title="Questions sur les salles de bain"
        description="Découvrez les réponses aux questions les plus courantes sur nos salles de bain en bois sur mesure."
        faqs={[
          {
            question: "Le bois résiste-t-il à l'humidité de la salle de bain ?",
            answer:
              "Oui, nous utilisons des essences de bois traitées et des finitions spéciales pour l'humidité. Le teck, l'iroko ou le chêne traité sont parfaits pour les salles de bain et résistent parfaitement à l'humidité.",
          },
          {
            question: "Quels éléments pouvez-vous intégrer ?",
            answer:
              "Nous intégrons tous types d'éléments : meubles vasque, rangements, étagères, niches, bancs, ou solutions sur mesure. Chaque élément est conçu pour optimiser votre espace et résister à l'humidité.",
          },
          {
            question: "Peut-on rénover une salle de bain existante ?",
            answer:
              "Oui, nous proposons la rénovation complète ou partielle. Nous pouvons remplacer les meubles, ajouter des rangements, ou refaire entièrement l'aménagement en respectant vos contraintes existantes.",
          },
          {
            question: "Quel est le délai de réalisation ?",
            answer:
              "Une salle de bain complète prend 4-6 semaines de fabrication et installation. Nous planifions chaque étape pour minimiser les désagréments et respecter vos contraintes d'usage.",
          },
        ]}
      />
      <ServiceNavigation />
    </main>
    </>
  );
}
