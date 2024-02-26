import { useEffect } from "react";
import { projects } from "../projects/projects";
import ProjectsSection from "../ui/ProjectsSection";

function Projects() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="flex flex-col gap-12 px-6 py-20 sm:px-14 md:px-20 lg:px-40 xl:px-52">
      {projects.map((project) => (
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

export default Projects;
