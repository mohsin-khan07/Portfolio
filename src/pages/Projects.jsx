import { Link } from "react-router-dom";

function Projects() {
  const projectName = "aqua-swap";
  return <Link to={`/projects/${projectName}`}>Take</Link>;
}

export default Projects;
