'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

export default function HeroSection() {
  const roles = [
    'Web Developer',
    'Mobile Developer',
    'Programmer',
    'Problem Solver',
    'Code Enthusiast',
  ];
  const [currentRole, setCurrentRole] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter effect
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
    <section className="w-full px-6 mt-30 mb-48 md:mb-20 md:mt-20 sm:px-10 md:py-16 flex flex-col lg:flex-row items-center justify-center gap-10 max-w-7xl mx-auto">
      {/* Left: Text Area */}
      <div className="text-center lg:text-left md:flex-1 xl:flex-2">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-200 mb-4 leading-tight">
          Hi, I&apos;m <span className="text-blue-400">Alemayehu Dabi</span>
        </h1>
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-300 mb-6">
          I&apos;m a{' '}
          <span className="text-[var(--primary)] typewriter">
            {currentRole}
          </span>
          <span className="blinking-cursor">|</span>
        </h2>

        <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-xl mx-auto lg:mx-0 mb-8 hidden md:inline-block">
          Passionate about crafting clean, efficient, and scalable code.
          Specializing in modern web technologies to build impactful solutions.
        </p>

        {/* Buttons */}
        <div className="hidden lg:flex flex-wrap justify-center lg:justify-start gap-6">
          <Link
            href="/projects"
            className="bg-blue-500 text-white font-semibold px-6 py-3 rounded-lg shadow hover:bg-blue-600 transition"
          >
            Projects
          </Link>
          <Link
            href="#resume"
            className="border bg-white text-black dark:text-black font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition"
          >
            Resume
          </Link>
        </div>
      </div>

      {/* Right: Image + Socials */}
      <div className="relative w-full  max-w-sm sm:max-w-md  lg:max-w-md xl:max-w-lg flex-1">
        <div className="w-full h-96 rounded-lg overflow-hidden border border-amber-600 shadow-lg ">
          <Image
            src="/img.jpg"
            alt="Profile"
            width={500}
            height={500}
            className="w-full h-full object-cover"
            style={{ width: '100%', height: '100%' }}
          />
        </div>

        {/* Social Icons */}
        <div className="absolute -bottom-6 left-0 right-0 px-4">
          <div className="flex justify-center gap-6 bg-white bg-opacity-90 px-4 py-2 rounded-md shadow border backdrop-blur-sm">
            <a
              href="#"
              aria-label="Twitter"
              className="hover:scale-110 transition-transform"
            >
              <FaTwitter size={24} className="text-sky-500" />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="hover:scale-110 transition-transform"
            >
              <FaInstagram size={24} className="text-pink-500" />
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="hover:scale-110 transition-transform"
            >
              <FaLinkedin size={24} className="text-blue-700" />
            </a>
            <a
              href="#"
              aria-label="GitHub"
              className="hover:scale-110 transition-transform"
            >
              <FaGithub size={24} className="text-black" />
            </a>
          </div>
        </div>
      </div>

      {/* button for small screen */}
      <div className="flex flex-wrap justify-center lg:hidden gap-6 mt-10">
        <Link
          href="/projects"
          className="bg-blue-500 text-white font-semibold px-6 py-3 rounded-lg shadow hover:bg-blue-600 transition"
        >
          Projects
        </Link>
        <Link
          href="#resume"
          className="border bg-white text-black dark:text-black font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition"
        >
          Resume
        </Link>
      </div>
    </section>
  );
}
