import { Phone, Mail, MapPin } from "lucide-react";

const navLinks = [
  { label: "Angebote", href: "#angebote" },
  { label: "Sortiment", href: "#sortiment" },
  { label: "Über uns", href: "#ueber-uns" },
  { label: "Kontakt", href: "#kontakt" },
  { label: "Impressum", href: "#" },
];

const oeffnungszeiten = [
  { tag: "Montag – Freitag", zeit: "07:00 – 18:00" },
  { tag: "Samstag", zeit: "07:00 – 14:00" },
  { tag: "Sonntag", zeit: "Geschlossen" },
];

export default function Footer() {
  return (
    <footer id="kontakt" className="bg-[#1A3A5C] text-white">
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          <div>
            <div className="mb-4">
              <span className="font-[family-name:var(--font-montserrat)] font-extrabold text-2xl text-white">
                AFRA
              </span>
              <span className="block font-[family-name:var(--font-montserrat)] font-semibold text-xs tracking-widest uppercase text-white/70">
                Gastroservice
              </span>
            </div>
            <p className="font-[family-name:var(--font-inter)] text-white/70 text-sm leading-relaxed">
              Ihr zuverlässiger Großhandelspartner für die Gastronomie. Frische
              Produkte, faire Preise, persönliche Beratung.
            </p>
          </div>

          <div>
            <h3 className="font-[family-name:var(--font-montserrat)] font-bold text-base mb-5">
              Navigation
            </h3>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-[family-name:var(--font-inter)] text-white/70 text-sm hover:text-white transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-[family-name:var(--font-montserrat)] font-bold text-base mb-5">
              Öffnungszeiten
            </h3>
            <ul className="space-y-2.5">
              {oeffnungszeiten.map(({ tag, zeit }) => (
                <li key={tag}>
                  <span className="font-[family-name:var(--font-inter)] text-white/70 text-sm block">
                    {tag}
                  </span>
                  <span className="font-[family-name:var(--font-inter)] text-white text-sm">
                    {zeit}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-[family-name:var(--font-montserrat)] font-bold text-base mb-5">
              Kontakt
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#E8B800] shrink-0 mt-0.5" />
                <span className="font-[family-name:var(--font-inter)] text-white/70 text-sm">
                  Musterstraße 12, 12345 Musterstadt
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#E8B800] shrink-0" />
                <a
                  href="tel:+491234567890"
                  className="font-[family-name:var(--font-inter)] text-white/70 text-sm hover:text-white transition-colors"
                >
                  +49 123 456 7890
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#E8B800] shrink-0" />
                <a
                  href="mailto:info@afra-gastroservice.de"
                  className="font-[family-name:var(--font-inter)] text-white/70 text-sm hover:text-white transition-colors"
                >
                  info@afra-gastroservice.de
                </a>
              </li>
            </ul>
            <div className="flex gap-4 mt-6">
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-[#E8B800] transition-colors duration-300"
                aria-label="Facebook"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-[#E8B800] transition-colors duration-300"
                aria-label="Instagram"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="font-[family-name:var(--font-inter)] text-white/50 text-sm">
            © {new Date().getFullYear()} AFRA Gastroservice. Alle Rechte vorbehalten.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="font-[family-name:var(--font-inter)] text-white/50 text-sm hover:text-white transition-colors"
            >
              Impressum
            </a>
            <a
              href="#"
              className="font-[family-name:var(--font-inter)] text-white/50 text-sm hover:text-white transition-colors"
            >
              Datenschutz
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}