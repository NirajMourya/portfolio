import { footerData } from "../../lib/siteData";

const Footer = () => {
  return (
    <footer className="footer border-t-[#33353F] border-l-transparent border-r-transparent border z-10 text-white">
      <div className="container flex flex-col gap-4 p-12 md:flex-row md:justify-between text-slate-600">
        <p>{footerData.tagline}</p>
        <p>{footerData.copyright}</p>
      </div>
    </footer>
  );
};

export default Footer;
