"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";

const sortimentLinks = [
  { label: "Frischwaren",   href: "/sortiment/frischwaren" },
  { label: "Tiefkühlwaren", href: "/sortiment/tiefkuehl" },
  { label: "Getränke",      href: "/sortiment/getraenke" },
  { label: "Verpackungen",  href: "/sortiment/verpackungen" },
];

const navLinks = [
  { label: "Angebote",        href: "/angebote" },
  { label: "Unser Sortiment", href: "/sortiment", dropdown: true },
  { label: "Standort",        href: "/standort" },
  { label: "Über uns",        href: "/ueber-uns" },
  { label: "Kontakt",         href: "/kontakt" },
];

export default function Navbar() {
  const [scrolled,     setScrolled]     = useState(false);
  const [mobileOpen,   setMobileOpen]   = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const linkClass = `font-[family-name:var(--font-oswald)] font-semibold text-sm tracking-widest uppercase transition-colors duration-200 ${
    scrolled ? "text-[#1A1A1A] hover:text-[#CC0000]" : "text-white hover:text-[#F5C800]"
  }`;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-black/30 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center gap-8 h-16 lg:h-20">

        {/* Logo – direkt links, Teil der Navbar-Zeile */}
        <Link href="/" className="flex-shrink-0 flex items-center">
          <Image
            src="/afra-logo.png"
            alt="AFRA Gastroservice"
            width={150}
            height={60}
            className="h-11 lg:h-13 w-auto object-contain"
            priority
          />
        </Link>

        {/* Trennlinie zwischen Logo und Nav */}
        <div className={`hidden lg:block h-7 w-px flex-shrink-0 ${scrolled ? "bg-gray-200" : "bg-white/30"}`} />

        {/* Desktop Nav – direkt neben dem Logo */}
        <nav className="hidden lg:flex items-center gap-7 flex-1">
          {navLinks.map((link) =>
            link.dropdown ? (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <button className={`${linkClass} flex items-center gap-1`}>
                  {link.label}
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform ${dropdownOpen ? "rotate-180" : ""}`} />
                </button>

                {dropdownOpen && (
                  <div className="absolute top-full left-0 mt-1 w-48 bg-white shadow-xl border-t-2 border-[#CC0000] overflow-hidden">
                    {sortimentLinks.map((s) => (
                      <Link
                        key={s.label}
                        href={s.href}
                        className="block px-5 py-3 text-sm text-[#1A1A1A] hover:bg-gray-50 hover:text-[#CC0000] font-[family-name:var(--font-inter)] font-medium transition-colors"
                      >
                        {s.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link key={link.label} href={link.href} className={linkClass}>
                {link.label}
              </Link>
            )
          )}
        </nav>

        {/* Hamburger – Mobile */}
        <button
          className="lg:hidden ml-auto"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menü"
        >
          {mobileOpen
            ? <X className={`w-6 h-6 ${scrolled ? "text-[#1A1A1A]" : "text-white"}`} />
            : <Menu className={`w-6 h-6 ${scrolled ? "text-[#1A1A1A]" : "text-white"}`} />
          }
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t-2 border-[#CC0000]">
          <nav className="flex flex-col px-6 py-4 gap-0">
            {navLinks.map((link) => (
              <div key={link.label}>
                <Link
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block py-3 font-[family-name:var(--font-oswald)] font-semibold text-sm tracking-widest uppercase text-[#1A1A1A] hover:text-[#CC0000] border-b border-gray-100 transition-colors"
                >
                  {link.label}
                </Link>
                {link.dropdown && (
                  <div className="pl-4 py-1 border-b border-gray-100">
                    {sortimentLinks.map((s) => (
                      <Link
                        key={s.label}
                        href={s.href}
                        onClick={() => setMobileOpen(false)}
                        className="block py-2 text-sm text-gray-500 hover:text-[#CC0000] font-[family-name:var(--font-inter)] transition-colors"
                      >
                        → {s.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
