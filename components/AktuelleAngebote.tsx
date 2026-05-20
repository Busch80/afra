import { ArrowRight, Download } from "lucide-react";

const angebote = [
  {
    name: "Rinder-Roastbeef",
    kategorie: "Frischwaren",
    preisAlt: "18,90 €/kg",
    preisNeu: "13,90 €/kg",
    rabatt: "-26%",
    img: "https://images.unsplash.com/photo-1529694157872-4e0c0f3b238b?w=600&q=80",
  },
  {
    name: "Tiger-Garnelen TK",
    kategorie: "Tiefkühlwaren",
    preisAlt: "24,50 €/kg",
    preisNeu: "17,90 €/kg",
    rabatt: "-27%",
    img: "https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?w=600&q=80",
  },
  {
    name: "San Pellegrino 24x0,75l",
    kategorie: "Getränke",
    preisAlt: "22,00 €",
    preisNeu: "15,90 €",
    rabatt: "-28%",
    img: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=600&q=80",
  },
];

export default function AktuelleAngebote() {
  return (
    <section id="angebote" className="bg-[#F5F5F5] py-16">
      {/* Roter Balken oben */}
      <div className="bg-[#CC0000] py-3 mb-12">
        <p className="text-center font-[family-name:var(--font-oswald)] text-white text-sm tracking-widest uppercase">
          Aktuelle Angebote &nbsp;·&nbsp; Gültig vom 19.05. bis 25.05.2026
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-10 flex items-end justify-between">
          <div>
            <div className="w-10 h-1 bg-[#F5C800] mb-4" />
            <h2 className="font-[family-name:var(--font-oswald)] font-bold text-[#1A1A1A] text-3xl lg:text-4xl uppercase tracking-wide">
              Top-Angebote
            </h2>
            <p className="font-[family-name:var(--font-inter)] text-gray-500 text-base mt-2">
              Ausgewählte Highlights zu unschlagbaren Preisen.
            </p>
          </div>
          <a
            href="/angebote"
            className="hidden md:inline-flex items-center gap-2 font-[family-name:var(--font-oswald)] font-semibold text-sm tracking-widest uppercase text-[#CC0000] hover:text-[#1A1A1A] transition-colors"
          >
            Alle Angebote <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Produkt-Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {angebote.map((a) => (
            <div
              key={a.name}
              className="group bg-white overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {/* Bild */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={a.img}
                  alt={a.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Rabatt-Badge */}
                <span className="absolute top-4 right-4 bg-[#CC0000] text-white font-[family-name:var(--font-oswald)] font-bold text-sm px-3 py-1.5 uppercase tracking-wide">
                  {a.rabatt}
                </span>
                {/* Kategorie-Badge */}
                <span className="absolute top-4 left-4 bg-[#1A1A1A]/70 text-white font-[family-name:var(--font-inter)] text-xs px-2.5 py-1 uppercase tracking-widest">
                  {a.kategorie}
                </span>
              </div>

              {/* Info */}
              <div className="p-6">
                <h3 className="font-[family-name:var(--font-oswald)] font-bold text-[#1A1A1A] text-xl uppercase tracking-wide mb-3">
                  {a.name}
                </h3>
                <div className="flex items-baseline gap-3">
                  <span className="font-[family-name:var(--font-oswald)] font-bold text-[#CC0000] text-2xl">
                    {a.preisNeu}
                  </span>
                  <span className="font-[family-name:var(--font-inter)] text-gray-400 text-sm line-through">
                    {a.preisAlt}
                  </span>
                </div>
                {/* Gelber Akzentbalken */}
                <div className="w-0 h-0.5 bg-[#F5C800] mt-4 group-hover:w-full transition-all duration-500" />
              </div>
            </div>
          ))}
        </div>

        {/* Inspiration Breakout */}
        <div
          className="relative mt-12 h-48 lg:h-64 overflow-hidden flex items-center justify-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1600&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center 40%",
          }}
        >
          <div className="absolute inset-0 bg-[#1A1A1A]/65" />
          <div className="relative z-10 text-center px-6">
            <p className="font-[family-name:var(--font-inter)] text-[#F5C800] text-xs tracking-widest uppercase mb-2">
              Inspiration
            </p>
            <p className="font-[family-name:var(--font-oswald)] font-bold text-white text-2xl lg:text-3xl uppercase tracking-wide">
              Aus unseren Zutaten – auf Ihre Speisekarte.
            </p>
          </div>
        </div>

        {/* PDF Download + Link */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="/angebote"
            className="inline-flex items-center gap-2 bg-[#CC0000] text-white font-[family-name:var(--font-oswald)] font-semibold text-sm tracking-widest uppercase px-8 py-3.5 hover:bg-[#A80000] transition-colors duration-300"
          >
            Alle Angebote ansehen <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="/angebote-flyer.pdf"
            className="inline-flex items-center gap-2 border-2 border-[#1A1A1A] text-[#1A1A1A] font-[family-name:var(--font-oswald)] font-semibold text-sm tracking-widest uppercase px-8 py-3 hover:bg-[#1A1A1A] hover:text-white transition-all duration-300"
          >
            <Download className="w-4 h-4" /> Flyer als PDF
          </a>
        </div>
      </div>
    </section>
  );
}
