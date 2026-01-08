'use client';

// import Image from 'next/image';
// import Link from 'next/link';
// import { useState } from 'react';
// import { FaGithub } from 'react-icons/fa';
// import { TbUniverse } from 'react-icons/tb';
// import { motion } from 'framer-motion';

// type projectType = {
//   id: number;
//   title: string;
//   type: string;
//   image: string;
//   link: string;
//   description: string;
// };

// const allProjects: projectType[] = [
//   {
//     id: 1,
//     title: 'Green Cricle',
//     type: 'Web App',
//     image: '/green_cricle.png',
//     link: 'https://github.com/AlemayehuDabi/GreenCricle',
//     description:
//       'Green Circle is a verified Ethiopian startup ecosystem platform connecting startups with investors, mentors, and government support, built with Next.js, MongoDB, and Fayda OIDC.',
//   },
//   {
//     id: 2,
//     title: 'Fidel AI',
//     type: 'Mobile App',
//     image: '/fidel.png',
//     link: 'https://github.com/BemnetMussa/Fidel_AI',
//     description:
//       'An Amharic AI chatbot app built with React Native, Expo, TypeScript, Prisma, and Neon. It offers conversational features with native UX for Ethiopian users.',
//   },
//   {
//     id: 3,
//     title: 'Kuriftu Resort App',
//     type: 'Mobile App',
//     image: '/kurftu.jpg',
//     link: 'https://github.com/BemnetMussa/Kuriftu-Resort-App',
//     description:
//       'A mobile app built with React Native, TypeScript, and Supabase for managing resort events, services, and payments, including QR-based verification and Chapa integration.',
//   },
//   {
//     id: 4,
//     title: 'Kimeme Recipe App',
//     type: 'Web App',
//     image: '/kimeme.png',
//     link: 'https://github.com/AlemayehuDabi/Kimeme-recipe-app',
//     description:
//       'A recipe discovery platform using the MERN stack and Redux Toolkit. Users can explore, save, and share recipes through a clean and responsive UI.',
//   },
//   {
//     id: 5,
//     title: 'Korean Movie App',
//     type: 'Mobile App',
//     image: '/movie.jpg',
//     link: 'https://github.com/AlemayehuDabi',
//     description:
//       'A stylish React Native mobile app to browse Korean movies with filters and categories using TMDB API, built with Expo and NativeWind.',
//   },
//   {
//     id: 6,
//     title: 'Avia RealState App',
//     type: 'Web App',
//     image: '/Avia.jpg',
//     link: 'https://github.com/BemnetMussa/Aiva-Project',
//     description:
//       'A modern real estate platform built with the MERN stack, TypeScript, and Redux Toolkit. It supports property listings, browsing, and real-time updates, showcasing full-stack skills and a responsive UI.',
//   },
// ];

// export default function Projects() {
//   const [filter, setFilter] = useState('All');

//   const filteredProjects = allProjects.filter((project) => {
//     if (filter === 'All') return true;
//     return project.type === filter;
//   });

//   const limitedProjects: projectType[] = filteredProjects.slice(
//     0,
//     filter === 'All' ? 6 : 3
//   );

//   return (
//     <div className="flex flex-col items-center py-16 mt-10">
//       <h1 className="text-4xl sm:text-5xl font-bold mb-10 text-center text-gray-800 dark:text-gray-100">
//         Proj<span className="text-[var(--primary)]">ects</span>
//       </h1>

//       {/* Filter Buttons */}
//       <div className="flex flex-wrap justify-center gap-4 mb-16">
//         {['All', 'Web App', 'Mobile App'].map((label, idx) => (
//           <button
//             key={idx}
//             onClick={() => setFilter(label)}
//             className={`px-5 py-2 rounded-lg font-semibold transition-all duration-300 shadow-md ${
//               filter === label
//                 ? 'bg-[var(--primary)] text-white'
//                 : 'bg-white dark:bg-gray-100 text-gray-800 hover:bg-gray-100'
//             }`}
//           >
//             {label}
//           </button>
//         ))}
//       </div>

//       {/* Projects List */}
//       <div className="flex flex-col gap-16 w-full max-w-6xl">
//         {limitedProjects.map((project, idx) => {
//           const isEven = idx % 2 === 0;

//           return (
//             <motion.div
//               key={project.id}
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: idx * 0.1 }}
//               className={`flex flex-col mx-1 md:flex-row items-center gap-8 p-6 rounded-2xl shadow-lg bg-white dark:bg-gray-100 overflow-hidden ${
//                 !isEven ? 'md:flex-row-reverse' : ''
//               }`}
//             >
//               {/* Image */}
//               <div className="w-full md:w-1/2 h-[20rem] rounded-xl overflow-hidden">
//                 <motion.div
//                   whileHover={{ scale: 1.05 }}
//                   transition={{ duration: 0.3 }}
//                   className="w-full h-full relative"
//                 >
//                   <Image
//                     src={project.image}
//                     alt={project.title}
//                     fill
//                     className="object-contain rounded-xl dark:bg-white"
//                   />
//                 </motion.div>
//               </div>

//               {/* Text Section */}
//               <div className="w-full md:w-1/2 flex flex-col justify-between gap-6">
//                 <motion.h3
//                   initial={{ x: -20, opacity: 0 }}
//                   whileInView={{ x: 0, opacity: 1 }}
//                   transition={{ duration: 0.5 }}
//                   className="text-2xl sm:text-3xl font-extrabold text-[var(--primary)]"
//                 >
//                   {project.title}
//                 </motion.h3>
//                 <motion.p
//                   initial={{ x: -20, opacity: 0 }}
//                   whileInView={{ x: 0, opacity: 1 }}
//                   transition={{ duration: 0.5, delay: 0.1 }}
//                   className="text-gray-700 leading-relaxed text-base sm:text-lg"
//                 >
//                   {project.description}
//                 </motion.p>

//                 {/* Buttons */}
//                 <div className="flex gap-4 mt-4">
//                   <Link href={project.link} target="_blank">
//                     <motion.button
//                       whileHover={{ scale: 1.05 }}
//                       className="flex items-center gap-2 px-5 py-2 rounded-xl bg-gray-800 text-white font-semibold shadow-md"
//                     >
//                       <FaGithub />
//                       GitHub
//                     </motion.button>
//                   </Link>
//                   <motion.button
//                     whileHover={{ scale: 1.05 }}
//                     className="flex items-center gap-2 px-5 py-2 rounded-xl bg-[var(--primary)] text-white font-semibold shadow-md"
//                   >
//                     <TbUniverse />
//                     Demo
//                   </motion.button>
//                 </div>
//               </div>
//             </motion.div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import BentoGrid from '../../component/BentoGrid';

export default function ProjectsSection() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="space-y-12 px-10 pt-35 pb-10"
    >
      <div className="flex items-center gap-3 mb-6">
        <Briefcase className="w-6 h-6 text-primary" />
        <h2 className="text-2xl font-bold">Projects</h2>
      </div>

      {/* Project Grid */}
      <BentoGrid />

    </motion.section>
  );
}

