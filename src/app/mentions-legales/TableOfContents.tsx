"use client";

import { useLenis } from "lenis/react";

const tocItems = [
  { id: "editeur", label: "1. Éditeur du site" },
  { id: "hebergement", label: "2. Hébergement du site" },
  { id: "propriete", label: "3. Propriété intellectuelle" },
  { id: "responsabilite", label: "4. Limitation de responsabilité" },
  { id: "liens", label: "5. Liens hypertextes" },
  { id: "donnees", label: "6. Protection des données personnelles" },
  { id: "cookies", label: "7. Cookies" },
  { id: "juridiction", label: "8. Droit applicable et juridiction compétente" },
  { id: "contact", label: "9. Contact" },
];

export default function TableOfContents() {
  const lenis = useLenis();

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string,
  ) => {
    e.preventDefault();
    if (!lenis) return;

    const element = document.getElementById(id);
    if (element) {
      // Calculate the target scroll position
      // Get the element's position relative to the document
      const rect = element.getBoundingClientRect();
      const scrollTop = lenis.scroll || window.pageYOffset;
      // Calculate target position, subtracting 80px for sticky header offset (matching scroll-mt-20)
      const targetY = rect.top + scrollTop - 80;

      lenis.scrollTo(targetY, {
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });
    }
  };

  return (
    <aside className="md:w-[600px] md:flex-shrink-0">
      <nav className="sticky top-20">
        <div className="text-primary/70 mb-20 text-base md:text-lg">
          Dernière mise à jour : 26 décembre 2025
        </div>
        <h3 className="font-HelveticaNow mb-6 text-base md:text-lg">
          Table des matières
        </h3>
        <ul className="font-HelveticaNow text-base md:text-lg">
          {tocItems.map((item) => (
            <li key={item.id} className="border-primary border-t py-3">
              <a
                href={`#${item.id}`}
                onClick={(e) => handleLinkClick(e, item.id)}
                className="text-primary/70 hover:text-primary transition-colors"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
