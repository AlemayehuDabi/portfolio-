'use client';

import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { 
  GitBranch, GitMerge, GitCommit, GitPullRequest, 
  X, ExternalLink, Building2, Terminal 
} from 'lucide-react';

interface CareerNode {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  type: 'main' | 'branch' | 'merge' | 'commit';
  branchName?: string;
  achievements: string[];
  tech: string[];
  color: 'violet-glow' | 'emerald-glow' | 'amber-glow' | 'rose-glow' | 'cyan-glow';
  description?: string;
}

const milestones: CareerNode[] = [
  {
    id: 'green-circle-cto',
    company: 'Green-Circle',
    role: 'Co-Founder & CTO',
    period: '2025 - Present',
    location: 'Remote',
    type: 'branch',
    branchName: 'feature/startup-v2',
    achievements: ['Architected real-time collaboration engine', 'Built MVP with Go & Next.js'],
    tech: ['React', 'Next.js', 'Go', 'PostgreSQL'],
    color: 'violet-glow',
  },
  {
    id: 'simba-dev',
    company: 'Simba',
    role: 'Web Developer',
    period: '2025',
    location: 'Remote',
    type: 'merge',
    achievements: ['Designed and implemented Admin Panel', 'Refactored legacy API layers'],
    tech: ['React', 'Next.js', 'Django'],
    color: 'emerald-glow',
  },
  {
    id: 'fidel-ai-eng',
    company: 'Fidel-Ai',
    role: 'Co-Founder & Software Engineer',
    period: '2024 - Present',
    location: 'Remote',
    type: 'branch',
    branchName: 'hotfix/ai-integration',
    achievements: ['Developed mobile MVP using React Native', 'Integrated LLM endpoints'],
    tech: ['React-Native', 'Node.js','Express.js' ,'Neon DB'],
    color: 'cyan-glow',
  },
  {
    id: 'haye-intern',
    company: 'Haye-Fintech',
    role: 'Software Engineering Intern',
    period: '2024',
    location: 'Hybrid',
    type: 'commit',
    achievements: ['Contributed to Besewonline Platform', 'Automated UI testing workflows'],
    tech: ['JavaScript', 'React Native', 'Api integration'],
    color: 'rose-glow',
  },
];

