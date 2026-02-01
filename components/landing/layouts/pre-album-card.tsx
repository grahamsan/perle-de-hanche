"use client";

import { Heart, Share2 } from "lucide-react";

type PreAlbumCardProps = {
  imageUrl: string;
  authorAvatar: string;
  author: string;
  likes: number;
  sharing: number;
  comments: number;
};

export default function PreAlbumCard({
  imageUrl,
  authorAvatar,
  author,
  likes,
  sharing,
  comments,
}: PreAlbumCardProps) {
  return (
    <div
      className="flex-shrink-0 w-80 snap-start bg-amber-50 border 
    border-gray-200 rounded-[20px] p-4 hover:scale-105 transition-all duration-500"
    >
      {/* Image mise en evidence */}
      <img
        src={imageUrl}
        alt="Publication"
        className="w-full aspect-square rounded-[14px] object-cover mb-4"
      />

      {/* Footer : avatar + nom à gauche, stats à droite */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src={authorAvatar}
            alt={`${author} avatar`}
            className="w-10 h-10 rounded-[8px] object-cover"
            width={40}
            height={40}
          />
          <span className="font-semibold text-black text-sm">{author}</span>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5 text-gray-500">
            <Heart size={16} strokeWidth={1.8} />
            <span className="text-xs font-medium">{likes}</span>
          </div>
          <div className="flex items-center gap-1.5 text-gray-500">
            <Share2 size={16} strokeWidth={1.8} />
            <span className="text-xs font-medium">{sharing}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
