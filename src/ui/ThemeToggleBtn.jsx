import { useDarkMode } from "../contexts/DarkModeContext";

export default function ThemeToggleBtn() {
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
