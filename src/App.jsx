//NPM packages
import { BrowserRouter, Switch, Route } from "react-router-dom";

//Project files
import SideBar from "./components/SideBar";
import LandingPage from "./pages/LandingPage";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import StudentPage from "./pages/StudentPage";
import TeacherPage from "./pages/TeacherPage";
import "./css/style.css";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <SideBar />
        <Switch>
          <Route path='/' exact component={LandingPage} />
          <Route path='/sign-up' component={SignUp} />
          <Route path='/sign-in' component={SignIn} />
          <Route path='/student-page' component={StudentPage} />
          <Route path='/teacher-page' component={TeacherPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
