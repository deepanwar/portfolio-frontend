import RevealAnimation from "@/components/common/reveal-animation";
import { Card } from "@/components/ui/card";
import { resume } from "@/data/resume";
import { formatDate } from "@/utils/date";
import React from "react";

const MyResume = () => {
  return (
    <section className="container mx-auto px-6 py-3.5">
      <RevealAnimation width="100%">
        <Card className="rounded-3xl py-12 px-10 border-none">
          <h1 className="heading-2 mb-6">My Resume</h1>
          <ul>
            {resume.map((resume, index) => (
              <React.Fragment key={index}>
                <article className="flex flex-col">
                  <div className="flex gap-x-4 mb-2">
                    <img
                      src={resume.logo}
                      alt="RefactorQ"
                      className="h-12 w-12 rounded-lg shadow"
                    />
                    <div className="flex flex-col mb-3">
                      <h3 className="text-lg font-semibold">
                        {resume.company}
                      </h3>
                      <p className="text-sm text-muted-foreground font-medium">
                        {resume.position}
                      </p>
                    </div>
                  </div>
                  <div className="text-sm text-muted-foreground font-medium flex gap-x-2 mb-2">
                    <span>{formatDate(resume.date.start)}</span>
                    <span>-</span>
                    <span>{formatDate(resume.date.end)}</span>
                  </div>
                  <p className="text-sm font-medium text-muted-foreground">
                    {resume.description}
                  </p>
                </article>
                <hr className="my-6 last:hidden border-neutral-300" />
              </React.Fragment>
            ))}
          </ul>
        </Card>
      </RevealAnimation>
    </section>
  );
};

export default MyResume;
