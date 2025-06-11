import HeroSection from "./sections/Hero";
import AboutSection from "./sections/About";
import TechStack from "./sections/TechStack";
import Projects from "./sections/Projects";
import ContactMe from "./sections/ContactMe";
import NavBar from "./component/NavBar";
import Footer from "./component/Footer";
import ScrollIndicator from "./component/ScrollerIndicator";

export default function Home() {
  return (
    <div className="container mx-auto px-5 my-4 text-gray-900">
      <div className="flex flex-col gap-60">
        {/*nav bar*/}
        <NavBar />

        {/* Hero */}
        <div className="flex justify-center items-center mt-16 md:mt-10">
          <HeroSection />
        </div>

        <ScrollIndicator />

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
