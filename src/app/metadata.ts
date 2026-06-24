import type { Metadata } from "next";

export const siteMetadata = {
  title: "Menuiserie sur mesure en Belgique | Nemwood",
  description:
    "Menuisier sur mesure près de Bruxelles. Nemwood conçoit vos meubles en bois sur mesure : tables, cuisines, escaliers, garde-robes. Devis gratuit.",
  authors: [{ name: "Nemwood" }],
  creator: "Nemwood",
  publisher: "Nemwood",
  robots: "index, follow",
  url: "https://www.nemwood.be",
  siteName: "Nemwood",
  locale: "fr_BE",
  image: "/images/og-default.webp",
  facebook: {
    appId: "100063674583109",
    pageId: "100063674583109",
    adminId: "1140420250",
    pageUrl: "https://www.facebook.com/p/NemwOod-100063674583109/",
  },
};

function getOgImageType(imageUrl: string): string {
  if (imageUrl.endsWith(".webp")) return "image/webp";
  if (imageUrl.endsWith(".jpg") || imageUrl.endsWith(".jpeg"))
    return "image/jpeg";
  if (imageUrl.endsWith(".png")) return "image/png";
  return "image/webp";
}

// Utility function to generate page-specific metadata
export function generateMetadata(
  title?: string,
  description?: string,
  image?: string,
  url?: string,
  canonical?: string,
): Metadata {
  const canonicalUrl = canonical || url || siteMetadata.url;
  const pageTitle = title || siteMetadata.title;
  const pageDescription = description || siteMetadata.description;
  const pageImage = image || siteMetadata.image;
  const pageUrl = url || siteMetadata.url;

  return {
    metadataBase: new URL(siteMetadata.url),
    title: pageTitle,
    description: pageDescription,
    authors: siteMetadata.authors,
    creator: siteMetadata.creator,
    publisher: siteMetadata.publisher,
    robots: siteMetadata.robots,
    alternates: {
      canonical: canonicalUrl,
      languages: {
        "fr-BE": canonicalUrl,
        fr: canonicalUrl,
        "x-default": canonicalUrl,
      },
    },
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      type: "website",
      locale: siteMetadata.locale,
      siteName: siteMetadata.siteName,
      url: pageUrl,
      images: [
        {
          url: pageImage,
          width: 1200,
          height: 630,
          alt: "Nemwood - Meubles en bois sur mesure",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDescription,
      images: [pageImage],
    },
    other: {
      "fb:app_id": siteMetadata.facebook.appId,
      "fb:page_id": siteMetadata.facebook.pageId,
      "fb:admins": siteMetadata.facebook.adminId,
      "og:image:width": "1200",
      "og:image:height": "630",
      "og:image:type": getOgImageType(pageImage),
      "og:image:alt": "Nemwood - Meubles en bois sur mesure",
      "og:type": "website",
      "og:locale": siteMetadata.locale,
      "og:site_name": siteMetadata.siteName,
      "og:url": pageUrl,
      "og:title": pageTitle,
      "og:description": pageDescription,
      "og:see_also": siteMetadata.facebook.pageUrl,
    },
  };
}

export const metadata: Metadata = generateMetadata();
