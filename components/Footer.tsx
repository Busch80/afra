import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";

const sortimentLinks = [
  { label: "Frischwaren", href: "/sortiment/frischwaren" },
  { label: "Tiefkühlwaren", href: "/sortiment/tiefkuehl" },
  { label: "Getränke", href: "/sortiment/getraenke" },
  { label: "Verpackungen", href: "/sortiment/verpackungen" },
];

const quickLinks = [
  { label: "Angebote", href: "/angebote" },
  { label: "Standort", href: "/standort" },
  { label: "Über uns", href: "/ueber-uns" },
  { label: "Kontakt", href: "/kontakt" },
];

export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-white">
      {/* Gelber Akzentbalken oben */}
      <div className="h-1 bg-[#F5C800]" />

      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Spalte 1: Logo + Slogan */}
          <div>
            <Image
              src="/afra-logo.png"
              alt="AFRA Gastroservice"
              width={140}
              height={56}
              className="h-12 w-auto object-contain mb-5"
            />
            <p className="font-[family-name:var(--font-inter)] text-white/55 text-sm leading-relaxed">
              Ihr zuverlässiger Großhandel für die Gastronomie. Frisch,
              schnell und direkt zu Ihnen.
            </p>
            {/* Social Icons */}
            <div className="flex gap-3 mt-6">
              {["f", "in", "ig"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="w-9 h-9 bg-white/10 flex items-center justify-center text-white/60 hover:bg-[#CC0000] hover:text-white transition-all duration-300 text-xs font-bold uppercase"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Spalte 2: Sortiment */}
          <div>
            <h4 className="font-[family-name:var(--font-oswald)] font-semibold text-white text-sm tracking-widest uppercase mb-5 pb-3 border-b border-white/10">
              Sortiment
            </h4>
            <ul className="space-y-2.5">
              {sortimentLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="font-[family-name:var(--font-inter)] text-white/55 text-sm hover:text-[#F5C800] transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
            <h4 className="font-[family-name:var(--font-oswald)] font-semibold text-white text-sm tracking-widest uppercase mt-7 mb-5 pb-3 border-b border-white/10">
              Quicklinks
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="font-[family-name:var(--font-inter)] text-white/55 text-sm hover:text-[#F5C800] transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Spalte 3: Kontakt */}
          <div>
            <h4 className="font-[family-name:var(--font-oswald)] font-semibold text-white text-sm tracking-widest uppercase mb-5 pb-3 border-b border-white/10">
              Kontakt
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#F5C800] mt-0.5 shrink-0" />
                <span className="font-[family-name:var(--font-inter)] text-white/55 text-sm leading-relaxed">
                  Musterstraße 12<br />12345 Musterstadt
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#F5C800] shrink-0" />
                <a
                  href="tel:+491234567890"
                  className="font-[family-name:var(--font-inter)] text-white/55 text-sm hover:text-white transition-colors"
                >
                  +49 123 456 7890
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#F5C800] shrink-0" />
                <a
                  href="mailto:info@afra-gastroservice.de"
                  className="font-[family-name:var(--font-inter)] text-white/55 text-sm hover:text-white transition-colors"
                >
                  info@afra-gastroservice.de
                </a>
              </li>
            </ul>
          </div>

          {/* Spalte 4: Newsletter */}
          <div>
            <h4 className="font-[family-name:var(--font-oswald)] font-semibold text-white text-sm tracking-widest uppercase mb-5 pb-3 border-b border-white/10">
              Newsletter
            </h4>
            <p className="font-[family-name:var(--font-inter)] text-white/55 text-sm mb-5 leading-relaxed">
              Verpassen Sie keine Angebote und Neuigkeiten.
            </p>
            <form className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Ihre E-Mail-Adresse"
                className="bg-white/10 border border-white/15 text-white placeholder-white/35 font-[family-name:var(--font-inter)] text-sm px-4 py-3 focus:outline-none focus:border-[#F5C800] transition-colors"
              />
              <button
                type="submit"
                className="bg-[#CC0000] text-white font-[family-name:var(--font-oswald)] font-semibold text-sm tracking-widest uppercase py-3 hover:bg-[#F5C800] hover:text-[#1A1A1A] transition-all duration-300"
              >
                Anmelden
              </button>
            </form>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="font-[family-name:var(--font-inter)] text-white/35 text-sm">
            © {new Date().getFullYear()} AFRA Gastroservice. Alle Rechte vorbehalten.
          </p>
          <div className="flex gap-6">
            {[
              { label: "Impressum", href: "/impressum" },
              { label: "Datenschutz", href: "/datenschutz" },
              { label: "AGB", href: "/agb" },
            ].map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="font-[family-name:var(--font-inter)] text-white/35 text-sm hover:text-white transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
