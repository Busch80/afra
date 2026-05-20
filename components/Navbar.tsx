"use client";

import { useState } from "react";
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
  const [mobileOpen,   setMobileOpen]   = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const linkClass = "font-[family-name:var(--font-oswald)] font-semibold text-sm tracking-widest uppercase transition-colors duration-200 text-white hover:text-[#F5C800]";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent">

      {/* Desktop */}
      <div className="hidden lg:flex items-center justify-center h-20 px-10">
        <div className="flex items-center gap-10">

          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/afra-logo-white.png"
              alt="AFRA Gastroservice"
              width={150}
              height={60}
              className="h-12 w-auto object-contain"
              priority
            />
          </Link>

          {/* Nav-Links */}
          <nav className="flex items-center gap-8">
            {navLinks.map((link) =>
              link.dropdown ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <button className={`${linkClass} flex items-center gap-1.5`}>
                    {link.label}
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`} />
                  </button>

                  {/* Dropdown – transparent, mehr Abstand */}
                  {dropdownOpen && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-56 bg-black/70 backdrop-blur-md border-t-4 border-[#F5C800] overflow-hidden">
                      {sortimentLinks.map((s) => (
                        <Link
                          key={s.label}
                          href={s.href}
                          className="block px-6 py-5 font-[family-name:var(--font-oswald)] font-semibold text-base tracking-widest uppercase text-white hover:text-[#F5C800] hover:pl-8 border-b border-white/10 last:border-0 transition-all duration-200"
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
        </div>
      </div>

      {/* Mobile Header */}
      <div className="lg:hidden flex items-center justify-between px-6 h-16">
        <Link href="/">
          <Image
            src="/afra-logo-white.png"
            alt="AFRA Gastroservice"
            width={130}
            height={52}
            className="h-11 w-auto object-contain"
            priority
          />
        </Link>
        <button onClick={() => setMobileOpen(!mobileOpen)} aria-label="Menü">
          {mobileOpen
            ? <X className="w-6 h-6 text-white" />
            : <Menu className="w-6 h-6 text-white" />
          }
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t-4 border-[#CC0000]">
          <nav className="flex flex-col px-6 py-4">
            {navLinks.map((link) => (
              <div key={link.label}>
                <Link
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block py-4 font-[family-name:var(--font-oswald)] font-semibold text-base tracking-widest uppercase text-[#1A1A1A] hover:text-[#CC0000] border-b border-gray-100 transition-colors"
                >
                  {link.label}
                </Link>
                {link.dropdown && (
                  <div className="pl-4 py-2 border-b border-gray-100">
                    {sortimentLinks.map((s) => (
                      <Link
                        key={s.label}
                        href={s.href}
                        onClick={() => setMobileOpen(false)}
                        className="block py-3 text-base text-gray-500 hover:text-[#CC0000] font-[family-name:var(--font-oswald)] font-medium tracking-wide transition-colors"
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
