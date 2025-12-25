import type { Metadata } from "next";
import { generateMetadata } from "@/app/metadata";
import BreadcrumbsSchema from "@/components/BreadcrumbsSchema";
import AnimatedText from "@/components/AnimatedText3";

export const metadata: Metadata = generateMetadata(
  "Politique de confidentialité | Nemwood",
  "Politique de confidentialité de Nemwood - Comment nous collectons, utilisons et protégeons vos données personnelles.",
  "/images/nem1.png",
  "https://www.nemwood.be/politique-confidentialite",
);

export default function PolitiqueConfidentialite() {
  return (
    <>
      <BreadcrumbsSchema
        items={[
          { name: "Accueil", url: "/" },
          { name: "Politique de confidentialité", url: "/politique-confidentialite" },
        ]}
      />
      <div className="bg-secondary text-primary">
        <section className="px-4 py-20 md:px-8 md:py-40">
          <div className="mx-auto">
            <AnimatedText isHero delay={0.0} stagger={0.3}>
              <h1 className="font-ITCGaramondN mb-8 text-5xl md:text-7xl">
                Politique de confidentialité
              </h1>
            </AnimatedText>
            <div className="font-HelveticaNow space-y-8 text-base leading-relaxed md:text-lg">
              <div className="text-primary/70 text-sm">
                Dernière mise à jour : 26 décembre 2025
              </div>

              <section className="space-y-4">
                <h2 className="font-HelveticaNow text-3xl md:text-4xl">
                  Responsable du traitement des données
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
                </div>
              </section>

              <section className="space-y-4">
                <h2 className="font-HelveticaNow text-3xl md:text-4xl">
                  Introduction
                </h2>
                <div className="space-y-4">
                  <p>
                    NEMWOOD s'engage à protéger la vie privée de ses utilisateurs
                    et clients. Cette politique de confidentialité vous informe
                    sur la manière dont nous collectons, utilisons, stockons et
                    protégeons vos données personnelles conformément au Règlement
                    Général sur la Protection des Données (RGPD - Règlement UE
                    2016/679) et à la législation belge en vigueur.
                  </p>
                  <p>
                    En utilisant notre site internet ou en nous contactant, vous
                    acceptez les termes de cette politique de confidentialité.
                  </p>
                </div>
              </section>

              <section className="space-y-4">
                <h2 className="font-HelveticaNow text-3xl md:text-4xl">
                  Données personnelles collectées
                </h2>
                <p>
                  Dans le cadre de l'utilisation de notre site internet et de nos
                  services, nous sommes susceptibles de collecter les données
                  personnelles suivantes :
                </p>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <h3 className="font-semibold text-xl">
                      Via le formulaire de contact
                    </h3>
                    <ul className="list-disc space-y-2 pl-6">
                      <li>Nom et prénom</li>
                      <li>Adresse email</li>
                      <li>Numéro de téléphone</li>
                      <li>Message et informations relatives à votre projet</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-xl">
                      Lors d'une demande de devis ou commande
                    </h3>
                    <ul className="list-disc space-y-2 pl-6">
                      <li>Nom et prénom</li>
                      <li>Adresse email</li>
                      <li>Numéro de téléphone</li>
                      <li>Adresse postale complète</li>
                      <li>
                        Informations relatives à votre projet (type de meuble,
                        dimensions, matériaux souhaités, budget)
                      </li>
                      <li>
                        Toute autre information que vous choisissez de nous
                        communiquer
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-xl">
                      Données de navigation
                    </h3>
                    <ul className="list-disc space-y-2 pl-6">
                      <li>Adresse IP</li>
                      <li>Type de navigateur</li>
                      <li>Pages visitées sur notre site</li>
                      <li>Durée de visite</li>
                      <li>Provenance (site référent)</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="space-y-4">
                <h2 className="font-HelveticaNow text-3xl md:text-4xl">
                  Finalités de la collecte
                </h2>
                <p>
                  Vos données personnelles sont collectées et traitées pour les
                  finalités suivantes :
                </p>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-xl">
                      Gestion de la relation client
                    </h3>
                    <ul className="list-disc space-y-2 pl-6">
                      <li>Répondre à vos demandes de contact et d'information</li>
                      <li>Établir et envoyer des devis personnalisés</li>
                      <li>
                        Assurer le suivi de votre projet de menuiserie
                      </li>
                      <li>
                        Gérer la fabrication et la livraison de vos meubles sur
                        mesure
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl">
                      Obligations légales et comptables
                    </h3>
                    <ul className="list-disc space-y-2 pl-6">
                      <li>
                        Établir des factures conformes à la législation belge
                      </li>
                      <li>
                        Respecter nos obligations comptables et fiscales
                      </li>
                      <li>Conserver les documents légaux requis</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl">
                      Communication marketing (avec votre consentement)
                    </h3>
                    <ul className="list-disc space-y-2 pl-6">
                      <li>
                        Vous envoyer notre newsletter avec nos actualités et
                        nouveautés
                      </li>
                      <li>Vous informer de nos services et promotions</li>
                      <li>
                        Partager des conseils et inspirations autour de la
                        menuiserie sur mesure
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl">
                      Amélioration de nos services
                    </h3>
                    <ul className="list-disc space-y-2 pl-6">
                      <li>Analyser l'utilisation de notre site internet</li>
                      <li>Améliorer l'expérience utilisateur</li>
                      <li>Optimiser nos services et notre offre</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="space-y-4">
                <h2 className="font-HelveticaNow text-3xl md:text-4xl">
                  Base légale du traitement
                </h2>
                <p>
                  Conformément au RGPD, le traitement de vos données personnelles
                  repose sur les bases légales suivantes :
                </p>
                <ul className="list-disc space-y-2 pl-6">
                  <li>
                    <span className="font-semibold">Votre consentement explicite</span>
                    {" "}- Pour l'inscription à notre newsletter et l'envoi de
                    communications marketing.
                  </li>
                  <li>
                    <span className="font-semibold">
                      L'exécution d'un contrat ou de mesures précontractuelles
                    </span>
                    {" "}- Pour le traitement de vos demandes de devis, la
                    gestion de votre commande et la livraison de vos meubles.
                  </li>
                  <li>
                    <span className="font-semibold">
                      Le respect de nos obligations légales
                    </span>
                    {" "}- Pour la facturation, la comptabilité et les
                    obligations fiscales imposées par la législation belge.
                  </li>
                  <li>
                    <span className="font-semibold">
                      Notre intérêt légitime
                    </span>
                    {" "}- Pour assurer le bon fonctionnement de notre activité,
                    améliorer nos services et assurer la sécurité de notre site
                    internet.
                  </li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="font-HelveticaNow text-3xl md:text-4xl">
                  Destinataires des données
                </h2>
                <div className="space-y-4">
                  <p>
                    Vos données personnelles sont destinées exclusivement à
                    NEMWOOD et à son personnel habilité.
                  </p>
                  <p>
                    Nous ne vendons, ne louons ni n'échangeons vos données
                    personnelles avec des tiers à des fins commerciales.
                  </p>
                  <p>Vos données peuvent toutefois être partagées avec :</p>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-xl">
                        Nos sous-traitants techniques
                      </h3>
                      <ul className="list-disc space-y-2 pl-6">
                        <li>Hébergeur du site web (OVH SAS)</li>
                        <li>Service de messagerie électronique</li>
                        <li>Outils d'analyse web (si applicable)</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold text-xl">
                        Les autorités compétentes
                      </h3>
                      <ul className="list-disc space-y-2 pl-6">
                        <li>En cas d'obligation légale ou réglementaire</li>
                        <li>
                          Sur demande des autorités judiciaires ou administratives
                        </li>
                      </ul>
                    </div>
                  </div>
                  <p>
                    Tous nos sous-traitants sont soigneusement sélectionnés et
                    contractuellement tenus de respecter la confidentialité et la
                    sécurité de vos données personnelles conformément au RGPD.
                  </p>
                </div>
              </section>

              <section className="space-y-4">
                <h2 className="font-HelveticaNow text-3xl md:text-4xl">
                  Durée de conservation des données
                </h2>
                <p>
                  Vos données personnelles sont conservées pour les durées
                  suivantes :
                </p>
                <ul className="list-disc space-y-2 pl-6">
                  <li>
                    <span className="font-semibold">
                      Données de contact et devis
                    </span>
                    {" "}- 3 ans à compter de notre dernier contact, sauf si
                    vous avez passé commande.
                  </li>
                  <li>
                    <span className="font-semibold">
                      Données clients (après commande)
                    </span>
                    {" "}- 10 ans à compter de la fin de la relation
                    commerciale, conformément aux obligations comptables et
                    fiscales belges.
                  </li>
                  <li>
                    <span className="font-semibold">
                      Données marketing (newsletter)
                    </span>
                    {" "}- Jusqu'à votre demande de désinscription ou votre
                    retrait de consentement.
                  </li>
                  <li>
                    <span className="font-semibold">Données de navigation</span>
                    {" "}- 13 mois maximum.
                  </li>
                </ul>
                <p>
                  À l'issue de ces durées, vos données sont supprimées de manière
                  sécurisée ou anonymisées.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="font-HelveticaNow text-3xl md:text-4xl">
                  Vos droits
                </h2>
                <p>
                  Conformément au RGPD et à la législation belge, vous disposez
                  des droits suivants concernant vos données personnelles :
                </p>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-xl">Droit d'accès</h3>
                    <p>
                      Vous avez le droit d'obtenir la confirmation que des données
                      vous concernant sont ou ne sont pas traitées et, lorsqu'elles
                      le sont, d'accéder auxdites données ainsi qu'aux
                      informations concernant leur traitement.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl">
                      Droit de rectification
                    </h3>
                    <p>
                      Vous avez le droit d'obtenir la rectification de données
                      inexactes ou incomplètes vous concernant.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl">
                      Droit à l'effacement ("droit à l'oubli")
                    </h3>
                    <p>
                      Vous avez le droit d'obtenir l'effacement de vos données
                      personnelles dans certaines conditions (par exemple, si elles
                      ne sont plus nécessaires au regard des finalités pour
                      lesquelles elles ont été collectées).
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl">
                      Droit à la limitation du traitement
                    </h3>
                    <p>
                      Vous avez le droit d'obtenir la limitation du traitement de
                      vos données dans certaines conditions.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl">
                      Droit à la portabilité des données
                    </h3>
                    <p>
                      Vous avez le droit de recevoir les données personnelles vous
                      concernant dans un format structuré, couramment utilisé et
                      lisible par machine, et de les transmettre à un autre
                      responsable du traitement.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl">Droit d'opposition</h3>
                    <p>
                      Vous avez le droit de vous opposer à tout moment, pour des
                      raisons tenant à votre situation particulière, au traitement
                      de vos données personnelles.
                    </p>
                    <p>
                      Vous avez également le droit de vous opposer à tout moment au
                      traitement de vos données à des fins de prospection
                      commerciale.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl">
                      Droit de retirer votre consentement
                    </h3>
                    <p>
                      Lorsque le traitement est fondé sur votre consentement, vous
                      avez le droit de retirer ce consentement à tout moment. Ce
                      retrait n'affecte pas la licéité du traitement fondé sur le
                      consentement effectué avant le retrait de celui-ci.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl">
                      Droit de définir des directives post-mortem
                    </h3>
                    <p>
                      Vous avez le droit de définir des directives relatives au
                      sort de vos données après votre décès.
                    </p>
                  </div>
                </div>
              </section>

              <section className="space-y-4">
                <h2 className="font-HelveticaNow text-3xl md:text-4xl">
                  Exercice de vos droits
                </h2>
                <p>
                  Pour exercer l'un de ces droits, vous pouvez nous contacter :
                </p>
                <div className="space-y-2">
                  <p>Par email : contact@nemwood.be</p>
                  <div>
                    <p>Par courrier :</p>
                    <p className="ml-4">NEMWOOD - Protection des Données</p>
                    <p className="ml-4">Nering 34</p>
                    <p className="ml-4">1620 Beersel</p>
                    <p className="ml-4">Belgique</p>
                  </div>
                </div>
                <p>
                  Nous nous engageons à répondre à votre demande dans un délai
                  d'un mois suivant sa réception. Ce délai peut être prolongé de
                  deux mois compte tenu de la complexité et du nombre de demandes.
                  Dans ce cas, nous vous informerons de cette prolongation et des
                  motifs du report.
                </p>
                <p>
                  Pour toute demande, nous pourrons vous demander de justifier de
                  votre identité afin de garantir la confidentialité de vos
                  données.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="font-HelveticaNow text-3xl md:text-4xl">
                  Droit de réclamation
                </h2>
                <p>
                  Vous disposez également du droit d'introduire une réclamation
                  auprès de l'autorité de contrôle compétente :
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

              <section className="space-y-4">
                <h2 className="font-HelveticaNow text-3xl md:text-4xl">
                  Sécurité des données
                </h2>
                <div className="space-y-4">
                  <p>
                    NEMWOOD met en œuvre toutes les mesures techniques et
                    organisationnelles appropriées pour protéger vos données
                    personnelles contre :
                  </p>
                  <ul className="list-disc space-y-2 pl-6">
                    <li>La destruction accidentelle ou illicite</li>
                    <li>La perte accidentelle</li>
                    <li>L'altération</li>
                    <li>La diffusion ou l'accès non autorisés</li>
                    <li>Toute autre forme de traitement illicite</li>
                  </ul>
                  <p>Ces mesures incluent notamment :</p>
                  <ul className="list-disc space-y-2 pl-6">
                    <li>
                      Sécurisation de l'accès à nos systèmes informatiques
                    </li>
                    <li>Utilisation de protocoles de chiffrement (HTTPS)</li>
                    <li>
                      Limitation de l'accès aux données aux seules personnes
                      habilitées
                    </li>
                    <li>Sensibilisation et formation de notre personnel</li>
                    <li>Sauvegardes régulières</li>
                  </ul>
                  <p>
                    Malgré ces mesures, aucune méthode de transmission sur Internet
                    ou de stockage électronique n'est totalement sécurisée. Nous
                    ne pouvons donc garantir une sécurité absolue de vos données.
                  </p>
                </div>
              </section>

              <section className="space-y-4">
                <h2 className="font-HelveticaNow text-3xl md:text-4xl">
                  Transfert de données hors de l'UE
                </h2>
                <div className="space-y-4">
                  <p>
                    Vos données personnelles sont hébergées et traitées au sein de
                    l'Union Européenne.
                  </p>
                  <p>
                    Dans l'hypothèse où nous serions amenés à transférer vos
                    données en dehors de l'Union Européenne, nous veillerons à ce
                    que ce transfert soit effectué conformément à la réglementation
                    applicable et qu'un niveau de protection adéquat soit assuré.
                  </p>
                </div>
              </section>

              <section className="space-y-4">
                <h2 className="font-HelveticaNow text-3xl md:text-4xl">
                  Mineurs
                </h2>
                <p>
                  Notre site internet et nos services ne sont pas destinés aux
                  personnes âgées de moins de 18 ans. Nous ne collectons pas
                  sciemment de données personnelles concernant des mineurs. Si
                  vous êtes parent ou tuteur légal et que vous pensez que votre
                  enfant nous a fourni des données personnelles, veuillez nous
                  contacter.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="font-HelveticaNow text-3xl md:text-4xl">
                  Modifications de la politique de confidentialité
                </h2>
                <div className="space-y-4">
                  <p>
                    NEMWOOD se réserve le droit de modifier cette politique de
                    confidentialité à tout moment pour refléter les changements
                    apportés à nos pratiques en matière de données personnelles ou
                    pour se conformer à l'évolution de la législation.
                  </p>
                  <p>
                    Toute modification sera publiée sur cette page avec une date
                    de mise à jour actualisée. Nous vous encourageons à consulter
                    régulièrement cette page pour rester informé de la manière
                    dont nous protégeons vos données.
                  </p>
                  <p>
                    En cas de modification substantielle, nous vous en informerons
                    par email ou via une notification sur notre site internet.
                  </p>
                </div>
              </section>

              <section className="space-y-4">
                <h2 className="font-HelveticaNow text-3xl md:text-4xl">
                  Contact
                </h2>
                <p>
                  Pour toute question relative à cette politique de confidentialité
                  ou pour exercer vos droits, vous pouvez nous contacter :
                </p>
                <div className="space-y-2">
                  <p className="font-semibold">
                    NEMWOOD - Service Protection des Données
                  </p>
                  <p>Nering 34</p>
                  <p>1620 Beersel</p>
                  <p>Belgique</p>
                  <p>Email : contact@nemwood.be</p>
                  <p>Téléphone : +32 489 33 05 44</p>
                </div>
              </section>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

