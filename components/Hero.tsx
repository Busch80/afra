export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center">
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, #1A3A5C 0%, #2C5F2D 30%, #C0392B 70%, #E8B800 100%)",
        }}
      />
      <div className="absolute inset-0 bg-black/45" />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h1 className="font-[family-name:var(--font-montserrat)] font-extrabold text-4xl md:text-5xl lg:text-[56px] leading-tight text-white mb-6">
          Ihr Partner für die Gastronomie
        </h1>
        <p className="font-[family-name:var(--font-inter)] text-lg md:text-xl text-white/90 mb-10 leading-relaxed">
          Frische Produkte. Faire Preise. Zuverlässige Lieferung.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#sortiment"
            className="bg-[#C0392B] text-white font-[family-name:var(--font-montserrat)] font-semibold text-base px-8 py-3.5 rounded-xl hover:bg-[#A93226] transition-all duration-300"
          >
            Sortiment entdecken
          </a>
          <a
            href="#kontakt"
            className="border-2 border-white text-white font-[family-name:var(--font-montserrat)] font-semibold text-base px-8 py-3.5 rounded-xl hover:bg-white hover:text-[#1C1C1C] transition-all duration-300"
          >
            Kontakt aufnehmen
          </a>
        </div>
      </div>
    </section>
  );
}