import type { Metadata } from "next";
import Image from "next/image";
import ParallaxImage from "@/components/ParallaxImage";
import AnimatedText from "@/components/AnimatedText3";
import { generateMetadata } from "@/app/metadata";
import ManyServices from "@/components/ManyServices";
import { getServices } from "@/lib/services";
import BreadcrumbsSchema from "@/components/BreadcrumbsSchema";

export const metadata: Metadata = generateMetadata(
  "Menuiserie événementielle en Belgique | Nemwood",
  "Scénographie, décors, bars et comptoirs en bois sur mesure pour vos événements : mariages, salons, lancements et soirées d'entreprise. Fabrication artisanale en Belgique.",
  "/images/og-default.webp",
  "https://www.nemwood.be/evenementiel",
  undefined,
  "Menuiserie événementielle sur mesure - Nemwood",
);

export default async function EvenementielPage() {
  return (
    <>
      <BreadcrumbsSchema
        items={[
          { name: "Accueil", url: "/" },
          { name: "Événements", url: "/evenementiel" },
        ]}
      />
      <main className="bg-secondary text-primary">
        {/* Hero Section */}
        <section className="px-4 py-40 md:px-8 md:py-64">
          <div className="mx-auto max-w-4xl text-center">
            <AnimatedText isHero delay={0.0} stagger={0.3}>
              <span className="font-ITCGaramondN mb-6 block text-5xl md:text-7xl">
                Événements
              </span>
              <p className="font-HelveticaNow mx-auto max-w-2xl text-lg">
                Décors, scénographies, bars et comptoirs en bois conçus sur
                mesure pour faire de chaque événement un moment à part.
              </p>
            </AnimatedText>
          </div>
        </section>
        {/* Full Width Image Section with Parallax */}
        <ParallaxImage speed={1.5} className="h-[400px] md:h-[100svh]">
          <Image
            src="/images/Render 3D.webp"
            alt="Scénographie événementielle en bois par Nemwood"
            fill
            className="object-cover"
            sizes="100vw"
            quality={75}
            priority
            fetchPriority="high"
          />
        </ParallaxImage>
        {/* Title and Description Section */}
        <section className="relative w-full py-16 md:py-20">
          <div className="mb-16 flex flex-col px-4 md:flex-row md:items-start md:justify-between md:gap-8 md:px-8">
            <AnimatedText>
              <h1 className="font-ITCGaramondN text-primary mb-4 max-w-2xl text-3xl md:mb-0 md:text-5xl lg:text-7xl">
                Menuiserie événementielle sur mesure
              </h1>
            </AnimatedText>

            <AnimatedText>
              <p className="font-HelveticaNow text-primary text-base md:max-w-xl md:text-lg">
                Mariages, salons professionnels, lancements de produits ou
                soirées d'entreprise : Nemwood met son savoir-faire d'artisan au
                service de vos événements. Nous concevons et fabriquons dans
                notre atelier des décors, structures, bars et comptoirs en bois
                qui donnent du caractère à votre lieu. Démontables,
                transportables et réutilisables, nos créations sont pensées pour
                être montées rapidement sur place, partout en Belgique.
              </p>
            </AnimatedText>
          </div>
        </section>
        <ManyServices services={await getServices("evenements")} />
        <section className="text-primary bg-secondary intro border-primary mx-auto border-y border-solid px-4 py-20 text-center md:px-8 md:py-20">
          <AnimatedText delay={0.0} stagger={0.3}>
            <h2 className="font-ITCGaramondN mx-auto mb-6 max-w-2xl text-6xl">
              De l'idée au montage sur place
            </h2>
            <p className="font-HelveticaNow mx-auto max-w-2xl text-lg">
              Nous vous accompagnons à chaque étape : croquis et rendus 3D,
              fabrication en atelier, livraison, montage et démontage le jour J.
              Vous profitez de votre événement, nous nous occupons du reste.
              Basés à Beersel, nous intervenons dans toute la Belgique.
            </p>
          </AnimatedText>
        </section>
        <section className="flex w-full flex-col items-center justify-center px-4 py-20 md:px-8 md:py-64">
          <ParallaxImage speed={0.5} className="h-[400px] w-full md:h-[600px]">
            <Image
              src="/images/Render 3D - 2 .webp"
              alt="Rendu 3D d'un aménagement événementiel en bois - Nemwood"
              fill
              className="rounded-sm object-cover"
              sizes="100vw"
              quality={85}
            />
          </ParallaxImage>
        </section>
      </main>
    </>
  );
}
