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
    <section className="bg-[#1A1A1A] border-t border-white/10" style={{ paddingBottom: "40px" }}>
      <div
        style={{
          maxWidth: "600px",
          margin: "0 auto",
          padding: "4rem 1.5rem 0",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          gap: "1.5rem",
        }}
      >
        <div style={{ width: "48px", height: "4px", background: "#F5C800" }} />

        <h3
          style={{
            fontFamily: "var(--font-oswald), sans-serif",
            fontWeight: 700,
            color: "#ffffff",
            fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
            textTransform: "uppercase",
            letterSpacing: "0.05em",
            margin: 0,
          }}
        >
          Newsletter – Beste Angebote &amp; Rabatte
        </h3>

        <p
          style={{
            fontFamily: "var(--font-inter), sans-serif",
            color: "rgba(255,255,255,0.6)",
            fontSize: "1rem",
            margin: 0,
          }}
        >
          Immer als Erster informiert sein. Jetzt kostenlos anmelden.
        </p>

        {sent ? (
          <p style={{ fontFamily: "var(--font-oswald), sans-serif", color: "#F5C800", fontSize: "1.25rem", textTransform: "uppercase", letterSpacing: "0.15em" }}>
            ✓ Erfolgreich angemeldet!
          </p>
        ) : (
          <form
            onSubmit={handleSubmit}
            style={{ display: "flex", width: "100%", maxWidth: "480px" }}
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Deine E-Mail-Adresse"
              style={{
                flex: 1,
                background: "rgba(255,255,255,0.08)",
                border: "2px solid rgba(255,255,255,0.2)",
                borderRight: "none",
                color: "#ffffff",
                fontFamily: "var(--font-inter), sans-serif",
                fontSize: "0.875rem",
                padding: "0.875rem 1.25rem",
                outline: "none",
              }}
            />
            <button
              type="submit"
              style={{
                background: "#F5C800",
                color: "#1A1A1A",
                fontFamily: "var(--font-oswald), sans-serif",
                fontWeight: 700,
                fontSize: "0.875rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                padding: "0.875rem 1.75rem",
                border: "none",
                cursor: "pointer",
                whiteSpace: "nowrap",
              }}
            >
              Anmelden
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
