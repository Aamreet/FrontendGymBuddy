import { RiDeleteBin6Line } from "react-icons/ri";
import useWorkoutsContext from "../hooks/useWorkoutsContext";

const Card = ({ workout }) => {
  const { deleteWorkoutHandler } = useWorkoutsContext();
  return (
    <div className="card flex">
      <ul>
        <li key={`${workout.title}-title`}>{workout.title}</li>
        <li key={`${workout.title}-load`}>{workout.load}</li>
        <li key={`${workout.title}-reps`}>{workout.reps}</li>
      </ul>
      <RiDeleteBin6Line
        id={workout._id}
        className="trash-icon"
        color="red"
        onClick={deleteWorkoutHandler}
      ></RiDeleteBin6Line>
    </div>
  );
};

export default Card;
