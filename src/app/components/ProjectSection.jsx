"use client";
import { useMemo, useRef, useState } from "react";
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

  const tags = useMemo(() => getUniqueTags(projectsData), []);
  const filteredProjects = useMemo(
    () => projectsData.filter((project) => project.tags.includes(tag)),
    [tag]
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects" ref={ref} className="px-2 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-5xl text-center">
        <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">My Projects</h2>
        <p className="mx-auto max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
          A collection of web experiences focused on thoughtful interfaces, modern tooling, and polished product delivery.
        </p>
      </div>
      <div className="mt-8 flex flex-wrap justify-center gap-2 py-2">
        {tags.map((tagName) => (
          <ProjectTag
            key={tagName}
            onClick={handleTagChange}
            tag={tagName}
            isSelected={tag === tagName}
          />
        ))}
      </div>
      <ul className="grid auto-rows-fr gap-8 md:grid-cols-3 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={project.id}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="h-full"
          >
            <ProjectCard
              title={project.title}
              imgURL={project.image}
              description={project.description}
              gitURL={project.gitURL}
              previewURL={project.previewURL}
              tags={project.tags}
              featured={false}
              category={project.tags.find((currentTag) => currentTag !== "All") || "Web"}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectSection;
