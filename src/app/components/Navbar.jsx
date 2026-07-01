"use client";
import NavLink from "./NavLink";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import { navLinks } from "../../lib/siteData";

const NavBar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#about");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 8);
    handleScroll();

    const sectionIds = navLinks
      .filter((link) => link.path.startsWith("#"))
      .map((link) => link.path.slice(1));

    if (sectionIds.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleEntry) {
          setActiveSection(`#${visibleEntry.target.id}`);
        }
      },
      { threshold: [0.2, 0.5, 0.8], rootMargin: "-10% 0px -45% 0px" }
    );

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClose = () => setNavbarOpen(false);

  return (
    <nav className="fixed inset-x-0 top-4 z-50 px-4 sm:px-6 lg:px-8">
      <div
        className={`mx-auto flex max-w-[1200px] items-center justify-between rounded-[16px] border border-[#F59E3D]/20 bg-[#0b0b0d]/75 px-4 backdrop-blur-xl transition-all duration-300 sm:px-6 ${
          isScrolled ? "py-2.5 shadow-[0_18px_45px_rgba(0,0,0,0.4)]" : "py-3.5 shadow-[0_12px_30px_rgba(0,0,0,0.28)]"
        }`}
      >
        <Link href="/" className="inline-flex items-center gap-3 text-white" aria-label="Home">
          <img src="/images/NMLogo.png" alt="Niraj Mourya Logo" width={84} height={70} className="h-9 w-auto sm:h-10 md:h-12" />
        </Link>

        <div className="mobile-menu block md:hidden">
          <button
            onClick={() => setNavbarOpen((current) => !current)}
            className="flex items-center rounded-full border border-[#F59E3D]/20 bg-white/5 p-2.5 text-slate-200 transition hover:border-[#F59E3D]/50 hover:text-white"
            aria-label={navbarOpen ? "Close menu" : "Open menu"}
            type="button"
          >
            {navbarOpen ? <XMarkIcon className="h-5 w-5" /> : <Bars3Icon className="h-5 w-5" />}
          </button>
        </div>

        <div className="hidden md:block md:w-auto" id="navbar">
          <ul className="mt-0 flex flex-row items-center gap-2 p-0">
            {navLinks.map((link) => (
              <li key={link.title}>
                <NavLink
                  href={link.path}
                  title={link.title}
                  onClick={handleClose}
                  isActive={activeSection === link.path}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>

      {navbarOpen ? <MenuOverlay links={navLinks} onClose={handleClose} activeSection={activeSection} /> : null}
    </nav>
  );
};

export default NavBar;
