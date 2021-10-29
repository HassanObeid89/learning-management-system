//NPM packages
import { Route } from "react-router";

//Project files
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import LandingPage from "../pages/LandingPage";
import ForgotPassword from "../pages/ForgotPassword";
import LandingBar from "../components/LandingBar";

export default function UnLogged() {
  return (
    <>
      <LandingBar />
      <Route component={LandingPage} exact path="/" />
      <Route component={SignIn} path="/sign-in" />
      <Route component={SignUp} path="/sign-up" />
      <Route component={ForgotPassword} path="/forgot-password" />
    </>
  );
}
