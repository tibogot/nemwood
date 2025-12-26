import TableOfContents from "@/components/TableOfContents";

const tocItems = [
  { id: "preambule", label: "1. Préambule" },
  { id: "article-1", label: "2. Article 1 - Champ d'application" },
  { id: "article-2", label: "3. Article 2 - Devis" },
  { id: "article-3", label: "4. Article 3 - Commande" },
  { id: "article-4", label: "5. Article 4 - Prix" },
  { id: "article-5", label: "6. Article 5 - Conditions de paiement" },
  { id: "article-6", label: "7. Articles 6-7 - Délais et livraison" },
  { id: "article-8", label: "8. Articles 8-9 - Réception et garantie" },
  { id: "article-10", label: "9. Articles 10-11 - Modifications et responsabilité" },
  { id: "article-12", label: "10. Articles 12-13 - Force majeure et propriété intellectuelle" },
  { id: "article-14", label: "11. Articles 14-16 - Dispositions finales" },
  { id: "contact", label: "12. Contact" },
];

export default function CGVTableOfContents() {
  return <TableOfContents items={tocItems} />;
}

