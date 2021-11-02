//NPM packages
import { useState, useCallback, useEffect } from "react";
import { getDocument } from "./scripts/firestore";

//Project files
import Browser from "./components/Browser";
import { useAuth } from "./state/AuthProvider";
import { useUser } from "./state/UserProvider";
import { getCollection } from "./scripts/firestore";
import { useCourse } from "./state/CoursesProvider";
import "./css/style.css";

export default function App() {
  // Global state
  const { uid, setIsLogged, isLogged } = useAuth();
  const { dispatchUser } = useUser();
  const { dispatchCourses } = useCourse();

  // Local state
  const [status, setStatus] = useState(1); // 0 pending, 1 ready, 2 error

  // Methods
  // Refactorability, Architecture -1
  // Why are we fetching courses if we aren't logging yet?
  // In this example is "innofensive" but what if is a private education, we can leak data even if you arent a valid user
  // Worst, what if we are working on a bank, we are getting sensitive data even if we aren't valid users.
  const fetchCourses = useCallback(
    async (path) => {
      try {
        const courses = await getCollection(path);
        dispatchCourses({ type: "SET_COURSES", payload: courses });
        setStatus(1);
      } catch {
        setStatus(2);
      }
    },

    [dispatchCourses]
  );

  const fetchUser = useCallback(
    async (path, uid) => {
      if (uid === "no user") {
        setStatus(1);
      } else if (uid !== "") {
        const user = await getDocument(path, uid);
        dispatchUser({ type: "SET_USER", payload: user });
        setIsLogged(true);
      }
    },
    [dispatchUser, setIsLogged]
  );

  useEffect(() => {
    fetchCourses("courses");
    fetchUser("users", uid);
  }, [fetchUser, uid, fetchCourses]);

  return (
    <div className="App">
      {status === 0 && <p>loading...</p>}
      {status === 1 && <Browser isLogged={isLogged} />}
      {status === 2 && <p>Error...</p>}
    </div>
  );
}
