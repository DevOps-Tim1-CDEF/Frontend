import { useContext } from "react";
import AuthContext from "../contexts/AuthProvider";

import { users, emptyUser } from "../utils/DataUsers";

const useLogout = () => {
  const { setIsLogin, setLoginData } = useContext(AuthContext);

  const logout = () => {
    setIsLogin(false);
    setLoginData(emptyUser);
  };

  return logout;
};

const useLogin = () => {
  const { setIsLogin, setLoginData } = useContext(AuthContext);

  const login = (data) => {
    setIsLogin(true);
    setLoginData(data);
  };

  return login;
};

const useRegister = () => {
  const { setRegistrationData } = useContext(AuthContext);

  const register = (data) => {
    users.push({
      ...data,
      id: users.length,
      active: 1,
    });

    setRegistrationData(data);
  };

  return register;
};

export { useLogout, useLogin, useRegister };
