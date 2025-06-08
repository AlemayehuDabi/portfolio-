import Image from "next/image";
import { BsLinkedin, BsTwitterX } from "react-icons/bs";
import {
  SiCss3,
  SiExpress,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiMongoose,
  SiNativescript,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiReactbootstrap,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
  SiVsco,
} from "react-icons/si";
import HeroSection from "./component/Hero";

export default function Home() {
  return (
    <div className="container mx-auto my-4">
      <div className="flex flex-col gap-30">
        {/*nav bar*/}
        <nav className="flex justify-end">
          <div className="flex items-center gap-5 text-lg tracking-widest text-[var(--gray)] font-semibold">
            <div className="hover:text-[var(--gray-hover)] cursor-pointer hover:border-b-4 hover:border-b-[var(--primary)]">
              Home
            </div>
            <div className="hover:text-[var(--gray-hover)] cursor-pointer hover:border-b-4 hover:border-b-[var(--primary)]">
              About
            </div>
            <div className="hover:text-[var(--gray-hover)] cursor-pointer hover:border-b-4 hover:border-b-[var(--primary)]">
              Tech Stack
            </div>
            <div className="hover:text-[var(--gray-hover)] cursor-pointer hover:border-b-4 hover:border-b-[var(--primary)]">
              Portfolio
            </div>
            <button className="px-4 py-2 rounded bg-[var(--primary)] text-white ml-5 cursor-pointer">
              Contact
            </button>
          </div>
        </nav>

        {/* Hero */}
        <div className="flex justify-center items-center">
          <HeroSection />
        </div>

        {/* about section */}

        <div>
          <div className=" flex items-center justify-center">
            <div className="flex gap-20 justify-between items-center w-3/4">
              <div className="border-8 border-amber-600 h-96 relative flex-1 rounded-xl">
                <div className="bg-white rounded-lg h-full  absolute left-5 bottom-5 w-full">
                  <img
                    src="/img.jpg"
                    alt="Next.js logo"
                    className="h-full w-full rounded-lg"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-5 flex-2">
                <h1 className="text-5xl font-semibold tracking-wide text-[var(--gray)]">
                  About <span className="text-[var(--primary)]">Me.</span>
                </h1>
                <p className="w-full text-wrap text-xl text-gray-400 tracking-wider">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Illum, optio doloremque tenetur, saepe eligendi debitis
                  placeat soluta vero eveniet, natus in nulla necessitatibus
                  dolorem ullam excepturi magni quo repudiandae ad.
                </p>
                <button className="px-4 py-2 rounded text-gray-300 hover:text-gray-500 font-semibold  w-1/3 text-xl border border-gray-200 cursor-pointer hover:border-blue-400 active:border-blue-600">
                  Contact Me
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* tech stack */}
        <div className="flex flex-col justify-center items-center gap-20 overflow-hidden">
          <h1 className="text-5xl font-semibold tracking-wide text-[var(--gray)]">
            Tech <span className="text-[var(--primary)]">Stack</span>
          </h1>

          {/* Outer container to clip overflow */}
          <div className="overflow-hidden whitespace-nowrap">
            <div className="flex animate-marquee w-max">
              {/* Duplicate content to create the loop */}
              {[...Array(1)].map((_, i) => (
                <div key={i} className="flex gap-10 px-10">
                  <span className="flex flex-col justify-center items-center gap-2">
                    <SiHtml5 size={50} color="#E44D26" />
                    <span className="text-center text-gray-400 font-bold tracking-wider">
                      HTML
                    </span>
                  </span>
                  <span className="flex flex-col justify-center items-center gap-2">
                    <SiCss3 size={50} color="#264DE4" />
                    <span className="text-center text-gray-400 font-bold tracking-wider">
                      CSS
                    </span>
                  </span>
                  <span className="flex flex-col justify-center items-center gap-2">
                    <SiTailwindcss size={50} color="#38BDF8" />
                    <span className="text-center text-gray-400 font-bold tracking-wider">
                      TAILWIND
                    </span>
                  </span>
                  <span className="flex flex-col justify-center items-center gap-2">
                    <SiReactbootstrap size={50} color="#563D7C" />
                    <span className="text-center text-gray-400 font-bold tracking-wider">
                      BOOTSTRAP
                    </span>
                  </span>
                  <span className="flex flex-col justify-center items-center gap-2">
                    <SiJavascript size={50} color="#F7DF1E" />
                    <span className="text-center text-gray-400 font-bold tracking-wider">
                      JS
                    </span>
                  </span>
                  <span className="flex flex-col justify-center items-center gap-2">
                    <SiTypescript size={50} color="#3178C6" />
                    <span className="text-center text-gray-400 font-bold tracking-wider">
                      TYPESCRIPT
                    </span>
                  </span>
                  <span className="flex flex-col justify-center items-center gap-2">
                    <SiReact size={50} color="#61DAFB" />
                    <span className="text-center text-gray-400 font-bold tracking-wider">
                      REACT
                    </span>
                  </span>
                  <span className="flex flex-col justify-center items-center gap-2">
                    <SiNextdotjs size={50} color="#000000" />
                    <span className="text-center text-gray-400 font-bold tracking-wider">
                      NEXT
                    </span>
                  </span>
                  <span className="flex flex-col justify-center items-center gap-2">
                    <SiExpress size={50} color="#000000" />
                    <span className="text-center text-gray-400 font-bold tracking-wider">
                      EXPRESS
                    </span>
                  </span>
                  <span className="flex flex-col justify-center items-center gap-2">
                    <SiNodedotjs size={50} color="#339933" />
                    <span className="text-center text-gray-400 font-bold tracking-wider">
                      NODE JS
                    </span>
                  </span>
                  <span className="flex flex-col justify-center items-center gap-2">
                    <SiSupabase size={50} color="#3ECF8E" />
                    <span className="text-center text-gray-400 font-bold tracking-wider">
                      SUPABASS
                    </span>
                  </span>
                  <span className="flex flex-col justify-center items-center gap-2">
                    <SiMongoose size={50} color="#800000" />
                    <span className="text-center text-gray-400 font-bold tracking-wider">
                      MONGOOSE
                    </span>
                  </span>
                  <span className="flex flex-col justify-center items-center gap-2">
                    <SiGit size={50} color="#F05032" />
                    <span className="text-center text-gray-400 font-bold tracking-wider">
                      GIT
                    </span>
                  </span>
                  <span className="flex flex-col justify-center items-center gap-2">
                    <SiGithub size={50} color="#181717" />
                    <span className="text-center text-gray-400 font-bold tracking-wider">
                      GITHUB
                    </span>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* project */}
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
                    className="w-full h-full object-cover opacity-30 hover:opacity-100 transition-opacity duration-initial"
                  />
                  <button className="flex justify-between absolute bottom-0 left-0 bg-gray-300 px-2 py-1 rounded-xl cursor-pointer">
                    GitHub
                  </button>
                  <div className="absolute inset-0  flex flex-col justify-center items-center px-4 transition-all duration-500 ease-in-out group-hover:translate-y-full">
                    <h3 className="text-2xl font-semibold  mb-2">
                      Project Title: {i + 1}
                      {/* i will make it dynamic */}
                    </h3>
                    <p className="text-base text-center">
                      This is a short description of the project and what it
                      does.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* contact */}
        <div className="flex flex-col gap-5 justify-center items-center">
          <h1 className="text-5xl font-semibold tracking-wide text-[var(--gray)]  mb-10">
            Contact <span className="text-[var(--primary)]">Me.</span>
          </h1>
          <div className="flex flex-col md:flex-row justify-center items-start gap-10 px-6 py-12 w-full max-w-6xl mx-auto">
            {/* Left Side - Contact Info */}
            <div className="w-full md:w-1/2 space-y-6">
              <div className="text-lg space-y-4">
                <p>
                  <span className="text-gray-500 font-semibold">Email:</span>{" "}
                  <a
                    href="mailto:you@example.com"
                    className="text-[var(--primary)] hover:underline"
                  >
                    alemayehudabi606@gmail.com
                  </a>
                </p>
                <p>
                  <span className="text-gray-500 font-semibold">Phone:</span>{" "}
                  <a
                    href="tel:+1234567890"
                    className="text-[var(--primary)] hover:underline"
                  >
                    +25165713316
                  </a>
                </p>
                <div>
                  <div className="flex gap-4 mt-2">
                    {/* Replace # with your actual links */}
                    <a href="#" className="text-blue-500 hover:underline">
                      <BsTwitterX size={20} />
                    </a>
                    <a href="#" className="text-blue-500 hover:underline">
                      <BsLinkedin size={20} />
                    </a>
                    <a href="#" className="text-blue-500 hover:underline">
                      <SiGithub size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <form className="w-full md:w-1/2 bg-white shadow-md rounded-lg p-6 space-y-6">
              <div>
                <label className="block text-gray-700 text-base font-medium mb-2">
                  Name:
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block text-gray-700 text-base font-medium mb-2">
                  Email:
                </label>
                <input
                  type="email"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                  placeholder="Your Email"
                />
              </div>
              <div>
                <label className="block text-gray-700 text-base font-medium mb-2">
                  Message:
                </label>
                <textarea
                  // rows="4"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-blue-500 text-white font-semibold px-6 py-2 rounded-md hover:opacity-90 transition cursor-pointer"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
