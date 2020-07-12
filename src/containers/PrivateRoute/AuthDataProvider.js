import React, { createContext, useState, useEffect, useMemo, useContext } from "react";
import someManager from "../some-manager";

export const AuthDataContext = createContext(null);

const initialAuthData = {};

export default AuthDataProvider = props => {
  const [authData, setAuthData] = useState(initialAuthData);

  /* The first time the component is rendered, it tries to
   * fetch the auth data from a source, like a cookie or
   * the localStorage.
   */
  useEffect(() => {
    const currentAuthData = someManager.getAuthData();
    if (currentAuthData) {
      setAuthData(currentAuthData);
    }
  }, []);

  const onLogout = () => setAuthData(initialAuthData);

  const onLogin = newAuthData => setAuthData(newAuthData);

  const authDataValue = useMemo({ ...authData, onLogin, onLogout }, [authData]);

  return <AuthDataContext.Provider value={authDataValue} {...props} />;
};

export const useAuthDataContext = () => useContext(AuthDataContext);

