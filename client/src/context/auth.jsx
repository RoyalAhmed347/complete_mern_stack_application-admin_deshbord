import { createContext, useContext, useEffect, useState } from "react";
import Cookies from "js-cookie";
import axios from "axios";
const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(Cookies.get("token"));
  const [cruntUser, setCruntUser] = useState("");

  const isLoggedIn = !!token;

  const setCookieToken = (token) => {
    setToken(token);
    return Cookies.set("token", token, { expires: 4 });
  };
  const UserLogout = () => {
    setToken("");
    setCruntUser("");
    return Cookies.remove("token");
  };

  useEffect(() => {
    getUserData();
  }, [token]);

  const getUserData = async () => {
    try {
      const result = await axios({
        method: "GET",
        url: "http://localhost:3001/api/auth/user",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setCruntUser(result.data);
    } catch (error) {
      console.log(`data fetching error`);
    }
  };
  return (
    <AuthContext.Provider
      value={{ isLoggedIn, UserLogout, token, cruntUser, setCookieToken }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuthHook = () => {
  return useContext(AuthContext);
};
export { AuthContext, AuthProvider, useAuthHook };
