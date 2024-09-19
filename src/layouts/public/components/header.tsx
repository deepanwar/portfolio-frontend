import { motion } from "framer-motion";

const navlinks = [
  {
    title: "Home",
    link: "#",
  },
  {
    title: "About",
    link: "#",
  },
  {
    title: "Experience",
    link: "#",
  },
  {
    title: "Projects",
    link: "#",
  },
  {
    title: "Contact",
    link: "#",
  },
];

const Header = () => {
  return (
    <header className="fixed left-0 right-0 z-50 top-5 flex items-center justify-center">
      <motion.div
        whileHover={{
          scale: 1.1,
          transition: { duration: 0.3 },
        }}
        // whileTap={{ scale: 0.9 }}
        className="bg-foreground rounded-2xl px-6 py-2"
      >
        <nav>
          <ul className="flex items-center justify-center gap-4 text-secondary font-medium">
            {navlinks?.map(({ title, link }) => (
              <li key={title}>
                <a href={link}>{title}</a>
              </li>
            ))}
          </ul>
        </nav>
      </motion.div>
    </header>
  );
};

export default Header;
