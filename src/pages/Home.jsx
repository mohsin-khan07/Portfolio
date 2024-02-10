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
      <div className="flex flex-col items-center justify-center gap-7">
        <div className="flex flex-col text-7xl font-bold leading-[90px] text-grey1 transition-colors dark:text-grey8">
          <span>Hi, I’m Mohsin</span>
          <span>
            A <span className="text-highlight">Blockchain</span> Developer
          </span>
        </div>
        <p className="text-xl">
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
    <div className="flex items-center justify-center gap-3 overflow-hidden pb-20 pt-14">
      {images.map((image) => (
        <img src={image.image} key={image.id}></img>
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
    <div className="flex flex-col gap-12 px-52 py-20">
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
