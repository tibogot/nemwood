import type { Metadata } from "next";
import Image from "next/image";
import ParallaxImage from "@/components/ParallaxImage";
import AnimatedText from "@/components/AnimatedText3";
import { generateMetadata } from "@/app/metadata";
import FAQ from "@/components/FAQ";
import ServiceNavigation from "@/components/ServiceNavigation";

export const metadata: Metadata = generateMetadata(
  "Bureaux sur mesure en Belgique | Nemwood",
  "Bureaux en bois sur mesure pour votre espace de travail. Fabrication artisanale en Belgique par Nemwood.",
  "/images/table.webp",
  "https://www.nemwood.be/services/bureaux",
);

export default function BureauPage() {
  return (
    <main className="bg-secondary text-primary">
      {/* Hero Section */}
      <section className="px-4 py-40 md:px-8 md:py-64">
        <div className="mx-auto max-w-4xl text-center">
          <AnimatedText isHero delay={0.0} stagger={0.3}>
            <h1 className="mb-6 text-5xl md:text-7xl">Bureaux</h1>
            <p className="font-HelveticaNow mx-auto max-w-2xl text-lg">
              Bureaux en bois sur mesure pour créer un espace de travail
              fonctionnel et élégant. Chaque bureau est conçu pour optimiser
              votre productivité tout en s'intégrant parfaitement à votre
              intérieur.
            </p>
          </AnimatedText>
        </div>
      </section>

      {/* Full Width Image Section with Parallax */}
      <ParallaxImage speed={1.5} className="h-[400px] md:h-[100svh]">
        <Image
          src="/images/table.webp"
          alt="Bureau sur mesure Nemwood"
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
            Où naissent les grandes idées. Des bureaux pensés pour votre
            productivité, façonnés à la main en Belgique pour créer un espace de
            travail qui inspire et respire.
          </p>
        </AnimatedText>
      </section>

      {/* Section 01 - Text Left, Image Right with overlapping */}
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
                      L'ergonomie au service du travail
                    </h2>
                  </AnimatedText>
                  <AnimatedText>
                    <p className="font-HelveticaNow pt-8 text-lg">
                      Un bureau sur mesure, c'est d'abord un bureau qui respecte
                      votre corps et vos habitudes de travail. Nous concevons
                      chaque bureau selon des principes ergonomiques : hauteur
                      adaptée à votre taille, profondeur optimale pour vos
                      écrans, espace pour vos jambes, support pour vos
                      avant-bras. Nous adaptons aussi la largeur et la forme
                      selon votre activité : bureau droit pour un travail
                      concentré, bureau d'angle pour maximiser l'espace, ou
                      bureau avec retour pour créer des zones de travail
                      distinctes. Chaque dimension est calculée pour réduire la
                      fatigue et améliorer votre confort quotidien.
                    </p>
                  </AnimatedText>
                </div>
              </div>
            </div>
            <div className="right relative flex flex-col items-start text-left">
              <div className="relative h-[480px] w-full overflow-hidden bg-amber-400 select-none md:h-[620px]">
                <Image
                  src="/images/table.webp"
                  alt="Bureau ergonomique sur mesure Nemwood"
                  fill
                  className="object-cover transition-transform duration-500 ease-out hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 25vw"
                  quality={85}
                />
              </div>
              {/* Overlapping smaller image */}
              <div className="absolute right-0 -bottom-12 h-[250px] w-[65%] overflow-hidden bg-amber-400 select-none md:-bottom-16 md:h-[320px]">
                <Image
                  src="/images/atelier-1.webp"
                  alt="Détail du bureau sur mesure"
                  fill
                  className="object-cover transition-transform duration-500 ease-out hover:scale-105"
                  sizes="(max-width: 768px) 32vw, 16vw"
                  quality={85}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 02 - Image Left, Text Right */}
      <section className="w-full py-10 md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-[1fr_1fr]">
            <div className="right flex flex-col items-start text-left md:order-1">
              <div className="relative h-[420px] w-full overflow-hidden bg-amber-400 select-none md:h-[580px]">
                <Image
                  src="/images/wood-work.webp"
                  alt="Fabrication artisanale de bureau Nemwood"
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
                    02
                  </span>
                </div>
                <div className="flex min-w-0 flex-1 flex-col md:max-w-xl">
                  <AnimatedText>
                    <h2 className="font-ITCGaramondN text-4xl leading-none md:text-6xl">
                      Les rangements intégrés
                    </h2>
                  </AnimatedText>
                  <AnimatedText>
                    <p className="font-HelveticaNow pt-8 text-lg">
                      Un bureau organisé est un bureau efficace. Nous intégrons
                      des solutions de rangement sur mesure : tiroirs pour vos
                      documents et accessoires, casiers pour vos classeurs,
                      étagères pour vos références, niches pour vos équipements.
                      Nous prévoyons aussi des passages de câbles discrets et
                      des prises intégrées pour un espace de travail propre,
                      sans fils qui traînent. Chaque rangement est pensé pour
                      être accessible en un geste, optimisant vos mouvements et
                      votre productivité. Rien n'est laissé au hasard pour créer
                      un environnement de travail parfaitement organisé.
                    </p>
                  </AnimatedText>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="mb-10 md:mb-16 md:w-1/2">
            <AnimatedText>
              <p className="font-HelveticaNow text-lg">
                Nous travaillons avec des essences de bois adaptées aux espaces
                de travail : chêne pour sa robustesse, noyer pour son élégance,
                frêne pour sa légèreté. Chaque essence est sélectionnée pour ses
                qualités et sa capacité à créer une atmosphère de travail
                inspirante.
              </p>
            </AnimatedText>
          </div>
          <div className="flex justify-center pt-10">
            <div className="relative h-[260px] w-full max-w-5xl overflow-hidden md:h-[540px]">
              <Image
                src="/images/table.webp"
                alt="Bureau en bois massif sur mesure Nemwood"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 80vw"
                quality={85}
              />
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
                L'intégration technologique
              </h2>
            </AnimatedText>
            <div className="relative mt-10 h-[310px] w-full overflow-hidden md:mt-16 md:h-[470px]">
              <Image
                src="/images/atelier-1.webp"
                alt="Bureau avec intégration technologique Nemwood"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 60vw"
                quality={85}
              />
            </div>
            <AnimatedText>
              <p className="font-HelveticaNow mt-10 w-full text-left text-lg md:mt-16">
                Les bureaux modernes doivent s'adapter à la technologie. Nous
                intégrons des solutions discrètes et élégantes : passages de
                câbles dans le plan de travail, prises USB intégrées, supports
                pour écrans multiples, niches pour ordinateurs portables,
                éclairage LED intégré. Chaque équipement est positionné pour
                faciliter votre travail sans encombrer l'espace. Nous créons
                aussi des bureaux à hauteur réglable motorisée pour alterner
                entre position assise et debout. Le résultat est un bureau qui
                épouse les besoins du travail moderne tout en conservant une
                esthétique intemporelle.
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
              <div className="relative mt-12 h-[380px] w-full overflow-hidden bg-amber-400 select-none md:mt-20 md:h-[560px]">
                <Image
                  src="/images/wood-work.webp"
                  alt="Finition de bureau sur mesure Nemwood"
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
                      Les finitions d'exception
                    </h2>
                  </AnimatedText>
                  <AnimatedText>
                    <p className="font-HelveticaNow pt-8 text-lg">
                      La finition d'un bureau doit résister à l'usage intensif
                      tout en conservant sa beauté. Nous proposons des finitions
                      spécifiques aux espaces de travail : huiles dures pour une
                      protection maximale contre les taches et les rayures,
                      vernis mat pour éviter les reflets sur les écrans,
                      finitions antimicrobiennes pour un espace de travail sain.
                      Chaque finition est appliquée en plusieurs couches, poncée
                      méticuleusement, pour obtenir une surface parfaitement
                      lisse et résistante. Nous prêtons une attention
                      particulière aux angles et aux bords, zones les plus
                      exposées. Le résultat est un bureau qui conserve son
                      aspect neuf même après des années d'utilisation intensive.
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
        title="Questions sur les bureaux"
        description="Découvrez les réponses aux questions les plus courantes sur nos bureaux en bois sur mesure."
        faqs={[
          {
            question: "Quels types de bureaux pouvez-vous réaliser ?",
            answer:
              "Nous réalisons tous types de bureaux : bureaux d'angle, bureaux droits, bureaux avec rangements intégrés, ou solutions sur mesure. Chaque bureau est conçu selon votre espace de travail et vos besoins professionnels.",
          },
          {
            question: "Peut-on intégrer des passages de câbles ?",
            answer:
              "Oui, nous prévoyons des passages de câbles discrets et des prises intégrées pour un espace de travail propre et fonctionnel. Nous adaptons l'électrification selon vos équipements.",
          },
          {
            question: "Quelle est la hauteur recommandée pour un bureau ?",
            answer:
              "La hauteur standard est de 75cm, mais nous l'adaptons selon votre taille et vos préférences. Nous proposons aussi des bureaux à hauteur réglable pour un confort optimal.",
          },
          {
            question: "Proposez-vous des rangements intégrés ?",
            answer:
              "Oui, nous intégrons tiroirs, étagères, casiers et tous types de rangements selon vos besoins. Chaque rangement est conçu pour optimiser votre espace de travail et votre productivité.",
          },
        ]}
      />
      <ServiceNavigation />
    </main>
  );
}
