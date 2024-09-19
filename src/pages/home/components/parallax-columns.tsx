import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";


type Props = {
  images1: string[];
  images2: string[];
};
const ParallaxColumns = (props: Props) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const translateSecond = useTransform(scrollYProgress, [0, 1], [0, 200]);

  return (
    <div
      ref={container}
      className="grid grid-cols-2 gap-5 overflow-hidden h-[500px]"
    >
      <motion.div
        style={{ y: translateFirst }}
        className="flex flex-col gap-y-4"
      >
        {props.images1.map((image, index) => (
          <img key={index} src={image} className="relative rounded-3xl" />
        ))}
      </motion.div>
      <motion.div
        style={{ y: translateSecond }}
        className="flex flex-col gap-y-4 relative top-[-40%]"
      >
        {props.images2.map((image, index) => (
          <img key={index} src={image} className="relative rounded-3xl" />
        ))}
      </motion.div>
    </div>
  );
};

export default ParallaxColumns;
