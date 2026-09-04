"use client";

import { useState } from "react";

export default function Navbar() {
  const [active, setActive] = useState("home");

  const links = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Projects", id: "projects" },
    { label: "Skills", id: "skills" },
    { label: "Contact", id: "contact" },
  ];

  const scrollTo = (id: string) => {
    setActive(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 w-full flex justify-between items-center px-6 md:px-20 py-6 z-50 bg-black/30 backdrop-blur-md">
      <button
        onClick={() => scrollTo("home")}
        className="text-white font-medium"
      >
        RK.
      </button>
      <div className="hidden md:flex gap-8 text-sm text-neutral-400">
        {links.map((link) => (
          <button
            key={link.id}
            onClick={() => scrollTo(link.id)}
            className={`pb-1 border-b-2 transition-colors ${
              active === link.id
                ? "text-white border-purple-400"
                : "border-transparent hover:text-white"
            }`}
          >
            {link.label}
          </button>
        ))}
      </div>
      <button className="w-8 h-8 rounded-full border border-neutral-700 flex items-center justify-center text-neutral-400 hover:text-white">
        ●
      </button>
    </nav>
  );
}
