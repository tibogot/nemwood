import TableOfContents from "@/components/TableOfContents";

const tocItems = [
  { id: "introduction", label: "1. Introduction" },
  { id: "qu-est-ce-qu-un-cookie", label: "2. Qu'est-ce qu'un cookie ?" },
  { id: "types-cookies", label: "3. Types de cookies utilisés sur nemwood.be" },
  { id: "gestion-preferences", label: "4. Gestion de vos préférences cookies" },
  { id: "cookies-tiers", label: "5. Cookies tiers et services externes" },
  { id: "duree-conservation", label: "6. Durée de conservation des cookies" },
  { id: "protection-donnees", label: "7. Protection de vos données" },
  { id: "droits", label: "8. Vos droits" },
  { id: "mineurs", label: "9. Cookies et mineurs" },
  { id: "modifications", label: "10. Modifications de la politique de cookies" },
  { id: "liens-utiles", label: "11. Liens utiles et autorité de contrôle" },
  { id: "contact", label: "12. Contact" },
];

export default function PolitiqueCookiesTableOfContents() {
  return <TableOfContents items={tocItems} />;
}

