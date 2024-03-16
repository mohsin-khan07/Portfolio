/* eslint-disable react/no-unescaped-entities */
import SocialIcons from "./SocialIcons";
import ThemeToggleBtn from "./ThemeToggleBtn";

function Footer() {
  return (
    <div>
      <Contact />
      <Copyright />
    </div>
  );
}

/* function ContactOld() {
  return (
    <div className="flex flex-col items-center justify-center gap-8 px-6 py-20 sm:gap-10 lg:gap-12 lg:py-28">
      <div className="flex flex-col items-center justify-center lg:gap-4">
        <div className="md:text-xl lg:text-2xl">Have a project in mind?</div>
        <div className="text-center text-8xl font-bold text-grey7 dark:text-grey3 md:text-9xl lg:text-[160px] lg:leading-[150px]">
          LET'S TALK
        </div>
      </div>
      <div className="text-center dark:text-grey8 md:text-xl lg:text-2xl">
        Connect with me at{" "}
        <a href="mailto:mkhan6720@gmail.com" className="text-highlight">
          mkhan6720@gmail.com
        </a>
      </div>
      <SocialIcons />
    </div>
  );
} */

function Contact() {
  return (
    <section className="my-4 border-b border-t border-grey8 dark:border-grey2 md:my-8 mdlg:my-10">
      <div className="flex flex-col justify-between px-6 xs:text-xl md:px-10 mdlg:flex-row xl:px-20">
        <div className="flex w-full items-center justify-center py-6 mdlg:py-10">
          <a href="mailto:mkhan6720@gmail.com" className="text-highlight">
            mkhan6720@gmail.com
          </a>
        </div>
        <section className="border-b border-grey8 dark:border-grey3 mdlg:border-l"></section>
        <div className="flex w-full items-center justify-center py-6 mdlg:py-10">
          <SocialIcons />
        </div>
        <section className="border-b border-grey8 dark:border-grey3 mdlg:border-l"></section>
        <div className="flex w-full items-center justify-center py-6 mdlg:py-10">
          <ThemeToggleBtn />
        </div>
      </div>
    </section>
  );
}

function Copyright() {
  return (
    <div className="flex items-center justify-center px-6 py-5 text-xs sm:text-base md:py-8">
      <div>
        &copy; {new Date().getFullYear()} Mohsin Khan. All rights reserved.
      </div>
    </div>
  );
}

export default Footer;
