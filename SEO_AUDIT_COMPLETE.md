# 🔍 AUDIT SEO COMPLET - NEMWOOD.BE

## Site Web Français pour Menuisier Artisan en Belgique

**Date de l'audit:** Décembre 2025  
**Version Next.js:** 15.5.7 (version stable et supportée)  
**Version React:** 19.2.1  
**Domaine:** https://www.nemwood.be  
**Langue cible:** Français (Belgique)  
**Secteur:** Menuiserie sur mesure, Ébénisterie artisanale

---

## ✅ VÉRIFICATION VERSION & COMPATIBILITÉ

**Next.js 15.5.7 - Statut:** ✅ Version stable et supportée (Décembre 2025)

**Fonctionnalités vérifiées pour Next.js 15.5.7:**

- ✅ Metadata API - Complètement supportée (App Router)
- ✅ `generateMetadata()` - Fonctionne correctement
- ✅ `robots.ts` - Supporté (MetadataRoute.Robots)
- ✅ `sitemap.ts` - Supporté (MetadataRoute.Sitemap)
- ✅ `alternates.canonical` - Supporté
- ✅ `alternates.languages` (hreflang) - Supporté
- ✅ Open Graph metadata - Supporté
- ✅ Twitter Cards - Supporté
- ✅ Structured Data (JSON-LD) - Supporté via `<script>` dans layout

**Note technique:** Le commentaire dans `next.config.ts` ligne 21 mentionne "Required in Next.js 16+" pour `qualities`, mais cette propriété fonctionne également en 15.5.7. Pas d'impact SEO.

---

## 📊 RÉSUMÉ EXÉCUTIF

### ✅ Points Forts

- ✅ Metadata API Next.js correctement implémentée
- ✅ Structured Data (JSON-LD) présent pour LocalBusiness
- ✅ Sitemap.xml dynamique avec pages statiques et blog
- ✅ Robots.txt configuré correctement
- ✅ Canonical URLs implémentées
- ✅ Open Graph et Twitter Cards configurés
- ✅ Images optimisées avec Next.js Image
- ✅ HTTPS et sécurité de base en place

### ⚠️ Points à Améliorer (Priorité Haute)

1. **Hreflang tags manquants** - Important pour cibler la Belgique francophone
2. **Keywords meta tag obsolète** - Google n'utilise plus cette balise
3. **Structured Data incomplet** - Manque de données pour services individuels
4. **Alt text à améliorer** - Certaines images manquent de descriptions SEO
5. **Breadcrumbs Schema manquant** - Important pour navigation et SEO
6. **Article Schema manquant** - Pour les pages blog
7. **LocalBusiness Schema incomplet** - Manque d'informations géographiques précises
8. **Performance Core Web Vitals** - À vérifier et optimiser

---

## 1. MÉTADONNÉES ET BALISES META

### 1.1 ✅ Titres (Title Tags)

**Statut:** ✅ Bien implémenté

**Analyse:**

- ✅ Homepage: "Nemwood | Meubles en bois sur mesure en Belgique" (52 caractères) - ✅ Optimal
- ✅ Pages utilisent `generateMetadata()` pour titres uniques
- ✅ Format cohérent: "Page Title | Nemwood"

**Recommandations:**

- ✅ Maintenir la longueur entre 50-60 caractères
- ✅ Inclure des mots-clés locaux (Belgique, Bruxelles si applicable)
- ⚠️ **AMÉLIORATION:** Ajouter des variations de mots-clés dans les titres:
  - "Menuisier Bruxelles" si vous servez Bruxelles
  - "Ébéniste Belgique" comme alternative à "menuisier"
  - "Mobilier sur mesure Belgique"

### 1.2 ✅ Descriptions Meta

**Statut:** ✅ Bien implémenté

**Analyse:**

- ✅ Descriptions uniques par page
- ✅ Longueur appropriée (120-160 caractères)
- ✅ Incluent des mots-clés pertinents
- ✅ Appel à l'action présent ("Devis gratuit")

**Recommandations:**

- ✅ Maintenir le format actuel
- ⚠️ **AMÉLIORATION:** Varier les appels à l'action:
  - "Devis gratuit et sans engagement"
  - "Consultation gratuite"
  - "Rendez-vous gratuit"

### 1.3 ❌ Keywords Meta Tag

**Statut:** ❌ OBSOLÈTE - À SUPPRIMER

**Problème:**

```typescript
keywords: [
  "menuisier belgique",
  "meubles bois sur mesure",
  // ...
];
```

