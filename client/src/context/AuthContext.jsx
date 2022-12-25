import { createContext, useState, useEffect } from "react";

const authContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
  //   useEffect(() => {
  //     (async () => {
  //       const res = await fetch("http://localhost:5000/auth/login");
  //     })();
  //   }, []);

  return <authContext.Provider value={user}>{children}</authContext.Provider>;
};

export default AuthProvider;
