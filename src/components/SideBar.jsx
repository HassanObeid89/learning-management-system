//NPM Packages
import { Link, useHistory } from "react-router-dom";

//React Icons
import { IoHome } from "react-icons/io5";
import { GiBlackBook, GiEntryDoor } from "react-icons/gi";
import { FaVideo } from "react-icons/fa";
import { FcCalendar } from "react-icons/fc";
import { MdDoubleArrow } from "react-icons/md";
import { useAuth } from "../state/AuthProvider";
import { logout } from "../scripts/Authentication";

export default function SideBar() {
  const { setIsLogged } = useAuth();
  const location = useHistory();
  async function onLogout() {
    await logout();

    setIsLogged(false);
    location.push("/");
  }
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="logo">
          <Link to="/" className="nav-link">
            <span className="link-text logo-text">LMS</span>
            <MdDoubleArrow />
          </Link>
        </li>
        <li>
          <Link to="/" className="nav-link">
            <IoHome />
            <span className="link-text">Home</span>
          </Link>
        </li>
        <li>
          <Link to="/student-page" className="nav-link">
            <GiBlackBook />
            <span className="link-text">Courses</span>
          </Link>
        </li>
        <li>
          <Link to="/" className="nav-link">
            <FaVideo />
            <span className="link-text">Zoom</span>
          </Link>
        </li>
        <li>
          <Link to="/" className="nav-link">
            <FcCalendar />
            <span className="link-text">Calendar</span>
          </Link>
        </li>
        <li>
          <button onClick={onLogout} className="nav-link">
            <GiEntryDoor />
            <span className="link-text">SignOut</span>
          </button>
        </li>
      </ul>
    </nav>
  );
}
