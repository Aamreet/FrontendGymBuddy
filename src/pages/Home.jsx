import  { useContext, useEffect, useRef, useState } from "react";
import WorkoutsContainer from "../components/WorkoutsContainer";
import WorkoutForm from "../components/WorkoutForm";
import Nav from "../components/Nav";
import useWorkoutsContext from "../hooks/useWorkoutsContext";

const Home = () => {
   const {dispatch}= useWorkoutsContext();
  const [workoutList, setWorkoutList] = useState([]);
  const title = useRef("");
  const load = useRef("");
  const reps = useRef("");

  useEffect(() => {
    const getWorkouts = async () => {
      try {
        const res = await fetch("/api/workouts");
        if (!res.ok) {
          console.log("response is not correct");
        }
        const workouts = await res.json();

        dispatch({
            type:"SET_WORKOUTS",
            payload: workouts.Workouts
        });

        // setWorkoutList(workouts.Workouts);
      } catch (error) {
        console.log(error, " this error");
      }
    };

    getWorkouts();
  }, []);

  const workoutFormSubmit = async (e) => {
    e.preventDefault();
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

      const data = await res.json();
      if (!res.ok) {
        throw new Error("invalid create query");
      }
      setWorkoutList((currentWorkoutList) => {
        return [data, ...currentWorkoutList];
      });
    } catch (error) {
      console.log(errror);
    }
  };
  return (
    <>
      <div className="container">
        <div className="flex sub-container">
          <WorkoutsContainer workoutList={workoutList} setWorkoutList={setWorkoutList}></WorkoutsContainer>
          <WorkoutForm workoutFormSubmit={workoutFormSubmit} title={title} load={load} reps={reps}></WorkoutForm>
        </div>
      </div>
    </>
  );
};

export default Home;