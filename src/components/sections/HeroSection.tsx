import Image from "next/image";
import logoWordmark from "@/assets/Logo.jpg";
import royalOverlayDesktop from "@/assets/aiCremaria_WebCremaria_Web.png";
import royalOverlayMobile from "@/assets/Mobile_OverlayCremaria_Web.png";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Heading } from "@/components/ui/Heading";
import { joinClasses } from "@/lib/format";
import { ctaLinks } from "@/config/navigation";
import { heroContent } from "@/config/sections";

const overlayFilterClass =
  "[filter:drop-shadow(16px_0_42px_rgba(14,21,34,0.58))_drop-shadow(-10px_0_28px_rgba(12,18,28,0.42))_drop-shadow(0_0_56px_rgba(20,29,42,0.38))_drop-shadow(0_0_2px_rgba(242,216,178,0.22))]";

export function HeroSection() {
  return (
    <SectionContainer
      className="relative flex min-h-[100svh] overflow-hidden py-10 text-brand-light sm:py-14 lg:py-16"
      contentClassName="flex w-full items-center"
    >
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="/videos/presentation.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      />
      <div className="absolute inset-0 bg-brand-navy-deep/65" />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/80 via-brand-navy/55 to-brand-navy/75" />
      <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_0_1px_rgba(242,216,178,0.18),inset_0_-70px_110px_rgba(18,27,42,0.46)]" />
      <Image
        src={royalOverlayMobile}
        alt=""
        aria-hidden
        sizes="100vw"
        priority
        className={joinClasses(
          "pointer-events-none absolute inset-0 h-full w-full object-cover object-left-top",
          overlayFilterClass,
          "md:hidden",
        )}
      />
      <Image
        src={royalOverlayDesktop}
        alt=""
        aria-hidden
        sizes="100vw"
        className={joinClasses(
          "pointer-events-none absolute inset-0 hidden h-full w-full object-cover md:object-[76%_0%] lg:object-right-top",
          overlayFilterClass,
          "md:block",
        )}
      />
      <div className="pointer-events-none absolute inset-0 shadow-[inset_-180px_-30px_150px_-24px_rgba(12,18,28,0.42),inset_-60px_0_90px_rgba(14,21,34,0.22),inset_120px_0_110px_rgba(16,26,40,0.12)]" />
      <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_0_2px_rgba(201,167,104,0.26),inset_0_0_58px_rgba(12,21,35,0.45),0_-8px_40px_rgba(8,13,22,0.35),0_18px_50px_rgba(8,14,22,0.4)]" />

      <div className="relative z-10 grid w-full items-center gap-7 max-lg:pt-1 sm:gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
        <div
          className={joinClasses(
            "w-full space-y-5 rounded-2xl sm:space-y-6 lg:space-y-7",
            "max-w-full md:max-w-[min(100%,30.5rem)] md:pr-6 lg:max-w-2xl lg:pr-0",
            "max-lg:bg-brand-navy-deep/35 max-lg:px-4 max-lg:py-5 max-lg:ring-1 max-lg:ring-brand-gold/20 max-lg:backdrop-blur-sm sm:max-lg:px-5",
          )}
        >
          <Badge>{heroContent.eyebrow}</Badge>
          <Heading as="h1" className="max-w-full text-white [text-shadow:0_2px_20px_rgba(8,14,24,0.6)]">
            {heroContent.title}
          </Heading>
          <p className="max-w-full text-[15px] leading-relaxed text-brand-light sm:text-lg [text-shadow:0_2px_14px_rgba(8,14,24,0.45)]">
            {heroContent.description}
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button href={ctaLinks.primary.href} target="_blank" rel="noreferrer" className="w-full sm:w-auto">
              {ctaLinks.primary.label}
            </Button>
            <Button
              href={ctaLinks.secondary.href}
              target="_blank"
              rel="noreferrer"
              variant="secondary"
              className="w-full sm:w-auto"
            >
              {ctaLinks.secondary.label}
            </Button>
          </div>
        </div>
        <div className="w-full max-w-[280px] justify-self-center self-start overflow-hidden rounded-[24px] border border-brand-gold/45 bg-brand-navy-deep/62 p-2 shadow-[0_16px_34px_rgba(12,20,34,0.5)] backdrop-blur-[2px] max-lg:mt-1 sm:max-w-[300px] sm:p-2.5 md:max-w-[320px] lg:max-w-[350px] lg:justify-self-end lg:self-start lg:-translate-y-10">
          <Image
            src={logoWordmark}
            alt="Identidade visual da Cremeria Santa Fina"
            className="mx-auto h-auto w-full rounded-2xl object-cover"
            priority
          />
        </div>
      </div>
    </SectionContainer>
  );
}
