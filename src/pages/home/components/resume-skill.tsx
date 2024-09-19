import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import RefactorLogoSq from "@/assets/refactorq-sq-logo.svg";
import dayjs from "dayjs";

const resume = [
  {
    company: "RefactorQ",
    position: "Jr. React Developer",
    date: {
      start: "01/10/2023",
      end: "Present",
    },
    description: "Description",
    logo: RefactorLogoSq,
  },
  {
    company: "RefactorQ",
    position: "React Developer - Internship",
    date: {
      start: "01/06/2023",
      end: "01/10/2023",
    },
    description: "Description",
    logo: RefactorLogoSq,
  },
];

const formatDate = (date: string) => {
  if (!dayjs(date).isValid()) return date;
  return dayjs(date).format("MMM YYYY");
};

const ResumeSkill = () => {
  return (
    <section className="container mx-auto px-6 py-3.5">
      <div className="grid grid-cols-[1.33fr_1fr] gap-7">
        <Card className="rounded-3xl px-12 py-12 border-none">
          <CardHeader className="px-0 pt-0">
            <CardTitle className="heading-2">My Resume</CardTitle>
          </CardHeader>
          <CardContent className="px-0 pb-0">
            {resume.map((item, index) => (
              <>
                <div
                  key={index}
                  className="flex items-center justify-between gap-x-4"
                >
                  <div className="flex gap-x-4">
                    <img
                      src={item.logo}
                      alt="RefactorQ"
                      className="h-12 w-12 rounded-lg shadow"
                    />
                    <div className="flex flex-col">
                      <h3 className="text-lg font-semibold">{item.company}</h3>
                      <p className="text-sm text-muted-foreground font-medium">
                        {item.position}
                      </p>
                    </div>
                  </div>

                  <div className="text-sm text-muted-foreground font-medium flex gap-x-1">
                    <span>{formatDate(item.date.start)}</span>
                    <span>-</span>
                    <span>{formatDate(item.date.end)}</span>
                  </div>
                </div>
                <hr className="my-6 last:hidden border-neutral-300" />
              </>
            ))}
          </CardContent>
        </Card>
        <Card className="rounded-3xl px-14 py-12 border-none">
          <CardHeader className="px-0 pt-0">
            <CardTitle className="heading-2">Skills</CardTitle>
          </CardHeader>
          <CardContent className="px-0"></CardContent>
        </Card>
        {/* <Card className="rounded-3xl px-14 py-12"></Card> */}
      </div>
    </section>
  );
};

export default ResumeSkill;
