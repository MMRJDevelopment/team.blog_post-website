import React from "react";
import { Navigate, Outlet } from "react-router";

const ProtectedRoutes = () => {
  const isUser = localStorage.getItem("user"); // fetch the user info
  // for logout
  /**
   * localStorage.removeItem("user");
   * reload your current page
   */
  if (!isUser) return <Navigate to="/login" />;
  return <Outlet />;
};

export default ProtectedRoutes;
