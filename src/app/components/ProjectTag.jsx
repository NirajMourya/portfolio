const ProjectTag = ({tag, onClick, isSelected}) => {
    const buttonStyles = isSelected?
    "text-white border-primary-500"
    :"text-[#ADB7BE] border-slate-600 hover:border-white";
    return (
        <button className={`rounded-full border-2 px-6 py-3 text-sl cursor ${buttonStyles}`} 
        onClick={() => onClick(tag)}
        >
            {tag}
        </button>
    );
    
}

export default ProjectTag;