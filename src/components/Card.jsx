import { RiDeleteBin6Line } from "react-icons/ri";

const Card = ({ workout, setWorkoutList }) => {
    const deleteWorkoutHandler = async(e)=>{
        // console.log(e.currentTarget.id);
        const _id = e.currentTarget.id;
        try {
            const res = await fetch(`/api/workouts/${_id}`,{
                method:"delete"
            });
            if(!res.ok) {
                throw new Error("Failed to delete workout");
            }

            setWorkoutList(currWorkoutList =>{
                let newWorkoutList = [...currWorkoutList];
                //  currWorkoutList.filter(workout =>{
                //     if(workout._id !== _id) return workout;
                // }) // we should not do this as we know currVal in functinal updates should be immutable
                return newWorkoutList.filter(workout => {
                    if(workout._id !== _id) return workout;
                });
            });

        } catch (error) {
            console.log(error)
        }
    }
  return (
    <div className="card flex" >
      <ul>
        <li key={`${workout.title}-title`} >{workout.title}</li>
        <li key={`${workout.title}-load`}>{workout.load}</li>
        <li key={`${workout.title}-reps`}>{workout.reps}</li>
      </ul>
      <RiDeleteBin6Line id={workout._id} className="trash-icon" color="red" onClick={deleteWorkoutHandler}></RiDeleteBin6Line>
    </div>
  );
};

export default Card;
