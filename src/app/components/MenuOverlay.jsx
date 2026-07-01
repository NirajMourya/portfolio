import NavLink from "./NavLink";

const MenuOverlay = ({ links, onClose, activeSection }) => {
  return (
    <ul className="mt-3 flex flex-col items-center gap-2 rounded-[16px] border border-[#F59E3D]/20 bg-[#0b0b0d]/90 px-3 py-4 shadow-[0_20px_50px_rgba(0,0,0,0.35)] backdrop-blur-xl">
      {links.map((link, index) => (
        <li key={index} className="w-full text-center">
          <NavLink
            href={link.path}
            title={link.title}
            onClick={onClose}
            isActive={activeSection === link.path}
          />
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;
