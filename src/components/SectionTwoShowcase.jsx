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

        <div className="section-two-grid">
          <article className="section-two-card section-two-profile">
            <div className="section-two-avatar">D</div>
            <p className="section-two-muted">About me</p>
            <h2>
              I&apos;m,
              <br />
              Drin
            </h2>
            <p>Building visual systems and production-ready web apps.</p>
          </article>

          <article className="section-two-card section-two-title">
            <h2>Portfolio</h2>
            <div className="section-two-metric-grid">
              <div className="section-two-metric">
                <strong>251</strong>
                <span>Projects</span>
              </div>
              <div className="section-two-metric">
                <strong>156</strong>
                <span>Awards</span>
              </div>
            </div>
          </article>

          <article className="section-two-card section-two-feature">
            <p>Featured Work</p>
            <strong>172 Global Design Awards</strong>
          </article>
        </div>

        {children}
      </div>
    </section>
  );
}

export default SectionTwoShowcase;
