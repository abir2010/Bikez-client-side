import React from "react";
import { useHistory, useLocation } from "react-router";
import useAuth from "../../../hooks/useAuth";

const Login = () => {
  const location = useLocation();
  const history = useHistory();
  const { user, logOut, handleGoogleSignIn } = useAuth();
  return (
    <div>
      {user?.email ? (
        <>
          <button onClick={logOut} className="bg-red-500 p-2 rounded-lg">Log out</button>
          <p className="text-2xl font-bold text-red-400">{user?.displayName}</p>
          <p className="text-xl font-bold text-red-400">{user?.email}</p>
        </>
      ) : (
        <button onClick={()=>handleGoogleSignIn(location,history)} className="bg-red-500 p-2 rounded-lg">Google log in</button>
      )}
    </div>
  );
};

export default Login;
