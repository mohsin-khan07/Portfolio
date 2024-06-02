import { Outlet } from "react-router-dom";
import { useDarkMode } from "../contexts/DarkModeContext";
import Header from "./Header";
import Footer from "./Footer";
import MobileHeader from "./MobileHeader";
import { useState } from "react";
import MobileNavigation from "./MobileNavigation";

function AppLayout() {
  const [mobNavIsOpen, setMobNavIsOpen] = useState(false);

  const { isDark } = useDarkMode();

  return (
    <div className={`${isDark === true ? "dark" : ""}`}>
      <main className="bg-white text-grey3 transition-all duration-200 dark:bg-black dark:text-grey6">
        <div
          onKeyDown={(e) => {
            if (e.key === "Escape") setMobNavIsOpen(false);
          }}
          className="flex w-full items-center justify-center px-6 py-8 transition-all sm:px-10 md:px-10 xl:px-20"
        >
          <Header />
          <MobileHeader isOpen={mobNavIsOpen} setIsOpen={setMobNavIsOpen} />
          <MobileNavigation isOpen={mobNavIsOpen} setIsOpen={setMobNavIsOpen} />
        </div>

        <div
          onClick={() => setMobNavIsOpen(false)}
          className={mobNavIsOpen ? "blur transition-all" : ""}
        >
          <Outlet />
          <Footer />
        </div>
      </main>
    </div>
  );
}

export default AppLayout;
