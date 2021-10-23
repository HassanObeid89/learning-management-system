//NPM packages
import { Route } from "react-router";

//Project files
import SideBar from '../components/SideBar';
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import CourcesPage from "../pages/CourcesPage";
export default function Logged() {
  return (
    <>
      <Route component={SideBar}/>
      <Route component={CourcesPage} exact path="/" />
      <Route component={SignIn} path="/sign-in" />
      <Route component={SignUp} path="/sign-up" />
    </>
  );
}
