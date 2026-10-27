import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import "./MainLayout.css";

function MainLayout() {
  return (
    <>
      <div className="main-layout">
        <header className="layout-header">
          <Navbar />
        </header>
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default MainLayout;
