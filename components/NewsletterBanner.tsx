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
    <section className="bg-[#1A1A1A] border-t border-white/10">
      <div className="max-w-3xl mx-auto px-6 py-16 flex flex-col items-center text-center gap-6">

        <div className="w-12 h-1 bg-[#F5C800]" />

        <h3 className="font-[family-name:var(--font-oswald)] font-bold text-white text-3xl lg:text-4xl uppercase tracking-wide">
          Newsletter – Beste Angebote &amp; Rabatte
        </h3>
        <p className="font-[family-name:var(--font-inter)] text-white/60 text-base">
          Immer als Erster informiert sein. Jetzt kostenlos anmelden.
        </p>

        {sent ? (
          <p className="font-[family-name:var(--font-oswald)] text-[#F5C800] text-xl tracking-widest uppercase">
            ✓ Erfolgreich angemeldet!
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="flex w-full max-w-lg gap-0 mt-2">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Deine E-Mail-Adresse"
              className="flex-1 bg-white/10 border-2 border-white/20 border-r-0 text-white placeholder-white/40 font-[family-name:var(--font-inter)] text-sm px-5 py-4 focus:outline-none focus:border-[#F5C800] transition-colors"
            />
            <button
              type="submit"
              className="bg-[#F5C800] text-[#1A1A1A] font-[family-name:var(--font-oswald)] font-bold text-sm tracking-widest uppercase px-8 py-4 hover:bg-white transition-all duration-300 whitespace-nowrap"
            >
              Anmelden
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
