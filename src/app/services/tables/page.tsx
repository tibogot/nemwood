import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { generateMetadata } from "@/app/metadata";
import FAQ from "@/components/FAQ";

export const metadata: Metadata = generateMetadata(
  "Tables en bois sur mesure en Belgique | Nemwood",
  "Fabrication de tables en bois massif sur mesure en Belgique. Tables à manger, tables basses, bureaux uniques et durables.",
  "/images/table.webp",
  "https://www.nemwood.be/services/tables",
);

export default function TablesPage() {
  return (
    <main className="bg-secondary text-primary">
      {/* Hero Section */}
      <section className="px-4 py-40 md:px-8 md:py-64">
        <div className="mx-auto max-w-4xl">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div>
              <h1 className="mb-6 text-5xl md:text-6xl">
                Tables en bois sur mesure
              </h1>
              <p className="font-HelveticaNow mb-8 text-lg">
                Créez votre table en bois sur mesure : pièce centrale de votre
                maison, unique, durable et façonnée à la main dans notre
                atelier. Chaque table raconte une histoire et s'adapte
                parfaitement à votre mode de vie.
              </p>

              <Link href="/contact">
                <button className="font-HelveticaNow">
                  <div className="border-primary hover:bg-primary hover:text-secondary flex cursor-pointer items-center border border-solid px-6 py-3 transition-colors duration-300 ease-in-out">
                    <span>Demander un devis</span>
                    <div className="ml-2">
                      <ArrowRight size={18} strokeWidth={1.5} />
                    </div>
                  </div>
                </button>
              </Link>
            </div>

            <div className="relative h-[500px] overflow-hidden rounded-sm">
              <Image
                src="/images/table.webp"
                alt="Table en bois sur mesure"
                fill
                className="object-cover"
                sizes="350px md:500px"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-4 py-20 md:px-8 md:py-32">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-12 text-center text-4xl md:text-5xl">
            Caractéristiques de nos tables
          </h2>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <h3 className="mb-4 text-2xl">Dimensions exactes</h3>
              <p className="font-HelveticaNow text-primary/80">
                Parfaitement adaptée à votre espace et vos besoins
              </p>
            </div>

            <div className="text-center">
              <h3 className="mb-4 text-2xl">Essence noble</h3>
              <p className="font-HelveticaNow text-primary/80">
                Choix de bois massifs de qualité supérieure
              </p>
            </div>

            <div className="text-center">
              <h3 className="mb-4 text-2xl">Finitions uniques</h3>
              <p className="font-HelveticaNow text-primary/80">
                Travail artisanal pour une pièce d'exception
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-secondary px-4 py-20 md:px-8 md:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-4xl md:text-5xl">
            Créez votre table idéale
          </h2>
          <p className="font-HelveticaNow mx-auto mb-8 max-w-2xl text-lg">
            De la table à manger familiale au bureau personnalisé, donnons vie à
            votre vision. Accompagnement complet de la conception à la
            livraison.
          </p>

          <Link href="/contact">
            <button className="font-HelveticaNow">
              <div className="border-secondary hover:bg-secondary hover:text-primary flex cursor-pointer items-center border border-solid px-6 py-3 transition-colors duration-300 ease-in-out">
                <span>Concevoir ma table</span>
                <div className="ml-2">
                  <ArrowRight size={18} strokeWidth={1.5} />
                </div>
              </div>
            </button>
          </Link>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ
        title="Questions sur les tables"
        description="Découvrez les réponses aux questions les plus courantes sur nos tables en bois sur mesure."
        faqs={[
          {
            question: "Quels types de tables pouvez-vous réaliser ?",
            answer:
              "Nous réalisons tous types de tables : tables à manger, tables basses, tables de salon, tables de bureau, tables d'appoint. Chaque table est conçue selon vos dimensions et votre style.",
          },
          {
            question:
              "Quelles essences de bois recommandez-vous pour une table ?",
            answer:
              "Pour les tables, nous recommandons le chêne pour sa robustesse, le noyer pour son élégance, ou le frêne pour sa légèreté. Chaque essence a ses caractéristiques que nous vous expliquons lors du devis.",
          },
          {
            question: "Peut-on personnaliser la finition ?",
            answer:
              "Oui, nous proposons diverses finitions : huiles naturelles, vernis mat ou brillant, cires, ou même peintures. Chaque finition est choisie pour mettre en valeur le bois et s'adapter à votre intérieur.",
          },
          {
            question: "Quel est le délai de fabrication d'une table ?",
            answer:
              "Une table sur mesure prend généralement 2-3 semaines de fabrication, plus le temps de séchage et de finition. Nous vous fournissons un planning précis lors du devis.",
          },
        ]}
      />
    </main>
  );
}
