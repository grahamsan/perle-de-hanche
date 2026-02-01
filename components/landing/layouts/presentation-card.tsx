"use client";

import Image from "next/image";

interface PresentationCardProps {
  imageUrl: string;
  title: string;
  description: string;
}

export default function PresentationCard({
  imageUrl,
  title,
  description,
}: PresentationCardProps) {
  return (
    <div
      className="flex flex-col lg:flex-row gap-y-5 lg:gap-x-8 w-full max-w-[280px] 
    lg:max-w-[1100px] h-full bg-[#F5F2ED]/70 backdrop-blur-[10px] p-4 rounded-[18px] border border-zinc-200"
    >
      {/* Image */}
      <div className="w-full rounded-[12px] overflow-hidden aspect-[4/3]">
        <img
          src={imageUrl}
          alt={title}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="flex flex-col gap-y-3 text-left lg:my-auto">
        <h3 className="text-zinc-800 font-semibold text-[24px] mb-2 leading-snug font-quicksand">
          {title}
        </h3>
        <p className="text-zinc-500 text-[14px] lg:text-[16px] leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
