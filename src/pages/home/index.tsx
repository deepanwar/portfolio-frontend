import RevealAnimation from "@/components/common/reveal-animation";
import AboutMe from "./components/about-me";
import Contact from "./components/contact";
import Hero from "./components/hero";
import Projects from "./components/projects";
import ResumeSkill from "./components/resume-skill";

const Home = () => {
  return (
    <div className="mt-20">
      <Hero />
      <RevealAnimation>
        <AboutMe />
      </RevealAnimation>
      <RevealAnimation>
        <ResumeSkill />
      </RevealAnimation>

      <Projects />
      <RevealAnimation width="100%">
        <Contact />
      </RevealAnimation>
    </div>
  );
};

export default Home;
