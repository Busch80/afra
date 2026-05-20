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
    <section className="bg-[#CC0000] py-16 px-6">
      <div className="max-w-3xl mx-auto text-center">

        {/* Gelber Akzentbalken */}
        <div className="w-12 h-1 bg-[#F5C800] mx-auto mb-6" />

        <h2 className="font-[family-name:var(--font-oswald)] font-bold text-white text-3xl lg:text-4xl uppercase tracking-wide mb-3">
          Melde dich für den Newsletter an
        </h2>
        <p className="font-[family-name:var(--font-inter)] text-white/80 text-lg mb-8">
          Über die besten Angebote und Rabatte immer als Erster informiert sein.
        </p>

        {sent ? (
          <p className="font-[family-name:var(--font-oswald)] text-white text-xl tracking-widest uppercase">
            ✓ Danke! Du bist jetzt dabei.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Deine E-Mail-Adresse"
              className="flex-1 bg-white/15 border-2 border-white/40 text-white placeholder-white/50 font-[family-name:var(--font-inter)] text-base px-5 py-4 focus:outline-none focus:border-white transition-colors"
            />
            <button
              type="submit"
              className="bg-[#F5C800] text-[#1A1A1A] font-[family-name:var(--font-oswald)] font-bold text-sm tracking-widest uppercase px-8 py-4 hover:bg-white transition-all duration-300 whitespace-nowrap"
            >
              Jetzt anmelden
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
