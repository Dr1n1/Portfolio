import React from "react";

const technicalSystem = [
  { title: "Front End", items: ["React JS", "Redux", "Tailwind", "Bootstrap", "Vue JS"] },
  { title: "Back End", items: ["Node JS", "Express", "Shopify App APIs"] },
  { title: "APIs", items: ["REST API", "GraphQL", "Webhooks"] },
  { title: "Animations", items: ["Framer Motion", "GSAP", "Micro-interactions"] },
  { title: "Tools", items: ["GitHub", "Bitbucket", "Jira", "ClickUp", "Toggl"] },
  { title: "Shopify", items: ["Liquid", "Mantle", "Custom App UX", "Inventory Sync"] },
];

function BlueprintTechnicalSystemSection() {
  return (
    <section className="blueprint-section">
      <header className="blueprint-heading-row">
        <span className="blueprint-heading-index">03</span>
        <span className="blueprint-heading-label">Technical System</span>
      </header>

      <div className="technical-grid">
        {technicalSystem.map((group) => (
          <article key={group.title} className="blueprint-cell technical-cell">
            <p className="micro-label">{group.title}</p>
            <ul>
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

export default BlueprintTechnicalSystemSection;
