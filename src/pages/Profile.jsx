import React, { useEffect, useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import PCard from "../components/PCard";

const Profile = () => {
    const { user } = useAuthContext();
  const [userName, setUserName] = useState("Sample");
  useEffect(() => {
    const getAProfile = async () => {
      try {
        const res = await fetch(
          import.meta.env.VITE_BACKEND_URL + "/api/profile",{
            headers:{
                Authorization:`Bearer ${user.token}`
            }
          }
        );
        const profile = await res.json();
        console.log(profile);
        setUserName(profile.email);
      } catch (error) {
        console.log(error);
      }
    };
    getAProfile();
  }, []);
  return <PCard userName = {userName}>
  </PCard>;
};

export default Profile;
