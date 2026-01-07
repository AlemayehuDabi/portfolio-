import { motion } from 'framer-motion';
import SpotlightCard from './SpotlightCard';
import CodePreview from './CodePreview';
import { ExternalLink, Github, ArrowUpRight, Layers, Zap, Shield, Database } from 'lucide-react';
import MagneticButton from './MagneticButton';

interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  stats: { label: string; value: string }[];
  icon: React.ReactNode;
  featured?: boolean;
  code: { number: number; content: string; indent?: number }[];
}

const projects: Project[] = [
  {
    id: 'distributed-cache',
    title: 'Distributed Cache System',
    description: 'High-performance distributed caching solution handling 1M+ requests/second with 99.99% uptime.',
    tags: ['Go', 'Redis', 'gRPC', 'Kubernetes'],
    stats: [
      { label: 'Requests/sec', value: '1M+' },
      { label: 'Latency', value: '<1ms' },
      { label: 'Uptime', value: '99.99%' },
    ],
    icon: <Database className="w-6 h-6" />,
    featured: true,
    code: [
      { number: 1, content: 'func (c *Cache) Get(key string) (interface{}, error) {' },
      { number: 2, content: 'if val, ok := c.local.Get(key); ok {', indent: 1 },
      { number: 3, content: 'return val, nil // Local hit', indent: 2 },
      { number: 4, content: '}', indent: 1 },
      { number: 5, content: 'return c.distributed.Get(ctx, key)', indent: 1 },
      { number: 6, content: '}' },
    ],
  },
  {
    id: 'real-time-collab',
    title: 'Real-time Collaboration Engine',
    description: 'WebSocket-based collaborative editing with operational transformation for conflict resolution.',
    tags: ['TypeScript', 'WebSocket', 'CRDT', 'React'],
    stats: [
      { label: 'Concurrent Users', value: '10K+' },
      { label: 'Sync Latency', value: '<50ms' },
    ],
    icon: <Layers className="w-6 h-6" />,
    code: [
      { number: 1, content: 'const transform = (op1: Op, op2: Op): Op[] => {' },
      { number: 2, content: 'if (op1.type === "insert" && op2.type === "insert") {', indent: 1 },
      { number: 3, content: 'return resolveInsertConflict(op1, op2);', indent: 2 },
      { number: 4, content: '}', indent: 1 },
      { number: 5, content: 'return [op1, op2];', indent: 1 },
      { number: 6, content: '};' },
    ],
  },
  {
    id: 'ml-pipeline',
    title: 'ML Feature Pipeline',
    description: 'Automated machine learning feature engineering pipeline processing petabytes of data daily.',
    tags: ['Python', 'Spark', 'Airflow', 'AWS'],
    stats: [
      { label: 'Daily Data', value: '5PB' },
      { label: 'Features', value: '500+' },
    ],
    icon: <Zap className="w-6 h-6" />,
    code: [
      { number: 1, content: 'class FeaturePipeline(Pipeline):' },
      { number: 2, content: 'def transform(self, df: DataFrame) -> DataFrame:', indent: 1 },
      { number: 3, content: 'return (df', indent: 2 },
      { number: 4, content: '.withColumn("features", self.extract(df))', indent: 3 },
      { number: 5, content: '.filter(col("valid") == True))', indent: 3 },
    ],
  },
  {
    id: 'auth-service',
    title: 'Zero-Trust Auth Service',
    description: 'Enterprise-grade authentication service with mTLS, RBAC, and audit logging.',
    tags: ['Rust', 'mTLS', 'OAuth2', 'PostgreSQL'],
    stats: [
      { label: 'Auth Requests', value: '100K/s' },
      { label: 'Token Validation', value: '<5ms' },
    ],
    icon: <Shield className="w-6 h-6" />,
    code: [
      { number: 1, content: 'impl AuthService for Service {' },
      { number: 2, content: 'async fn validate(&self, token: &str) -> Result<Claims> {', indent: 1 },
      { number: 3, content: 'let claims = self.jwt.decode(token)?;', indent: 2 },
      { number: 4, content: 'self.verify_permissions(&claims).await', indent: 2 },
      { number: 5, content: '}', indent: 1 },
      { number: 6, content: '}' },
    ],
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
                  <MagneticButton 
                    className="p-2 rounded-lg hover:bg-secondary transition-colors text-muted-foreground hover:text-foreground"
                    magneticStrength={0.3}
                  >
                    <Github className="w-4 h-4" />
                  </MagneticButton>
                  <MagneticButton 
                    className="p-2 rounded-lg hover:bg-secondary transition-colors text-muted-foreground hover:text-foreground"
                    magneticStrength={0.3}
                  >
                    <ExternalLink className="w-4 h-4" />
                  </MagneticButton>
                </div>
              </div>

              {/* Description */}
              <p className="text-muted-foreground">{project.description}</p>

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

              {/* View Project Button */}
              <MagneticButton 
                className="w-full py-3 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors flex items-center justify-center gap-2 text-sm font-medium"
                magneticStrength={0.15}
              >
                View Full Case Study
                <ArrowUpRight className="w-4 h-4" />
              </MagneticButton>
            </div>
          </SpotlightCard>
        </motion.div>
      ))}
    </motion.div>
  );
}
