import React from "react";
import { Redirect, Route } from "react-router";
import useAuth from "../../hooks/useAuth";

const AdminRoute = ({ children, ...rest }) => {
  const { user, isAdmin } = useAuth();
  if (!isAdmin) {
    return (
      <div className="flex items-center justify-center space-x-2">
        <div className="w-8 h-8 rounded-full animate-pulse bg-red-500"></div>
        <div className="w-8 h-8 rounded-full animate-pulse bg-red-500"></div>
        <div className="w-8 h-8 rounded-full animate-pulse bg-red-500"></div>
      </div>
    );
  }
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user.email && isAdmin ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/dashboard",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default AdminRoute;
