import React from "react";
import { motion, useReducedMotion } from "framer-motion";

const sectionOneNav = [
  { label: "Intro", target: "#home", activePath: "#home" },
  { label: "About", target: "#about", activePath: "#about" },
  { label: "Work", target: "#work", activePath: "#work" },
];

function SectionOneHero({ activeSection = "#home" }) {
  const prefersReducedMotion = useReducedMotion();

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
          <nav
            className="section-one-nav"
            aria-label="Section navigation"
          >
            {sectionOneNav.map((item, index) => (
              <React.Fragment key={item.target}>
                {index > 0 ? (
                  <span className="section-one-nav-sep" aria-hidden="true">
                    /
                  </span>
                ) : null}
                <motion.button
                  type="button"
                  className={`section-one-nav-btn${
                    activeSection === item.activePath ? " is-active" : ""
                  }`}
                  onClick={() => onJump(item.target)}
                  whileTap={prefersReducedMotion ? {} : { opacity: 0.7 }}
                  initial={prefersReducedMotion ? false : { opacity: 0 }}
                  animate={prefersReducedMotion ? {} : { opacity: 1 }}
                  transition={tileTransition(0.98 + index * 0.08)}
                >
                  {item.label}
                </motion.button>
              </React.Fragment>
            ))}
          </nav>
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
