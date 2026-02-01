"use client";
import { useEffect, useRef, useCallback } from "react";
import Lenis from "lenis";
import { LenisOptions } from "./types";

export default function useLenis(options?: LenisOptions) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Configuration par défaut avec possibilité de surcharge
    const defaultOptions: LenisOptions = {
      duration: 0.1,
      easing: (t) => 1 - Math.pow(1 - t, 3),
      lerp: 0.005,
      smoothWheel: true,
      wheelMultiplier: 1.5,
      touchMultiplier: 2,
      infinite: false,
      orientation: "vertical",
      gestureOrientation: "vertical",
      syncTouch: false,
      autoResize: true,
    };

    // Fusion des options par défaut avec les options personnalisées
    const mergedOptions = { ...defaultOptions, ...options };

    // Initialisation de Lenis
    lenisRef.current = new Lenis(mergedOptions);

    // Fonction RAF optimisée
    let rafId: number;
    const raf = (time: number) => {
      if (lenisRef.current) {
        lenisRef.current.raf(time);
      }
      rafId = requestAnimationFrame(raf);
    };

    // Démarrer la boucle RAF
    rafId = requestAnimationFrame(raf);

    // Event listeners optionnels pour le debugging
    if (process.env.NODE_ENV === "development") {
      lenisRef.current.on("scroll", (e: any) => {
        console.log("Lenis scroll:", e);
      });
    }

    // Fonction de nettoyage
    return () => {
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
      if (lenisRef.current) {
        lenisRef.current.destroy();
        lenisRef.current = null;
      }
    };
  }, [options]);

  // Méthodes utilitaires
  const scrollTo = useCallback((target: string | number, options?: any) => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(target, options);
    }
  }, []);

  const stop = useCallback(() => {
    if (lenisRef.current) {
      lenisRef.current.stop();
    }
  }, []);

  const start = useCallback(() => {
    if (lenisRef.current) {
      lenisRef.current.start();
    }
  }, []);

  // Retourner l'instance et les méthodes utilitaires
  return {
    lenis: lenisRef.current,
    scrollTo,
    stop,
    start,
  };
}
