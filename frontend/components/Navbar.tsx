"use client";

import { useState } from "react";
import Image from "next/image";
import ThemeToggle from "./ThemeToggle";

import {
  Menu,
  X,
  Home,
  Info,
  Film,
  Search,
  Mail
} from "lucide-react";

export default function Navbar() {

  const [open, setOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }

    setOpen(false);
  };

  return (
    <>
      {/* NAVBAR */}
      <nav
        className={`fixed top-0 left-0 w-full z-50
bg-[var(--background)]

${open
            ? "after:absolute after:right-0 after:top-0 after:h-full after:w-72 after:bg-gradient-to-l after:from-black/60 after:via-black/30 after:to-transparent after:pointer-events-none after:content-['']"
            : ""}
`}
      >
        <div className="flex items-center justify-between px-6 py-2">

          {/* LOGO */}
          <div className="flex items-center gap-2">

            <Image
              src="/logo-removebg-preview.png"
              alt="CineSight AI"
              className="h-10 w-auto"
              width={0}
              height={0}
              sizes="100vw"
            />

            <span
              className="text-lg font-semibold
              bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500
              bg-clip-text text-transparent"
            >
              CineSight AI
            </span>

          </div>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-4 relative z-50">

            {/* Theme toggle only when menu closed */}
            {!open && <ThemeToggle />}

            {/* Hamburger only when menu closed */}
            {!open && (
              <button
                onClick={() => setOpen(true)}
                className="p-2 rounded-md hover:bg-zinc-200 dark:hover:bg-zinc-800 transition"
              >
                <Menu size={26} />
              </button>
            )}

            {/* Close icon when menu open */}


          </div>
        </div>
      </nav>


      {/* HOTSTAR STYLE SIDE SHADOW */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-40
    bg-gradient-to-l from-black/70 via-black/10 to-transparent"
        />
      )}


      {/* RIGHT MENU PANEL */}
     <div
  className={`fixed top-0 right-0 h-full w-72
  bg-transparent
  text-inherit
  z-50
  transform transition-transform duration-300
  ${open ? "translate-x-0" : "translate-x-full"}
`}
>
        {/* CLOSE */}
        <div className="flex justify-end p-4">

          <button onClick={() => setOpen(false)}>
            <X size={28} />
          </button>

        </div>


        {/* MENU ITEMS */}
        <div className="flex flex-col gap-8 px-8 mt-10 text-lg">

          <button
            onClick={() => scrollToSection("home")}
            className="flex items-center gap-3 text-white-400 hover:text-cyan-300 transition-colors duration-200"
          >
            <Home size={22} />
            Home
          </button>

          <button
            onClick={() => scrollToSection("about")}
            className="flex items-center gap-3 text-white-400 hover:text-cyan-300 transition-colors duration-200"
          >
            <Info size={22} />
            About
          </button>

          <button
            onClick={() => scrollToSection("how")}
             className="flex items-center gap-3 text-white-400 hover:text-cyan-300 transition-colors duration-200"
          >
            <Film size={22} />
            How It Works
          </button>

          <button
            onClick={() => scrollToSection("find")}
            className="flex items-center gap-3 text-white-400 hover:text-cyan-300 transition-colors duration-200"
          >
            <Search size={22} />
            Find Movies
          </button>

          <button
            onClick={() => scrollToSection("contact")}
             className="flex items-center gap-3 text-white-400 hover:text-cyan-300 transition-colors duration-200"
          >
            <Mail size={22} />
            Contact Me
          </button>

        </div>

      </div>

    </>
  );
}