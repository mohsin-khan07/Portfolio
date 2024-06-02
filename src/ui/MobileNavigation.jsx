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

export default function MobileNavigation({ isOpen, setIsOpen }) {
  const isLast = navLinks.length - 1;

  return (
    <main className={`${isOpen ? "" : "hidden"}`}>
      <div className="fixed left-0 top-0 z-10 flex w-full items-center justify-center px-6 py-8">
        <div className="flex w-full flex-col gap-8 rounded-3xl border-2 border-grey8 bg-grey9 p-6 transition-colors duration-200 dark:border-grey2 dark:bg-grey1 dark:text-grey7">
          <div className="flex justify-between">
            <h2 className="text-xl font-semibold">Navigation</h2>
            <button onClick={() => setIsOpen(false)}>close</button>
          </div>
          <ul className="flex flex-col gap-4">
            {navLinks.map((link, i) => (
              <>
                <NavLink
                  key={link.name}
                  to={link.to}
                  className={({ isActive }) => [
                    isActive
                      ? "text-highlight"
                      : "transition hover:text-highlight",
                  ]}
                >
                  {link.name}
                </NavLink>
                {i === isLast || (
                  <div className="border-b border-grey8 transition-colors dark:border-grey3"></div>
                )}
              </>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}
