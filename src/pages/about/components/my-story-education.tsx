import RevealAnimation from "@/components/common/reveal-animation";
import { Card } from "@/components/ui/card";
import { formatDate } from "@/utils/date";
import { GraduationCap, School } from "lucide-react";

const education = [
  {
    icon: GraduationCap,
    institution: "C.C.S. University, Meerut",
    degree: "B. C. A",
    date: {
      start: "2019-01-01",
      end: "2021-01-01",
    },
  },
  {
    icon: School,
    institution: "Kendriya Vidyalaya",
    degree: "Intermediate",
    date: {
      start: "2018-01-01",
      end: "2019-01-01",
    },
  },
  {
    icon: School,
    institution: "Kendriya Vidyalaya",
    degree: "High School",
    date: {
      start: "2017-01-01",
      end: "2018-01-01",
    },
  },
];

const MyStoryEducation = () => {
  return (
    <section className="container mx-auto px-6 py-3.5">
      <RevealAnimation width="100%">
        <div className="grid grid-cols-[1fr_1.7fr] gap-x-7">
          <MyStory />
          <MyEducation />
        </div>
      </RevealAnimation>
    </section>
  );
};

const MyStory = () => {
  return (
    <Card className="rounded-3xl p-12 border-none">
      <img
        src="https://cdn.prod.website-files.com/6501ddaa88c3e8498eab1ef2/6501ddaa88c3e8498eab1f94_sophie-moore-emoji-face-happy-simplefolio-x-webflow-template-p-500.png"
        alt="face-emoji"
        className="w-10 mb-6"
      />

      <h2 className="heading-2 mb-4">My story</h2>
      <p className="text-sm text-muted-foreground font-medium">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
        mollitia consectetur fugit, unde pariatur ducimus, perspiciatis minima
        accusantium beatae optio voluptates.
      </p>
    </Card>
  );
};

const MyEducation = () => {
  return (
    <Card className="rounded-3xl py-12 px-10 border-none">
      <h1 className="heading-2 mb-6">My Education</h1>

      <div className="grid grid-cols-2 gap-x-7 gap-y-9">
        {education.map((education, index) => {
          const Icon = education.icon;
          return (
            <article key={index}>
              <div className="p-2 rounded-lg bg-background shadow w-fit mb-2">
                <Icon size={18} className="text-foreground" />
              </div>
              <h3 className="text-base font-bold text-foreground mb-1">
                {education.degree}
              </h3>
              <h3 className="text-sm text-muted-foreground font-medium mb-2">
                {education.institution}
              </h3>
              <div className="text-sm text-muted-foreground flex items-center space-x-3">
                <span>{formatDate(education.date.start, "YYYY")}</span>
                <span>-</span>
                <span>{formatDate(education.date.end, "YYYY")}</span>
              </div>
            </article>
          );
        })}
      </div>
    </Card>
  );
};

export default MyStoryEducation;
