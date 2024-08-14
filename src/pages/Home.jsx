import { useEffect } from "react";
import WorkoutsContainer from "../components/WorkoutsContainer";
import WorkoutForm from "../components/WorkoutForm";
import useWorkoutsContext from "../hooks/useWorkoutsContext";

const Home = () => {
  const { dispatch } = useWorkoutsContext();

  useEffect(() => {
    const getWorkouts = async () => {
      try {
        const res = await fetch("/api/workouts");
        if (!res.ok) {
          console.log("response is not correct");
        }
        const workouts = await res.json();
        dispatch({
          type: "SET_WORKOUTS",
          payload: workouts.Workouts,
        });
      } catch (error) {
        console.log(error, " this error");
      }
    };

    getWorkouts();
  }, []);

  return (
    <>
      <div className="container">
        <div className="flex sub-container">
          <WorkoutsContainer></WorkoutsContainer>
          <WorkoutForm></WorkoutForm>
        </div>
      </div>
    </>
  );
};

export default Home;
