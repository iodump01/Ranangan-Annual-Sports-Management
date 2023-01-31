import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ isAdmin }) => {
  const { isLoggedIn } = useSelector((state) => state.user);

  // If authorized, return an outlet that will render child elements
  // If not, return element that will navigate to login page
  if (isLoggedIn === false) {
    return <Navigate to="/login" />;
  }
  if (isAdmin === true) {
    return <Navigate to="/login" />;
  }
  return <Outlet />;
};

export default ProtectedRoute;
