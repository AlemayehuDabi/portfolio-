'use client';

// import ResumeModal from '@/component/ResumeModal/modal';
// import Image from 'next/image';
// import Link from 'next/link';
// import { useEffect, useState } from 'react';
// import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

// export default function HeroSection() {
//   const [currentRole, setCurrentRole] = useState('');
//   const [roleIndex, setRoleIndex] = useState(0);
//   const [charIndex, setCharIndex] = useState(0);
//   const [isDeleting, setIsDeleting] = useState(false);
//   const [isResume, setIsResume] = useState(false);

//   // Typewriter effect
//   useEffect(() => {
//     const roles = [
//       'Web Developer',
//       'Mobile Developer',
//       'Programmer',
//       'Problem Solver',
//       'Code Enthusiast',
//     ];

//     const typeSpeed = isDeleting ? 50 : 100;
//     const delayBetweenRoles = 2000;

//     const type = () => {
//       const currentText = roles[roleIndex];
//       setCurrentRole(
//         isDeleting
//           ? currentText.substring(0, charIndex - 1)
//           : currentText.substring(0, charIndex + 1)
//       );
//       setCharIndex((prev) => (isDeleting ? prev - 1 : prev + 1));

//       if (!isDeleting && charIndex === currentText.length) {
//         setTimeout(() => setIsDeleting(true), delayBetweenRoles);
//       } else if (isDeleting && charIndex === 0) {
//         setIsDeleting(false);
//         setRoleIndex((prev) => (prev + 1) % roles.length);
//       }
//     };

//     const timer = setTimeout(type, typeSpeed);
//     return () => clearTimeout(timer);
//   }, [charIndex, isDeleting, roleIndex]);

//   return (
//     <section className="w-full px-6 mt-30 mb-48 md:mb-20 md:mt-20 sm:px-10 md:py-16 flex flex-col lg:flex-row items-center justify-center gap-10 max-w-7xl mx-auto">
//       {/* Left: Text Area */}
//       <div className="text-center lg:text-left md:flex-1 xl:flex-2">
//         <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-200 mb-4 leading-tight">
//           Hi, I&apos;m <span className="text-blue-400">Alemayehu Dabi</span>
//         </h1>
//         <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-300 mb-6">
//           I&apos;m a{' '}
//           <span className="text-[var(--primary)] typewriter">
//             {currentRole}
//           </span>
//           <span className="blinking-cursor">|</span>
//         </h2>

//         <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-xl mx-auto lg:mx-0 mb-8 hidden md:inline-block">
//           Passionate about crafting clean, efficient, and scalable code.
//           Specializing in modern web technologies to build impactful solutions.
//         </p>

//         {/* Buttons */}
//         <div className="hidden lg:flex flex-wrap justify-center lg:justify-start gap-6">
//           <Link
//             href="/projects"
//             className="bg-blue-500 text-white font-semibold px-6 py-3 rounded-lg shadow hover:bg-blue-600 transition"
//           >
//             Projects
//           </Link>
//           <button
//             onClick={() => setIsResume(!isResume)}
//             rel="noopener noreferrer"
//             className="border bg-white text-black dark:text-black font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition"
//           >
//             Resume
//           </button>
//         </div>
//       </div>

//       {/* Right: Image + Socials */}
//       <div className="relative w-full  max-w-sm sm:max-w-md  lg:max-w-md xl:max-w-lg flex-1">
//         <div className="w-full h-96 rounded-lg overflow-hidden border border-amber-600 shadow-lg ">
//           <Image
//             src="/img.jpg"
//             alt="Profile"
//             width={500}
//             height={500}
//             priority
//             className="w-full h-full object-cover"
//             style={{ width: '100%', height: '100%' }}
//           />
//         </div>

