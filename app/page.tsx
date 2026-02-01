"use client";
import HeroSection from "@/components/landing/hero-section";
import PresentationSection from "@/components/landing/presentation-section";
import useLenis from "@/features/lenis/hooks";
import LanguageSection from "@/components/landing/language-section";
import PreAlbumSection from "@/components/landing/pre-album-section";

export default function Home() {
  const { scrollTo, stop, start } = useLenis({
    duration: 2,
    easing: (t: number) => 1 - Math.pow(1 - t, 2), // easeOutCubic
    lerp: 0.005, // Plus fluide
    wheelMultiplier: 1.5,
  });
  return (
    <main>
      <HeroSection />
      <PresentationSection />
      <LanguageSection />
      <PreAlbumSection />
    </main>
  );
}
