import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { resetPassword } from "../scripts/Authentication";

export default function ForgotPassword() {
  const emailRef = useRef();
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  
  async function onReset(event) {
    event.preventDefault();
    try {
      setMessage("");
      setError("");
      await resetPassword(emailRef.current.value);
      setMessage("Check your inbox for further instructions");
    } catch {
        setError("Failed to reset password")
    }
  }

  return (
    <form>
      <h1>Reset Password</h1>
      <p>Reset your password by typing your Email. </p>
      <label>
        Email
        <input type="email" ref={emailRef} placeholder='example@example.com' required />
      </label>
      {error}
      {message}
      <button onClick={onReset}>Reset Password</button>
      <Link to='/sign-in'>Sign In</Link>
    </form>
  );
}
