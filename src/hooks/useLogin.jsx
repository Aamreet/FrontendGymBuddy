import { useState } from "react";
import { useAuthContext } from "./useAuthContext";


export const useLogin = () => {
    const [isLoading, setIsLoading]= useState(false);
    const [error, setError]= useState("");
    const {dispatch} = useAuthContext();

    const login =async (email, password)=>{
         setIsLoading(true);
         const res = await fetch("/api/user/login",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({email, password})
         });
         const json= await res.json();
         if(!res.ok){
            setIsLoading(false);
            setError(json.error);
            return;// because if response is not ok then below code should not work
         }
         dispatch({
            type:"LOGIN",
            payload: json
         });
         localStorage.setItem("user", JSON.stringify(json));
         setIsLoading(false);
    }
    return {login, isLoading, error};
}
