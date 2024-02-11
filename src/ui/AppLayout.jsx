import { Outlet } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useDarkMode } from "../contexts/DarkModeContext";
import Header from "./Header";
import Footer from "./Footer";
import getImageGallery from "../services/apiImageGallery";
import Spinner from "./Spinner";

function AppLayout() {
  const { isLoading } = useQuery({
    queryKey: ["imageGallery"],
    queryFn: getImageGallery,
  });
  const { isDark } = useDarkMode();

  return !isLoading ? (
    <div className={`${isDark === true ? "dark" : ""}`}>
      <div
        className={`bg-white text-grey3 transition-colors duration-200 dark:bg-black dark:text-grey6`}
      >
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  ) : (
    <Spinner />
  );
}

export default AppLayout;
