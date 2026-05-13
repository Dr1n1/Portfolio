import React from "react";

const sectionOneNav = [
  { label: "Intro", target: "#section-one" },
  { label: "Showcase", target: "#section-two" },
  { label: "About", target: "#about" },
];

function SectionOneHero() {
  const onJump = (target) => {
    const node = document.querySelector(target);
    if (node) {
      node.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="section-one" className="section-one-hero">
      <div className="section-one-grid">
        <article className="section-one-panel section-one-solid">
          <div className="section-one-symbol">✧</div>
          <h1 className="section-one-letter">D</h1>
          <p className="section-one-index">01</p>
        </article>

        <article className="section-one-panel section-one-accent">
          <div className="section-one-orb">
            <span>NOT SOUL,</span>
            <span>BUT DRIN.</span>
          </div>
          <p className="section-one-index">02</p>
        </article>

        <article className="section-one-panel section-one-copy">
          <h2 className="section-one-letter">R</h2>
          <p className="section-one-description">
            Full-stack developer focused on bold interfaces, useful products, and
            clean execution.
          </p>
          <button
            type="button"
            className="section-one-arrow"
            onClick={() => onJump("#section-two")}
            aria-label="Go to second section"
          >
            ↘
          </button>
          <p className="section-one-index">03</p>
        </article>

        <article className="section-one-panel section-one-solid section-one-nav-panel">
          <nav className="section-one-nav" aria-label="Section one navigation">
            {sectionOneNav.map((item) => (
              <button
                key={item.target}
                type="button"
                className="section-one-nav-btn"
                onClick={() => onJump(item.target)}
              >
                {item.label}
              </button>
            ))}
          </nav>
          <h2 className="section-one-letter">N</h2>
          <p className="section-one-index">04</p>
        </article>
      </div>
    </section>
  );
}

export default SectionOneHero;
