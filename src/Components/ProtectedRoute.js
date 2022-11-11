import React, { useContext } from "react";
import { Navigate, Route } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

function ProtectedRoute({ children }) {
  console.log("protected route props", children);

  const { user } = useContext(AuthContext);

  const isAuth = user ? true : false;

  return  <>{ isAuth ? children : <Navigate to="/login" /> }</>;
}

export default ProtectedRoute;
