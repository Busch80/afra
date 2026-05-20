import { Truck, Star, Package, Users } from "lucide-react";

const usps = [
  {
    icon: Truck,
    title: "Schnelle Lieferung",
    text: "Heute bestellt, morgen geliefert",
  },
  {
    icon: Star,
    title: "Top Qualität",
    text: "Geprüfte Produkte, täglich frisch",
  },
  {
    icon: Package,
    title: "Grosses Sortiment",
    text: "Über 5.000 Artikel auf Lager",
  },
  {
    icon: Users,
    title: "Persönliche Beratung",
    text: "Ihr Ansprechpartner kennt Ihr Business",
  },
];

export default function USPLeiste() {
  return (
    <section className="bg-[#1A1A1A] py-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {usps.map((usp) => {
            const Icon = usp.icon;
            return (
              <div
                key={usp.title}
                className="flex flex-col items-center text-center gap-3 group"
              >
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#F5C800]/20 transition-colors duration-300">
                  <Icon className="w-6 h-6 text-[#F5C800]" />
                </div>
                <div>
                  <p className="font-[family-name:var(--font-oswald)] font-semibold text-white text-base uppercase tracking-wide">
                    {usp.title}
                  </p>
                  <p className="font-[family-name:var(--font-inter)] text-white/50 text-sm mt-1">
                    {usp.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
