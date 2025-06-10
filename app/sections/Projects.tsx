"use client";

import { useState } from "react";
import { FaGithub } from "react-icons/fa";

// Sample project data
const allProjects = [
  { id: 1, title: "Web Project 1", type: "Web App", image: "/project1.jpg" },
  {
    id: 2,
    title: "Mobile Project 1",
    type: "Mobile App",
    image: "/project2.jpg",
  },
  { id: 3, title: "Web Project 2", type: "Web App", image: "/project3.jpg" },
  {
    id: 4,
    title: "Mobile Project 2",
    type: "Mobile App",
    image: "/project4.jpg",
  },
  { id: 5, title: "Web Project 3", type: "Web App", image: "/project5.jpg" },
  {
    id: 6,
    title: "Mobile Project 3",
    type: "Mobile App",
    image: "/project6.jpg",
  },
  { id: 7, title: "Extra Project", type: "Web App", image: "/project7.jpg" }, // will be excluded if over limit
];

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const filteredProjects = allProjects.filter((project) => {
    if (filter === "All") return true;
    return project.type === filter;
  });

  const limitedProjects = filteredProjects.slice(0, filter === "All" ? 6 : 3);

  return (
    <div className="flex justify-center items-center py-10">
      <div className="flex flex-col gap-10 items-center w-full">
        <h1 className="text-4xl sm:text-5xl font-semibold tracking-wide text-[var(--gray)] mb-6 text-center">
          Proj<span className="text-[var(--primary)]">ects</span>
        </h1>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3">
          {["All", "Web App", "Mobile App"].map((label, idx) => (
            <button
              key={idx}
              onClick={() => setFilter(label)}
              className={`px-4 py-2 text-sm sm:text-base font-semibold rounded-lg shadow-md ${
                filter === label
                  ? "bg-[var(--primary)] text-white"
                  : "bg-gray-100 text-gray-800"
              } hover:bg-gray-200 hover:text-black transition`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Project Cards */}
        <div className="flex flex-wrap justify-center items-center gap-6 w-full">
          {limitedProjects.map((project, i) => (
            <div
              key={project.id}
              className="relative w-full sm:w-[80%] lg:w-[30%] h-96 group overflow-hidden rounded-lg shadow-lg"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover opacity-20 group-hover:opacity-100 transition-opacity duration-300"
              />

              {/* GitHub Button */}
              <button className="absolute bottom-3 left-3 flex items-center gap-2 text-sm bg-gray-300 dark:bg-white px-3 py-1 rounded-xl font-semibold tracking-wider shadow-md hover:scale-105 transition-transform">
                <FaGithub />
                GitHub
              </button>

              {/* Demo Button */}
              <button className="absolute bottom-3 right-3 flex items-center gap-2 text-sm bg-gray-300 dark:bg-white px-3 py-1 rounded-xl font-semibold tracking-wider shadow-md hover:scale-105 transition-transform">
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
