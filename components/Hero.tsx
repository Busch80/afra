import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full h-screen min-h-[600px] overflow-hidden">

      {/* Vollbild-Hintergrundbild */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/hero-gastronomie.jpg')" }}
      />

      {/* Abdunklung */}
      <div className="absolute inset-0 bg-black/45" />

      {/* Inhalt – mittig */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">

        {/* Gelber Akzentbalken */}
        <div className="w-16 h-1.5 bg-[#F5C800] mb-6" />

        {/* H1 */}
        <h1 className="font-[family-name:var(--font-oswald)] font-bold text-white text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-none uppercase tracking-wide mb-4">
          Ihr Partner für<br />die Gastronomie.
        </h1>

        {/* Subline */}
        <p className="font-[family-name:var(--font-inter)] text-white/80 text-lg lg:text-xl font-light italic mb-10">
          Unsere Produkte sind Ihre Speisekarte.
        </p>

        {/* Buttons: Angebote + 4 Sortiments-Unterseiten */}
        <div className="flex flex-wrap gap-3 justify-center">

          {/* Angebote – hervorgehoben in Rot */}
          <Link
            href="/angebote"
            className="bg-[#CC0000] text-white font-[family-name:var(--font-oswald)] font-semibold text-sm tracking-widest uppercase px-7 py-3.5 hover:bg-[#F5C800] hover:text-[#1A1A1A] transition-all duration-300"
          >
            Angebote
          </Link>

          {/* 4 Sortiments-Unterseiten – weiss outline */}
          {[
            { label: "Frischwaren",   href: "/sortiment/frischwaren" },
            { label: "Tiefkühlwaren", href: "/sortiment/tiefkuehl" },
            { label: "Getränke",      href: "/sortiment/getraenke" },
            { label: "Verpackungen",  href: "/sortiment/verpackungen" },
          ].map((btn) => (
            <Link
              key={btn.label}
              href={btn.href}
              className="border-2 border-white text-white font-[family-name:var(--font-oswald)] font-semibold text-sm tracking-widest uppercase px-7 py-3.5 hover:bg-white hover:text-[#1A1A1A] transition-all duration-300"
            >
              {btn.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
