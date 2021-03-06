//NPM packages
import { useState } from "react";
import { useHistory } from "react-router";
import { getDocument } from "../scripts/firestore";

//Project files
import signinFields from "../data/signin-fields.json";
import InputField from "../components/InputField";
import useForm from "../utils/useForm";
import { useUser } from "../state/UserProvider";
import { useAuth } from "../state/AuthProvider";
import { signIn } from "../scripts/Authentication";
import { Link } from "react-router-dom";

export default function SignIn() {
  const [values, handleChange] = useForm();
  const { dispatchUser } = useUser();
  const { setIsLogged } = useAuth();
  const location = useHistory();
  const [errorMessage, setErrorMessage] = useState("");

  //Methods
  async function handleSubmit(event) {
    event.preventDefault();
    setErrorMessage("");
    const account = await signIn(values.email, values.password);

    account.isLogged ? onSuccess(account.payload) : onFailure(account.payload);
  }

  async function onSuccess(uid) {
    const document = await getDocument("users", uid);

    dispatchUser({ type: "SET_USER", payload: document });
    setIsLogged(true);
    location.push("/");
  }

  function onFailure(message) {
    setErrorMessage(message);
  }

  const inputFields = signinFields.map((input) => (
    <InputField options={input} handleChange={handleChange} values={values} />
  ));
  return (
    <form onSubmit={handleSubmit}>
      <h2>Start Learning . . .</h2>
      {inputFields}
      <span className="error-message">{errorMessage}</span>
      <Link to="/forgot-password">Forget Password?</Link>
      <button className="button-main">Sign in</button>
      <Link to="/sign-up">Sign Up</Link>
    </form>
  );
}
