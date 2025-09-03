"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { usePathname } from "next/navigation";

const services = [
  { name: "Escaliers", slug: "escaliers", image: "/images/stairs.webp" },
  { name: "Gardes-robes", slug: "garde-robes", image: "/images/wardrobe.webp" },
  { name: "Tables", slug: "tables", image: "/images/table.webp" },
  { name: "Cuisines", slug: "cuisines", image: "/images/kitchen.webp" },
  {
    name: "Bibliothèque",
    slug: "bibliotheque",
    image: "/images/wardrobe.webp",
  },
  { name: "Bureau", slug: "bureau", image: "/images/table.webp" },
  {
    name: "Salle de bain",
    slug: "salle-de-bain",
    image: "/images/kitchen.webp",
  },
];

export default function ServiceNavigation() {
  const pathname = usePathname();

  // Get current service index
  const currentServiceIndex = services.findIndex(
    (service) => pathname === `/services/${service.slug}`,
  );

  // If not found, don't render navigation
  if (currentServiceIndex === -1) return null;

  // Get previous and next services
  const previousService =
    currentServiceIndex > 0
      ? services[currentServiceIndex - 1]
      : services[services.length - 1]; // Wrap to last service

  const nextService =
    currentServiceIndex < services.length - 1
      ? services[currentServiceIndex + 1]
      : services[0]; // Wrap to first service

  return (
    <section className="bg-secondary border-primary border-t px-4 py-8 md:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-center justify-between">
          {/* Previous Service */}
          <Link
            href={`/services/${previousService.slug}`}
            className="group text-primary hover:text-primary/70 flex items-center space-x-4 transition-colors duration-300"
          >
            <div className="flex items-center space-x-3">
              <ArrowLeft
                size={20}
                className="transition-transform duration-300 group-hover:-translate-x-1"
              />
              <div className="relative h-16 w-20 overflow-hidden rounded-sm">
                <Image
                  src={previousService.image}
                  alt={previousService.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  sizes="80px"
                />
              </div>
              <div className="text-left">
                <p className="text-primary/60 text-sm font-light">Précédent</p>
                <p className="font-medium">{previousService.name}</p>
              </div>
            </div>
          </Link>

          {/* Current Service Indicator */}
          <div className="text-center">
            <p className="text-primary/60 text-sm font-light">
              {currentServiceIndex + 1} / {services.length}
            </p>
          </div>

          {/* Next Service */}
          <Link
            href={`/services/${nextService.slug}`}
            className="group text-primary hover:text-primary/70 flex items-center space-x-4 transition-colors duration-300"
          >
            <div className="flex items-center space-x-3">
              <div className="text-right">
                <p className="text-primary/60 text-sm font-light">Suivant</p>
                <p className="font-medium">{nextService.name}</p>
              </div>
              <div className="relative h-16 w-20 overflow-hidden rounded-sm">
                <Image
                  src={nextService.image}
                  alt={nextService.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  sizes="80px"
                />
              </div>
              <ArrowRight
                size={20}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
