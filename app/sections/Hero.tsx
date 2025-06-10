"use client";

import { useEffect, useState } from "react";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

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
    <section className="flex justify-center items-center w-full mx-auto px-10">
      <div className="flex items-center justify-center animate-gradient-x flex-3">
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
            Specializing in modern web technologies to build impactful
            solutions.
          </p>

          {/* CTA Buttons */}
          <div className="flex justify-center items-center gap-8">
            <a
              href="#Projects"
              className="inline-block bg-blue-500 text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-blue-600 transition-colors duration-300"
            >
              Projects
            </a>

            <a
              href="#resume"
              className="inline-block font-semibold px-6 py-3 rounded-lg border bg-white hover:bg-gray-100 hover:text-black dark:bg-white dark:hover:bg-gray-100 transition-colors duration-300"
            >
              Resume
            </a>
          </div>
        </div>
      </div>

      <div className="h-96 flex-1 relative">
        <div className=" h-full w-full rounded-lg border border-amber-600 overflow-hidden">
          {/* Background Image */}
          <img
            src="/img.jpg"
            alt="Profile or Banner"
            className="h-full w-full object-cover"
          />
        </div>
        {/* Social Icons Overlay */}
        <div className="absolute -bottom-5 left-20 right-20 z-10">
          <div className="flex justify-between items-center gap-4 bg-white bg-opacity-90 px-4 py-2 rounded-md shadow-md border border-gray-300 backdrop-blur-sm">
            <a
              href="#"
              aria-label="Twitter"
              className="hover:scale-110 transition-transform"
            >
              <FaTwitter size={26} className="text-sky-500" />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="hover:scale-110 transition-transform"
            >
              <FaInstagram size={26} className="text-pink-500" />
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="hover:scale-110 transition-transform"
            >
              <FaLinkedin size={26} className="text-blue-700" />
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="hover:scale-110 transition-transform"
            >
              <FaGithub size={26} className="#181717" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
