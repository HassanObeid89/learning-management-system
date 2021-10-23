//NPM packages
import { Route } from "react-router";

//Project files
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import TeacherPage from "../pages/TeacherPage";
import StudentPage from '../pages/StudentPage'
export default function Logged() {
  return (
    <>
      <Route component={TeacherPage} exact path="/teacher-page" />
      <Route component={StudentPage} exact path="/student-page" />
      <Route component={SignIn} path="/login" />
      <Route component={SignUp} path="/sign-up" />
    </>
  );
}
