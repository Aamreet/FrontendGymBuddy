import { createContext, useReducer } from "react";

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

  /*          workoutHandlers       */
  const addWorkoutHandler = async (title, load, reps) => {
    try {
      const res = await fetch("/api/workouts", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
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
      console.log(errror);
    }
  };

  const deleteWorkoutHandler = async (e) => {
    // console.log(e.currentTarget.id);
    const _id = e.currentTarget.id;
    try {
      const res = await fetch(`/api/workouts/${_id}`, {
        method: "delete",
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
