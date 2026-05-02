import { SectionContainer } from "@/components/layout/SectionContainer";
import { siteConfig } from "@/config/site";

export function FooterSection() {
  return (
    <SectionContainer className="bg-brand-navy py-10 text-brand-light">
      <div className="flex flex-col gap-3 text-sm sm:flex-row sm:items-center sm:justify-between sm:gap-6">
        <p className="font-semibold tracking-wide">{siteConfig.brandName}</p>
        <p className="max-w-md text-brand-light/85">{siteConfig.tagline}</p>
        <a
          href={siteConfig.instagramUrl}
          target="_blank"
          rel="noreferrer"
          className="underline underline-offset-4 transition hover:text-white"
        >
          Instagram oficial
        </a>
      </div>
    </SectionContainer>
  );
}