//         {/* Social Icons */}
//         <div className="absolute -bottom-6 left-0 right-0 px-4">
//           <div className="flex justify-center gap-6 bg-white bg-opacity-90 px-4 py-2 rounded-md shadow border backdrop-blur-sm">
//             <Link
//               href="https://x.com/AlemayehuD86593"
//               aria-label="X"
//               target="_blank"
//               className="hover:scale-110 transition-transform"
//             >
//               <FaTwitter size={24} className="text-sky-500" />
//             </Link>
//             <Link
//               href="https://www.instagram.com/alexda346/"
//               aria-label="Instagram"
//               target="_blank"
//               className="hover:scale-110 transition-transform"
//             >
//               <FaInstagram size={24} className="text-pink-500" />
//             </Link>
//             <Link
//               href="https://www.linkedin.com/in/alemayehu-dabi-79b5212a1/"
//               aria-label="LinkedIn"
//               target="_blank"
//               className="hover:scale-110 transition-transform"
//             >
//               <FaLinkedin size={24} className="text-blue-700" />
//             </Link>
//             <Link
//               href="https://www.github.com/AlemayehuDabi"
//               aria-label="GitHub"
//               target="_blank"
//               className="hover:scale-110 transition-transform"
//             >
//               <FaGithub size={24} className="text-black" />
//             </Link>
//           </div>
//         </div>
//       </div>

//       {/* button for small screen */}
//       <div className="flex flex-wrap justify-center lg:hidden gap-6 mt-10">
//         <Link
//           href="/projects"
//           className="bg-blue-500 text-white font-semibold px-6 py-3 rounded-lg shadow hover:bg-blue-600 transition"
//         >
//           Projects
//         </Link>
//         <button
//           onClick={() => setIsResume(!isResume)}
//           rel="noopener noreferrer"
//           className="border bg-white text-black dark:text-black font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition"
//         >
//           Resume
//         </button>
//       </div>

//       {/* modal */}
//       {isResume && (
//         <ResumeModal isResume={isResume} setIsResume={setIsResume} />
//       )}
//     </section>
//   );
// }

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, GitBranch, Clock, Terminal } from 'lucide-react';
import Image from 'next/image';

const systemInfo = [
  { label: 'System', value: 'Portfolio v2.0.0' },
  { label: 'Status', value: 'Operational', isStatus: true },
  { label: 'Uptime', value: '99.9%' },
  { label: 'Last Deploy', value: '2 hours ago' },
];

const terminalLines = [
  { type: 'command', content: '$ whoami' },
  { type: 'output', content: 'I am Alemayehu Dabi, Software Engineer' },
  { type: 'command', content: '$ cat about.txt' },
  { type: 'output', content: 'Building scalable systems that handle millions of requests.' },
  { type: 'output', content: 'Passionate about clean architecture and performance optimization.' },
  { type: 'command', content: '$ ls ./skills --sort-by=expertise' },
  { type: 'output', content: 'React  TypeScript  Node.js  System Design  RestApi' },
  { type: 'command', content: '$ echo $CURRENT_STATUS' },
  { type: 'output', content: 'Open to interesting opportunities...' },
];

