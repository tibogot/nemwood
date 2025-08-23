import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { generateMetadata } from "@/app/metadata";

export const metadata: Metadata = generateMetadata(
  "Cuisines en bois sur mesure en Belgique | Nemwood",
  "Fabrication de cuisines en bois massif sur mesure en Belgique. Aménagements cuisine personnalisés, meubles de cuisine artisanaux.",
  "/images/kitchen.webp",
  "https://nemwood.be/services/cuisines",
);

export default function CuisinesPage() {
  return (
    <main className="bg-secondary text-primary">
      {/* Hero Section */}
      <section className="px-4 pt-20 pb-20 md:px-8 md:pt-32 md:pb-32">
        <div className="mx-auto max-w-4xl">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div>
              <h1 className="mb-6 text-5xl md:text-6xl">
                Cuisines en bois sur mesure
              </h1>
              <p className="font-HelveticaNow mb-8 text-lg">
                Concevez une cuisine en bois massif qui vous ressemble :
                chaleureuse, fonctionnelle et entièrement personnalisée selon
                vos besoins et votre espace. Le cœur de votre maison mérite une
                attention particulière.
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
                src="/images/kitchen.webp"
                alt="Cuisine en bois sur mesure"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
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
            Pourquoi choisir nos cuisines ?
          </h2>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <h3 className="mb-4 text-2xl">Ergonomie</h3>
              <p className="font-HelveticaNow text-primary/80">
                Aménagement pensé pour votre confort et vos habitudes
              </p>
            </div>

            <div className="text-center">
              <h3 className="mb-4 text-2xl">Qualité</h3>
              <p className="font-HelveticaNow text-primary/80">
                Matériaux nobles résistants à l'humidité et à l'usage quotidien
              </p>
            </div>

            <div className="text-center">
              <h3 className="mb-4 text-2xl">Style unique</h3>
              <p className="font-HelveticaNow text-primary/80">
                Design personnalisé qui reflète votre personnalité
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-secondary px-4 py-20 md:px-8 md:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-4xl md:text-5xl">
            Transformez votre cuisine
          </h2>
          <p className="font-HelveticaNow mx-auto mb-8 max-w-2xl text-lg">
            Créons ensemble l'espace culinaire de vos rêves. Étude personnalisée
            et accompagnement complet pour votre projet de cuisine sur mesure.
          </p>

          <Link href="/contact">
            <button className="font-HelveticaNow">
              <div className="border-secondary hover:bg-secondary hover:text-primary flex cursor-pointer items-center border border-solid px-6 py-3 transition-colors duration-300 ease-in-out">
                <span>Planifier ma cuisine</span>
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
