import client from "@/sanityClient";
import {
  branchBasePath,
  defaultServices,
  maxSectionImages,
  type ServiceBranch,
  type ServiceImage,
} from "@/data/services";

export interface ServiceSummary {
  slug: string;
  title: string;
  branch: ServiceBranch;
  href: string;
  image: ServiceImage;
}

export interface ServicePageImages {
  hero: ServiceImage;
  sections: ServiceImage[];
}

interface SanityImage {
  url?: string;
  alt?: string;
  lqip?: string;
  hotspot?: { x: number; y: number };
}

interface SanityService {
  slug: string;
  title?: string;
  order?: number;
  cardImage?: SanityImage;
  heroImage?: SanityImage;
  sections?: (SanityImage | null)[];
}

const imageProjection = `{ alt, hotspot, "url": asset->url, "lqip": asset->metadata.lqip }`;

const servicesQuery = `*[_type == "service" && !(_id in path("drafts.**"))]{
  slug,
  title,
  order,
  cardImage${imageProjection},
  heroImage${imageProjection},
  "sections": [${Array.from({ length: maxSectionImages }, (_, i) => `section${i + 1}${imageProjection}`).join(", ")}]
}`;

async function fetchSanityServices(): Promise<SanityService[]> {
  try {
    return await client.fetch<SanityService[]>(
      servicesQuery,
      {},
      // Same ISR window as the blog
      { next: { revalidate: 60, tags: ["service"] } },
    );
  } catch {
    // Sanity unreachable: the site keeps working with the default images
    return [];
  }
}

function resolveImage(
  image: SanityImage | null | undefined,
  fallback: ServiceImage,
): ServiceImage {
  if (!image?.url) return fallback;
  return {
    src: image.url,
    alt: image.alt || fallback.alt,
    objectPosition: image.hotspot
      ? `${image.hotspot.x * 100}% ${image.hotspot.y * 100}%`
      : undefined,
    blurDataURL: image.lqip,
  };
}

/** Services in display order (Sanity `order`, then default order). */
export async function getServices(
  branch?: ServiceBranch,
): Promise<ServiceSummary[]> {
  const fromSanity = await fetchSanityServices();

  return defaultServices
    .map((service, index) => {
      const doc = fromSanity.find((s) => s.slug === service.slug);
      return {
        order: doc?.order ?? index + 1,
        summary: {
          slug: service.slug,
          title: doc?.title || service.title,
          branch: service.branch,
          href: `${branchBasePath[service.branch]}/${service.slug}`,
          image: resolveImage(doc?.cardImage, service.cardImage),
        },
      };
    })
    .filter(({ summary }) => !branch || summary.branch === branch)
    .sort((a, b) => a.order - b.order)
    .map(({ summary }) => summary);
}

/** Hero and section images of one service page, with per-image fallbacks. */
export async function getServicePageImages(
  slug: string,
): Promise<ServicePageImages> {
  const service = defaultServices.find((s) => s.slug === slug);
  if (!service) throw new Error(`Unknown service: ${slug}`);

  const doc = (await fetchSanityServices()).find((s) => s.slug === slug);

  return {
    hero: resolveImage(doc?.heroImage, service.heroImage),
    sections: service.sectionImages.map((fallback, index) =>
      resolveImage(doc?.sections?.[index], fallback),
    ),
  };
}
