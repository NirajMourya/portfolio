"use client";
import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import {
  AcademicCapIcon,
  BriefcaseIcon,
  CodeBracketIcon,
  CommandLineIcon,
  CpuChipIcon,
  CircleStackIcon,
  CloudIcon,
} from "@heroicons/react/24/outline";
import { aboutData, educationCard, experienceTimeline, skillCategories } from "../../lib/siteData";

const categoryIcons = {
  frontend: CodeBracketIcon,
  backend: CommandLineIcon,
  database: CircleStackIcon,
  cloud: CloudIcon,
  ai: CpuChipIcon,
};

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const shouldReduceMotion = useReducedMotion();

  const cardBaseClass = "relative overflow-hidden rounded-[22px] border border-[#F59E3D]/20 bg-[linear-gradient(145deg,rgba(245,158,61,0.08),rgba(16,16,20,0.85)_28%,rgba(16,16,20,0.92))] p-5 shadow-[0_14px_40px_rgba(0,0,0,0.22)] transition duration-250 hover:-translate-y-0.5 hover:border-[#F59E3D]/35";

  return (
    <motion.section
      ref={ref}
      initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
      animate={shouldReduceMotion ? { opacity: 1 } : isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      transition={shouldReduceMotion ? { duration: 0.01 } : { duration: 0.45, ease: "easeOut" }}
      className="py-12 text-white sm:py-16 lg:py-20"
      id="about"
    >
      <div className="px-4 xl:px-16">
        <div className="flex h-full max-w-6xl flex-col text-left">
          <h2 className="mb-4 text-3xl font-bold text-[#F59E3D] sm:text-4xl">{aboutData.title}</h2>
          <div className="max-w-4xl space-y-4 text-base leading-8 text-slate-300 lg:text-lg">
            {Array.isArray(aboutData.description)
              ? aboutData.description.slice(0, 2).map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))
              : <p>{aboutData.description}</p>}
          </div>
          <div className="mt-8 grid items-start gap-5 lg:grid-cols-12">
            <div className={`${cardBaseClass} lg:col-span-7`}>
              <div className="mb-4 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#F59E3D]/25 bg-[#F59E3D]/10 text-[#F59E3D]">
                  <BriefcaseIcon className="h-5 w-5" />
                </span>
                <h3 className="text-xl font-semibold text-white">Experience</h3>
              </div>
              <div className="space-y-4">
                {experienceTimeline.map((item) => (
                  <div key={`${item.title}-${item.period}`} className="rounded-[14px] border border-white/10 bg-white/[0.03] p-4">
                    <p className="text-xs uppercase tracking-[0.16em] text-slate-400">{item.period}</p>
                    <p className="mt-1 font-semibold text-white">{item.title}</p>
                    <p className="text-sm text-[#F59E3D]">{item.company}</p>
                    <ul className="mt-2 space-y-1.5 text-sm leading-6 text-slate-300">
                      {item.highlights.map((point) => (
                        <li key={point} className="flex items-start gap-2">
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#F59E3D]" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div className={`${cardBaseClass} lg:col-span-5`}>
              <div className="mb-4 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#F59E3D]/25 bg-[#F59E3D]/10 text-[#F59E3D]">
                  <CodeBracketIcon className="h-5 w-5" />
                </span>
                <h3 className="text-xl font-semibold text-white">Tech Stack</h3>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {skillCategories.map((category) => {
                  const Icon = categoryIcons[category.icon];

                  return (
                    <div key={category.title} className="rounded-[14px] border border-white/10 bg-white/[0.03] p-3">
                      <div className="mb-2 flex items-center gap-2">
                        <Icon className="h-4 w-4 text-[#F59E3D]" />
                        <h4 className="text-sm font-semibold text-white">{category.title === "Cloud & Tools" ? "Cloud & DevOps" : category.title === "AI" ? "AI & Developer Tools" : category.title}</h4>
                      </div>
                      <div className="grid grid-cols-1 gap-2">
                        {category.items.map((item) => (
                          <span key={item} className="inline-flex items-center gap-2 rounded-[10px] border border-[#F59E3D]/20 bg-[#F59E3D]/5 px-2.5 py-1.5 text-xs text-slate-200">
                            <Icon className="h-3.5 w-3.5 text-[#F59E3D]" />
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className={`${cardBaseClass} h-auto self-start p-4 lg:col-span-12`}>
              <div className="grid gap-3 lg:grid-cols-12 lg:items-start">
                <div className="lg:col-span-4">
                  <div className="mb-2 flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#F59E3D]/25 bg-[#F59E3D]/10 text-[#F59E3D]">
                      <AcademicCapIcon className="h-5 w-5" />
                    </span>
                    <h3 className="text-lg font-semibold text-white">Education</h3>
                  </div>
                  <p className="text-xs uppercase tracking-[0.16em] text-slate-400">Graduation Year</p>
                  <p className="mt-0.5 text-lg font-semibold text-white">{educationCard.graduationYear}</p>
                </div>
                <div className="lg:col-span-4">
                  <p className="text-sm font-semibold text-white">{educationCard.degree}</p>
                  <p className="mt-0.5 text-sm text-slate-300">{educationCard.college}</p>
                  <p className="text-xs text-slate-400">{educationCard.location}</p>
                </div>
                <div className="lg:col-span-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#F59E3D]">Relevant Coursework</p>
                  <div className="mt-1.5 flex flex-wrap gap-1.5">
                    {educationCard.coursework.slice(0, 2).map((item) => (
                      <span key={item} className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-0.5 text-[11px] text-slate-200">
                        {item}
                      </span>
                    ))}
                  </div>
                  <ul className="mt-1.5 space-y-1 text-xs text-slate-300">
                    {educationCard.achievements.slice(0, 1).map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#F59E3D]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutSection;
