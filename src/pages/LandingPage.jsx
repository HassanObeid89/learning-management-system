//Npm package
import { Link } from "react-router-dom";

//Project files
import LandingBar from "../components/LandingBar";
import hero from "../assets/images/hero-LMS.png";

export default function LandingPage() {
  return (
    <div>
      <LandingBar />
      <section>
        <p>Build Your Skills With Flexible Online Courses</p>
        <Link to="/sign-up">Sign Up</Link>
      </section>
      <img src={hero} alt="" />
    </div>
  );
}
