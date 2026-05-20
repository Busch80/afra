import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="w-full h-screen flex flex-col lg:flex-row overflow-hidden">

      {/* ── Linke Hauptkachel (65%) ── */}
      <div className="relative w-full lg:w-[65%] h-[60vh] lg:h-full overflow-hidden">
        {/* Placeholder-Bild: professionelle Küche / Zutaten */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1600&q=80')",
          }}
        />
        {/* Gradient von unten */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

        {/* Text unten links */}
        <div className="absolute bottom-0 left-0 p-8 lg:p-14 fade-in-up">
          {/* Gelber Akzentbalken */}
          <div className="w-14 h-1 bg-[#F5C800] mb-5" />
          <h1 className="font-[family-name:var(--font-oswald)] font-bold text-white text-4xl md:text-5xl lg:text-6xl leading-tight uppercase tracking-wide mb-3">
            Ihr Partner für<br />die Gastronomie.
          </h1>
          <p className="font-[family-name:var(--font-inter)] text-white/85 text-lg lg:text-xl font-light tracking-widest uppercase">
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
          {/* Gelber Akzent-Kreis im Hintergrund */}
          <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-[#F5C800]/15 group-hover:bg-[#F5C800]/25 transition-all duration-500" />
          <div className="absolute -bottom-6 -left-6 w-24 h-24 rounded-full bg-white/5" />

          <span className="font-[family-name:var(--font-oswald)] text-white/70 text-xs tracking-widest uppercase mb-3">
            Diese Woche
          </span>
          <h2 className="font-[family-name:var(--font-oswald)] font-bold text-white text-2xl lg:text-3xl uppercase leading-tight mb-4">
            Angebote<br />der Woche
          </h2>
          <p className="font-[family-name:var(--font-inter)] text-white/80 text-sm mb-6">
            Jetzt die besten Preise sichern
          </p>
          <span className="inline-flex items-center gap-2 bg-[#F5C800] text-[#1A1A1A] font-[family-name:var(--font-oswald)] font-semibold text-sm tracking-widest uppercase px-5 py-2.5 group-hover:bg-white transition-colors duration-300">
            Zu den Angeboten
            <ArrowRight className="w-4 h-4" />
          </span>
        </a>

        {/* Untere Kachel: Logistik-Bild */}
        <div className="group relative flex-1 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=900&q=80')",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/80 via-[#1A1A1A]/30 to-transparent" />
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
