import React, { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

const sectionOneNav = [
  { label: "Intro", target: "#section-one" },
  { label: "About", target: "#about" },
  { label: "Work", target: "#work" },
];

function SectionOneHero() {
  const prefersReducedMotion = useReducedMotion();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onJump = (target) => {
    const node = document.querySelector(target);
    if (node) {
      node.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const tileTransition = (delay) => ({
    duration: 0.9,
    delay,
    ease: [0.22, 1, 0.36, 1],
  });

  return (
    <section id="section-one" className="section-one-hero section-motion-shell">
      <motion.div
        className="section-one-grid"
        initial={prefersReducedMotion ? false : { opacity: 0 }}
        animate={prefersReducedMotion ? {} : { opacity: 1 }}
        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.article
          className="section-one-panel section-one-solid section-one-tile"
          initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
          animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
          transition={tileTransition(0.08)}
        >
          <motion.div
            className="section-one-symbol"
            initial={prefersReducedMotion ? false : { opacity: 0 }}
            animate={prefersReducedMotion ? {} : { opacity: 1 }}
            transition={tileTransition(0.24)}
          >
            ✧
          </motion.div>
          <motion.h1
            className="section-one-letter"
            initial={prefersReducedMotion ? false : { opacity: 0, y: 14 }}
            animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
            transition={tileTransition(0.38)}
          >
            D
          </motion.h1>
          <motion.p
            className="section-one-index"
            initial={prefersReducedMotion ? false : { opacity: 0 }}
            animate={prefersReducedMotion ? {} : { opacity: 1 }}
            transition={tileTransition(0.62)}
          >
            01
          </motion.p>
        </motion.article>

        <motion.article
          className="section-one-panel section-one-accent section-one-tile"
          initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
          animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
          transition={tileTransition(0.18)}
        >
          <motion.h2
            className="section-one-letter"
            initial={prefersReducedMotion ? false : { opacity: 0, y: 14 }}
            animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
            transition={tileTransition(0.46)}
          >
            R
          </motion.h2>
          <motion.p
            className="section-one-index"
            initial={prefersReducedMotion ? false : { opacity: 0 }}
            animate={prefersReducedMotion ? {} : { opacity: 1 }}
            transition={tileTransition(0.68)}
          >
            02
          </motion.p>
        </motion.article>

        <motion.article
          className="section-one-panel section-one-copy section-one-tile"
          initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
          animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
          transition={tileTransition(0.28)}
        >
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 8 }}
            animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
            transition={tileTransition(0.54)}
          >
            <p className="section-one-description">To the builder, the spoils.</p>
            <button
              type="button"
              className="section-one-arrow"
              onClick={() => onJump("#about")}
              aria-label="Go to about section"
            >
              ↘
            </button>
          </motion.div>
          <motion.h2
            className="section-one-letter section-one-letter-bottom"
            initial={prefersReducedMotion ? false : { opacity: 0, y: 14 }}
            animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
            transition={tileTransition(0.58)}
          >
            I
          </motion.h2>
          <motion.p
            className="section-one-index"
            initial={prefersReducedMotion ? false : { opacity: 0 }}
            animate={prefersReducedMotion ? {} : { opacity: 1 }}
            transition={tileTransition(0.72)}
          >
            03
          </motion.p>
        </motion.article>

        <motion.article
          className="section-one-panel section-one-solid section-one-nav-panel section-one-tile"
          initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
          animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
          transition={tileTransition(0.38)}
        >
          <motion.nav
            className={`section-one-nav ${isScrolled ? "is-scrolled" : ""}`}
            aria-label="Section one navigation"
            initial={prefersReducedMotion ? false : { opacity: 0, y: 10 }}
            animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
            transition={tileTransition(0.88)}
          >
            {sectionOneNav.map((item, index) => (
              <motion.button
                key={item.target}
                type="button"
                className="section-one-nav-btn"
                onClick={() => onJump(item.target)}
                whileHover={prefersReducedMotion ? {} : { y: -2, scale: 1.01 }}
                whileTap={prefersReducedMotion ? {} : { scale: 0.99 }}
                initial={prefersReducedMotion ? false : { opacity: 0 }}
                animate={prefersReducedMotion ? {} : { opacity: 1 }}
                transition={tileTransition(0.98 + index * 0.08)}
              >
                {item.label}
              </motion.button>
            ))}
          </motion.nav>
          <motion.h2
            className="section-one-letter"
            initial={prefersReducedMotion ? false : { opacity: 0, y: 14 }}
            animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
            transition={tileTransition(0.72)}
          >
            N
          </motion.h2>
          <motion.p
            className="section-one-index"
            initial={prefersReducedMotion ? false : { opacity: 0 }}
            animate={prefersReducedMotion ? {} : { opacity: 1 }}
            transition={tileTransition(0.82)}
          >
            04
          </motion.p>
        </motion.article>
      </motion.div>
    </section>
  );
}

export default SectionOneHero;
