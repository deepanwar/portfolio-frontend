import RevealAnimation from "@/components/common/reveal-animation";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const projects: TProject[] = [
  {
    title: "Project 1",
    link: "https://reafactorq.com",
    logo: "https://cdn.prod.website-files.com/6501ddaa88c3e8498eab1f18/6501ddaa88c3e8498eab2082_crm-platform-logo-icon-simplefolio-x-webflow-template.svg",
    category: "E-commerce",
    imageUrl:
      "https://cdn.prod.website-files.com/6501ddaa88c3e8498eab1f18/6501ddaa88c3e8498eab2091_crm-platform-analyst-simplefolio-x-webflow-template.png",
  },
  {
    title: "Project 1",
    link: "https://reafactorq.com",
    logo: "https://cdn.prod.website-files.com/6501ddaa88c3e8498eab1f18/6501ddaa88c3e8498eab2082_crm-platform-logo-icon-simplefolio-x-webflow-template.svg",
    category: "E-commerce",
    imageUrl:
      "https://cdn.prod.website-files.com/6501ddaa88c3e8498eab1f18/6501ddaa88c3e8498eab2091_crm-platform-analyst-simplefolio-x-webflow-template.png",
  },
  {
    title: "Project 1",
    link: "https://reafactorq.com",
    logo: "https://cdn.prod.website-files.com/6501ddaa88c3e8498eab1f18/6501ddaa88c3e8498eab2082_crm-platform-logo-icon-simplefolio-x-webflow-template.svg",
    category: "E-commerce",
    imageUrl:
      "https://cdn.prod.website-files.com/6501ddaa88c3e8498eab1f18/6501ddaa88c3e8498eab2091_crm-platform-analyst-simplefolio-x-webflow-template.png",
  },
];

type TProject = {
  title: string;
  link: string;
  logo: string;
  category: string;
  imageUrl: string;
};

const Projects = () => {
  return (
    <section className="container mx-auto px-6 py-3.5 space-y-7">
      <RevealAnimation width="100%">
        <MainProject project={projects[0]} />
      </RevealAnimation>
      <RevealAnimation>
        <div className="grid grid-cols-3 gap-x-7">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </RevealAnimation>
    </section>
  );
};

const MainProject = ({ project }: { project: TProject }) => {
  return (
    <div className="grid grid-cols-[2.1fr_1fr] gap-7 group">
      <div className="bg-foreground rounded-3xl flex items-center justify-center group-hover:opacity-90 transition-opacity">
        <img
          src="https://cdn.prod.website-files.com/6501ddaa88c3e8498eab1f18/6501ddaa88c3e8498eab2069_mobile-app-banking-thumbnail-simplefolio-x-webflow-template-p-500.png"
          alt=""
          className="max-w-[392px]"
        />
      </div>
      <Card className="pt-5 pl-8 pr-5 pb-8 w-full rounded-3xl overflow-hidden hover:bg-card-hover transition-colors border-none">
        <div className="flex flex-col justify-between">
          <div className="flex justify-end items-center">
            <motion.div
              whileHover={{ translateX: 3, translateY: -3 }}
              className="bg-background rounded-xl p-1.5 shadow"
            >
              <Link to="/contact">
                <ArrowUpRight size={28} />
              </Link>
            </motion.div>
          </div>
          <div className="flex flex-col space-y-3">
            <img
              src={project.logo}
              alt="RefactorQ"
              className="h-12 w-12 rounded-lg"
            />
            <h3 className="heading-4">{project.title}</h3>
            <p className="text-sm text-muted-foreground font-medium">
              {project.category}
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
};

const ProjectCard = ({ project }: { project: TProject }) => {
  return (
    <Card className="pt-7 pl-7 w-full rounded-3xl overflow-hidden hover:bg-card-hover transition-colors border-none">
      <div className=" mr-7 mb-7 space-y-2">
        <div className="flex justify-between items-center">
          <img
            src={project.logo}
            alt="RefactorQ"
            className="h-12 w-12 rounded-lg"
          />
          <motion.div
            whileHover={{ translateX: 3, translateY: -3 }}
            className="bg-background rounded-xl p-1.5 shadow"
          >
            <Link to="/contact">
              <ArrowUpRight size={28} />
            </Link>
          </motion.div>
        </div>

        <h3 className="heading-4">{project.title}</h3>
        <p className="text-sm text-muted-foreground font-medium">
          {project.category}
        </p>
      </div>
      <div className="overflow-hidden">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="rounded-ss-lg"
        />
      </div>
    </Card>
  );
};

export default Projects;
