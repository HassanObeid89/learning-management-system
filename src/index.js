import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { AuthProvider } from "./state/AuthProvider";
import { CoursesProvider } from "./state/CoursesProvider";
import { UserProvider } from "./state/UserProvider";

ReactDOM.render(
  <AuthProvider>
    <UserProvider>
      <CoursesProvider>
        <App />
      </CoursesProvider>
    </UserProvider>
  </AuthProvider>,
  document.getElementById("root")
);
