"use client";
import Image from "next/image";
import { useState, useTransition } from "react";
import TabButton from "./TabButton";
import { aboutData } from "../../lib/siteData";

const AboutSection = () => {
  const [tab, setTab] = useState(aboutData.tabs[0].id);
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  const activeTab = aboutData.tabs.find((t) => t.id === tab) || aboutData.tabs[0];

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src={aboutData.image.src}
          alt={aboutData.image.alt}
          width={400}
          height={400}
          className="rounded-md"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full max-w-3xl">
          <h2 className="text-4xl font-bold text-white mb-4">{aboutData.title}</h2>
          <div className="space-y-4 text-base lg:text-lg leading-8 max-w-prose">
            {Array.isArray(aboutData.description)
              ? aboutData.description.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))
              : <p>{aboutData.description}</p>}
          </div>
          <div className="flex flex-row justify-start mt-8 flex-wrap gap-3">
            {aboutData.tabs.map((item) => (
              <TabButton
                key={item.id}
                selectTab={() => handleTabChange(item.id)}
                active={tab === item.id}
              >
                {item.title}
              </TabButton>
            ))}
          </div>
          <div className="mt-8">
            <ul className="list-disc pl-2">
              {activeTab.items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
