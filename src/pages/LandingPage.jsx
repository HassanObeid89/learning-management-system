//Npm package
import { Link } from "react-router-dom";

//Project files
import LandingBar from "../components/LandingBar";
import hero from "../assets/images/hero-LMS.png";

export default function LandingPage() {
  return (
    <div className='landing-page'>
      <p>
        Build Your Skills! With Flexible Online Programing  Courses
      </p>
      <img src={hero} alt="" />
      <Link className="button-main" to="/sign-up">
        Sign Up
      </Link>
    </div>
  );
}
