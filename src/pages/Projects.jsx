import { useEffect } from "react";
import { projects } from "../projects/projects";
import Project from "../ui/Project";

function Projects() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <section className="py-24">
      <div className="px-6 md:px-10 xl:px-20">
        <h1 className="text-6xl font-bold text-grey9">Things I’ve made.</h1>
      </div>
      <ProjectsSection title="Things I’ve made." isInProgress={false} />
      <div className="mt-6 px-6 md:px-10 xl:px-20">
        <h1 className="text-6xl font-bold text-grey9">Upcoming Projects.</h1>
      </div>
      <ProjectsSection title="Upcoming Projects" isInProgress={true} />
    </section>
  );
}

function ProjectsSection({ isInProgress }) {
  let isLast;
  isInProgress
    ? (isLast =
        projects.filter((project) => project.inProgress === isInProgress)
          .length - 1)
    : (isLast = projects.length - 1);

  return (
    <section className="flex gap-8 px-6 py-24 md:px-10 xl:px-20">
      <section className="flex w-full flex-col gap-10 xs:gap-12 mdlg:gap-16 lg:gap-20">
        {projects.map((project, i) => {
          if (project.inProgress === isInProgress) {
            return (
              <section
                className="flex flex-col gap-10 xs:gap-12 mdlg:gap-16 lg:gap-20"
                key={project.id}
              >
                <Project
                  id={project.id}
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
      </section>
    </section>
  );
}

export default Projects;
