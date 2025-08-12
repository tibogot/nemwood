import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Navigation from "@/components/Navigation5";
import Footer from "@/components/Footer";
import LenisProvider from "@/components/LenisProvider";
import { ScrollToTop } from "@/components/ScrollToTop";
import { ThemeProvider } from "@/components/ThemeProvider";
import PageTransition from "@/components/PageTransition2";

// import ScrollProgress from "@/components/ScrollProgress";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

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
});

const neueHaasDisplay = localFont({
  src: [
    {
      path: "../fonts/NeueHaasDisplay-Roman.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-neue-haas-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nemwood | Meubles en bois sur mesure en Belgique - Artisan menuisier",
  description:
    "Artisan menuisier en Belgique spécialisé dans la fabrication de meubles en bois sur mesure : escaliers, garde-robes, tables, cuisines. Devis gratuit.",
  keywords: [
    "menuisier belgique",
    "meubles bois sur mesure",
    "escaliers bois belgique",
    "garde-robe sur mesure",
    "table bois massif",
    "cuisine bois belgique",
  ],
  openGraph: {
    title: "Nemwood - Meubles en bois sur mesure en Belgique",
    description: "Fabrication artisanale de meubles en bois massif sur mesure.",
    type: "website",
    locale: "fr_BE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} ${ITCGaramondStdLtNarrow.variable} ${ITCGaramondStdLtNarrowIta.variable} ${HelveticaNow.variable} ${neueHaasDisplay.variable} antialiased`}
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
