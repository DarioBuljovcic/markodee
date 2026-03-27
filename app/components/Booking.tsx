import AnimatedSection from './AnimatedSection';

export default function Booking() {
  return (
    <section id="booking" className="w-full px-6 py-24 md:py-48 text-center border-b border-foreground items-center flex flex-col justify-center">
      <AnimatedSection>
        <p className="text-sm md:text-lg mb-8 tracking-widest opacity-80 uppercase">
          ZA SVE UPITE I REZERVACIJE
        </p>
        <div className="flex flex-col gap-8 items-center">
          <a
            href="mailto:deejaymarkodee@gmail.com"
            className="inline-block font-sans font-bold text-2xl md:text-5xl lg:text-6xl tracking-tighter 
                       hover:text-accent transition-colors duration-300 relative group"
          >
            DEEJAYMARKODEE@GMAIL.COM
            <div className="absolute -bottom-4 left-0 w-0 h-1 md:h-2 bg-accent group-hover:w-full transition-all duration-500 ease-out" />
          </a>

          <a
            href="tel:+381691473933"
            className="inline-block font-sans font-bold text-3xl md:text-5xl lg:text-7xl tracking-tighter 
                       hover:text-accent transition-colors duration-300 relative group"
          >
            +381 69 1473933
            <div className="absolute -bottom-2 md:-bottom-4 left-0 w-0 h-1 bg-accent group-hover:w-full transition-all duration-500 ease-out" />
          </a>
        </div>
      </AnimatedSection>
    </section>
  );
}
