import Logo from "./Logo";

export default function MobileHeader({ isOpen, setIsOpen }) {
  return (
    <div
      className={`${isOpen ? "blur" : ""} flex w-full items-center justify-between md:hidden`}
    >
      <div className="w-12">
        <Logo />
      </div>
      <button
        onClick={() => setIsOpen(true)}
        className="rounded-full border-2 border-grey8 bg-grey9 px-6 py-3 text-grey1 transition-colors duration-200 dark:border-grey2 dark:bg-grey1 dark:text-grey7"
      >
        Menu
      </button>
    </div>
  );
}
