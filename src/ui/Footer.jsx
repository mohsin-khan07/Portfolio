/* eslint-disable react/no-unescaped-entities */
import SocialIcons from "./SocialIcons";

function Footer() {
  return (
    <div>
      <Contact />
      <Copyright />
    </div>
  );
}

function Contact() {
  return (
    <div className="flex flex-col items-center justify-center gap-8 px-6 py-20 sm:gap-10 lg:gap-12 lg:py-28">
      <div className="flex flex-col items-center justify-center lg:gap-4">
        <div className="md:text-xl lg:text-2xl">Have a project in mind?</div>
        <div className="text-center text-8xl font-bold text-grey8 dark:text-grey3 md:text-9xl lg:text-[160px] lg:leading-[150px]">
          LET'S TALK
        </div>
      </div>
      <div className="text-center dark:text-grey8 md:text-xl lg:text-2xl">
        Connect with me at{" "}
        <span className="text-highlight">mkhan6720@gmail.com</span>
      </div>
      <SocialIcons />
    </div>
  );
}

function Copyright() {
  return (
    <div className="flex items-center justify-center border-t border-grey8 px-6 py-5 text-xs dark:border-grey2 sm:text-base md:py-8">
      <div>
        &copy; {new Date().getFullYear()} Mohsin Khan. All rights reserved.
      </div>
    </div>
  );
}

export default Footer;
