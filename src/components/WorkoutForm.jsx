import { useRef } from "react";
import useWorkoutsContext from "../hooks/useWorkoutsContext";

const WorkoutForm = () => {
  const { addWorkoutHandler } = useWorkoutsContext();
  const title = useRef("");
  const load = useRef("");
  const reps = useRef("");
  return (
    <>
      <form
        className="flex-item form-container order-1 tab:order-2 mx-auto  w-[90%]  tab:w-[40%] lapi:w-[30%]"
        onSubmit={(e) => {
          e.preventDefault();
          addWorkoutHandler(title, load, reps);
          title.current.value = "";
          load.current.value = "";
          reps.current.value = "";
        }}
      >
        <label htmlFor="title">Title:</label>
        <input ref={title} type="text" />
        <label htmlFor="load">Load in kg:</label>
        <input ref={load} type="text" />
        <label htmlFor="reps">No of Reps:</label>
        <input ref={reps} type="text" />
        <div className="btn-container">
          <button className="btn add-workout-btn" type="submit">
            Add Workout
          </button>
        </div>
      </form>
    </>
  );
};

export default WorkoutForm;