export default function TerminalHero() {
  const [displayedLines, setDisplayedLines] = useState<typeof terminalLines>([]);
  const [currentTyping, setCurrentTyping] = useState('');
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    if (lineIndex >= terminalLines.length) {
      setIsTyping(false);
      return;
    }

    const currentLine = terminalLines[lineIndex];
    
    if (charIndex < currentLine.content.length) {
      const timeout = setTimeout(() => {
        setCurrentTyping(currentLine.content.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, currentLine.type === 'command' ? 50 : 15);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setDisplayedLines([...displayedLines, currentLine]);
        setCurrentTyping('');
        setCharIndex(0);
        setLineIndex(lineIndex + 1);
      }, currentLine.type === 'command' ? 500 : 200);
      return () => clearTimeout(timeout);
    }
  }, [lineIndex, charIndex, displayedLines]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="w-full max-w-5xl mx-auto pt-35 px-4"
    >
      {/* Status Bar */}
      <motion.div 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="flex items-center justify-between px-4 py-2 mb-4 glass rounded-lg"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {systemInfo.map((item, i) => (
            <div key={i} className="flex items-center gap-2 text-sm">
              <span className="text-muted-foreground">{item.label}:</span>
              {item.isStatus ? (
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-glow status-pulse" />
                  <span className="text-emerald-glow font-medium">{item.value}</span>
                </span>
              ) : (
                <span className="text-foreground font-mono">{item.value}</span>
              )}
            </div>
          ))}
        </div>
        <div className="flex items-center gap-2 text-muted-foreground">
          <Clock className="w-4 h-4" />
          <span className="font-mono text-sm">
            {new Date().toLocaleTimeString()}
          </span>
        </div>
      </motion.div>

      {/* terminal */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* LEFT SIDE: THE IMAGE (Hacker Profile Style) */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="lg:col-span-4 relative group"
        >
          {/* Decorative Corner Brackets */}
          <div className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-cyan-500/50" />
          <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-cyan-500/50" />
          
          <div className="relative overflow-hidden rounded-sm border border-white/10 bg-black">
            {/* The Image */}
            <Image 
              src="/img.jpg"
              alt="Alemayehu Dabi"
              className="w-full aspect-[4/5] object-cover grayscale contrast-125 brightness-75 mix-blend-lighten opacity-80 group-hover:opacity-100 transition-opacity"
            />
            
            {/* Scanline Overlay Effect */}
            <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%]" />
            
            {/* "Detected" Overlay */}
            <div className="absolute top-4 left-4 flex flex-col gap-1">
              <div className="bg-cyan-500/20 backdrop-blur-md px-2 py-1 border border-cyan-500/50 text-[10px] text-cyan-400 font-mono">
                SUBJECT_ID: AD_99
              </div>
              <div className="bg-emerald-500/20 backdrop-blur-md px-2 py-1 border border-emerald-500/50 text-[10px] text-emerald-400 font-mono">
                CLEARANCE: LEVEL_4
              </div>
            </div>
          </div>

          {/* Biometric Stats Below Image */}
          <div className="mt-4 space-y-2 font-mono text-[10px] text-muted-foreground uppercase tracking-widest">
            <div className="flex justify-between">
              <span>Biometrics</span>
              <span className="text-cyan-500">Match 99.2%</span>
            </div>
            <div className="w-full h-1 bg-white/5 overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: "99.2%" }}
                className="h-full bg-cyan-500/50"
              />
            </div>
          </div>
        </motion.div>

        {/* RIGHT SIDE: THE TERMINAL */}
      <div className="lg:col-span-8 terminal-window noise-overlay relative min-h-[450px]">
        {/* Terminal Header */}
        <div className="terminal-header">
          <div className="flex items-center gap-2">
            <div className="terminal-dot terminal-dot-red" />
            <div className="terminal-dot terminal-dot-yellow" />
            <div className="terminal-dot terminal-dot-green" />
          </div>
          <div className="flex-1 flex items-center justify-center gap-2 text-muted-foreground text-sm">
            <Terminal className="w-4 h-4" />
            <span className="font-mono">portfolio — zsh — 80×24</span>
          </div>
          <div className="flex items-center gap-3 text-muted-foreground text-sm">
            <div className="flex items-center gap-1.5">
              <GitBranch className="w-4 h-4" />
              <span className="font-mono">main</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Zap className="w-4 h-4 text-amber-glow" />
              <span className="font-mono">live</span>
            </div>
          </div>
        </div>

        {/* Terminal Content */}
        <div className="p-6 font-mono text-sm leading-relaxed min-h-[320px]">
          <AnimatePresence mode="popLayout">
            {displayedLines.map((line, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2 }}
                className={`mb-1 ${
                  line.type === 'command' 
                    ? 'text-cyan-glow' 
                    : 'text-foreground/90'
                }`}
              >
                {line.content}
              </motion.div>
            ))}
          </AnimatePresence>
          
          {/* Current Typing Line */}
          {isTyping && lineIndex < terminalLines.length && (
            <div className={`flex items-center ${
              terminalLines[lineIndex].type === 'command' 
                ? 'text-cyan-glow' 
                : 'text-foreground/90'
            }`}>
              <span>{currentTyping}</span>
              <span className="w-2 h-5 bg-cyan-glow cursor-blink ml-0.5" />
            </div>
          )}

          {/* Completed State */}
          {!isTyping && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="flex items-center text-cyan-glow"
            >
              <span>$ </span>
              <span className="w-2 h-5 bg-cyan-glow cursor-blink ml-0.5" />
            </motion.div>
          )}
        </div>

        {/* Bottom Gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-obsidian to-transparent pointer-events-none" />
      </div>
      </div>

     
    </motion.div>
  );
}
