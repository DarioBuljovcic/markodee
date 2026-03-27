import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import About from './components/About';
import Mixes from './components/Mixes';
import Events from './components/Events';
import Booking from './components/Booking';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between w-full max-w-[2000px] mx-auto bg-background text-foreground">
      <Navbar />
      <Hero />
      <Marquee />
      <About />
      <Marquee />
      <Mixes />
      <Events />
      <Booking />
      <Footer />
    </main>
  );
}
