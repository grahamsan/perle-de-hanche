"use client";

import { motion } from "framer-motion";
import PreAlbumCard from "./layouts/pre-album-card";
import { ImageIcon } from "lucide-react";
import { useRouter } from "next/navigation";

const PUBLICATIONS = [
  {
    imageUrl: "/images/baya-2.jpg",
    authorAvatar: "/images/amina.jpg",
    author: "Amina Diallo",
    likes: 248,
    sharing: 34,
    comments: 12,
  },
  {
    imageUrl: "/images/baya-8.jpg",
    authorAvatar: "/images/fatou.png",
    author: "Fatou Sidibé",
    likes: 512,
    sharing: 67,
    comments: 28,
  },
  {
    imageUrl: "/images/baya-4.jpg",
    authorAvatar: "/images/mariama.png",
    author: "Mariama Kouyaté",
    likes: 89,
    sharing: 11,
    comments: 5,
  },
  {
    imageUrl: "/images/baya-5.jpg",
    authorAvatar: "/images/souma.png",
    author: "Soumah Condé",
    likes: 1204,
    sharing: 142,
    comments: 56,
  },
  {
    imageUrl: "/images/baya-6.jpg",
    authorAvatar: "/images/kadiatou.png",
    author: "Kadiatou Bah",
    likes: 337,
    sharing: 45,
    comments: 19,
  },
  {
    imageUrl: "/images/baya-7.jpg",
    authorAvatar: "/images/nathalie.png",
    author: "Nathalie Ouattara",
    likes: 76,
    sharing: 8,
    comments: 3,
  },
];

export default function PreAlbumSection() {
  const router = useRouter();
  return (
    <section className="bg-yellow-50 py-20 flex flex-col gap-y-16 overflow-hidden">
      <div className="text-[48px] font-semibold text-[#E9AB17] font-style-script text-center">
        Découvrez l'album photo
      </div>
      <div className="relative">
        <motion.div
          className="flex gap-6 w-max px-6"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 40,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {[...PUBLICATIONS, ...PUBLICATIONS].map((pub, index) => (
            <PreAlbumCard
              key={index}
              imageUrl={pub.imageUrl}
              authorAvatar={pub.authorAvatar}
              author={pub.author}
              likes={pub.likes}
              sharing={pub.sharing}
              comments={pub.comments}
            />
          ))}
        </motion.div>

        {/* Gradient gauche */}
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-yellow-50 to-transparent pointer-events-none z-10" />
        {/* Gradient droit */}
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-yellow-50 to-transparent pointer-events-none z-10" />
      </div>
      <div className="text-stone-600 text-center font-quicksand text-[24px] flex flex-col gap-y-4">
        <p className="max-w-[600px] mx-auto text-stone-600 font-semibold font-quicksand">
          Découvrez comment nos clientes subliment leur quotidien avec nos
          créations.
        </p>
        <button
          onClick={() => router.push("/catalogue")}
          className="cursor-pointer bg-amber-100 text-black font-semibold flex gap-x-2 items-center 
              p-4 text-[16px] hover:bg-amber-100/80 rounded-lg hover:scale-105 active:scale-95
              transition-all duration-500 border border-stone-200 mx-auto"
        >
          Voir l'album photo
          <ImageIcon />
        </button>
      </div>
    </section>
  );
}
