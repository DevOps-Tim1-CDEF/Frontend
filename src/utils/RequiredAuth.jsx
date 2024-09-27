import { useContext } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import AuthContext from "../contexts/AuthProvider";

import { baseUrl } from "./format";

const RequireAuth = ({ }) => {
  const location = useLocation();

  const { isLogin } = useContext(AuthContext);

  return isLogin ? (
    <Outlet />
  ) : (
    <Navigate to={`${baseUrl}/auth/login`} state={{ from: location }} replace />
  );
};

export default RequireAuth;
