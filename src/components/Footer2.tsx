import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-secondary text-primary font-NHD relative flex min-h-svh w-full flex-col px-4 py-8 md:h-svh md:px-8">
      {/* Top Section */}
      <div className="flex flex-1 flex-col md:flex-row">
        {/* Left Side - Navigation */}
        <div className="left flex w-full flex-col md:w-1/2">
          <div className="relative mt-20 h-full w-full">
            <Image
              src="/logofooter2.svg"
              alt="Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="right flex w-full flex-col md:w-1/2">
          <h1 className="font-ITCGaramondN mt-8 mb-8 text-3xl leading-tight md:mt-20 md:text-4xl lg:text-5xl">
            Chaque pièce est réalisée à la main, dans un souci de qualité, de
            durabilité et de design unique.
          </h1>

          {/* Newsletter Subscription */}
          <div className="mt-6 md:mt-8">
            <div className="flex flex-col gap-3 sm:flex-row sm:gap-2">
              <input
                type="email"
                placeholder="Votre adresse e-mail"
                className="focus:ring-primary flex-1 rounded-md border border-gray-300 px-4 py-3 text-base focus:border-transparent focus:ring-2 focus:outline-none"
              />
              <button className="rounded-md bg-black px-6 py-3 text-white transition-colors hover:bg-gray-800 sm:whitespace-nowrap">
                Confirmer
              </button>
            </div>
          </div>
          <div className="mt-20 flex flex-col gap-12 md:flex-row">
            {/* Contact Section */}
            <ul className="contact flex-1">
              <h4 className="mb-4 font-semibold">CONTACT</h4>
              <li>
                <Link
                  href="/about"
                  className="text-xl transition-opacity hover:opacity-70 md:text-lg"
                >
                  0489 33 05 44
                </Link>
              </li>
              <li>
                <Link
                  href="/collections"
                  className="text-xl transition-opacity hover:opacity-70 md:text-lg"
                >
                  nemwood@gmail.be
                </Link>
              </li>
            </ul>

            {/* Social Section */}
            <ul className="social flex-1">
              <h4 className="mb-4 font-semibold">SUIVEZ-NOUS</h4>
              <li>
                <Link
                  href="https://instagram.com"
                  className="text-xl transition-opacity hover:opacity-70 md:text-lg"
                  target="_blank"
                >
                  Instagram
                </Link>
              </li>
              <li>
                <Link
                  href="https://facebook.com"
                  className="text-xl transition-opacity hover:opacity-70 md:text-lg"
                  target="_blank"
                >
                  Facebook
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Section */}
      <div className="mt-8 border-t border-gray-300 pt-6 md:border-none md:pt-4">
        <div className="flex flex-col space-y-4 text-sm text-gray-600 md:flex-row md:items-end md:justify-between md:space-y-0">
          <div className="flex flex-col space-y-3 md:flex-row md:items-end md:space-y-0 md:space-x-6">
            <div className="flex flex-col space-y-1">
              <span>© 2025 Tous droits réservés</span>
            </div>
          </div>

          {/* Legal Links */}
          <div className="invisible flex flex-col space-y-2 text-left md:visible md:flex-row md:space-y-0 md:space-x-6 md:text-right">
            <Link
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
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
