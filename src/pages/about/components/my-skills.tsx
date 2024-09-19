import LinkedinImage from "@/assets/linkedin-logo.webp";
import LinkedinProfileImage from "@/assets/linkedin-profile-mobile.jpg";
import RevealAnimation from "@/components/common/reveal-animation";
import { Card } from "@/components/ui/card";
import { skills } from "@/data/skills";
import { Linkedin } from "lucide-react";

const MySkills = () => {
  return (
    <section className="container mx-auto px-6 py-3.5">
      <RevealAnimation width="100%">
        <div className="grid grid-cols-2 gap-x-7">
          <Card className="rounded-3xl py-12 px-10 border-none">
            <h1 className="heading-2 mb-6">My Skills</h1>

            <div className="space-y-5">
              {skills.map((skill, index) => (
                <div key={index}>
                  <h3 className="text-sm font-semibold mb-2">
                    {skill.category} -
                  </h3>
                  <ul className="flex flex-wrap gap-1">
                    {skill.skills.map((skill) => (
                      <span className="text-xs text-muted-foreground whitespace-nowrap border px-2 py-1 rounded-full bg-background">
                        {skill}
                      </span>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Card>
          <SocialCard />
        </div>
      </RevealAnimation>
    </section>
  );
};

const SocialCard = () => {
  return (
    <Card className="rounded-3xl border-none overflow-hidden relative group">
      <div className="absolute top-6 right-6 bg-background rounded-2xl h-16 shadow">
        <img
          src={LinkedinImage}
          alt="linkedin-logo"
          className="h-full w-full object-cover"
        />
      </div>

      <a
        href="https://linkedin.com/in/webdev-deepak-kumar"
        target="_blank"
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-neutral-900/80 flex flex-col items-center justify-center"
      >
        <div>
          <Linkedin size={50} className="text-background" />
        </div>

        <h3 className="heading-2 !text-background text-center mt-5">
          follow me <br /> on Linkedin
        </h3>
      </a>

      <img
        src={LinkedinProfileImage}
        alt="linkedin image"
        className="h-full w-full object-cover"
      />
    </Card>
  );
};

export default MySkills;
