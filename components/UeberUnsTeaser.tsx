import { ArrowRight } from "lucide-react";

export default function UeberUnsTeaser() {
  return (
    <section id="ueber-uns" className="py-20 md:py-24 bg-[#F9F6F0]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div
            className="h-[400px] lg:h-[500px] rounded-xl"
            style={{
              background:
                "linear-gradient(135deg, #1A3A5C 0%, #2E6B9E 50%, #4A8C3F 100%)",
            }}
          />
          <div>
            <h2 className="font-[family-name:var(--font-montserrat)] font-bold text-3xl md:text-[38px] text-[#1C1C1C] mb-6 leading-tight">
              AGRA Gastroservice –
              <br />
              Ihr Großhandel seit über 20 Jahren
            </h2>
            <p className="font-[family-name:var(--font-inter)] text-gray-600 text-base leading-relaxed mb-4">
              Seit mehr als zwei Jahrzehnten versorgen wir Gastronomiebetriebe in
              der gesamten Region mit frischen Lebensmitteln, Getränken und
              Verpackungsmaterialien. Unsere Kunden schätzen uns für
              Zuverlässigkeit, Qualität und faire Preise.
            </p>
            <p className="font-[family-name:var(--font-inter)] text-gray-600 text-base leading-relaxed mb-8">
              Von der Tageskarte über Tiefkühlkost bis hin zum Getränkeservice –
              bei uns bekommen Sie alles aus einer Hand. Persönliche Beratung
              inklusive.
            </p>
            <a
              href="#ueber-uns"
              className="inline-flex items-center gap-2 bg-[#C0392B] text-white font-[family-name:var(--font-montserrat)] font-semibold text-sm px-8 py-3.5 rounded-xl hover:bg-[#A93226] transition-colors duration-300"
            >
              Mehr über uns <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}