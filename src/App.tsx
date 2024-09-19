import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import PublicLayout from "./layouts/public";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import Contact from "./pages/contact";
import About from "./pages/about";

function App() {
  useEffect(() => {
    const lenis = new Lenis();

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);
  }, []);
  return (
    <>
      <Routes>
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
