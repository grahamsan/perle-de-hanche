"use client";

import PreAlbumCard from "@/components/landing/layouts/pre-album-card";
import useLenis from "@/features/lenis/hooks";

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
];

export default function CataloguePage() {
  const { scrollTo, stop, start } = useLenis({
    duration: 2,
    easing: (t: number) => 1 - Math.pow(1 - t, 2), // easeOutCubic
    lerp: 0.005, // Plus fluide
    wheelMultiplier: 1.5,
  });
  return (
    <div className="min-h-screen bg-[#F5F2ED]">
      {/* Header */}
      <div className="px-6 sm:px-12 lg:px-[64px] pt-24 pb-12 sticky top-0 z-10 bg-[#F5F2ED]/60 backdrop-blur-sm">
        <h1 className="text-[56px] font-bold font-style-script text-black">
          Album Photo
        </h1>
        <p className="font-quicksand text-[16px] text-zinc-600 font-semibold mt-2">
          Découvrez comment nos clientes subliment leur quotidien avec nos
          créations.
        </p>
      </div>

      {/* Masonry Pinterest via CSS columns */}
      <div className="px-6 sm:px-12 lg:px-[64px] pb-24">
        <div
          style={{
            columnCount: 4,
            columnGap: "24px",
          }}
          className="lg:columns-4 md:columns-3 sm:columns-2 columns-2"
        >
          {PUBLICATIONS.map((pub, index) => (
            <div key={index} className="break-inside-avoid mb-6">
              <PreAlbumCard
                imageUrl={pub.imageUrl}
                authorAvatar={pub.authorAvatar}
                author={pub.author}
                likes={pub.likes}
                sharing={pub.sharing}
                comments={pub.comments}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