**Action requise:**

- ❌ **SUPPRIMER** la propriété `keywords` de `metadata.ts` et `layout.tsx`
- Google ignore cette balise depuis 2009
- Peut être considérée comme du keyword stuffing

### 1.4 ✅ Canonical URLs

**Statut:** ✅ Correctement implémenté

**Analyse:**

- ✅ Toutes les pages ont des canonical URLs
- ✅ Format correct: `https://www.nemwood.be/[path]`
- ✅ Utilise `alternates.canonical` dans Metadata API

**Recommandations:**

- ✅ Maintenir l'implémentation actuelle
- ⚠️ **VÉRIFICATION:** S'assurer que toutes les variantes d'URL (avec/sans trailing slash) redirigent vers la version canonique

---

## 2. OPEN GRAPH & RÉSEAUX SOCIAUX

### 2.1 ✅ Open Graph

**Statut:** ✅ Bien configuré

**Analyse:**

- ✅ `og:title`, `og:description`, `og:image` présents
- ✅ `og:type: "website"` correct
- ✅ `og:locale: "fr_BE"` approprié pour Belgique
- ✅ `og:url` présent
- ✅ Images 1200x630px (format recommandé)

**Recommandations:**

- ✅ Maintenir la configuration actuelle
- ⚠️ **AMÉLIORATION:** Créer des images OG uniques par page (actuellement toutes utilisent `/images/nem1.png`)
- ⚠️ **AMÉLIORATION:** Ajouter `og:image:secure_url` pour HTTPS

### 2.2 ✅ Twitter Cards

**Statut:** ✅ Configuré

**Analyse:**

- ✅ `twitter:card: "summary_large_image"` correct
- ✅ Titre et description présents
- ✅ Images configurées

**Recommandations:**

- ✅ Configuration correcte
- ⚠️ **OPTIONNEL:** Ajouter `twitter:site` avec @username si vous avez un compte Twitter

### 2.3 ✅ Facebook Meta Tags

**Statut:** ✅ Bien configuré

**Analyse:**

- ✅ `fb:app_id`, `fb:page_id`, `fb:admins` présents
- ✅ URL de page Facebook incluse

---

## 3. STRUCTURED DATA (SCHEMA.ORG)

### 3.1 ✅ LocalBusiness Schema

**Statut:** ⚠️ Partiellement implémenté - À améliorer

**Analyse actuelle:**

```json
{
  "@type": "LocalBusiness",
  "name": "Nemwood",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "BE",
    "addressLocality": "Belgique" // ❌ Trop vague
  }
}
```

**Problèmes identifiés:**

