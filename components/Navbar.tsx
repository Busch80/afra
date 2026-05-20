"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X, ChevronDown, Phone } from "lucide-react";

const sortimentItems = [
  { label: "Frischwaren", href: "/sortiment/frischwaren" },
  { label: "Tiefkühlwaren", href: "/sortiment/tiefkuehl" },
  { label: "Getränke", href: "/sortiment/getraenke" },
  { label: "Verpackungen", href: "/sortiment/verpackungen" },
];

const navLinks = [
  { label: "Angebote", href: "/angebote" },
  { label: "Sortiment", href: "/sortiment", hasDropdown: true },
  { label: "Standort", href: "/standort" },
  { label: "Über uns", href: "/ueber-uns" },
  { label: "Kontakt", href: "/kontakt" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex-shrink-0">
          <Image
            src="/afra-logo.png"
            alt="AFRA Gastroservice"
            width={150}
            height={60}
            className="h-12 w-auto object-contain"
            priority
          />
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) =>
            link.hasDropdown ? (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <button
                  className={`flex items-center gap-1 font-[family-name:var(--font-oswald)] font-semibold text-sm tracking-widest uppercase transition-colors duration-300 ${
                    scrolled
                      ? "text-[#1A1A1A] hover:text-[#CC0000]"
                      : "text-white hover:text-[#F5C800]"
                  }`}
                >
                  {link.label}
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      dropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {dropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-52 bg-white shadow-xl overflow-hidden border-t-2 border-[#CC0000]">
                    {sortimentItems.map((item) => (
                      <a
                        key={item.label}
                        href={item.href}
                        className="block px-5 py-3 text-sm text-[#1A1A1A] hover:bg-[#F5F5F5] hover:text-[#CC0000] transition-colors font-[family-name:var(--font-inter)] font-medium"
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <a
                key={link.label}
                href={link.href}
                className={`font-[family-name:var(--font-oswald)] font-semibold text-sm tracking-widest uppercase transition-colors duration-300 ${
                  scrolled
                    ? "text-[#1A1A1A] hover:text-[#CC0000]"
                    : "text-white hover:text-[#F5C800]"
                }`}
              >
                {link.label}
              </a>
            )
          )}
        </div>

        {/* Right: Phone + CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="tel:+491234567890"
            className={`flex items-center gap-2 text-sm font-[family-name:var(--font-inter)] font-medium transition-colors ${
              scrolled ? "text-[#1A1A1A]" : "text-white"
            }`}
          >
            <Phone className="w-4 h-4" />
            <span>+49 123 456 7890</span>
          </a>
          <a
            href="/kontakt"
            className="bg-[#CC0000] text-white font-[family-name:var(--font-oswald)] font-semibold text-sm tracking-widest uppercase px-6 py-2.5 hover:bg-[#F5C800] hover:text-[#1A1A1A] transition-all duration-300"
          >
            Jetzt Kunde werden
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menü öffnen"
        >
          {mobileOpen ? (
            <X className={`w-7 h-7 ${scrolled ? "text-[#1A1A1A]" : "text-white"}`} />
          ) : (
            <Menu className={`w-7 h-7 ${scrolled ? "text-[#1A1A1A]" : "text-white"}`} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t-2 border-[#CC0000] shadow-xl">
          <div className="flex flex-col py-4 px-6 gap-1">
            {navLinks.map((link) => (
              <div key={link.label}>
                <a
                  href={link.hasDropdown ? "/sortiment" : link.href}
                  className="block py-3 text-[#1A1A1A] font-[family-name:var(--font-oswald)] font-semibold text-base tracking-wide uppercase hover:text-[#CC0000] transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
                {link.hasDropdown && (
                  <div className="pl-4 pb-2 border-l-2 border-[#F5C800] ml-1">
                    {sortimentItems.map((item) => (
                      <a
                        key={item.label}
                        href={item.href}
                        className="block py-1.5 text-sm text-gray-600 hover:text-[#CC0000] font-[family-name:var(--font-inter)]"
                        onClick={() => setMobileOpen(false)}
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-4 border-t border-gray-100 mt-2">
              <a
                href="/kontakt"
                className="block text-center bg-[#CC0000] text-white font-[family-name:var(--font-oswald)] font-semibold text-sm tracking-widest uppercase px-6 py-3 hover:bg-[#F5C800] hover:text-[#1A1A1A] transition-all"
                onClick={() => setMobileOpen(false)}
              >
                Jetzt Kunde werden
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
