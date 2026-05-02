import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const homeSeo = {
  title: "Cremeria Santa Fina | Cafeteria e Cremeria Italiana em Sorocaba",
  description:
    "Descubra a Cremeria Santa Fina: pães artesanais, doces italianos e gelato em uma experiencia sofisticada e acolhedora no Shopping Olga.",
  keywords: [
    "cremeria em sorocaba",
    "cafeteria italiana",
    "paes artesanais sorocaba",
    "doces italianos",
    "gelato artesanal",
    "shopping olga",
  ],
} as const;

export const defaultOpenGraph: Metadata["openGraph"] = {
  type: "website",
  locale: siteConfig.locale,
  siteName: siteConfig.brandName,
};
