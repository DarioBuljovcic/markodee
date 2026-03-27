'use client';

import { useEffect, useState } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight - 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Check initial scroll position

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 flex justify-between items-center p-4 md:p-6 bg-background/90 backdrop-blur-sm border-b transition-colors duration-300 ${
        scrolled ? 'border-accent' : 'border-foreground'
      }`}
    >
      <div className="font-sans font-bold text-xl md:text-2xl tracking-tight">
        MARKODEE
      </div>
      <a
        href="#booking"
        className="text-sm md:text-base font-bold px-5 py-2.5 border-2 border-accent text-accent hover:bg-accent hover:text-black transition-all duration-300"
      >
        [REZERVACIJA]
      </a>
    </nav>
  );
}
