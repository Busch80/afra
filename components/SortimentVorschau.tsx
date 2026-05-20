"use client";

import { ArrowRight } from "lucide-react";

const categories = [
  {
    name: "Frischwaren",
    gradient: "linear-gradient(135deg, #2C5F2D 0%, #4A8C3F 100%)",
  },
  {
    name: "Tiefkühlwaren",
    gradient: "linear-gradient(135deg, #1A3A5C 0%, #2E6B9E 100%)",
  },
  {
    name: "Getränke",
    gradient: "linear-gradient(135deg, #C0392B 0%, #E74C3C 100%)",
  },
  {
    name: "Verpackungen",
    gradient: "linear-gradient(135deg, #8E7700 0%, #E8B800 100%)",
  },
];

export default function SortimentVorschau() {
  return (
    <section id="sortiment" className="py-20 md:py-24 bg-[#F9F6F0]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="font-[family-name:var(--font-montserrat)] font-bold text-3xl md:text-[38px] text-[#1C1C1C] text-center mb-14">
          Unser Sortiment
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <a
              key={cat.name}
              href="#sortiment"
              className="group relative h-[250px] rounded-xl overflow-hidden block"
            >
              <div
                className="absolute inset-0 transition-transform duration-500 group-hover:scale-110"
                style={{ background: cat.gradient }}
              />
              <div className="absolute inset-0 bg-[#C0392B]/0 group-hover:bg-[#C0392B]/40 transition-all duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-6 flex items-end justify-between">
                <span className="font-[family-name:var(--font-montserrat)] font-bold text-white text-lg">
                  {cat.name}
                </span>
                <ArrowRight className="w-5 h-5 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}