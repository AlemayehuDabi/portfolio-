"use client";

import { useEffect, useState } from "react";
import { BiMoon, BiSun } from "react-icons/bi";

export default function NavBar() {
  const [isDark, setIsDark] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Set theme from localStorage or system preference
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (storedTheme === "dark" || (!storedTheme && prefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDark(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  // Scroll handling: Hide on scroll down, show on scroll up
  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setShowNav(currentY < lastScrollY || currentY < 10);
      setLastScrollY(currentY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Toggle theme
  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    document.documentElement.classList.toggle("dark", newTheme);
    localStorage.setItem("theme", newTheme ? "dark" : "light");
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 px-6 py-4 transition-all duration-500 
        ${showNav ? "translate-y-0" : "-translate-y-full"}
        backdrop-blur-md bg-white/30 dark:bg-black/30
        shadow-sm dark:shadow-md`}
    >
      <div className="flex justify-between items-center">
        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="text-2xl text-[var(--gray)] hover:text-[var(--gray-hover)] cursor-pointer"
        >
          {isDark ? <BiSun size={30} /> : <BiMoon size={30} />}
        </button>

        {/* Links */}
        <div className="flex items-center gap-5 text-base tracking-widest text-[var(--gray)] font-semibold">
          {["Home", "About", "Tech Stack", "Projects"].map((label) =>
            label === "Home" ? (
              <a
                key={label}
                href={`/`}
                className="relative group text-[var(--gray)] font-semibold tracking-widest transition-colors duration-300"
              >
                {label}
                <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-[var(--primary)] transition-all duration-300 group-hover:w-full" />
              </a>
            ) : (
              <a
                key={label}
                href={`#${label}`}
                className="relative group text-[var(--gray)] font-semibold tracking-widest transition-colors duration-300"
              >
                {label}
                <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-[var(--primary)] transition-all duration-300 group-hover:w-full" />
              </a>
            )
          )}
          <a
            href="#Contact"
            className="px-4 py-2 rounded-lg bg-[var(--primary)] text-white ml-5 cursor-pointer transition-all"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
