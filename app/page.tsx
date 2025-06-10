import HeroSection from "./sections/Hero";
import AboutSection from "./sections/About";
import TechStack from "./sections/TechStack";
import Projects from "./sections/Projects";
import ContactMe from "./sections/ContactMe";
import NavBar from "./component/NavBar";
import { BsChevronDown } from "react-icons/bs";
import Footer from "./component/Footer";

export default function Home() {
  return (
    <div className="container mx-auto px-5 my-4 text-gray-900">
      <div className="flex flex-col gap-60">
        {/*nav bar*/}
        <NavBar />

        {/* Hero */}
        <div className="flex justify-center items-center mt-30">
          <HeroSection />
        </div>

        <div className="flex justify-center animate-bounce -mt-20">
          <a href="#About" className="text-[var(--primary)]">
            <BsChevronDown size={32} />
          </a>
        </div>

        {/* about section */}

        <div id="About">
          <AboutSection />
        </div>

        {/* tech stack */}
        <div id="Tech Stack">
          <TechStack />
        </div>

        {/* project */}
        <div id="Projects">
          <Projects />
        </div>

        {/* contact */}
        <div id="Contact">
          <ContactMe />
        </div>

        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
}
