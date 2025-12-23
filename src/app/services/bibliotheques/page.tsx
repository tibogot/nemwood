import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import ParallaxImage from "@/components/ParallaxImage";
import AnimatedText from "@/components/AnimatedText3";
import { generateMetadata } from "@/app/metadata";
import FAQ from "@/components/FAQ";
import ServiceNavigation from "@/components/ServiceNavigation";
import BreadcrumbsSchema from "@/components/BreadcrumbsSchema";

export const metadata: Metadata = generateMetadata(
  "Bibliothèques sur mesure en Belgique | Nemwood",
  "Bibliothèques en bois sur mesure pour organiser vos livres et objets. Fabrication artisanale en Belgique par Nemwood.",
  "/images/wardrobe.webp",
  "https://www.nemwood.be/services/bibliotheques",
);

export default function BibliothequePage() {
  return (
    <>
      <BreadcrumbsSchema
        items={[
          { name: "Accueil", url: "/" },
          { name: "Services", url: "/services" },
          { name: "Bibliothèques", url: "/services/bibliotheques" },
        ]}
      />
      <main className="bg-secondary text-primary">
      {/* Hero Section */}
      <section className="px-4 py-40 md:px-8 md:py-64">
        <div className="mx-auto max-w-4xl text-center">
          <AnimatedText isHero delay={0.0} stagger={0.3}>
            <h1 className="mb-6 text-5xl md:text-7xl">Bibliothèques</h1>
            <p className="font-HelveticaNow mx-auto max-w-2xl text-lg">
              Bibliothèques en bois sur mesure pour organiser vos livres et
              objets avec style et fonctionnalité. Chaque bibliothèque est
              conçue pour s'adapter parfaitement à votre espace et vos besoins.
            </p>
          </AnimatedText>
        </div>
      </section>

      {/* Full Width Image Section with Parallax */}
      <ParallaxImage speed={1.5} className="h-[400px] md:h-[100svh]">
        <Image
          src="/images/wardrobe.webp"
          alt="Bibliothèque sur mesure Nemwood"
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
            L'écrin de vos histoires. Des bibliothèques sur mesure qui révèlent
            vos collections, façonnées en Belgique pour donner vie à vos livres
            et objets précieux.
          </p>
        </AnimatedText>
      </section>

      <section className="w-full py-20 md:py-40">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-[1fr_1fr]">
            <div className="right flex flex-col items-start text-left md:order-1">
              <div className="relative h-[400px] w-full overflow-hidden bg-amber-400 select-none md:h-[600px]">
                <Image
                  src="/images/atelier-1.webp"
                  alt="Kitchen design by Nemwood - Cuisine sur mesure en bois"
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
                    01
                  </span>
                </div>
                <div className="flex min-w-0 w-full flex-col md:flex-1 md:max-w-xl">
                  <AnimatedText>
                    <h2 className="font-ITCGaramondN text-4xl leading-none md:text-6xl">
                      Le parcours du menuisier
                    </h2>
                  </AnimatedText>
                  <AnimatedText>
                    <p className="font-HelveticaNow pt-8 text-lg">
                      Mobilier sur mesure : quand l'espace et le style
                      s'accordent parfaitement Vous cherchez un mobilier qui
                      s'adapte vraiment à votre intérieur ? Le sur mesure est la
                      solution. Chaque pièce est conçue selon les dimensions
                      exactes de votre espace pour optimiser chaque recoin. Plus
                      qu'un simple meuble, c'est une création unique qui reflète
                      votre style grâce au choix des matériaux, finitions et
                      détails personnalisés. Pratique et ergonomique, il répond
                      à vos besoins précis : rangements intelligents, solutions
                      multifonctionnelles, agencements uniques… tout est
                      possible. Fabriqué par des artisans passionnés, votre
                      mobilier allie solidité, durabilité et esthétique.
                      Résultat : un intérieur harmonieux et fonctionnel, qui
                      prend de la valeur avec le temps.
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
                Chaque projet commence par une écoute attentive de vos besoins
                et une analyse précise de votre espace. Notre équipe vous
                accompagne à chaque étape, de la conception initiale jusqu'à
                l'installation finale. Nous travaillons avec des essences de
                bois soigneusement sélectionnées pour leur beauté et leur
                durabilité, garantissant un résultat qui traversera les années
                avec élégance.
              </p>
            </AnimatedText>
          </div>
          <div className="flex justify-center pt-10">
            <div className="relative h-[250px] w-full max-w-5xl overflow-hidden md:h-[500px]">
              <Image
                src="/images/wardrobe.webp"
                alt="Bibliothèque sur mesure Nemwood"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 80vw"
                quality={85}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 02 */}
      <section className="w-full py-10 md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-[1fr_1fr]">
            <div className="left">
              <div className="flex flex-col items-start gap-6 md:flex-row md:gap-8">
                <div className="shrink-0">
                  <span className="font-ITCGaramondN -mt-4 block text-8xl leading-none md:-mt-6 md:text-9xl">
                    02
                  </span>
                </div>
                <div className="flex min-w-0 w-full flex-col md:flex-1 md:max-w-xl">
                  <AnimatedText>
                    <h2 className="font-ITCGaramondN text-4xl leading-none md:text-6xl">
                      L'art du sur mesure
                    </h2>
                  </AnimatedText>
                  <AnimatedText>
                    <p className="font-HelveticaNow pt-8 text-lg">
                      Chaque bibliothèque est une pièce unique, pensée pour
                      s'intégrer parfaitement dans votre intérieur. Nous prenons
                      en compte chaque détail : la hauteur sous plafond, les
                      angles, les contraintes techniques. Le résultat est un
                      meuble qui semble avoir toujours fait partie de votre
                      espace, optimisant chaque centimètre disponible tout en
                      apportant une touche d'élégance intemporelle.
                    </p>
                  </AnimatedText>
                </div>
              </div>
            </div>
            <div className="right flex flex-col items-start text-left">
              <div className="relative mt-10 h-[400px] w-full overflow-hidden bg-amber-400 select-none md:mt-50 md:h-[600px]">
                <Image
                  src="/images/wood-work.webp"
                  alt="Travail du bois artisanal Nemwood"
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

      {/* Section 03 */}
      <section className="w-full py-10 md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="mx-auto flex max-w-3xl flex-col items-center">
            <span className="font-ITCGaramondN text-8xl leading-none md:text-9xl">
              03
            </span>
            <AnimatedText>
              <h2 className="font-ITCGaramondN mt-6 text-4xl leading-none md:mt-8 md:text-6xl">
                La finition parfaite
              </h2>
            </AnimatedText>
            <div className="relative mt-10 h-[300px] w-full overflow-hidden md:mt-16 md:h-[450px]">
              <Image
                src="/images/wardrobe.webp"
                alt="Finition artisanale Nemwood"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 60vw"
                quality={85}
              />
            </div>
            <AnimatedText>
              <p className="font-HelveticaNow mt-10 w-full text-left text-lg md:mt-16">
                La qualité d'une bibliothèque sur mesure se révèle dans les
                détails. Nos artisans accordent une attention particulière à
                chaque finition : le ponçage minutieux, l'application des vernis
                ou huiles naturelles, les assemblages invisibles. Ces gestes
                ancestraux, transmis de génération en génération, garantissent
                un meuble d'exception qui traversera les décennies. Nous
                privilégions les techniques traditionnelles tout en intégrant
                les innovations qui améliorent la durabilité et la résistance de
                nos créations.
              </p>
            </AnimatedText>
          </div>
        </div>
      </section>

      {/* <section className="text-primary border-primary mx-auto border-y px-4 py-20 text-center md:px-8 md:py-40">
        <AnimatedText>
          <p className="font-HelveticaNow mx-auto text-lg md:max-w-2xl">
            Basés en Belgique, nous valorisons le travail du bois local, la
            précision des finitions, et un accompagnement sur-mesure tout au
            long du projet. Chaque meuble est conçu en étroite collaboration
            avec nos clients, pour répondre parfaitement à leurs attentes.
          </p>
        </AnimatedText>
      </section> */}

      {/* Section 02 - Text Left, Image Right */}
      {/* <section className="flex w-full flex-col gap-10 px-4 py-10 md:px-8 md:py-20">
        <div className="flex flex-col gap-10 md:flex-row md:gap-16">
          <div className="left md:w-1/2">
            <div className="">
              <div className="flex flex-row items-start gap-6 md:gap-8">
                <span className="font-ITCGaramondN -mt-4 text-8xl leading-none md:-mt-6 md:text-9xl">
                  02
                </span>
                <div className="flex flex-col">
                  <AnimatedText>
                    <h2 className="font-ITCGaramondN text-4xl leading-[0.85] md:max-w-2xl md:text-6xl">
                      L'art du sur mesure
                    </h2>
                  </AnimatedText>
                  <AnimatedText>
                    <p className="font-HelveticaNow pt-8 text-lg">
                      Chaque bibliothèque est une pièce unique, pensée pour
                      s'intégrer parfaitement dans votre intérieur. Nous prenons
                      en compte chaque détail : la hauteur sous plafond, les
                      angles, les contraintes techniques. Le résultat est un
                      meuble qui semble avoir toujours fait partie de votre
                      espace, optimisant chaque centimètre disponible tout en
                      apportant une touche d'élégance intemporelle.
                    </p>
                  </AnimatedText>
                </div>
              </div>
            </div>
          </div>
          <div className="right flex flex-col text-left md:mt-40 md:w-1/2">
            <div className="relative h-[400px] w-full overflow-hidden select-none md:h-[600px]">
              <Image
                src="/images/wood-work.webp"
                alt="Travail du bois artisanal Nemwood"
                fill
                className="object-cover transition-transform duration-500 ease-out hover:scale-105"
                sizes="(max-width: 768px) 50vw, 25vw"
                quality={85}
              />
            </div>
          </div>
        </div>

        <div className="flex md:w-1/2">
          <div className="flex flex-row items-start gap-6 md:gap-8">
            <span className="font-ITCGaramondN invisible text-8xl leading-none md:text-9xl">
              02
            </span>
            <AnimatedText>
              <p className="font-HelveticaNow text-lg">
                Notre savoir-faire artisanal se transmet de génération en
                génération. Chaque geste est précis, chaque finition est soignée
                pour créer des meubles qui dureront dans le temps et
                s'embelliront avec les années. Nous sélectionnons avec soin les
                essences de bois, privilégiant les fournisseurs locaux et les
                matériaux durables. Du premier croquis à la pose finale, notre
                équipe vous accompagne pour transformer votre vision en réalité.
                Le sur mesure, c'est aussi l'assurance d'un meuble parfaitement
                adapté à vos habitudes de vie, à vos collections et à votre
                façon d'habiter l'espace.
              </p>
            </AnimatedText>
          </div>
        </div>

        <div className="flex justify-center pt-10">
          <div className="relative h-[250px] w-full max-w-5xl overflow-hidden md:h-[500px]">
            <Image
              src="/images/atelier-1.webp"
              alt="Création sur mesure Nemwood"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 80vw"
              quality={85}
            />
          </div>
        </div>
      </section> */}

      {/* Section 03 - Centered Column Layout */}
      {/* <section className="flex w-full flex-col items-center px-4 py-10 md:px-8 md:py-20">
        <div className="flex max-w-3xl flex-col items-center text-center">
          <span className="font-ITCGaramondN text-8xl leading-none md:text-9xl">
            03
          </span>
          <AnimatedText>
            <h2 className="font-ITCGaramondN mt-6 text-4xl leading-[0.85] md:mt-8 md:text-6xl">
              La finition parfaite
            </h2>
          </AnimatedText>
          <div className="relative mt-10 h-[300px] w-full overflow-hidden md:mt-16 md:h-[450px]">
            <Image
              src="/images/wardrobe.webp"
              alt="Finition artisanale Nemwood"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 60vw"
              quality={85}
            />
          </div>
          <AnimatedText>
            <p className="font-HelveticaNow mt-10 text-left text-lg md:mt-16">
              La qualité d'une bibliothèque sur mesure se révèle dans les
              détails. Nos artisans accordent une attention particulière à
              chaque finition : le ponçage minutieux, l'application des vernis
              ou huiles naturelles, les assemblages invisibles. Ces gestes
              ancestraux, transmis de génération en génération, garantissent un
              meuble d'exception qui traversera les décennies. Nous privilégions
              les techniques traditionnelles tout en intégrant les innovations
              qui améliorent la durabilité et la résistance de nos créations.
            </p>
          </AnimatedText>
        </div>
      </section> */}

      {/* Content Section */}
      {/* <section className="px-4 py-20 md:px-8 md:py-40">
        <div className="mx-auto max-w-4xl">
          <div className="grid gap-12 md:grid-cols-2 md:gap-16">
            <div>
              <h2 className="mb-6 text-3xl md:text-4xl">Notre expertise</h2>
              <p className="font-HelveticaNow mb-6 text-lg">
                Nos bibliothèques sur mesure allient esthétique et
                fonctionnalité. Nous concevons des solutions adaptées à votre
                espace et à vos besoins de rangement.
              </p>
              <p className="font-HelveticaNow text-lg">
                Chaque bibliothèque est fabriquée avec des matériaux de qualité
                supérieure et une finition soignée qui met en valeur vos livres
                et objets de collection.
              </p>
            </div>

            <div>
              <h3 className="mb-4 text-2xl md:text-3xl">Caractéristiques</h3>
              <ul className="font-HelveticaNow space-y-3 text-lg">
                <li>• Conception sur mesure</li>
                <li>• Bois massif de qualité</li>
                <li>• Finitions personnalisées</li>
                <li>• Systèmes d'éclairage intégrés</li>
                <li>• Portes vitrées optionnelles</li>
                <li>• Installation professionnelle</li>
              </ul>
            </div>
          </div>
        </div>
      </section> */}

      {/* FAQ Section */}
      <FAQ
        title="Questions sur les bibliothèques"
        description="Découvrez les réponses aux questions les plus courantes sur nos bibliothèques en bois sur mesure."
        faqs={[
          {
            question: "Quels types de bibliothèques pouvez-vous réaliser ?",
            answer:
              "Nous réalisons tous types de bibliothèques : étagères murales, bibliothèques sur pied, meubles bibliothèques, ou solutions sur mesure. Chaque bibliothèque est conçue selon votre espace et vos besoins de rangement.",
          },
          {
            question: "Peut-on intégrer un éclairage dans la bibliothèque ?",
            answer:
              "Oui, nous proposons l'intégration d'éclairage LED discret ou d'éclairage d'ambiance. L'éclairage peut être intégré dans les étagères ou en bandeau pour mettre en valeur vos livres et objets.",
          },
          {
            question: "Quelle est la capacité de charge des étagères ?",
            answer:
              "Nos étagères sont conçues pour supporter le poids des livres. Nous calculons la charge selon vos besoins et utilisons des fixations adaptées pour garantir la sécurité et la durabilité.",
          },
          {
            question: "Proposez-vous des portes vitrées ?",
            answer:
              "Oui, nous proposons des portes vitrées pour protéger vos livres tout en les gardant visibles. Les portes peuvent être coulissantes ou battantes selon vos préférences et contraintes d'espace.",
          },
        ]}
      />
      <ServiceNavigation />
    </main>
    </>
  );
}
