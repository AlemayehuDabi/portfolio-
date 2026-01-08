import { motion } from 'framer-motion';
import SpotlightCard from './SpotlightCard';
import CodePreview from './CodePreview';
import { ExternalLink, Github, ArrowUpRight, Layers, Zap, Shield, Database, Terminal, BookOpen } from 'lucide-react';
import MagneticButton from './MagneticButton';
import Link from 'next/link';

interface Project {
  id: string;
  title: string;
  description: string;
  type: string;
  tags: string[];
  stats: { label: string; value: string }[];
  icon: React.ReactNode;
  featured?: boolean;
  code: { number: number; content: string; indent?: number }[];
  website?: string
  github: string
}

  const projects: Project[] = [
    {
      id: 'green-circle',
      title: 'Green Circle',
      description: 'A verified startup ecosystem platform connecting Ethiopian entrepreneurs with investors and data analysis via Next.js and Go.',
      tags: ['Next.js', 'Go', 'VeriFayda', 'Better-Auth'],
      stats: [],
      type: 'Web App',
      icon: <Database className="w-6 h-6" />,
      featured: true,
      code: [
        { number: 1, content: 'func (s *Startup) SeekFunding(investor Investor) error {' },
        { number: 2, content: 'if !s.IsVerifiedByFayda() { return ErrBureaucracy }', indent: 1 },
        { number: 3, content: 'for s.Funding < s.BurnRate {', indent: 1 },
        { number: 4, content: 's.PitchDeck.Iterate() // Coffee levels dropping...', indent: 2 },
        { number: 5, content: '}', indent: 1 },
        { number: 6, content: 'return s.Connect(investor)', indent: 1 },
        { number: 7, content: '}' },
      ],
      website: "https://greencricledev.vercel.app/",
      github: "https://github.com/AlemayehuDabi/Green-Circle"
    },
    {
      id: 'fidel-ai',
      title: 'Fidel AI',
      description: 'A native Amharic AI chatbot delivering culturally nuanced conversational UX for Ethiopian users via React Native and Neon.',
      tags: ['TypeScript', 'LLM', 'React Native'],
      stats: [],
      type: 'Mobile App',
      icon: <Layers className="w-6 h-6" />,
      code: [
        { number: 1, content: 'const parseAmharic = (input: string) => {' },
        { number: 2, content: 'const nuance = detectCulturalNuance(input);', indent: 1 },
        { number: 3, content: 'if (nuance.isRespectful) return "Selamta accepted!";', indent: 1 },
        { number: 4, content: '// If AI gets confused, just say "Eshi..."', indent: 1 },
        { number: 5, content: 'return translateToAmharic(nuance.payload);', indent: 1 },
        { number: 6, content: '};' },
      ],
      // website: "",
      github: "https://github.com/bemnetMussa/fidel_AI"
    },
    {
      id: 'rag-startup',
      title: 'Proclamation-Rag',
      description: 'A legal-focused RAG assistant using Gemini and ChromaDB to navigate the Ethiopian Startup Proclamation framework.',
      tags: ['SvelteKit', 'Python', 'ChromaDB & Gemini'],
      stats: [],
      type: 'Web App',
      icon: <Shield className="w-6 h-6" />,
      code: [
        { number: 1, content: 'def query_proclamation(law_question):' },
        { number: 2, content: 'context = db.search("Startup Proclamation 2024")', indent: 1 },
        { number: 3, content: 'if "tax break" in law_question:', indent: 1 },
        { number: 4, content: 'return gemini.generate("Explain in plain Amharic")', indent: 2 },
        { number: 5, content: 'else: return "I am a lawyer bot, not a philosopher."', indent: 1 },
        { number: 6, content: 'pass' },
      ],
      // website: "",
      github: "https://github.com/AlemayehuDabi/rag_AI_Assistance/"
    },
    {
      id: 'addis-parking',
      title: 'Addis Parking',
      description: 'An IoT urban parking solution bridging ESP32 hardware with a NestJS backend for real-time occupancy monitoring.',
      tags: ['NestJS', 'Arduino/C++', 'IoT-ESP32'],
      stats: [],
      type: 'Web App',
      icon: <Zap className="w-6 h-6" />,
      code: [
        { number: 1, content: '@Post("sensor-data")' },
        { number: 2, content: 'handlePulse(@Body() data: SensorDto) {' },
        { number: 3, content: 'if (data.isOccupied && !data.isReserved) {', indent: 1 },
        { number: 4, content: 'return "Warning: Illegal Parking detected!";', indent: 2 },
        { number: 5, content: '}', indent: 1 },
        { number: 6, content: 'this.db.updateMap(data.spot_id, data.status);', indent: 1 },
        { number: 7, content: '}' },
      ],
      // website: "",
      github: "https://github.com/AlemayehuDabi/Addis_Parking"
    },
    {
      id: 'nira',
      title: 'NIRA',
      description: 'A multi-agent orchestration system for community incident response and emergency prioritization in municipal services.',
      tags: ['Python', 'FastAPI', 'Multi-Agent'],
      stats: [],
      type: 'Web App',
      icon: <Terminal className="w-6 h-6" />,
      code: [
        { number: 1, content: 'class IncidentOrchestrator:' },
        { number: 2, content: 'def dispatch_agents(self, report):', indent: 1 },
        { number: 3, content: 'agents = [VerifyAgent(), PrioritizeAgent()]', indent: 1 },
        { number: 4, content: 'if report.is_emergency:', indent: 1 },
        { number: 5, content: 'return agents.shout_at_volunteers(report)', indent: 2 },
        { number: 6, content: 'return agents.process_queue()', indent: 1 },
      ],
      // website: "",
      github: "https://github.com/AlemayehuDabi/NIRA-module-2-ready-tensor-"
    },
    {
      id: 'bloggy',
      title: 'Bloggy',
      description: 'A full-stack bookstore platform with SvelteKit and Better Auth, featuring content management and secure checkout.',
      tags: ['SvelteKit', 'Better-Auth', 'Prisma'],
      stats: [],
      type: 'Web App',
      icon: <BookOpen className="w-6 h-6" />,
      code: [
        { number: 1, content: 'export const load = async ({ locals }) => {' },
        { number: 2, content: 'const session = await locals.auth();', indent: 1 },
        { number: 3, content: 'if (!session) redirect(302, "/buy-a-book-first");', indent: 1 },
        { number: 4, content: 'const books = await prisma.book.findMany();', indent: 1 },
        { number: 5, content: 'return { books };', indent: 1 },
        { number: 6, content: '};' },
      ],
      // website: "",
      github: "https://github.com/AlemayehuDabi/Bloggy"
    },
  ];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function BentoGrid() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-1 lg:grid-cols-2 gap-6"
    >
      {projects.map((project, index) => (
        <motion.div
          key={project.id}
          variants={itemVariants}
          className={project.featured ? 'lg:col-span-2' : ''}
        >
          <SpotlightCard className="h-full">
            <div className="p-6 space-y-4">
              {/* Header */}
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-primary/10 text-primary">
                    {project.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{project.title}</h3>
                    <div className="flex items-center gap-2 mt-1">
                      {project.tags.slice(0, 3).map(tag => (
                        <span 
                          key={tag} 
                          className="px-2 py-0.5 text-xs rounded bg-secondary text-secondary-foreground font-mono"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Link href={project.github} target='_blank'>
                    <MagneticButton 
                      className="p-2 rounded-lg hover:bg-secondary transition-colors text-muted-foreground hover:text-foreground"
                      magneticStrength={0.3}
                    >
                      <Github className="w-4 h-4" />
                    </MagneticButton>
                  </Link>
                  {
                    project.website && (
                        <Link href={project.website} target='_blank'>
                          <MagneticButton 
                            className="p-2 rounded-lg hover:bg-secondary transition-colors text-muted-foreground hover:text-foreground"
                            magneticStrength={0.3}
                          >
                            <ExternalLink className="w-4 h-4" />
                          </MagneticButton>
                        </Link>
                    )
                  }
                  
                </div>
              </div>

              {/* Description */}
              <p className="text-muted-foreground">{project.description}</p>

              {/* type */}
              <button className='flex items-center justify-center px-4 py-2'>
                <p className=''>{project.type}</p>        
              </button>


              {/* Stats */}
              <div className="flex gap-6">
                {project.stats.map(stat => (
                  <div key={stat.label}>
                    <div className="text-2xl font-bold gradient-text">{stat.value}</div>
                    <div className="text-xs text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>


              {/* Code Preview */}
              <CodePreview
                title={`${project.id}.ts`}
                language={project.tags[0]}
                code={project.code}
              />

              {/* later this page is for photo modal */}
              {/* View Project Button */}
              {
                project.website && (
                  <Link href={project.website} target='_blank'>
                    <MagneticButton 
                      className="w-full py-3 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors flex items-center justify-center gap-2 text-sm font-medium"
                      magneticStrength={0.15}
                    >
                      Live
                      <ArrowUpRight className="w-4 h-4" />
                    </MagneticButton>
                </Link>
                )
              }
            </div>
          </SpotlightCard>
        </motion.div>
      ))}
    </motion.div>
  );
}
