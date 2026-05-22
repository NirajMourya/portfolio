import NavLink from "./NavLink";

const MenuOverlay = ({ links, onClose }) => {
  return (
    <ul className="flex flex-col items-center gap-2 py-4">
      {links.map((link, index) => (
        <li key={index} className="w-full text-center">
          <NavLink href={link.path} title={link.title} onClick={onClose} />
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;
