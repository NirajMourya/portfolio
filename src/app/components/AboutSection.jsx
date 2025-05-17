"use client"
import Image from "next/image"
import { useState,useTransition } from "react"
import TabButton from "./TabButton";

const TAB_DATA = [
    {
        title:"Skills",
        id:"skills",
        content: (
            <ul className="list-disc pl-2">
                <li>Javascript</li>
                <li>React</li>
                <li>Node.js</li>
                <li>ExpressJS</li>
                <li>Sequelize</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>MongoDB</li>
                <li>MySQL</li>
            </ul>
        )
    },
    {
        title:"Education",
        id:"education",
        content: (
            <ul className="list-disc pl-2">
                <li>Bachelor of Engineering (Information Technology)</li>
                <li>D. Y. Patil College of Engineering</li>
                <li>Pune, Maharashtra, India</li>
            </ul>
        )
    },
    {
        title:"Experience",
        id:"experience",
        content: (
            <ul className="list-disc pl-2">
                <li>Technical Lead - I @CitiusTech (Dec 2024 - Present)</li>
                <li>Programmer Analyst @Bitwise Soltions Pvt. Ltd. (Jun 2019 - Nov 2019)</li>
                <li>For details please check resume</li>
            </ul>
        )
    }
]
const AboutSection = () => {
    const [tab,setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
           startTransition(() => {
              setTab(id)
           })
    }

    return (  
        <section className="text-white" id="about">
            <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
            <Image src="/images/NirajMourya_Portrait2.jpeg" alt="Niraj Mourya Portrait No. 2" width={400} height={400} className="rounded-md" />
            <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                   <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
                   <p className="text-base lg:text-lg">
                   I am a Software Engineer with over 6 years of experience, currently working as a Technical Lead - I at CitiusTech. I specialize in front-end development, SharePoint, PowerShell scripting, and full-stack web development. Skilled in delivering efficient solutions, I have successfully built and supported several applications across departments and clients, driving automation and optimizing processes. I am proficient in JavaScript, C#, React, Node.js, ExpressJS, MySQL and MongoDB, and have a strong track record in managing the complete software development life cycle. 
                   </p>
                   <div className="flex flex-row justify-start mt-8">
                       <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"}>Skills</TabButton>
                       <TabButton selectTab={() => handleTabChange("education")} active={tab === "education"}>Education</TabButton>
                       <TabButton selectTab={() => handleTabChange("experience")} active={tab === "experience"}>Experience</TabButton>
                   </div>
                   <div className="mt-8">
                    { 
                        TAB_DATA.find((t) => t.id === tab).content
                    }
                   </div>
              </div>  
            </div>               
        </section>
    )
}

export default AboutSection;