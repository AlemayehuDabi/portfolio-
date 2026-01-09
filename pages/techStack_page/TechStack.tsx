'use client'
// import {
//   SiCss3,
//   SiExpress,
//   SiGit,
//   SiGithub,
//   SiHtml5,
//   SiJavascript,
//   SiMongoose,
//   SiNestjs,
//   SiNextdotjs,
//   SiNodedotjs,
//   SiPostgresql,
//   SiReact,
//   SiReactbootstrap,
//   SiSupabase,
//   SiTailwindcss,
//   SiTypescript,
// } from 'react-icons/si';

// const sections = [
//   {
//     title: 'Languages',
//     items: [
//       { icon: <SiJavascript color="#F7DF1E" size={50} />, name: 'JavaScript' },
//       { icon: <SiTypescript color="#3178C6" size={50} />, name: 'TypeScript' },
//     ],
//   },
//   {
//     title: 'Framework',
//     items: [
//       { icon: <SiHtml5 color="#E44D26" size={50} />, name: 'HTML' },
//       { icon: <SiCss3 color="#264DE4" size={50} />, name: 'CSS' },
//       { icon: <SiTailwindcss color="#38BDF8" size={50} />, name: 'Tailwind' },
//       {
//         icon: <SiReactbootstrap color="#563D7C" size={50} />,
//         name: 'Bootstrap',
//       },
//       { icon: <SiReact color="#61DAFB" size={50} />, name: 'React' },
//       {
//         icon: <SiNextdotjs className="text-black dark:text-white" size={50} />,
//         name: 'Next.js',
//       },
//       {
//         icon: <SiExpress className="text-black dark:text-white" size={50} />,
//         name: 'Express',
//       },
//       { icon: <SiNodedotjs color="#339933" size={50} />, name: 'Node.js' },
//       { icon: <SiSupabase color="#3ECF8E" size={50} />, name: 'Supabase' },
//       { icon: <SiNestjs color="#FF0000" size={50} />, name: 'Nest' },
//     ],
//   },
//   {
//     title: 'Database',
//     items: [
//       { icon: <SiMongoose color="#800000" size={50} />, name: 'Mongoose' },
//       { icon: <SiPostgresql color="#336791" size={50} />, name: 'Postgresql' },
//     ],
//   },
//   {
//     title: 'Version Control',
//     items: [
//       {
//         icon: <SiGit className="text-black dark:text-white" size={50} />,
//         name: 'Git',
//       },
//       {
//         icon: <SiGithub className="text-black dark:text-white" size={50} />,
//         name: 'GitHub',
//       },
//     ],
//   },
// ];

// export default function TechStack() {
//   return (
//     <section className="w-full py-14 px-6 flex flex-col gap-12 mt-10">
//       <h1 className="text-4xl md:text-5xl font-semibold text-center">
//         Tech <span className="text-[var(--primary)]">Stack</span>
//       </h1>

//       <div className="flex flex-col gap-14">
//         {sections.map((section, i) => (
//           <div key={section.title} className="w-full">
//             <h2 className="text-center text-lg md:text-xl font-medium text-gray-600 mb-6">
//               {section.title}
//             </h2>

//             {/* marquee container */}
//             <div className="marquee overflow-hidden flex justify-center items-center">
//               {/* track contains two identical groups for seamless loop */}
//               <div
//                 className={`marquee-track text-center ${
//                   i % 2 === 1 ? 'marquee-reverse' : 'marquee-forward'
//                 }`}
//                 // aria-hidden for duplicated track semantics
//                 aria-hidden="true"
//               >
//                 {/* group 1 */}
//                 <div className="marquee-group flex items-center gap-10">
//                   {section.items.map((tech, idx) => (
//                     <div
//                       key={`${section.title}-a-${idx}`}
//                       className="marquee-item flex flex-col items-center justify-center min-w-[120px]"
//                     >
//                       <div className="icon">{tech.icon}</div>
//                       <span className="mt-2 text-sm text-gray-400">
//                         {tech.name}
//                       </span>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Cpu, Zap, Terminal, Command } from 'lucide-react';
import SpotlightCard from '../../component/SpotlightCard';

