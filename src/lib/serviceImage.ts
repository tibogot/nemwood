import type { ServiceImage } from "@/data/services";

/**
 * Props to spread on a next/image <Image fill />: source, alt text, Sanity
 * hotspot (as object-position) and blur placeholder when available.
 */
export function imageProps(image: ServiceImage) {
  return {
    src: image.src,
    alt: image.alt,
    ...(image.objectPosition && {
      style: { objectPosition: image.objectPosition },
    }),
    ...(image.blurDataURL && {
      placeholder: "blur" as const,
      blurDataURL: image.blurDataURL,
    }),
  };
}
