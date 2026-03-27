export default function Marquee() {
  const repeatingText = Array(10).fill("MARKODEE · DJ & PRODUCER · AFRO HOUSE · TECHNO · SUBOTICA · SERBIA · ").join("");

  return (
    <section className="w-full overflow-hidden border-b border-foreground bg-accent text-black py-3 md:py-4">
      <div className="whitespace-nowrap inline-block animate-marquee font-bold tracking-widest text-sm md:text-base">
        <span>{repeatingText}</span>
        <span>{repeatingText}</span>
      </div>
    </section>
  );
}
