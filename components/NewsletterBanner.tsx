"use client";

import { useState } from "react";

export default function NewsletterBanner() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSent(true);
  };

  return (
    <section className="bg-[#CC0000]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-10 flex flex-col lg:flex-row items-center justify-between gap-6">

        {/* Text links */}
        <div className="text-center lg:text-left">
          <h3 className="font-[family-name:var(--font-oswald)] font-bold text-white text-2xl uppercase tracking-wide mb-1">
            Newsletter – Beste Angebote &amp; Rabatte
          </h3>
          <p className="font-[family-name:var(--font-inter)] text-white/75 text-sm">
            Immer als Erster informiert sein. Jetzt kostenlos anmelden.
          </p>
        </div>

        {/* Formular rechts */}
        {sent ? (
          <p className="font-[family-name:var(--font-oswald)] text-white text-lg tracking-widest uppercase whitespace-nowrap">
            ✓ Erfolgreich angemeldet!
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="flex gap-0 w-full lg:w-auto max-w-md">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Deine E-Mail-Adresse"
              className="flex-1 lg:w-72 bg-white/15 border-2 border-white/30 border-r-0 text-white placeholder-white/50 font-[family-name:var(--font-inter)] text-sm px-4 py-3 focus:outline-none focus:border-white transition-colors"
            />
            <button
              type="submit"
              className="bg-[#F5C800] text-[#1A1A1A] font-[family-name:var(--font-oswald)] font-bold text-sm tracking-widest uppercase px-6 py-3 hover:bg-white transition-all duration-300 whitespace-nowrap"
            >
              Anmelden
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
