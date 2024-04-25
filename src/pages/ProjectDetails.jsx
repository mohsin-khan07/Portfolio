import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { projects } from "../data/projects";

export default function ProjectDetails() {
  const { urlName } = useParams();
  const project = projects.find((project) => project.urlName === urlName);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <section className="grid items-center justify-center px-6 py-24 md:px-10 xl:px-20">
      <section className="grid max-w-xl gap-16">
        <Name
          name={project.name}
          url={project.url}
          repoLink={project.repoLink}
        />
        <Thumbnail thumbnail={project.thumbnail} />
        <Overview overview={project.overview} />
        <TechnologyUsed techStack={project.techStack} />
        <KeyFeatures keyFeatures={project.keyFeatures} />
        <div className="border-b border-grey8 dark:border-grey3"></div>
        <NextProject currProjectId={project.id} />
      </section>
    </section>
  );
}

function Thumbnail({ thumbnail, name }) {
  return (
    <section className="flex items-center justify-center md:mb-10">
      <div className="w-fit overflow-hidden rounded-xl">
        <img src={thumbnail} alt={name}></img>
      </div>
    </section>
  );
}

function Name({ name, url, repoLink }) {
  return (
    <section className="flex flex-col gap-8">
      <h1 className="text-center text-5xl font-bold text-grey1 dark:text-grey9">
        {name}
      </h1>
      <Links url={url} repoLink={repoLink} />
    </section>
  );
}

function Links({ url, repoLink }) {
  return (
    <section className="flex flex-col items-center justify-center gap-5 text-grey8 xs:flex-row xs:gap-10">
      <a
        href={url}
        target="blank"
        className="flex items-center gap-2 text-grey6 transition hover:text-grey5 dark:text-grey5 dark:hover:text-grey6"
      >
        <img src="/icons/web.svg" className="h-4 w-4"></img>
        {url.replace("https://", "")}
      </a>
      <a
        href={repoLink}
        target="blank"
        className="flex items-center gap-2 text-grey6 transition hover:text-grey5 dark:text-grey5 dark:hover:text-grey6"
      >
        <img src="/icons/github.svg" className="h-4 w-4"></img>
        {repoLink.replace("https://github.com/mohsin-khan07/", "")}
      </a>
    </section>
  );
}

function Overview({ overview }) {
  return (
    <section className="flex flex-col gap-6">
      <h1 className="text-3xl font-semibold text-grey2 dark:text-grey8">
        Overview
      </h1>
      <p>{overview}</p>
    </section>
  );
}

function TechnologyUsed({ techStack }) {
  return (
    <section className="flex flex-col gap-6">
      <h1 className="text-3xl font-semibold text-grey2 dark:text-grey8">
        Technology Used
      </h1>
      <div className="flex flex-wrap gap-4">
        {techStack.map((tech) => (
          <div
            key={tech}
            className="rounded bg-grey8 px-2 py-2 text-sm transition-colors dark:bg-grey3 xs:px-3"
          >
            {tech}
          </div>
        ))}
      </div>
    </section>
  );
}

function KeyFeatures({ keyFeatures }) {
  return (
    <section className="flex flex-col gap-6">
      <h1 className="text-3xl font-semibold text-grey2 dark:text-grey8">
        Key Features
      </h1>
      <ul className="flex list-disc flex-col gap-6">
        {keyFeatures.map((feature) => {
          const index = feature.indexOf(":");
          const title = feature.substring(0, index + 1);
          const remaining = feature.substring(index + 1);
          return (
            <li key={feature}>
              <p>
                <span className="font-semibold text-grey3 dark:text-grey7">
                  {title}
                </span>
                {remaining}
              </p>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

function NextProject({ currProjectId }) {
  const navigate = useNavigate();

  let nextProjectId;
  currProjectId >= projects.length
    ? (nextProjectId = 1)
    : (nextProjectId = currProjectId + 1);

  const nextProject = projects.find((project) => project.id === nextProjectId);

  const handleNextClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate(`/projects/${nextProject.urlName}`);
  };

  if (nextProject)
    return (
      <section className="grid gap-10">
        <h1 className="text-3xl font-semibold text-grey2 dark:text-grey8">
          Next Project: {nextProject.name}
        </h1>
        <div onClick={handleNextClick} className="cursor-pointer">
          <Thumbnail
            thumbnail={nextProject.thumbnail}
            name={nextProject.name}
          />
        </div>
      </section>
    );
}
