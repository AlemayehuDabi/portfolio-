'use client'

import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { GitBranch, GitMerge, GitCommit, GitPullRequest, X, ExternalLink, Calendar, MapPin, Building2 } from 'lucide-react';
// import SpotlightCard from '../../component/SpotlightCard';

interface CareerMilestone {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  type: 'main' | 'branch' | 'merge';
  branchName?: string;
  achievements: string[];
  tech: string[];
  color: string;
}

const milestones: CareerMilestone[] = [
  {
    id: 'green-circle-current',
    company: 'Green-Circle',
    role: 'Co-Founder & CTO',
    period: '2025-current',
    location: 'Remote',
    type: 'branch',
    branchName: 'feature/startup-adventure',
    achievements: [
      'Built MVP',
      'Architected real-time collaboration features',
    ],
    tech: ['React', 'Next.js', 'Go', 'PostgreSQL'],
    color: 'violet-glow',
  },
  {
    id: 'simba-intern',
    company: 'Simba',
    role: 'Software Development',
    period: '2025',
    location: 'Remote',
    type: 'merge',
    achievements: [
      'Designed and implemented Admin Panel',
      'Improved API in another existing platform',
    ],
    tech: ['React', 'Next.js', 'Django'],
    color: 'emerald-glow',
  },
  // {
  //   id: 'freelance',
  //   company: 'Freelance Consulting',
  //   role: 'Full Stack Developer',
  //   period: '2018 - 2019',
  //   location: 'Remote',
  //   type: 'branch',
  //   branchName: 'feature/freelance-era',
  //   achievements: [
  //     'Delivered 15+ projects for clients worldwide',
  //     'Specialized in e-commerce and SaaS applications',
  //     'Built lasting relationships with recurring clients',
  //   ],
  //   tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
  //   color: 'amber-glow',
  // },
  {
    id: 'fidel-ai-current',
    company: 'Fidel-Ai',
    role: 'Co-Founder & Software Engineer',
    period: '2024-current',
    location: 'Remote',
    type: 'branch',
    branchName: 'feature/startup-adventure',
    achievements: [
      'Built MVP',
    ],
    tech: ['React-native', 'Node', 'PostgreSQL/Neon'],
    color: 'violet-glow',
  },
  {
    id: 'Haye-intern',
    company: 'Haye-Fintech',
    role: 'Software Engineering Intern',
    period: '2025',
    location: 'Remote',
    type: 'main',
    achievements: [
      'Contributed to Besewonline Platform',
      'Implemented ui feature',
      'Integrating api',
    ],
    tech: ['React-native', 'javascript'],
    color: 'rose-glow',
  },
];

