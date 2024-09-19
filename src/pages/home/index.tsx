import AboutMe from "./components/about-me";
import Contact from "./components/contact";
import Hero from "./components/hero";
import Projects from "./components/projects";
import ResumeSkill from "./components/resume-skill";

const Home = () => {
  return (
    <div className="mt-20">
      <Hero />
      <AboutMe />
      <ResumeSkill />
      <Projects />
      <Contact />
    </div>
  );
};

export default Home;
