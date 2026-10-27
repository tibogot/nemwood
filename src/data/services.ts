/**
 * Default content for the service pages. Every image can be replaced from the
 * Studio (`service` documents); these values are used whenever a field is left
 * empty in Sanity, or if Sanity cannot be reached.
 */

export type ServiceBranch = "interieurs" | "evenements";

export interface ServiceImage {
  src: string;
  alt: string;
  /** CSS object-position derived from the Sanity hotspot */
  objectPosition?: string;
  /** Low-quality placeholder from Sanity asset metadata */
  blurDataURL?: string;
}

export interface ServiceDefaults {
  slug: string;
  title: string;
  branch: ServiceBranch;
  /** Card shown in the nav carousel, the services list and the prev/next links */
  cardImage: ServiceImage;
  /** Full-width parallax image under the page title */
  heroImage: ServiceImage;
  /** Section images, in the order they appear on the page */
  sectionImages: ServiceImage[];
}

export const branchBasePath: Record<ServiceBranch, string> = {
  interieurs: "/services",
  evenements: "/evenementiel",
};

// Array order is the default display order
export const defaultServices: ServiceDefaults[] = [
  {
    slug: "garde-robes",
    title: "Garde-robes",
    branch: "interieurs",
    cardImage: {
      src: "/images/horiz-garderobe.webp",
      alt: "Garde-robe sur mesure par Nemwood",
    },
    heroImage: {
      src: "/images/dressing pedro & paloma.png",
      alt: "Garde-robe en bois sur mesure - Artisanat Nemwood",
    },
    sectionImages: [
      {
        src: "/images/wardrobe.webp",
        alt: "Garde-robe optimisée sur mesure Nemwood",
      },
      {
        src: "/images/atelier-1.webp",
        alt: "Garde-robe en bois massif sur mesure Nemwood",
      },
      {
        src: "/images/wood-work.webp",
        alt: "Fabrication artisanale de garde-robe Nemwood",
      },
      {
        src: "/images/wardrobe.webp",
        alt: "Portes et finitions de garde-robe Nemwood",
      },
    ],
  },
  {
    slug: "cuisines",
    title: "Cuisines",
    branch: "interieurs",
    cardImage: {
      src: "/images/horiz-cuisine.webp",
      alt: "Cuisine sur mesure par Nemwood",
    },
    heroImage: {
      src: "/images/horiz-cuisine.webp",
      alt: "Cuisine en bois sur mesure - Artisanat Nemwood",
    },
    sectionImages: [
      {
        src: "/images/horiz-cuisine.webp",
        alt: "Cuisine optimisée sur mesure Nemwood",
      },
      {
        src: "/images/wood-work.webp",
        alt: "Fabrication artisanale de cuisine Nemwood",
      },
      {
        src: "/images/atelier-1.webp",
        alt: "Détail de la cuisine sur mesure",
      },
      {
        src: "/images/horiz-cuisine.webp",
        alt: "Équipement intégré dans cuisine Nemwood",
      },
      {
        src: "/images/wood-work.webp",
        alt: "Finition de cuisine sur mesure Nemwood",
      },
    ],
  },
  {
    slug: "bibliotheques",
    title: "Bibliothèques",
    branch: "interieurs",
    cardImage: {
      src: "/images/bibliothèque.webp",
      alt: "Bibliothèque sur mesure par Nemwood",
    },
    heroImage: {
      src: "/images/wardrobe.webp",
      alt: "Bibliothèque sur mesure Nemwood",
    },
    sectionImages: [
      {
        src: "/images/atelier-1.webp",
        alt: "Kitchen design by Nemwood - Cuisine sur mesure en bois",
      },
      {
        src: "/images/wardrobe.webp",
        alt: "Bibliothèque sur mesure Nemwood",
      },
      {
        src: "/images/wood-work.webp",
        alt: "Travail du bois artisanal Nemwood",
      },
      {
        src: "/images/wardrobe.webp",
        alt: "Finition artisanale Nemwood",
      },
      {
        src: "/images/wood-work.webp",
        alt: "Travail du bois artisanal Nemwood",
      },
      {
        src: "/images/atelier-1.webp",
        alt: "Création sur mesure Nemwood",
      },
      {
        src: "/images/wardrobe.webp",
        alt: "Finition artisanale Nemwood",
      },
    ],
  },
  {
    slug: "salles-de-bain",
    title: "Salles de bain",
    branch: "interieurs",
    cardImage: {
      src: "/images/sdb.webp",
      alt: "Salle de bain sur mesure par Nemwood",
    },
    heroImage: {
      src: "/images/horiz-cuisine.webp",
      alt: "Salle de bain sur mesure Nemwood",
    },
    sectionImages: [
      {
        src: "/images/atelier-1.webp",
        alt: "Salle de bain en bois résistant à l'humidité Nemwood",
      },
      {
        src: "/images/wood-work.webp",
        alt: "Fabrication artisanale de salle de bain Nemwood",
      },
      {
        src: "/images/horiz-cuisine.webp",
        alt: "Détail de la salle de bain sur mesure",
      },
      {
        src: "/images/horiz-cuisine.webp",
        alt: "Finition hydrofuge de salle de bain Nemwood",
      },
    ],
  },
  {
    slug: "bureaux",
    title: "Bureaux",
    branch: "interieurs",
    cardImage: {
      src: "/images/bureau.webp",
      alt: "Bureau sur mesure par Nemwood",
    },
    heroImage: {
      src: "/images/horiz-table.webp",
      alt: "Bureau sur mesure Nemwood",
    },
    sectionImages: [
      {
        src: "/images/bureau2.jpg",
        alt: "Bureau ergonomique sur mesure Nemwood",
      },
      {
        src: "/images/atelier-1.webp",
        alt: "Détail du bureau sur mesure",
      },
      {
        src: "/images/wood-work.webp",
        alt: "Fabrication artisanale de bureau Nemwood",
      },
      {
        src: "/images/horiz-table.webp",
        alt: "Bureau en bois massif sur mesure Nemwood",
      },
      {
        src: "/images/atelier-1.webp",
        alt: "Bureau avec intégration technologique Nemwood",
      },
      {
        src: "/images/wood-work.webp",
        alt: "Finition de bureau sur mesure Nemwood",
      },
    ],
  },
  {
    slug: "tables",
    title: "Tables",
    branch: "interieurs",
    cardImage: {
      src: "/images/table-a-manger-2.jpg",
      alt: "Table sur mesure par Nemwood",
    },
    heroImage: {
      src: "/images/table-a-manger-2.jpg",
      alt: "Table en bois sur mesure - Artisanat Nemwood",
    },
    sectionImages: [
      {
        src: "/images/atelier-1.webp",
        alt: "Table sur mesure Nemwood - Conception artisanale",
      },
      {
        src: "/images/horiz-table.webp",
        alt: "Table en bois massif sur mesure Nemwood",
      },
      {
        src: "/images/wood-work.webp",
        alt: "Fabrication artisanale de tables Nemwood",
      },
      {
        src: "/images/horiz-table.webp",
        alt: "Finition d'une table sur mesure Nemwood",
      },
      {
        src: "/images/atelier-1.webp",
        alt: "Accompagnement personnalisé pour table sur mesure Nemwood",
      },
    ],
  },
  {
    slug: "escaliers",
    title: "Escaliers",
    branch: "interieurs",
    cardImage: {
      src: "/images/horiz-escalier.webp",
      alt: "Escalier sur mesure par Nemwood",
    },
    heroImage: {
      src: "/images/stairs.webp",
      alt: "Escalier en bois sur mesure - Artisanat Nemwood",
    },
    sectionImages: [
      {
        src: "/images/stairs.webp",
        alt: "Escalier architectural sur mesure Nemwood",
      },
      {
        src: "/images/wood-work.webp",
        alt: "Fabrication artisanale d'escalier Nemwood",
      },
      {
        src: "/images/atelier-1.webp",
        alt: "Détail de l'escalier sur mesure",
      },
      {
        src: "/images/stairs.webp",
        alt: "Finition d'escalier sur mesure Nemwood",
      },
    ],
  },
  {
    slug: "scenographie-decors",
    title: "Scénographie & décors",
    branch: "evenements",
    cardImage: {
      src: "/images/Render 3D.webp",
      alt: "Scénographie et décors en bois par Nemwood",
    },
    heroImage: {
      src: "/images/Render 3D.webp",
      alt: "Scénographie en bois sur mesure Nemwood",
    },
    sectionImages: [
      {
        src: "/images/Render 3D - 2 .webp",
        alt: "Rendu 3D d'un décor événementiel Nemwood",
      },
      {
        src: "/images/atelier-1.webp",
        alt: "Fabrication d'un décor en bois dans l'atelier Nemwood",
      },
      {
        src: "/images/wood-work.webp",
        alt: "Structure en bois démontable pour événement",
      },
      {
        src: "/images/fabrication-sur-mesure.webp",
        alt: "Montage d'une scénographie en bois par Nemwood",
      },
    ],
  },
  {
    slug: "bars-comptoirs",
    title: "Bars & comptoirs",
    branch: "evenements",
    cardImage: {
      src: "/images/BBP Dansaert 5.webp",
      alt: "Bar et comptoir en bois par Nemwood",
    },
    heroImage: {
      src: "/images/BBP Dansaert 5.webp",
      alt: "Bar en bois sur mesure Nemwood",
    },
    sectionImages: [
      {
        src: "/images/IMG_0989.webp",
        alt: "Bar mobile en bois sur mesure Nemwood",
      },
      {
        src: "/images/atelier-1.webp",
        alt: "Fabrication d'un comptoir en bois dans l'atelier Nemwood",
      },
      {
        src: "/images/IMG_0992.webp",
        alt: "Comptoir en bois personnalisé Nemwood",
      },
      {
        src: "/images/wood-work.webp",
        alt: "Détail de finition d'un bar en bois Nemwood",
      },
    ],
  },
];

/** Most section images on a single page: number of `sectionN` fields in Sanity */
export const maxSectionImages = Math.max(
  ...defaultServices.map((s) => s.sectionImages.length),
);
