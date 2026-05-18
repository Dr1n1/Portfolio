import React from "react";

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
  return (
    <section className="blueprint-section">
      <header className="blueprint-heading-row">
        <p className="blueprint-heading-kicker">02 / WORK RECORD</p>
      </header>

      <div className="work-record-table">
        <div className="work-row work-row-head">
          <span>Company</span>
          <span>Role</span>
          <span>Period</span>
          <span>Impact</span>
        </div>
        {workRecords.map((record) => (
          <div key={`${record.company}-${record.period}`} className="work-row">
            <span>{record.company}</span>
            <span>{record.role}</span>
            <span>{record.period}</span>
            <span>{record.impact}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default BlueprintWorkRecordSection;
