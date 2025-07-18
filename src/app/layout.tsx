import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Navigation from "@/components/Navigation2";
import Footer from "@/components/Footer";
import LenisProvider from "@/components/LenisProvider";
import { ScrollToTop } from "@/components/ScrollToTop";
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

export const metadata: Metadata = {
  title: "Nemwood – Fabricant de meubles en bois sur mesure en Belgique ",
  description:
    "Nemwood est un artisan menuisier en Belgique spécialisé dans la fabrication de meubles en bois sur mesure.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} ${ITCGaramondStdLtNarrow.variable} ${ITCGaramondStdLtNarrowIta.variable} ${HelveticaNow.variable} antialiased`}
      >
        <LenisProvider>
          <ScrollToTop />
          {/* <ScrollProgress /> */}
          <Navigation />
          <main className="">{children}</main>
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
