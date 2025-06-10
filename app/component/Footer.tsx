import { BiLogoGithub, BiLogoLinkedin, BiEnvelope } from "react-icons/bi";

export default function Footer() {
  return (
    <footer className="mt-10 px-6 py-10 bg-white dark:bg-black text-[var(--gray)] dark:text-white transition-colors duration-500">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Left side */}
        <p className="text-sm text-black hover:text-gray-400">
          &copy; {new Date().getFullYear()} Your Name. All rights reserved.
        </p>

        {/* Center - Links */}
        <div className="flex gap-6 text-sm font-semibold tracking-wide">
          {["Home", "About", "Projects", "Contact"].map((label) => (
            <a
              key={label}
              href={`#${label}`}
              className="text-black hover:text-[var(--gray-hover)] transition-colors duration-300"
            >
              {label}
            </a>
          ))}
        </div>

        {/* Right side - Socials */}
        <div className="flex gap-4 text-xl">
          <a
            href="https://github.com/your-username"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:text-[var(--primary)] transition-colors"
          >
            <BiLogoGithub />
          </a>
          <a
            href="https://linkedin.com/in/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:text-[var(--primary)] transition-colors"
          >
            <BiLogoLinkedin />
          </a>
          <a
            href="mailto:your@email.com"
            className="text-black hover:text-[var(--primary)] transition-colors"
          >
            <BiEnvelope />
          </a>
        </div>
      </div>
    </footer>
  );
}
