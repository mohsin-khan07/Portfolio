function ProjectsSection({ logo, name, overview, url, repoLink, thumbnail }) {
  return (
    <div className="rounded-xl border-2 border-grey8 bg-grey9 p-10 transition-colors dark:border-grey2 dark:bg-grey1">
      <div className="flex items-center gap-10">
        <div className="flex w-full flex-col justify-start gap-6">
          <img className="h-10 w-10" src={logo}></img>
          <div className="text-4xl font-bold text-grey1 transition-colors dark:text-grey8">
            {name}
          </div>
          <p className="text-grey3 dark:text-grey6">{overview}</p>
          <div className="flex items-center gap-7">
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
          </div>
        </div>
        <div>
          <img src={thumbnail}></img>
        </div>
      </div>
    </div>
  );
}

export default ProjectsSection;
