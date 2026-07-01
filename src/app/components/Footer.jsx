import { footerData, navLinks } from "../../lib/siteData";
import Link from "next/link";
import { ArrowUpIcon, GlobeAltIcon } from "@heroicons/react/24/outline";

const Footer = () => {
  return (
    <footer className="z-10 border-t border-[#F59E3D]/20 bg-[#0b0b0d]/70 text-slate-100">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-6 px-4 py-10 text-sm text-slate-300 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-medium text-white">{footerData.tagline}</p>
            <p className="mt-1 text-slate-400">Built with Next.js + Tailwind CSS.</p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            {navLinks.map((item) => {
              const isExternal = item.path.startsWith("http");

              return (
                <Link
                  key={item.title}
                  href={item.path}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                  className="rounded-full border border-[#F59E3D]/15 px-4 py-2 transition duration-250 hover:border-[#F59E3D]/40 hover:text-white"
                >
                  {item.title}
                </Link>
              );
            })}
            <a href="#top" aria-label="Back to top" className="flex h-10 w-10 items-center justify-center rounded-full border border-[#F59E3D]/15 transition duration-250 hover:border-[#F59E3D]/40 hover:text-white">
              <ArrowUpIcon className="h-4 w-4" />
            </a>
          </div>
        </div>
        <p className="text-center text-slate-400 md:text-left">{footerData.copyright}</p>
      </div>
    </footer>
  );
};

export default Footer;
