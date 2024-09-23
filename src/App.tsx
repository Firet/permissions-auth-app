import * as React from "react";
import {
  Routes,
  Route,
  useNavigate,
  Navigate,
} from "react-router-dom";
import { fakeAuthProvider } from "./auth/fakeAuthProvider";
import PublicPage from "./pages/PublicPage";
import ProtectedPage from "./pages/ProtectedPage";
import LoginPage from "./pages/LoginPage";
import { AuthContextType } from "./types/AuthContextType";
import { RequireAdminAuth, RequireAuth } from "./auth/RequireAuth";
// import Layout from "./layout";

export default function App() {
  return (
    <AuthProvider>
      <Routes>
        {/* <Route element={<Layout />}> */}
        <Route path="/" element={<PublicPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/public"
          element={
            <PublicPage />
          }
        />
        <Route
          path="/3"
          element={
            <>
              <div>3</div>
              <PublicPage />
            </>
          }
        />
        <Route
          path="/protected"
          element={
            <RequireAuth>
              <ProtectedPage />
            </RequireAuth>
          }
        />
        <Route
          path="/admin"
          element={
            <RequireAdminAuth>
              <div>tenés acceso</div>
            </RequireAdminAuth>
          }
        />
        {/* </Route> */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </AuthProvider>
  );
}

const AuthContext = React.createContext<AuthContextType>(null!);

function AuthProvider({ children }: { children: React.ReactNode }) {
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

export function useAuth() {
  return React.useContext(AuthContext);
}

export function AuthStatus() {
  const auth = useAuth();
  const navigate = useNavigate();

  if (!auth.user) {
    return <p>You are not logged in.</p>;
  }

  return (
    <p>
      Welcome {auth.user}!{" "}
      <button
        onClick={() => {
          auth.signout(() => navigate("/"));
        }}
      >
        Sign out
      </button>
    </p>
  );
}