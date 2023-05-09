import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import UserProfile from "../../screens/UserScreen/UserProfile/UserProfile";
const HomePage = () => {
  const navigate = useNavigate();
  const user = localStorage.getItem("userId");
  useEffect(() => {
    if (user) {
      navigate("/");
    } else {
      navigate("/login");
    }
  }, []);
  return (
    <div>
      <UserProfile />
    </div>
  );
};

export default HomePage;
