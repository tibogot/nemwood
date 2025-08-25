import type { Metadata } from "next";
import { generateMetadata } from "./metadata";

export const metadata: Metadata = generateMetadata(
  "Nemwood | Meubles en bois sur mesure en Belgique - Artisan menuisier",
  "Artisan menuisier en Belgique spécialisé dans la fabrication de meubles en bois sur mesure : escaliers, garde-robes, tables, cuisines. Devis gratuit.",
  "/images/nemohero.webp",
  "https://www.nemwood.be",
);
