//NPM packages
import { Route } from "react-router";

//Project files
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import LandingPage from '../pages/LandingPage'
export default function UnLogged() {
  return (
    <>
      <Route component={LandingPage} exact path="/" />
      <Route component={SignIn} path="/sign-in" />
      <Route component={SignUp} path="/sign-up" />
    </>
  );
}
