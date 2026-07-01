import { motion } from "framer-motion";

const variants = {
  default: { width: 0 },
  active: { width: "calc(100% - 0.75rem)" },
};
const TabButton = ({ active, selectTab, children }) => {
  const buttonClasses = active ? "text-white" : "text-[#ADB7BE]";
  return (
    <button onClick={selectTab} className="text-left">
      <p className={`mr-3 font-semibold transition hover:text-white ${buttonClasses}`}>{children}</p>
      <motion.div
        animate={active ? "active" : "default"}
        variants={variants}
        className="mr-3 mt-2 h-1 bg-[#F59E3D]"
      ></motion.div>
    </button>
  );
};
export default TabButton;
