import { SectionContainer } from "@/components/layout/SectionContainer";
import { Heading } from "@/components/ui/Heading";
import { ImageCard } from "@/components/ui/ImageCard";
import { siteConfig } from "@/config/site";
import { galleryItems, socialProofContent } from "@/config/sections";

export function SocialProofSection() {
  return (
    <SectionContainer className="bg-gradient-to-b from-brand-navy to-brand-navy-deep text-brand-light">
      <div className="space-y-9">
        <Heading className="text-white [text-shadow:0_3px_20px_rgba(8,14,24,0.58)]">{socialProofContent.title}</Heading>
        <ul className="grid gap-4 text-sm leading-relaxed sm:grid-cols-2 lg:grid-cols-3">
          {socialProofContent.points.map((point) => (
            <li
              key={point}
              className="rounded-2xl border border-brand-gold/45 bg-gradient-to-b from-brand-navy-deep/95 to-brand-navy/90 p-5 shadow-[0_12px_32px_rgba(8,14,24,0.25)] backdrop-blur-sm transition duration-200 hover:-translate-y-0.5"
            >
              <p className="text-[15px] leading-relaxed text-brand-light">{point}</p>
            </li>
          ))}
        </ul>
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {galleryItems.map((item) => (
            <ImageCard key={item.title} image={item.image} alt={item.alt} title={item.title} />
          ))}
        </div>
        <a
          href={siteConfig.instagramUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex text-sm font-semibold tracking-wide text-brand-cream underline underline-offset-4 hover:text-white"
        >
          Ver perfil oficial no Instagram
        </a>
      </div>
    </SectionContainer>
  );
}
