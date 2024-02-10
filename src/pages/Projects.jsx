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
      <div className="flex flex-col gap-12 px-52 py-14">
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
