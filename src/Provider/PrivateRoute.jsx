import React, { use } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate, useLocation } from "react-router";
import Loading from "../Pages/Loading";

const PrivateRoute = ({ children }) => {
  const { user, loading, setLoading } = use(AuthContext);
  
  const location = useLocation()

  console.log(location);

    if (loading) {
        return <Loading />;

  }

  if (user && user.email) {
    return children;
  }
  // if-> user thake return children
  // navigate to log In
  return <Navigate state={location.pathname} to="/auth/login"></Navigate>;
};

export default PrivateRoute;
