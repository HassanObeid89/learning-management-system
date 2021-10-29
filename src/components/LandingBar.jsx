import { Link } from "react-router-dom";

export default function LandingBar() {
  return (
    <nav className="landing-bar">
      <h1>
        L<span>M</span>S
      </h1>
      <Link className="button-secondary" to="/sign-in">
        Sign In
      </Link>
    </nav>
  );
}
