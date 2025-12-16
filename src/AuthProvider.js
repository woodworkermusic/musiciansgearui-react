import { useContext, createContext, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const storageId = "musiciansgearregistry";

    const [user, setUser] = useState(null);
    const [token, setToken] = useState(localStorage.getItem(storageId) || "");

    return (
        <></>
        // <AuthContext.Provider value={{ token, user, loginAction, logOut }}>
        // {children}
        // </AuthContext.Provider>
    );

};

export default AuthProvider;

export const useAuth = () => {
  return useContext(AuthContext);
};
