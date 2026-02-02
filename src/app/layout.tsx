import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import "@/styles/cookieconsent-custom.css";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import ClientLayout from "@/components/ClientLayout";
import { Analytics } from "@vercel/analytics/next";
import PerformanceMonitor from "@/components/PerformanceMonitor";
import CookieConsent from "@/components/CookieConsent";
// import ScrollProgress from "@/components/ScrollProgress";

const ITCGaramondStdLtNarrow = localFont({
  src: [
    {
      path: "../fonts/ITCGaramondStd-LtNarrow.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-ITCGaramondStdLtNarrow",
  display: "swap",
  preload: true,
  fallback: ["serif"],
  adjustFontFallback: "Times New Roman",
});
const ITCGaramondStdLtNarrowIta = localFont({
  src: [
    {
      path: "../fonts/ITCGaramondStd-LtNarrowIta.ttf",
      weight: "400",
      style: "italic",
    },
  ],
  variable: "--font-ITCGaramondStdLtNarrowIta",
  display: "swap",
  preload: false, // Don't preload italic variant
  fallback: ["serif"],
  adjustFontFallback: "Times New Roman",
});
const HelveticaNow = localFont({
  src: [
    {
      path: "../fonts/helvetica-now-display.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-HelveticaNow",
  display: "swap",
  preload: true,
  fallback: ["sans-serif"],
  adjustFontFallback: "Arial",
});

// const neueHaasDisplay = localFont({
//   src: [
//     {
//       path: "../fonts/NeueHaasDisplay-Roman.ttf",
//       weight: "400",
//       style: "normal",
//     },
//   ],
//   variable: "--font-neue-haas-display",
//   display: "swap",
// });

export const metadata: Metadata = {
  title: "Nemwood | Meubles en bois sur mesure en Belgique",
  description:
    "Artisan menuisier en Belgique spécialisé dans la fabrication de meubles en bois sur mesure : escaliers, garde-robes, tables, cuisines. Devis gratuit.",
  authors: [{ name: "Nemwood" }],
  creator: "Nemwood",
  publisher: "Nemwood",
  robots: "index, follow",
  alternates: {
    canonical: "https://www.nemwood.be",
    languages: {
      "fr-BE": "https://www.nemwood.be", // Primary: French (Belgium)
      fr: "https://www.nemwood.be", // Fallback: French (general)
      "x-default": "https://www.nemwood.be", // Default fallback
    },
  },
  openGraph: {
    title: "Nemwood - Meubles en bois sur mesure en Belgique",
    description: "Fabrication artisanale de meubles en bois massif sur mesure.",
    type: "website",
    locale: "fr_BE",
    siteName: "Nemwood",
    url: "https://www.nemwood.be",
    images: [
      {
        url: "/images/nem1.png",
        width: 1200,
        height: 630,
        alt: "Nemwood - Meubles en bois sur mesure",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nemwood - Meubles en bois sur mesure en Belgique",
    description: "Fabrication artisanale de meubles en bois massif sur mesure.",
    images: ["/images/nem1.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" data-scroll-behavior="smooth">
      <head>
        {/* Next.js automatically handles font preloading and optimization */}

        {/* Cookie Consent CSS - loaded from CDN to avoid build issues */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/vanilla-cookieconsent@3.1.0/dist/cookieconsent.css"
        />

        {/* DNS prefetch for external resources */}
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />
        <link rel="dns-prefetch" href="//cdn.sanity.io" />

        {/* Preconnect to critical third-party origins */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://cdn.sanity.io" />

        {/* Hero image preloading is handled by Next.js Image component with priority prop */}
        {/* Font preloading is handled automatically by Next.js localFont with preload: true */}

        {/* JSON-LD Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Nemwood",
              description:
                "Artisan menuisier en Belgique spécialisé dans la fabrication de meubles en bois sur mesure : escaliers, garde-robes, tables, cuisines. Devis gratuit.",
              url: "https://www.nemwood.be",
              telephone: "+32 489 33 05 44",
              email: "contact@nemwood.be",
              // Adresse complète - Complétez avec votre adresse réelle (voir LOCALBUSINESS_SCHEMA_INFO.md)
              // Pour ajouter streetAddress, postalCode, etc., modifiez l'objet ci-dessous
              address: {
                "@type": "PostalAddress",
                streetAddress: "Nering 34",
                addressLocality: "Beersel",
                postalCode: "1650",
                addressRegion: "Vlaams-Brabant",
                addressCountry: "BE",
              },
              // Coordonnées GPS - Complétez avec vos coordonnées réelles (voir LOCALBUSINESS_SCHEMA_INFO.md)
              geo: {
                "@type": "GeoCoordinates",
                latitude: "50.7636007",
                longitude: "4.2960457",
                addressCountry: "BE",
              },
              // Images du business pour Google Business Profile
              image: [
                "https://www.nemwood.be/images/nem1.png",
                "https://www.nemwood.be/images/atelier-1.webp",
                "https://www.nemwood.be/images/hero-nemwood.webp",
              ],
              openingHours: ["Mo-Fr 09:00-18:00"],
              priceRange: "€€",
              currenciesAccepted: "EUR",
              paymentAccepted: "Cash, Credit Card, Bank Transfer",
              areaServed: [
                {
                  "@type": "Country",
                  name: "Belgium",
                },
                {
                  "@type": "City",
                  name: "Bruxelles",
                },
              ],
              // TODO: Ajouter aggregateRating si vous avez des avis clients
              // aggregateRating: {
              //   "@type": "AggregateRating",
              //   ratingValue: "4.8",
              //   reviewCount: "25",
              // },
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Services de menuiserie",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Menuiserie sur mesure",
                      serviceType: "Menuiserie sur mesure",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Ébénisterie artisanale",
                      serviceType: "Ébénisterie artisanale",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Fabrication de meubles en bois massif",
                      serviceType: "Fabrication de meubles en bois massif",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Escaliers sur mesure",
                      serviceType: "Escaliers en bois sur mesure",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Garde-robes sur mesure",
                      serviceType: "Garde-robes sur mesure",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Tables en bois massif",
                      serviceType: "Tables en bois massif",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Cuisines sur mesure",
                      serviceType: "Cuisines sur mesure",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Installation d'escaliers",
                      serviceType: "Installation d'escaliers",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Rénovation de cuisines",
                      serviceType: "Rénovation de cuisines",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Mobilier sur mesure",
                      serviceType: "Mobilier sur mesure",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Aménagement intérieur",
                      serviceType: "Aménagement intérieur",
                    },
                  },
                ],
              },
              sameAs: [
                "https://www.facebook.com/p/NemwOod-100063674583109/",
                "https://instagram.com/nem_wood",
              ],
            }),
          }}
        />

        {/* Additional Meta Tags for Better SEO */}
        {/* <meta name="theme-color" content="#8B4513" />
        <meta name="msapplication-TileColor" content="#8B4513" /> */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Nemwood" />
        <meta name="application-name" content="Nemwood" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />

        {/* Facebook and Open Graph meta tags are now handled by the metadata system */}

        {/* Google Analytics Component */}
        <GoogleAnalytics />

        {/* Performance Monitoring */}
        <PerformanceMonitor />

        {/* Immediate FOUC prevention styles */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
            /* CRITICAL: Immediate full-screen overlay to prevent any FOUC */
            html {
              background-color: var(--color-primary) !important;
              margin: 0;
              padding: 0;
              overflow-x: hidden;
            }
            
            body {
              background-color: var(--color-primary) !important;
              margin: 0;
              padding: 0;
              overflow-x: hidden;
            }
            
            /* Immediate full-screen overlay - appears before ANY content */
            body::before {
              content: '';
              position: fixed;
              top: 0;
              left: 0;
              width: 100vw;
              height: 100vh;
              background-color: var(--color-primary);
              z-index: 999999;
              pointer-events: none;
            }
            
            /* Remove the overlay once PageLoader is ready */
            .page-loader-ready body::before {
              display: none;
            }
            
            /* Ensure PageLoader is always on top during loading */
            .page-loader-active {
              position: fixed;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              z-index: 9999;
            }
          `,
          }}
        />
      </head>
      <body
        suppressHydrationWarning
        className={`${ITCGaramondStdLtNarrow.variable} ${ITCGaramondStdLtNarrowIta.variable} ${HelveticaNow.variable} bg-primary antialiased`}
        style={{ backgroundColor: "var(--color-primary)" }}
      >
        <ClientLayout>{children}</ClientLayout>
        {/* Cookie Consent Banner - RGPD compliant - Must load before GoogleAnalytics */}
        <CookieConsent />
        <Analytics />
      </body>
    </html>
  );
}
