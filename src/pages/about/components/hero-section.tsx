import { Card } from "@/components/ui/card";
import PortraitImage from "@/assets/deepak-pp-portrait.png";
import VictoryHandImage from "@/assets/victory-hand-emoji.png";
import RevealAnimation from "@/components/common/reveal-animation";

const HeroSection = () => {
  return (
    <section className="container mx-auto px-6 py-3.5">
      <RevealAnimation width="100%">
        <div className="grid grid-cols-[1fr_1.33fr] gap-x-7">
          <Card className="rounded-3xl bg-foreground border-none overflow-hidden">
            <img src={PortraitImage} alt="Deepak Portrait" />
          </Card>
          <Card className="rounded-3xl p-12 border-none">
            <div className="mb-4">
              <img src={VictoryHandImage} alt="emoji" className="w-7" />
            </div>

            <div className="mb-7">
              <h1 className="heading-1 mb-4">Hi, I'm Deepak Kumar</h1>
              <p className="text-sm text-muted-foreground font-medium">
                Ultrices integer eget id semper bibendum nisl. Accumsan placerat
                maurisulputate nisl adipiscing risus. Euismod in turpisol
                ullamcorper viverra pretium
              </p>
            </div>

            <div>
              <h1 className="heading-2 mb-4">About me</h1>
              <p className="text-sm text-muted-foreground font-medium">
                Ultrices integer eget id semper bibendum nisl. Accumsan placerat
                maurisulputate nisl adipiscing risus. Euismod in turpisol
                ullamcorper viverra pretium
              </p>
            </div>
          </Card>{" "}
        </div>
      </RevealAnimation>
    </section>
  );
};

export default HeroSection;
