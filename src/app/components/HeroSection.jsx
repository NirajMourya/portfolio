"use client";
import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";
import { motion, useReducedMotion } from "framer-motion";
import {
  DocumentTextIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";
import { heroContent, heroSocialLinks } from "../../lib/siteData";

const typingSequence = [
  heroContent.name,
  1000,
  ...heroContent.roles.flatMap((role) => [role, 1000]),
];

const iconMap = {
  github: "/images/github-icon.svg",
  linkedin: "/images/linkedin-icon.svg",
  devto: "/images/devto.svg",
  blog: "/images/blog.svg",
};

const stats = [
  { value: "7+", label: "Years" },
  { value: "10+", label: "Projects" },
  { value: "10K+", label: "Users Impacted" },
];

const badges = ["Pune, India", "Open to Opportunities"];

const HeroSection = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden pb-6 pt-14 sm:pb-8 sm:pt-16 lg:pb-10 lg:pt-20">
      <div className="hero-glow absolute inset-x-0 top-[-8%] h-[28rem]" />
      <div className="grid grid-cols-1 items-center gap-12 sm:grid-cols-12 sm:gap-10 lg:gap-14">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 28 }}
          animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
          transition={shouldReduceMotion ? { duration: 0.01 } : { duration: 0.45, ease: "easeOut" }}
          className="col-span-8 place-self-center justify-self-start text-center sm:text-left"
        >
          <div className="mb-4 flex flex-wrap items-center justify-center gap-2 sm:justify-start">
            {badges.map((badge) => (
              <span
                key={badge}
                className="inline-flex items-center rounded-full border border-[#F59E3D]/20 bg-white/5 px-3 py-1 text-xs font-medium text-slate-200"
              >
                {badge === "Open to Opportunities" ? <SparklesIcon className="mr-1 h-3.5 w-3.5 text-[#F59E3D]" /> : null}
                {badge}
              </span>
            ))}
          </div>
          <h1 className="mb-5 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            <span className="block text-slate-200">Hi, I&apos;m</span>
            <span className="mt-2 block min-h-[1.3em] leading-tight">
              <span className="inline-block max-w-full overflow-hidden whitespace-nowrap align-top sm:max-w-none">
                <span className="text-[#F59E3D]">
                  <TypeAnimation sequence={typingSequence} wrapper="span" speed={50} repeat={Infinity} />
                </span>
              </span>
            </span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg leading-8 text-slate-300 sm:mx-0 sm:text-xl">
            I build scalable full-stack applications, developer tools and AI-powered experiences.
          </p>
          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-400">
            {heroContent.description}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center rounded-[14px] bg-[#F59E3D] px-6 py-3 text-sm font-semibold text-[#111111] shadow-[0_10px_30px_rgba(245,158,61,0.25)] transition duration-250 hover:-translate-y-0.5 hover:shadow-[0_16px_40px_rgba(245,158,61,0.32)]"
            >
              Hire Me
            </Link>
            <a
              href={heroContent.resumePath}
              download
              className="inline-flex items-center justify-center rounded-[14px] border border-[#F59E3D]/30 bg-white/5 px-6 py-3 text-sm font-semibold text-slate-100 transition duration-250 hover:-translate-y-0.5 hover:border-[#F59E3D]/60 hover:bg-[#F59E3D]/10"
            >
              Download CV
            </a>
          </div>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 sm:justify-start">
            {heroSocialLinks.map((link) => {
              const Icon = iconMap[link.icon] || DocumentTextIcon;
              const isImageIcon = typeof Icon === "string";

              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={link.label}
                  className="group flex h-11 w-11 items-center justify-center rounded-full border border-[#F59E3D]/20 bg-[#101014]/80 text-[#F59E3D] transition duration-250 hover:-translate-y-0.5 hover:border-[#F59E3D]/50 hover:bg-[#F59E3D]/10 hover:text-white"
                >
                  {isImageIcon ? (
                    <Image
                      src={Icon}
                      alt={`${link.label} icon`}
                      width={20}
                      height={20}
                      className="opacity-90 transition duration-250 group-hover:opacity-100"
                    />
                  ) : (
                    <Icon className="h-5 w-5 text-white" />
                  )}
                </a>
              );
            })}
          </div>
          <div className="mt-8 grid grid-cols-1 gap-3 sm:max-w-xl sm:grid-cols-3">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-[16px] border border-[#F59E3D]/15 bg-[#101014]/80 px-4 py-4 text-center backdrop-blur-sm"
              >
                <div className="text-2xl font-semibold text-white sm:text-3xl">{stat.value}</div>
                <div className="mt-1 text-xs uppercase tracking-[0.2em] text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 24, scale: 0.96 }}
          animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1 }}
          transition={shouldReduceMotion ? { duration: 0.01 } : { duration: 0.5, ease: "easeOut" }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="relative mx-auto flex h-[250px] w-[250px] items-center justify-center sm:h-[300px] sm:w-[300px] lg:h-[380px] lg:w-[380px]">
            <div className="hero-glow absolute inset-0 rounded-full blur-3xl" />
            <div className="avatar-ring absolute inset-0 rounded-full" />
            <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,_rgba(245,158,61,0.18),_transparent_68%)]" />
            <div className="relative h-[220px] w-[220px] overflow-hidden rounded-full border border-[#F59E3D]/40 bg-[#111214] p-1 shadow-[0_20px_70px_rgba(0,0,0,0.45)] sm:h-[260px] sm:w-[260px] lg:h-[330px] lg:w-[330px]">
              <Image
                src={heroContent.image.src}
                className="h-full w-full rounded-full object-cover"
                alt={heroContent.image.alt}
                width={400}
                height={400}
                priority
                sizes="(max-width: 1024px) 250px, 400px"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
