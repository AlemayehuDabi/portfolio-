"use client";

import { useEffect, useState } from "react";
import { BiMoon, BiSun } from "react-icons/bi";

export default function NavBar() {
  const [isDark, setIsDark] = useState(false);

  // On mount: set theme from localStorage or system preference
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

  // Toggle theme
  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);

    if (newTheme) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <nav className="flex justify-between items-center py-4 px-6">
      <div>
        <button
          onClick={toggleTheme}
          className="text-2xl text-[var(--gray)] hover:text-[var(--gray-hover)] cursor-pointer "
        >
          {isDark ? <BiSun size={30} /> : <BiMoon size={30} />}
        </button>
      </div>
      <div className="flex justify-end">
        <div className="flex items-center gap-5 text-lg tracking-widest text-[var(--gray)] font-semibold">
          {["Home", "About", "Tech Stack", "Portfolio"].map((label) => (
            <div
              key={label}
              className="hover:text-[var(--gray-hover)] cursor-pointer hover:border-b-4 hover:border-b-[var(--primary)]"
            >
              {label}
            </div>
          ))}
          <button className="px-4 py-2 rounded bg-[var(--primary)] text-white ml-5 cursor-pointer">
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
}
