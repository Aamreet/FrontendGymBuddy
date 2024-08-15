import { useRef } from "react";
import { useLogin } from "../hooks/useLogin";

const Login = () => {
  const email = useRef("");
  const password = useRef("");
  const { login, isLoading, error } = useLogin();

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    await login(email.current.value, password.current.value);
  };

  return (
    <>
      <form className="flex-item form-container" onSubmit={handleLoginSubmit}>
        <label htmlFor="email">Email:</label>
        <input ref={email} type="text" autoComplete="on"/>
        <label htmlFor="password">password:</label>
        <input ref={password} type="password" />
        <div className="btn-container">
          <button className="btn login-btn" type="submit" disabled={isLoading}>
            Login
          </button>
        </div>
        {error && <p className="error">{error}</p>}
      </form>
    </>
  );
};

export default Login;
