import SocialIcons from "../ui/SocialIcons";
import ProjectsSection from "../ui/ProjectsSection";
import { allProjects } from "../projects/allProjects";

export default function Home() {
  return (
    <div>
      <Hero />
      <ImageGallery />
      <Projects />
    </div>
  );
}

function Hero() {
  return (
    <div className="flex flex-col items-center justify-center gap-12 py-16 text-center">
      <div className="flex flex-col items-center justify-center gap-5 px-5 md:gap-7">
        <div className="flex flex-col text-4xl font-bold leading-[50px] text-grey1 transition-colors dark:text-grey8 sm:text-5xl sm:leading-[60px] md:text-6xl md:leading-[80px] xl:text-7xl xl:leading-[90px]">
          <span>Hi, I’m Mohsin</span>
          <span>
            A <span className="text-highlight">Front-end</span> Developer
          </span>
        </div>
        <p className="text-lg md:text-xl">
          Software Developer • Front-end Engineer • Web3 Enthusiast
        </p>
        <p className="w-3/4">
          I fuse creativity with code in the Web3 space. Excited to collaborate
          on crafting extraordinary projects together!
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

function Projects() {
  return (
    <div className="flex flex-col gap-12 px-6 py-20 sm:px-14 md:px-20 lg:px-40 xl:px-52">
      {allProjects.slice(0, 3).map((project) => (
        <ProjectsSection
          key={project.id}
          logo={project.logo}
          name={project.name}
          overview={project.overview}
          url={project.url}
          repoLink={project.repoLink}
        />
      ))}
    </div>
  );
}
