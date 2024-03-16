/* eslint-disable react/no-unescaped-entities */
import { useNavigate } from "react-router-dom";
import { projects } from "../projects/projects";
import SocialIcons from "../ui/SocialIcons";
import Project from "../ui/Project";

export default function Home() {
  return (
    <section>
      <Hero />
      <ImageGallery />
      <Projects title="projects" isInProgress={false} />
      <Projects title="upcoming" isInProgress={true} />
      <About />
    </section>
  );
}

function Hero() {
  return (
    <div className="flex flex-col items-center justify-center gap-12 py-24 text-center">
      <div className="flex flex-col items-center justify-center gap-5 px-5 md:gap-10">
        <div className="flex flex-col text-5xl font-bold leading-[50px] text-grey1 transition-colors dark:text-grey8 sm:leading-[60px] md:text-6xl md:leading-[80px] xl:gap-4 xl:text-8xl xl:leading-[90px]">
          <span>Hi, I’m Mohsin.</span>
          <span>
            A <span className="text-highlight">Developer</span>.
          </span>
        </div>
        <p className="w-3/4">
          I fuse creativity with code to create captivating web experiences.
          Let’s connect and collaborate to craft extraordinary projects
          together!
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
              className="flex flex-col items-center text-4xl uppercase text-grey7 transition-colors dark:text-grey3 xs:gap-2 xs:text-5xl sm:text-6xl xl:text-7xl"
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
                  urlName={project.urlName}
                  name={project.name}
                  description={project.description}
                  overview={project.overview}
                  techStack={project.techStack}
                  thumbnail={project.thumbnail}
                />
                {i === isLast ? (
                  ""
                ) : (
                  <div className="border-b border-grey8 dark:border-grey3"></div>
                )}
              </section>
            );
          }
        })}
        <div className="mt-6 flex items-center justify-center rounded-lg bg-grey7 p-3 text-grey1 dark:bg-grey1 dark:text-grey7">
          <button onClick={handleProjectsBtn}>View All Projects</button>
        </div>
      </section>
    </section>
  );
}

/* function TechStack({ tech }) {
  return (
    <div className="rounded bg-grey8 px-2 py-2 text-sm transition-colors dark:bg-grey3 xs:px-3">
      {tech}
    </div>
  );
} */

/* function HLine() {
  return <div className="border-b border-grey8 dark:border-grey3"></div>;
} */

function About() {
  const title = "About";
  const navigate = useNavigate();

  const handleAboutBtn = () => {
    navigate("/about");
  };

  return (
    <section className="flex gap-8 px-6 py-24 md:px-10 xl:px-20">
      <section
        onClick={handleAboutBtn}
        className="cursor-pointer xs:mr-4 sm:mr-6 xl:mr-14"
      >
        <section className="sticky top-4">
          {[...title].map((word, i) => (
            <section
              key={i}
              className="flex flex-col items-center text-4xl uppercase text-grey7 transition-colors dark:text-grey3 xs:gap-2 xs:text-5xl sm:text-6xl xl:text-7xl"
            >
              <span>{word}</span>
            </section>
          ))}
        </section>
      </section>
      <section className="flex w-full flex-col gap-10 xs:gap-12 mdlg:gap-16 lg:gap-20">
        <section className="flex flex-col gap-8 mdlg:flex-row lg:gap-10 xl:gap-12">
          <img
            className="rounded-xl sm:max-w-xs lg:max-w-sm"
            src="./mohsin.png"
            alt="Mohsin Khan"
          ></img>
          <section className="flex flex-col justify-center gap-4 lg:gap-5">
            <h1 className="text-2xl font-bold text-grey1 transition-colors dark:text-grey8 sm:text-3xl sm:leading-[40px] xl:text-4xl xl:leading-[50px]">
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
