import React from "react";

const socials = [
  { label: "GitHub", href: "https://github.com/Dr1n1" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/drin-krasniqi-5524a4192/" },
  { label: "Instagram", href: "https://www.instagram.com/drin.krasniqi_/" },
  { label: "Email", href: "mailto:krasniqi.drin97@gmail.com" },
];

const profileMeta = [
  { label: "Location", value: "Prishtina, Kosovo" },
  { label: "Status", value: "Available for selected builds" },
  { label: "Focus", value: "React, Shopify Apps, Product Interfaces" },
  { label: "Experience", value: "5+ years delivery-focused web work" },
];

function BlueprintProfileSection() {
  return (
    <section className="blueprint-section" id="about">
      <header className="blueprint-heading-row">
        <p className="blueprint-heading-kicker">01 / PROFILE</p>
      </header>

      <div className="profile-grid">
        <article className="blueprint-cell profile-main">
          <p className="micro-label">Identity</p>
          <h2 className="blueprint-title profile-display">Web-Application Developer.</h2>
          <p className="blueprint-copy">
            Designing and shipping web products with a balance of visual precision,
            practical architecture, and calm execution.
          </p>
          <div className="profile-links">
            {socials.map((item) => (
              <a key={item.label} href={item.href} target="_blank" rel="noreferrer">
                {item.label}
              </a>
            ))}
            <a href="#footer">CV</a>
          </div>
        </article>

        <aside className="blueprint-cell profile-side">
          <p className="micro-label">Current Position</p>
          <p className="blueprint-copy spec-copy">
            Freelance full-stack developer focused on frontend systems and
            scalable web applications for product teams and independent brands.
          </p>
          <div className="spec-list">
            <p>System-first frontend architecture</p>
            <p>Shopify app product implementation</p>
            <p>Design-to-code execution with measurable output</p>
          </div>
        </aside>
      </div>

      <div className="profile-meta-row">
        {profileMeta.map((item) => (
          <div key={item.label} className="blueprint-cell meta-cell">
            <p className="micro-label">{item.label}</p>
            <p>{item.value}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default BlueprintProfileSection;
