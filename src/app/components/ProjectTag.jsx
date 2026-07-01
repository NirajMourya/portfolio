const ProjectTag = ({ tag, onClick, isSelected }) => {
  const buttonStyles = isSelected
    ? "border-[#F59E3D] bg-[#F59E3D]/10 text-white shadow-[0_8px_24px_rgba(245,158,61,0.16)]"
    : "border-slate-700 text-[#ADB7BE] hover:border-[#F59E3D]/50 hover:text-white";
  return (
    <button
      className={`cursor-pointer rounded-full border px-6 py-3 text-sm transition duration-300 ${buttonStyles}`}
      onClick={() => onClick(tag)}
      aria-pressed={isSelected}
    >
      {tag}
    </button>
  );
};

export default ProjectTag;
