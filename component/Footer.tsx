'use client';
import { useEffect, useRef, useState } from 'react';
import { BiLogoGithub, BiLogoLinkedin, BiEnvelope } from 'react-icons/bi';

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const [shouldFixFooter, setShouldFixFooter] = useState(false);

  useEffect(() => {
    const checkContentHeight = () => {
      const pageHeight = document.body.scrollHeight;
      const viewportHeight = window.innerHeight;

      setShouldFixFooter(pageHeight <= viewportHeight);
    };

    // Run once on mount
    checkContentHeight();

    // Re-run on resize in case layout changes
    window.addEventListener('resize', checkContentHeight);

    return () => window.removeEventListener('resize', checkContentHeight);
  }, []);

  return (
    <footer
      ref={footerRef}
      className={` ${
        shouldFixFooter ? 'fixed bottom-0 inset-x-0' : ''
      }  mt-10 px-4 sm:px-6 py-8 bg-white dark:bg-black text-[var(--gray)] dark:text-white transition-colors duration-500`}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row flex-wrap justify-between items-center gap-6 text-center md:text-left">
        {/* Left side */}
        <p className="text-sm text-black dark:text-white hover:text-gray-500 transition-colors">
          &copy; {new Date().getFullYear()} Your Name. All rights reserved.
        </p>

        {/* Right side - Socials */}
        <div className="flex gap-4 text-xl justify-center">
          <a
            href="https://github.com/your-username"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-black dark:text-white hover:text-[var(--primary)] transition-colors"
          >
            <BiLogoGithub />
          </a>
          <a
            href="https://linkedin.com/in/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-black dark:text-white hover:text-[var(--primary)] transition-colors"
          >
            <BiLogoLinkedin />
          </a>
          <a
            href="mailto:your@email.com"
            aria-label="Email"
            className="text-black dark:text-white hover:text-[var(--primary)] transition-colors"
          >
            <BiEnvelope />
          </a>
        </div>
      </div>
    </footer>
  );
}
