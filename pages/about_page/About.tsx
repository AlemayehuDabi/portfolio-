'use client'

// import Image from 'next/image';
// import Link from 'next/link';

// export default function AboutSection() {
//   return (
//     <section className="w-full px-4 py-10 flex items-center justify-center mt-20 mb-20">
//       <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 items-center max-w-md lg:max-w-5xl w-full">
//         {/* Left - Image Container */}
//         <div className="relative w-full h-96 border-8 border-amber-600 rounded-xl lg:flex-1">
//           <div className="bg-white rounded-lg h-full w-full absolute left-4 bottom-4 overflow-hidden">
//             <Image
//               src="/img.jpg"
//               alt="Profile"
//               width={500}
//               height={500}
//               priority
//               className="object-cover h-full w-full rounded-lg"
//               style={{ width: '100%', height: '100%' }}
//             />
//           </div>
//         </div>

//         {/* Right - Content */}
//         <div className=" flex flex-col gap-6 text-center lg:text-left lg:flex-2">
//           <h1 className="text-4xl sm:text-5xl font-semibold tracking-wide text-[var(--gray)]">
//             About <span className="text-[var(--primary)]">Me.</span>
//           </h1>
//           <p className="text-base sm:text-lg text-gray-400 tracking-wide">
//             I&#39;m a passionate Web and Mobile Developer with a focus on
//             building responsive, user-friendly applications. I specialize in
//             modern JavaScript frameworks like React, React Native, and Next.js,
//             and love turning ideas into interactive digital experiences. With a
//             strong foundation in full-stack development, I enjoy creating
//             seamless solutions across platforms. I&#39;m always eager to learn,
//             collaborate, and bring value through clean, scalable code.
//           </p>
//           <div className="flex justify-center lg:justify-start">
//             <Link href="/contact-me">
//               <button className="px-6 py-3 text-white bg-blue-600 hover:bg-blue-700 transition rounded-lg text-lg font-semibold">
//                 Contact Me
//               </button>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import { motion } from 'framer-motion';
import { User, MapPin, Calendar, Award, Code2, Coffee, Zap } from 'lucide-react';
import SpotlightCard from '../../component/SpotlightCard';

const skills = [
  { category: 'Languages', items: ['TypeScript', 'Python'] },
  { category: 'Frontend', items: ['React', 'Next.js', 'sveltekit', 'Tailwind', 'Framer Motion'] },
  { category: 'Backend', items: ['Nest.js', 'Express',  'Mongoose', 'Prisma', 'Rest'] },
  {category: 'DB', items: ['Mongodb', 'PostgreSQL']}
  // { category: 'Cloud', items: ['AWS', 'Kubernetes', 'Terraform', 'Docker'] },
];

const stats = [
  // { icon: <Code2 className="w-5 h-5" />, value: '50K+', label: 'Lines of Code' },
  { icon: <Calendar className="w-5 h-5" />, value: '2+', label: 'Years Experience' },
  { icon: <Award className="w-5 h-5" />, value: '5', label: 'Projects Shipped' },
  { icon: <Coffee className="w-5 h-5" />, value: '∞', label: 'Coffee Consumed' },
];

export default function AboutSection() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="space-y-8 py-30 px-8"
    >
      <div className="flex items-center gap-3 mb-6">
        <User className="w-6 h-6 text-primary" />
        <h2 className="text-2xl font-bold">About Me</h2>
      </div>

      {/* Bio Card */}
      <SpotlightCard>
        <div className="p-6 space-y-4">
          <div className="flex items-start gap-4">
            <motion.div 
              className="w-20 h-20 rounded-xl bg-gradient-to-br from-primary/20 to-violet-glow/20 flex items-center justify-center"
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <span className="text-4xl">👨‍💻</span>
            </motion.div>
            <div className="flex-1">
              <h3 className="text-xl font-bold gradient-text">Software Engineer</h3>
              <p className="text-muted-foreground flex items-center gap-2 mt-1">
                <MapPin className="w-4 h-4" />
                Addis Ababa, ET 
              </p>
            </div>
          </div>

          <p className="text-muted-foreground leading-relaxed">
            I&#39;m a passionate engineer who believes that great software is built at the intersection of
            Im a passionate 
            <span className="text-foreground font-medium"> performance</span>, 
            <span className="text-foreground font-medium"> simplicity</span>, and 
            <span className="text-foreground font-medium"> user delight</span>. 
            With 2+ years of experience building Web and Mobile applications with a focus on building responsive, user-friendly applications.
          </p>

          <p className="text-muted-foreground leading-relaxed">
          Currently, I'm diving deep into AI/ML to build the next generation of intelligent, cloud-powered apps that scale for millions of users
          </p>
        </div>
      </SpotlightCard>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <SpotlightCard>
              <div className="p-4 text-center">
                <div className="inline-flex items-center justify-center p-2 rounded-lg bg-primary/10 text-primary mb-3">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold gradient-text">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            </SpotlightCard>
          </motion.div>
        ))}
      </div>

      {/* Skills Grid */}
      <SpotlightCard>
        <div className="p-6">
          <div className="flex items-center gap-2 mb-4">
            <Zap className="w-5 h-5 text-primary" />
            <h3 className="font-semibold text-lg">Technical Stack</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.category}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <h4 className="text-sm font-medium text-primary mb-2">{skill.category}</h4>
                <ul className="space-y-1">
                  {skill.items.map(item => (
                    <li key={item} className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-default">
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </SpotlightCard>
    </motion.section>
  );
}
