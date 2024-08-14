import React from "react";

const WorkoutForm = ({workoutFormSubmit,title, load, reps}) => {
  return (
    <>
      <form className="flex-item form-container" onSubmit={workoutFormSubmit}>
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
