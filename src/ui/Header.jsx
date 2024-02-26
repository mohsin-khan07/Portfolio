import { Link, NavLink } from "react-router-dom";
import ThemeToggleBtn from "./ThemeToggleBtn";

export default function Header() {
  return (
    <div className="flex items-center justify-center px-6 py-8 sm:px-10 md:px-10 xl:px-20">
      <Logo />
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

/* function NavMenu() {
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
      <li className="hover:text-highlight">
        <a
          href="https://drive.google.com/file/d/1hQCtfHYr63NLRkOMuN6-BYpq3GLqUoPp/view"
          target="blank"
        >
          Resume
        </a>
      </li>
    </ul>
  );
} */
