import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="w-full h-screen flex flex-col lg:flex-row overflow-hidden">

      {/* ── Linke Hauptkachel (65%) – Grosshandelslager / Frischware ── */}
      <div className="relative w-full lg:w-[65%] h-[60vh] lg:h-full overflow-hidden">
        {/* Bild: Professionelles Grosshandelslager mit Frischwaren-Regalen */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1578916171728-46686eac8d58?w=1600&q=85')",
          }}
        />
        {/* Dunkler Gradient von unten */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />

        {/* Text unten links */}
        <div className="absolute bottom-0 left-0 p-8 lg:p-14">
          {/* Gelber Akzentbalken */}
          <div className="w-14 h-1 bg-[#F5C800] mb-5" />
          <h1 className="font-[family-name:var(--font-oswald)] font-bold text-white text-4xl md:text-5xl lg:text-6xl leading-tight uppercase tracking-wide mb-3">
            Ihr Grosshandel<br />für die Gastronomie.
          </h1>
          <p className="font-[family-name:var(--font-inter)] text-white/80 text-base lg:text-lg font-light tracking-widest uppercase">
            Frisch.&nbsp;&nbsp;Schnell.&nbsp;&nbsp;Zuverlässig.
          </p>
        </div>
      </div>

      {/* ── Rechte Spalte (35%) – zwei Kacheln ── */}
      <div className="w-full lg:w-[35%] h-[40vh] lg:h-full flex flex-row lg:flex-col">

        {/* Obere Kachel: AFRA-Rot → Angebote */}
        <a
          href="/angebote"
          className="group relative flex-1 bg-[#CC0000] flex flex-col justify-center items-start p-8 lg:p-10 overflow-hidden hover:bg-[#A80000] transition-colors duration-300"
        >
          {/* Dekorative Kreise */}
          <div className="absolute -top-12 -right-12 w-44 h-44 rounded-full bg-[#F5C800]/10 group-hover:bg-[#F5C800]/20 transition-all duration-500" />
          <div className="absolute -bottom-8 -left-8 w-28 h-28 rounded-full bg-white/5" />

          <span className="relative font-[family-name:var(--font-inter)] text-white/60 text-xs tracking-widest uppercase mb-3">
            Diese Woche
          </span>
          <h2 className="relative font-[family-name:var(--font-oswald)] font-bold text-white text-2xl lg:text-3xl uppercase leading-tight mb-4">
            Angebote<br />der Woche
          </h2>
          <p className="relative font-[family-name:var(--font-inter)] text-white/75 text-sm mb-6">
            Jetzt die besten Preise sichern
          </p>
          <span className="relative inline-flex items-center gap-2 bg-[#F5C800] text-[#1A1A1A] font-[family-name:var(--font-oswald)] font-semibold text-sm tracking-widest uppercase px-5 py-2.5 group-hover:bg-white transition-colors duration-300">
            Zu den Angeboten
            <ArrowRight className="w-4 h-4" />
          </span>
        </a>

        {/* Untere Kachel: Lieferwagen / Logistik – thematisch passend */}
        <div className="group relative flex-1 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=900&q=85')",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/85 via-[#1A1A1A]/30 to-transparent" />
          <div className="absolute bottom-0 left-0 p-6 lg:p-8">
            <div className="w-8 h-0.5 bg-[#F5C800] mb-3" />
            <p className="font-[family-name:var(--font-oswald)] font-bold text-white text-lg lg:text-xl uppercase leading-tight">
              Heute bestellt.<br />Morgen geliefert.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
