import { useEffect } from "react";
import WorkoutsContainer from "../components/WorkoutsContainer";
import WorkoutForm from "../components/WorkoutForm";
import useWorkoutsContext from "../hooks/useWorkoutsContext";
import { useAuthContext } from "../hooks/useAuthContext";


const Home = () => {
  console.log(" home started rendering...");
  const { dispatch } = useWorkoutsContext();
  const { user } = useAuthContext();
  console.log("t-1");
  useEffect(() => {
    console.log("t-2");
    const getWorkouts = async () => {
      try {
        const res = await fetch(
          import.meta.env.VITE_BACKEND_URL + "/api/workouts",
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${user.token}`,
            },
          }
        );
        console.log(res);
        const workouts = await res.json();
        if (!res.ok) {
          console.log("response is not correct");
        }
        console.log(workouts, " t-3");
        dispatch({
          type: "SET_WORKOUTS",
          payload: workouts.Workouts,
        });
      } catch (error) {
        console.log(error, " this error");
      }
    };

    getWorkouts();
  }, [dispatch, user]);
  console.log("t-4");
  return (
    <>
      <div>
        <div className="flex flex-wrap-reverse  sub-container ">
          <WorkoutsContainer></WorkoutsContainer>
          <WorkoutForm></WorkoutForm>
        </div>
      </div>
    </>
  );
};

export default Home;
