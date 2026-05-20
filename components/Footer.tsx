import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#111111] text-white">

      {/* Gelber Akzentbalken oben */}
      <div className="h-1 bg-[#F5C800]" />

      {/* Logo-Block – zentriert, gross */}
      <div className="flex flex-col items-center pt-16 pb-10 border-b border-white/10">
        <Image
          src="/afra-logo-white.png"
          alt="AFRA Gastroservice"
          width={220}
          height={88}
          className="h-20 w-auto object-contain mb-5"
        />
        <p className="font-[family-name:var(--font-inter)] text-white/50 text-sm leading-8 text-center">
          AFRA Gastroservice &nbsp;·&nbsp; Laubenhof 23 &nbsp;·&nbsp; 45326 Essen
        </p>
      </div>

      {/* 3 Spalten – zentriert */}
      <div className="max-w-5xl mx-auto px-6 lg:px-10 py-16 grid grid-cols-1 md:grid-cols-3 gap-14 text-center">

        {/* Kontakt */}
        <div className="flex flex-col items-center">
          <h4 className="font-[family-name:var(--font-oswald)] font-semibold text-sm tracking-[0.2em] uppercase text-[#F5C800] mb-8">
            Kontakt
          </h4>
          <ul className="flex flex-col items-center gap-5">
            <li>
              <a
                href="tel:+4920131957501"
                className="flex items-center gap-3 font-[family-name:var(--font-inter)] text-white/60 text-sm hover:text-white transition-colors"
              >
                <svg className="w-4 h-4 text-[#F5C800] flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
                </svg>
                0201 319 575 01
              </a>
            </li>
            <li>
              <a
                href="mailto:info@afra-gastroservice.de"
                className="flex items-center gap-3 font-[family-name:var(--font-inter)] text-white/60 text-sm hover:text-white transition-colors"
              >
                <svg className="w-4 h-4 text-[#F5C800] flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                info@afra-gastroservice.de
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/4920131957501"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 font-[family-name:var(--font-inter)] text-white/60 text-sm hover:text-[#25D366] transition-colors"
              >
                <svg className="w-4 h-4 text-[#25D366] flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp
              </a>
            </li>
          </ul>
        </div>

        {/* Sortiment */}
        <div className="flex flex-col items-center">
          <h4 className="font-[family-name:var(--font-oswald)] font-semibold text-sm tracking-[0.2em] uppercase text-[#F5C800] mb-8">
            Sortiment
          </h4>
          <ul className="flex flex-col items-center gap-4">
            {[
              { label: "Angebote",      href: "/angebote" },
              { label: "Frischwaren",   href: "/sortiment/frischwaren" },
              { label: "Tiefkühlwaren", href: "/sortiment/tiefkuehl" },
              { label: "Getränke",      href: "/sortiment/getraenke" },
              { label: "Verpackungen",  href: "/sortiment/verpackungen" },
            ].map((l) => (
              <li key={l.label}>
                <Link
                  href={l.href}
                  className="font-[family-name:var(--font-inter)] text-white/55 text-sm hover:text-white transition-colors"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Unternehmen */}
        <div className="flex flex-col items-center">
          <h4 className="font-[family-name:var(--font-oswald)] font-semibold text-sm tracking-[0.2em] uppercase text-[#F5C800] mb-8">
            Unternehmen
          </h4>
          <ul className="flex flex-col items-center gap-4">
            {[
              { label: "Über uns", href: "/ueber-uns" },
              { label: "Standort", href: "/standort" },
              { label: "Kontakt",  href: "/kontakt" },
            ].map((l) => (
              <li key={l.label}>
                <Link
                  href={l.href}
                  className="font-[family-name:var(--font-inter)] text-white/55 text-sm hover:text-white transition-colors"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

      </div>

      {/* Unterer Streifen */}
      <div className="border-t border-white/10">
        <div className="max-w-5xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-center gap-4 text-center">
          <p className="font-[family-name:var(--font-inter)] text-white/30 text-xs">
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
                className="font-[family-name:var(--font-inter)] text-white/30 text-xs hover:text-white/70 transition-colors"
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
