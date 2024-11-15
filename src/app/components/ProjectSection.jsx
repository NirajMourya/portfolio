"use client"
import { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";

const projectsData = [
    {
        id:1,
        title:"Bibliobazaar",
        description:"E-Commerce application for Bibliophile",
        image:"/images/projects/Bibliobazaar.png",
        tag:["All","Web","Mobile"],
        gitURL:"/",
        previewURL:"/"
    },
    {
        id:2,
        title:"Country Capital",
        description:"Country Capital Game",
        image:"/images/projects/CountryCapital.png",
        tag:["All","Web"],
        gitURL:"/",
        previewURL:"/"
    },
    {
        id:3,
        title:"Place Picker",
        description:"Place you would like to visit",
        image:"/images/projects/PlacePicker.png",
        tag:["All","Web"],
        gitURL:"/",
        previewURL:"/"
    },
    {
        id:4,
        title:"ShortLinkr",
        description:"Shorten any URL!",
        image:"/images/projects/ShortLinkr.png",
        tag:["All","Web"],
        gitURL:"/",
        previewURL:"/"
    },
    {
        id:5,
        title:"Tick Tock Challenge",
        description:"Game to stop the timer at correct timer",
        image:"/images/projects/TickTockChallenge.png",
        tag:["All","Web"],
        gitURL:"/",
        previewURL:"/"
    },
    {
        id:6,
        title:"ToDo",
        description:"Maintain your task in To Do list",
        image:"/images/projects/ToDo.png",
        tag:["All","Web"],
        gitURL:"/",
        previewURL:"/"
    },
]
const tags = ["All","Web","Mobile"]
const ProjectSection = () => {
    const [tag,setTag] = useState("All");
    
    const handleTagChange = (newTag) => {
        setTag(newTag)
    }

    const filteredProjects = projectsData.filter((project) => {
        return project.tag.includes(tag)
    })
    return (
        <>
           <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
           My Projects
           </h2>
           <div className="text-white flex flex-row justify-center items-center gap-2 py-2">
             {

              tags.map((tagName,index) => (
                <ProjectTag key={index} onClick={handleTagChange} tag={tagName} isSelected={tag === tagName} />
              ))
            }
           </div>
           <div className="grid md:grid-cols-3 gap-8 md:gap-12 py-6">
           {
              filteredProjects.map((project) => (
              <ProjectCard 
              key={project.id} 
              title={project.title} 
              imgURL={project.image} 
              description={project.description}
              gitURL={project.gitURL}
              previewURL={project.previewURL}/>
            ))
           }
           </div>
        </>
     );
     
}

export default ProjectSection;