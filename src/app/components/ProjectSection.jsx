"use client";
import { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";
import { projectsData } from "../../lib/siteData";

const getUniqueTags = (projects) => {
  const tags = new Set();
  projects.forEach((project) => project.tags.forEach((tag) => tags.add(tag)));
  return ["All", ...Array.from(tags).filter((tag) => tag !== "All")];
};

const ProjectSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) => project.tags.includes(tag));
  const tags = getUniqueTags(projectsData);

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects" ref={ref}>
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">My Projects</h2>
      <div className="text-white flex flex-wrap justify-center gap-2 py-2">
        {tags.map((tagName, index) => (
          <ProjectTag
            key={index}
            onClick={handleTagChange}
            tag={tagName}
            isSelected={tag === tagName}
          />
        ))}
      </div>
      <ul className="grid gap-8 md:grid-cols-3 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={project.id}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <ProjectCard
              title={project.title}
              imgURL={project.image}
              description={project.description}
              gitURL={project.gitURL}
              previewURL={project.previewURL}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectSection;
