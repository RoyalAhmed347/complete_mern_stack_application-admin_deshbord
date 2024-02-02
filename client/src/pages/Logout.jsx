import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useAuthHook } from "../context/auth";

const Logout = () => {
  const { UserLogout } = useAuthHook();
  useEffect(() => {
    UserLogout();
  }, [UserLogout]);

  return <Navigate to="/login" />;
};

export default Logout;
