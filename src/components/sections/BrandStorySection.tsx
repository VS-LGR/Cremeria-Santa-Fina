import Image from "next/image";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { Heading } from "@/components/ui/Heading";
import { brandStoryContent } from "@/config/sections";

export function BrandStorySection() {
  return (
    <SectionContainer id="historia">
      <div className="grid items-center gap-8 lg:grid-cols-[1fr_1.05fr] lg:gap-12">
        <div className="space-y-5 lg:space-y-6">
          <Heading>{brandStoryContent.title}</Heading>
          {brandStoryContent.paragraphs.map((paragraph) => (
            <p key={paragraph} className="max-w-xl text-base leading-relaxed text-brand-navy/90">
              {paragraph}
            </p>
          ))}
        </div>
        <div className="overflow-hidden rounded-[28px] border border-brand-gold/45 shadow-[0_16px_38px_rgba(28,37,56,0.14)]">
          <Image
            src={brandStoryContent.image}
            alt={brandStoryContent.imageAlt}
            className="aspect-[4/5] h-full w-full object-cover sm:aspect-[5/4]"
          />
        </div>
      </div>
    </SectionContainer>
  );
}
