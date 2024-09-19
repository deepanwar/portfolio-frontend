import { Card } from "@/components/ui/card";
import ProfilePic from "@/assets/deepak-pp.png";
import ParallaxColumns from "./parallax-columns";
import { Button } from "@/components/ui/button";
import RevealAnimation from "@/components/common/reveal-animation";

const images1 = [ProfilePic, ProfilePic, ProfilePic, ProfilePic, ProfilePic];
const images2 = [ProfilePic, ProfilePic, ProfilePic, ProfilePic, ProfilePic];

const AboutMe = () => {
  return (
    <section className="container mx-auto px-6 py-3.5">
      <RevealAnimation>
        <Card className="rounded-3xl px-10 grid grid-cols-[1.2fr_1fr] gap-11 border-none">
          {/* left */}
          <ParallaxColumns images1={images1} images2={images2} />

          {/* right */}
          <div className="py-24">
            <h1 className="heading-2 mb-3">
              I’ve been designing digital products for more than 15 years
            </h1>
            <p className="mb-6 text-muted-foreground font-medium">
              Vitae enim ut interdum id mi sit id aliquam purus urna ipsum augue
              lorem est metus turpis tincidunt vitaeniolm siet sollicitudin sit
              aliquet nunc a enim commodo.
            </p>
            <Button className="px-10 py-8 rounded-full text-base font-semibold">
              More about me
            </Button>
          </div>
        </Card>
      </RevealAnimation>
    </section>
  );
};

export default AboutMe;
