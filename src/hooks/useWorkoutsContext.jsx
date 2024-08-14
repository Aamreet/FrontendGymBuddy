import { useContext } from "react";
import { WorkoutsContext } from "../context/workoutsContext";

const useWorkoutsContext = () => {
  const context = useContext(WorkoutsContext);

  if (!context) {
    throw Error(
      "useWorkoutsContext must be used inside a WorkoutsContextProvider"
    );
  }
  return context;
};

export default useWorkoutsContext;
