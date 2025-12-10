import type { Metadata } from "next";
import Image from "next/image";
import { generateMetadata } from "@/app/metadata";
import FAQ from "@/components/FAQ";
import AnimatedText from "@/components/AnimatedText3";
import ParallaxImage from "@/components/ParallaxImage";
import ServiceNavigation from "@/components/ServiceNavigation";
import BreadcrumbsSchema from "@/components/BreadcrumbsSchema";

export const metadata: Metadata = generateMetadata(
  "Cuisines en bois sur mesure en Belgique | Nemwood",
  "Fabrication de cuisines en bois massif sur mesure en Belgique. Aménagements cuisine personnalisés, meubles de cuisine artisanaux.",
  "/images/kitchen.webp",
  "https://www.nemwood.be/services/cuisines",
);

export default function CuisinesPage() {
  return (
    <>
      <BreadcrumbsSchema
        items={[
          { name: "Accueil", url: "/" },
          { name: "Services", url: "/services" },
          { name: "Cuisines", url: "/services/cuisines" },
        ]}
      />
      <main className="bg-secondary text-primary">
      {/* Hero Section */}
      <section className="px-4 py-40 md:px-8 md:py-64">
        <div className="mx-auto max-w-4xl text-center">
          <AnimatedText isHero delay={0.0} stagger={0.3}>
            <h1 className="mb-6 text-5xl md:text-7xl">
              Cuisines en bois sur mesure
            </h1>
            <p className="font-HelveticaNow mx-auto max-w-2xl text-lg">
              Concevez une cuisine en bois massif qui vous ressemble :
              chaleureuse, fonctionnelle et entièrement personnalisée selon vos
              besoins et votre espace. Le cœur de votre maison mérite une
              attention particulière.
            </p>
          </AnimatedText>
        </div>
      </section>

      {/* Full Width Image Section with Parallax */}
      <ParallaxImage speed={1.5} className="h-[400px] md:h-[100svh]">
        <Image
          src="/images/kitchen.webp"
          alt="Cuisine en bois sur mesure - Artisanat Nemwood"
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
            Le cœur qui bat. Des cuisines sur mesure où chaque geste devient
            naturel, façonnées en Belgique pour transformer la cuisine en art de
            vivre.
          </p>
        </AnimatedText>
      </section>

      {/* Section 01 - Text Left, Image Right */}
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
                      Le triangle d'activité optimisé
                    </h2>
                  </AnimatedText>
                  <AnimatedText>
                    <p className="font-HelveticaNow pt-8 text-lg">
                      Une cuisine fonctionnelle repose sur l'optimisation du
                      triangle d'activité : cuisson, préparation, stockage. Nous
                      concevons chaque cuisine en analysant vos habitudes
                      culinaires et vos déplacements naturels dans l'espace.
                      Chaque zone est positionnée pour minimiser les mouvements
                      et maximiser l'efficacité. Nous adaptons aussi les
                      hauteurs de plan de travail selon votre taille, créant un
                      espace confortable qui réduit la fatigue. Les rangements
                      sont pensés pour avoir chaque ustensile à portée de main,
                      chaque ingrédient facilement accessible. Le résultat est
                      une cuisine où cuisiner devient un plaisir fluide et
                      naturel.
                    </p>
                  </AnimatedText>
                </div>
              </div>
            </div>
            <div className="right flex flex-col items-start text-left">
              <div className="relative h-[500px] w-full overflow-hidden bg-amber-400 select-none md:h-[640px]">
                <Image
                  src="/images/kitchen.webp"
                  alt="Cuisine optimisée sur mesure Nemwood"
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
              <div className="relative h-[460px] w-full overflow-hidden bg-amber-400 select-none md:h-[630px]">
                <Image
                  src="/images/wood-work.webp"
                  alt="Fabrication artisanale de cuisine Nemwood"
                  fill
                  className="object-cover transition-transform duration-500 ease-out hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 25vw"
                  quality={85}
                />
              </div>
              {/* Overlapping smaller image */}
              <div className="absolute -bottom-10 -left-4 h-[280px] w-[70%] overflow-hidden bg-amber-400 select-none md:-bottom-14 md:-left-8 md:h-[360px]">
                <Image
                  src="/images/atelier-1.webp"
                  alt="Détail de la cuisine sur mesure"
                  fill
                  className="object-cover transition-transform duration-500 ease-out hover:scale-105"
                  sizes="(max-width: 768px) 35vw, 17vw"
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
                      Les matériaux résistants
                    </h2>
                  </AnimatedText>
                  <AnimatedText>
                    <p className="font-HelveticaNow pt-8 text-lg">
                      Une cuisine doit résister à l'humidité, à la chaleur, aux
                      taches et à l'usage intensif. Nous sélectionnons des
                      matériaux spécifiquement adaptés aux cuisines : bois
                      massifs traités contre l'humidité, plans de travail en
                      bois dur ou composite résistant aux chocs et à la chaleur,
                      finitions hydrofuges et faciles d'entretien. Chaque
                      matériau est choisi pour ses qualités techniques mais
                      aussi pour sa capacité à créer une atmosphère chaleureuse.
                      Nous combinons aussi différents matériaux : bois pour les
                      façades, pierre ou composite pour les plans de travail,
                      acier pour certains équipements. Le résultat est une
                      cuisine qui allie beauté et résistance dans le temps.
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
                L'équipement intégré
              </h2>
            </AnimatedText>
            <div className="relative mt-10 h-[330px] w-full overflow-hidden md:mt-16 md:h-[490px]">
              <Image
                src="/images/kitchen.webp"
                alt="Équipement intégré dans cuisine Nemwood"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 60vw"
                quality={85}
              />
            </div>
            <AnimatedText>
              <p className="font-HelveticaNow mt-10 w-full text-left text-lg md:mt-16">
                Une cuisine moderne intègre parfaitement tous les équipements.
                Nous concevons des aménagements pour encastrer électroménager,
                créer des niches pour micro-ondes et fours, intégrer l'éclairage
                LED sous les étagères, prévoir des systèmes d'extraction
                discrets. Chaque équipement est positionné pour faciliter votre
                usage tout en conservant une esthétique harmonieuse. Nous
                intégrons aussi des systèmes innovants : tiroirs à fermeture
                douce, étagères coulissantes, systèmes de rangement pour
                casseroles et poêles. Rien n'est laissé au hasard pour créer une
                cuisine où chaque élément a sa place naturelle et fonctionnelle.
              </p>
            </AnimatedText>
          </div>
        </div>
      </section>

      {/* Section 04 - Text Right, Image Left (pushed down) */}
      <section className="w-full py-10 md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-[1fr_1fr]">
            <div className="right flex flex-col items-start text-left md:order-1">
              <div className="relative mt-14 h-[400px] w-full overflow-hidden bg-amber-400 select-none md:mt-24 md:h-[580px]">
                <Image
                  src="/images/wood-work.webp"
                  alt="Finition de cuisine sur mesure Nemwood"
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
                    04
                  </span>
                </div>
                <div className="flex min-w-0 flex-1 flex-col md:max-w-xl">
                  <AnimatedText>
                    <h2 className="font-ITCGaramondN text-4xl leading-none md:text-6xl">
                      Les finitions culinaires
                    </h2>
                  </AnimatedText>
                  <AnimatedText>
                    <p className="font-HelveticaNow pt-8 text-lg">
                      La finition d'une cuisine doit résister aux éclaboussures,
                      à la graisse, aux taches alimentaires et à l'humidité
                      constante. Nous appliquons des finitions spécifiques aux
                      cuisines : vernis polyuréthane pour une protection
                      maximale, huiles dures pour une résistance aux taches,
                      finitions antimicrobiennes pour un espace sain. Chaque
                      finition est appliquée en plusieurs couches, poncée entre
                      chaque passage, pour créer une surface lisse, résistante
                      et facile d'entretien. Nous prêtons une attention
                      particulière aux zones critiques : autour de l'évier, près
                      des plaques, sur les plans de travail. Le résultat est une
                      cuisine qui conserve son éclat même après des années
                      d'utilisation intensive.
                    </p>
                  </AnimatedText>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ
        title="Questions sur les cuisines"
        description="Découvrez les réponses aux questions les plus courantes sur nos cuisines en bois sur mesure."
        faqs={[
          {
            question: "Peut-on rénover une cuisine existante ?",
            answer:
              "Oui, nous proposons la rénovation complète ou partielle de cuisines existantes. Nous pouvons remplacer les façades, ajouter des éléments, ou refaire entièrement l'aménagement selon vos besoins.",
          },
          {
            question: "Quels équipements pouvez-vous intégrer ?",
            answer:
              "Nous intégrons tous types d'équipements : électroménager encastré, éclairage LED, tiroirs à fermeture douce, systèmes de rangement innovants. Chaque équipement est choisi pour optimiser votre espace.",
          },
          {
            question: "Combien coûte une cuisine sur mesure ?",
            answer:
              "Le prix varie selon la taille, les matériaux et les équipements. Une cuisine complète commence à 8 000€. Nous établissons un devis détaillé gratuit adapté à votre projet et votre budget.",
          },
          {
            question: "Quel est le délai de réalisation ?",
            answer:
              "Une cuisine complète prend 6-8 semaines de fabrication et installation. Nous planifions chaque étape avec vous pour minimiser les désagréments et respecter vos contraintes.",
          },
        ]}
      />
      <ServiceNavigation />
    </main>
    </>
  );
}
