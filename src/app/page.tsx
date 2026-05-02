import { PageShell } from "@/components/layout/PageShell";
import { BrandStorySection } from "@/components/sections/BrandStorySection";
import { FooterSection } from "@/components/sections/FooterSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { LocationSection } from "@/components/sections/LocationSection";
import { ProductsSection } from "@/components/sections/ProductsSection";
import { SocialProofSection } from "@/components/sections/SocialProofSection";
import { TrustSection } from "@/components/sections/TrustSection";
import { homeSeo } from "@/config/seo";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: homeSeo.title,
  description: homeSeo.description,
  keywords: homeSeo.keywords,
});

export default function Home() {
  return (
    <PageShell>
      <main>
        <HeroSection />
        <BrandStorySection />
        <ProductsSection />
        <SocialProofSection />
        <TrustSection />
        <LocationSection />
      </main>
      <FooterSection />
    </PageShell>
  );
}
