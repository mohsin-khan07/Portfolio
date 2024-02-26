import { Link, NavLink } from "react-router-dom";
import { useDarkMode } from "../contexts/DarkModeContext";

export default function Header() {
  return (
    <div className="flex items-center justify-between px-6 py-8 sm:px-10 md:px-10 xl:px-20">
      <Logo />
      <NavMenu />
      <ThemeToggleBtn />
    </div>
  );
}

function Logo() {
  return (
    <div className="w-11">
      <Link to="/">
        <img src="logo.svg" alt="logo"></img>
      </Link>
    </div>
  );
}

function NavMenu() {
  // const [menuOpen, setMenuOpen] = useState(false);

  // function handleMenuOpen() {
  //   setMenuOpen(true);
  // }

  return (
    <ul className="flex items-center justify-center gap-8 rounded-full border-2 border-grey8 bg-grey9 px-8 py-3 text-sm text-grey1 transition-colors duration-200 dark:border-grey2 dark:bg-grey1 dark:text-grey7">
      <NavLink
        to="/about"
        className={({ isActive }) => [
          isActive ? "text-highlight" : "transition hover:text-highlight",
        ]}
      >
        About
      </NavLink>
      <NavLink
        to="/projects"
        className={({ isActive }) => [
          isActive ? "text-highlight" : "transition hover:text-highlight",
        ]}
      >
        Projects
      </NavLink>
    </ul>
  );
}

// function MobileMenu({ isOpen }) {
//   return (
//     <div
//       className={`absolute mt-4 flex w-full flex-col justify-start gap-5 rounded-xl border-2 border-grey2 bg-grey1 py-5 transition-opacity ${isOpen ? "" : "hidden"}`}
//     >
//       <NavLink
//         to="/about"
//         className={({ isActive }) => [
//           isActive ? "text-highlight" : "transition hover:text-highlight",
//         ]}
//       >
//         About
//       </NavLink>
//       <NavLink
//         to="/projects"
//         className={({ isActive }) => [
//           isActive ? "text-highlight" : "transition hover:text-highlight",
//         ]}
//       >
//         Projects
//       </NavLink>
//     </div>
//   );
// }

function ThemeToggleBtn() {
  const { isDark, toggleDarkMode } = useDarkMode();

  return (
    <button
      onClick={toggleDarkMode}
      className="flex items-center justify-center gap-8 rounded-full border-2 border-grey8 bg-grey9 px-4 py-3 text-sm text-grey7 dark:border-grey2 dark:bg-grey1"
    >
      <img
        src={`./icons/${isDark === true ? "darkModeIcon.svg" : "lightModeIcon.svg"}`}
        alt="theme"
        className="h-5 w-5 transition duration-200 hover:scale-75"
      ></img>
    </button>
  );
}
