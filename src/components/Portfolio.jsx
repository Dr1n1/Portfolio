import React from "react";
import decpro from '../images/work/decpro.png'
import pronins from '../images/work/pronins.png'
import nyinterboro from '../images/work/nyinterboro.png'

const dataofportfolio = [
  {
    title: "DecPro",
    img: decpro,
    link: "https://decprojects.net",
  },
  {
    title: "NyInterboro",
    img: nyinterboro,
    link: "https://nyinterboro.com",
  },
  {
    title: "PRonins",
    img: pronins,
    link: "https://pronins.net",
  },
];

function Portfolio() {
  return (
    <div >
      <div className="sm:px-8 mt-24 md:mt-28">
        <div className="mx-auto w-full max-w-7xl lg:px-8">
          <div className="relative px-4 sm:px-8 lg:px-12">
            <h1 className="text-3xl font-bold text-left  mb-8">Some of my projects</h1>
            <div className="mx-auto max-w-2xl lg:max-w-5xl">
              <div className="mx-auto grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2 mb-10">
                {dataofportfolio.map((project, index) => (
                     <a href={project.link} key={index} className="text-center">
                    <div  className="project-tile relative group overflow-hidden bg-white rounded-md h-full" style={{height: "300px"}}>
          <img src={project.img} alt={project.title} className="project-tile-image w-full object-cover" style={{height: 'inherit'}} />
          <div className="project-tile-overlay absolute inset-0 flex items-center justify-center">
            <p className="text-white text-center opacity-0 group-hover:opacity-100 transition duration-500">{project.title}</p>
          </div>
        </div>
                   </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
