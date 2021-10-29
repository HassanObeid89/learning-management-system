import { Link } from "react-router-dom";

export default function LandingBar() {
  return (
    <nav className="landing-bar">
      <h1>LMS</h1>
      <Link to="/sign-in">Sign In</Link>
    </nav>
  );
}
