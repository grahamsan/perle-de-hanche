export interface LenisOptions {
  duration?: number;
  easing?: (t: number) => number;
  lerp?: number;
  smoothWheel?: boolean;
  wheelMultiplier?: number;
  touchMultiplier?: number;
  infinite?: boolean;
  orientation?: "vertical" | "horizontal";
  gestureOrientation?: "vertical" | "horizontal" | "both";
  syncTouch?: boolean;
  autoResize?: boolean;
}
