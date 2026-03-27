import AnimatedSection from './AnimatedSection';

export default function Mixes() {
  return (
    <section id="mixes" className="w-full border-b border-foreground">
      <div className="p-6 md:p-12 lg:p-24 border-b border-foreground">
        <h2 className="text-4xl md:text-6xl font-sans font-bold tracking-tighter">
          NAJNOVIJI MIKSEVI
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Mix 1 */}
        <div className="p-6 md:p-12 border-b lg:border-b-0 lg:border-r border-foreground flex flex-col justify-center">
          <AnimatedSection>
            <div className="mb-4 text-sm font-bold tracking-widest opacity-80 uppercase text-[#ff2d2d]">
              Nikolija x Inas - Viski (DJ Marko Dee Tech House Edit)
            </div>
            {/* Minimal placeholder for audio player/embed */}
            <div className="w-full h-[166px] border border-foreground bg-black overflow-hidden shadow-[4px_4px_0px_#ff2d2d]">
              <iframe
                width="100%"
                height="166"
                scrolling="no"
                frameBorder="no"
                allow="autoplay"
                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/2264604425&color=%23ff2d2d&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false"
              ></iframe>
            </div>
          </AnimatedSection>
        </div>

        {/* Mix 2 */}
        <div className="p-6 md:p-12 flex flex-col justify-center">
          <AnimatedSection delay={200}>
            <div className="mb-4 text-sm font-bold tracking-widest opacity-80 uppercase text-[#ff2d2d]">
              Jala Brat x Buba Corelli - Tec-9 (DJ Marko Dee Freak Out Edit)
            </div>
            {/* Minimal placeholder for audio player/embed */}
            <div className="w-full h-[166px] border border-foreground bg-black overflow-hidden shadow-[4px_4px_0px_#ff2d2d]">
              <iframe
                width="100%"
                height="166"
                scrolling="no"
                frameBorder="no"
                allow="autoplay"
                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/2217497666&color=%23ff2d2d&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false"
              ></iframe>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
