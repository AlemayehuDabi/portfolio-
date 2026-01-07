'use client';

import Link from 'next/link';
import { useEffect, useState, useMemo } from 'react';
import { BiMoon, BiSun, BiMenuAltRight, BiX } from 'react-icons/bi';
import { motion, AnimatePresence } from 'framer-motion';

export default function NavBar() {
  const [isDark, setIsDark] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const shouldBeDark = savedTheme === 'dark' || (!savedTheme && prefersDark);
    
    setIsDark(shouldBeDark);
    document.documentElement.classList.toggle('dark', shouldBeDark);
  }, []);

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
    document.documentElement.classList.toggle('dark', newTheme);
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
  };

  const navLinks = useMemo(() => [
    { label: 'Home', href: '/', cmd: '~/' },
    { label: 'About', href: '/about', cmd: './about' },
    { label: 'Tech Stack', href: '/skills', cmd: './tech' },
    { label: 'Projects', href: '/projects', cmd: './work' },
    { label: 'Experience', href: '/experience', cmd: './logs' },
    { label: 'Contact', href: '/contact-me', cmd: './ping' },
  ], []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 border-b
        ${showNav ? 'translate-y-0' : '-translate-y-full'}
        glass border-steel shadow-2xl`}
    >
      {/* Top Status Bar (The "Hacker" Detail) */}
      <div className="w-full bg-onyx/50 border-b border-steel/30 px-6 py-1 flex justify-between items-center">
        <div className="flex items-center gap-4 text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-terminal-green animate-pulse shadow-[0_0_8px_hsl(var(--terminal-green))]" />
            System: Online
          </span>
          <span className="hidden sm:inline">Enc: RSA-4096</span>
          <span className="hidden sm:inline">Loc: 127.0.0.1</span>
        </div>
        <div className="text-[10px] font-mono text-muted-foreground uppercase">
          Ver: 2.0.26-Stable
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Left - Branding as Terminal Prompt */}
        <Link href="/" className="group flex items-center gap-2 font-mono text-sm tracking-tighter">
          <span className="text-primary font-bold">@</span>
          <span className="text-foreground group-hover:text-primary transition-colors uppercase">
            Engineer_Mode
          </span>
          <span className="w-1.5 h-4 bg-primary animate-cursor-blink" />
        </Link>

        {/* Center - Desktop Nav (IDE Style) */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="relative group font-mono text-[11px] uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              <span className="text-primary/50 group-hover:text-primary mr-1 opacity-0 group-hover:opacity-100 transition-all">
                {'>'}
              </span>
              {link.label}
              {/* Bottom underline - hacker style */}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-primary transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </div>

        {/* Right - Controls */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="p-2 rounded border border-steel/50 hover:border-primary/50 hover:bg-primary/5 transition-all text-muted-foreground hover:text-primary cursor-pointer"
            aria-label="Toggle System Theme"
          >
            {isDark ? <BiSun size={18} /> : <BiMoon size={18} />}
          </button>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2 text-2xl text-muted-foreground hover:text-primary transition-colors cursor-pointer"
          >
            {menuOpen ? <BiX /> : <BiMenuAltRight />}
          </button>
        </div>
      </div>

      {/* Mobile Menu - Terminal Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden glass-strong border-t border-steel overflow-hidden"
          >
            <div className="p-8 flex flex-col gap-6 font-mono">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center gap-4 text-sm text-muted-foreground hover:text-primary transition-all group"
                  >
                    <span className="text-primary">{link.cmd}</span>
                    <span className="uppercase tracking-widest">{link.label}</span>
                    <span className="ml-auto opacity-0 group-hover:opacity-100 text-[10px] text-terminal-green">
                      EXECUTE
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}