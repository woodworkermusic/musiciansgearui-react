import { useContext, createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import ApiService from "./services/apiservice.ts";
import { ApiMethod } from "./enums/apimethod.ts";
import { jwtDecode } from 'jwt-decode';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const storageId = "musiciansgearregistry";

    const [user, setUser] = useState(null);
    const [token, setToken] = useState(localStorage.getItem(storageId) || "");

    const navigate = useNavigate();

    const loginAction = async (data) => {
        try {
            ApiService.send("Access/Login", ApiMethod.post, data)
                .then((response)=> {
                    setUser(response.data.user);
                    setToken(response.token);

                    let decodedToken = jwtDecode(response);
                    
                    localStorage.setItem(storageId, response.token);
                    // navigate("/dashboard");
                });

        } catch (err) {
            console.error(err);
        }
    };

    const logOut = () => {
        setUser(null);
        setToken("");
        localStorage.removeItem(storageId);
        navigate("/login");
    };

    return (
        <AuthContext.Provider value={{ token, user, loginAction, logOut }}>
        {children}
        </AuthContext.Provider>
    );

};

export default AuthProvider;

export const useAuth = () => {
  return useContext(AuthContext);
};
