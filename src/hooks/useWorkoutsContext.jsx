import { useContext } from "react";
import { WorkoutsContext } from "../context/WorkoutsContext";

const useWorkoutsContext = () => {
  const context = useContext(WorkoutsContext);

  if (!context) {
    throw new Error(
      "useWorkoutsContext must be used inside a WorkoutsContextProvider"
    );
  }
  return context;
};

export default useWorkoutsContext;
