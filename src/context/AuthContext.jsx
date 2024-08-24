import { createContext, useEffect, useReducer } from "react";
// import { useLogout } from "../hooks/useLogout";

export const AuthContext = createContext();
const authReducer = (state, action) => {
  console.log(action.type);
  switch (action.type) {
    case "LOGIN":
      return {
        user: action.payload,
      };
    case "LOGOUT":
      return {
        user: null,
      };

    default:
      return state;
  }
};

const AuthContextProvider = ({ children }) => {
  // const {logout}=useLogout()
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
  });
  useEffect(() => {
    // import.meta.env.VITE_BACKEND_URL
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      const validateUser = async () => {
        console.log("validateUser");
        const res = await fetch(
          import.meta.env.VITE_BACKEND_URL + "/api/user/login/verify",
          {
            method: "post",
            headers: {
              Authorization: `Bearer ${user.token}`,
            },
          }
        );
        console.log(res, "ha ha");
        const flag = await res.text();
        console.log(flag);
        if (flag === "Valid") {
          dispatch({
            type: "LOGIN",
            payload: user,
          });
        } else if (flag === "Invalid") {
          localStorage.removeItem("user");     
          dispatch({type:"LOGOUT"});
          // later add logic to flush workouts array
        }
      };
      validateUser();
    }
    // check if user is valid user or not
  }, []);
  return (
    <>
      <AuthContext.Provider
        value={{
          ...state,
          dispatch,
        }}
      >
        {children}
      </AuthContext.Provider>
    </>
  );
};

export default AuthContextProvider;
