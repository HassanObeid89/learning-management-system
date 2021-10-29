import React, { useRef, useState } from "react";
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
      <label>
        Email
        <input type="email" ref={emailRef} required />
      </label>
      {error}
      {message}
      <button onClick={onReset}>Reset Password</button>
    </form>
  );
}
