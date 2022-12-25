import { createContext, useState, useEffect } from "react";

export const authContext = createContext(null);

const AuthProvider = ({ children }) => {
  const auth = localStorage.getItem("auth")
    ? JSON.parse(localStorage.getItem("auth"))
    : {};
  const [authUser, setAuthUser] = useState(auth);
  // const auth = JSON.parse(localStorage.getItem("auth"));
  // useEffect(() => {
  //   console.log("auth", auth);
  //   auth ? setAuthUser(local) : null;
  // }, []);

  return (
    <authContext.Provider value={{ authUser, setAuthUser }}>
      {children}
    </authContext.Provider>
  );
};

export default AuthProvider;
