import { ArrowRight } from "lucide-react";

const angebote = [
  {
    name: "Frisches Rinderfilet",
    originalPreis: "34,90 €",
    angebotsPreis: "27,90 €",
    gradient: "linear-gradient(160deg, #2C5F2D 0%, #1a4020 100%)",
  },
  {
    name: "Erdinger Weißbier (20x0,5L)",
    originalPreis: "22,50 €",
    angebotsPreis: "18,90 €",
    gradient: "linear-gradient(160deg, #E8B800 0%, #b8920a 100%)",
  },
  {
    name: "TK-Pizza Margherita (10er Pack)",
    originalPreis: "19,90 €",
    angebotsPreis: "14,90 €",
    gradient: "linear-gradient(160deg, #C0392B 0%, #8e2a20 100%)",
  },
];

export default function AktuelleAngebote() {
  return (
    <section id="angebote" className="py-20 md:py-24 bg-[#F2F2F2]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="font-[family-name:var(--font-montserrat)] font-bold text-3xl md:text-[38px] text-[#1C1C1C] text-center mb-14">
          Aktuelle Angebote
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {angebote.map((item) => (
            <div
              key={item.name}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              <div
                className="h-48 relative"
                style={{ background: item.gradient }}
              >
                <span className="absolute top-4 left-4 bg-[#E8B800] text-[#1C1C1C] font-[family-name:var(--font-montserrat)] font-bold text-xs px-3 py-1.5 rounded-md uppercase tracking-wide">
                  Angebot
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-[family-name:var(--font-montserrat)] font-semibold text-lg text-[#1C1C1C] mb-3">
                  {item.name}
                </h3>
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-gray-400 line-through text-sm font-[family-name:var(--font-inter)]">
                    {item.originalPreis}
                  </span>
                  <span className="text-[#C0392B] font-[family-name:var(--font-montserrat)] font-bold text-xl">
                    {item.angebotsPreis}
                  </span>
                </div>
                <a
                  href="#angebote"
                  className="inline-flex items-center gap-2 text-[#C0392B] font-[family-name:var(--font-montserrat)] font-semibold text-sm hover:gap-3 transition-all duration-300"
                >
                  Mehr erfahren <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}