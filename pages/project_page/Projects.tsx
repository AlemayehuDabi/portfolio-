'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import { TbUniverse } from 'react-icons/tb';

type projectType = {
  id: number;
  title: string;
  type: string;
  image: string;
  link: string;
  description: string;
};

const allProjects: projectType[] = [
  {
    id: 1,
    title: 'Avia RealState App',
    type: 'Web App',
    image: '/Avia.jpg',
    link: 'https://github.com/BemnetMussa/Aiva-Project',
    description:
      'A modern real estate platform built with the MERN stack, TypeScript, and Redux Toolkit. It supports property listings, browsing, and real-time updates, showcasing full-stack skills and a responsive UI.',
  },
  {
    id: 2,
    title: 'Kuriftu Resort App',
    type: 'Mobile App',
    image: '/kurftu.jpg',
    link: 'https://github.com/BemnetMussa/Kuriftu-Resort-App',
    description:
      'A mobile app built with React Native, TypeScript, and Supabase for managing resort events, services, and payments, including QR-based verification and Chapa integration.',
  },
  {
    id: 3,
    title: 'Kimeme Recipe App',
    type: 'Web App',
    image: '/kimeme.png',
    link: 'https://github.com/AlemayehuDabi/Kimeme-recipe-app',
    description:
      'A recipe discovery platform using the MERN stack and Redux Toolkit. Users can explore, save, and share recipes through a clean and responsive UI.',
  },
  {
    id: 4,
    title: 'Korean Movie App',
    type: 'Mobile App',
    image: '/movie.jpg',
    link: 'https://github.com/AlemayehuDabi',
    description:
      'A stylish React Native mobile app to browse Korean movies with filters and categories using TMDB API, built with Expo and NativeWind.',
  },
  // {
  //   id: 5,
  //   title: "",
  //   type: "Web App",
  //   image: "/project5.jpg",
  //   description: "",
  // },
  {
    id: 6,
    title: 'Fidel AI',
    type: 'Mobile App',
    image: '/fidel.png',
    link: 'https://github.com/BemnetMussa/Fidel_AI',
    description:
      'An Amharic AI chatbot app built with React Native, Expo, TypeScript, Prisma, and Neon. It offers conversational features with native UX for Ethiopian users.',
  },
];

export default function Projects() {
  const [filter, setFilter] = useState('All');

  const filteredProjects = allProjects.filter((project) => {
    if (filter === 'All') return true;
    return project.type === filter;
  });

  const limitedProjects: projectType[] = filteredProjects.slice(
    0,
    filter === 'All' ? 6 : 3
  );

  return (
    <div className="flex mx-4 lg:mx-0 justify-center items-center py-10 mt-20 mb-20">
      <div className="flex flex-col gap-10 items-center w-full">
        <h1 className="text-4xl sm:text-5xl font-semibold tracking-wide text-[var(--gray)] mb-6 text-center">
          Proj<span className="text-[var(--primary)]">ects</span>
        </h1>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3">
          {['All', 'Web App', 'Mobile App'].map((label, idx) => (
            <button
              key={idx}
              onClick={() => setFilter(label)}
              className={`px-4 py-2 text-sm sm:text-base font-semibold rounded-lg shadow-md ${
                filter === label
                  ? 'bg-[var(--primary)] text-white'
                  : 'bg-gray-100 text-gray-800'
              } hover:bg-gray-200 hover:text-black transition`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl w-full">
          {limitedProjects.map((project) => (
            <div
              key={project.id}
              className="relative h-[30rem] group overflow-hidden rounded-lg border border-gray-400 shadow-xs shadow-white"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={500}
                height={300}
                priority
                className="w-full h-full object-contain opacity-20 group-hover:opacity-100 transition-opacity duration-300 "
                style={{ width: '100%', height: '100%' }}
              />

              {/* GitHub Button */}
              <Link href={project.link} target="_blank">
                <button className="absolute bottom-3 left-3 flex items-center gap-2 text-sm   px-3 py-1 rounded-xl font-semibold tracking-wider shadow-md hover:scale-105 transition-transform">
                  <FaGithub />
                  GitHub
                </button>
              </Link>

              {/* Demo Button */}
              <button className="absolute bottom-3 right-3 flex items-center gap-2 text-sm  px-3 py-1 rounded-xl font-semibold tracking-wider shadow-md hover:scale-105 transition-transform">
                <TbUniverse />
                Demo
              </button>

              {/* Hover Overlay */}
              <div className="absolute inset-0 flex flex-col justify-evenly items-center px-4 transition-all duration-900 ease-in-out transform group-hover:translate-x-full">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-blue-500 mb-2  rounded px-2">
                  {project.title}
                </h3>
                <p className="text-base sm:text-lg text-center font-medium  rounded px-2 ">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
