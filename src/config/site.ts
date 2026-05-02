export const siteConfig = {
  brandName: "Cremeria Santa Fina",
  language: "pt-BR",
  locale: "pt_BR",
  city: "Sorocaba",
  region: "SP",
  country: "Brasil",
  tagline: "Cremeria italiana artesanal com pães, doces e gelato.",
  valueProposition:
    "A tradição da gastronomia italiana em uma experiência acolhedora e refinada.",
  address: "Shopping Olga - Loja 26, Av. Sao Paulo 4525",
  openingHours: "Segunda a Sabado, das 11:00 as 20:00",
  instagramUrl: "https://www.instagram.com/cremeriasantafina",
  instagramPostUrl: "https://www.instagram.com/p/DVzYdl6EYUB/",
  facebookUrl: "https://www.facebook.com/cremeriasantafina",
  menuUrl: "https://www.instagram.com/cremeriasantafina",
  mapsUrl: "https://maps.google.com/?q=Shopping+Olga+Loja+26+Sorocaba",
} as const;

export type SiteConfig = typeof siteConfig;
