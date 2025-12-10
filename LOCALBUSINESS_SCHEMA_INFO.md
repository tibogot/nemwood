# LocalBusiness Schema - Informations à compléter

Le LocalBusiness Schema a été amélioré pour un meilleur SEO. Voici les informations que vous devez compléter :

## 📍 Adresse complète (OBLIGATOIRE pour SEO local)

Dans `src/app/layout.tsx`, ligne ~140, complétez l'objet `address` :

```typescript
address: {
  "@type": "PostalAddress",
  streetAddress: "Votre rue et numéro", // Ex: "Rue de la Menuiserie 123"
  addressLocality: "Votre ville", // Ex: "Bruxelles", "Liège", "Anvers"
  postalCode: "Votre code postal", // Ex: "1000", "4000"
  addressRegion: "Région si applicable", // Ex: "Bruxelles-Capitale" (optionnel)
  addressCountry: "BE",
},
```

**Pourquoi c'est important :**

- Google utilise l'adresse complète pour le référencement local
- Améliore la visibilité dans Google Maps et recherches locales
- Nécessaire pour Google My Business

## 🗺️ Coordonnées GPS (RECOMMANDÉ)

Dans `src/app/layout.tsx`, ligne ~150, complétez l'objet `geo` :

```typescript
geo: {
  "@type": "GeoCoordinates",
  latitude: "50.8503", // Latitude de votre atelier
  longitude: "4.3517", // Longitude de votre atelier
  addressCountry: "BE",
},
```

**Comment obtenir les coordonnées GPS :**

1. Ouvrez Google Maps
2. Recherchez votre adresse
3. Clic droit sur l'emplacement → "Coordonnées"
4. Copiez latitude et longitude

**Pourquoi c'est important :**

- Permet à Google de localiser précisément votre business
- Améliore le référencement local
- Nécessaire pour les rich snippets avec carte

## ⭐ Avis clients (OPTIONNEL mais recommandé)

Si vous avez des avis clients (Google, Facebook, etc.), décommentez et complétez :

```typescript
aggregateRating: {
  "@type": "AggregateRating",
  ratingValue: "4.8", // Note moyenne (sur 5)
  reviewCount: "25", // Nombre total d'avis
},
```

**Pourquoi c'est important :**

- Affiche les étoiles dans les résultats Google
- Augmente le taux de clic (CTR)
- Améliore la confiance des clients

## 📸 Images (DÉJÀ CONFIGURÉ)

Les images sont déjà configurées avec vos images existantes. Vous pouvez en ajouter d'autres si vous avez des photos de votre atelier :

```typescript
image: [
  "https://www.nemwood.be/images/nem1.png",
  "https://www.nemwood.be/images/atelier-1.webp",
  "https://www.nemwood.be/images/hero-nemwood.webp",
  // Ajoutez d'autres URLs d'images si nécessaire
],
```

## ✅ Ce qui est déjà configuré

- ✅ Nom du business
- ✅ Description
- ✅ Téléphone
- ✅ Email
- ✅ URL du site
- ✅ Horaires d'ouverture
- ✅ Types de services (enrichis)
- ✅ Zone de service (Belgique + Bruxelles)
- ✅ Réseaux sociaux
- ✅ Catalogue de services

## 🔍 Vérification

Après avoir complété les informations :

1. **Testez le schema** : https://validator.schema.org/
2. **Testez avec Google** : https://search.google.com/test/rich-results
3. **Vérifiez dans Google Search Console** après soumission du sitemap

## 📝 Notes importantes

- L'adresse doit être **identique** à celle de Google My Business
- Les coordonnées GPS doivent correspondre à l'adresse
- Mettez à jour le schema si vous déménagez
- Les avis doivent être authentiques (pas de faux avis)

---

**Prochaine étape :** Complétez l'adresse et les coordonnées GPS, puis testez le schema avec les outils ci-dessus.
