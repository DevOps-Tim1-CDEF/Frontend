import { createContext, useState } from "react";

import { baseUrl } from "../utils/format";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [loginData, setLoginData] = useState({
    id: 1,
    username: "ask_sob",
    password: "buzidao",
    realname: "Ask Over Bug",
    profile: `${baseUrl}/assets/img/Bug1.jpeg`,
    email: "ask@over.bug",
    active: 1,
  });

  return (
    <AuthContext.Provider value={{ isLogin, setIsLogin, loginData, setLoginData }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
