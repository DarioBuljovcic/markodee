import AnimatedSection from './AnimatedSection';

export default function Events() {
  const events = [
    { venue: "TRESOR", city: "BERLIN", year: "2025" },
    { venue: "RSO", city: "BERLIN", year: "2024" },
    { venue: "FABRIC", city: "LONDON", year: "2024" },
    { venue: "BASSIANI", city: "TBILISI", year: "2023" },
    { venue: "FOLD", city: "LONDON", year: "2023" },
    { venue: "WAREHOUSE", city: "PARIS", year: "2022" },
  ];

  return (
    <section id="events" className="w-full border-b border-foreground">
      <div className="p-6 md:p-12 lg:p-24 border-b border-foreground bg-background">
        <h2 className="text-4xl md:text-6xl font-sans font-bold tracking-tighter">
          PROŠLI NASTUPI
        </h2>
      </div>

      <AnimatedSection>
        <div className="w-full overflow-x-auto">
          <table className="w-full text-left font-mono whitespace-nowrap">
            <thead className="border-b border-foreground bg-black text-foreground">
              <tr>
                <th className="p-4 md:px-12 md:py-6 border-r border-foreground">MESTO</th>
                <th className="p-4 md:px-12 md:py-6 border-r border-foreground">GRAD</th>
                <th className="p-4 md:px-12 md:py-6">GODINA</th>
              </tr>
            </thead>
            <tbody>
              {events.map((evt, idx) => (
                <tr 
                  key={idx} 
                  className="border-b border-foreground hover:bg-white/5 transition-colors duration-150"
                >
                  <td className="p-4 md:px-12 md:py-6 border-r border-foreground font-sans font-bold text-xl md:text-2xl">{evt.venue}</td>
                  <td className="p-4 md:px-12 md:py-6 border-r border-foreground">{evt.city}</td>
                  <td className="p-4 md:px-12 md:py-6 opacity-60 text-sm md:text-base">{evt.year}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </AnimatedSection>
    </section>
  );
}