interface TechNode {
  id: string;
  name: string;
  category: string;
  level: number; // 1-5, 5 being hottest
  x: number;
  y: number;
  connections: string[];
}

const techNodes: TechNode[] = [
  // Core
  { id: 'react', name: 'React', category: 'Frontend', level: 5, x: 50, y: 50, connections: ['typescript', 'nextjs', 'tailwind', 'framer'] },
  { id: 'typescript', name: 'TypeScript', category: 'Language', level: 5, x: 30, y: 35, connections: ['react', 'nodejs', 'nestjs'] },
  { id: 'nodejs', name: 'Node.js', category: 'Backend', level: 4, x: 70, y: 30, connections: ['typescript', 'postgresql', 'rest'] },
  
  // Frontend
  { id: 'nextjs', name: 'Next.js', category: 'Frontend', level: 4, x: 25, y: 60, connections: ['react', 'tailwind'] },
  { id: 'tailwind', name: 'Tailwind CSS', category: 'Styling', level: 5, x: 60, y: 70, connections: ['react', 'nextjs', 'sveltekit'] },
  { id: 'framer', name: 'Framer Motion', category: 'Animation', level: 4, x: 75, y: 55, connections: ['react'] },
  {id: 'sveltekit', name: 'SvelteKit', category: 'Frontend', level:3, x: 40, y:40, connections: ['typescript']},
  
  // Backend
  { id: 'postgresql', name: 'PostgreSQL', category: 'Database', level: 4, x: 85, y: 40, connections: ['nodejs', 'prisma'] },
  // { id: 'redis', name: 'Redis', category: 'Cache', level: 3, x: 90, y: 55, connections: ['nodejs'] },
  { id: 'mongodb', name: 'MongoDb', category: 'Database', level: 3, x: 90, y: 55, connections: ['nodejs'] },
  // { id: 'graphql', name: 'GraphQL', category: 'API', level: 4, x: 55, y: 25, connections: ['nodejs', 'react'] },
  { id: 'rest', name: 'Rest', category: 'API', level: 4, x: 55, y: 25, connections: ['nodejs', 'react'] },
  { id: 'nestjs', name: 'NestJS', category: 'Backend', level: 4, x: 40, y: 20, connections: ['typescript', 'graphql'] },
  
  // ORM
  { id: 'prisma', name: 'Prisma', category: 'ORM', level: 4, x: 80, y: 65, connections: ['postgresql', 'typescript'] },
  { id: 'mongoose', name: 'Mongoose', category: 'ORM', level: 4, x: 20, y: 40, connections: ['mongoose', 'typescript'] },
  
  // Cloud
  // { id: 'aws', name: 'AWS', category: 'Cloud', level: 4, x: 20, y: 45, connections: ['docker', 'kubernetes'] },
  // { id: 'docker', name: 'Docker', category: 'DevOps', level: 4, x: 15, y: 70, connections: ['aws', 'kubernetes'] },
  // { id: 'kubernetes', name: 'Kubernetes', category: 'DevOps', level: 3, x: 10, y: 55, connections: ['docker', 'aws'] },
  
  // Emerging
  { id: 'rust', name: 'Rust', category: 'Language', level: 2, x: 45, y: 80, connections: [] },
  { id: 'go', name: 'Go', category: 'Language', level: 2, x: 35, y: 75, connections: [] },
];

const terminalCommands = [
  { cmd: 'skills --list --sort=proficiency', output: 'React, TypeScript, Node.js, PostgreSQL, RestApi...' },
  { cmd: 'skills --category=frontend', output: 'React (★★★★★), Next.js (★★★★☆), Next.js (★★★☆☆), Tailwind (★★★★★)' },
  { cmd: 'skills --category=backend', output: 'Node.js (★★★★☆), PostgreSQL (★★★★☆), Mongodb (★★★☆☆)' },
  { cmd: 'skills --emerging', output: 'Rust (★★☆☆☆), Go (★★☆☆☆)' },
  { cmd: 'cat ~/learning.md', output: 'Currently deep-diving into: AI/ML and learning Rust programming language' },
  {
    cmd: 'skills --help',
    output: 'AVAILABLE_COMMANDS:\n- skills --list --sort=proficiency\n- skills --category=frontend\n- skills --category=backend\n- skills --emerging\n- cat ~/learning.md\n- clear'
  }
];

