import { ArrowRight } from "lucide-react";

export default function UeberUnsTeaser() {
  return (
    <section
      id="ueber-uns"
      className="relative w-full min-h-[480px] lg:min-h-[560px] flex items-center justify-center overflow-hidden"
    >
      {/* Hintergrundbild: Handschlag / Partnerschaft */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1600&q=80')",
        }}
      />
      {/* Dunkler Overlay */}
      <div className="absolute inset-0 bg-[#1A1A1A]/72" />

      {/* Gelber Akzentbalken oben */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-[#F5C800]" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <p className="font-[family-name:var(--font-inter)] text-[#F5C800] text-xs tracking-widest uppercase mb-4">
          Über uns
        </p>
        <h2 className="font-[family-name:var(--font-oswald)] font-bold text-white text-3xl md:text-4xl lg:text-5xl uppercase tracking-wide leading-tight mb-6">
          Bereit für eine starke<br />Partnerschaft?
        </h2>
        <p className="font-[family-name:var(--font-inter)] text-white/75 text-base lg:text-lg leading-relaxed mb-10 max-w-xl mx-auto">
          Seit über 20 Jahren versorgen wir Gastronomiebetriebe in der Region
          mit frischen Produkten, fairen Preisen und persönlicher Beratung –
          alles aus einer Hand.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/kontakt"
            className="inline-flex items-center justify-center gap-2 bg-[#CC0000] text-white font-[family-name:var(--font-oswald)] font-semibold text-sm tracking-widest uppercase px-8 py-3.5 hover:bg-[#F5C800] hover:text-[#1A1A1A] transition-all duration-300"
          >
            Jetzt Kontakt aufnehmen <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="/ueber-uns"
            className="inline-flex items-center justify-center gap-2 border-2 border-white text-white font-[family-name:var(--font-oswald)] font-semibold text-sm tracking-widest uppercase px-8 py-3 hover:bg-white hover:text-[#1A1A1A] transition-all duration-300"
          >
            Mehr über uns
          </a>
        </div>
      </div>
    </section>
  );
}
