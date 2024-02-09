function ProjectsSection() {
  return (
    <div className="flex items-center gap-10 px-48 py-8">
      <div className="flex flex-col justify-start gap-6">
        <img className="h-10 w-10" src="github.svg"></img>
        <div className="text-4xl font-bold">Aqua Swap</div>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry standard
        </p>
        <div className="text-grey4 underline">aquaswap.netlify.app</div>
      </div>
      <div className="w-3/4">
        <img src="image.png"></img>
      </div>
    </div>
  );
}

export default ProjectsSection;
