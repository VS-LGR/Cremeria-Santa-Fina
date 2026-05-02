import { SectionContainer } from "@/components/layout/SectionContainer";
import { Heading } from "@/components/ui/Heading";
import { productHighlights } from "@/config/sections";

export function ProductsSection() {
  return (
    <SectionContainer id="produtos" className="bg-white">
      <div className="space-y-8">
        <Heading>Nossos sabores autorais</Heading>
        <div className="grid gap-4 sm:grid-cols-2 lg:gap-5">
          {productHighlights.map((item) => (
            <article
              key={item.title}
              className="rounded-3xl border border-brand-gold/30 bg-gradient-to-b from-white to-brand-light/35 p-5 shadow-[0_10px_28px_rgba(31,50,71,0.06)] sm:p-6"
            >
              <h3 className="font-display text-2xl leading-tight text-brand-navy">{item.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-brand-navy/80">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
