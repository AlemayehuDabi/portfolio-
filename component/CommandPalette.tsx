'use client';

import { useState, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom'; // Essential for L7 Architecture
import { motion, AnimatePresence } from 'framer-motion';
import { Command, Search, Home, User, Briefcase, Mail, Github, Linkedin, FileText, Terminal } from 'lucide-react';
import { useRouter } from 'next/navigation';
import ResumeModal from './ResumeModal/modal';

interface CommandItem {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  action: () => void;
}


export default function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');
  const [mounted, setMounted] = useState(false); // Handle hydration
  const [isResume, setIsResume] = useState(false)

  const router = useRouter();

  // Handle Hydration for Next.js Portals
  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

    const commands: CommandItem[] = [
    { id: 'home', icon: <Home className="w-4 h-4" />, title: 'Home', description: 'Go to home section', action: () => { router.push('/'); setIsOpen(false); },  },
    { id: 'about', icon: <User className="w-4 h-4" />, title: 'About', description: 'Learn about me', action: () => { router.push('about'); setIsOpen(false); },  },
    { id: 'projects', icon: <Briefcase className="w-4 h-4" />, title: 'Projects', description: 'View my work', action: () => { router.push('projects'); setIsOpen(false); },  },
    { id: 'contact', icon: <Mail className="w-4 h-4" />, title: 'Contact', description: 'Get in touch', action: () => { router.push('contact-me'); setIsOpen(false); },  },
    { id: 'resume', icon: <FileText className="w-4 h-4" />, title: 'Resume', description: 'Download my resume', action: () => {setIsResume(!isResume)} },
    { id: 'github', icon: <Github className="w-4 h-4" />, title: 'GitHub', description: 'View my repositories', action: () => window.open('https://github.com/AlemayehuDabi', '_blank') },
    { id: 'linkedin', icon: <Linkedin className="w-4 h-4" />, title: 'LinkedIn', description: 'Connect with me', action: () => window.open('https://linkedin.com/in/Alemayehu-dabi-79b5212a1', '_blank') },
  ];

  const filteredCommands = commands.filter(cmd => 
    cmd.title.toLowerCase().includes(search.toLowerCase()) ||
    cmd.description.toLowerCase().includes(search.toLowerCase())
  );

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
      e.preventDefault();
      setIsOpen(prev => !prev);
    }
    if (e.key === 'Escape') setIsOpen(false);
  }, []);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
  }, [isOpen]);


  const modalContent = (
    <AnimatePresence>

      {isOpen && (
        <>
          {/* Backdrop: Higher Z-index and Stronger Blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-background/60 backdrop-blur-md z-[110]" // Higher than Nav
          />

          {/* Palette: Hacker IDE Style */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            className="fixed top-[15%] left-1/2 -translate-x-1/2 w-full max-w-2xl z-[120] px-4"
          >
            <div className="glass-strong rounded-xl border border-primary/30 shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden crt-scanlines">
              
              {/* Terminal Header */}
              <div className="bg-onyx/80 px-4 py-2 border-b border-steel flex justify-between items-center">
                <span className="text-[10px] font-mono text-primary animate-pulse">SYSTEM_COMMAND_PALETTE v2.0</span>
                <span className="text-[10px] font-mono text-muted-foreground uppercase">Mode: Admin</span>
              </div>

              {/* Search Area */}
              <div className="flex items-center gap-3 px-6 py-4 bg-background/40">
                <Search className="w-5 h-5 text-primary" />
                <input
                  type="text"
                  placeholder="Execute command..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="flex-1 bg-transparent text-foreground placeholder:text-muted-foreground focus:outline-none font-mono text-lg"
                  autoFocus
                />
                <kbd className="px-2 py-1 rounded bg-steel/30 text-[10px] font-mono text-muted-foreground border border-steel">
                  ESC
                </kbd>
              </div>

              {/* Commands List */}
              <div className="max-h-[400px] overflow-y-auto py-3 px-2">
                {filteredCommands.map((cmd, index) => (
                  <button
                    key={cmd.id}
                    onClick={cmd.action}
                    className="w-full flex items-center gap-4 px-4 py-3 rounded-lg hover:bg-primary/10 transition-all group relative border border-transparent hover:border-primary/20"
                  >
                    <div className="p-2 rounded bg-steel/20 text-muted-foreground group-hover:text-primary transition-colors">
                      {cmd.icon}
                    </div>
                    <div className="flex-1 text-left">
                      <div className="font-mono text-sm font-bold group-hover:text-primary transition-colors">
                        {cmd.title}
                      </div>
                      <div className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">
                        {cmd.description}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
              
              {/* Footer */}
              <div className="px-6 py-3 border-t border-steel bg-onyx/50 flex items-center justify-between">
                <div className="text-[9px] font-mono text-muted-foreground">
                  USE <span className="text-primary">↑↓</span> TO NAVIGATE | <span className="text-primary">ENTER</span> TO EXECUTE
                </div>
                <Command className="w-3 h-3 text-primary/40" />
              </div>
            </div>
          </motion.div>

          {/* modal */}
          {isResume && (
            <ResumeModal isResume={isResume} setIsResume={setIsResume} />
          )}

        </>
      )}
    </AnimatePresence>
  );

  // Return the trigger button normally, but portal the modal to document.body
  return (
    <>
      <motion.button
        onClick={() => setIsOpen(true)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center gap-3 px-3 py-1.5 rounded border border-steel/50 bg-onyx/50 text-muted-foreground hover:text-primary hover:border-primary/50 transition-all font-mono text-xs cursor-pointer group"
      >
        <Terminal className="w-3.5 h-3.5 group-hover:animate-pulse" />
        <span className="hidden sm:inline tracking-tighter uppercase">Quick_Actions</span>
        <kbd className="ml-2 flex items-center gap-1 px-1.5 py-0.5 rounded bg-black/40 text-[10px] border border-steel/30">
          ⌘K
        </kbd>
      </motion.button>

      {/* This renders the modal at the end of <body> to break the stacking context */}
      {mounted && createPortal(modalContent, document.body)}
    </>
  );
}