import TableOfContents from "@/components/TableOfContents";

const tocItems = [
  { id: "responsable", label: "1. Responsable du traitement des données" },
  { id: "introduction", label: "2. Introduction" },
  { id: "donnees-collectees", label: "3. Données personnelles collectées" },
  { id: "finalites", label: "4. Finalités de la collecte" },
  { id: "base-legale", label: "5. Base légale du traitement" },
  { id: "destinataires", label: "6. Destinataires des données" },
  {
    id: "duree-conservation",
    label: "7. Durée de conservation des données",
  },
  { id: "droits", label: "8. Vos droits" },
  {
    id: "exercice-droits",
    label: "9. Exercice de vos droits et réclamations",
  },
  {
    id: "securite",
    label: "10. Sécurité et transfert des données",
  },
  { id: "mineurs", label: "11. Mineurs et modifications" },
  { id: "contact", label: "12. Contact" },
];

export default function PolitiqueConfidentialiteTableOfContents() {
  return <TableOfContents items={tocItems} />;
}

