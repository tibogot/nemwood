import type { Metadata } from "next";
import Image from "next/image";
import { generateMetadata } from "@/app/metadata";
import FAQ from "@/components/FAQ";
import AnimatedText from "@/components/AnimatedText3";
import ParallaxImage from "@/components/ParallaxImage";
import ServiceNavigation from "@/components/ServiceNavigation";

export const metadata: Metadata = generateMetadata(
  "Escaliers en bois sur mesure en Belgique | Nemwood",
  "Fabrication d'escaliers en bois massif sur mesure en Belgique. Artisanat traditionnel, finitions personnalisées. Devis gratuit.",
  "/images/stairs.webp",
  "https://www.nemwood.be/services/escaliers",
);

export default function EscaliersPage() {
  return (
    <main className="bg-secondary text-primary">
      {/* Hero Section */}
      <section className="px-4 py-40 md:px-8 md:py-64">
        <div className="mx-auto max-w-4xl text-center">
          <AnimatedText isHero delay={0.0} stagger={0.3}>
            <h1 className="mb-6 text-5xl md:text-7xl">
              Escaliers en bois sur mesure
            </h1>
            <p className="font-HelveticaNow mx-auto max-w-2xl text-lg">
              Ajoutez du caractère à votre intérieur avec un escalier en bois
              sur mesure, alliant robustesse, esthétique et finition artisanale.
              Chaque escalier est conçu selon vos besoins spécifiques et
              l'architecture de votre espace.
            </p>
          </AnimatedText>
        </div>
      </section>

      {/* Full Width Image Section with Parallax */}
      <ParallaxImage speed={1.5} className="h-[400px] md:h-[100svh]">
        <Image
          src="/images/stairs.webp"
          alt="Escalier en bois sur mesure - Artisanat Nemwood"
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
            Architecture du mouvement. Chaque escalier relie vos espaces avec
            une élégance qui défie le temps, conçu et assemblé à la main dans
            notre atelier belge.
          </p>
        </AnimatedText>
      </section>

      {/* Section 01 - Centered Layout */}
      <section className="w-full py-10 md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="mx-auto flex max-w-3xl flex-col items-center">
            <span className="font-ITCGaramondN text-8xl leading-none md:text-9xl">
              01
            </span>
            <AnimatedText>
              <h2 className="font-ITCGaramondN mt-6 text-4xl leading-none md:mt-8 md:text-6xl">
                L'art architectural du bois
              </h2>
            </AnimatedText>
            <div className="relative mt-10 h-[300px] w-full overflow-hidden md:mt-16 md:h-[500px]">
              <Image
                src="/images/stairs.webp"
                alt="Escalier architectural sur mesure Nemwood"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 60vw"
                quality={85}
              />
            </div>
            <AnimatedText>
              <p className="font-HelveticaNow mt-10 w-full text-left text-lg md:mt-16">
                Chaque escalier est une structure architecturale qui défie les
                lois de la gravité avec élégance. Nous maîtrisons tous les types
                d'escaliers : droits pour une ascension fluide, tournants pour
                optimiser l'espace, hélicoïdaux pour une esthétique
                spectaculaire, suspendus pour une impression de légèreté. Chaque
                type demande une expertise technique particulière et une
                connaissance approfondie des contraintes structurelles. Nos
                artisans calculent chaque angle, chaque contremarche, chaque
                limon pour garantir à la fois la sécurité et la beauté.
              </p>
            </AnimatedText>
          </div>
        </div>
      </section>

      {/* Section 02 - Text Right, Image Left with overlapping effect */}
      <section className="w-full py-10 md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-[1fr_1fr]">
            <div className="right flex flex-col items-start text-left md:order-1">
              <div className="relative h-[450px] w-full overflow-hidden bg-amber-400 select-none md:h-[700px]">
                <Image
                  src="/images/wood-work.webp"
                  alt="Fabrication artisanale d'escalier Nemwood"
                  fill
                  className="object-cover transition-transform duration-500 ease-out hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 25vw"
                  quality={85}
                />
              </div>
              {/* Overlapping smaller image */}
              <div className="relative -mt-20 ml-8 h-[300px] w-[80%] overflow-hidden bg-amber-400 select-none md:-mt-32 md:ml-16 md:h-[400px]">
                <Image
                  src="/images/atelier-1.webp"
                  alt="Détail de l'escalier sur mesure"
                  fill
                  className="object-cover transition-transform duration-500 ease-out hover:scale-105"
                  sizes="(max-width: 768px) 40vw, 20vw"
                  quality={85}
                />
              </div>
            </div>
            <div className="left md:order-2">
              <div className="flex flex-row items-start gap-6 md:gap-8">
                <div className="shrink-0">
                  <span className="font-ITCGaramondN -mt-4 block text-8xl leading-none md:-mt-6 md:text-9xl">
                    02
                  </span>
                </div>
                <div className="flex min-w-0 flex-1 flex-col md:max-w-xl">
                  <AnimatedText>
                    <h2 className="font-ITCGaramondN text-4xl leading-none md:text-6xl">
                      La précision des assemblages
                    </h2>
                  </AnimatedText>
                  <AnimatedText>
                    <p className="font-HelveticaNow pt-8 text-lg">
                      Un escalier solide et durable repose sur la qualité de ses
                      assemblages. Nos menuisiers maîtrisent les techniques
                      ancestrales : tenons et mortaises pour les limons, queues
                      d'aronde pour les contremarches, encoches précises pour
                      les marches. Chaque assemblage est calculé au millimètre
                      près pour garantir une stabilité parfaite, même pour les
                      escaliers les plus imposants. Nous utilisons uniquement du
                      bois massif sélectionné pour sa résistance mécanique et sa
                      capacité à supporter des charges importantes sur la durée.
                      Le résultat est un escalier qui ne bougera pas, qui ne
                      grincera pas, même après des décennies d'utilisation.
                    </p>
                  </AnimatedText>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 03 - Text Left, Image Right (image pushed down) */}
      <section className="w-full py-20 md:py-40">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-[1fr_1fr]">
            <div className="left">
              <div className="flex flex-row items-start gap-6 md:gap-8">
                <div className="shrink-0">
                  <span className="font-ITCGaramondN -mt-4 block text-8xl leading-none md:-mt-6 md:text-9xl">
                    03
                  </span>
                </div>
                <div className="flex min-w-0 flex-1 flex-col md:max-w-xl">
                  <AnimatedText>
                    <h2 className="font-ITCGaramondN text-4xl leading-none md:text-6xl">
                      Les finitions sur mesure
                    </h2>
                  </AnimatedText>
                  <AnimatedText>
                    <p className="font-HelveticaNow pt-8 text-lg">
                      La finition d'un escalier doit être à la fois esthétique
                      et résistante à l'usure quotidienne. Nous proposons
                      plusieurs options adaptées aux escaliers : huiles
                      naturelles qui pénètrent profondément le bois, vernis
                      polyuréthane pour une protection maximale, cires pour un
                      aspect authentique, ou même des finitions antiglisse pour
                      la sécurité. Chaque finition est appliquée en plusieurs
                      couches, poncée entre chaque passage, pour obtenir une
                      surface parfaitement lisse et résistante. Nous prêtons une
                      attention particulière aux nez de marche et aux angles,
                      zones les plus exposées à l'usure. Le résultat est un
                      escalier qui conserve sa beauté dans le temps.
                    </p>
                  </AnimatedText>
                </div>
              </div>
            </div>
            <div className="right flex flex-col items-start text-left">
              <div className="relative mt-10 h-[350px] w-full overflow-hidden bg-amber-400 select-none md:mt-20 md:h-[550px]">
                <Image
                  src="/images/stairs.webp"
                  alt="Finition d'escalier sur mesure Nemwood"
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
        title="Questions sur les escaliers"
        description="Découvrez les réponses aux questions les plus courantes sur nos escaliers en bois sur mesure."
        faqs={[
          {
            question: "Quels types d'escaliers pouvez-vous réaliser ?",
            answer:
              "Nous réalisons tous types d'escaliers : droits, tournants, hélicoïdaux, suspendus, avec ou sans contremarches. Chaque escalier est conçu selon vos contraintes d'espace et vos préférences esthétiques.",
          },
          {
            question: "Quel est le prix d'un escalier sur mesure ?",
            answer:
              "Le prix varie selon la complexité, les dimensions et les matériaux choisis. Un escalier simple commence à 2 500€, un escalier tournant à 4 000€. Nous établissons un devis gratuit adapté à votre projet.",
          },
          {
            question: "Peut-on installer un escalier dans un bâtiment ancien ?",
            answer:
              "Oui, nous nous spécialisons dans l'adaptation aux contraintes des bâtiments anciens. Nous effectuons une étude préalable pour garantir une installation parfaite dans votre espace existant.",
          },
          {
            question: "Quelles finitions proposez-vous ?",
            answer:
              "Nous proposons diverses finitions : huiles naturelles, vernis, cires, ou peintures. Chaque finition est choisie pour mettre en valeur le bois et s'adapter à votre style d'intérieur.",
          },
        ]}
      />
      <ServiceNavigation />
    </main>
  );
}
