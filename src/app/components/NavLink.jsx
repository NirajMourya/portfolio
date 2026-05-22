import Link from "next/link";
const NavLink = ({ href, title, onClick }) => {
  const isExternal = href.startsWith("http");

  return (
    <Link
      href={href}
      className="block rounded py-2 pl-3 pr-4 text-[#ADB7BE] text-lg hover:text-white md:p-0"
      onClick={onClick}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
    >
      {title}
    </Link>
  );
};

export default NavLink;
