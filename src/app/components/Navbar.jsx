"use client";
import NavLink from "./NavLink";
import Link from "next/link";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import Image from "next/image";
import { navLinks } from "../../lib/siteData";

const NavBar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleClose = () => setNavbarOpen(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-10 border border-[#33353F] bg-[#121212] bg-opacity-95 backdrop-blur-sm">
      <div className="container mx-auto flex flex-wrap items-center justify-between px-4 py-2 lg:py-4">
        <Link href="/" className="text-2xl md:text-5xl text-white font-semibold" aria-label="Home">
          <Image src="/images/NMLogo.png" alt="Niraj Mourya Logo" width={120} height={100} />
        </Link>

        <div className="mobile-menu block md:hidden">
          <button
            onClick={() => setNavbarOpen((current) => !current)}
            className="flex items-center rounded border border-slate-200 px-3 py-2 text-slate-200 hover:border-white hover:text-white"
            aria-label={navbarOpen ? "Close menu" : "Open menu"}
            type="button"
          >
            {navbarOpen ? <XMarkIcon className="h-5 w-5" /> : <Bars3Icon className="h-5 w-5" />}
          </button>
        </div>

        <div className="hidden md:block md:w-auto" id="navbar">
          <ul className="mt-0 flex flex-row space-x-8 p-4 md:p-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} onClick={handleClose} />
              </li>
            ))}
          </ul>
        </div>
      </div>

      {navbarOpen ? <MenuOverlay links={navLinks} onClose={handleClose} /> : null}
    </nav>
  );
};

export default NavBar;