export default function ExperiencePage() {
  const [selectedNode, setSelectedNode] = useState<CareerNode | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });
  const [hoveredId, setHoveredId] = useState<string | null>(null); // Shared hover state

  // Icon selector based on Git action
  const getIcon = (type: CareerNode['type'], colorClass: string) => {
    const props = { className: `w-5 h-5 text-${colorClass}` };
    switch (type) {
      case 'branch': return <GitBranch {...props} />;
      case 'merge': return <GitMerge {...props} />;
      case 'commit': return <GitCommit {...props} />;
      default: return <GitCommit {...props} />;
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30">
      <motion.section
        ref={containerRef}
        className="max-w-5xl mx-auto px-6 pt-35 pb-10"
      >
        {/* Header (Stay the same) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-20 border-b border-steel pb-8">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <Terminal className="w-6 h-6 text-primary" />
              <h1 className="text-4xl font-bold tracking-tight uppercase">Career_Log</h1>
            </div>
            <p className="text-muted-foreground font-mono text-sm">{'>'} git log --graph --all</p>
          </div>
        </div>

        <div className="relative">
          {/* SVG Backbone (Stay the same) */}
          <svg className="absolute left-[27px] md:left-[39px] top-0 w-full h-full overflow-visible pointer-events-none" style={{ zIndex: 0 }}>
            <motion.line
              x1="0" y1="0" x2="0" y2="100%"
              stroke="hsl(var(--steel))"
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              animate={isInView ? { pathLength: 1 } : {}}
            />
          </svg>

          {/* List of Milestones */}
          <div className="space-y-12">
            {milestones.map((node, index) => {
              const isHovered = hoveredId === node.id;

              return (
                <motion.div
                  key={node.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: index * 0.1 }}
                  onMouseEnter={() => setHoveredId(node.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  className="relative flex items-center gap-8 md:gap-12 group"
                >
                  {/* GIT NODE */}
                  <motion.button
                    onClick={() => setSelectedNode(node)}
                    className={`relative z-10 flex-shrink-0 w-14 h-14 rounded-full border-3 flex items-center justify-center bg-background cursor-pointer transition-all hover:scale-110`}
                    style={{
                      borderColor: `hsl(var(--${node.color}))`,
                      boxShadow: `0 0 20px hsl(var(--${node.color}) / 0.3)`,
                      marginLeft: node.type !== 'branch' ? '52px' : '0',
                    }}
                    whileHover={{
                      boxShadow: `0 0 30px hsl(var(--${node.color}) / 0.5)`,
                    }}
                  >
                    {getIcon(node.type, node.color)}
                    
                    {/* Ring Pulse Effect on Hover */}
                    <AnimatePresence>
                      {isHovered && (
                        <motion.div 
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 0.2, scale: 1.5 }}
                          exit={{ opacity: 0, scale: 1.8 }}
                          className={`absolute inset-0 rounded-full bg-${node.color}`}
                        />
                      )}
                    </AnimatePresence>
                  </motion.button>

                  {/* EXPERIENCE CARD */}
                  <motion.div 
                    onClick={() => setSelectedNode(node)}
                    animate={{ 
                      x: isHovered ? 15 : 0,
                      borderColor: isHovered ? `hsl(var(--${node.color}) / 0.5)` : `hsl(var(--steel))`,
                      backgroundColor: isHovered ? `hsla(var(--${node.color}) / 0.03)` : `hsla(var(--card) / 0)`
                    }}
                    className="flex-1 glass p-6 rounded-xl border transition-all duration-300 cursor-pointer relative overflow-hidden"
                  >
                    {/* Subtle Gradient Accent on Hover */}
                    <motion.div 
                      animate={{ opacity: isHovered ? 1 : 0 }}
                      className={`absolute inset-0 bg-gradient-to-r from-${node.color}/5 to-transparent pointer-events-none`}
                    />

                    <div className="relative z-10">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-3">
                        <div>
                          {node.branchName && (
                            <span className={`text-[10px] font-mono uppercase px-2 py-0.5 rounded-md bg-${node.color}/10 text-${node.color} border border-${node.color}/20`}>
                              {node.branchName}
                            </span>
                          )}
                          <h3 className={`text-xl font-bold mt-1 transition-colors duration-300 ${isHovered ? `text-${node.color}` : 'text-foreground'}`}>
                            {node.role}
                          </h3>
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <Building2 className="w-4 h-4" />
                            <span className="text-sm">{node.company}</span>
                          </div>
                        </div>
                        <div className="text-sm text-muted-foreground font-mono">
                          {node.period}
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {node.tech.map(t => (
                          <span key={t} className="px-2 py-1 bg-onyx/50 text-[10px] font-mono rounded border border-steel/30">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* Pull Request Detail Modal */}
      <AnimatePresence>
        {selectedNode && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-background/80 backdrop-blur-md"
              onClick={() => setSelectedNode(null)}
            />
            <motion.div
              initial={{ scale: 0.9, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 20, opacity: 0 }}
              className="relative w-full max-w-2xl glass-strong border border-steel rounded-2xl overflow-hidden shadow-2xl"
            >
              {/* Modal Header */}
              <div className="bg-onyx/50 px-6 py-4 border-b border-steel flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <GitPullRequest className={`w-5 h-5 text-${selectedNode.color}`} />
                  <span className="font-mono text-sm font-bold uppercase tracking-widest">
                    Pull_Request #{selectedNode.id.split('-')[0]}
                  </span>
                </div>
                <button onClick={() => setSelectedNode(null)} className="hover:bg-steel p-1 rounded-full transition-colors">
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-8">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold mb-2">{selectedNode.role}</h2>
                  <p className="text-primary font-mono">{selectedNode.company} — {selectedNode.period}</p>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-sm font-mono text-muted-foreground uppercase mb-3 tracking-tighter">
                      {'>'} DIFF_LOG:
                    </h4>
                    <ul className="space-y-3">
                      {selectedNode.achievements.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-foreground/90">
                          <span className="text-emerald-glow font-bold">+</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-sm font-mono text-muted-foreground uppercase mb-3 tracking-tighter">
                      {'>'} STACK_PROFILES:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedNode.tech.map(t => (
                        <span key={t} className={`px-3 py-1.5 rounded-lg border border-${selectedNode.color}/30 bg-${selectedNode.color}/5 text-${selectedNode.color} text-sm font-mono`}>
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="px-8 py-6 bg-onyx/30 border-t border-steel flex justify-between items-center">
                <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground">
                  <GitMerge className="w-4 h-4" />
                  Merged by <span className="text-primary">@AlemayehuDabi</span>
                </div>
                <button className="bg-primary text-primary-foreground px-6 py-2 rounded-lg font-bold flex items-center gap-2 hover:opacity-90 transition-opacity">
                  <ExternalLink className="w-4 h-4" />
                  View Deployment
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}