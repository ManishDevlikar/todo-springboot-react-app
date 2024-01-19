import { createContext, useContext, useState } from "react";
import { executeBasicAuthenticationService } from "../api/TodoApiService";
import { baseUrl } from "../api/ApiClient";

// Create a contex
export const AuthContex = createContext();

// if any component want to use auth contex they can use useAuth hook
export const useAuth = () => useContext(AuthContex);

// put some state into contex

// share the created contex with other componenet. to achieve this we will use
//<AuthContexProvider>...<AuthContexProvider />   as a parent
// {children} all the children under auth provider will assigned to this variable
export default function AuthProvider({ children }) {
  // put some state in contex
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [isAuthenticated, setAuthenticated] = useState(false);

  // function login(username, password) {
  //   if (username === "manish" && password === "zxc") {
  //     setAuthenticated(true);
  //     setUser(username);
  //     return true;
  //   } else {
  //     setAuthenticated(false);
  //     setUser(null);
  //     return false;
  //   }
  // }
  async function login(username, password) {
    // token -> basic authentication token btoa base64 Encoding
    const token = "Basic " + window.btoa(username + ":" + password);
    try {
      const response = await executeBasicAuthenticationService(token).then(
        (res) => res
      );
      setAuthenticated(false);
      if (response.status === 200) {
        console.log("success");
        setToken(token);
        baseUrl.interceptors.request.use((config) => {
          config.headers.Authorization = token;
          return config;
        });
        setAuthenticated(true);
        setUser(username);
        return true;
      } else {
        logout();
        return false;
      }
    } catch (error) {
      logout();
      return false;
    }
  }

  function logout() {
    setToken(null);
    setUser(null);
    setAuthenticated(false);
  }

  return (
    <AuthContex.Provider
      value={{ user, isAuthenticated, token, login, logout }}
    >
      {children}
    </AuthContex.Provider>
  );
}

// here we are creating a contex and
// and then we are setting it up to sharing the contex with children
