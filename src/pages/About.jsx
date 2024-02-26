/* eslint-disable react/no-unescaped-entities */

import { useEffect } from "react";

export default function About() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div>
      <AboutMe />
      <Skills />
    </div>
  );
}

function AboutMe() {
  return (
    <section className="items-top flex flex-col gap-6 px-6 py-14 sm:gap-10 sm:px-10 md:gap-12 md:px-20 lg:flex-row lg:px-40 lg:py-20 xl:gap-24 xl:px-52 xl:py-28">
      <div>
        <img
          src="mohsin.png"
          alt="mohsin khan"
          className="w-64 lg:w-full"
        ></img>
      </div>

      <div className="flex w-full flex-col justify-start gap-6">
        <div className="text-2xl font-semibold text-grey1 transition-colors dark:text-grey8 sm:text-4xl sm:leading-[50px] lg:leading-[50px] xl:text-5xl xl:leading-[62px]">
          Harnessing the Potential of Blockchain Technology
        </div>
        <p>
          Hey there, I'm Mohsin Khan, a Blockchain Developer hailing from India
          and passionate about crafting software solutions using blockchain
          technology with great user experiences.
        </p>
        <p>
          My journey began with a curiosity-driven exploration of
          cryptocurrencies and their underlying blockchain technology. As I
          delved deeper, I realized the immense potential for blockchain beyond
          just digital currencies.
        </p>
        <p>
          Driven by a desire to contribute to this rapidly evolving field, I've
          honed my skills in blockchain development, smart contract programming,
          and decentralized application (DApp) creation.
        </p>
        <p>
          I’m always excited about new ideas and possibilities that lie ahead in
          the world of blockchain. Whether it's collaborating on groundbreaking
          projects, exploring new use cases, or advocating for blockchain
          adoption, I'm eager to continue my journey!
        </p>
        <p>
          Currently, I'm actively seeking opportunities in blockchain
          development where I can leverage my skills and expertise to make a
          tangible impact. If you're interested in exploring potential
          collaborations, feel free to reach out!
        </p>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4 px-10 py-4 xs:gap-6 xs:py-10 md:gap-8 xl:gap-8 xl:py-16">
      <IconBox imgSrc="./icons/solidity.svg" />
      <IconBox imgSrc="./icons/javascript.png" />
      <IconBox imgSrc="./icons/react.png" />
      <IconBox imgSrc="./icons/ethereum.png" />
      <IconBox imgSrc="./icons/git.png" />
      <IconBox imgSrc="./icons/hardhat.png" />
      <IconBox imgSrc="./icons/truffle.png" />
    </div>
  );
}

function IconBox({ imgSrc }) {
  return (
    <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-grey8 bg-grey9 dark:border-grey2 dark:bg-grey1 xs:h-20 xs:w-20 xl:h-28 xl:w-28">
      <img src={imgSrc} alt="icon" className="h-5 xs:h-10 xl:h-12"></img>
    </div>
  );
}
