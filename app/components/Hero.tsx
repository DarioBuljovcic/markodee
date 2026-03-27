'use client';

import { useEffect, useState } from 'react';

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const heroName = 'MARKODEE';

  return (
    <section className="relative w-full h-screen flex flex-col items-center justify-center border-b border-foreground px-4 text-center overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex justify-center">
        {heroName.split('').map((letter, i) => (
          <span
            key={i}
            className={`text-[12vw] leading-none font-sans font-bold tracking-tighter inline-block transition-all duration-1000 ease-out ${mounted
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-[100px]'
              }`}
            style={{ transitionDelay: `${i * 100}ms` }}
          >
            {letter}
          </span>
        ))}
      </div>

      <div
        className={`absolute bottom-12 md:bottom-20 w-full px-6 flex justify-between tracking-widest text-xs md:text-sm transition-all duration-1000 ease-out delay-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
      >
        <span>SUBOTICA</span>
        <span>AFRO-HOUSE</span>
        <span>PRODUCENT</span>
      </div>
    </section>
  );
}
