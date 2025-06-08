"use client";

import { useEffect, useState } from "react";

export default function HeroSection() {
  const roles = [
    "Web Developer",
    "Software Engineer",
    "Problem Solver",
    "Code Enthusiast",
  ];
  const [currentRole, setCurrentRole] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter effect logic
  useEffect(() => {
    const typeSpeed = isDeleting ? 50 : 100;
    const delayBetweenRoles = 2000;

    const type = () => {
      const currentText = roles[roleIndex];
      setCurrentRole(
        isDeleting
          ? currentText.substring(0, charIndex - 1)
          : currentText.substring(0, charIndex + 1)
      );
      setCharIndex((prev) => (isDeleting ? prev - 1 : prev + 1));

      if (!isDeleting && charIndex === currentText.length) {
        setTimeout(() => setIsDeleting(true), delayBetweenRoles);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    };

    const timer = setTimeout(type, typeSpeed);
    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, roleIndex, roles]);

  return (
    <section className="flex items-center justify-center  animate-gradient-x">
      <div className="container mx-auto px-4 text-center">
        {/* Name and Intro */}
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-300 mb-4 tracking-tight">
          Hi, I'm <span className="text-blue-400">Alemayehu Dabi</span>
        </h1>
        <h2 className="text-2xl md:text-4xl font-semibold text-gray-300 mb-6">
          I'm a{" "}
          <span className="text-[var(--primary)] typewriter">
            {currentRole}
          </span>
          <span className="blinking-cursor">|</span>
        </h2>

        {/* Description */}
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-8">
          Passionate about crafting clean, efficient, and scalable code.
          Specializing in modern web technologies to build impactful solutions.
        </p>

        {/* CTA Buttons */}
        <div className="flex justify-center gap-4">
          <a
            href="#projects"
            className="inline-block bg-blue-500 text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-blue-600 transition-colors duration-300"
          >
            View Projects
          </a>
        </div>
      </div>

      {/* Custom CSS for Animations */}
      <style jsx>{`
        /* Gradient Animation */
        @keyframes gradient-x {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 15s ease infinite;
        }

        /* Typewriter Cursor */
        .blinking-cursor {
          animation: blink 1s step-end infinite;
        }
        @keyframes blink {
          50% {
            opacity: 0;
          }
        }

        /* Typewriter Text */
        .typewriter {
          display: inline-block;
          min-width: 200px;
          text-align: left;
        }
      `}</style>
    </section>
  );
}
