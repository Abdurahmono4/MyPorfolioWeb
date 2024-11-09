"use client";

import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";

import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Project 1",
    description: "A website for a local fashion boutique",
    image: "/images/project/1.jpg",
    tag: ["All", "Web", "Mobile"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Project 2",
    description: "A mobile app for a local business",
    image: "/images/project/2.jpg",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Project 3",
    description: "A customizable e-commerce platform",
    image: "/images/project/3.jpg",
    tag: ["All", "Web", "Ecommerce"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Project 4",
    description: "A virtual reality experience for a local store",
    image: "/images/project/4.jpg",
    tag: ["All", "Web", "VR"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Project 5",
    description: "A responsive website for a local travel agency",
    image: "/images/project/5.jpg",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Project 6",
    description: "A customizable fitness app",
    image: "/images/project6.jpg",
    tag: ["All", "Web", "Fitness"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 7,
    title: "Project 7",
    description: "A customizable digital art gallery",
    image: "/images/project7.jpg",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 8,
    title: "Project 8",
    description: "A customizable e-commerce platform",
    image: "/images/project8.jpg",
    tag: ["All", "Web", "Ecommerce"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 9,
    title: "Project 9",
    description: "A virtual reality experience for a local store",
    image: "/images/project9.jpg",
    tag: ["All", "Mobile", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useState(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    intial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };
  return (
    <div id="projects" className=" text-center font-bold text-white mt-4 ">
      <h2 className="text-white text-3xl  ">My Projects</h2>
      <div className="text-white flex flex-row items-center justify-center gap-3 py-6   ">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8  md:gap-12 ">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            intial="intial"
            animate={isInView ? "animate" : "intial"}
            transition={{ duration: 0.5, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              image={project.image}
              tag={project.tag}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectsSection;
