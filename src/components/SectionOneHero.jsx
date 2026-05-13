import React from "react";

const sectionOneNav = [
  { label: "Intro", target: "#section-one" },
  { label: "About", target: "#about" },
  { label: "Work", target: "#work" },
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
          <h2 className="section-one-letter">R</h2>
          <p className="section-one-index">02</p>
        </article>

        <article className="section-one-panel section-one-copy">
          <div>
            <p className="section-one-description">To the builder, the spoils.</p>
            <button
              type="button"
              className="section-one-arrow"
              onClick={() => onJump("#about")}
              aria-label="Go to about section"
            >
              ↘
            </button>
          </div>
          <h2 className="section-one-letter section-one-letter-bottom">I</h2>
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
