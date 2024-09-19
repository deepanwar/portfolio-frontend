import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import ProfilePic from "@/assets/deepak-pp.png";

const Hero = () => {
  return (
    <section className="container mx-auto px-6 pb-3.5">
      <div className="grid grid-cols-[1.33fr_1fr] gap-7">
        {/* left */}
        <Card className="rounded-3xl px-14 py-12 border-none">
          <div className="flex items-end mb-6 gap-x-2">
            <div className="relative">
              <Avatar className="w-14 h-14">
                <AvatarImage src="https://cdn.prod.website-files.com/6501ddaa88c3e8498eab1ef2/664ba4aa263d30ac50babb80_sophie-moore-avatar-bg-dark-simplefolio-webflow-ecommerce-template.jpg" />
              </Avatar>
              <div className="absolute h-3.5 w-3.5 rounded-full bg-green-500 top-0.5 right-0.5 border-2 border-card" />
            </div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-background text-sm px-2.5 py-2 border hover:border-neutral-400 rounded-3xl"
            >
              <Link to="/contact">
                <div className="flex items-center justify-center">
                  <div className="mr-1.5 font-medium text-muted-foreground">
                    Let’s chat!
                  </div>
                  <img
                    src="https://cdn.prod.website-files.com/6501ddaa88c3e8498eab1ef2/6501ddaa88c3e8498eab1f67_chat-simplefolio-x-webflow-template.png"
                    loading="eager"
                    alt="Chat - Simplefolio X Webflow Template"
                    className="h-4 w-4"
                  />
                </div>
              </Link>
            </motion.div>
          </div>
          <h1 className="heading-1 mb-3">
            I’m Deepak Kumar a MERN stack developer from{" "}
            <span className="whitespace-nowrap">India</span>
          </h1>
          <p className="text-muted-foreground font-medium">
            Ipsum dolor sit ammet, consectetur adipiscing elit aliquam et erat
            donec pulvinar enim potent adipiscing consectetur adipiscing{" "}
            <span className="whitespace-nowrap">elit aliquam</span>
          </p>
        </Card>

        {/* right */}
        <div className="rounded-3xl overflow-hidden">
          <img src={ProfilePic} alt="hero-image" className="w-full " />
        </div>
      </div>
    </section>
  );
};

export default Hero;
