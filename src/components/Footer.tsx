import Link from "next/link";
import Image from "next/image";
import Logo from "./Logo3";

export default function Footer() {
  return (
    <footer className="bg-secondary text-primary font-HelveticaNow relative flex min-h-svh w-full flex-col px-4 pt-12 pb-8 md:h-svh md:px-8">
      {/* Top Section */}
      <div className="flex flex-1 flex-col md:flex-row">
        {/* Left Side - Text */}
        <div className="flex w-full flex-col md:w-1/2">
          <div className="font-ITCGaramondN text-4xl md:max-w-xl md:text-6xl">
            Le bois notre passion, votre style notre création.
          </div>

          {/* Three Columns: Links, Services, Address */}
          <div className="mt-12 flex flex-col gap-8 md:flex-row md:gap-12 lg:gap-16">
            {/* Links Column */}
            <div className="flex flex-col">
              <div className="font-HelveticaNow mb-4 text-sm font-semibold tracking-wider uppercase">
                Liens
              </div>
              <div className="flex flex-col space-y-2">
                <Link
                  href="/"
                  className="font-HelveticaNow text-primary text-lg transition-colors hover:opacity-70"
                >
                  Home
                </Link>
                <Link
                  href="/a-propos"
                  className="font-HelveticaNow text-primary text-lg transition-colors hover:opacity-70"
                >
                  A propos
                </Link>
                <Link
                  href="/services"
                  className="font-HelveticaNow text-primary text-lg transition-colors hover:opacity-70"
                >
                  Services
                </Link>
                <Link
                  href="/contact"
                  className="font-HelveticaNow text-primary text-lg transition-colors hover:opacity-70"
                >
                  Contact
                </Link>
                <Link
                  href="/blog"
                  className="font-HelveticaNow text-primary text-lg transition-colors hover:opacity-70"
                >
                  Blog
                </Link>
              </div>
            </div>

            {/* Services Column */}
            <div className="flex flex-col">
              <div className="font-HelveticaNow mb-4 text-sm font-semibold tracking-wider uppercase">
                Services
              </div>
              <div className="flex flex-col space-y-2">
                <Link
                  href="/services/escaliers"
                  className="font-HelveticaNow text-primary text-lg transition-colors hover:opacity-70"
                >
                  Escaliers
                </Link>
                <Link
                  href="/services/garde-robes"
                  className="font-HelveticaNow text-primary text-lg transition-colors hover:opacity-70"
                >
                  Gardes-robes
                </Link>
                <Link
                  href="/services/tables"
                  className="font-HelveticaNow text-primary text-lg transition-colors hover:opacity-70"
                >
                  Tables
                </Link>
                <Link
                  href="/services/cuisines"
                  className="font-HelveticaNow text-primary text-lg transition-colors hover:opacity-70"
                >
                  Cuisines
                </Link>
                <Link
                  href="/services/bibliotheques"
                  className="font-HelveticaNow text-primary text-lg transition-colors hover:opacity-70"
                >
                  Bibliothèques
                </Link>
                <Link
                  href="/services/bureaux"
                  className="font-HelveticaNow text-primary text-lg transition-colors hover:opacity-70"
                >
                  Bureaux
                </Link>
                <Link
                  href="/services/salles-de-bain"
                  className="font-HelveticaNow text-primary text-lg transition-colors hover:opacity-70"
                >
                  Salles de bain
                </Link>
              </div>
            </div>

            {/* Address Column */}
            <div className="flex flex-col">
              <div className="font-HelveticaNow mb-4 text-sm font-semibold tracking-wider uppercase">
                Adresse
              </div>
              <div className="font-HelveticaNow text-primary flex flex-col space-y-1 text-lg leading-relaxed">
                <div>Nering 34</div>
                <div>1620 Beersel</div>
                <div>Vlaams-Brabant</div>
                <div>Belgique</div>
              </div>
            </div>

            {/* Contact Column */}
            <div className="flex flex-col">
              <div className="font-HelveticaNow mb-4 text-sm font-semibold tracking-wider uppercase">
                Contact
              </div>
              <div className="flex flex-col space-y-2">
                <Link
                  href="tel:+32489330544"
                  className="font-HelveticaNow text-primary text-lg transition-colors hover:opacity-70"
                >
                  +32 489 33 05 44
                </Link>
                <Link
                  href="mailto:contact@nemwood.be"
                  className="font-HelveticaNow text-primary text-lg transition-colors hover:opacity-70"
                >
                  contact@nemwood.be
                </Link>
                <Link
                  href="https://instagram.com/nem_wood"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-HelveticaNow text-primary text-lg transition-colors hover:opacity-70"
                >
                  Instagram
                </Link>
                <Link
                  href="https://www.facebook.com/p/NemwOod-100063674583109/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-HelveticaNow text-primary text-lg transition-colors hover:opacity-70"
                >
                  Facebook
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Section */}
      <div className="mt-8 border-t border-gray-300 pt-6 md:border-none md:pt-4">
        <div className="text-primary flex flex-col gap-6 text-sm md:flex-row md:items-end md:justify-between md:gap-0">
          {/* Logo and Copyright Section */}
          <div className="flex flex-col items-start gap-3">
            {/* Logo - responsive with viewport width units and max-width constraints */}
            <div className="w-[60vw]">
              <Logo className="text-primary h-auto w-full" />
            </div>
            {/* Copyright text under logo */}
            <span className="text-sm">© 2025 Tous droits réservés</span>
          </div>

          {/* Legal Links */}
          <div className="flex flex-row flex-wrap gap-6 md:gap-6">
            {/* Add legal links here */}
            {/* <Link
              href="/mentions-legales"
              className="transition-opacity hover:opacity-70"
            >
              Mentions légales
            </Link>
            <Link
              href="/privacy"
              className="transition-opacity hover:opacity-70"
            >
              Confidentialité
            </Link>
            <Link href="/cgv" className="transition-opacity hover:opacity-70">
              CGV
            </Link> */}
          </div>
        </div>
      </div>
    </footer>
  );
}
