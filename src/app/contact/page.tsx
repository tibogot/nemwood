import { Metadata } from "next";
import AnimatedText from "@/components/AnimatedText3";
import Image from "next/image";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import ParallaxImage from "@/components/ParallaxImage";

export const metadata: Metadata = {
  title: "Contact Nemwood | Menuisier Artisan en Belgique - Devis Gratuit",
  description:
    "Contactez Nemwood pour vos projets de menuiserie sur mesure en Belgique. Spécialiste en tables, escaliers, garde-robes et cuisines. Devis gratuit et conseil personnalisé.",
  keywords:
    "contact menuisier belgique, devis menuiserie, artisan bois sur mesure, consultation menuiserie, nemwood contact",
  openGraph: {
    title: "Contact Nemwood | Menuisier Artisan en Belgique",
    description:
      "Contactez notre équipe d'artisans menuisiers pour discuter de votre projet sur mesure. Devis gratuit et conseil personnalisé.",
    type: "website",
    locale: "fr_BE",
  },
  alternates: {
    canonical: "/contact",
  },
};

export default function Contact() {
  return (
    <div className="bg-secondary text-primary">
      {/* Hero Section */}
      <section className="px-4 py-40 md:px-8 md:py-64">
        <div className="mx-auto max-w-4xl text-center">
          <AnimatedText isHero delay={0.0} stagger={0.3}>
            <h1 className="mb-6 text-5xl md:text-7xl">Contactez-nous</h1>
            <p className="font-HelveticaNow mx-auto max-w-2xl text-lg">
              Chaque création commence par une conversation. Partagez-nous votre
              vision et découvrons ensemble comment donner vie à vos idées en
              bois.
            </p>
          </AnimatedText>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="px-4 pb-20 md:px-8 md:pb-40">
        <div className="">
          <div className="flex w-full flex-col gap-10 md:flex-row">
            {/* Left Side - Image and Info */}
            <div className="space-y-8 md:w-1/2">
              <div className="relative h-[400px] overflow-hidden rounded-sm md:h-[600px]">
                <Image
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  src="/images/stairs.webp"
                  alt="Atelier Nemwood - Artisan menuisier au travail"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  quality={95}
                  priority
                />
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div className="text-primary md:w-1/2">
              <div className=" ">
                {/* <h2 className="font-ITCGaramondN mb-6 text-4xl md:text-5xl">
                  Demande de devis
                </h2>
                <p className="font-HelveticaNow text-primary/80 mb-8">
                  Remplissez ce formulaire et nous vous recontacterons sous 24h
                  pour discuter de votre projet.
                </p> */}

                <form className="space-y-6">
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        required
                        className="bg-secondary focus:border-primary/40 border-primary/20 w-full border-0 border-b px-0 py-3 transition-colors focus:border-b-2 focus:outline-none"
                        placeholder="Votre prénom"
                      />
                    </div>

                    <div>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        required
                        className="bg-secondary focus:border-primary/40 border-primary/20 w-full border-0 border-b px-0 py-3 transition-colors focus:border-b-2 focus:outline-none"
                        placeholder="Votre nom"
                      />
                    </div>
                  </div>

                  <div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="bg-secondary focus:border-primary/40 border-primary/20 w-full border-0 border-b px-0 py-3 transition-colors focus:border-b-2 focus:outline-none"
                      placeholder="votre@email.com"
                    />
                  </div>

                  <div>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="bg-secondary focus:border-primary/40 border-primary/20 w-full border-0 border-b px-0 py-3 transition-colors focus:border-b-2 focus:outline-none"
                      placeholder="+32 123 45 67 89"
                    />
                  </div>

                  <div>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      className="bg-secondary focus:border-primary/40 border-primary/20 w-full resize-none border-0 border-b px-0 py-3 transition-colors focus:border-b-2 focus:outline-none"
                      placeholder="Décrivez votre projet en détail : dimensions, style souhaité, contraintes particulières, délais..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="border-primary text-primary font-HelveticaNow hover:bg-primary hover:text-secondary cursor-pointer border px-8 py-2 font-medium transition-colors duration-300"
                  >
                    Envoyer ma demande
                  </button>

                  <p className="font-HelveticaNow text-primary/60 text-left text-sm">
                    En soumettant ce formulaire, vous acceptez d'être contacté
                    par notre équipe concernant votre projet.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="px-4 md:px-8">
        <p className="font-HelveticaNow text-primary max-w-xl text-lg">
          Oyom has been shaped by kindred spirits, a community of sorts, all
          seekers themselves, with a deep desire to create and experience a
          healthier world: physically, emotionally, spiritually. It is within
          this small corner of the world that Oyom exists as the crowned jewel
          of Kaiya,
        </p>
      </section>
      <section className="text-primary w-full px-4 py-20 md:px-8 md:py-60">
        <div className="text-center">
          <h2 className="font-ITCGaramondN text-4xl md:text-6xl lg:text-9xl">
            Info@nemwood.com
          </h2>
          <h2 className="font-ITCGaramondN mt-4 text-4xl md:text-6xl lg:text-9xl">
            0474 65 74 97
          </h2>
        </div>
      </section>

      {/* Full Width Image Section with Parallax */}
      <ParallaxImage
        src="/images/nemohero.webp"
        alt="Nemwood artisan woodworking"
        speed={1.5}
      />
    </div>
  );
}
