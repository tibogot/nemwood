interface ArticleSchemaProps {
  headline: string;
  description?: string;
  image?: string;
  datePublished: string; // ISO date string
  dateModified?: string; // ISO date string (optional)
  author?: {
    name: string;
    url?: string;
  };
  url: string;
}

/**
 * Component to add Article Schema.org JSON-LD to blog post pages
 * Usage: <ArticleSchema headline="..." datePublished="..." url="..." />
 */
export default function ArticleSchema({
  headline,
  description,
  image,
  datePublished,
  dateModified,
  author = { name: "Nemwood" },
  url,
}: ArticleSchemaProps) {
  const baseUrl = "https://www.nemwood.be";

  // Ensure image URL is absolute
  const imageUrl = image
    ? image.startsWith("http")
      ? image
      : `${baseUrl}${image}`
    : `${baseUrl}/images/nemohero.webp`;

  // Ensure URL is absolute
  const articleUrl = url.startsWith("http") ? url : `${baseUrl}${url}`;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: headline,
    ...(description && { description: description }),
    image: imageUrl,
    datePublished: datePublished,
    ...(dateModified && { dateModified: dateModified }),
    author: {
      "@type": "Person",
      name: author.name,
      ...(author.url && { url: author.url }),
    },
    publisher: {
      "@type": "Organization",
      name: "Nemwood",
      url: baseUrl,
      logo: {
        "@type": "ImageObject",
        url: `${baseUrl}/logohero.svg`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": articleUrl,
    },
    url: articleUrl,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(articleSchema),
      }}
    />
  );
}

