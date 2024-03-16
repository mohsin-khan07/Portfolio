/* eslint-disable react/no-unescaped-entities */

import { useEffect } from "react";

export default function About() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <section className="px-6 md:px-10 xl:px-20">
      <section className="flex w-full flex-col gap-10 py-24 xs:gap-12 mdlg:gap-16 lg:gap-20">
        <section className="flex flex-col gap-12 mdlg:flex-row lg:gap-16 xl:gap-20">
          <img
            className="rounded-xl sm:max-w-xs lg:max-w-sm"
            src="./mohsin.png"
            alt="Mohsin Khan"
          ></img>
          <section className="flex flex-col justify-center gap-4 lg:gap-5">
            <h1 className="text-3xl font-bold text-grey1 transition-colors dark:text-grey8 sm:text-4xl sm:leading-[50px] xl:text-5xl xl:leading-[60px]">
              I’m a software developer working remotely from 40°C Rajasthan,
              India.
            </h1>
            <p>
              Over the past 3+ years, I've immersed myself in a diverse range of
              digital domains, spanning website design, front-end development,
              no-code development, app UI/UX, pay-per-click marketing, and sales
              funnel building. I'm proud to have worn many hats in this dynamic
              field.
            </p>
            <p>
              These days, I’m focused on learning Web3, Python, and Backend
              technologies. I'm eager to connect with like-minded individuals
              and explore opportunities for collaboration. Let's connect and
              create something amazing together!
            </p>
          </section>
        </section>
      </section>
    </section>
  );
}
