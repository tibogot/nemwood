import type { Metadata } from "next";
import { generateMetadata } from "@/app/metadata";
import BreadcrumbsSchema from "@/components/BreadcrumbsSchema";
import AnimatedText from "@/components/AnimatedText3";

export const metadata: Metadata = generateMetadata(
  "Conditions Générales de Vente | Nemwood",
  "Conditions Générales de Vente de Nemwood - Termes et conditions pour l'achat de nos services et produits.",
  "/images/nem1.png",
  "https://www.nemwood.be/cgv",
);

export default function CGV() {
  return (
    <>
      <BreadcrumbsSchema
        items={[
          { name: "Accueil", url: "/" },
          { name: "CGV", url: "/cgv" },
        ]}
      />
      <div className="bg-secondary text-primary">
        <section className="px-4 py-20 md:px-8 md:py-40">
          <div className="mx-auto max-w-4xl">
            <AnimatedText isHero delay={0.0} stagger={0.3}>
              <h1 className="font-ITCGaramondN mb-8 text-5xl md:text-7xl">
                Conditions Générales de Vente
              </h1>
            </AnimatedText>
            <div className="font-HelveticaNow space-y-8 text-base leading-relaxed md:text-lg">
              <div className="text-primary/70 text-sm">
                Dernière mise à jour : 26 décembre 2025
              </div>

              <section className="space-y-4">
                <h2 className="font-ITCGaramondN text-3xl md:text-4xl">
                  Préambule
                </h2>
                <div className="space-y-4">
                  <p>
                    Les présentes Conditions Générales de Vente (CGV) s'appliquent
                    à toutes les prestations de service et ventes de mobilier sur
                    mesure réalisées par <strong>NEMWOOD</strong>, menuisier ébéniste
                    en Belgique.
                  </p>
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
                </div>
              </section>

              <section className="space-y-4">
                <h2 className="font-ITCGaramondN text-3xl md:text-4xl">
                  Article 1 - Champ d'application
                </h2>
                <div className="space-y-4">
                  <p>
                    Les présentes CGV régissent exclusivement les relations
                    contractuelles entre NEMWOOD et ses clients (ci-après "le
                    Client") pour toute commande de meubles sur mesure, incluant
                    notamment :
                  </p>
                  <ul className="list-disc space-y-2 pl-6">
                    <li>Cuisines sur mesure</li>
                    <li>Garde-robes et dressings</li>
                    <li>Tables et chaises</li>
                    <li>Escaliers</li>
                    <li>Bibliothèques</li>
                    <li>Bureaux</li>
                    <li>Salles de bain</li>
                    <li>
                      Tout autre mobilier ou aménagement en bois sur mesure
                    </li>
                  </ul>
                  <p>
                    Toute commande implique l'adhésion sans réserve du Client aux
                    présentes CGV qui prévalent sur tout autre document du Client,
                    notamment sur toutes conditions générales d'achat, sauf accord
                    dérogatoire exprès et préalable de NEMWOOD.
                  </p>
                  <p>
                    NEMWOOD se réserve le droit de modifier ses CGV à tout moment.
                    Les CGV applicables sont celles en vigueur à la date de
                    signature du devis.
                  </p>
                </div>
              </section>

              <section className="space-y-4">
                <h2 className="font-ITCGaramondN text-3xl md:text-4xl">
                  Article 2 - Devis
                </h2>
                <div className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="font-semibold text-xl">
                      2.1 Établissement du devis
                    </h3>
                    <p>
                      Tous nos devis sont établis sur mesure après étude approfondie
                      de votre projet et visite technique si nécessaire.
                    </p>
                    <p>Chaque devis comprend :</p>
                    <ul className="list-disc space-y-2 pl-6">
                      <li>
                        La description détaillée du mobilier à réaliser
                      </li>
                      <li>Les dimensions précises</li>
                      <li>
                        Les matériaux utilisés (essences de bois, quincaillerie,
                        finitions)
                      </li>
                      <li>Le prix total HT et TTC</li>
                      <li>
                        Les délais indicatifs de fabrication et d'installation
                      </li>
                      <li>Les conditions de paiement</li>
                      <li>Les modalités de livraison et d'installation</li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h3 className="font-semibold text-xl">2.2 Validité du devis</h3>
                    <p>
                      Les devis sont valables pendant <strong>30 jours</strong> à
                      compter de leur date d'émission, sauf mention contraire.
                    </p>
                    <p>
                      Passé ce délai, NEMWOOD se réserve le droit de réviser les
                      prix et les disponibilités en fonction de l'évolution du coût
                      des matières premières et des délais de fabrication.
                    </p>
                  </div>
                  <div className="space-y-4">
                    <h3 className="font-semibold text-xl">2.3 Devis gratuit</h3>
                    <p>
                      L'établissement d'un devis est gratuit et n'engage en rien le
                      Client.
                    </p>
                  </div>
                </div>
              </section>

              <section className="space-y-4">
                <h2 className="font-ITCGaramondN text-3xl md:text-4xl">
                  Article 3 - Commande
                </h2>
                <div className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="font-semibold text-xl">
                      3.1 Validation de la commande
                    </h3>
                    <p>
                      La commande est considérée comme ferme et définitive après
                      réception par NEMWOOD des éléments suivants :
                    </p>
                    <ol className="list-decimal space-y-2 pl-6">
                      <li>
                        Le devis signé par le Client avec la mention manuscrite "Bon
                        pour accord"
                      </li>
                      <li>
                        Le versement de l'acompte demandé (voir article 5)
                      </li>
                    </ol>
                  </div>
                  <div className="space-y-4">
                    <h3 className="font-semibold text-xl">
                      3.2 Confirmation de commande
                    </h3>
                    <p>
                      Dès réception du devis signé et de l'acompte, NEMWOOD adresse
                      au Client une confirmation de commande par email précisant :
                    </p>
                    <ul className="list-disc space-y-2 pl-6">
                      <li>Le récapitulatif de la commande</li>
                      <li>Le planning prévisionnel</li>
                      <li>Les coordonnées du responsable du projet</li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h3 className="font-semibold text-xl">
                      3.3 Documents contractuels
                    </h3>
                    <p>
                      Les documents contractuels comprennent, par ordre de priorité
                      :
                    </p>
                    <ol className="list-decimal space-y-2 pl-6">
                      <li>Le devis signé</li>
                      <li>Les présentes CGV</li>
                      <li>Les plans et modélisations 3D le cas échéant</li>
                    </ol>
                  </div>
                </div>
              </section>

              <section className="space-y-4">
                <h2 className="font-ITCGaramondN text-3xl md:text-4xl">
                  Article 4 - Prix
                </h2>
                <div className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="font-semibold text-xl">4.1 Prix affichés</h3>
                    <p>
                      Tous nos prix sont exprimés en <strong>euros (€)</strong> et
                      indiqués :
                    </p>
                    <ul className="list-disc space-y-2 pl-6">
                      <li>
                        <strong>Hors Taxes (HT)</strong> : prix sans TVA
                      </li>
                      <li>
                        <strong>Toutes Taxes Comprises (TTC)</strong> : prix incluant
                        la TVA belge au taux en vigueur (21% pour les meubles)
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h3 className="font-semibold text-xl">
                      4.2 Le prix comprend
                    </h3>
                    <p>
                      Sauf mention contraire dans le devis, le prix comprend :
                    </p>
                    <ul className="list-disc space-y-2 pl-6">
                      <li>
                        L'étude et la conception du mobilier sur mesure
                      </li>
                      <li>La fabrication artisanale en atelier</li>
                      <li>
                        Les matériaux (bois, quincaillerie, finitions)
                      </li>
                      <li>Le transport jusqu'au lieu d'installation</li>
                      <li>La livraison et l'installation complète du mobilier</li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h3 className="font-semibold text-xl">
                      4.3 Le prix ne comprend pas
                    </h3>
                    <p>
                      Sauf mention contraire dans le devis, le prix ne comprend pas
                      :
                    </p>
                    <ul className="list-disc space-y-2 pl-6">
                      <li>
                        Les travaux préparatoires (électricité, plomberie,
                        maçonnerie)
                      </li>
                      <li>Les modifications de structure du bâtiment</li>
                      <li>L'évacuation de l'ancien mobilier</li>
                      <li>
                        Les fournitures spécifiques à charge du Client
                        (électroménager, robinetterie, etc.)
                      </li>
                      <li>Les prestations d'autres corps de métier</li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h3 className="font-semibold text-xl">4.4 Révision des prix</h3>
                    <p>
                      NEMWOOD se réserve le droit de réviser les prix en cas de :
                    </p>
                    <ul className="list-disc space-y-2 pl-6">
                      <li>
                        Variation significative (supérieure à 10%) du coût des
                        matières premières, notamment le bois
                      </li>
                      <li>
                        Modification substantielle du projet à la demande du Client
                      </li>
                      <li>
                        Augmentation des coûts de transport ou d'énergie
                      </li>
                    </ul>
                    <p>
                      Dans ce cas, le Client sera informé avant toute modification
                      et sera libre d'accepter ou de refuser la révision tarifaire.
                    </p>
                  </div>
                </div>
              </section>

              <section className="space-y-4">
                <h2 className="font-ITCGaramondN text-3xl md:text-4xl">
                  Article 5 - Conditions de paiement
                </h2>
                <div className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="font-semibold text-xl">
                      5.1 Modalités de paiement
                    </h3>
                    <div className="space-y-2">
                      <p>
                        <strong>Acompte à la commande : 40%</strong>
                      </p>
                      <p>
                        Un acompte de 40% du montant total TTC est exigible à la
                        signature du devis pour lancer la fabrication.
                      </p>
                      <p>
                        <strong>Paiement intermédiaire : 40%</strong>
                      </p>
                      <p>
                        Un second versement de 40% est demandé à mi-parcours de la
                        fabrication (sur présentation de photos de l'avancement).
                      </p>
                      <p>
                        <strong>Solde : 20%</strong>
                      </p>
                      <p>
                        Le solde de 20% est exigible à la livraison ou à la fin de
                        l'installation, selon les modalités convenues dans le devis.
                      </p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h3 className="font-semibold text-xl">
                      5.2 Modes de paiement acceptés
                    </h3>
                    <ul className="list-disc space-y-2 pl-6">
                      <li>
                        Virement bancaire (coordonnées bancaires fournies sur la
                        facture)
                      </li>
                      <li>Espèces (dans la limite légale de 3 000€)</li>
                      <li>Chèque bancaire</li>
                      <li>Carte bancaire (sur demande)</li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h3 className="font-semibold text-xl">5.3 Défaut de paiement</h3>
                    <div className="space-y-4">
                      <div>
                        <p className="font-semibold">Retard de paiement</p>
                        <p>
                          En cas de retard de paiement, des pénalités de retard au
                          taux de <strong>10% par an</strong> seront automatiquement
                          appliquées à compter de la date d'échéance figurant sur la
                          facture.
                        </p>
                        <p>
                          Une indemnité forfaitaire de <strong>40€</strong> pour
                          frais de recouvrement sera également due, conformément à
                          l'article 1226 du Code civil belge.
                        </p>
                      </div>
                      <div>
                        <p className="font-semibold">Suspension des travaux</p>
                        <p>
                          En cas de non-paiement d'un acompte ou d'un paiement
                          intermédiaire à la date convenue, NEMWOOD se réserve le
                          droit de suspendre la fabrication et/ou l'installation
                          jusqu'à régularisation complète.
                        </p>
                      </div>
                      <div>
                        <p className="font-semibold">Clause résolutoire</p>
                        <p>
                          En cas de non-paiement total ou partiel huit (8) jours
                          après mise en demeure restée infructueuse, la vente pourra
                          être résolue de plein droit, sans préjudice de tous
                          dommages et intérêts auxquels NEMWOOD pourrait prétendre.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section className="space-y-4">
                <h2 className="font-ITCGaramondN text-3xl md:text-4xl">
                  Article 6 - Délais de fabrication et d'installation
                </h2>
                <div className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="font-semibold text-xl">6.1 Délais indicatifs</h3>
                    <p>
                      Les délais de fabrication et d'installation communiqués dans le
                      devis sont donnés <strong>à titre indicatif</strong> et ne
                      constituent pas un engagement ferme.
                    </p>
                    <p>Ces délais peuvent varier en fonction de :</p>
                    <ul className="list-disc space-y-2 pl-6">
                      <li>La complexité du projet</li>
                      <li>
                        La disponibilité des matériaux (bois, quincaillerie
                        spécifique)
                      </li>
                      <li>Les conditions d'accès au chantier</li>
                      <li>Les aléas de fabrication</li>
                      <li>La charge de travail de l'atelier</li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h3 className="font-semibold text-xl">6.2 Report des délais</h3>
                    <p>
                      En cas de retard, NEMWOOD s'engage à informer le Client dans
                      les meilleurs délais et à lui communiquer un nouveau planning
                      prévisionnel.
                    </p>
                    <p>
                      Tout retard dans les délais de fabrication ou d'installation ne
                      peut donner lieu à :
                    </p>
                    <ul className="list-disc space-y-2 pl-6">
                      <li>Une annulation de la commande</li>
                      <li>
                        Une demande de dédommagement ou d'indemnisation
                      </li>
                      <li>Une réduction du prix convenu</li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h3 className="font-semibold text-xl">6.3 Collaboration du Client</h3>
                    <p>
                      Le respect des délais est conditionné à la collaboration
                      effective du Client, notamment :
                    </p>
                    <ul className="list-disc space-y-2 pl-6">
                      <li>
                        La validation des plans et modélisations en temps voulu
                      </li>
                      <li>L'accès au lieu d'installation aux dates convenues</li>
                      <li>La réalisation des travaux préparatoires</li>
                      <li>
                        La mise à disposition des fluides nécessaires (électricité,
                        eau)
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="space-y-4">
                <h2 className="font-ITCGaramondN text-3xl md:text-4xl">
                  Article 7 - Livraison et installation
                </h2>
                <div className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="font-semibold text-xl">
                      7.1 Lieu d'installation
                    </h3>
                    <p>
                      La livraison et l'installation sont effectuées à l'adresse
                      indiquée sur le devis, en Belgique.
                    </p>
                  </div>
                  <div className="space-y-4">
                    <h3 className="font-semibold text-xl">
                      7.2 Obligations du Client
                    </h3>
                    <p>Le Client s'engage à :</p>
                    <ul className="list-disc space-y-2 pl-6">
                      <li>
                        <strong>
                          Assurer un accès libre et dégagé au lieu d'installation
                        </strong>{" "}
                        (dégagement des espaces, protection des sols et murs si
                        nécessaire)
                      </li>
                      <li>
                        <strong>
                          Mettre à disposition l'électricité et l'eau
                        </strong>{" "}
                        si nécessaire pour l'installation
                      </li>
                      <li>
                        <strong>
                          Avoir effectué les travaux préparatoires convenus
                        </strong>{" "}
                        (raccordements électriques, plomberie, supports muraux
                        adaptés, etc.)
                      </li>
                      <li>
                        <strong>Être présent ou représenté</strong> lors de la
                        livraison et de l'installation
                      </li>
                      <li>
                        <strong>Vérifier l'état du mobilier</strong> lors de la
                        réception
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h3 className="font-semibold text-xl">
                      7.3 Impossibilité d'installation
                    </h3>
                    <p>
                      En cas d'impossibilité d'accès ou de conditions inadaptées
                      constatées sur place (dimensions incorrectes, supports
                      inadéquats, travaux préparatoires non réalisés), NEMWOOD se
                      réserve le droit de :
                    </p>
                    <ul className="list-disc space-y-2 pl-6">
                      <li>
                        Reporter l'installation à une date ultérieure
                      </li>
                      <li>
                        Facturer les frais supplémentaires occasionnés
                        (déplacement, main d'œuvre, location de matériel)
                      </li>
                    </ul>
                    <p>
                      Ces frais supplémentaires seront intégralement à la charge du
                      Client.
                    </p>
                  </div>
                  <div className="space-y-4">
                    <h3 className="font-semibold text-xl">
                      7.4 Assurance transport
                    </h3>
                    <p>
                      Le mobilier voyage aux risques et périls de NEMWOOD jusqu'à la
                      livraison au Client. NEMWOOD a souscrit une assurance couvrant
                      les dommages pouvant survenir pendant le transport.
                    </p>
                  </div>
                </div>
              </section>

              <section className="space-y-4">
                <h2 className="font-ITCGaramondN text-3xl md:text-4xl">
                  Article 8 - Réception et réserves
                </h2>
                <div className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="font-semibold text-xl">
                      8.1 Vérification à la réception
                    </h3>
                    <p>
                      Lors de la livraison et/ou de l'installation, le Client est
                      invité à <strong>vérifier minutieusement</strong> :
                    </p>
                    <ul className="list-disc space-y-2 pl-6">
                      <li>
                        La conformité du mobilier avec la commande (dimensions,
                        matériaux, finitions)
                      </li>
                      <li>
                        L'absence de défauts apparents ou de dommages
                      </li>
                      <li>
                        Le bon fonctionnement des éléments mobiles (tiroirs, portes,
                        systèmes d'ouverture)
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h3 className="font-semibold text-xl">
                      8.2 Émission de réserves
                    </h3>
                    <p>
                      Toute réserve ou non-conformité doit être{" "}
                      <strong>notifiée par écrit</strong> à NEMWOOD dans les{" "}
                      <strong>48 heures</strong> suivant la réception, par email
                      (contact@nemwood.be) ou courrier recommandé, accompagnée si
                      possible de photographies.
                    </p>
                    <p>
                      Passé ce délai, le mobilier sera considéré comme{" "}
                      <strong>conforme et accepté</strong> sans réserve.
                    </p>
                  </div>
                  <div className="space-y-4">
                    <h3 className="font-semibold text-xl">
                      8.3 Traitement des réserves
                    </h3>
                    <p>En cas de réserve justifiée, NEMWOOD s'engage à :</p>
                    <ul className="list-disc space-y-2 pl-6">
                      <li>
                        Proposer une solution de réparation ou de remplacement
                      </li>
                      <li>
                        Intervenir dans les meilleurs délais pour remédier au défaut
                        constaté
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="space-y-4">
                <h2 className="font-ITCGaramondN text-3xl md:text-4xl">
                  Article 9 - Garantie
                </h2>
                <div className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="font-semibold text-xl">
                      9.1 Étendue de la garantie
                    </h3>
                    <p>
                      NEMWOOD garantit ses fabrications contre tout{" "}
                      <strong>vice de fabrication</strong> pour une durée de{" "}
                      <strong>2 ans</strong> à compter de la date de livraison/installation.
                    </p>
                    <p>Cette garantie couvre :</p>
                    <ul className="list-disc space-y-2 pl-6">
                      <li>Les défauts de matériaux</li>
                      <li>Les défauts de fabrication</li>
                      <li>Les défauts d'assemblage</li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h3 className="font-semibold text-xl">
                      9.2 Exclusions de garantie
                    </h3>
                    <p>La garantie ne couvre pas :</p>
                    <ul className="list-disc space-y-2 pl-6">
                      <li>
                        <strong>L'usure normale</strong> du mobilier liée à son
                        utilisation courante
                      </li>
                      <li>
                        Les dommages résultant d'un{" "}
                        <strong>mauvais usage</strong> ou d'une{" "}
                        <strong>utilisation inappropriée</strong>
                      </li>
                      <li>
                        Les dommages causés par un{" "}
                        <strong>défaut d'entretien</strong> du bois et des finitions
                      </li>
                      <li>
                        Les modifications, réparations ou transformations effectuées
                        par <strong>le Client ou un tiers</strong> sans autorisation
                        de NEMWOOD
                      </li>
                      <li>
                        Les dommages causés par un{" "}
                        <strong>
                          accident, choc, incendie, dégât des eaux
                        </strong>{" "}
                        ou toute autre cause extérieure
                      </li>
                      <li>
                        Les variations naturelles du bois (teinte, veinure, nœuds)
                        qui font partie de l'authenticité du matériau
                      </li>
                      <li>
                        Les fissurations mineures du bois massif liées aux variations
                        d'humidité
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h3 className="font-semibold text-xl">
                      9.3 Mise en œuvre de la garantie
                    </h3>
                    <p>Pour bénéficier de la garantie, le Client doit :</p>
                    <ol className="list-decimal space-y-2 pl-6">
                      <li>
                        Notifier le défaut par écrit à NEMWOOD (email ou courrier
                        recommandé)
                      </li>
                      <li>
                        Fournir une description précise du défaut et des photographies
                      </li>
                      <li>Permettre à NEMWOOD d'examiner le mobilier</li>
                    </ol>
                    <p>
                      NEMWOOD se réserve le droit d'examiner le mobilier avant toute
                      intervention et de déterminer si le défaut est couvert par la
                      garantie.
                    </p>
                  </div>
                  <div className="space-y-4">
                    <h3 className="font-semibold text-xl">
                      9.4 Obligations du Client
                    </h3>
                    <p>Le Client s'engage à :</p>
                    <ul className="list-disc space-y-2 pl-6">
                      <li>
                        Entretenir correctement le mobilier conformément aux
                        instructions fournies
                      </li>
                      <li>
                        Ne pas modifier ou faire modifier le mobilier sans accord
                        préalable de NEMWOOD
                      </li>
                      <li>
                        Informer NEMWOOD de tout défaut dans les meilleurs délais
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="space-y-4">
                <h2 className="font-ITCGaramondN text-3xl md:text-4xl">
                  Article 10 - Modifications et annulation
                </h2>
                <div className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="font-semibold text-xl">
                      10.1 Modifications après validation
                    </h3>
                    <p>
                      Toute modification demandée par le Client après validation du
                      devis peut entraîner :
                    </p>
                    <ul className="list-disc space-y-2 pl-6">
                      <li>
                        Un <strong>surcoût</strong> proportionnel aux modifications
                      </li>
                      <li>
                        Un <strong>allongement des délais</strong> de fabrication et
                        d'installation
                      </li>
                    </ul>
                    <p>
                      Les modifications seront formalisées par un avenant au devis
                      initial, qui devra être signé par les deux parties.
                    </p>
                  </div>
                  <div className="space-y-4">
                    <h3 className="font-semibold text-xl">
                      10.2 Annulation par le Client
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <p className="font-semibold">
                          Avant le début de fabrication
                        </p>
                        <p>
                          Si le Client souhaite annuler sa commande avant le démarrage
                          effectif de la fabrication, l'acompte versé sera remboursé
                          déduction faite de <strong>20%</strong> pour frais de dossier
                          (étude, déplacements, réservation de matériaux).
                        </p>
                      </div>
                      <div>
                        <p className="font-semibold">
                          Après le début de fabrication
                        </p>
                        <p>
                          Une fois la fabrication commencée, en cas d'annulation par le
                          Client, l'acompte reste <strong>intégralement acquis</strong>{" "}
                          à NEMWOOD à titre de dédommagement, sans préjudice
                          d'éventuels dommages et intérêts supplémentaires si le
                          préjudice subi est supérieur.
                        </p>
                        <p>
                          Le mobilier déjà fabriqué restera la propriété de NEMWOOD.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section className="space-y-4">
                <h2 className="font-ITCGaramondN text-3xl md:text-4xl">
                  Article 11 - Responsabilité
                </h2>
                <div className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="font-semibold text-xl">
                      11.1 Limitation de responsabilité
                    </h3>
                    <p>
                      NEMWOOD s'engage à réaliser les prestations avec tout le soin et
                      la compétence requis d'un artisan professionnel.
                    </p>
                    <p>
                      La responsabilité de NEMWOOD est limitée au{" "}
                      <strong>montant de la prestation effectuée</strong> et ne saurait
                      couvrir :
                    </p>
                    <ul className="list-disc space-y-2 pl-6">
                      <li>Les dommages indirects ou immatériels</li>
                      <li>Les pertes d'exploitation ou de chiffre d'affaires</li>
                      <li>Les préjudices commerciaux</li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h3 className="font-semibold text-xl">11.2 Assurance</h3>
                    <p>
                      NEMWOOD a souscrit une assurance responsabilité civile
                      professionnelle auprès d'un assureur agréé couvrant les dommages
                      pouvant être causés dans le cadre de son activité.
                    </p>
                    <p>
                      Une attestation d'assurance peut être fournie sur demande.
                    </p>
                  </div>
                </div>
              </section>

              <section className="space-y-4">
                <h2 className="font-ITCGaramondN text-3xl md:text-4xl">
                  Article 12 - Force majeure
                </h2>
                <div className="space-y-4">
                  <p>
                    NEMWOOD ne pourra être tenue responsable de tout retard ou
                    inexécution de ses obligations résultant d'un cas de{" "}
                    <strong>force majeure</strong>.
                  </p>
                  <p>
                    Sont considérés comme cas de force majeure, outre ceux
                    habituellement retenus par la jurisprudence belge :
                  </p>
                  <ul className="list-disc space-y-2 pl-6">
                    <li>
                      Catastrophes naturelles (inondations, tempêtes, séismes)
                    </li>
                    <li>Incendie dans nos locaux ou chez nos fournisseurs</li>
                    <li>
                      Grèves ou conflits sociaux chez NEMWOOD ou ses fournisseurs
                    </li>
                    <li>
                      Interruption ou perturbation grave de l'approvisionnement en
                      matières premières
                    </li>
                    <li>Pandémie ou épidémie</li>
                    <li>
                      Défaillance des réseaux de télécommunication ou d'énergie
                    </li>
                  </ul>
                  <p>
                    En cas de force majeure, NEMWOOD informera le Client dans les
                    meilleurs délais et les parties se concerteront pour définir les
                    modalités de poursuite ou d'annulation de la commande.
                  </p>
                </div>
              </section>

              <section className="space-y-4">
                <h2 className="font-ITCGaramondN text-3xl md:text-4xl">
                  Article 13 - Propriété intellectuelle
                </h2>
                <div className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="font-semibold text-xl">13.1 Droits de NEMWOOD</h3>
                    <p>
                      Tous les plans, dessins, croquis, modélisations 3D, photographies
                      et créations réalisés par NEMWOOD restent sa{" "}
                      <strong>propriété exclusive</strong>.
                    </p>
                    <p>
                      Ils ne peuvent être reproduits, communiqués ou utilisés par le
                      Client pour un autre usage que celui expressément prévu dans le
                      contrat, sans l'autorisation écrite préalable de NEMWOOD.
                    </p>
                  </div>
                  <div className="space-y-4">
                    <h3 className="font-semibold text-xl">
                      13.2 Utilisation des réalisations
                    </h3>
                    <p>
                      NEMWOOD se réserve le droit d'utiliser les photographies des
                      meubles réalisés à des fins de communication et de promotion
                      (site internet, réseaux sociaux, portfolio, presse) sauf
                      opposition expresse du Client.
                    </p>
                  </div>
                </div>
              </section>

              <section className="space-y-4">
                <h2 className="font-ITCGaramondN text-3xl md:text-4xl">
                  Article 14 - Protection des données personnelles
                </h2>
                <p>
                  Les données personnelles collectées dans le cadre de la relation
                  commerciale font l'objet d'un traitement informatique conforme au{" "}
                  <strong>
                    Règlement Général sur la Protection des Données (RGPD)
                  </strong>
                  .
                </p>
                <p>
                  Pour plus d'informations sur l'utilisation de vos données
                  personnelles et l'exercice de vos droits, consultez notre{" "}
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
                  Article 15 - Droit applicable et litiges
                </h2>
                <div className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="font-semibold text-xl">15.1 Droit applicable</h3>
                    <p>
                      Les présentes CGV sont régies et interprétées conformément au{" "}
                      <strong>droit belge</strong>.
                    </p>
                  </div>
                  <div className="space-y-4">
                    <h3 className="font-semibold text-xl">15.2 Règlement amiable</h3>
                    <p>
                      En cas de litige ou de réclamation, les parties s'engagent à
                      rechercher une <strong>solution amiable</strong> avant toute
                      action judiciaire.
                    </p>
                    <p>Le Client peut adresser sa réclamation par écrit à :</p>
                    <div className="space-y-2">
                      <p className="font-semibold">NEMWOOD</p>
                      <p>Nering 34</p>
                      <p>1620 Beersel</p>
                      <p>Belgique</p>
                      <p>Email : contact@nemwood.be</p>
                    </div>
                    <p>
                      NEMWOOD s'engage à accuser réception de la réclamation sous 48h
                      et à y répondre dans un délai de 15 jours.
                    </p>
                  </div>
                  <div className="space-y-4">
                    <h3 className="font-semibold text-xl">15.3 Médiation</h3>
                    <p>
                      En cas d'échec de la tentative de règlement amiable, le Client
                      consommateur peut faire appel à un{" "}
                      <strong>médiateur de la consommation</strong> agréé.
                    </p>
                    <div className="space-y-2">
                      <p className="font-semibold">
                        Service de Médiation pour le Consommateur
                      </p>
                      <p>North Gate II</p>
                      <p>Boulevard du Roi Albert II, 8</p>
                      <p>1000 Bruxelles</p>
                      <p>Belgique</p>
                      <p>
                        Site :{" "}
                        <a
                          href="https://www.mediationconsommateur.be"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="transition-opacity hover:opacity-70 underline"
                        >
                          www.mediationconsommateur.be
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h3 className="font-semibold text-xl">
                      15.4 Compétence juridictionnelle
                    </h3>
                    <p>
                      À défaut d'accord amiable ou de médiation fructueuse, tout litige
                      sera porté devant les{" "}
                      <strong>tribunaux compétents de Bruxelles</strong>, Belgique.
                    </p>
                    <p>
                      Pour les Clients professionnels, seuls les tribunaux de Bruxelles
                      sont compétents.
                    </p>
                  </div>
                </div>
              </section>

              <section className="space-y-4">
                <h2 className="font-ITCGaramondN text-3xl md:text-4xl">
                  Article 16 - Dispositions diverses
                </h2>
                <div className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="font-semibold text-xl">
                      16.1 Intégralité de l'accord
                    </h3>
                    <p>
                      Les présentes CGV, conjointement avec le devis signé, constituent
                      l'intégralité de l'accord entre NEMWOOD et le Client et
                      remplacent tous accords, arrangements ou discussions antérieurs.
                    </p>
                  </div>
                  <div className="space-y-4">
                    <h3 className="font-semibold text-xl">16.2 Nullité partielle</h3>
                    <p>
                      Si une ou plusieurs stipulations des présentes CGV sont tenues
                      pour non valides ou déclarées telles en application d'une loi,
                      d'un règlement ou à la suite d'une décision définitive d'une
                      juridiction compétente, les autres stipulations garderont toute
                      leur force et leur portée.
                    </p>
                  </div>
                  <div className="space-y-4">
                    <h3 className="font-semibold text-xl">16.3 Non-renonciation</h3>
                    <p>
                      Le fait pour NEMWOOD de ne pas se prévaloir à un moment donné de
                      l'une quelconque des présentes CGV ne peut être interprété comme
                      valant renonciation à se prévaloir ultérieurement de ladite clause.
                    </p>
                  </div>
                  <div className="space-y-4">
                    <h3 className="font-semibold text-xl">16.4 Modification des CGV</h3>
                    <p>
                      NEMWOOD se réserve le droit de modifier les présentes CGV à tout
                      moment. Les CGV applicables sont celles en vigueur à la date de
                      signature du devis par le Client.
                    </p>
                  </div>
                </div>
              </section>

              <section className="space-y-4">
                <h2 className="font-ITCGaramondN text-3xl md:text-4xl">Contact</h2>
                <p>
                  Pour toute question relative aux présentes Conditions Générales de
                  Vente :
                </p>
                <div className="space-y-2">
                  <p className="font-semibold">NEMWOOD</p>
                  <p>Nering 34</p>
                  <p>1620 Beersel</p>
                  <p>Vlaams-Brabant, Belgique</p>
                  <p>Email : contact@nemwood.be</p>
                  <p>Téléphone : +32 489 33 05 44</p>
                  <div className="mt-4">
                    <p className="font-semibold">Horaires :</p>
                    <p>Lundi - Vendredi : 9h00 - 18h00</p>
                    <p>Samedi : Sur rendez-vous</p>
                  </div>
                </div>
                <p className="text-primary/70 italic text-sm mt-6">
                  Ces Conditions Générales de Vente ont été établies conformément à la
                  législation belge en vigueur et au Code de droit économique belge.
                </p>
              </section>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

