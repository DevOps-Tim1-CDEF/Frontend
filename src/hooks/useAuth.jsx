import { useContext } from "react";
import AuthContext from "../contexts/AuthProvider";

import { emptyUser } from "../utils/DataUsers";

const useLogout = () => {
  const { setIsLogin, setLoginData } = useContext(AuthContext);

  const logout = () => {
    setIsLogin(false);
    setLoginData(emptyUser);
  }

  return logout;
}

const useLogin = () => {
  const { setIsLogin, setLoginData } = useContext(AuthContext);

  const login = (data) => {
    setIsLogin(true);
    setLoginData(data);
  }

  return login;
}

export { useLogout, useLogin };
