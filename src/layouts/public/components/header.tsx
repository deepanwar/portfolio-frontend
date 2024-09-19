import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const navlinks = [
  {
    title: "Home",
    link: "/",
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
    link: "/contact",
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
        className="bg-foreground rounded-2xl px-6 py-2"
      >
        <nav>
          <ul className="flex items-center justify-center gap-4 text-secondary font-medium">
            {navlinks?.map(({ title, link }) => (
              <li key={title}>
                <Link to={link}>{title}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </motion.div>
    </header>
  );
};

export default Header;
