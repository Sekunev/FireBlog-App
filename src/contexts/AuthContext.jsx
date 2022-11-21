import { createContext, useContext, useEffect, useState } from "react";
import { userObserver } from "../helpers/firebase";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrenUser] = useState(false);
  useEffect(() => {
    userObserver(setCurrenUser);
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  return useContext(AuthContext);
};

export default AuthProvider;
