import { useUser } from "../state/UserProvider";
import LandingBar from "../components/LandingBar";
import hero from "../assets/images/hero-LMS.png";
import { Link } from "react-router-dom";
export default function LandingPage() {
  const { user } = useUser();
  console.log("landing page", user);
  return (
    <div>
      <LandingBar />
      <section >
      <p>Build Your Skills With Flexible Online Courses</p>
      <Link to="/sign-up">
        <button>Sign Up</button>
      </Link>
      </section>
      <img src={hero} alt="" />
    </div>
  );
}
