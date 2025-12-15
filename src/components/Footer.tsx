import Link from "next/link";
import Image from "next/image";
import Logo from "./Logo3";

export default function Footer() {
  return (
    <footer className="bg-secondary text-primary font-HelveticaNow border-primary relative flex min-h-svh w-full flex-col border-t px-4 pt-12 pb-8 md:h-svh md:px-8">
      {/* Top Section */}
      <div className="flex flex-1 flex-col">
        {/* Text Section */}
        <div className="font-ITCGaramondN text-4xl md:max-w-xl md:text-6xl">
          Le bois notre passion, <br />
          votre style notre création.
        </div>

        {/* Links Container: Left (Liens & Services) and Right (Adresse & Contact) */}
        <div className="mt-10 grid grid-cols-2 gap-6 md:mt-30 md:flex md:flex-row md:justify-between">
          {/* Left Side: Links and Services */}
          <div className="contents md:flex md:flex-row md:gap-18">
            {/* Links Column */}
            <div className="flex flex-col">
              <div className="font-HelveticaNow mb-4 text-sm font-semibold tracking-wider">
                Liens
              </div>
              <div className="flex flex-col">
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
              <div className="font-HelveticaNow mb-4 text-sm font-semibold tracking-wider">
                Services
              </div>
              <div className="flex flex-col">
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
          </div>

          {/* Right Side: Address and Contact */}
          <div className="contents md:flex md:flex-row md:gap-18">
            {/* Address Column */}
            <div className="flex flex-col">
              <div className="font-HelveticaNow mb-4 text-sm font-semibold tracking-wider">
                Adresse
              </div>
              <div className="font-HelveticaNow text-primary flex flex-col text-lg leading-relaxed">
                <div>Nering 34, 1620 Beersel</div>
                <div>Vlaams-Brabant Belgique</div>
              </div>
            </div>

            {/* Contact Column */}
            <div className="flex flex-col">
              <div className="font-HelveticaNow mb-4 text-sm font-semibold tracking-wider">
                Contact
              </div>
              <div className="flex flex-col">
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
