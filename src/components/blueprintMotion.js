import { useEffect, useState, useCallback } from "react";
import { useReducedMotion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1];
const DURATION = 0.8;
const STAGGER_STEP = 0.06;
const MOBILE_MAX_DELAY = 0.36;

function getMotionConfig() {
  if (typeof window === "undefined") {
    return { y: 16, amount: 0.15, maxDelay: Infinity };
  }
  const w = window.innerWidth;
  if (w <= 640) {
    return { y: 10, amount: 0.08, maxDelay: MOBILE_MAX_DELAY };
  }
  if (w <= 1024) {
    return { y: 16, amount: 0.12, maxDelay: Infinity };
  }
  return { y: 16, amount: 0.15, maxDelay: Infinity };
}

export function useBlueprintMotion() {
  const prefersReducedMotion = useReducedMotion();
  const [config, setConfig] = useState(getMotionConfig);

  useEffect(() => {
    const onResize = () => setConfig(getMotionConfig());
    window.addEventListener("resize", onResize, { passive: true });
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const capDelay = useCallback(
    (delay) => Math.min(delay, config.maxDelay),
    [config.maxDelay]
  );

  const revealSection = useCallback(
    (delay = 0) => ({
      initial: prefersReducedMotion ? false : { opacity: 0, y: config.y },
      whileInView: prefersReducedMotion ? {} : { opacity: 1, y: 0 },
      viewport: { once: true, amount: config.amount },
      transition: {
        duration: DURATION,
        delay: capDelay(delay),
        ease: EASE,
      },
    }),
    [prefersReducedMotion, config.y, config.amount, capDelay]
  );

  const revealItem = useCallback(
    (delay = 0) => ({
      initial: prefersReducedMotion ? false : { opacity: 0, y: config.y },
      whileInView: prefersReducedMotion ? {} : { opacity: 1, y: 0 },
      viewport: { once: true, amount: config.amount },
      transition: {
        duration: DURATION,
        delay: capDelay(delay),
        ease: EASE,
      },
    }),
    [prefersReducedMotion, config.y, config.amount, capDelay]
  );

  const staggerDelay = useCallback((index) => capDelay(index * STAGGER_STEP), [capDelay]);

  return {
    prefersReducedMotion,
    revealSection,
    revealItem,
    staggerDelay,
  };
}
