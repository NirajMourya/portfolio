import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
const ProjectCard = ({ imgURL, title, description, gitURL, previewURL }) => {
  return (
    <article className="group overflow-hidden rounded-3xl bg-[#181818] shadow-lg shadow-black/20 transition-transform duration-300 hover:-translate-y-1">
      <div
        className="relative h-52 md:h-72 bg-cover bg-center"
        style={{ backgroundImage: `url(${imgURL})` }}
      >
        <div className="overlay absolute inset-0 flex items-center justify-center bg-[#181818] bg-opacity-0 transition duration-500 group-hover:bg-opacity-80">
          <div className="flex gap-4 opacity-0 transition duration-500 group-hover:opacity-100">
            <Link
              href={gitURL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-[#ADB7BE] text-[#ADB7BE] hover:border-white hover:text-white"
              aria-label={`View ${title} source code`}
            >
              <CodeBracketIcon className="h-6 w-6" />
            </Link>
            <Link
              href={previewURL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-[#ADB7BE] text-[#ADB7BE] hover:border-white hover:text-white"
              aria-label={`Preview ${title}`}
            >
              <EyeIcon className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>

      <div className="px-5 py-6 text-white">
        <h3 className="mb-2 text-xl font-semibold">{title}</h3>
        <p className="text-[#ADB7BE]">{description}</p>
      </div>
    </article>
  );
};
export default ProjectCard;
