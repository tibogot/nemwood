import { defineField, defineType } from "sanity";
import { defaultServices, maxSectionImages } from "../../data/services";

// Number of section images on each page, to only show the relevant slots
const sectionCount = Object.fromEntries(
  defaultServices.map((s) => [s.slug, s.sectionImages.length]),
);

// Image with hotspot (focal point) and a required alt text for SEO
const imageWithAlt = {
  type: "image",
  options: { hotspot: true },
  fields: [
    defineField({
      name: "alt",
      title: "Texte alternatif",
      type: "string",
      description:
        "Décrit l'image pour Google et les lecteurs d'écran (ex. « Garde-robe en chêne avec portes coulissantes »).",
      validation: (Rule) => Rule.required(),
    }),
  ],
};

/**
 * One document per service page. Pages and URLs are defined in the code
 * (see src/data/services.ts): documents are created by
 * scripts/seed-services.ts and cannot be created or deleted from the Studio.
 * Any empty field falls back to the image currently in the code.
 */
export default defineType({
  name: "service",
  title: "Page service",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Nom",
      type: "string",
      description:
        "Nom affiché dans le menu, la liste des services et le pied de page.",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Adresse de la page",
      type: "string",
      readOnly: true,
      description: "Liée au code du site, ne peut pas être modifiée.",
    }),
    defineField({
      name: "branch",
      title: "Catégorie",
      type: "string",
      readOnly: true,
      options: {
        list: [
          { title: "Intérieurs", value: "interieurs" },
          { title: "Événements", value: "evenements" },
        ],
      },
    }),
    defineField({
      name: "order",
      title: "Ordre d'affichage",
      type: "number",
      description:
        "Position dans le menu et les listes (1 = en premier). Les services sont triés du plus petit au plus grand.",
    }),
    defineField({
      ...imageWithAlt,
      name: "cardImage",
      title: "Image de la carte",
      description:
        "Vignette utilisée dans le menu, la liste des services et les liens « service précédent / suivant ».",
    }),
    defineField({
      ...imageWithAlt,
      name: "heroImage",
      title: "Image principale",
      description: "Grande image en pleine largeur sous le titre de la page.",
    }),
    // One optional field per section image, so any single image can be
    // replaced without touching the others
    ...Array.from({ length: maxSectionImages }, (_, index) =>
      defineField({
        ...imageWithAlt,
        name: `section${index + 1}`,
        title: `Image section ${index + 1}`,
        description:
          index === 0
            ? "Images de la page dans l'ordre où elles apparaissent en descendant, après l'image principale. Laisser vide pour garder l'image actuelle."
            : undefined,
        hidden: ({ document }) =>
          index >= (sectionCount[document?.slug as string] ?? 0),
      }),
    ),
  ],
  orderings: [
    {
      title: "Ordre d'affichage",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
  preview: {
    select: { title: "title", order: "order", media: "cardImage" },
    prepare({ title, order, media }) {
      return {
        title,
        subtitle: order != null ? `Position ${order}` : undefined,
        media,
      };
    },
  },
});
