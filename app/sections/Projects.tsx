import { FaGithub } from "react-icons/fa";

export default function Projects() {
  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col gap-10 items-center">
        <h1 className="text-5xl font-semibold tracking-wide text-[var(--gray)]  mb-10">
          Proj<span className="text-[var(--primary)]">ects</span>
        </h1>

        <div className="flex gap-4">
          {["All", "Web App", "Mobile App"].map((label, idx) => (
            <button
              key={idx}
              className="px-4 py-2 text-lg font-semibold rounded-lg shadow-md bg-gray-100 text-gray-800 hover:bg-gray-200 hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 transition"
            >
              {label}
            </button>
          ))}
        </div>

        <div className="flex justify-center items-center gap-5 w-full">
          {[1, 2, 3].map((_, i) => (
            <div
              key={i}
              className="relative w-1/2 h-96 group overflow-hidden rounded-lg shadow-lg"
            >
              <img
                src={`/project${i + 1}.jpg`}
                alt={`Project ${i + 1}`}
                className="w-full h-full object-cover opacity-20 hover:opacity-100 transition-opacity duration-initial"
              />
              <button className="flex justify-between items-center gap-3 text-base absolute bottom-0 left-0 bg-gray-300 dark:bg-white px-2 py-1 rounded-xl cursor-pointer font-semibold tracking-wider">
                <FaGithub />
                GitHub
              </button>

              <button className="flex justify-between items-center gap-3 text-base absolute bottom-0 right-0 bg-gray-300 dark:bg-white px-2 py-1 rounded-xl cursor-pointer font-semibold tracking-wider">
                Demo
              </button>
              <div className="absolute inset-0 flex flex-col justify-center items-center px-4 transition-all duration-500 ease-in-out group-hover:translate-y-full">
                <h3 className="text-3xl font-extrabold text-blue-500 mb-2 bg-gray-200 rounded-xs px-1">
                  Project Title: {i + 1}
                  {/* i will make it dynamic */}
                </h3>
                <p className="text-base text-center font-semibold bg-gray-200 rounded-xs px-1 shadow-md shadow-white">
                  This is a short description of the project and what it does.
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae
                  beatae quibusdam iure sequi sunt molestiae alias! Ipsum est
                  eos at, voluptate nostrum recusandae autem facere ipsa nemo
                  cumque maiores ex?
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
