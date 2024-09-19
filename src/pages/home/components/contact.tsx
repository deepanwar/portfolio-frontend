import ProfilePic from "@/assets/deepak-pp.png";
import { ArrowUpRight, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section className="container mx-auto px-6 py-3.5">
      <div className="bg-foreground rounded-3xl px-12 py-16 flex items-center gap-x-8 relative">
        <motion.div
          whileHover={{ translateX: 5, translateY: -5 }}
          className="bg-background rounded-xl p-2.5 absolute top-10 right-10"
        >
          <Link to="/contact">
            <ArrowUpRight size={28} />
          </Link>
        </motion.div>
        <div className="aspect-square rounded-2xl w-[200px] overflow-hidden">
          <img
            src={ProfilePic}
            alt="ProfilePic"
            className="h-full w-full object-contain"
          />
        </div>
        <div className="text-background max-w-[446px]">
          <h2 className="heading-1 mb-6 !text-background">
            Let’s get in touch today and get started with your project!
          </h2>
          <div className="flex flex-col space-y-3 font-semibold">
            <div className="flex items-center gap-x-2">
              <Mail size={24} />
              <a href="mailto:deep.kmr.oct@gmail.com">deep.kmr.oct@gmail.com</a>
            </div>
            <div className="flex items-center gap-x-2">
              <Phone size={24} />
              <a href="tel:+91 9548646398">+91 9548646398</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
