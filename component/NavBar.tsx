'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { BiMoon, BiSun, BiMenuAltRight, BiX } from 'react-icons/bi';

export default function NavBar() {
  const [isDark, setIsDark] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  // Set theme on load
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches;

    if (storedTheme === 'dark' || (!storedTheme && prefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  // Scroll behavior
  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setShowNav(currentY < lastScrollY || currentY < 10);
      setLastScrollY(currentY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    document.documentElement.classList.toggle('dark', newTheme);
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
  };

  const navLinks = ['Home', 'About', 'Tech Stack', 'Projects', 'Contact Me'];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 px-6 py-4 transition-all duration-500
        ${showNav ? 'translate-y-0' : '-translate-y-full'}
        backdrop-blur-md bg-white/30 dark:bg-black/30 shadow-sm dark:shadow-md`}
    >
      <div className="flex justify-between items-center">
        {/* Left - Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="text-2xl text-[var(--gray)] hover:text-[var(--gray-hover)] cursor-pointer"
        >
          {isDark ? <BiSun size={30} /> : <BiMoon size={30} />}
        </button>

        {/* Center - Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 text-base tracking-widest text-[var(--gray)] font-semibold">
          {navLinks.map((label) => (
            <Link
              key={label}
              href={
                label === 'Home'
                  ? `/`
                  : label === 'About'
                  ? 'about'
                  : label === 'Tech Stack'
                  ? 'skills'
                  : label === 'Projects'
                  ? 'projects'
                  : label === 'Contact Me'
                  ? 'contact-me'
                  : '/no-found'
              }
              className="relative group transition-colors duration-300 text-sm"
            >
              {label}
              <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-[var(--primary)] transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </div>

        {/* Right - Hamburger for Mobile */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-3xl text-[var(--gray)] cursor-pointer"
        >
          {menuOpen ? <BiX /> : <BiMenuAltRight />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="mt-4 flex flex-col md:hidden gap-4 text-base text-[var(--gray)] font-semibold transition-all">
          {navLinks.map((label) => (
            <Link
              key={label}
              href={
                label === 'Home'
                  ? `/`
                  : label === 'About'
                  ? 'about'
                  : label === 'Tech Stack'
                  ? 'skills'
                  : label === 'Projects'
                  ? 'projects'
                  : label === 'Contact Me'
                  ? 'contact-me'
                  : '/no-found'
              }
              className="relative group px-2 py-1"
              onClick={() => setMenuOpen(false)}
            >
              {label}
              <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-[var(--primary)] transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
