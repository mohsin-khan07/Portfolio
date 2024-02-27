/* eslint-disable react/no-unescaped-entities */
import { useNavigate } from "react-router-dom";
import { projects } from "../projects/projects";
import SocialIcons from "../ui/SocialIcons";

export default function Home() {
  return (
    <section>
      <Hero />
      <ImageGallery />
      <Projects title="projects" isInProgress={false} />
      <Projects title="upcoming" isInProgress={true} />
    </section>
  );
}

function Hero() {
  return (
    <div className="flex flex-col items-center justify-center gap-12 py-24 text-center">
      <div className="flex flex-col items-center justify-center gap-5 px-5 md:gap-7">
        <div className="text-5xl font-bold leading-[50px] text-grey1 transition-colors dark:text-grey8 sm:leading-[60px] md:text-6xl md:leading-[80px] xl:text-8xl xl:leading-[90px]">
          Hi, I’m <span className="text-highlight">Mohsin</span>
        </div>
        <p className="text-lg md:text-xl xl:text-2xl">
          Software Developer • Front-end Engineer • Web3 Enthusiast
        </p>
      </div>
      <SocialIcons />
    </div>
  );
}

function ImageGallery() {
  return (
    <div className="flex justify-center gap-1 overflow-hidden pb-10 pt-8 sm:gap-3 sm:pt-10 lg:pb-20 lg:pt-14">
      <img
        src="./imageGallery/image1.png"
        className="w-40 sm:w-48 md:w-52 lg:w-56 xl:w-full"
      ></img>
      <img
        src="./imageGallery/image2.png"
        className="w-40 sm:w-48 md:w-52 lg:w-56 xl:w-full"
      ></img>
      <img
        src="./imageGallery/image3.png"
        className="w-40 sm:w-48 md:w-52 lg:w-56 xl:w-full"
      ></img>
      <img
        src="./imageGallery/image4.png"
        className="w-40 sm:w-48 md:w-52 lg:w-56 xl:w-full"
      ></img>
      <img
        src="./imageGallery/image5.png"
        className="w-40 sm:w-48 md:w-52 lg:w-56 xl:w-full"
      ></img>
      <img
        src="./imageGallery/image6.png"
        className="w-40 sm:w-48 md:w-52 lg:w-56 xl:w-full"
      ></img>
    </div>
  );
}

function Projects({ title, isInProgress }) {
  const navigate = useNavigate();

  let isLast;
  isInProgress
    ? (isLast =
        projects.filter((project) => project.inProgress === isInProgress)
          .length - 1)
    : (isLast = projects.length - 1);

  const handleProjectsBtn = () => {
    navigate("/projects");
  };

  return (
    <section className="flex gap-8 px-6 py-24 md:px-10 xl:px-20">
      <section
        onClick={handleProjectsBtn}
        className="cursor-pointer xs:mr-4 sm:mr-6 xl:mr-14"
      >
        <section className="sticky top-4">
          {[...title].map((word, i) => (
            <section
              key={i}
              className="flex flex-col items-center text-4xl uppercase text-grey7 dark:text-grey3 xs:gap-2 xs:text-5xl sm:text-6xl xl:text-7xl"
            >
              <span>{word}</span>
            </section>
          ))}
        </section>
      </section>
      <section className="flex w-full flex-col gap-10 xs:gap-12 mdlg:gap-16 lg:gap-20">
        {projects.map((project, i) => {
          if (project.inProgress === isInProgress) {
            return (
              <section
                className="flex flex-col gap-10 xs:gap-12 mdlg:gap-16 lg:gap-20"
                key={project.id}
              >
                <Project
                  name={project.name}
                  description={project.description}
                  overview={project.overview}
                  url={project.url}
                  techStack={project.techStack}
                  thumbnail={project.thumbnail}
                />
                {i === isLast ? "" : <HLine />}
              </section>
            );
          }
        })}
        {/* <div className="mt-6 flex items-center justify-center rounded-lg bg-grey7 p-3 text-grey1 dark:bg-grey1 dark:text-grey7">
          <button onClick={handleProjectsBtn}>View All Projects</button>
        </div> */}
      </section>
    </section>
  );
}

function Project({ name, description, overview, url, techStack, thumbnail }) {
  return (
    <section className="flex flex-col gap-8 mdlg:flex-row lg:gap-10 xl:gap-12">
      <img
        className="rounded-xl sm:max-w-xs lg:max-w-sm"
        src={thumbnail}
        alt={name}
      ></img>
      <section className="flex flex-col justify-center gap-4 lg:gap-5">
        <a href={`${url}`} target="blank">
          <div className="flex cursor-pointer items-center gap-6">
            <h1 className="text-3xl font-bold text-grey1 dark:text-grey8 xl:text-4xl">
              {name}
            </h1>
            <div className="xs:w-4 lg:w-6 xl:w-8">
              <img src="./icons/arrow.svg" alt="arrow"></img>
            </div>
          </div>
        </a>
        <p className="font-semibold dark:text-grey6">- {description}</p>
        <p className="text-grey3 dark:text-grey6">{overview}</p>
        <div className="flex flex-wrap gap-3">
          {techStack
            ? techStack.map((tech) => <TechStack key={tech} tech={tech} />)
            : ""}
        </div>
      </section>
    </section>
  );
}

function TechStack({ tech }) {
  return (
    <div className="rounded bg-grey8 px-2 py-2 text-sm dark:bg-grey3 xs:px-3">
      {tech}
    </div>
  );
}

function HLine() {
  return (
    <section className="border-b border-grey8 dark:border-grey3"></section>
  );
}
