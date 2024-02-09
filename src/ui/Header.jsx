import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="flex items-center justify-between px-48 py-8">
      <Logo />
      <NavMenu />
      <ThemeToggleBtn />
    </div>
  );
}

function Logo() {
  return (
    <div className="w-11">
      <img src="logo.svg" alt="logo"></img>
    </div>
  );
}

function NavMenu() {
  return (
    <ul className="px- flex items-center justify-center gap-8 rounded-full border-2 border-grey2 bg-grey1 px-8 py-3 text-sm text-grey7">
      <Link to="/about">About</Link>
      <Link to="/projects">Projects</Link>
    </ul>
  );
}

function ThemeToggleBtn() {
  return (
    <div className="flex items-center justify-center gap-8 rounded-full border-2 border-grey2 bg-grey1 px-4 py-3 text-sm text-grey7">
      <img src="./icons/darkMode.svg" alt="theme" className="h-5 w-5"></img>
    </div>
  );
}
