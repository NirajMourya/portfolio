"use client"
import { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";

const projectsData = [
    {
        id:1,
        title:"Next.js Portfolio Website",
        description:"Personal display website based on Next.js and Tailwind",
        image:"/images/projects/Portfolio.png",
        tag:["All","Web","Mobile"],
        gitURL:"https://github.com/NirajMourya/portfolio",
        previewURL:"https://nirajmourya.in/"
    },
    {
        id:2,
        title:"Bibliobazaar",
        description:"E-Commerce application for Bibliophile",
        image:"/images/projects/Bibliobazaar.png",
        tag:["All","Web","Mobile"],
        gitURL:"/",
        previewURL:"https://bibliobazaar.netlify.app/"
    },
    {
        id:3,
        title:"Country Capital",
        description:"Country Capital Game",
        image:"/images/projects/CountryCapital.png",
        tag:["All","Web"],
        gitURL:"https://github.com/NirajMourya/CountryCaptialGame",
        previewURL:"https://countrycapitalgame.netlify.app/"
    },
    {
        id:4,
        title:"Place Picker",
        description:"Place you would like to visit",
        image:"/images/projects/PlacePicker.png",
        tag:["All","Web"],
        gitURL:"https://github.com/NirajMourya/PlacePicker",
        previewURL:"https://placepickerreact.netlify.app/"
    },
    // {
    //     id:5,
    //     title:"ShortLinkr",
    //     description:"Shorten any URL!",
    //     image:"/images/projects/ShortLinkr.png",
    //     tag:["All","Web"],
    //     gitURL:"https://shortlinkrbyniraj.netlify.app/",
    //     previewURL:"https://shortlybyniraj.netlify.app/"
    // },
    {
        id:5,
        title:"Tick Tock Challenge",
        description:"Game to stop the timer at correct timer",
        image:"/images/projects/TickTockChallenge.png",
        tag:["All","Web"],
        gitURL:"https://github.com/NirajMourya/TickTockChallenge",
        previewURL:"https://tictockchallenge.netlify.app/"
    },
    // {
    //     id:7,
    //     title:"ToDo",
    //     description:"Maintain your task in To Do list",
    //     image:"/images/projects/ToDo.png",
    //     tag:["All","Web"],
    //     gitURL:"/",
    //     previewURL:"/"
    // },
    {
        id:6,
        title:"Elegant Context",
        description:"Select items to shop",
        image:"/images/projects/ElegantContext.png",
        tag:["All","Web"],
        gitURL:"https://github.com/NirajMourya/ElegantContext",
        previewURL:"https://elegantcontextreact.netlify.app/"
    },
    {
        id:7,
        title:"Project Pilot",
        description:"Track your projects tasks",
        image:"/images/projects/ProjecsPilot.png",
        tag:["All","Web"],
        gitURL:"https://github.com/NirajMourya/ProjectPilot",
        previewURL:"https://projectspilot.netlify.app/"
    },
    {
        id:8,
        title:"React Brain Teaser",
        description:"Quiz app for React",
        image:"/images/projects/ReactBrainTeaser.png",
        tag:["All","Web"],
        gitURL:"https://github.com/NirajMourya/ReactBrainTeaser",
        previewURL:"https://reactbrainteaser.netlify.app/"
    },
    {
        id:9,
        title:"Reactoogle",
        description:"Clone of google search engine",
        image:"/images/projects/Reactoogle.png",
        tag:["All","Web"],
        gitURL:"https://github.com/NirajMourya/Reactoogle",
        previewURL:"https://reactoogle.netlify.app/"
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
        <section id="projects">
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
        </section>
     );
     
}

export default ProjectSection;