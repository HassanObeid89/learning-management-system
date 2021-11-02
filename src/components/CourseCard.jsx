import { Link } from "react-router-dom";
import { useUser } from "../state/UserProvider";
import { FaArrowRight } from "react-icons/fa";
import { ImBin } from "react-icons/im";
import { MdModeEditOutline } from "react-icons/md";

export default function CourseCard({ course, onDelete }) {
  const { id, name, description, imgUrl } = course;
  const { user } = useUser();
  return (
    <li>
      <img src={imgUrl} alt="" />
      {/* -1 Main is only used 1 per page to indicate the browser the most important element to focus its attention. Ideal for accesiblity readers */}
      <main>
        <h3>{name}</h3>
        <p>{description}</p>
      </main>

      {/* You can refactor this by creating a component called RoundIconButton and pass only the onClick and the icon (the className is written inside the component) */}
      <footer>
        {user.role === "teacher" && (
          <button className="round-btn" onClick={() => onDelete(id)}>
            <ImBin />
          </button>
        )}
        {user.role === "teacher" && (
          <Link className="round-btn" to={`/add-course/${id}`}>
            <MdModeEditOutline />
          </Link>
        )}
        <Link className="round-btn" to={`/course-page/${id}`}>
          <FaArrowRight />
        </Link>
      </footer>
    </li>
  );
}
