import React from "react";

const sectionTwoLinks = [
  { label: "Showcase", target: "#section-two" },
  { label: "About", target: "#about" },
  { label: "Work", target: "#work" },
  { label: "Contact", target: "#footer" },
];

function SectionTwoShowcase({ children }) {
  const onJump = (target) => {
    const node = document.querySelector(target);
    if (node) {
      node.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="section-two" className="section-two-showcase">
      <div className="section-two-shell">
        <nav className="section-two-sticky-nav" aria-label="Section two navigation">
          {sectionTwoLinks.map((item) => (
            <button
              key={item.target}
              type="button"
              className="section-two-nav-btn"
              onClick={() => onJump(item.target)}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="section-two-grid-editorial">
          <article className="section-two-panel section-two-panel-solid">
            <p className="section-two-symbol">◆</p>
            <h2 className="section-two-letter">D</h2>
            <p className="section-two-index">01</p>
          </article>

          <article className="section-two-panel section-two-panel-accent">
            <h2 className="section-two-letter">R</h2>
            <p className="section-two-index">02</p>
          </article>

          <article className="section-two-panel section-two-panel-copy">
            <h2 className="section-two-letter">I</h2>
            <p className="section-two-copy">Make it loud. Make it useful.</p>
            <p className="section-two-index">03</p>
          </article>

          <article className="section-two-panel section-two-panel-solid section-two-panel-nav">
            <h2 className="section-two-letter">N</h2>
            <p className="section-two-index">04</p>
          </article>
        </div>

        {children}
      </div>
    </section>
  );
}

export default SectionTwoShowcase;
