import { NavLink } from "react-router-dom";

const navLinks = [
  {
    name: "Home",
    to: "/",
  },
  {
    name: "About",
    to: "/about",
  },
  {
    name: "Projects",
    to: "/projects",
  },
];

export default function Header() {
  return (
    <ul className="fixed top-8 z-10 hidden items-center justify-center gap-6 rounded-full border-2 border-grey8 bg-grey9 px-6 py-3 text-xs text-grey1 transition-colors duration-200 dark:border-grey2 dark:bg-grey1 dark:text-grey7 xs:gap-8 xs:px-8 xs:text-sm md:flex">
      {navLinks.map((link) => (
        <NavLink
          key={link.name}
          to={link.to}
          className={({ isActive }) => [
            isActive ? "text-highlight" : "transition hover:text-highlight",
          ]}
        >
          {link.name}
        </NavLink>
      ))}
    </ul>
  );
}
