import { useQuery } from "@tanstack/react-query";
import ProjectsSection from "../ui/ProjectsSection";
import getProjects from "../services/apiProjects";

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

  return projects ? (
    !error ? (
      <div className="flex flex-col gap-12 px-6 py-20 sm:px-14 md:px-20 lg:px-40 xl:px-52">
        {projects.map((project) => {
          return (
            <ProjectsSection
              key={project.id}
              logo={project.logo}
              name={project.name}
              overview={project.overview}
              url={project.url}
              repoLink={project.repoLink}
              thumbnail={project.thumbnail}
            />
          );
        })}
      </div>
    ) : (
      console.error(error)
    )
  ) : (
    ""
  );
}

export default Projects;
