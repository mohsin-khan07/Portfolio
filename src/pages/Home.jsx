import { useQuery } from "@tanstack/react-query";
import getImageGallery from "../services/apiImageGallery";
import SocialIcons from "../ui/SocialIcons";
import getProjects from "../services/apiProjects";
import ProjectsSection from "../ui/ProjectsSection";

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
            A <span className="text-highlight">Blockchain</span> Developer
          </span>
        </div>
        <p className="text-lg md:text-xl">
          Blockchain Engineer • Smart Contract Developer • UX Designer
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
  const { data: images, error } = useQuery({
    queryKey: ["imageGallery"],
    queryFn: getImageGallery,
  });

  return !error ? (
    <div className="flex justify-center gap-1 overflow-hidden pb-10 pt-8 sm:gap-3 sm:pt-10 lg:pb-20 lg:pt-14">
      {images.map((image) => (
        <img
          src={image.image}
          key={image.id}
          className="w-40 sm:w-48 md:w-52 lg:w-56 xl:w-full"
        ></img>
      ))}
    </div>
  ) : (
    console.error(error)
  );
}

function Projects() {
  const {
    data: projects,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["projects"],
    queryFn: getProjects,
  });

  if (isLoading) return "";

  return !error ? (
    <div className="flex flex-col gap-12 px-6 py-20 sm:px-14 md:px-20 lg:px-40 xl:px-52">
      {projects.slice(-3).map((project) => (
        <ProjectsSection
          key={project.id}
          logo={project.logo}
          name={project.name}
          overview={project.overview}
          url={project.url}
          repoLink={project.repoLink}
          thumbnail={project.thumbnail}
        />
      ))}
    </div>
  ) : (
    console.error(error)
  );
}
