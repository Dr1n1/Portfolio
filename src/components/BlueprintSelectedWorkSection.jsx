import React from "react";
import decpro from "../images/work/decpro.png";
import pronins from "../images/work/pronins.png";
import nyinterboro from "../images/work/nyinterboro.png";

const projects = [
  {
    no: "01",
    title: "DecPro",
    stack: "Web Platform / Engineering Build",
    img: decpro,
    link: "https://decprojects.net",
    featured: true,
  },
  {
    no: "02",
    title: "NyInterboro",
    stack: "Business Web / CMS + UX",
    img: nyinterboro,
    link: "https://nyinterboro.com",
  },
  {
    no: "03",
    title: "PRonins",
    stack: "Corporate Site / Product Presence",
    img: pronins,
    link: "https://pronins.net",
  },
];

function BlueprintSelectedWorkSection() {
  const [featured, second, third] = projects;

  return (
    <section className="blueprint-section" id="work">
      <header className="blueprint-heading-row">
        <span className="blueprint-heading-index">04</span>
        <span className="blueprint-heading-label">Selected Work</span>
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
          <p>{featured.stack}</p>
          <img src={featured.img} alt={featured.title} />
        </a>

        <a
          href={second.link}
          target="_blank"
          rel="noreferrer"
          className="blueprint-cell selected-tile"
        >
          <p className="micro-label">Project {second.no}</p>
          <h3>{second.title}</h3>
          <p>{second.stack}</p>
          <img src={second.img} alt={second.title} />
        </a>

        <a
          href={third.link}
          target="_blank"
          rel="noreferrer"
          className="blueprint-cell selected-tile"
        >
          <p className="micro-label">Project {third.no}</p>
          <h3>{third.title}</h3>
          <p>{third.stack}</p>
          <img src={third.img} alt={third.title} />
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
