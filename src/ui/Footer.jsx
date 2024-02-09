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
    <div className="flex flex-col items-center justify-center gap-12 py-28">
      <div className="flex flex-col items-center justify-center gap-4">
        <div className="text-2xl">Have a project in mind?</div>
        <div className="text-[160px] font-bold leading-[150px] text-grey3">
          LET'S TALK
        </div>
      </div>
      <div className="text-2xl text-grey8">
        Connect with me at{" "}
        <span className="text-highlight">mkhan6720@gmail.com</span>
      </div>
      <SocialIcons />
    </div>
  );
}

function Copyright() {
  return (
    <div className="flex items-center justify-center border-t border-grey2 py-8">
      <div>
        &copy; {new Date().getFullYear()} Mohsin Khan. All rights reserved.
      </div>
    </div>
  );
}

export default Footer;
