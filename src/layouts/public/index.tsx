import { Outlet } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";

const PublicLayout = () => {
  return (
    <main>
      <Header />
      <Outlet />
      <Footer />
    </main>
  );
};

export default PublicLayout;
