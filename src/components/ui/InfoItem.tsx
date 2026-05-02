type InfoItemProps = {
  label: string;
  value: string;
};

export function InfoItem({ label, value }: InfoItemProps) {
  return (
    <div className="rounded-2xl border border-brand-gold/35 bg-gradient-to-b from-white to-brand-light/25 p-4 shadow-[0_10px_25px_rgba(31,50,71,0.06)]">
      <p className="text-xs uppercase tracking-[0.18em] text-brand-navy/70">{label}</p>
      <p className="mt-2 text-sm font-medium leading-relaxed text-brand-navy">{value}</p>
    </div>
  );
}
