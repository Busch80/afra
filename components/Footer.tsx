import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-white">

      {/* Gelber Akzentbalken oben */}
      <div className="h-1 bg-[#F5C800]" />

      {/* Hauptbereich */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-14 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Spalte 1: Logo (weiss invertiert) + Adresse */}
        <div className="flex flex-col gap-4">
          <Image
            src="/afra-logo.png"
            alt="AFRA Gastroservice"
            width={150}
            height={60}
            className="h-12 w-auto object-contain brightness-0 invert"
          />
          <div className="font-[family-name:var(--font-inter)] text-white/60 text-sm leading-relaxed">
            <p>AFRA Gastroservice</p>
            <p>Laubenhof 23</p>
            <p>45326 Essen</p>
          </div>
        </div>

        {/* Spalte 2: Kontakt */}
        <div>
          <h4 className="font-[family-name:var(--font-oswald)] font-semibold text-sm tracking-widest uppercase text-[#F5C800] mb-5">
            Kontakt
          </h4>
          <ul className="flex flex-col gap-3 font-[family-name:var(--font-inter)] text-white/60 text-sm">
            <li>
              <a href="tel:+4920131957501" className="hover:text-white transition-colors">
                Tel: 0201 319 575 01
              </a>
            </li>
            <li>
              <a href="mailto:info@afra-gastroservice.de" className="hover:text-white transition-colors">
                info@afra-gastroservice.de
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/4920131957501"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#25D366] transition-colors"
              >
                WhatsApp
              </a>
            </li>
          </ul>
        </div>

        {/* Spalte 3: Navigation */}
        <div>
          <h4 className="font-[family-name:var(--font-oswald)] font-semibold text-sm tracking-widest uppercase text-[#F5C800] mb-5">
            Navigation
          </h4>
          <ul className="flex flex-col gap-2">
            {[
              { label: "Angebote",        href: "/angebote" },
              { label: "Unser Sortiment", href: "/sortiment" },
              { label: "Frischwaren",     href: "/sortiment/frischwaren" },
              { label: "Tiefkühlwaren",   href: "/sortiment/tiefkuehl" },
              { label: "Getränke",        href: "/sortiment/getraenke" },
              { label: "Verpackungen",    href: "/sortiment/verpackungen" },
              { label: "Standort",        href: "/standort" },
              { label: "Über uns",        href: "/ueber-uns" },
              { label: "Kontakt",         href: "/kontakt" },
            ].map((l) => (
              <li key={l.label}>
                <Link
                  href={l.href}
                  className="font-[family-name:var(--font-inter)] text-white/60 text-sm hover:text-white transition-colors"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Unterer Streifen: Copyright + Impressum/Datenschutz/AGB */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="font-[family-name:var(--font-inter)] text-white/40 text-xs">
            © {new Date().getFullYear()} AFRA Gastroservice · Laubenhof 23 · 45326 Essen
          </p>
          <div className="flex items-center gap-6">
            {[
              { label: "Impressum",   href: "/impressum" },
              { label: "Datenschutz", href: "/datenschutz" },
              { label: "AGB",         href: "/agb" },
            ].map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className="font-[family-name:var(--font-inter)] text-white/40 text-xs hover:text-white/80 transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

    </footer>
  );
}
