import { FaGithub } from "react-icons/fa";

export default function Projects() {
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
              className="px-4 py-2 text-sm sm:text-base font-semibold rounded-lg shadow-md bg-gray-100 text-gray-800 hover:bg-gray-200 hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 transition"
            >
              {label}
            </button>
          ))}
        </div>

        {/* Project Cards */}
        <div className="flex flex-wrap justify-center items-center gap-6 w-full">
          {[1, 2, 3].map((_, i) => (
            <div
              key={i}
              className="relative w-full sm:w-[80%] lg:w-[30%] h-96 group overflow-hidden rounded-lg shadow-lg"
            >
              <img
                src={`/project${i + 1}.jpg`}
                alt={`Project ${i + 1}`}
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
                  Project Title: {i + 1}
                </h3>
                <p className="text-sm sm:text-base text-center font-medium bg-gray-200 rounded px-2 shadow-md">
                  This is a short description of the project and what it does.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
