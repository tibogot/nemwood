/**
 * Generate BreadcrumbList Schema.org JSON-LD for SEO
 * @param items Array of breadcrumb items with name and url
 * @returns JSON-LD string for BreadcrumbList
 */
export function generateBreadcrumbsSchema(
  items: { name: string; url: string }[],
): string {
  const baseUrl = "https://www.nemwood.be";

  const breadcrumbList = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url.startsWith("http") ? item.url : `${baseUrl}${item.url}`,
    })),
  };

  return JSON.stringify(breadcrumbList);
}

/**
 * Helper function to generate breadcrumbs for common page types
 */
export const breadcrumbHelpers = {
  // Homepage (no breadcrumbs needed, but included for consistency)
  home: () => generateBreadcrumbsSchema([{ name: "Accueil", url: "/" }]),

  // Services pages
  services: () =>
    generateBreadcrumbsSchema([
      { name: "Accueil", url: "/" },
      { name: "Services", url: "/services" },
    ]),

  service: (serviceName: string, serviceSlug: string) =>
    generateBreadcrumbsSchema([
      { name: "Accueil", url: "/" },
      { name: "Services", url: "/services" },
      { name: serviceName, url: `/services/${serviceSlug}` },
    ]),

  // Blog pages
  blog: () =>
    generateBreadcrumbsSchema([
      { name: "Accueil", url: "/" },
      { name: "Blog", url: "/blog" },
    ]),

  blogPost: (postTitle: string, postSlug: string) =>
    generateBreadcrumbsSchema([
      { name: "Accueil", url: "/" },
      { name: "Blog", url: "/blog" },
      { name: postTitle, url: `/blog/${postSlug}` },
    ]),

  // About page
  about: () =>
    generateBreadcrumbsSchema([
      { name: "Accueil", url: "/" },
      { name: "À propos", url: "/a-propos" },
    ]),

  // Contact page
  contact: () =>
    generateBreadcrumbsSchema([
      { name: "Accueil", url: "/" },
      { name: "Contact", url: "/contact" },
    ]),
};

