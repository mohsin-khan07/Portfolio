import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Link to="/">
      <img src="logo.svg" alt="Mohsin Logo"></img>
    </Link>
  );
}
