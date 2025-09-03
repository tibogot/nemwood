import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import ParallaxImage from "@/components/ParallaxImage";
import AnimatedText from "@/components/AnimatedText3";
import { generateMetadata } from "@/app/metadata";

export const metadata: Metadata = generateMetadata(
  "Bibliothèques sur mesure en Belgique | Nemwood",
  "Bibliothèques en bois sur mesure pour organiser vos livres et objets. Fabrication artisanale en Belgique par Nemwood.",
  "/images/wardrobe.webp",
  "https://www.nemwood.be/services/bibliotheque",
);

export default function BibliothequePage() {
  return (
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
          quality={95}
          priority
        />
      </ParallaxImage>

      {/* Content Section */}
      <section className="px-4 py-20 md:px-8 md:py-40">
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
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-secondary px-4 py-20 md:px-8 md:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-4xl md:text-5xl">
            Prêt à créer votre bibliothèque ?
          </h2>
          <p className="font-HelveticaNow mx-auto mb-8 max-w-2xl text-lg">
            Contactez-nous pour discuter de votre projet de bibliothèque sur
            mesure. Devis gratuit et sans engagement.
          </p>

          <Link href="/contact">
            <button className="font-HelveticaNow">
              <div className="border-secondary hover:bg-secondary hover:text-primary flex cursor-pointer items-center border border-solid px-6 py-3 transition-colors duration-300 ease-in-out">
                <span>Nous contacter</span>
                <div className="ml-2">
                  <ArrowRight size={18} strokeWidth={1.5} />
                </div>
              </div>
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
}
