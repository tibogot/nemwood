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
import { barsComptoirsFaqs } from "@/data/faqs";

export const metadata: Metadata = generateMetadata(
  "Bars et comptoirs en bois sur mesure pour événements | Nemwood",
  "Bars mobiles, comptoirs d'accueil et bars de réception en bois sur mesure, personnalisés à votre image. Fabrication artisanale en Belgique par Nemwood.",
  "/images/og-default.webp",
  "https://www.nemwood.be/evenementiel/bars-comptoirs",
  undefined,
  "Bar et comptoir en bois sur mesure - Nemwood",
);

export default async function BarsComptoirsPage() {
  const images = await getServicePageImages("bars-comptoirs");

  return (
    <>
      <BreadcrumbsSchema
        items={[
          { name: "Accueil", url: "/" },
          { name: "Événements", url: "/evenementiel" },
          { name: "Bars & comptoirs", url: "/evenementiel/bars-comptoirs" },
        ]}
      />
      <main className="bg-secondary text-primary">
        {/* Hero Section */}
        <section className="px-4 py-40 md:px-8 md:py-64">
          <div className="mx-auto max-w-4xl text-center">
            <AnimatedText isHero delay={0.0} stagger={0.3}>
              <h1 className="mb-6 text-5xl md:text-7xl">Bars & comptoirs</h1>
              <p className="font-HelveticaNow mx-auto max-w-2xl text-lg">
                Bars mobiles, comptoirs d'accueil et bars de réception en bois,
                fabriqués sur mesure pour recevoir vos invités avec caractère.
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
              Le cœur de la fête. Des bars et comptoirs en bois massif, pensés
              pour le service et façonnés à la main dans notre atelier belge.
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
                        Mobiles et modulables
                      </h2>
                    </AnimatedText>
                    <AnimatedText>
                      <p className="font-HelveticaNow pt-8 text-lg">
                        Un bar événementiel doit suivre votre événement, où
                        qu'il ait lieu. Nous concevons des bars montés sur
                        roulettes ou composés de modules qui s'assemblent en
                        quelques minutes : bar droit pour un cocktail, bar en L
                        pour une réception, ou comptoir central pour un
                        festival. Les modules se combinent selon le nombre
                        d'invités et la configuration du lieu, en intérieur
                        comme en extérieur.
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
                        À l'image de votre marque
                      </h2>
                    </AnimatedText>
                    <AnimatedText>
                      <p className="font-HelveticaNow pt-8 text-lg">
                        Votre bar est souvent le premier point de contact avec
                        vos invités. Nous le personnalisons entièrement :
                        essence et teinte du bois, logo gravé ou incrusté,
                        façades interchangeables, éclairage LED intégré, plateau
                        en bois massif ou en pierre. Pour les marques et les
                        agences, nous créons des comptoirs aux couleurs de
                        chaque campagne, réutilisables d'un salon à l'autre en
                        changeant simplement l'habillage.
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
                  Pensés pour le service
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
                  Un beau bar doit aussi être efficace. Nous travaillons avec
                  votre traiteur ou votre équipe pour prévoir les emplacements
                  des tireuses, bacs à glace, éviers et frigos sous comptoir,
                  ainsi que les rangements et passages de câbles. Les plans de
                  travail reçoivent des finitions résistantes à l'eau, à
                  l'alcool et aux chocs. Nous réalisons aussi des comptoirs
                  fixes pour restaurants, boutiques et halls d'accueil, conçus
                  pour durer.
                </p>
              </AnimatedText>
            </div>
          </div>
        </section>

        <FAQSchema faqs={barsComptoirsFaqs} />
        <FAQ
          title="Questions sur les bars et comptoirs"
          description="Découvrez les réponses aux questions les plus courantes sur nos bars et comptoirs en bois sur mesure."
          faqs={barsComptoirsFaqs}
        />
        <ServiceNavigation current="bars-comptoirs" />
      </main>
    </>
  );
}
