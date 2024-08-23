import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export const useLogin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const { dispatch } = useAuthContext();

  const login = async (email, password) => {
    try {
      setIsLoading(true);
      const res = await fetch(
        import.meta.env.VITE_BACKEND_URL + "/api/user/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );
      const json = await res.json();
      if (!res.ok) {
        setIsLoading(false);
        setError(json.error);
        return; // because if response is not ok then below code should not work
      }
      dispatch({
        type: "LOGIN",
        payload: json,
      });
      localStorage.setItem("user", JSON.stringify(json));
      setIsLoading(false);
    } catch (error) {
      console.log(`error-msg:${error}`);
    }
  };
  return { login, isLoading, error };
};
