"use client";

import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

const sortimentItems = [
  { label: "Frischwaren", href: "#sortiment" },
  { label: "Tiefkühlwaren", href: "#sortiment" },
  { label: "Getränke", href: "#sortiment" },
  { label: "Verpackungen", href: "#sortiment" },
];

const navLinks = [
  { label: "Angebote", href: "#angebote" },
  { label: "Sortiment", href: "#sortiment", hasDropdown: true },
  { label: "Standort", href: "#standort" },
  { label: "Über uns", href: "#ueber-uns" },
  { label: "Kontakt", href: "#kontakt" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex flex-col leading-tight">
          <span
            className={`font-[family-name:var(--font-montserrat)] font-extrabold text-2xl tracking-tight transition-colors duration-300 ${
              scrolled ? "text-[#C0392B]" : "text-[#C0392B]"
            }`}
          >
            AFRA
          </span>
          <span
            className={`font-[family-name:var(--font-montserrat)] font-semibold text-xs tracking-widest uppercase transition-colors duration-300 ${
              scrolled ? "text-[#1A3A5C]" : "text-[#1A3A5C]"
            }`}
          >
            Gastroservice
          </span>
        </a>

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
                  className={`font-[family-name:var(--font-montserrat)] font-semibold text-sm tracking-wide flex items-center gap-1 transition-colors duration-300 ${
                    scrolled ? "text-[#1C1C1C] hover:text-[#C0392B]" : "text-white hover:text-[#E8B800]"
                  }`}
                >
                  {link.label}
                  <ChevronDown className="w-4 h-4" />
                </button>
                {dropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 bg-white rounded-xl shadow-xl border border-gray-100 min-w-[200px] py-2">
                    {sortimentItems.map((item) => (
                      <a
                        key={item.label}
                        href={item.href}
                        className="block px-5 py-2.5 text-sm text-[#1C1C1C] hover:bg-[#F2F2F2] hover:text-[#C0392B] transition-colors duration-200 font-[family-name:var(--font-inter)]"
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
                className={`font-[family-name:var(--font-montserrat)] font-semibold text-sm tracking-wide transition-colors duration-300 ${
                  scrolled ? "text-[#1C1C1C] hover:text-[#C0392B]" : "text-white hover:text-[#E8B800]"
                }`}
              >
                {link.label}
              </a>
            )
          )}
        </div>

        <div className="hidden lg:block">
          <a
            href="#kontakt"
            className="bg-[#C0392B] text-white font-[family-name:var(--font-montserrat)] font-semibold text-sm px-6 py-2.5 rounded-xl hover:bg-[#A93226] transition-colors duration-300"
          >
            Jetzt anfragen
          </a>
        </div>

        <button
          className="lg:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Menü"
        >
          {mobileMenuOpen ? (
            <X className={`w-6 h-6 ${scrolled ? "text-[#1C1C1C]" : "text-white"}`} />
          ) : (
            <Menu className={`w-6 h-6 ${scrolled ? "text-[#1C1C1C]" : "text-white"}`} />
          )}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden bg-white shadow-xl mt-2 mx-4 rounded-xl overflow-hidden">
          <div className="flex flex-col py-4">
            {navLinks.map((link) => (
              <div key={link.label}>
                <a
                  href={link.hasDropdown ? "#sortiment" : link.href}
                  className="block px-6 py-3 text-[#1C1C1C] font-[family-name:var(--font-montserrat)] font-semibold text-sm hover:bg-[#F2F2F2] transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
                {link.hasDropdown && (
                  <div className="pl-10 pb-2">
                    {sortimentItems.map((item) => (
                      <a
                        key={item.label}
                        href={item.href}
                        className="block py-1.5 text-sm text-gray-600 hover:text-[#C0392B] font-[family-name:var(--font-inter)]"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="px-6 pt-3">
              <a
                href="#kontakt"
                className="block text-center bg-[#C0392B] text-white font-[family-name:var(--font-montserrat)] font-semibold text-sm px-6 py-2.5 rounded-xl hover:bg-[#A93226] transition-colors duration-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                Jetzt anfragen
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}