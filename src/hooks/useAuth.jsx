import { useContext } from "react";
import AuthContext from "../contexts/AuthProvider";

import { users, emptyUser } from "../utils/DataUsers";

const useLogout = () => {
  const { setIsLogin, setLoginData } = useContext(AuthContext);

  const logout = () => {
    setIsLogin(false);
    setLoginData(emptyUser);
    
    sessionStorage.clear();
  };

  return logout;
};

const useLogin = () => {
  const { setIsLogin, setLoginData } = useContext(AuthContext);

  const login = (data) => {
    const { token, idUser } = data;
    const userData = data.data;
    
    sessionStorage.setItem("token", token);
    sessionStorage.setItem("id", idUser);
    sessionStorage.setItem("data", JSON.stringify(userData));
    setIsLogin(true);
    setLoginData(userData);
  };

  return login;
};

const useRegister = () => {
  const register = (data) => {
    users.push({
      ...data,
      id: users.length,
      active: 1,
    });
  };

  return register;
};

export { useLogout, useLogin, useRegister };
