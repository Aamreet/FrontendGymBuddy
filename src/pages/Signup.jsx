import React, { useRef } from "react";
import { useSignup } from "../hooks/useSignup";

const Signup = () => {
  const email = useRef("");
  const password = useRef("");
  const { signup, isLoading, error } = useSignup();

  const handleSignupSubmit = async (e) => {
    e.preventDefault();
    await signup(email.current.value, password.current.value);
  };

  return (
    <>
      <form className="flex-item form-container" onSubmit={handleSignupSubmit}>
        <label htmlFor="email">Email:</label>
        <input ref={email} type="text" />
        <label htmlFor="password">password:</label>
        <input ref={password} type="password" autoComplete="current-password" />
        <div className="btn-container">
          <button className="btn signup-btn" type="submit" disabled={isLoading}>
            Signup
          </button>
        </div>
        {error && <p className="error">{error}</p>}
      </form>
    </>
  );
};

export default Signup;
