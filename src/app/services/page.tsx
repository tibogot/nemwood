import type { Metadata } from "next";
import { Link } from "next-view-transitions";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import ParallaxImage from "@/components/ParallaxImage";

export const metadata: Metadata = {
  title: "Services de menuiserie sur mesure en Belgique | Nemwood",
  description:
    "Découvrez nos services de menuiserie : escaliers, garde-robes, tables et cuisines en bois sur mesure. Artisanat belge de qualité.",
};

export default function ServicesPage() {
  const services = [
    {
      title: "Escaliers",
      slug: "escaliers",
      description:
        "Escaliers en bois sur mesure alliant robustesse, esthétique et finition artisanale.",
      image: "/images/stairs.webp",
    },
    {
      title: "Garde-robes",
      slug: "garde-robes",
      description:
        "Garde-robes en bois massif personnalisées selon vos besoins et votre espace.",
      image: "/images/wardrobe.webp",
    },
    {
      title: "Tables",
      slug: "tables",
      description:
        "Tables en bois sur mesure, pièces centrales uniques et durables.",
      image: "/images/table.webp",
    },
    {
      title: "Cuisines",
      slug: "cuisines",
      description:
        "Cuisines en bois massif chaleureuses et entièrement personnalisées.",
      image: "/images/kitchen.webp",
    },
  ];

  return (
    <main className="bg-secondary text-primary">
      {/* Hero Section */}
      <section className="px-4 py-20 md:px-8 md:py-64">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="mb-6 text-5xl md:text-7xl">Nos Services</h1>
          <p className="font-HelveticaNow mx-auto max-w-2xl text-lg">
            Découvrez notre gamme complète de services de menuiserie sur mesure
            en Belgique. Chaque création est pensée pour s'harmoniser
            parfaitement avec votre intérieur.
          </p>
        </div>
      </section>

      {/* Full Width Image Section with Parallax */}
      <ParallaxImage
        src="/images/nemwardrobe7.webp"
        alt="Nemwood craftsmanship showcase"
        speed={1.5}
      />

      {/* Services Grid */}
      <section className="px-4 py-20 md:px-8 md:py-40">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 md:grid-cols-2">
            {services.map((service, index) => (
              <article
                key={service.slug}
                className="group cursor-pointer overflow-hidden rounded-sm"
              >
                <Link href={`/services/${service.slug}`}>
                  <div className="relative h-[400px] overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                    <div className="absolute right-0 bottom-0 left-0 p-6 text-white">
                      <h2 className="mb-3 text-3xl md:text-4xl">
                        {service.title}
                      </h2>
                      <p className="font-HelveticaNow mb-4 text-sm opacity-90">
                        {service.description}
                      </p>

                      <div className="inline-flex items-center text-sm">
                        <span>En savoir plus</span>
                        <ArrowRight size={16} className="ml-1" />
                      </div>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-secondary px-4 py-20 md:px-8 md:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-4xl md:text-5xl">
            Prêt à commencer votre projet ?
          </h2>
          <p className="font-HelveticaNow mx-auto mb-8 max-w-2xl text-lg">
            Contactez-nous pour discuter de votre projet de menuiserie sur
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