export default function ExperienceSection() {
  const [selectedMilestone, setSelectedMilestone] = useState<CareerMilestone | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  const getNodePosition = (index: number, type: string) => {
    if (type === 'branch') {
      return { x: 150, offset: -60 };
    }
    return { x: 80, offset: 0 };
  };

  return (
    <motion.section
      ref={containerRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="space-y-8 px-10 py-20"
    >
      <div className="flex items-center gap-3 mb-8">
        <GitBranch className="w-6 h-6 text-primary" />
        <h2 className="text-2xl font-bold">Experience</h2>
        <span className="text-sm text-muted-foreground font-mono">// git log --graph</span>
      </div>

      <div className="relative">
        {/* Main Branch Line */}
        <svg className="absolute left-[78px] top-0 w-full h-full overflow-visible pointer-events-none" style={{ zIndex: 0 }}>
          {/* Main vertical line */}
          <motion.line
            x1="0"
            y1="0"
            x2="0"
            y2="100%"
            stroke="hsl(var(--cyan-glow))"
            strokeWidth="3"
            strokeDasharray="1000"
            initial={{ strokeDashoffset: 1000 }}
            animate={isInView ? { strokeDashoffset: 0 } : {}}
            transition={{ duration: 2, ease: 'easeOut' }}
          />
          
          {/* Branch curves */}
          {milestones.map((milestone, index) => {
            if (milestone.type === 'branch') {
              const y = index * 160 + 60;
              return (
                <motion.path
                  key={milestone.id}
                  d={`M 0 ${y} C 40 ${y} 60 ${y - 30} 70 ${y - 30}`}
                  stroke={`hsl(var(--${milestone.color}))`}
                  strokeWidth="2"
                  fill="none"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
                  transition={{ delay: 0.5 + index * 0.15, duration: 0.5 }}
                />
              );
            }
            if (milestone.type === 'merge') {
              const y = index * 160 + 60;
              return (
                <motion.path
                  key={milestone.id}
                  d={`M 70 ${y - 80} C 60 ${y - 50} 40 ${y} 0 ${y}`}
                  stroke={`hsl(var(--${milestone.color}))`}
                  strokeWidth="2"
                  fill="none"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
                  transition={{ delay: 0.5 + index * 0.15, duration: 0.5 }}
                />
              );
            }
            return null;
          })}
        </svg>

        {/* Milestones */}
        <div className="space-y-8">
          {milestones.map((milestone, index) => {
            const pos = getNodePosition(index, milestone.type);
            
            return (
              <motion.div
                key={milestone.id}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.2 + index * 0.15, duration: 0.4 }}
                className="relative flex items-start gap-6"
                style={{ marginLeft: milestone.type === 'branch' ? '70px' : '0' }}
              >
                {/* Commit Node */}
                <motion.button
                  onClick={() => setSelectedMilestone(milestone)}
                  className={`relative z-10 flex-shrink-0 w-14 h-14 rounded-full border-3 flex items-center justify-center bg-background cursor-pointer transition-all hover:scale-110`}
                  style={{
                    borderColor: `hsl(var(--${milestone.color}))`,
                    boxShadow: `0 0 20px hsl(var(--${milestone.color}) / 0.3)`,
                    marginLeft: milestone.type !== 'branch' ? '52px' : '0',
                  }}
                  whileHover={{
                    boxShadow: `0 0 30px hsl(var(--${milestone.color}) / 0.5)`,
                  }}
                >
                  {milestone.type === 'branch' ? (
                    <GitBranch className={`w-5 h-5 text-${milestone.color}`} />
                  ) : milestone.type === 'merge' ? (
                    <GitMerge className={`w-5 h-5 text-${milestone.color}`} />
                  ) : (
                    <GitCommit className={`w-5 h-5 text-${milestone.color}`} />
                  )}
                </motion.button>

                {/* Commit Card */}
                <motion.div
                  className={`flex-1 p-4 rounded-lg border bg-card/50 backdrop-blur-sm transition-all cursor-pointer hover:border-primary/30`}
                  style={{ borderColor: `hsl(var(--${milestone.color}) / 0.3)` }}
                  whileHover={{ scale: 1.02, y: -2 }}
                  onClick={() => setSelectedMilestone(milestone)}
                >
                  {milestone.branchName && (
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`text-xs font-mono px-2 py-0.5 rounded bg-${milestone.color}/10 text-${milestone.color}`}>
                        {milestone.branchName}
                      </span>
                    </div>
                  )}
                  
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="font-semibold text-lg">{milestone.role}</h3>
                      <div className="flex items-center gap-2 text-muted-foreground text-sm">
                        <Building2 className="w-4 h-4" />
                        <span>{milestone.company}</span>
                      </div>
                    </div>
                    <div className="text-right text-sm">
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <Calendar className="w-3.5 h-3.5" />
                        <span className="font-mono">{milestone.period}</span>
                      </div>
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <MapPin className="w-3.5 h-3.5" />
                        <span>{milestone.location}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-3">
                    {milestone.tech.slice(0, 4).map(tech => (
                      <span
                        key={tech}
                        className="text-xs font-mono px-2 py-1 rounded bg-secondary text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                    {milestone.tech.length > 4 && (
                      <span className="text-xs font-mono px-2 py-1 rounded bg-secondary text-muted-foreground">
                        +{milestone.tech.length - 4}
                      </span>
                    )}
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* PR Modal */}
      {selectedMilestone && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-obsidian/80 backdrop-blur-sm"
          onClick={() => setSelectedMilestone(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="w-full max-w-2xl bg-card border border-steel rounded-xl overflow-hidden"
            onClick={e => e.stopPropagation()}
          >
            {/* PR Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-steel bg-onyx">
              <div className="flex items-center gap-3">
                <GitPullRequest className={`w-5 h-5 text-${selectedMilestone.color}`} />
                <span className="font-semibold">Pull Request</span>
                <span className="text-muted-foreground font-mono">#{selectedMilestone.id}</span>
              </div>
              <button
                onClick={() => setSelectedMilestone(null)}
                className="p-2 rounded-lg hover:bg-secondary transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* PR Content */}
            <div className="p-6 space-y-6">
              <div>
                <h3 className="text-xl font-bold mb-1">{selectedMilestone.role}</h3>
                <div className="flex items-center gap-4 text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Building2 className="w-4 h-4" />
                    {selectedMilestone.company}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {selectedMilestone.period}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {selectedMilestone.location}
                  </span>
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-3 flex items-center gap-2">
                  <span className="text-emerald-glow">+</span> Key Achievements
                </h4>
                <ul className="space-y-2">
                  {selectedMilestone.achievements.map((achievement, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-start gap-2 text-muted-foreground"
                    >
                      <span className="text-emerald-glow mt-1">•</span>
                      {achievement}
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-medium mb-3">Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedMilestone.tech.map(tech => (
                    <span
                      key={tech}
                      className={`text-sm font-mono px-3 py-1.5 rounded-lg bg-${selectedMilestone.color}/10 text-${selectedMilestone.color} border border-${selectedMilestone.color}/20`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* PR Footer */}
            <div className="px-6 py-4 border-t border-steel bg-onyx flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className={`w-3 h-3 rounded-full bg-${selectedMilestone.color}`} />
                <span className="text-sm text-muted-foreground">
                  {selectedMilestone.type === 'main' ? 'Merged into main' : 
                   selectedMilestone.type === 'branch' ? 'Feature branch' : 'Merged back to main'}
                </span>
              </div>
              <button
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                View Details
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </motion.section>
  );
}
