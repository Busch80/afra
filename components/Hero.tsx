import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full h-screen min-h-[600px] overflow-hidden">

      {/* Vollbild-Hintergrundbild */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/hero-gastronomie.jpg')" }}
      />

      {/* Gradient – Mitte leicht abdunkeln für Lesbarkeit */}
      <div className="absolute inset-0 bg-black/45" />

      {/* Inhalt – mittig im Bild */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">

        {/* Gelber Akzentbalken */}
        <div className="w-16 h-1.5 bg-[#F5C800] mb-6" />

        {/* H1 */}
        <h1 className="font-[family-name:var(--font-oswald)] font-bold text-white text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-none uppercase tracking-wide mb-5">
          Ihr Partner für<br />die Gastronomie.
        </h1>

        {/* Subline */}
        <p className="font-[family-name:var(--font-inter)] text-white/80 text-lg lg:text-xl font-light italic mb-10">
          Unsere Produkte sind Ihre Speisekarte.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="/angebote"
            className="inline-flex items-center gap-2 bg-[#CC0000] text-white font-[family-name:var(--font-oswald)] font-semibold text-sm tracking-widest uppercase px-8 py-4 hover:bg-[#F5C800] hover:text-[#1A1A1A] transition-all duration-300"
          >
            Aktuelle Angebote
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/sortiment"
            className="inline-flex items-center gap-2 border-2 border-white text-white font-[family-name:var(--font-oswald)] font-semibold text-sm tracking-widest uppercase px-8 py-4 hover:bg-white hover:text-[#1A1A1A] transition-all duration-300"
          >
            Unser Sortiment
          </Link>
        </div>
      </div>

      {/* Scroll-Indikator */}
      <div className="absolute bottom-8 right-8 lg:right-16 z-10 flex flex-col items-center gap-2 opacity-50">
        <span className="font-[family-name:var(--font-inter)] text-white text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-12 bg-white/60 animate-pulse" />
      </div>
    </section>
  );
}
