import Image, { type StaticImageData } from "next/image";

type ImageCardProps = {
  image: StaticImageData;
  alt: string;
  title: string;
};

export function ImageCard({ image, alt, title }: ImageCardProps) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-brand-gold/35 bg-white shadow-[0_8px_30px_rgba(24,33,52,0.08)] transition hover:-translate-y-0.5">
      <Image className="aspect-[4/5] w-full object-cover transition duration-500 group-hover:scale-[1.02]" src={image} alt={alt} />
      <div className="p-5">
        <h3 className="font-display text-xl leading-tight text-brand-navy">{title}</h3>
      </div>
    </article>
  );
}