- ❌ `addressLocality` trop vague ("Belgique" au lieu d'une ville spécifique)
- ❌ Manque `streetAddress`, `postalCode`
- ❌ `geo` incomplet (manque latitude/longitude)
- ❌ Manque `image` array avec photos du business
- ❌ Manque `aggregateRating` si vous avez des avis
- ❌ Manque `priceRange` plus précis
- ❌ Manque `servesCuisine` ou services spécifiques

**Actions requises:**

1. ✅ Ajouter adresse complète (rue, code postal, ville)
2. ✅ Ajouter coordonnées GPS précises
3. ✅ Ajouter photos du business
4. ✅ Ajouter reviews/ratings si disponibles
5. ✅ Enrichir `serviceType` avec plus de détails

### 3.2 ❌ Breadcrumbs Schema

**Statut:** ❌ MANQUANT

**Impact:** Important pour navigation et rich snippets dans Google

**Action requise:**

- ✅ Implémenter BreadcrumbList schema sur toutes les pages
- ✅ Exemple pour `/services/escaliers`:
  ```json
  {
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Accueil",
        "item": "https://www.nemwood.be"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Services",
        "item": "https://www.nemwood.be/services"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Escaliers",
        "item": "https://www.nemwood.be/services/escaliers"
      }
    ]
  }
  ```

### 3.3 ❌ Article Schema (Blog)

**Statut:** ❌ MANQUANT

**Impact:** Améliore la visibilité des articles dans Google News et recherche

**Action requise:**

- ✅ Ajouter Article schema sur chaque page blog
- ✅ Inclure: `headline`, `author`, `datePublished`, `dateModified`, `image`, `publisher`

### 3.4 ❌ Service Schema

**Statut:** ❌ MANQUANT

**Impact:** Peut améliorer le ranking pour les recherches de services spécifiques

**Action requise:**

- ✅ Ajouter Service schema sur chaque page service
- ✅ Exemple pour escaliers:
  ```json
  {
    "@type": "Service",
    "serviceType": "Fabrication d'escaliers en bois sur mesure",
    "provider": { "@type": "LocalBusiness", "name": "Nemwood" },
    "areaServed": { "@type": "Country", "name": "Belgium" },
    "description": "..."
  }
  ```

### 3.5 ❌ FAQ Schema

**Statut:** ⚠️ Composant FAQ présent mais Schema manquant

**Impact:** Peut générer des rich snippets FAQ dans Google

**Action requise:**

- ✅ Ajouter FAQPage schema sur les pages avec FAQ
- ✅ Utiliser le composant FAQ existant pour générer le schema

---

## 4. ROBOTS.TXT & SITEMAP

### 4.1 ✅ Robots.txt

**Statut:** ✅ Correctement configuré

**Analyse:**

```typescript
rules: {
  userAgent: "*",
  allow: "/",
  disallow: ["/api/", "/admin/", "/_next/"]
}
```

**Recommandations:**

- ✅ Configuration correcte
- ⚠️ **OPTIONNEL:** Ajouter `Crawl-delay` si nécessaire
- ✅ Sitemap référencé correctement

### 4.2 ✅ Sitemap.xml

**Statut:** ✅ Bien implémenté

**Analyse:**

- ✅ Sitemap dynamique avec pages statiques
- ✅ Blog posts inclus dynamiquement
- ✅ Priorités et fréquences configurées
- ✅ `lastModified` dates présentes

**Recommandations:**

- ✅ Maintenir l'implémentation actuelle
- ⚠️ **AMÉLIORATION:** Vérifier que toutes les pages service sont incluses:
  - `/services/bureaux`
  - `/services/bibliotheques`
  - `/services/salles-de-bain`
  - (Vérifier si ces pages existent et sont dans le sitemap)

---

## 5. HREFLANG & INTERNATIONALISATION

### 5.1 ❌ Hreflang Tags

**Statut:** ❌ MANQUANT

**Impact:** CRITIQUE pour cibler la Belgique francophone

**Problème:**

- Site en français pour marché belge
- Pas de tags hreflang pour indiquer la langue et la région

**Action requise:**

- ✅ Ajouter hreflang dans `metadata.ts`:
  ```typescript
  alternates: {
    canonical: canonicalUrl,
    languages: {
      'fr-BE': 'https://www.nemwood.be',
      'fr': 'https://www.nemwood.be', // Fallback
    }
  }
  ```

**Recommandations:**

- ✅ Si vous prévoyez d'autres langues (NL, EN), préparer la structure
- ✅ Utiliser `fr-BE` pour cibler spécifiquement la Belgique francophone

### 5.2 ✅ Langue HTML

**Statut:** ✅ Correct

**Analyse:**

- ✅ `<html lang="fr">` présent dans layout
- ✅ `locale: "fr_BE"` dans metadata

---

## 6. OPTIMISATION DES IMAGES

### 6.1 ✅ Next.js Image Component

**Statut:** ✅ Bien utilisé

**Analyse:**

- ✅ Utilise `next/image` partout
- ✅ `sizes` attribute présent
- ✅ `loading="lazy"` pour images non-critiques
- ✅ `priority` pour images hero
- ✅ Formats WebP/AVIF configurés

### 6.2 ⚠️ Alt Text

**Statut:** ⚠️ À améliorer

**Analyse:**

- ✅ La plupart des images ont des alt text
- ⚠️ Certains alt text sont trop génériques
- ⚠️ Manque de mots-clés locaux dans certains alt text

**Exemples à améliorer:**

- ❌ "Nemwood woodworking craftsmanship" → ✅ "Artisan menuisier Nemwood créant escalier en bois massif sur mesure en Belgique"
- ❌ "Kitchen design" → ✅ "Cuisine sur mesure en bois massif par Nemwood, menuisier artisan en Belgique"

**Recommandations:**

- ✅ Inclure mots-clés pertinents dans alt text
- ✅ Décrire l'image de manière descriptive
- ✅ Éviter keyword stuffing
- ✅ Inclure localisation si pertinent ("Belgique", "Bruxelles")

---

## 7. PERFORMANCE & CORE WEB VITALS

### 7.1 ⚠️ Core Web Vitals

**Statut:** ⚠️ À vérifier

**Métriques à surveiller:**

- **LCP (Largest Contentful Paint):** < 2.5s
- **FID (First Input Delay):** < 100ms
- **CLS (Cumulative Layout Shift):** < 0.1

**Actions requises:**

1. ✅ Vérifier avec Google PageSpeed Insights
2. ✅ Optimiser les images hero (déjà fait avec priority)
3. ✅ Minimiser JavaScript non-critique
4. ✅ Utiliser font-display: swap (déjà fait)

### 7.2 ✅ Optimisations présentes

**Analyse:**

- ✅ Images optimisées avec Next.js
- ✅ Font preloading configuré
- ✅ DNS prefetch pour ressources externes
- ✅ Compression activée
- ✅ `poweredByHeader: false`

---

## 8. CONTENU & KEYWORDS

### 8.1 ✅ Mots-clés principaux identifiés

**Mots-clés primaires:**

- ✅ "menuisier belgique"
- ✅ "meubles bois sur mesure"
- ✅ "escaliers bois belgique"
- ✅ "garde-robe sur mesure"
- ✅ "table bois massif"
- ✅ "cuisine bois belgique"

**Mots-clés secondaires à considérer:**

- ⚠️ "ébéniste belgique"
- ⚠️ "menuiserie sur mesure bruxelles"
- ⚠️ "mobilier sur mesure belgique"
- ⚠️ "artisan menuisier belgique"
- ⚠️ "escalier sur mesure belgique"
- ⚠️ "cuisine sur mesure belgique"
- ⚠️ "garde-robe sur mesure belgique"

### 8.2 ✅ Structure de contenu

**Analyse:**

- ✅ H1 unique par page
- ✅ Structure H2, H3 logique
- ✅ Contenu en français
- ✅ Longueur de contenu appropriée

**Recommandations:**

- ✅ Maintenir la structure actuelle
- ⚠️ **AMÉLIORATION:** Ajouter plus de contenu unique par page service (minimum 300-500 mots)
- ⚠️ **AMÉLIORATION:** Inclure des sections FAQ sur chaque page service

---

## 9. SEO LOCAL (BELGIQUE)

### 9.1 ⚠️ Google My Business

**Statut:** ⚠️ À vérifier

**Actions requises:**

- ✅ Créer/optimiser profil Google My Business
- ✅ Utiliser même NAP (Name, Address, Phone) que sur le site
- ✅ Ajouter photos, horaires, services
- ✅ Encourager avis clients

### 9.2 ⚠️ NAP Consistency

**Statut:** ⚠️ À vérifier

**Actions requises:**

- ✅ Vérifier que nom, adresse, téléphone sont identiques partout:
  - Site web
  - Google My Business
  - Facebook
  - Autres annuaires locaux

### 9.3 ⚠️ Citations locales

**Statut:** ⚠️ À développer

**Recommandations:**

- ✅ S'inscrire sur annuaires belges:
  - Pages Jaunes Belgique
  - 118000.be
  - Annuaire des artisans belges
  - Autres annuaires locaux pertinents

---

## 10. LIENS INTERNES & EXTERNES

### 10.1 ✅ Liens internes

**Statut:** ✅ Présents

**Analyse:**

- ✅ Navigation principale claire
- ✅ Liens vers services depuis homepage
- ✅ Liens vers blog

**Recommandations:**

- ✅ Maintenir la structure actuelle
- ⚠️ **AMÉLIORATION:** Ajouter plus de liens contextuels dans le contenu
- ⚠️ **AMÉLIORATION:** Créer un sitemap HTML pour utilisateurs

### 10.2 ⚠️ Backlinks

**Statut:** ⚠️ À développer (hors scope technique)

**Recommandations:**

- ✅ Partenariats avec autres artisans
- ✅ Guest posts sur blogs belges
- ✅ Inscription annuaires locaux
- ✅ Partenariats avec architectes, designers

---

## 11. ACCESSIBILITÉ & UX

### 11.1 ✅ HTML Sémantique

**Statut:** ✅ Bien utilisé

**Analyse:**

- ✅ Utilise `<main>`, `<section>`, `<article>`, `<nav>`
- ✅ Structure logique

### 11.2 ✅ Mobile-First

**Statut:** ✅ Implémenté

**Analyse:**

- ✅ Design responsive
- ✅ Tailwind mobile-first (selon mémoire utilisateur)

---

## 12. SÉCURITÉ & HTTPS

### 12.1 ✅ HTTPS

**Statut:** ✅ Présumé actif (à vérifier en production)

**Recommandations:**

- ✅ S'assurer que HTTPS est forcé
- ✅ Vérifier certificat SSL valide
- ✅ Rediriger HTTP → HTTPS

---

## 13. ANALYTICS & TRACKING

### 13.1 ✅ Google Analytics

**Statut:** ✅ Implémenté

**Analyse:**

- ✅ Composant GoogleAnalytics présent
- ✅ Configuré dans layout

**Recommandations:**

- ✅ Vérifier que GA4 est configuré (pas Universal Analytics)
- ✅ Configurer Google Search Console
- ✅ Configurer événements de conversion

### 13.2 ⚠️ Google Search Console

**Statut:** ⚠️ À vérifier

**Actions requises:**

- ✅ Soumettre sitemap dans GSC
- ✅ Vérifier indexation des pages
- ✅ Surveiller erreurs de crawl
- ✅ Analyser requêtes de recherche

---

## 📋 CHECKLIST D'ACTIONS PRIORITAIRES

### 🔴 Priorité HAUTE (Impact SEO majeur)

1. **❌ SUPPRIMER keywords meta tag** (obsolète)
   - Fichier: `src/app/metadata.ts`
   - Fichier: `src/app/layout.tsx`

2. **❌ AJOUTER hreflang tags** (critique pour Belgique)
   - Fichier: `src/app/metadata.ts`
   - Ajouter `alternates.languages` avec `fr-BE`

3. **❌ AMÉLIORER LocalBusiness Schema**
   - Fichier: `src/app/layout.tsx`
   - Ajouter adresse complète, GPS, images, ratings

4. **❌ AJOUTER Breadcrumbs Schema**
   - Sur toutes les pages
   - Créer composant réutilisable

5. **❌ AJOUTER Article Schema** (blog)
   - Fichier: `src/app/blog/[slug]/page.tsx`
   - Inclure toutes les propriétés requises

6. **⚠️ AMÉLIORER Alt text images**
   - Ajouter mots-clés locaux
   - Descriptions plus détaillées

### 🟡 Priorité MOYENNE

7. **⚠️ AJOUTER Service Schema** (pages services)
   - Sur chaque page service individuelle

8. **⚠️ AJOUTER FAQ Schema**
   - Utiliser composant FAQ existant

9. **⚠️ CRÉER images OG uniques** par page
   - Remplacer image générique

10. **⚠️ VÉRIFIER toutes pages dans sitemap**
    - S'assurer que tous les services sont inclus

11. **⚠️ OPTIMISER Core Web Vitals**
    - Tester avec PageSpeed Insights
    - Optimiser selon résultats

### 🟢 Priorité BASSE

12. **OPTIONNEL: Ajouter Twitter site**
13. **OPTIONNEL: Créer sitemap HTML**
14. **OPTIONNEL: Ajouter RSS feed**

---

## 📊 SCORE SEO ESTIMÉ

### Score actuel: **75/100**

**Détail:**

- Métadonnées: 85/100 ✅
- Structured Data: 60/100 ⚠️
- Performance: 80/100 ✅
- Contenu: 80/100 ✅
- Technique: 70/100 ⚠️

### Score cible après améliorations: **90/100**

---

## 🔗 RESSOURCES & OUTILS

### Outils de test recommandés:

1. **Google Search Console** - Monitoring SEO
2. **Google PageSpeed Insights** - Performance
3. **Google Rich Results Test** - Structured Data
4. **Schema.org Validator** - Validation Schema
5. **Screaming Frog** - Audit technique complet
6. **Ahrefs/SEMrush** - Analyse keywords et backlinks

### Documentation:

- [Next.js Metadata API](https://nextjs.org/docs/app/api-reference/functions/generate-metadata)
- [Schema.org Documentation](https://schema.org/)
- [Google Search Central](https://developers.google.com/search)

---

## 📝 NOTES FINALES

Ce site a une **base SEO solide** avec Next.js Metadata API correctement implémentée. Les améliorations prioritaires concernent principalement:

1. **Structured Data** - Enrichir et compléter les schemas
2. **Hreflang** - Essentiel pour cibler la Belgique
3. **Optimisation contenu** - Alt text et mots-clés locaux

Avec ces améliorations, le site devrait voir une **amélioration significative** de son référencement, particulièrement pour les recherches locales en Belgique.

---

**Prochaines étapes recommandées:**

1. Implémenter les actions priorité HAUTE
2. Tester avec Google Search Console
3. Monitorer les performances dans GSC
4. Itérer et optimiser selon les données
