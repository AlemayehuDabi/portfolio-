'use client';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { BiLogoGithub, BiLogoLinkedin, BiEnvelope } from 'react-icons/bi';

export default function Footer() {
  return (
    <footer className="mt-10 px-4 sm:px-6 py-8 text-[var(--gray)] transition-colors duration-500">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row flex-wrap justify-between items-center gap-6 text-center md:text-left">
        {/* Left side */}
        <p className="text-sm hover:text-gray-500 transition-colors">
          &copy; {new Date().getFullYear()} Alemayehu Dabi. All rights reserved.
        </p>

        {/* Right side - Socials */}
        <div className="flex gap-4 text-xl justify-center">
          <Link
            href="https://github.com/AlemayehuDabi"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="  hover:text-[var(--primary)] transition-colors"
          >
            <BiLogoGithub />
          </Link>
          <Link
            href="https://linkedin.com/in/alemayehu-dabi-79b5212a1"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="  hover:text-[var(--primary)] transition-colors"
          >
            <BiLogoLinkedin />
          </Link>
          <a
            href="mailto:alemayehudabi606@gmail.com?subject=Hello&body=I'm%20interested%20in%20your%20portfolio"
            aria-label="Email"
            className="  hover:text-[var(--primary)] transition-colors"
          >
            <BiEnvelope />
          </a>
        </div>
      </div>
    </footer>
  );
}
