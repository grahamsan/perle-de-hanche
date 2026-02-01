"use client";

import { useState } from "react";
import { Camera, Share2, AtSign } from "lucide-react";

const shopLinks = [
  { label: "Tous les colliers de taille", href: "#" },
  { label: "Chaines de cheville", href: "#" },
  { label: "Ensembles & Collections", href: "#" },
  { label: "Cadeaux", href: "#" },
];

const aboutLinks = [
  { label: "Notre histoire", href: "#" },
  { label: "Guide de taille", href: "#" },
  { label: "Instructions d'entretien", href: "#" },
  { label: "Journal", href: "#" },
];

export default function Footer() {
  const [email, setEmail] = useState("");

  return (
    <footer className="bg-[#F5F2ED] px-6 sm:px-12 lg:px-[64px]">
      {/* Main grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 py-16">
        {/* Col 1 — Logo + description + réseaux */}
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-3">
            {/* Logo SVG — forme fleur/baya en orange */}
            <img
              src="/images/baya-logo-bg.png"
              alt="logo"
              className="w-40 h-40"
            />
          </div>

          <p className="text-[14px] text-zinc-500 font-quicksand leading-relaxed">
            Honorant les traditions de l'Afrique de l'Ouest à travers un
            artisanat durable et raffiné pour la femme moderne.
          </p>

          {/* Icones réseaux */}
          <div className="flex gap-3 mt-2">
            {[Camera, Share2, AtSign].map((Icon, i) => (
              <button
                key={i}
                className="w-10 h-10 rounded-full border border-zinc-300 flex items-center justify-center text-zinc-600 hover:border-[#E8982C] hover:text-[#E8982C] transition-colors duration-300"
              >
                <Icon size={18} strokeWidth={1.8} />
              </button>
            ))}
          </div>
        </div>

        {/* Col 2 — Shop */}
        <div className="flex flex-col gap-4">
          <h3 className="text-[16px] font-bold text-black font-quicksand">
            Boutique
          </h3>
          <nav className="flex flex-col gap-3">
            {shopLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[14px] text-zinc-500 font-quicksand hover:text-[#E8982C] transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Col 3 — À propos */}
        <div className="flex flex-col gap-4">
          <h3 className="text-[16px] font-bold text-black font-quicksand">
            À propos
          </h3>
          <nav className="flex flex-col gap-3">
            {aboutLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[14px] text-zinc-500 font-quicksand hover:text-[#E8982C] transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Col 4 — Newsletter */}
        <div className="flex flex-col gap-4">
          <h3 className="text-[16px] font-bold text-black font-quicksand">
            Rejoindre le cercle
          </h3>
          <p className="text-[14px] text-zinc-500 font-quicksand leading-relaxed">
            Inscrivez-vous pour des collections exclusives et des histoires
            provenant de l'Afrique de l'Ouest.
          </p>

          <div className="flex flex-col gap-3 mt-1">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Votre adresse email"
              className="w-full px-4 py-3 rounded-[10px] border border-zinc-300 bg-white text-[14px] font-quicksand text-zinc-600 placeholder-zinc-400 outline-none focus:border-[#E8982C] transition-colors duration-300"
            />
            <button className="w-full py-3 rounded-[10px] bg-[#E8982C] text-white text-[15px] font-bold font-quicksand hover:bg-[#d4871f] transition-colors duration-300">
              S'inscrire
            </button>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="max-w-6xl mx-auto border-t border-zinc-200" />

      {/* Copyright */}
      <p className="max-w-6xl mx-auto text-center text-[13px] text-zinc-400 font-quicksand py-8">
        © 2026 Baya Elegance. Créé avec amour et intention.
      </p>
    </footer>
  );
}
