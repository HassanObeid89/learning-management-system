//NPM packages
import { Route } from "react-router";

//Project files
import SideBar from "../components/SideBar";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import CoursesPage from "../pages/CoursesPage";
import FormAddCourse from "../components/FormAddCourse";
import CoursePage from "../pages/CoursePage";

export default function Logged() {
  return (
    <>
      <Route component={CoursesPage} exact path="/" />
      <Route component={SignIn} path="/sign-in" />
      <Route component={SignUp} path="/sign-up" />
      <Route component={FormAddCourse} path="/add-course/:id" />
      <Route component={CoursePage} path="/course-page/:id" />

      {/* Sidebar is a route? -1 */}
      <Route component={SideBar} />
    </>
  );
}
