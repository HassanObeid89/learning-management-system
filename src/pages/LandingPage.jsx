import LandingBar from "../components/LandingBar";
import hero from "../assets/images/hero-LMS.png";
import { Link } from "react-router-dom";
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
