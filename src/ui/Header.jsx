import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <section className="flex items-center justify-center px-6 py-8 sm:px-10 md:px-10 xl:px-20">
      <ul className="fixed top-8 z-10 flex items-center justify-center gap-6 rounded-full border-2 border-grey8 bg-grey9 px-6 py-3 text-xs text-grey1 transition-colors duration-200 dark:border-grey2 dark:bg-grey1 dark:text-grey7 xs:gap-8 xs:px-8 xs:text-sm">
        <NavLink
          to="/"
          className={({ isActive }) => [
            isActive ? "text-highlight" : "transition hover:text-highlight",
          ]}
        >
          Home
        </NavLink>
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
    </section>
  );
}
