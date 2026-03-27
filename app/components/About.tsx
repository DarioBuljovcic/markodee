import AnimatedSection from './AnimatedSection';
import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="w-full border-b border-foreground">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 min-h-[50vh]">
        {/* Left Column */}
        <div className="relative border-b md:border-b-0 md:border-r border-foreground p-6 md:p-12 lg:p-24 flex items-center justify-center md:items-start md:justify-start bg-background h-[50vh] md:h-auto lg:col-span-1">
          <Image
            src="/Marko.png"
            alt="Markodee DJ"
            width={500}
            height={500}
            loading="eager"
            className="absolute inset-0 w-full h-full object-cover object-top grayscale opacity-30"
          />
          <AnimatedSection>
            <h2 className="text-4xl md:text-6xl lg:text-8xl font-sans font-bold tracking-tighter">
              EST. <br className="hidden md:block" />
              2018
            </h2>
          </AnimatedSection>
        </div>

        {/* Right Column */}
        <div className="p-6 md:p-12 lg:p-24 flex items-center bg-background lg:col-span-2">
          <AnimatedSection delay={200} className="max-w-xl">
            <p className="text-lg md:text-xl lg:text-2xl font-sans font-medium leading-tight tracking-tight">
              Zvuk koji ne prašta greške. Ja sam Marko Dee DJ i producent iz Subotice, fokusiran isključivo na afro-house i tehno. Ritam i teški basovi. Ništa više, ništa manje. Bez kompromisa. Ako tražiš pravu energiju za klub ili privatni događaj u Srbiji na pravom si mestu.
            </p>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
