import React, { useEffect, useState } from "react";
import Card from "./components/Card";

const App = () => {
  const [workoutList, setWorkoutList] = useState([]);
  useEffect(() => {
    const getWorkouts = async () => {
      try {
        const res = await fetch("/api/workouts");
        if (!res.ok) {
          console.log("response is not correct");
        }
        console.log(res);
        const workouts = await res.json();
        console.log(workouts);
        setWorkoutList(workouts.Workouts);
        console.log("new wkl", workoutList);
      } catch (error) {
        console.log(error, " this error");
      }
    };

    getWorkouts();
  }, []);
  // const handleSubmit = async(e)=>{
  //    e.preventDefault();
  //    try {
  //      const res =await fetch();
  //    } catch (error) {

  //    }
  // }
  return (
    <>
      <div className="container">
        <h1 className="header">Workout Buddy</h1>
        <form className="form-container">
          <label htmlFor="title">Title:</label>
          <input type="text" />
          <label htmlFor="load">Load:</label>
          <input type="text" />
          <label htmlFor="reps">Reps:</label>
          <input type="text" />
          <button>Add Workout</button>
        </form>
      </div>
      <div className="container card-container">
        {workoutList.length > 0 ? (
          workoutList.map((workout, index) => {
            //  <li>{workout.title}</li>
            //  <li>{workout.load}</li>
            //  <li>{workout.reps}</li>
            // problem is that map return the transformed value and here we need to return all three lis
            // so use the below way
            {
              console.log(workout.title);
            }
            return <li key={index}>{workout.title}</li>;
          })
        ) : (
          <p>No workout found</p>
        )}
      </div>
    </>
  );
};

export default App;


