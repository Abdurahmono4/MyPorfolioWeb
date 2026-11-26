"use client";
import { useState } from "react";

const projects = [
  {group:"Engineering", title:"Oil pipeline monitoring", summary:"Remote monitoring of pipeline pressure and flow through IoT sensors.", details:"The project brings two measurements into one monitoring interface. The dashboard gives operators a remote view of conditions along an oil pipeline.", link:"https://bejewelled-granita-b3208f.netlify.app/", action:"Open dashboard ↗"},
  {group:"Web development", title:"Developer portfolio", summary:"A Next.js portfolio for engineering projects, research, and professional experience.", details:"The site brings together a filterable project index, research links, a downloadable CV, and a contact form. React manages the interactive views and Tailwind CSS supports the responsive layout.", link:"https://github.com/Abdurahmono4/MyPorfolioWeb", action:"View source ↗"}
];

export default function ProjectsSection() {
  const [filter, setFilter] = useState("All");
  return <section id="projects" className="work-index"><h2>Selected work</h2>
    <div className="filters" aria-label="Project categories">{["All","Engineering","Web development"].map(category =>
      <button type="button" key={category} aria-pressed={category === filter} onClick={() => setFilter(category)}>{category}</button>)}</div>
    <div className="project-list">{projects.filter(project => filter === "All" || project.group === filter).map(project =>
      <article key={project.title}><p className="eyebrow">{project.group}</p><h3>{project.title}</h3><p>{project.summary}</p>
      <details><summary>Project details</summary><p>{project.details}</p></details><a href={project.link}>{project.action}</a></article>)}</div>
  </section>;
}
