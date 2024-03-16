import { useNavigate } from "react-router-dom";

function Project({ urlName, name, description, overview, thumbnail }) {
  const navigate = useNavigate();

  const handleClick = (urlName) => {
    navigate(`/projects/${urlName}`);
  };

  return (
    <section
      onClick={() => handleClick(urlName)}
      className="cursor-pointer transition-all hover:-m-8 hover:rounded-xl hover:bg-grey9 hover:p-8 dark:hover:bg-grey1"
    >
      <section className="flex flex-col gap-8 mdlg:flex-row lg:gap-10 xl:gap-12">
        <img
          className="rounded-xl sm:max-w-xs lg:max-w-sm"
          src={thumbnail}
          alt={name}
        ></img>
        <section className="flex flex-col justify-center gap-4 lg:gap-5">
          <h1 className="text-3xl font-bold text-grey1 transition-colors dark:text-grey8 xl:text-4xl">
            {name}
          </h1>
          <p className="font-semibold dark:text-grey6">- {description}</p>
          <p className="text-grey3 dark:text-grey6">{overview}</p>
        </section>
      </section>
    </section>
  );
}

export default Project;
