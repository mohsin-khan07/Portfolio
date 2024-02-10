/* eslint-disable react/no-unescaped-entities */
import { useQuery } from "@tanstack/react-query";
import getMyImage from "../services/apiMyImage";

export default function About() {
  return (
    <div>
      <AboutMe />
      <Skills />
    </div>
  );
}

function AboutMe() {
  const { data, error } = useQuery({
    queryKey: ["myImage"],
    queryFn: getMyImage,
  });

  return (
    <div className="items-top flex gap-24 px-48 py-28">
      <div className="flex w-3/4 flex-col justify-start gap-6">
        <div className="text-5xl font-semibold leading-[62px] text-grey1 transition-colors dark:text-grey8">
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
      <div>
        {error ? (
          "Error loading image!"
        ) : (
          <img src={data ? data[0].myImage : ""} alt="mohsin khan"></img>
        )}
      </div>
    </div>
  );
}

function Skills() {
  return (
    <div className="flex items-center justify-center gap-8 py-16">
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
    <div className="flex h-28 w-28 items-center justify-center rounded-full border-4 border-grey8 bg-grey9 dark:border-grey2 dark:bg-grey1">
      <img src={imgSrc} alt="icon"></img>
    </div>
  );
}
