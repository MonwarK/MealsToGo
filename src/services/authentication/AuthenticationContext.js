import React, { useState, createContext, useEffect } from "react";
import * as firebase from "firebase";
import { loginRequest, registerRequest } from "./AuthenticationService";

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const onLogin = (email, password) => {
    setIsLoading(true);
    loginRequest(email, password)
      .then((u) => {
        setUser(u);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err.toString());
      });
  };

  const onRegister = (email, password, repeatedPassword) => {
    setIsLoading(true);
    if (password !== repeatedPassword) {
      setIsLoading(false);
      setError("Passwords do not match");
    } else {
      registerRequest(email, password)
        .then((u) => {
          setIsLoading(false);
          setUser(u);
        })
        .catch((err) => {
          setIsLoading(false);
          setError(err.toString());
        });
    }
  };

  useEffect(() => {
    firebase.auth().onAuthStateChanged((auth) => {
      if (auth) {
        setUser(auth);
      }
    });
  }, []);

  const onLogout = () => {
    setUser(null);
    firebase.auth().signOut();
  };

  return (
    <AuthenticationContext.Provider
      value={{
        user,
        isLoading,
        error,
        onLogin,
        onRegister,
        onLogout,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
