import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { AuthProvider } from "./state/AuthProvider";
import { CourseProvider } from "./state/CourseProvider";
import { UserProvider } from "./state/UserProvider";

ReactDOM.render(
  <AuthProvider>
    <UserProvider>
      <CourseProvider>
      <App />
      </CourseProvider>
    </UserProvider>
  </AuthProvider>,
  document.getElementById("root")
);
