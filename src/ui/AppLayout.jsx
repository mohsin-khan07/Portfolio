import { Outlet } from "react-router-dom";
import { useDarkMode } from "../contexts/DarkModeContext";
import Header from "./Header";
import Footer from "./Footer";

function AppLayout() {
  const { isDark } = useDarkMode();

  return (
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
  );
}

export default AppLayout;
