import type { Metadata } from "next";
import { generateMetadata } from "@/app/metadata";
import BreadcrumbsSchema from "@/components/BreadcrumbsSchema";
import AnimatedText from "@/components/AnimatedText3";

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
      <div className="bg-secondary text-primary">
        <section className="px-4 py-20 md:px-8 md:py-40">
          <div className="mx-auto max-w-4xl">
            <AnimatedText isHero delay={0.0} stagger={0.3}>
              <h1 className="font-ITCGaramondN mb-8 text-5xl md:text-7xl">
                Mentions légales
              </h1>
            </AnimatedText>
            <div className="font-HelveticaNow space-y-8 text-base leading-relaxed md:text-lg">
              <div className="text-primary/70 text-sm">
                Dernière mise à jour : 26 décembre 2025
              </div>

              <section className="space-y-4">
                <h2 className="font-ITCGaramondN text-3xl md:text-4xl">
                  Éditeur du site
                </h2>
                <div className="space-y-2">
                  <p className="font-semibold">NEMWOOD</p>
                  <p>Nering 34</p>
                  <p>1620 Beersel</p>
                  <p>Vlaams-Brabant, Belgique</p>
                  <p>Email : contact@nemwood.be</p>
                  <p>Téléphone : +32 489 33 05 44</p>
                  <p>Numéro d'entreprise : 0670.534.175</p>
                  <p>Numéro de TVA : BE 0670.534.175</p>
                  <p>Responsable de la publication : Nemo De Kuijper</p>
                </div>
              </section>

              <section className="space-y-4">
                <h2 className="font-ITCGaramondN text-3xl md:text-4xl">
                  Hébergement du site
                </h2>
                <div className="space-y-2">
                  <p className="font-semibold">OVH SAS</p>
                  <p>Siège social : 2 rue Kellermann - 59100 Roubaix - France</p>
                  <p>RCS Lille Métropole : 424 761 419 00045</p>
                  <p>N° TVA intracommunautaire : FR 22 424 761 419</p>
                  <p>Téléphone : +33 (0)8 99 70 17 61</p>
                  <p>
                    Site web :{" "}
                    <a
                      href="https://www.ovhcloud.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-opacity hover:opacity-70 underline"
                    >
                      www.ovhcloud.com
                    </a>
                  </p>
                </div>
              </section>

              <section className="space-y-4">
                <h2 className="font-ITCGaramondN text-3xl md:text-4xl">
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
                    Toute reproduction, représentation, modification, publication,
                    adaptation de tout ou partie des éléments du site, quel que
                    soit le moyen ou le procédé utilisé, est strictement interdite
                    sans l'autorisation écrite préalable de NEMWOOD.
                  </p>
                  <p>
                    Toute exploitation non autorisée du site ou de l'un quelconque
                    des éléments qu'il contient sera considérée comme constitutive
                    d'une contrefaçon et poursuivie conformément aux dispositions
                    des articles L.335-2 et suivants du Code de Propriété
                    Intellectuelle belge.
                  </p>
                  <p>
                    Les marques, logos, signes ainsi que tous les contenus du site
                    (textes, images, son…) font l'objet d'une protection par le
                    Code de la propriété intellectuelle et plus particulièrement
                    par le droit d'auteur.
                  </p>
                </div>
              </section>

              <section className="space-y-4">
                <h2 className="font-ITCGaramondN text-3xl md:text-4xl">
                  Limitation de responsabilité
                </h2>
                <div className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="font-semibold text-xl">Informations générales</h3>
                    <p>
                      Les informations contenues sur ce site sont aussi précises
                      que possible. Toutefois, NEMWOOD ne pourra être tenue
                      responsable des omissions, des inexactitudes et des carences
                      dans la mise à jour, qu'elles soient de son fait ou du fait
                      des tiers partenaires qui lui fournissent ces informations.
                    </p>
                    <p>
                      Tous les informations indiquées sur le site nemwood.be sont
                      données à titre indicatif et sont susceptibles d'évoluer. Par
                      ailleurs, les renseignements figurant sur le site nemwood.be
                      ne sont pas exhaustifs. Ils sont donnés sous réserve de
                      modifications ayant été apportées depuis leur mise en ligne.
                    </p>
                  </div>
                  <div className="space-y-4">
                    <h3 className="font-semibold text-xl">
                      Disponibilité du site
                    </h3>
                    <p>
                      NEMWOOD met en œuvre tous les moyens dont elle dispose pour
                      assurer une information fiable et une mise à jour régulière
                      de son site internet. Toutefois, des erreurs ou omissions
                      peuvent survenir. L'internaute devra donc s'assurer de
                      l'exactitude des informations et signaler toute modification
                      du site qu'il jugerait utile.
                    </p>
                    <p>
                      NEMWOOD n'est en aucun cas responsable de l'utilisation faite
                      de ces informations, et de tout préjudice direct ou indirect
                      pouvant en découler.
                    </p>
                    <p>
                      Le site nemwood.be peut être interrompu ou suspendu à tout
                      moment, notamment pour des raisons de maintenance, de mise à
                      jour ou pour toute autre raison (techniques ou éditoriales)
                      sans que cette interruption n'ouvre droit à aucune obligation
                      ni indemnisation.
                    </p>
                  </div>
                </div>
              </section>

              <section className="space-y-4">
                <h2 className="font-ITCGaramondN text-3xl md:text-4xl">
                  Liens hypertextes
                </h2>
                <div className="space-y-4">
                  <p>
                    Le site nemwood.be peut contenir des liens hypertextes vers
                    d'autres sites présents sur le réseau Internet. Les liens vers
                    ces autres ressources vous font quitter le site nemwood.be.
                  </p>
                  <p>
                    Il est possible de créer un lien vers la page de présentation
                    de ce site sans autorisation expresse de NEMWOOD. Aucune
                    autorisation ou demande d'information préalable ne peut être
                    exigée par l'éditeur à l'égard d'un site qui souhaite établir
                    un lien vers le site de l'éditeur. Il convient toutefois
                    d'afficher ce site dans une nouvelle fenêtre du navigateur.
                  </p>
                  <p>
                    Cependant, NEMWOOD se réserve le droit de demander la
                    suppression d'un lien qu'elle estime non conforme à l'objet du
                    site nemwood.be.
                  </p>
                </div>
              </section>

              <section className="space-y-4">
                <h2 className="font-ITCGaramondN text-3xl md:text-4xl">
                  Protection des données personnelles
                </h2>
                <p>
                  Pour toute information concernant la collecte et le traitement de
                  vos données personnelles, veuillez consulter notre{" "}
                  <a
                    href="/politique-confidentialite"
                    className="transition-opacity hover:opacity-70 underline"
                  >
                    Politique de Confidentialité
                  </a>
                  .
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="font-ITCGaramondN text-3xl md:text-4xl">
                  Cookies
                </h2>
                <p>
                  Pour plus d'informations sur l'utilisation des cookies sur ce
                  site, veuillez consulter notre{" "}
                  <a
                    href="/politique-cookies"
                    className="transition-opacity hover:opacity-70 underline"
                  >
                    Politique de Cookies
                  </a>
                  .
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="font-ITCGaramondN text-3xl md:text-4xl">
                  Droit applicable et juridiction compétente
                </h2>
                <div className="space-y-4">
                  <p>
                    Les présentes mentions légales sont régies par le droit belge.
                  </p>
                  <p>
                    Tout litige en relation avec l'utilisation du site nemwood.be
                    est soumis au droit belge. En cas de litige et à défaut
                    d'accord amiable, le litige sera porté devant les tribunaux
                    compétents de Bruxelles, Belgique.
                  </p>
                </div>
              </section>

              <section className="space-y-4">
                <h2 className="font-ITCGaramondN text-3xl md:text-4xl">
                  Contact
                </h2>
                <p>
                  Pour toute question relative aux présentes mentions légales ou
                  pour exercer vos droits, vous pouvez nous contacter :
                </p>
                <div className="space-y-2">
                  <p>Par email : contact@nemwood.be</p>
                  <p>Par téléphone : +32 489 33 05 44</p>
                  <div>
                    <p>Par courrier :</p>
                    <p className="ml-4">NEMWOOD</p>
                    <p className="ml-4">Nering 34</p>
                    <p className="ml-4">1620 Beersel</p>
                    <p className="ml-4">Belgique</p>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

