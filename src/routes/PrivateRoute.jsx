// import React from "react";
// import { Navigate, useLocation } from "react-router";
// import Loading from "../components/Loading";
// import { useAuth } from "../hooks/useAuth";
// const PrivateRoute = ({ children }) => {
//   const {user,loading} = useAuth()
//   const location = useLocation();

//   if (loading) {
//     return <Loading />;
//   }

//   if (!user) {
//     return <Navigate to="/login" state={location.pathname} replace />;
//   }

//   return children;
// };

// export default PrivateRoute;

//{ from: location }

// import { Navigate, useLocation } from "react-router";
// import Loading from "../components/Loading";
// import { useAuth } from "../hooks/useAuth";

// const PrivateRoute = ({ children }) => {
//  const { user, loading } = useAuth();

//   const location = useLocation();

//   if (loading) {
//     return <Loading />;
//   }

//   if (!user) {
//     return (
//       <Navigate
//         to="/login"
//         state={{ from: location }}
//         replace
//       />
//     );
//   }

//   return children;
// };

// export default PrivateRoute;


import { Navigate, useLocation } from "react-router";
import Loading from "../components/Loading";
import useAuth from "../hooks/useAuth"; 

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return <Loading />;
  }

  if (!user) {
    return (
      <Navigate
        to="/login"
        state={{ from: location }}
        replace
      />
    );
  }

  return children;
};

export default PrivateRoute;