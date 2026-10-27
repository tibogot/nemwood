import type { Metadata } from "next";
import Image from "next/image";
import ParallaxImage from "@/components/ParallaxImage";
import AnimatedText from "@/components/AnimatedText3";
import { generateMetadata } from "@/app/metadata";
import FAQ from "@/components/FAQ";
import ServiceNavigation from "@/components/ServiceNavigation";
import BreadcrumbsSchema from "@/components/BreadcrumbsSchema";
import { getServicePageImages } from "@/lib/services";
import { imageProps } from "@/lib/serviceImage";
import FAQSchema from "@/components/FAQSchema";
import { scenographieFaqs } from "@/data/faqs";

export const metadata: Metadata = generateMetadata(
  "Scénographie et décors en bois pour événements | Nemwood",
  "Décors de scène, photocalls, arches et stands en bois sur mesure pour mariages, salons et événements d'entreprise. Conception et montage partout en Belgique.",
  "/images/og-default.webp",
  "https://www.nemwood.be/evenementiel/scenographie-decors",
  undefined,
  "Scénographie et décors en bois sur mesure - Nemwood",
);

export default async function ScenographieDecorsPage() {
  const images = await getServicePageImages("scenographie-decors");

  return (
    <>
      <BreadcrumbsSchema
        items={[
          { name: "Accueil", url: "/" },
          { name: "Événements", url: "/evenementiel" },
          {
            name: "Scénographie & décors",
            url: "/evenementiel/scenographie-decors",
          },
        ]}
      />
      <main className="bg-secondary text-primary">
        {/* Hero Section */}
        <section className="px-4 py-40 md:px-8 md:py-64">
          <div className="mx-auto max-w-4xl text-center">
            <AnimatedText isHero delay={0.0} stagger={0.3}>
              <h1 className="mb-6 text-5xl md:text-7xl">
                Scénographie & décors
              </h1>
              <p className="font-HelveticaNow mx-auto max-w-2xl text-lg">
                Décors de scène, photocalls, arches et stands en bois conçus sur
                mesure pour donner une identité forte à votre événement.
              </p>
            </AnimatedText>
          </div>
        </section>

        {/* Full Width Image Section with Parallax */}
        <ParallaxImage speed={1.5} className="h-[400px] md:h-[100svh]">
          <Image
            {...imageProps(images.hero)}
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
              Le décor fait l'événement. Des structures en bois imaginées pour
              votre lieu, fabriquées à la main en Belgique et montées le jour J.
            </p>
          </AnimatedText>
        </section>

        {/* Section 01 - Text Left, Image Right with overlapping */}
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
                  <div className="flex w-full min-w-0 flex-col md:max-w-xl md:flex-1">
                    <AnimatedText>
                      <h2 className="font-ITCGaramondN text-4xl leading-none md:text-6xl">
                        Un décor pensé pour votre lieu
                      </h2>
                    </AnimatedText>
                    <AnimatedText>
                      <p className="font-HelveticaNow pt-8 text-lg">
                        Chaque événement a son ambiance, chaque lieu ses
                        contraintes. Nous partons de votre concept, de vos
                        couleurs et de l'espace disponible pour imaginer un
                        décor qui raconte votre histoire : arche de cérémonie
                        pour un mariage, fond de scène pour une conférence,
                        photocall pour une soirée de lancement ou mur de marque
                        pour un salon. Nous réalisons des croquis et des rendus
                        3D pour que vous visualisiez le résultat avant la
                        fabrication.
                      </p>
                    </AnimatedText>
                  </div>
                </div>
              </div>
              <div className="right relative flex flex-col items-start text-left">
                <div className="relative h-[480px] w-full overflow-hidden bg-amber-400 select-none md:h-[620px]">
                  <Image
                    {...imageProps(images.sections[0])}
                    fill
                    className="object-cover transition-transform duration-500 ease-out hover:scale-105"
                    sizes="(max-width: 768px) 50vw, 25vw"
                    quality={85}
                  />
                </div>
                {/* Overlapping smaller image */}
                <div className="absolute right-0 -bottom-12 h-[250px] w-[65%] overflow-hidden bg-amber-400 select-none md:-bottom-16 md:h-[320px]">
                  <Image
                    {...imageProps(images.sections[1])}
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
                    {...imageProps(images.sections[2])}
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
                  <div className="flex w-full min-w-0 flex-col md:max-w-xl md:flex-1">
                    <AnimatedText>
                      <h2 className="font-ITCGaramondN text-4xl leading-none md:text-6xl">
                        Démontable et réutilisable
                      </h2>
                    </AnimatedText>
                    <AnimatedText>
                      <p className="font-HelveticaNow pt-8 text-lg">
                        Un décor d'événement doit être beau, mais aussi
                        pratique. Nos structures sont conçues en modules
                        assemblables sans outillage lourd, faciles à transporter
                        et rapides à monter, même quand le lieu n'est accessible
                        que quelques heures. Elles peuvent être stockées puis
                        réinstallées pour vos prochains événements, ou adaptées
                        avec de nouvelles façades. Un choix plus économique et
                        plus responsable qu'un décor jetable.
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
                  Livraison, montage, démontage
                </h2>
              </AnimatedText>
              <div className="relative mt-10 h-[310px] w-full overflow-hidden md:mt-16 md:h-[470px]">
                <Image
                  {...imageProps(images.sections[3])}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 60vw"
                  quality={85}
                />
              </div>
              <AnimatedText>
                <p className="font-HelveticaNow mt-10 w-full text-left text-lg md:mt-16">
                  Nous ne livrons pas seulement des pièces : nous installons
                  votre décor. Notre équipe se charge du transport, du montage
                  et du démontage sur le lieu de l'événement, en coordination
                  avec le traiteur, le fleuriste ou l'agence événementielle.
                  Nous intégrons aussi l'éclairage, la signalétique et les
                  supports pour vos visuels. Le jour J, tout est en place et
                  vous n'avez plus qu'à profiter.
                </p>
              </AnimatedText>
            </div>
          </div>
        </section>

        <FAQSchema faqs={scenographieFaqs} />
        <FAQ
          title="Questions sur la scénographie"
          description="Découvrez les réponses aux questions les plus courantes sur nos décors et scénographies en bois."
          faqs={scenographieFaqs}
        />
        <ServiceNavigation current="scenographie-decors" />
      </main>
    </>
  );
}
