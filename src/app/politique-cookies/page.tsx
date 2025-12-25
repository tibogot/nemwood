import type { Metadata } from "next";
import { generateMetadata } from "@/app/metadata";
import BreadcrumbsSchema from "@/components/BreadcrumbsSchema";
import AnimatedText from "@/components/AnimatedText3";

export const metadata: Metadata = generateMetadata(
  "Politique des cookies | Nemwood",
  "Politique des cookies de Nemwood - Informations sur l'utilisation des cookies sur notre site web.",
  "/images/nem1.png",
  "https://www.nemwood.be/politique-cookies",
);

export default function PolitiqueCookies() {
  return (
    <>
      <BreadcrumbsSchema
        items={[
          { name: "Accueil", url: "/" },
          { name: "Politique des cookies", url: "/politique-cookies" },
        ]}
      />
      <div className="bg-secondary text-primary">
        <section className="px-4 py-20 md:px-8 md:py-40">
          <div className="mx-auto">
            <AnimatedText isHero delay={0.0} stagger={0.3}>
              <h1 className="font-ITCGaramondN mb-8 text-5xl md:text-7xl">
                Politique des cookies
              </h1>
            </AnimatedText>
            <div className="font-HelveticaNow space-y-8 text-base leading-relaxed md:text-lg">
              <div className="text-primary/70 text-sm">
                Dernière mise à jour : 26 décembre 2025
              </div>

              <section className="space-y-4">
                <h2 className="font-HelveticaNow text-3xl md:text-4xl">
                  Introduction
                </h2>
                <div className="space-y-4">
                  <p>
                    Le site internet nemwood.be (ci-après "le Site") utilise des
                    cookies et autres technologies similaires pour améliorer votre
                    expérience de navigation, analyser l'utilisation du Site et vous
                    proposer des contenus adaptés.
                  </p>
                  <p>
                    Cette politique de cookies vous informe sur l'utilisation des
                    cookies sur notre Site, conformément au Règlement Général sur la
                    Protection des Données (RGPD) et à la législation belge en
                    vigueur.
                  </p>
                  <p>
                    En poursuivant votre navigation sur notre Site, vous acceptez
                    l'utilisation de cookies conformément à la présente politique.
                  </p>
                </div>
              </section>

              <section className="space-y-4">
                <h2 className="font-HelveticaNow text-3xl md:text-4xl">
                  Qu'est-ce qu'un cookie ?
                </h2>
                <div className="space-y-4">
                  <p>
                    Un cookie est un petit fichier texte déposé sur votre terminal
                    (ordinateur, tablette, smartphone) lors de la visite d'un site
                    internet.
                  </p>
                  <p>Les cookies permettent :</p>
                  <ul className="list-disc space-y-2 pl-6">
                    <li>
                      De reconnaître votre navigateur lors de vos prochaines visites
                    </li>
                    <li>De mémoriser vos préférences</li>
                    <li>D'améliorer votre expérience de navigation</li>
                    <li>D'analyser l'utilisation du Site</li>
                  </ul>
                  <p>
                    Les cookies ont une durée de vie limitée. Ils peuvent être
                    conservés pendant la durée de votre session de navigation
                    (cookies de session) ou pour une période plus longue (cookies
                    persistants).
                  </p>
                </div>
              </section>

              <section className="space-y-4">
                <h2 className="font-HelveticaNow text-3xl md:text-4xl">
                  Types de cookies utilisés sur nemwood.be
                </h2>
                <div className="space-y-8">
                  <div className="space-y-4">
                    <h3 className="font-semibold text-xl">
                      1. Cookies strictement nécessaires
                    </h3>
                    <p>
                      Ces cookies sont <strong>indispensables</strong> au
                      fonctionnement du Site. Ils vous permettent de naviguer sur le
                      Site et d'utiliser ses fonctionnalités essentielles.
                    </p>
                    <div className="space-y-2">
                      <p className="font-semibold">Exemples :</p>
                      <ul className="list-disc space-y-2 pl-6">
                        <li>Cookies de session pour maintenir votre connexion</li>
                        <li>Cookies de sécurité pour protéger vos données</li>
                        <li>Cookies de préférences linguistiques</li>
                      </ul>
                    </div>
                    <p>
                      <strong>Durée de conservation :</strong> Session ou jusqu'à 12
                      mois
                    </p>
                    <p>
                      <strong>Base légale :</strong> Ces cookies sont nécessaires à
                      l'exécution du service demandé et ne nécessitent pas votre
                      consentement.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="font-semibold text-xl">
                      2. Cookies de performance et d'analyse
                    </h3>
                    <p>
                      Ces cookies nous permettent de comprendre comment les visiteurs
                      utilisent notre Site en collectant des informations anonymes sur
                      :
                    </p>
                    <ul className="list-disc space-y-2 pl-6">
                      <li>Les pages visitées</li>
                      <li>Le temps passé sur chaque page</li>
                      <li>Les liens cliqués</li>
                      <li>Les messages d'erreur rencontrés</li>
                    </ul>
                    <div className="space-y-2">
                      <p className="font-semibold">Outils utilisés :</p>
                      <ul className="list-disc space-y-2 pl-6">
                        <li>
                          Google Analytics (ou autre outil d'analyse le cas échéant)
                        </li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <p className="font-semibold">Informations collectées :</p>
                      <ul className="list-disc space-y-2 pl-6">
                        <li>Pages consultées</li>
                        <li>Durée de visite</li>
                        <li>Provenance du trafic (site référent)</li>
                        <li>Type d'appareil et navigateur</li>
                        <li>Adresse IP anonymisée</li>
                      </ul>
                    </div>
                    <p>
                      <strong>Durée de conservation :</strong> Jusqu'à 13 mois
                    </p>
                    <p>
                      <strong>Base légale :</strong> Ces cookies nécessitent votre
                      consentement préalable.
                    </p>
                    <p>
                      <strong>Finalité :</strong> Améliorer les performances du Site,
                      comprendre les besoins des visiteurs, optimiser l'expérience
                      utilisateur.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="font-semibold text-xl">
                      3. Cookies de fonctionnalité
                    </h3>
                    <p>
                      Ces cookies permettent au Site de mémoriser vos choix (comme
                      votre langue ou votre région) et de fournir des fonctionnalités
                      améliorées et personnalisées.
                    </p>
                    <div className="space-y-2">
                      <p className="font-semibold">Exemples :</p>
                      <ul className="list-disc space-y-2 pl-6">
                        <li>Mémorisation de vos préférences de navigation</li>
                        <li>Personnalisation de l'affichage</li>
                        <li>
                          Mémorisation de vos choix concernant les cookies
                        </li>
                      </ul>
                    </div>
                    <p>
                      <strong>Durée de conservation :</strong> Jusqu'à 12 mois
                    </p>
                    <p>
                      <strong>Base légale :</strong> Ces cookies peuvent nécessiter
                      votre consentement selon leur finalité.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="font-semibold text-xl">
                      4. Cookies de réseaux sociaux
                    </h3>
                    <p>
                      Si vous partagez du contenu de notre Site sur les réseaux
                      sociaux (Facebook, Instagram), ces plateformes peuvent déposer
                      des cookies sur votre terminal.
                    </p>
                    <div className="space-y-2">
                      <p className="font-semibold">Réseaux sociaux concernés :</p>
                      <ul className="list-disc space-y-2 pl-6">
                        <li>Facebook</li>
                        <li>Instagram</li>
                      </ul>
                    </div>
                    <p>
                      Ces cookies sont soumis à la politique de confidentialité de
                      chaque réseau social. Nous vous invitons à consulter leurs
                      politiques respectives pour en savoir plus sur l'utilisation
                      qu'ils font de vos données.
                    </p>
                    <p>
                      <strong>Durée de conservation :</strong> Variable selon les
                      réseaux sociaux
                    </p>
                    <p>
                      <strong>Base légale :</strong> Ces cookies nécessitent votre
                      consentement.
                    </p>
                  </div>
                </div>
              </section>

              <section className="space-y-4">
                <h2 className="font-HelveticaNow text-3xl md:text-4xl">
                  Gestion de vos préférences cookies
                </h2>
                <div className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="font-semibold text-xl">
                      Acceptation ou refus des cookies
                    </h3>
                    <p>
                      Lors de votre première visite sur notre Site, une bannière
                      d'information vous permet de :
                    </p>
                    <ul className="list-disc space-y-2 pl-6">
                      <li>
                        <strong>Accepter tous les cookies</strong>
                      </li>
                      <li>
                        <strong>Refuser les cookies non essentiels</strong>
                      </li>
                      <li>
                        <strong>Personnaliser vos choix</strong> par catégorie de
                        cookies
                      </li>
                    </ul>
                    <p>
                      Vous pouvez à tout moment modifier vos préférences en cliquant
                      sur le lien "Gérer mes cookies" disponible en bas de chaque page.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="font-semibold text-xl">
                      Configuration de votre navigateur
                    </h3>
                    <p>Vous pouvez également configurer votre navigateur pour :</p>
                    <ul className="list-disc space-y-2 pl-6">
                      <li>Accepter ou refuser systématiquement les cookies</li>
                      <li>Être informé avant l'enregistrement d'un cookie</li>
                      <li>Supprimer les cookies déjà enregistrés</li>
                    </ul>
                    <p className="font-semibold">Attention :</p>
                    <p>
                      Le refus ou la suppression de certains cookies peut affecter le
                      bon fonctionnement du Site et limiter l'accès à certaines
                      fonctionnalités.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="font-semibold text-xl">
                      Instructions par navigateur
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <p className="font-semibold">Google Chrome</p>
                        <ol className="list-decimal space-y-1 pl-6">
                          <li>Cliquez sur le menu Chrome (⋮) &gt; Paramètres</li>
                          <li>Cliquez sur "Confidentialité et sécurité"</li>
                          <li>Cliquez sur "Cookies et autres données de sites"</li>
                          <li>Choisissez vos préférences</li>
                        </ol>
                      </div>
                      <div>
                        <p className="font-semibold">Mozilla Firefox</p>
                        <ol className="list-decimal space-y-1 pl-6">
                          <li>Cliquez sur le menu Firefox (☰) &gt; Paramètres</li>
                          <li>Sélectionnez "Vie privée et sécurité"</li>
                          <li>
                            Dans la section "Cookies et données de sites", choisissez
                            vos préférences
                          </li>
                        </ol>
                      </div>
                      <div>
                        <p className="font-semibold">Safari (Mac)</p>
                        <ol className="list-decimal space-y-1 pl-6">
                          <li>Allez dans Safari &gt; Préférences</li>
                          <li>Cliquez sur l'onglet "Confidentialité"</li>
                          <li>Gérez vos paramètres de cookies</li>
                        </ol>
                      </div>
                      <div>
                        <p className="font-semibold">Microsoft Edge</p>
                        <ol className="list-decimal space-y-1 pl-6">
                          <li>Cliquez sur le menu Edge (⋯) &gt; Paramètres</li>
                          <li>
                            Cliquez sur "Cookies et autorisations de site"
                          </li>
                          <li>
                            Cliquez sur "Gérer et supprimer les cookies et les données
                            de site"
                          </li>
                          <li>Choisissez vos préférences</li>
                        </ol>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section className="space-y-4">
                <h2 className="font-HelveticaNow text-3xl md:text-4xl">
                  Cookies tiers et services externes
                </h2>
                <div className="space-y-6">
                  <p>
                    Notre Site peut intégrer des contenus provenant de services tiers
                    qui peuvent déposer leurs propres cookies.
                  </p>

                  <div className="space-y-4">
                    <h3 className="font-semibold text-xl">Google Analytics</h3>
                    <p>
                      Si nous utilisons Google Analytics, ce service dépose des cookies
                      pour analyser l'utilisation du Site.
                    </p>
                    <div className="space-y-2">
                      <p className="font-semibold">Informations collectées :</p>
                      <ul className="list-disc space-y-2 pl-6">
                        <li>Données de navigation anonymisées</li>
                        <li>Statistiques de fréquentation</li>
                        <li>Comportement des utilisateurs sur le Site</li>
                      </ul>
                    </div>
                    <p>
                      <strong>Finalité :</strong> Améliorer le contenu et l'ergonomie
                      du Site
                    </p>
                    <div>
                      <p className="font-semibold">Comment s'opposer :</p>
                      <p>
                        Vous pouvez installer le module complémentaire de navigateur
                        pour la désactivation de Google Analytics :{" "}
                        <a
                          href="https://tools.google.com/dlpage/gaoptout"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="transition-opacity hover:opacity-70 underline"
                        >
                          https://tools.google.com/dlpage/gaoptout
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="font-semibold text-xl">Réseaux sociaux</h3>
                    <p>
                      Les boutons de partage vers les réseaux sociaux peuvent
                      permettre aux réseaux sociaux concernés de vous identifier et de
                      suivre votre navigation sur notre Site si vous êtes connecté à
                      votre compte.
                    </p>
                    <p>
                      Nous n'avons aucun contrôle sur ces cookies tiers. Nous vous
                      invitons à consulter les politiques de confidentialité de ces
                      services :
                    </p>
                    <ul className="list-disc space-y-2 pl-6">
                      <li>
                        Facebook :{" "}
                        <a
                          href="https://www.facebook.com/privacy/policy/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="transition-opacity hover:opacity-70 underline"
                        >
                          https://www.facebook.com/privacy/policy/
                        </a>
                      </li>
                      <li>
                        Instagram :{" "}
                        <a
                          href="https://privacycenter.instagram.com/policy/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="transition-opacity hover:opacity-70 underline"
                        >
                          https://privacycenter.instagram.com/policy/
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="space-y-4">
                <h2 className="font-HelveticaNow text-3xl md:text-4xl">
                  Durée de conservation des cookies
                </h2>
                <p>
                  La durée de conservation des cookies varie selon leur type et leur
                  finalité :
                </p>
                <div className="overflow-x-auto">
                  <table className="min-w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border border-gray-300 px-4 py-2 text-left">
                          Type de cookie
                        </th>
                        <th className="border border-gray-300 px-4 py-2 text-left">
                          Durée maximale
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">
                          Cookies strictement nécessaires
                        </td>
                        <td className="border border-gray-300 px-4 py-2">12 mois</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">
                          Cookies de performance
                        </td>
                        <td className="border border-gray-300 px-4 py-2">13 mois</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">
                          Cookies de fonctionnalité
                        </td>
                        <td className="border border-gray-300 px-4 py-2">12 mois</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">
                          Cookies de réseaux sociaux
                        </td>
                        <td className="border border-gray-300 px-4 py-2">Variable</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              <section className="space-y-4">
                <h2 className="font-HelveticaNow text-3xl md:text-4xl">
                  Protection de vos données
                </h2>
                <p>
                  Les données collectées via les cookies font l'objet de mesures de
                  sécurité techniques et organisationnelles appropriées pour prévenir
                  :
                </p>
                <ul className="list-disc space-y-2 pl-6">
                  <li>La perte de données</li>
                  <li>L'utilisation abusive</li>
                  <li>L'accès non autorisé</li>
                  <li>La divulgation</li>
                  <li>La modification</li>
                </ul>
                <p>
                  Pour plus d'informations sur la protection de vos données
                  personnelles, consultez notre{" "}
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
                <h2 className="font-HelveticaNow text-3xl md:text-4xl">
                  Vos droits
                </h2>
                <p>
                  Conformément au RGPD, vous disposez des droits suivants concernant
                  les données collectées via les cookies :
                </p>
                <ul className="list-disc space-y-2 pl-6">
                  <li>
                    <strong>Droit d'accès</strong> : obtenir la confirmation que des
                    données vous concernant sont traitées
                  </li>
                  <li>
                    <strong>Droit de rectification</strong> : corriger des données
                    inexactes
                  </li>
                  <li>
                    <strong>Droit à l'effacement</strong> : demander la suppression de
                    vos données
                  </li>
                  <li>
                    <strong>Droit d'opposition</strong> : vous opposer au traitement
                    de vos données
                  </li>
                  <li>
                    <strong>Droit à la limitation</strong> : limiter le traitement de
                    vos données
                  </li>
                  <li>
                    <strong>Droit de retirer votre consentement</strong> : à tout
                    moment, sans affecter la licéité du traitement effectué avant le
                    retrait
                  </li>
                </ul>
                <p>Pour exercer vos droits, contactez-nous :</p>
                <div className="space-y-2">
                  <p>
                    <strong>Email :</strong> contact@nemwood.be
                  </p>
                  <div>
                    <p className="font-semibold">Courrier :</p>
                    <p className="ml-4">NEMWOOD - Protection des Données</p>
                    <p className="ml-4">Nering 34</p>
                    <p className="ml-4">1620 Beersel</p>
                    <p className="ml-4">Belgique</p>
                  </div>
                </div>
              </section>

              <section className="space-y-4">
                <h2 className="font-HelveticaNow text-3xl md:text-4xl">
                  Cookies et mineurs
                </h2>
                <p>
                  Notre Site n'est pas destiné aux personnes âgées de moins de 18 ans.
                  Nous ne collectons pas sciemment de données personnelles concernant
                  des mineurs via des cookies.
                </p>
                <p>
                  Si vous êtes parent ou tuteur légal et que vous pensez que votre
                  enfant nous a fourni des données, veuillez nous contacter.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="font-HelveticaNow text-3xl md:text-4xl">
                  Modifications de la politique de cookies
                </h2>
                <div className="space-y-4">
                  <p>
                    NEMWOOD se réserve le droit de modifier cette politique de cookies
                    à tout moment pour refléter :
                  </p>
                  <ul className="list-disc space-y-2 pl-6">
                    <li>Les changements dans notre utilisation des cookies</li>
                    <li>L'évolution de la législation</li>
                    <li>Les mises à jour de nos outils d'analyse</li>
                  </ul>
                  <p>
                    Toute modification sera publiée sur cette page avec une nouvelle
                    date de mise à jour.
                  </p>
                  <p>
                    Nous vous encourageons à consulter régulièrement cette page pour
                    rester informé de notre utilisation des cookies.
                  </p>
                </div>
              </section>

              <section className="space-y-4">
                <h2 className="font-HelveticaNow text-3xl md:text-4xl">Contact</h2>
                <p>
                  Pour toute question concernant notre utilisation des cookies :
                </p>
                <div className="space-y-2">
                  <p className="font-semibold">NEMWOOD</p>
                  <p>Nering 34</p>
                  <p>1620 Beersel</p>
                  <p>Belgique</p>
                  <p>Email : contact@nemwood.be</p>
                  <p>Téléphone : +32 489 33 05 44</p>
                </div>
              </section>

              <section className="space-y-4">
                <h2 className="font-HelveticaNow text-3xl md:text-4xl">
                  Liens utiles
                </h2>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="/politique-confidentialite"
                      className="transition-opacity hover:opacity-70 underline"
                    >
                      Politique de Confidentialité
                    </a>
                  </li>
                  <li>
                    <a
                      href="/mentions-legales"
                      className="transition-opacity hover:opacity-70 underline"
                    >
                      Mentions Légales
                    </a>
                  </li>
                  <li>
                    <a
                      href="/cgv"
                      className="transition-opacity hover:opacity-70 underline"
                    >
                      Conditions Générales de Vente
                    </a>
                  </li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="font-HelveticaNow text-3xl md:text-4xl">
                  Autorité de contrôle
                </h2>
                <p>
                  Si vous estimez que vos droits ne sont pas respectés, vous pouvez
                  introduire une réclamation auprès de :
                </p>
                <div className="space-y-2">
                  <p className="font-semibold">
                    Autorité de Protection des Données (APD)
                  </p>
                  <p>Rue de la Presse 35</p>
                  <p>1000 Bruxelles</p>
                  <p>Belgique</p>
                  <p>Email : contact@apd-gba.be</p>
                  <p>Téléphone : +32 (0)2 274 48 00</p>
                  <p>
                    Site web :{" "}
                    <a
                      href="https://www.autoriteprotectiondonnees.be"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-opacity hover:opacity-70 underline"
                    >
                      www.autoriteprotectiondonnees.be
                    </a>
                  </p>
                </div>
              </section>

              <p className="text-primary/70 italic text-sm mt-6">
                En utilisant notre Site, vous reconnaissez avoir lu et compris cette
                politique de cookies et vous acceptez l'utilisation de cookies
                conformément aux présentes.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

