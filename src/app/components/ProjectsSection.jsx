"use client";

import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";

import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Project 1",
    description: "This is Book market website",
    image: "/image/projects/1.png",
    tag: ["All", "Web", "Mobile"],
    gitUrl: "https://github.com/Abdurahmono4/MyPorfolioWeb.git",
    previewUrl: "https://market-place-co1h.vercel.app/",
  },
  {
    id: 2,
    title: "Project 2",
    description: "A mobile app for a local business",
    image: "/image/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "",
    previewUrl: "https://myadmirableweb.netlify.app/",
    imageWidth: 450, // Custom width
    imageHeight: 300,
  },
  {
    id: 3,
    title: "Project 3",
    description: "A customizable e-commerce platform",
    image: "/image/projects/3.png",
    tag: ["All", "Web", "Ecommerce"],
    gitUrl: "/",
    previewUrl: "https://main-exam-seven.vercel.app/",
    imageWidth: 450, // Custom width
    imageHeight: 300,
  },
  {
    id: 4,
    title: "Project 4",
    description: "A virtual reality experience for a local store",
    image: "/image/projects/4.png",
    tag: ["All", "Web", "VR"],
    gitUrl: "/",
    previewUrl: "sneakers-drab-alpha.vercel.app",
    imageWidth: 450, // Custom width
    imageHeight: 300,
  },
  {
    id: 5,
    title: "Project 5",
    description: "A responsive website for a furniture and houses ",
    image: "/image/projects/5.png",
    tag: ["All", "Web", "Mobile"],
    gitUrl: "",
    previewUrl: "https://feature-tawny.vercel.app/",
    imageWidth: 450, // Custom width
    imageHeight: 300,
  },
  {
    id: 6,
    title: "Project 6",
    description: "A customizable todo app",
    image: "/image/projects/6.png",
    tag: ["All", "Web"],
    gitUrl: "",
    previewUrl: "https://to-do-list-five-chi-76.vercel.app/",
    imageWidth: 450, // Custom width
    imageHeight: 300,
  },
  {
    id: 7,
    title: "Project 7",
    description: "A customizable digital art gallery",
    image: "/image/projects/7.png",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "https://c-user-rho.vercel.app/",
    imageWidth: 350, // Custom width
    imageHeight: 300,
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
    <section id="projects" className="py-4">
      <div className=" text-center font-bold text-white mt-4 ">
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
                ImgUrl={project.image}
                tag={project.tag}
                gitUrl={project.gitUrl}
                previewUrl={project.previewUrl}
                imageWidth={project.imageWidth}
                imageHeight={project.imageHeight}
              />
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ProjectsSection;
