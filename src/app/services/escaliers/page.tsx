import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { generateMetadata } from "@/app/metadata";

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
      <section className="px-4 pt-20 pb-20 md:px-8 md:pt-32 md:pb-32">
        <div className="mx-auto max-w-4xl">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div>
              <h1 className="mb-6 text-5xl md:text-6xl">
                Escaliers en bois sur mesure
              </h1>
              <p className="font-HelveticaNow mb-8 text-lg">
                Ajoutez du caractère à votre intérieur avec un escalier en bois
                sur mesure, alliant robustesse, esthétique et finition
                artisanale. Chaque escalier est conçu selon vos besoins
                spécifiques et l'architecture de votre espace.
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
                src="/images/stairs.webp"
                alt="Escalier en bois sur mesure"
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
            Pourquoi choisir nos escaliers ?
          </h2>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <h3 className="mb-4 text-2xl">Sur mesure</h3>
              <p className="font-HelveticaNow text-primary/80">
                Conçu selon vos dimensions exactes et votre style
              </p>
            </div>

            <div className="text-center">
              <h3 className="mb-4 text-2xl">Bois massif</h3>
              <p className="font-HelveticaNow text-primary/80">
                Matériaux de qualité supérieure pour une durabilité optimale
              </p>
            </div>

            <div className="text-center">
              <h3 className="mb-4 text-2xl">Artisanat</h3>
              <p className="font-HelveticaNow text-primary/80">
                Finitions soignées par nos artisans expérimentés
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
