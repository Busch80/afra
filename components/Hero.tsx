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
      <div className="absolute inset-0 bg-black/50" />

      {/* Inhalt – mittig */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">

        {/* Gelber Akzentbalken */}
        <div className="w-16 h-1.5 bg-[#F5C800]" style={{ marginBottom: "2rem" }} />

        {/* H1 – kleiner */}
        <h1
          className="font-[family-name:var(--font-oswald)] font-bold text-white text-4xl md:text-5xl lg:text-6xl leading-tight uppercase tracking-wide"
          style={{ marginBottom: "2.5rem" }}
        >
          Ihr Partner für<br />die Gastronomie.
        </h1>

        {/* Subline – grösser */}
        <p
          className="font-[family-name:var(--font-inter)] text-white/95 text-3xl lg:text-4xl font-light italic"
          style={{ marginBottom: "3.5rem" }}
        >
          Unsere Produkte sind Ihre Speisekarte.
        </p>

        {/* Zwischentext */}
        <p
          className="font-[family-name:var(--font-oswald)] text-white/70 text-2xl lg:text-3xl tracking-widest uppercase"
          style={{ marginBottom: "2.5rem" }}
        >
          Direkt zu unserem Sortiment
        </p>

        {/* Buttons – grösser, grosser Abstand */}
        <div className="flex flex-wrap justify-center" style={{ gap: "1.5rem" }}>

          {/* Angebote – Rot */}
          <Link
            href="/angebote"
            className="bg-[#CC0000] text-white font-[family-name:var(--font-oswald)] font-semibold text-base tracking-widest uppercase hover:bg-[#F5C800] hover:text-[#1A1A1A] transition-all duration-300"
            style={{ padding: "1.25rem 2.5rem" }}
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
              className="border-2 border-white text-white font-[family-name:var(--font-oswald)] font-semibold text-base tracking-widest uppercase hover:bg-white hover:text-[#1A1A1A] transition-all duration-300"
              style={{ padding: "1.25rem 2.5rem" }}
            >
              {btn.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
