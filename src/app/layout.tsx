import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Navigation from "@/components/Navigation5";
import Footer from "@/components/Footer";
import LenisProvider from "@/components/LenisProvider";
import { ScrollToTop } from "@/components/ScrollToTop";
import { ThemeProvider } from "@/components/ThemeProvider";
import PageTransition from "@/components/PageTransition2";
import { metadata as homepageMetadata } from "./page-metadata";

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
  preload: true,
  fallback: ["serif"],
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

export const metadata: Metadata = homepageMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <link
          rel="preload"
          href="/images/iso2.webp"
          as="image"
          type="image/webp"
        />
      </head>
      <body
        suppressHydrationWarning
        className={`${ITCGaramondStdLtNarrow.variable} ${ITCGaramondStdLtNarrowIta.variable} ${HelveticaNow.variable} antialiased`}
      >
        <ThemeProvider>
          <PageTransition>
            <LenisProvider>
              <ScrollToTop />
              <Navigation />
              <main className="">{children}</main>
              <Footer />
            </LenisProvider>
          </PageTransition>
        </ThemeProvider>
      </body>
    </html>
  );
}
