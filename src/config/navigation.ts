import { siteConfig } from "@/config/site";

export const navigationLinks = [
  { label: "Historia", href: "#historia" },
  { label: "Produtos", href: "#produtos" },
  { label: "Confianca", href: "#confianca" },
  { label: "Localizacao", href: "#localizacao" },
] as const;

export const ctaLinks = {
  primary: {
    label: "Ver cardapio",
    href: siteConfig.menuUrl,
  },
  secondary: {
    label: "Como chegar",
    href: siteConfig.mapsUrl,
  },
} as const;
