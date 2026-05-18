import React from "react";
import { motion } from "framer-motion";
import { useBlueprintMotion } from "./blueprintMotion";

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

const cvPdfUrl = `${process.env.PUBLIC_URL || ""}/DrinKrasniqiCV.pdf`;

function handleCvDownload(event) {
  event.preventDefault();
  const link = document.createElement("a");
  link.href = cvPdfUrl;
  link.download = "DrinKrasniqiCV.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

function BlueprintProfileSection() {
  const { revealItem, staggerDelay } = useBlueprintMotion();

  return (
    <section className="blueprint-section" id="about">
      <motion.header
        className="blueprint-heading-row"
        {...revealItem(staggerDelay(0))}
      >
        <p className="blueprint-heading-kicker">01 / PROFILE</p>
      </motion.header>

      <div className="profile-grid">
        <motion.article
          className="blueprint-cell profile-main"
          {...revealItem(staggerDelay(1))}
        >
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
            <a href={cvPdfUrl} onClick={handleCvDownload}>
              CV
            </a>
          </div>
        </motion.article>

        <motion.aside
          className="blueprint-cell profile-side"
          {...revealItem(staggerDelay(2))}
        >
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
        </motion.aside>
      </div>

      <div className="profile-meta-row">
        {profileMeta.map((item, index) => (
          <motion.div
            key={item.label}
            className="blueprint-cell meta-cell"
            {...revealItem(staggerDelay(3 + index))}
          >
            <p className="micro-label">{item.label}</p>
            <p>{item.value}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default BlueprintProfileSection;
