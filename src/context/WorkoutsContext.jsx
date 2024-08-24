import { createContext, useReducer } from "react";
import { useAuthContext } from "../hooks/useAuthContext";

export const WorkoutsContext = createContext();

const workoutsReducer = (state, action) => {
  switch (action.type) {
    case "SET_WORKOUTS":
      return {
        workouts: action.payload,
      };
    case "ADD_WORKOUT":
      return {
        workouts: [action.payload, ...state.workouts],
      };
    case "DELETE_WORKOUT":
      return {
        workouts: state.workouts.filter((workout) => {
          if (workout._id !== action.payload) {
            return workout;
          }
        }),
      };
    default:
      break;
  }
};

const WorkoutsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(workoutsReducer, {
    workouts: [],
  });
  const {user}= useAuthContext();

  /*          workoutHandlers       */
  const addWorkoutHandler = async (title, load, reps) => {
    try {
      const res = await fetch(import.meta.env.VITE_BACKEND_URL+"/api/workouts", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${user.token}`
        },
        body: JSON.stringify({
          title: title.current.value,
          load: parseInt(load.current.value),
          reps: reps.current.value,
        }),
      });
      if (!res.ok) {
        throw new Error("invalid create query");
      }
      const data = await res.json();
      dispatch({
        type: "ADD_WORKOUT",
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const deleteWorkoutHandler = async (e) => {
    const _id = e.currentTarget.id;
    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/workouts/${_id}`, {
        method: "delete",
        headers: {
          'Authorization': `Bearer ${user.token}`
        }
      });
      if (!res.ok) {
        throw new Error("Failed to delete workout");
      }

      dispatch({
        type: "DELETE_WORKOUT",
        payload: _id,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <WorkoutsContext.Provider
        value={{ ...state, dispatch, addWorkoutHandler, deleteWorkoutHandler }}
      >
        {children}
      </WorkoutsContext.Provider>
    </>
  );
};

export default WorkoutsContextProvider;
