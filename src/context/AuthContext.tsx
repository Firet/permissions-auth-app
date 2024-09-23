import React from "react";
import { AuthContextType } from "../types/AuthContextType";
import { fakeAuthProvider } from "../auth/fakeAuthProvider";

export const AuthContext = React.createContext<AuthContextType>(null!);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = React.useState<any>(null);
  const [authState, setAuthState] = React.useState({
    isAuthenticated: false,
    isAdmin: false,
  });

  const signin = (newUser: string, callback: VoidFunction) => {
    setUser(newUser);
    if (newUser === 'admin') {
      return fakeAuthProvider.signinAdmin(() => {
        setAuthState({
          isAuthenticated: fakeAuthProvider.isAuthenticated,
          isAdmin: fakeAuthProvider.isAdmin,
        });
        callback();
      });
    }
    return fakeAuthProvider.signin(() => {
      setAuthState({
        isAuthenticated: fakeAuthProvider.isAuthenticated,
        isAdmin: fakeAuthProvider.isAdmin,
      });
      callback();
    });
  };

  const signout = (callback: VoidFunction) => {
    return fakeAuthProvider.signout(() => {
      setUser(null);
      setAuthState({
        isAuthenticated: fakeAuthProvider.isAuthenticated,
        isAdmin: fakeAuthProvider.isAdmin,
      });
      callback();
    });
  };

  const value = { authState, user, signin, signout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

