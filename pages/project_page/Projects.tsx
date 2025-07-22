'use client';

import Image from 'next/image';
import { useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import { TbUniverse } from 'react-icons/tb';

// Sample project data
const allProjects = [
  {
    id: 1,
    title: 'Avia RealState App',
    type: 'Web App',
    image: '/Avia.jpg',
    description: '',
  },
  {
    id: 2,
    title: 'Kuriftu Resort App',
    type: 'Mobile App',
    image: '/kurftu.jpg',
    description: '',
  },
  {
    id: 3,
    title: 'Kimeme Recipe App',
    type: 'Web App',
    image: '/kimeme.png',
    description: '',
  },
  {
    id: 4,
    title: 'Korean Movie App',
    type: 'Mobile App',
    image: '/movie.jpg',
    description: '',
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
    title: 'Fedel Ai',
    type: 'Mobile App',
    image: '/fedel.png',
    description: '',
  },
];

export default function Projects() {
  const [filter, setFilter] = useState('All');

  const filteredProjects = allProjects.filter((project) => {
    if (filter === 'All') return true;
    return project.type === filter;
  });

  const limitedProjects = filteredProjects.slice(0, filter === 'All' ? 6 : 3);

  return (
    <div className="flex justify-center items-center py-10 mt-20 mb-20">
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
        <div className="flex flex-wrap justify-center items-center gap-6 w-full">
          {limitedProjects.map((project) => (
            <div
              key={project.id}
              className="relative w-full sm:w-[80%] lg:w-[30%] h-96 group overflow-hidden rounded-lg shadow-lg"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={500}
                height={300}
                className="w-full h-full object-contain opacity-20 group-hover:opacity-100 transition-opacity duration-300"
                style={{ width: '100%', height: '100%' }}
              />

              {/* GitHub Button */}
              <button className="absolute bottom-3 left-3 flex items-center gap-2 text-sm bg-gray-300 dark:bg-white px-3 py-1 rounded-xl font-semibold tracking-wider shadow-md hover:scale-105 transition-transform">
                <FaGithub />
                GitHub
              </button>

              {/* Demo Button */}
              <button className="absolute bottom-3 right-3 flex items-center gap-2 text-sm bg-gray-300 dark:bg-white px-3 py-1 rounded-xl font-semibold tracking-wider shadow-md hover:scale-105 transition-transform">
                <TbUniverse />
                Demo
              </button>

              {/* Hover Overlay */}
              <div className="absolute inset-0 flex flex-col justify-center items-center px-4 transition-all duration-500 ease-in-out transform group-hover:translate-y-full">
                <h3 className="text-xl sm:text-2xl font-extrabold text-blue-500 mb-2 bg-gray-200 rounded px-2">
                  {project.title}
                </h3>
                <p className="text-sm sm:text-base text-center font-medium bg-gray-200 rounded px-2 shadow-md">
                  This is a short description of {project.title}. It showcases
                  modern features.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
