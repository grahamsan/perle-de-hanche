"use client";

import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import type { Engine } from "tsparticles-engine";
import { useCallback } from "react";

export default function HeroParticles() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <div className="absolute inset-0 z-10 pointer-events-auto">
      <Particles
        init={particlesInit}
        options={{
          fullScreen: false,
          background: { color: "transparent" },

          particles: {
            number: {
              value: 200,
            },
            color: {
              value: ["#E9AB17", "#3E2723"],
            },
            shape: {
              type: "circle",
            },
            opacity: {
              value: 0.3,
            },
            size: {
              value: { min: 4, max: 6 },
            },

            /** ⛔ PAS DE MOUVEMENT AUTOMATIQUE */
            move: {
              enable: true,
              speed: 0.35,
            },
          },

          /** ALIGNEMENT VERTICAL */
          emitters: {
            position: {
              x: 85,
              y: 50,
            },
            size: {
              width: 0,
              height: 100,
            },
            rate: {
              quantity: 1,
              delay: 0.1,
            },
          },

          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: "repulse",
              },
            },
            modes: {
              repulse: {
                distance: 50,
                duration: 1.5,
              },
            },
          },

          detectRetina: true,
        }}
        className="h-full w-full"
      />
    </div>
  );
}
