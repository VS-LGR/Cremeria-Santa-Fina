import { SectionContainer } from "@/components/layout/SectionContainer";
import { Button } from "@/components/ui/Button";
import { Heading } from "@/components/ui/Heading";
import { InfoItem } from "@/components/ui/InfoItem";
import { siteConfig } from "@/config/site";

export function LocationSection() {
  return (
    <SectionContainer id="localizacao" className="bg-white">
      <div className="grid gap-8 lg:grid-cols-[1fr_1.05fr] lg:gap-12">
        <div className="space-y-4 lg:space-y-5">
          <Heading>Visite a Cremeria Santa Fina</Heading>
          <p className="max-w-xl text-base leading-relaxed text-brand-navy/90">
            Estamos prontos para receber voce com um ambiente sofisticado e acolhedor.
          </p>
          <Button href={siteConfig.mapsUrl} target="_blank" rel="noreferrer" className="w-full sm:w-auto">
            Como chegar
          </Button>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
          <InfoItem label="Endereco" value={siteConfig.address} />
          <InfoItem label="Horario" value={siteConfig.openingHours} />
          <InfoItem label="Cidade" value={`${siteConfig.city} - ${siteConfig.region}`} />
        </div>
      </div>
    </SectionContainer>
  );
}
