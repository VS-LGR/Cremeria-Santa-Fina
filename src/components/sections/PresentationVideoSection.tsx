import { SectionContainer } from "@/components/layout/SectionContainer";
import { Heading } from "@/components/ui/Heading";
import { presentationVideoContent } from "@/config/sections";

export function PresentationVideoSection() {
  return (
    <SectionContainer className="bg-brand-navy-deep text-brand-light">
      <div className="grid items-center gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
        <div className="space-y-4 lg:space-y-5">
          <Heading className="text-brand-light">{presentationVideoContent.title}</Heading>
          <p className="max-w-xl text-base leading-relaxed text-brand-light/90">
            {presentationVideoContent.description}
          </p>
        </div>
        <div className="overflow-hidden rounded-[28px] border border-brand-gold/55 bg-black/40 shadow-[0_18px_38px_rgba(8,13,23,0.35)]">
          <video
            className="aspect-video h-full w-full object-cover"
            src={presentationVideoContent.videoSrc}
            controls
            preload="metadata"
            playsInline
          >
            Seu navegador nao suporta o elemento de video.
          </video>
        </div>
      </div>
    </SectionContainer>
  );
}
