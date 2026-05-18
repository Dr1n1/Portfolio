import React from "react";
import { motion } from "framer-motion";
import { useBlueprintMotion } from "./blueprintMotion";

const technicalSystem = [
  { title: "Front End", items: ["React JS", "Redux", "Tailwind", "Bootstrap", "Vue JS"] },
  { title: "Back End", items: ["Node JS", "Express", "Shopify App APIs"] },
  { title: "APIs", items: ["REST API", "GraphQL", "Webhooks"] },
  { title: "Animations", items: ["Framer Motion", "GSAP", "Micro-interactions"] },
  { title: "Tools", items: ["GitHub", "Bitbucket", "Jira", "ClickUp", "Toggl"] },
  { title: "Shopify", items: ["Liquid", "Mantle", "Custom App UX", "Inventory Sync"] },
  { title: "AI", items: ["OpenAI", "Anthropic", "Copilot", "Claude"] },
  { title: "CMS", items: ["Shopify", "WordPress", "Drupal", "Magento"] },
];

function BlueprintTechnicalSystemSection() {
  const { revealItem, staggerDelay } = useBlueprintMotion();

  return (
    <section className="blueprint-section">
      <motion.header
        className="blueprint-heading-row"
        {...revealItem(staggerDelay(0))}
      >
        <p className="blueprint-heading-kicker">03 / TECHNICAL SYSTEM</p>
      </motion.header>

      <div className="technical-grid">
        {technicalSystem.map((group, index) => (
          <motion.article
            key={group.title}
            className="blueprint-cell technical-cell"
            {...revealItem(staggerDelay(1 + index))}
          >
            <p className="technical-title">{group.title}</p>
            <ul>
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export default BlueprintTechnicalSystemSection;
