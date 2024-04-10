import React, { useState } from "react";
import Data from "./Data";
import ban from "../../assets/ban.svg";
import {motion} from "framer-motion"

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section
      id="Project"
      className="section relative flex flex-col justify-center"
      style={{ backgroundImage: `url(${ban})` }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.9, delay: 0.3 },
        }}
        className="container mx-auto px-4 md:px-8"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-5 text-blue-700 font-nunito">
          Projects I have worked on
        </h2>

        <div className="flex flex-wrap justify-center">
          {Data.map((project, index) => (
            <div
              key={project.id}
              className="project-card relative w-72 h-64 bg-gray-200 rounded-lg m-4 overflow-hidden transition duration-300 ease-in-out transform hover:scale-105"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              {hoveredIndex === index && (
                <div className="absolute bottom-0 left-0 w-full bg-blue-100 p-4 mb-5 opacity-100 transition duration-300 ease-in-out transform translate-y-5">
                  <div className="bg-blue-100 p-2">
                    <h3 className="text-lg font-bold mb-1">{project.title}</h3>
                    <p className="text-sm text-gray-600 mb-1">
                      {project.description}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
