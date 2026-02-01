"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import HeroParticles from "./layouts/hero-particles";
import { Image as ImageIcon } from "lucide-react";
import { useRouter } from "next/navigation";

const images = [
  "/images/perle-1.jpg",
  "/images/perle-2.jpg",
  "/images/perle-3.jpg",
];

export default function HeroSection() {
  const router = useRouter();
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % images.length);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  const positions = [
    { x: 0, scale: 1.1, zIndex: 3, opacity: 1 },
    { x: 60, scale: 0.95, zIndex: 2, opacity: 0.8 },
    { x: -60, scale: 0.95, zIndex: 1, opacity: 0.8 },
  ];

  return (
    <section className="relative min-h-screen bg-yellow-50/60 overflow-hidden lg:px-[24px]">
      <HeroParticles />

      <div
        className="
          relative z-20 flex h-full
          flex-col lg:flex-row
          items-center justify-center
          gap-y-12 lg:gap-x-24
          px-6 sm:px-10 lg:px-20
          py-24
        "
      >
        {/* Images */}
        <div className="relative w-[280px] h-[360px] sm:w-[340px] sm:h-[440px] lg:w-[420px] lg:h-[520px]">
          {images.map((src, index) => {
            const positionIndex =
              (index - active + images.length) % images.length;

            return (
              <motion.div
                key={src}
                className="absolute inset-0"
                animate={positions[positionIndex]}
                transition={{
                  type: "spring",
                  stiffness: 120,
                  damping: 20,
                }}
              >
                <Image
                  src={src}
                  alt="Chaînes de perles africaines"
                  fill
                  className="object-cover rounded-2xl shadow-2xl"
                />
              </motion.div>
            );
          })}
        </div>

        {/* Texte */}
        <div className="flex flex-col gap-y-6 text-center lg:text-left max-w-xl">
          <h1
            className="
              text-stone-900 font-bricolage font-bold
              text-[40px] sm:text-[56px] lg:text-[84px]
              leading-tight
            "
          >
            L&apos;élégance à fleur de peau
          </h1>

          <p
            className="
              text-stone-900 font-bricolage font-semibold
              text-[16px] sm:text-[20px] lg:text-[24px]
              leading-relaxed
            "
          >
            Découvrez l'art ancestral des perles de taille d'Afrique de l'Ouest.
            Une célébration de la féminité, de l'héritage et de la poésie intime
            du mouvement.
          </p>

          <div className="flex justify-center lg:justify-start">
            <button
              onClick={() => router.push("/catalogue")}
              className="
                cursor-pointer bg-white text-black font-semibold
                flex gap-x-2 items-center
                px-6 py-4 text-[16px]
                rounded-lg border border-stone-200
                hover:bg-white/80 hover:scale-105 active:scale-95
                transition-all duration-500
              "
            >
              Voir l'album photo
              <ImageIcon />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
