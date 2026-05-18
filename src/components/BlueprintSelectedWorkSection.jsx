import React from "react";
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
  const [featured, second, third] = projects;

  return (
    <section className="blueprint-section" id="work">
      <header className="blueprint-heading-row">
        <p className="blueprint-heading-kicker">04 / SELECTED WORK</p>
      </header>

      <div className="selected-work-grid">
        <a
          href={featured.link}
          target="_blank"
          rel="noreferrer"
          className="blueprint-cell selected-tile featured"
        >
          <p className="micro-label">Project {featured.no}</p>
          <h3>{featured.title}</h3>
          <p className="selected-stack">{featured.stack}</p>
          <p className="selected-role">{featured.role}</p>
          <div className="selected-image-wrap">
            <img
              src={featured.img}
              alt={featured.title}
              style={{ objectPosition: featured.objectPosition }}
            />
          </div>
          <p className="selected-note">{featured.note}</p>
        </a>

        <a
          href={second.link}
          target="_blank"
          rel="noreferrer"
          className="blueprint-cell selected-tile"
        >
          <p className="micro-label">Project {second.no}</p>
          <h3>{second.title}</h3>
          <p className="selected-stack">{second.stack}</p>
          <p className="selected-role">{second.role}</p>
          <div className="selected-image-wrap">
            <img
              src={second.img}
              alt={second.title}
              style={{ objectPosition: second.objectPosition }}
            />
          </div>
          <p className="selected-note">{second.note}</p>
        </a>

        <a
          href={third.link}
          target="_blank"
          rel="noreferrer"
          className="blueprint-cell selected-tile"
        >
          <p className="micro-label">Project {third.no}</p>
          <h3>{third.title}</h3>
          <p className="selected-stack">{third.stack}</p>
          <p className="selected-role">{third.role}</p>
          <div className="selected-image-wrap">
            <img
              src={third.img}
              alt={third.title}
              style={{ objectPosition: third.objectPosition }}
            />
          </div>
          <p className="selected-note">{third.note}</p>
        </a>

        <article className="blueprint-cell selected-spec">
          <p className="micro-label">Specification</p>
          <p>
            Design and engineering projects with a blueprint approach:
            modular UI, measurable performance, reusable systems, and
            production-ready delivery.
          </p>
        </article>
      </div>
    </section>
  );
}

export default BlueprintSelectedWorkSection;
