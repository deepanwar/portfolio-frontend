import HeroSection from "./components/hero-section";
import MyStoryEducation from "./components/my-story-education";
import MyResume from "./components/my-resume";
import MySkills from "./components/my-skills";
import Contact from "./components/contact";

const About = () => {
  return (
    <div className="mt-20">
      <HeroSection />
      <MyStoryEducation />
      <MyResume />
      <MySkills />
      <Contact />
    </div>
  );
};

export default About;
