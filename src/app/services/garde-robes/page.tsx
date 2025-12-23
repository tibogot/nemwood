import type { Metadata } from "next";
import Image from "next/image";
import { generateMetadata } from "@/app/metadata";
import FAQ from "@/components/FAQ";
import AnimatedText from "@/components/AnimatedText3";
import ParallaxImage from "@/components/ParallaxImage";
import ServiceNavigation from "@/components/ServiceNavigation";
import BreadcrumbsSchema from "@/components/BreadcrumbsSchema";

export const metadata: Metadata = generateMetadata(
  "Garde-robes en bois sur mesure en Belgique | Nemwood",
  "Fabrication de garde-robes et dressings en bois massif sur mesure en Belgique. Solutions de rangement personnalisées.",
  "/images/wardrobe.webp",
  "https://www.nemwood.be/services/garde-robes",
);

export default function GardeRobesPage() {
  return (
    <>
      <BreadcrumbsSchema
        items={[
          { name: "Accueil", url: "/" },
          { name: "Services", url: "/services" },
          { name: "Garde-robes", url: "/services/garde-robes" },
        ]}
      />
      <main className="bg-secondary text-primary">
        {/* Hero Section */}
        <section className="px-4 py-40 md:px-8 md:py-64">
          <div className="mx-auto max-w-4xl text-center">
            <AnimatedText isHero delay={0.0} stagger={0.3}>
              <h1 className="mb-6 text-5xl md:text-7xl">
                Garde-robes en bois sur mesure
              </h1>
              <p className="font-HelveticaNow mx-auto max-w-2xl text-lg">
                Concevez une garde-robe en bois massif qui vous ressemble :
                chaleureuse, fonctionnelle et entièrement personnalisée selon
                vos besoins et votre espace. Solutions de rangement optimales
                pour tous les intérieurs.
              </p>
            </AnimatedText>
          </div>
        </section>

        {/* Full Width Image Section with Parallax */}
        <ParallaxImage speed={1.5} className="h-[400px] md:h-[100svh]">
          <Image
            src="/images/wardrobe.webp"
            alt="Garde-robe en bois sur mesure - Artisanat Nemwood"
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
              L'art de l'organisation. Des garde-robes sur mesure qui
              transforment chaque centimètre en espace utile, façonnées en
              Belgique pour simplifier votre quotidien.
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
                        L'optimisation de l'espace
                      </h2>
                    </AnimatedText>
                    <AnimatedText>
                      <p className="font-HelveticaNow pt-8 text-lg">
                        Chaque garde-robe commence par une analyse précise de
                        votre espace et de vos besoins. Nous concevons des
                        solutions de rangement sur mesure : étagères adaptées à
                        vos vêtements, tiroirs pour le linge, espaces cintres
                        pour les manteaux, rangements chaussures sur mesure,
                        niches pour accessoires. Rien n'est laissé au hasard.
                        Nous optimisons chaque recoin, chaque hauteur, chaque
                        largeur pour maximiser la capacité de rangement tout en
                        conservant un accès facile à chaque élément. Le résultat
                        est une garde-robe qui double pratiquement votre espace
                        de stockage disponible.
                      </p>
                    </AnimatedText>
                  </div>
                </div>
              </div>
              <div className="right flex flex-col items-start text-left">
                <div className="relative h-[500px] w-full overflow-hidden bg-amber-400 select-none md:h-[650px]">
                  <Image
                    src="/images/wardrobe.webp"
                    alt="Garde-robe optimisée sur mesure Nemwood"
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
              <div className="flex flex-col items-start gap-6 md:flex-row md:gap-8">
                <div className="shrink-0">
                  <span className="font-ITCGaramondN -mt-4 block text-8xl leading-none opacity-0 md:-mt-6 md:text-9xl">
                    01
                  </span>
                </div>
                <div className="flex min-w-0 w-full flex-col md:flex-1 md:max-w-xl">
                  <AnimatedText>
                    <p className="font-HelveticaNow text-lg">
                      Nous travaillons avec les essences de bois les plus
                      adaptées aux rangements : chêne pour sa robustesse, pin
                      pour sa chaleur, noyer pour son élégance. Chaque essence
                      est sélectionnée pour ses qualités et sa capacité à
                      s'adapter à votre style d'intérieur.
                    </p>
                  </AnimatedText>
                </div>
              </div>
            </div>
            <div className="flex justify-center pt-10">
              <div className="relative h-[280px] w-full max-w-5xl overflow-hidden md:h-[520px]">
                <Image
                  src="/images/atelier-1.webp"
                  alt="Garde-robe en bois massif sur mesure Nemwood"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 80vw"
                  quality={85}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Section 02 - Text Right, Image Left */}
        <section className="w-full py-10 md:py-20">
          <div className="mx-auto max-w-7xl px-4 md:px-8">
            <div className="grid grid-cols-1 gap-10 md:grid-cols-[1fr_1fr]">
              <div className="right flex flex-col items-start text-left md:order-1">
                <div className="relative mt-12 h-[450px] w-full overflow-hidden bg-amber-400 select-none md:mt-20 md:h-[680px]">
                  <Image
                    src="/images/wood-work.webp"
                    alt="Fabrication artisanale de garde-robe Nemwood"
                    fill
                    className="object-cover transition-transform duration-500 ease-out hover:scale-105"
                    sizes="(max-width: 768px) 50vw, 25vw"
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
                        Les systèmes de rangement
                      </h2>
                    </AnimatedText>
                    <AnimatedText>
                      <p className="font-HelveticaNow pt-8 text-lg">
                        Nous intégrons les systèmes de rangement les plus
                        modernes et fonctionnels : tiroirs à fermeture douce,
                        étagères réglables, tringles coulissantes pour cintres,
                        paniers coulissants, portants rotatifs. Chaque système
                        est choisi pour son ergonomie et sa capacité à faciliter
                        votre quotidien. Nous concevons aussi des solutions
                        spécifiques : compartiments à chaussures, tiroirs à
                        accessoires, espaces pour valises ou couettes. Tout est
                        pensé pour que chaque objet trouve sa place naturelle et
                        soit accessible en un geste.
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
                  Les portes et finitions
                </h2>
              </AnimatedText>
              <div className="relative mt-10 h-[320px] w-full overflow-hidden md:mt-16 md:h-[480px]">
                <Image
                  src="/images/wardrobe.webp"
                  alt="Portes et finitions de garde-robe Nemwood"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 60vw"
                  quality={85}
                />
              </div>
              <AnimatedText>
                <p className="font-HelveticaNow mt-10 w-full text-left text-lg md:mt-16">
                  Les portes de votre garde-robe sont le premier élément
                  visible. Nous proposons plusieurs options : portes battantes
                  pour un accès facile, portes coulissantes pour économiser
                  l'espace, portes pliantes pour une ouverture maximale, ou même
                  garde-robes sans portes pour un accès direct. Chaque type de
                  porte peut être personnalisé : miroir intégré, verre dépoli,
                  panneaux pleins, ou combinaisons créatives. Les finitions sont
                  choisies pour s'harmoniser parfaitement avec votre intérieur
                  et refléter votre style personnel.
                </p>
              </AnimatedText>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQ
          title="Questions sur les garde-robes"
          description="Découvrez les réponses aux questions les plus courantes sur nos garde-robes en bois sur mesure."
          faqs={[
            {
              question: "Quels types de rangements pouvez-vous intégrer ?",
              answer:
                "Nous intégrons tous types de rangements : étagères, tiroirs, cintres, chaussures, accessoires. Chaque garde-robe est conçue selon vos besoins spécifiques et l'espace disponible.",
            },
            {
              question: "Peut-on adapter une garde-robe à un espace existant ?",
              answer:
                "Absolument ! Nous nous spécialisons dans l'adaptation aux contraintes existantes. Nous prenons les mesures précises et concevons une solution parfaitement adaptée à votre espace.",
            },
            {
              question: "Quel est le délai de fabrication ?",
              answer:
                "Une garde-robe sur mesure prend généralement 3-4 semaines de fabrication, plus le temps d'installation. Nous vous fournissons un planning détaillé lors du devis.",
            },
            {
              question: "Proposez-vous des portes coulissantes ?",
              answer:
                "Oui, nous proposons tous types d'ouverture : portes battantes, coulissantes, ou même sans portes selon vos préférences et contraintes d'espace.",
            },
          ]}
        />
        <ServiceNavigation />
      </main>
    </>
  );
}
