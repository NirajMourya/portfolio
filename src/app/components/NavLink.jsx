import Link from "next/link";

const NavLink = ({ href, title, onClick, isActive = false }) => {
  const isExternal = href.startsWith("http");

  return (
    <Link
      href={href}
      className={`group relative rounded-full px-3 py-2 text-sm font-medium transition-all duration-300 md:px-4 md:text-[0.95rem] ${
        isActive ? "text-[#F59E3D]" : "text-slate-300 hover:text-white"
      }`}
      onClick={onClick}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
    >
      <span className="relative">
        {title}
        <span
          className={`absolute -bottom-1 left-0 h-[2px] w-full rounded-full bg-[#F59E3D] transition-all duration-300 ${
            isActive ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100"
          }`}
        />
      </span>
    </Link>
  );
};

export default NavLink;
