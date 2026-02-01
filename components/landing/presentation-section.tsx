"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import PresentationCard from "./layouts/presentation-card";

const cards = [
  {
    imageUrl: "/images/pres-1.png",
    title: "Un art entre les mains",
    description:
      "Chaque fil est minutieusement enfilé par des artisans qualifiés, grâce à des techniques transmises depuis des générations.",
  },
  {
    imageUrl: "/images/baya-1.jpg",
    title: "Sagesse ancestrale",
    description:
      "Enracinée dans de profondes traditions culturelles, symbolisant la féminité, la protection et le statut social.",
  },
  {
    imageUrl: "/images/baya-3.jpg",
    title: "Élégance moderne",
    description:
      "Conçue pour la femme contemporaine qui souhaite se sentir confiante, connectée et magnifiquement ornée.",
  },
];

function StackedCard({
  card,
  index,
  total,
  containerRef,
}: {
  card: (typeof cards)[0];
  index: number;
  total: number;
  containerRef: React.RefObject<HTMLDivElement | null>;
}) {
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const segmentSize = 1 / (total - 1);
  const segStart = index * segmentSize;
  const segEnd = segStart + segmentSize;
  const segOverflow = Math.min(segEnd + segmentSize * 0.15, 1);

  const localProgress = useTransform(
    scrollYProgress,
    [segStart, segEnd, segOverflow],
    [0, 0.5, 1],
  );

  const scale = useTransform(localProgress, [0, 0.5, 1], [1, 0.92, 0.85]);
  const y = useTransform(localProgress, [0, 0.5, 1], [0, 70, 90]);
  const borderRadius = useTransform(localProgress, [0, 0.5, 1], [12, 16, 20]);
  const x = useTransform(localProgress, [0, 0.5, 1], [0, 70, 100]);

  if (index === total - 1) {
    return (
      <motion.div
        className="sticky top-10 w-fit flex mx-auto"
        style={{ zIndex: index + 1 }}
      >
        <PresentationCard
          imageUrl={card.imageUrl}
          title={card.title}
          description={card.description}
        />
      </motion.div>
    );
  }

  return (
    <motion.div
      className="sticky top-20 w-fit mx-auto flex justify-end"
      style={{
        scale,
        y,
        // x,
        borderRadius,
        zIndex: index + 1,
        transformOrigin: "center top",
      }}
    >
      <div className="relative">
        <PresentationCard
          imageUrl={card.imageUrl}
          title={card.title}
          description={card.description}
        />
      </div>
    </motion.div>
  );
}

export default function PresentationSection() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  return (
    <section className="bg-[#F5F2ED] pt-20">
      <div
        className="px-6 sm:px-12 lg:px-[64px]"
        style={{
          paddingBottom: `${(cards.length - 1) * 10}vh`,
        }}
      >
        <div className="mb-8 text-[48px] font-semibold text-[#D4AF37] font-style-script text-center">
          Reliée par la culture, sublimée par la femme.
        </div>
        <div
          ref={containerRef}
          className="max-w-6xl mx-auto flex flex-col gap-y-10"
        >
          {cards.map((card, index) => (
            <StackedCard
              key={card.title}
              card={card}
              index={index}
              total={cards.length}
              containerRef={containerRef}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
