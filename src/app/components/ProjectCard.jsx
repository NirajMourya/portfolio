import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
const ProjectCard = ({ imgURL, title, description, gitURL, previewURL, tags = [], featured = false, category = "Web" }) => {
  return (
    <article className={`group flex h-full flex-col overflow-hidden rounded-[24px] border border-[#F59E3D]/15 bg-[#121317] shadow-[0_16px_60px_rgba(0,0,0,0.25)] transition-all duration-300 hover:-translate-y-1 hover:border-[#F59E3D]/35 hover:shadow-[0_20px_70px_rgba(245,158,61,0.12)] ${featured ? "md:col-span-2" : ""}`}>
      <div className="relative h-56 md:h-72">
        <Image
          src={imgURL}
          alt={`${title} preview`}
          fill
          className="object-contain p-2 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 -z-10 bg-[#0f1419]" />
        <div className="absolute left-4 top-4 flex items-center gap-2">
          {featured ? (
            <span className="rounded-full bg-[#F59E3D] px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-[#111111]">
              Featured
            </span>
          ) : null}
        </div>
        <div className="absolute inset-0 flex items-center justify-center bg-[#0b0b0d]/45 bg-opacity-0 transition duration-300 group-hover:bg-opacity-55">
          <div className="flex flex-col gap-3 opacity-0 transition duration-300 group-hover:opacity-100 sm:flex-row">
            <Link
              href={gitURL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-[14px] border border-[#F59E3D]/30 bg-[#111111]/80 px-4 py-2 text-sm font-semibold text-[#F59E3D] transition duration-250 hover:-translate-y-0.5 hover:border-[#F59E3D]/60 hover:text-white"
              aria-label={`View ${title} source code`}
            >
              <CodeBracketIcon className="mr-2 h-5 w-5" />
              GitHub
            </Link>
            <Link
              href={previewURL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-[14px] bg-[#F59E3D] px-4 py-2 text-sm font-semibold text-[#111111] transition duration-250 hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(245,158,61,0.25)]"
              aria-label={`Preview ${title}`}
            >
              <EyeIcon className="mr-2 h-5 w-5" />
              Live Demo
            </Link>
          </div>
        </div>
      </div>

      <div className="flex flex-1 flex-col px-5 py-6 text-white">
        <div className="mb-3 flex flex-wrap gap-2">
          {tags.filter((tag) => tag !== "All").slice(0, 3).map((tag) => (
            <span key={tag} className="rounded-full border border-[#F59E3D]/15 bg-white/5 px-3 py-1 text-[0.7rem] font-medium text-slate-300">
              {tag}
            </span>
          ))}
        </div>
        <h3 className="mb-2 text-xl font-semibold text-white">{title}</h3>
        <p className="text-slate-300">{description}</p>
      </div>
    </article>
  );
};
export default ProjectCard;
