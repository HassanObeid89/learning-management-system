import SideBar from "./components/SideBar";
import LandingPage from "./pages/LandingPage";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import StudentPage from "./pages/StudentPage";
import TeacherPage from "./pages/TeacherPage";
import './css/style.css'

export default function App() {
  return (
    <div className="App">
      <SideBar />
      <LandingPage />
      <SignUp />
      <SignIn />
      <StudentPage />
      <TeacherPage />
    </div>
  );
}
