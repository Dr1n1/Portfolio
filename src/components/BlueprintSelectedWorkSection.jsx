import React from "react";
import { motion } from "framer-motion";
import { useBlueprintMotion } from "./blueprintMotion";
import decpro from "../images/work/decpro.png";
import pronins from "../images/work/pronins.png";
import nyinterboro from "../images/work/nyinterboro.png";

const projects = [
  {
    no: "01",
    title: "DecPro",
    stack: "Web Platform / Engineering Build",
    role: "Architecture + Full-stack Delivery",
    note: "Blueprint-style project system for scale and maintainability.",
    img: decpro,
    link: "https://decprojects.net",
    objectPosition: "center 22%",
  },
  {
    no: "02",
    title: "NyInterboro",
    stack: "Business Web / CMS + UX",
    role: "Frontend + Content System",
    note: "Structured information layout with performance-oriented UX.",
    img: nyinterboro,
    link: "https://nyinterboro.com",
    objectPosition: "center center",
  },
  {
    no: "03",
    title: "PRonins",
    stack: "Corporate Site / Product Presence",
    role: "Design-to-code Execution",
    note: "Clean corporate presentation with conversion-focused sections.",
    img: pronins,
    link: "https://pronins.net",
    objectPosition: "center center",
  },
];

function BlueprintSelectedWorkSection() {
  const { revealItem, staggerDelay } = useBlueprintMotion();

  return (
    <section className="blueprint-section" id="work">
      <motion.header
        className="blueprint-heading-row"
        {...revealItem(staggerDelay(0))}
      >
        <p className="blueprint-heading-kicker">04 / SELECTED WORK</p>
      </motion.header>

      <div className="selected-work-grid">
        {projects.map((project, index) => (
          <motion.a
            key={project.title}
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="blueprint-cell selected-tile"
            {...revealItem(staggerDelay(1 + index))}
          >
            <p className="micro-label">Project {project.no}</p>
            <h3>{project.title}</h3>
            <p className="selected-stack">{project.stack}</p>
            <p className="selected-role">{project.role}</p>
            <div className="selected-image-wrap">
              <img
                src={project.img}
                alt={project.title}
                style={{ objectPosition: project.objectPosition }}
              />
            </div>
            <p className="selected-note">{project.note}</p>
          </motion.a>
        ))}
      </div>
    </section>
  );
}

export default BlueprintSelectedWorkSection;
