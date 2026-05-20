import { ArrowRight } from "lucide-react";

const kategorien = [
  {
    label: "Frischwaren",
    sub: "Täglich frisch geliefert",
    href: "/sortiment/frischwaren",
    img: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&q=80",
  },
  {
    label: "Tiefkühlwaren",
    sub: "Lückenlose Kühlkette",
    href: "/sortiment/tiefkuehl",
    img: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=800&q=80",
  },
  {
    label: "Getränke",
    sub: "Vom Wasser bis zum Wein",
    href: "/sortiment/getraenke",
    img: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=800&q=80",
  },
  {
    label: "Verpackungen",
    sub: "Nachhaltig & praktisch",
    href: "/sortiment/verpackungen",
    img: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800&q=80",
  },
];

export default function SortimentVorschau() {
  return (
    <section id="sortiment" className="py-16 bg-white">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-6 mb-10 flex items-end justify-between">
        <div>
          <div className="w-10 h-1 bg-[#CC0000] mb-4" />
          <h2 className="font-[family-name:var(--font-oswald)] font-bold text-[#1A1A1A] text-3xl lg:text-4xl uppercase tracking-wide">
            Unser Sortiment
          </h2>
          <p className="font-[family-name:var(--font-inter)] text-gray-500 text-base mt-2">
            Alles für Ihre Küche – aus einer Hand.
          </p>
        </div>
        <a
          href="/sortiment"
          className="hidden md:inline-flex items-center gap-2 font-[family-name:var(--font-oswald)] font-semibold text-sm tracking-widest uppercase text-[#CC0000] hover:text-[#1A1A1A] transition-colors"
        >
          Alle Kategorien
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>

      {/* Slider */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex gap-5 overflow-x-auto hide-scrollbar pb-4">
          {kategorien.map((kat) => (
            <a
              key={kat.label}
              href={kat.href}
              className="group relative flex-shrink-0 w-[280px] lg:w-[320px] h-[420px] overflow-hidden block"
            >
              {/* Bild */}
              <img
                src={kat.img}
                alt={kat.label}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-106"
              />
              {/* Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Gelber Akzent-Streifen links */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#F5C800] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Text */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="font-[family-name:var(--font-inter)] text-white/60 text-xs tracking-widest uppercase mb-1">
                  {kat.sub}
                </p>
                <h3 className="font-[family-name:var(--font-oswald)] font-bold text-white text-2xl uppercase tracking-wide mb-3">
                  {kat.label}
                </h3>
                <span className="inline-flex items-center gap-1.5 text-[#F5C800] font-[family-name:var(--font-oswald)] text-sm font-semibold uppercase tracking-widest group-hover:gap-3 transition-all duration-300">
                  Entdecken <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Mobile Link */}
      <div className="md:hidden text-center mt-6">
        <a
          href="/sortiment"
          className="inline-flex items-center gap-2 font-[family-name:var(--font-oswald)] font-semibold text-sm tracking-widest uppercase text-[#CC0000]"
        >
          Alle Kategorien <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
}
