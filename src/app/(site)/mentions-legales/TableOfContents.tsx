import TableOfContents from "@/components/TableOfContents";

const tocItems = [
  { id: "propriete", label: "1. Propriété intellectuelle" },
  { id: "responsabilite", label: "2. Limitation de responsabilité" },
  { id: "liens", label: "3. Liens hypertextes" },
  { id: "donnees", label: "4. Protection des données personnelles" },
  { id: "cookies", label: "5. Cookies" },
  { id: "juridiction", label: "6. Droit applicable et juridiction compétente" },
  { id: "editeur", label: "7. Éditeur du site" },
  { id: "hebergement", label: "8. Hébergement du site" },
  { id: "contact", label: "9. Contact" },
];

export default function MentionsLegalesTableOfContents() {
  return <TableOfContents items={tocItems} />;
}
