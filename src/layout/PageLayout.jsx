import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

Outlet;
function PageLayout() {
  return (
    <div className="bg-[#191C2D] rounded-md ~p-2/4">
      <Navbar />
      <main className="sm:p-4 min-h-[65dvh]">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default PageLayout;
