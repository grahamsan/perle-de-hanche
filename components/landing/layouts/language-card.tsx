import { motion } from "framer-motion";

type LanguageCardProps = {
  title: string;
  description: string;
  bg: string;
};

export default function LanguageCard({
  title,
  description,
  bg,
}: LanguageCardProps) {
  return (
    <motion.div className="flex flex-col items-center gap-3">
      {/* Cercle extérieur */}
      <div
        className="relative h-[150px] w-[150px] flex items-center justify-center 
        rounded-full border-6"
        style={{ borderColor: bg }}
      >
        {/* Carré central */}
        <div
          className="relative h-[80px] w-[80px] rounded-[6px] rotate-45"
          style={{ backgroundColor: bg }}
        >
          {/* Dots */}
          <span
            className="absolute top-1/2 -translate-y-1/2 -left-6 p-4 rounded-full"
            style={{ backgroundColor: bg }}
          />
          <span
            className="absolute top-1/2 -translate-y-1/2 -right-6 p-4 rounded-full"
            style={{ backgroundColor: bg }}
          />
          <span
            className="absolute left-1/2 -translate-x-1/2 -top-6 p-4 rounded-full"
            style={{ backgroundColor: bg }}
          />
          <span
            className="absolute left-1/2 -translate-x-1/2 -bottom-6 p-4 rounded-full"
            style={{ backgroundColor: bg }}
          />
        </div>
      </div>

      {/* Texte */}
      <h3 className="text-lg font-bold uppercase text-white text-center">
        {title}
      </h3>

      <p className="text-sm uppercase tracking-widest text-zinc-500 text-center">
        {description}
      </p>
    </motion.div>
  );
}