export default function TechStackSection() {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  const [terminalInput, setTerminalInput] = useState('');

  const [terminalHistory, setTerminalHistory] = useState<{ type: 'cmd' | 'output'; text: string }[]>([
    { type: 'cmd', text: '$ skills --help' },
    { type: 'output', text: 'Usage: skills [--list --sort=proficiency] [--category=<cat>] [--emerging]' },
  ]);

  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true });

  const getHeatColor = (level: number) => {
    if (level >= 5) return 'text-rose-glow';
    if (level >= 4) return 'text-amber-glow';
    if (level >= 3) return 'text-emerald-glow';
    return 'text-cyan-glow';
  };

  const getHeatGlow = (level: number) => {
    if (level >= 5) return 'shadow-[0_0_20px_hsl(var(--rose-glow)/0.5)]';
    if (level >= 4) return 'shadow-[0_0_15px_hsl(var(--amber-glow)/0.4)]';
    if (level >= 3) return 'shadow-[0_0_10px_hsl(var(--emerald-glow)/0.3)]';
    return 'shadow-[0_0_8px_hsl(var(--cyan-glow)/0.2)]';
  };

  const handleTerminalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Use the raw input for display, but clean version for logic
    const rawInput = terminalInput.trim();
    if (!rawInput) return;
  
    const cleanInput = rawInput.toLowerCase();
  
    // 1. Handle Built-ins (Early Return Pattern)
    if (cleanInput === 'clear') {
      setTerminalHistory([]); // Reset history
      setTerminalInput('');   // Reset input
      return;                 // <--- CRITICAL: Stop the function here
    }
  
    // 2. Exact Match Check
    const matchedCommand = terminalCommands.find(
      c => c.cmd.toLowerCase() === cleanInput
    );
  
    // 3. Update History for normal commands
    const newEntries = [
      { type: 'cmd' as const, text: `$ ${rawInput}` },
      { 
        type: 'output' as const, 
        text: matchedCommand?.output || `command not found. Try: skills --help` 
      },
    ];
  
    setTerminalHistory(prev => [...prev, ...newEntries]);
    setTerminalInput('');
  };
  
  return (
    <motion.section
      ref={containerRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="space-y-8 px-10 pt-35 pb-10"
    >
      <div className="flex items-center gap-3 mb-8">
        <Cpu className="w-6 h-6 text-primary" />
        <h2 className="text-2xl font-bold">Tech Stack</h2>
        <span className="text-sm text-muted-foreground font-mono">{"// CPU Heatmap"}</span>
      </div>

      {/* Heat Legend */}
      <div className="flex items-center gap-6 text-sm">
        <span className="text-muted-foreground">Proficiency:</span>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
          <div className="flex items-center gap-1">
            <span className="w-3 h-3 rounded-full bg-cyan-glow/50" />
            <span className="text-muted-foreground">Learning</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="w-3 h-3 rounded-full bg-emerald-glow" />
            <span className="text-muted-foreground">Comfortable</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="w-3 h-3 rounded-full bg-amber-glow" />
            <span className="text-muted-foreground">Proficient</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="w-3 h-3 rounded-full bg-rose-glow" />
            <span className="text-muted-foreground">Expert</span>
          </div>
        </div>
      </div>

      {/* Node Graph */}
      <SpotlightCard>
        <div className="relative h-[400px] p-6 overflow-hidden">
          {/* Connection Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            {techNodes.map(node =>
              node.connections.map(connId => {
                const targetNode = techNodes.find(n => n.id === connId);
                if (!targetNode) return null;
                
                const isHighlighted = hoveredNode === node.id || hoveredNode === connId;
                
                return (
                  <motion.line
                    key={`${node.id}-${connId}`}
                    x1={`${node.x}%`}
                    y1={`${node.y}%`}
                    x2={`${targetNode.x}%`}
                    y2={`${targetNode.y}%`}
                    stroke={isHighlighted ? 'hsl(var(--primary))' : 'hsl(var(--steel))'}
                    strokeWidth={isHighlighted ? 2 : 1}
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={isInView ? { pathLength: 1, opacity: isHighlighted ? 0.8 : 0.3 } : {}}
                    transition={{ duration: 0.5, delay: Math.random() * 0.5 }}
                  />
                );
              })
            )}
          </svg>

          {/* Nodes */}
          {techNodes.map((node, index) => (
            <motion.div
              key={node.id}
              initial={{ scale: 0, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : {}}
              transition={{ delay: index * 0.05, type: 'spring', stiffness: 200 }}
              className={`absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer ${getHeatGlow(node.level)}`}
              style={{ left: `${node.x}%`, top: `${node.y}%` }}
              onMouseEnter={() => setHoveredNode(node.id)}
              onMouseLeave={() => setHoveredNode(null)}
            >
              <motion.div
                whileHover={{ scale: 1.2 }}
                className={`px-3 py-1.5 rounded-lg border bg-background/80 backdrop-blur-sm ${
                  hoveredNode === node.id ? 'border-primary z-20' : 'border-steel'
                }`}
              >
                <span className={`text-sm font-mono font-medium ${getHeatColor(node.level)}`}>
                  {node.name}
                </span>
              </motion.div>
              
              {hoveredNode === node.id && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-2 px-3 py-2 rounded-lg bg-card border border-steel text-xs whitespace-nowrap z-30"
                >
                  <div className="font-medium">{node.category}</div>
                  <div className="text-muted-foreground">
                    {'★'.repeat(node.level)}{'☆'.repeat(5 - node.level)}
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </SpotlightCard>

      {/* Terminal */}
      <div className="terminal-window crt-scanlines">
        <div className="terminal-header">
          <div className="flex items-center gap-2">
            <div className="terminal-dot terminal-dot-red" />
            <div className="terminal-dot terminal-dot-yellow" />
            <div className="terminal-dot terminal-dot-green" />
          </div>
          <div className="flex items-center gap-2 text-muted-foreground text-sm">
            <Terminal className="w-4 h-4" />
            <span className="font-mono">skills-explorer — zsh</span>
          </div>
          <div className="flex items-center gap-2">
            <Command className="w-4 h-4 text-muted-foreground" />
            <span className="text-xs text-muted-foreground">⌘K</span>
          </div>
        </div>

        <div className="p-4 font-mono text-sm h-48 overflow-y-auto">
          {terminalHistory.map((entry, i) => (
            <div
              key={i}
              className={entry.type === 'cmd' ? 'text-cyan-glow' : 'text-muted-foreground'}
            >
              {entry.text}
            </div>
          ))}
          
          <form onSubmit={handleTerminalSubmit} className="flex items-center text-cyan-glow mt-2">
            <span>$ </span>
            <input
              type="text"
              value={terminalInput}
              onChange={(e) => setTerminalInput(e.target.value)}
              className="flex-1 bg-transparent outline-none ml-1 caret-cyan-glow"
              placeholder="Type a command..."
              autoFocus
            />
          </form>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-4 gap-4">
        {[
          { label: 'Languages', count: 2, icon: <Zap className="w-4 h-4" /> },
          { label: 'Frameworks', count: 5, icon: <Zap className="w-4 h-4" /> },
          { label: 'Tools', count: 10, icon: <Zap className="w-4 h-4" /> },
          { label: 'Years Coding', count: 2, icon: <Zap className="w-4 h-4" /> },
        ].map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <SpotlightCard>
              <div className="p-4 text-center">
                <div className="text-3xl font-bold gradient-text">{stat.count}+</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            </SpotlightCard>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

