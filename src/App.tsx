import * as React from "react";
import {
  Routes,
  Route,
  useNavigate,
  useLocation,
  Navigate,
} from "react-router-dom";
import { fakeAuthProvider } from "./auth";
import PublicPage from "./pages/PublicPage";
import ProtectedPage from "./pages/ProtectedPage";
import LoginPage from "./pages/LoginPage";
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

interface AuthContextType {
  authState: any,
  user: string | null;
  signin: (user: string, callback: VoidFunction) => void;
  signout: (callback: VoidFunction) => void;
}

let AuthContext = React.createContext<AuthContextType>(null!);

function AuthProvider({ children }: { children: React.ReactNode }) {
  let [user, setUser] = React.useState<any>(null);
  const [authState, setAuthState] = React.useState({
    isAuthenticated: false,
    isAdmin: false,
  });

  let signin = (newUser: string, callback: VoidFunction) => {
    return fakeAuthProvider.signin(() => {
      setUser(newUser);
      setAuthState({
        isAuthenticated: true,
        isAdmin: newUser === 'admin' ? true : false,
      });
      callback();
    });
  };

  let signout = (callback: VoidFunction) => {
    return fakeAuthProvider.signout(() => {
      setUser(null);
      setAuthState({
        isAuthenticated: false,
        isAdmin: false
      });
      callback();
    });
  };

  let value = { authState, user, signin, signout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return React.useContext(AuthContext);
}

export function AuthStatus() {
  let auth = useAuth();
  let navigate = useNavigate();


  console.log('authState ', auth)
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

function RequireAuth({ children }: { children: JSX.Element }) {
  let auth = useAuth();
  let location = useLocation();

  if (!auth.user) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}


function RequireAdminAuth({ children }: { children: JSX.Element }) {
  let auth = useAuth();

  if (!auth.authState.isAdmin) {
    return <div> No tenés acceso </div>;
  }
  return children;
}