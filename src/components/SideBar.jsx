import { IoHome } from "react-icons/io5";
import { GiBlackBook, GiEntryDoor } from "react-icons/gi";
import { FaVideo } from "react-icons/fa";
import { FcCalendar } from "react-icons/fc";
import { MdDoubleArrow } from "react-icons/md";
export default function SideBar() {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="logo">
        <span className="nav-link">
        <span className="link-text logo-text">LMS</span>
          <MdDoubleArrow />
          </span>
        </li>
        <li>
          <span className="nav-link">
            <IoHome />
            <span className="link-text">Home</span>
          </span>
        </li>
        <li>
          <span className="nav-link">
            <GiBlackBook />
            <span className="link-text">Courses</span>
          </span>
        </li>
        <li>
          <span className="nav-link">
            <FaVideo />
            <span className="link-text">Zoom</span>
          </span>
        </li>
        <li>
          <span className="nav-link">
            <FcCalendar />
            <span className="link-text">Calendar</span>
          </span>
        </li>
        <li>
          <span className="nav-link">
            <GiEntryDoor />
            <span className="link-text">SignOut</span>
          </span>
        </li>
      </ul>
    </nav>
  );
}
