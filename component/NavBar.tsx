'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { BiMoon, BiSun, BiMenuAltRight, BiX } from 'react-icons/bi';

export default function NavBar() {
  const [isDark, setIsDark] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  // Initial Sync: L7 Tip - Use useEffect to prevent Hydration Mismatch
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    const shouldBeDark = savedTheme === 'dark' || (!savedTheme && prefersDark);
    
    setIsDark(shouldBeDark);
    if (shouldBeDark) {
      document.documentElement.classList.add('dark');
    } else {
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

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    
    if (newTheme) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Tech Stack', href: '/skills' },
    { label: 'Projects', href: '/projects' },
    { label: 'Experience', href: '/experience' },
    { label: 'Contact Me', href: '/contact-me' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 px-6 py-4 transition-all duration-500
        ${showNav ? 'translate-y-0' : '-translate-y-full'}
        glass border-b border-[hsl(var(--border))] shadow-sm`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Left - Theme Toggle */}
        <button
          onClick={toggleTheme}
          aria-label="Toggle Theme"
          className="p-2 rounded-full transition-colors duration-300 text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))] hover:bg-[hsl(var(--muted)/0.5)] cursor-pointer"
        >
          {isDark ? <BiSun size={24} /> : <BiMoon size={24} />}
        </button>

        {/* Center - Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 text-[hsl(var(--muted-foreground))] font-semibold">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="relative group transition-colors duration-300 hover:text-[hsl(var(--foreground))] text-sm tracking-widest uppercase"
            >
              {link.label}
              <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-[hsl(var(--primary))] transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </div>

        {/* Right - Hamburger for Mobile */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-3xl text-[hsl(var(--muted-foreground))] cursor-pointer p-1"
        >
          {menuOpen ? <BiX /> : <BiMenuAltRight />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`
        md:hidden absolute top-full left-0 w-full glass-strong border-b border-[hsl(var(--border))] transition-all duration-300 overflow-hidden
        ${menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'}
      `}>
        <div className="flex flex-col p-6 gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-base text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--primary))] transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}