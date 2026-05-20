import { Truck, Beef, Briefcase, Phone } from "lucide-react";

const usps = [
  { icon: Truck, text: "Schnelle Lieferung" },
  { icon: Beef, text: "Frische Qualität" },
  { icon: Briefcase, text: "Großhandel-Preise" },
  { icon: Phone, text: "Persönliche Beratung" },
];

export default function USPLeiste() {
  return (
    <section className="bg-[#C0392B] py-8 md:py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
        {usps.map(({ icon: Icon, text }) => (
          <div key={text} className="flex items-center gap-3 justify-center md:justify-start">
            <Icon className="w-6 h-6 text-white/90 shrink-0" />
            <span className="font-[family-name:var(--font-montserrat)] font-semibold text-white text-sm md:text-base">
              {text}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}