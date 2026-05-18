import React from "react";
import { motion } from "framer-motion";
import { useBlueprintMotion } from "./blueprintMotion";

const workRecords = [
  {
    company: "PRonins",
    role: "Full-stack Developer",
    period: "2026 - Present",
    impact: "Offering AI-powered solutions for businesses to improve their operations and efficiency.",
  },
  {
    company: "NewFive",
    role: "Full-stack Developer",
    period: "2024 - 2025",
    impact: "Led Shopify app product lifecycle from UX and backend logic to release.",
  },
  {
    company: "Kutiza",
    role: "Front-End Developer",
    period: "2021 - 2023",
    impact: "Built large CRM interface architecture with reusable component systems.",
  },
  {
    company: "PRonins",
    role: "Project-based Full-stack",
    period: "2020 - Present",
    impact: "Delivered custom business websites and workflows across multiple domains.",
  },
  {
    company: "Freelance",
    role: "Web Developer",
    period: "2018 - Present",
    impact: "Designed and shipped product-ready client platforms with ongoing support.",
  },
];

function BlueprintWorkRecordSection() {
  const { revealItem, staggerDelay } = useBlueprintMotion();

  return (
    <section className="blueprint-section">
      <motion.header
        className="blueprint-heading-row"
        {...revealItem(staggerDelay(0))}
      >
        <p className="blueprint-heading-kicker">02 / WORK EXPERIENCE</p>
      </motion.header>

      <div className="work-record-table">
        <motion.div
          className="work-row work-row-head"
          {...revealItem(staggerDelay(1))}
        >
          <span>Company</span>
          <span>Role</span>
          <span>Period</span>
          <span>Impact</span>
        </motion.div>
        {workRecords.map((record, index) => (
          <motion.div
            key={`${record.company}-${record.period}`}
            className="work-row"
            {...revealItem(staggerDelay(2 + index))}
          >
            <span>{record.company}</span>
            <span>{record.role}</span>
            <span>{record.period}</span>
            <span>{record.impact}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default BlueprintWorkRecordSection;
