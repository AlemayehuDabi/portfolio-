import HeroSection from "./sections/Hero";
import AboutSection from "./sections/About";
import TechStack from "./sections/TechStack";
import Projects from "./sections/Projects";
import ContactMe from "./sections/ContactMe";
import NavBar from "./component/NavBar";
import { BsChevronDown } from "react-icons/bs";

export default function Home() {
  return (
    <div className="container mx-auto my-4 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <div className="flex flex-col gap-60">
        {/*nav bar*/}
        <NavBar />

        {/* Hero */}
        <div className="flex justify-center items-center -mt-30 ">
          <HeroSection />
        </div>

        <div className="flex justify-center mt-10 animate-bounce">
          <a href="#about" className="text-[var(--primary)]">
            <BsChevronDown size={32} />
          </a>
        </div>

        {/* about section */}

        <div id="about">
          <AboutSection />
        </div>

        {/* tech stack */}
        <div>
          <TechStack />
        </div>

        {/* project */}
        <div>
          <Projects />
        </div>

        {/* contact */}
        <div>
          <ContactMe />
        </div>
      </div>
    </div>
  );
}
