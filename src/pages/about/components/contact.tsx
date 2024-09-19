import RevealAnimation from "@/components/common/reveal-animation";
import { Mail, Phone } from "lucide-react";
import MailBoxImage from "@/assets/mail-box.png";

const Contact = () => {
  return (
    <section className="container mx-auto px-6 py-3.5">
      <RevealAnimation width="100%">
        <div className="bg-foreground rounded-3xl px-10 py-11 flex items-center justify-between gap-x-8 relative">
          <div className="text-background max-w-[446px]">
            <h2 className="heading-1 mb-6 !text-background">
              Want to work with me? <br />
              Let’s get in touch!
            </h2>
            <div className="flex flex-col space-y-3 font-semibold">
              <div className="flex items-center gap-x-2">
                <Mail size={24} />
                <a href="mailto:deep.kmr.oct@gmail.com">
                  deep.kmr.oct@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-x-2">
                <Phone size={24} />
                <a href="tel:+91 9548646398">+91 9548646398</a>
              </div>
            </div>
          </div>
          <div className="aspect-square rounded-2xl w-[200px] overflow-hidden">
            <img
              src={MailBoxImage}
              alt="ProfilePic"
              className="h-full w-full object-contain"
            />
          </div>
        </div>
      </RevealAnimation>
    </section>
  );
};

export default Contact;
