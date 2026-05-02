import { SectionContainer } from "@/components/layout/SectionContainer";
import { Heading } from "@/components/ui/Heading";
import { trustItems } from "@/config/sections";

export function TrustSection() {
  return (
    <SectionContainer id="confianca">
      <div className="space-y-7">
        <Heading>Elementos de confianca para sua visita</Heading>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {trustItems.map((item) => (
            <article
              key={item}
              className="rounded-2xl border border-brand-gold/45 bg-gradient-to-b from-white to-brand-light/35 p-5 shadow-[0_12px_30px_rgba(31,50,71,0.08)] transition duration-200 hover:-translate-y-0.5"
            >
              <p className="text-[15px] leading-relaxed text-brand-navy">{item}</p>
            </article>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
