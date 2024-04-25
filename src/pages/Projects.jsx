import { useEffect } from "react";
import { projects } from "../data/projects";
import Project from "../ui/Project";

function Projects() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <section className="pt-24">
      <div className="px-6 md:px-10 xl:px-20">
        <h1 className="text-5xl font-bold text-grey1 dark:text-grey9">
          Things I’ve made.
        </h1>
      </div>
      <ProjectsSection />
    </section>
  );
}

function ProjectsSection() {
  return (
    <section className="flex gap-8 px-6 py-24 md:px-10 xl:px-20">
      <section className="flex w-full flex-col gap-10 xs:gap-12 mdlg:gap-16 lg:gap-20">
        {projects.map((project, i) => {
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
              {i === projects.length - 1 ? (
                ""
              ) : (
                <div className="border-b border-grey8 dark:border-grey3"></div>
              )}
            </section>
          );
        })}
      </section>
    </section>
  );
}

export default Projects;
