import Link from "next/link";
import Image from "next/image";
import { branchBasePath, defaultServices } from "@/data/services";
import { getServices } from "@/lib/services";
import { imageProps } from "@/lib/serviceImage";

interface ServiceNavigationProps {
  /** Slug of the service page this navigation is rendered on */
  current: string;
}

export default async function ServiceNavigation({
  current,
}: ServiceNavigationProps) {
  // Stay within the current branch (Intérieurs or Événements)
  const branch = defaultServices.find((s) => s.slug === current)?.branch;
  if (!branch) return null;
  const basePath = branchBasePath[branch];
  const isEvent = branch === "evenements";
  const list = await getServices(branch);

  // Get current service index
  const currentServiceIndex = list.findIndex(
    (service) => service.slug === current,
  );

  // If not found, don't render navigation
  if (currentServiceIndex === -1) return null;

  // Get previous and next services
  const previousService =
    currentServiceIndex > 0
      ? list[currentServiceIndex - 1]
      : list[list.length - 1]; // Wrap to last service

  const nextService =
    currentServiceIndex < list.length - 1
      ? list[currentServiceIndex + 1]
      : list[0]; // Wrap to first service

  // With only two services, previous and next are the same page
  const showPrevious = previousService.slug !== nextService.slug;

  return (
    <section className="bg-secondary px-4 py-8 md:px-8">
      <div className="border-t border-gray-200 pt-8">
        <div className="flex flex-col gap-8 md:flex-row md:justify-between">
          {/* Previous Service */}
          {showPrevious ? (
            <Link
              href={previousService.href}
              className="group flex-1 cursor-pointer"
            >
              <div className="flex items-center gap-4">
                <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-sm">
                  <Image
                    {...imageProps(previousService.image)}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="80px"
                  />
                </div>
                <div className="flex-1">
                  <p className="font-HelveticaNow mb-1 text-sm text-gray-500">
                    Service précédent
                  </p>
                  <h3 className="font-ITCGaramondN group-hover:text-primary/70 text-lg leading-tight transition-colors">
                    {previousService.title}
                  </h3>
                </div>
              </div>
            </Link>
          ) : (
            <div className="hidden flex-1 md:block" />
          )}

          {/* Back to Services Button */}
          <div className="flex items-center justify-center">
            <Link
              href={basePath}
              className="font-HelveticaNow border-primary hover:bg-primary hover:text-secondary flex cursor-pointer items-center border border-solid px-6 py-3 transition-colors duration-300 ease-in-out"
            >
              <span>
                {isEvent ? "Retour aux événements" : "Retour aux services"}
              </span>
            </Link>
          </div>

          {/* Next Service */}
          <Link href={nextService.href} className="group flex-1 cursor-pointer">
            <div className="flex items-center gap-4">
              <div className="flex-1 text-right">
                <p className="font-HelveticaNow mb-1 text-sm text-gray-500">
                  Service suivant
                </p>
                <h3 className="font-ITCGaramondN group-hover:text-primary/70 text-lg leading-tight transition-colors">
                  {nextService.title}
                </h3>
              </div>
              <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-sm">
                <Image
                  {...imageProps(nextService.image)}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="80px"
                />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
