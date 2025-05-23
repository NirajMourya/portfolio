import { CodeBracketIcon,EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
const ProjectCard = ({imgURL,title,description, gitURL, previewURL}) => {
    return (
        <div>
            <div  
            className="h-52 md:h-72 rounded-t-xl relative group"
            style={{background:`url(${imgURL}) no-repeat center`,backgroundSize:"contain"}}>
            <div className="overlay  items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500">
            <Link href={gitURL} className="h-14 w-14 border-2 mr-2 rounded-full relative border-[#ADB7BE] hover:border-white group/link">
               <CodeBracketIcon className="h-10 w-10  text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white"/>
            </Link>
            <Link href={previewURL} className="h-14 w-14 border-2 rounded-full relative border-[#ADB7BE] hover:border-white group/link">
               <EyeIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white"/>
            </Link>
            </div>
            </div>
            <div className="text-white rounded-t-xl mt-3 bg-[#181818] py-6 px-4 ">
                <h5 className="font-xl  font-semibold mb-2 ">{title}</h5>
                <p className="text-[#ADB7BE]">
                    {description}
                </p>
            </div>
        </div>
    )
}
export default ProjectCard;