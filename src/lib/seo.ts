import type { Metadata } from "next";
import { defaultOpenGraph } from "@/config/seo";
import { siteConfig } from "@/config/site";

export function getBaseUrl(): URL {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://cremeria-santa-fina.vercel.app";
  return new URL(siteUrl);
}

type BuildPageMetadataInput = {
  title: string;
  description: string;
  path?: string;
  keywords?: readonly string[];
};

export function buildPageMetadata(input: BuildPageMetadataInput): Metadata {
  const canonicalPath = input.path ?? "/";

  return {
    title: input.title,
    description: input.description,
    keywords: input.keywords ? [...input.keywords] : undefined,
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      ...defaultOpenGraph,
      title: input.title,
      description: input.description,
      url: canonicalPath,
    },
    twitter: {
      card: "summary_large_image",
      title: input.title,
      description: input.description,
    },
    metadataBase: getBaseUrl(),
    category: "food",
    applicationName: siteConfig.brandName,
  };
}
