import { createContext, useReducer } from "react";

export const WorkoutsContext = createContext();

const workoutsReducer = (state, action)=>{
    // console.log(action.type);
    switch (action.type) {
        case "SET_WORKOUTS":
            // console.log(" set workouts")
            return {
                workouts: action.payload
            }
            break;
        default:
            break;
    }
}


const WorkoutsContextProvider = ({children})=>{
    const [state, dispatch] = useReducer(workoutsReducer, {
        workouts:[]
    });
    return (
        <>
          <WorkoutsContext.Provider value={{...state, dispatch}}>
            {children}
          </WorkoutsContext.Provider>
        </>
    )
}

export default WorkoutsContextProvider;