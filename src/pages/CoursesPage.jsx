//Npm package
import { Link } from "react-router-dom";

//Project files
import CourseCard from "../components/CourseCard";
import { useCourse } from "../state/CoursesProvider";
import { useUser } from "../state/UserProvider";
import { deleteDocument } from "../scripts/firestore";
import { ImPlus } from "react-icons/im";

// Readability Naming -1
// Change this name as Home, Dashboard, etc as CoursePage and CoursesPage are to similar and thus, error prone.
export default function CoursesPage() {
  const { courses, dispatchCourses } = useCourse();
  const { user } = useUser();

  async function onDelete(id) {
    prompt("Are You Sure?"); // are you sure of what? (what happens if you leave the desk for a while and come back and don't remember your last action)
    await deleteDocument("courses", id);
    const updated = courses.filter((course) => course.id !== id);

    alert("deleted");
    dispatchCourses({ type: "SET_COURSES", payload: updated });
  }

  // Naming -1
  // Should be Courses plural and uppercase.
  // Plural because is an array of items, does not matter if the array is empty (as is impossible to know if is)
  // Uppercase because they are React JSX code and we need to differenciate from normal JS code.
  const course = courses.map((course) => (
    <CourseCard key={course.id} onDelete={onDelete} course={course} />
  ));

  return (
    <div className="courses-page">
      {/* Tip: This is just a personal preference but... this is useless 🤣 */}
      {user.role === "teacher" ? <h2>Courses</h2> : <h2>Your Courses</h2>}

      <ul>{course}</ul>

      {/* Important note (this does not reduce points) */}
      {/* There is an ongoing discussion about if the same page for students should have code for the teacher or if the teacher must have a separate page */}
      {/* Props: Less code to write */}
      {/* Const: If you forget the boolean, you can expose sensitive info or actions.  */}
      {user.role === "teacher" && (
        <section className="round-btn">
          <Link to="/add-course/new-course">
            <ImPlus />
          </Link>
        </section>
      )}
    </div>
  );
}
