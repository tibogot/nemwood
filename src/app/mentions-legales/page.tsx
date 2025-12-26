import type { Metadata } from "next";
import { generateMetadata } from "@/app/metadata";
import BreadcrumbsSchema from "@/components/BreadcrumbsSchema";
import AnimatedText from "@/components/AnimatedText3";
import TableOfContents from "./TableOfContents";

export const metadata: Metadata = generateMetadata(
  "Mentions légales | Nemwood",
  "Mentions légales de Nemwood - Informations sur l'entreprise et les données légales.",
  "/images/nem1.png",
  "https://www.nemwood.be/mentions-legales",
);

export default function MentionsLegales() {
  return (
    <>
      <BreadcrumbsSchema
        items={[
          { name: "Accueil", url: "/" },
          { name: "Mentions légales", url: "/mentions-legales" },
        ]}
      />
      <main className="text-primary bg-secondary px-4 md:px-8">
        <section className="border-primary mx-auto border-b py-40 text-center md:py-64">
          <AnimatedText isHero delay={0.0} stagger={0.3}>
            <h1 className="font-ITCGaramondN mb-6 text-6xl md:text-8xl">
              Mentions légales
            </h1>
          </AnimatedText>
        </section>
        <section className="mx-auto py-20 md:py-40">
          {/* Two column layout: TOC on left, content on right */}
          <div className="flex flex-col gap-12 md:flex-row md:gap-16">
            {/* Table of Contents - Left side on desktop, top on mobile */}
            <TableOfContents />

            {/* Content - Right side on desktop */}
            <div className="font-HelveticaNow min-w-0 flex-1 space-y-8 text-base leading-relaxed md:text-lg">
              <section id="propriete" className="scroll-mt-20 space-y-4">
                <h2 className="font-HelveticaNow text-3xl md:text-4xl">
                  Propriété intellectuelle
                </h2>
                <div className="space-y-4">
                  <p>
                    L'ensemble du contenu présent sur ce site (textes, images,
                    photographies, logos, vidéos, graphismes, mise en page,
                    etc.) est la propriété exclusive de NEMWOOD, sauf mention
                    contraire explicite.
                  </p>
                  <p>
                    Toute reproduction, représentation, modification,
                    publication, adaptation de tout ou partie des éléments du
                    site, quel que soit le moyen ou le procédé utilisé, est
                    strictement interdite sans l'autorisation écrite préalable
                    de NEMWOOD.
                  </p>
                  <p>
                    Toute exploitation non autorisée du site ou de l'un
                    quelconque des éléments qu'il contient sera considérée comme
                    constitutive d'une contrefaçon et poursuivie conformément
                    aux dispositions des articles L.335-2 et suivants du Code de
                    Propriété Intellectuelle belge.
                  </p>
                  <p>
                    Les marques, logos, signes ainsi que tous les contenus du
                    site (textes, images, son…) font l'objet d'une protection
                    par le Code de la propriété intellectuelle et plus
                    particulièrement par le droit d'auteur.
                  </p>
                </div>
              </section>

              <section id="responsabilite" className="scroll-mt-20 space-y-4">
                <h2 className="font-HelveticaNow text-3xl md:text-4xl">
                  Limitation de responsabilité
                </h2>
                <div className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="font-HelveticaNow text-xl font-semibold">
                      Informations générales
                    </h3>
                    <p>
                      Les informations contenues sur ce site sont aussi précises
                      que possible. Toutefois, NEMWOOD ne pourra être tenue
                      responsable des omissions, des inexactitudes et des
                      carences dans la mise à jour, qu'elles soient de son fait
                      ou du fait des tiers partenaires qui lui fournissent ces
                      informations.
                    </p>
                    <p>
                      Tous les informations indiquées sur le site nemwood.be
                      sont données à titre indicatif et sont susceptibles
                      d'évoluer. Par ailleurs, les renseignements figurant sur
                      le site nemwood.be ne sont pas exhaustifs. Ils sont donnés
                      sous réserve de modifications ayant été apportées depuis
                      leur mise en ligne.
                    </p>
                  </div>
                  <div className="space-y-4">
                    <h3 className="font-HelveticaNow text-xl font-semibold">
                      Disponibilité du site
                    </h3>
                    <p>
                      NEMWOOD met en œuvre tous les moyens dont elle dispose
                      pour assurer une information fiable et une mise à jour
                      régulière de son site internet. Toutefois, des erreurs ou
                      omissions peuvent survenir. L'internaute devra donc
                      s'assurer de l'exactitude des informations et signaler
                      toute modification du site qu'il jugerait utile.
                    </p>
                    <p>
                      NEMWOOD n'est en aucun cas responsable de l'utilisation
                      faite de ces informations, et de tout préjudice direct ou
                      indirect pouvant en découler.
                    </p>
                    <p>
                      Le site nemwood.be peut être interrompu ou suspendu à tout
                      moment, notamment pour des raisons de maintenance, de mise
                      à jour ou pour toute autre raison (techniques ou
                      éditoriales) sans que cette interruption n'ouvre droit à
                      aucune obligation ni indemnisation.
                    </p>
                  </div>
                </div>
              </section>

              <section id="liens" className="scroll-mt-20 space-y-4">
                <h2 className="font-HelveticaNow text-3xl md:text-4xl">
                  Liens hypertextes
                </h2>
                <div className="space-y-4">
                  <p>
                    Le site nemwood.be peut contenir des liens hypertextes vers
                    d'autres sites présents sur le réseau Internet. Les liens
                    vers ces autres ressources vous font quitter le site
                    nemwood.be.
                  </p>
                  <p>
                    Il est possible de créer un lien vers la page de
                    présentation de ce site sans autorisation expresse de
                    NEMWOOD. Aucune autorisation ou demande d'information
                    préalable ne peut être exigée par l'éditeur à l'égard d'un
                    site qui souhaite établir un lien vers le site de l'éditeur.
                    Il convient toutefois d'afficher ce site dans une nouvelle
                    fenêtre du navigateur.
                  </p>
                  <p>
                    Cependant, NEMWOOD se réserve le droit de demander la
                    suppression d'un lien qu'elle estime non conforme à l'objet
                    du site nemwood.be.
                  </p>
                </div>
              </section>

              <section id="donnees" className="scroll-mt-20 space-y-4">
                <h2 className="font-HelveticaNow text-3xl md:text-4xl">
                  Protection des données personnelles
                </h2>
                <p>
                  Pour toute information concernant la collecte et le traitement
                  de vos données personnelles, veuillez consulter notre{" "}
                  <a
                    href="/politique-confidentialite"
                    className="underline transition-opacity hover:opacity-70"
                  >
                    Politique de Confidentialité
                  </a>
                  .
                </p>
              </section>

              <section id="cookies" className="scroll-mt-20 space-y-4">
                <h2 className="font-HelveticaNow text-3xl md:text-4xl">
                  Cookies
                </h2>
                <p>
                  Pour plus d'informations sur l'utilisation des cookies sur ce
                  site, veuillez consulter notre{" "}
                  <a
                    href="/politique-cookies"
                    className="underline transition-opacity hover:opacity-70"
                  >
                    Politique de Cookies
                  </a>
                  .
                </p>
              </section>

              <section id="juridiction" className="scroll-mt-20 space-y-4">
                <h2 className="font-HelveticaNow text-3xl md:text-4xl">
                  Droit applicable et juridiction compétente
                </h2>
                <div className="space-y-4">
                  <p>
                    Les présentes mentions légales sont régies par le droit
                    belge.
                  </p>
                  <p>
                    Tout litige en relation avec l'utilisation du site
                    nemwood.be est soumis au droit belge. En cas de litige et à
                    défaut d'accord amiable, le litige sera porté devant les
                    tribunaux compétents de Bruxelles, Belgique.
                  </p>
                </div>
              </section>

              <section id="editeur" className="scroll-mt-20 space-y-4">
                <h2 className="font-HelveticaNow text-3xl md:text-4xl">
                  Éditeur du site
                </h2>
                <div className="space-y-2">
                  <p className="font-semibold">NEMWOOD</p>
                  <p>
                    Addresse: Nering 34, 1620 Beersel, Vlaams-Brabant, Belgique
                  </p>
                  <p>Email: contact@nemwood.be</p>
                  <p>Tel : +32 489 33 05 44</p>
                  <p>Numéro d'entreprise : 0670.534.175</p>
                  <p>Numéro de TVA : BE 0670.534.175</p>
                  <p>Responsable de la publication : Nemo De Kuijper</p>
                </div>
              </section>

              <section id="hebergement" className="scroll-mt-20 space-y-4">
                <h2 className="font-HelveticaNow text-3xl md:text-4xl">
                  Hébergement du site
                </h2>
                <div className="space-y-2">
                  <p className="font-semibold">OVH SAS</p>
                  <p>
                    Siège social : 2 rue Kellermann - 59100 Roubaix - France
                  </p>
                  <p>RCS Lille Métropole : 424 761 419 00045</p>
                  <p>N° TVA intracommunautaire : FR 22 424 761 419</p>
                  <p>Téléphone : +33 (0)8 99 70 17 61</p>
                  <p>
                    Site web :{" "}
                    <a
                      href="https://www.ovhcloud.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline transition-opacity hover:opacity-70"
                    >
                      www.ovhcloud.com
                    </a>
                  </p>
                </div>
              </section>

              <section id="contact" className="scroll-mt-20 space-y-4">
                <h2 className="font-HelveticaNow text-3xl md:text-4xl">
                  Contact
                </h2>
                <div className="space-y-2">
                  <p>Email: contact@nemwood.be</p>
                  <p>
                    Addresse: Nering 34, 1620 Beersel, Vlaams-Brabant, Belgique
                  </p>
                  <p>Tel : +32 489 33 05 44</p>
                </div>
              </section>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
