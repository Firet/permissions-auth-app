import * as React from "react";
import {
  Routes,
  Route,
  useNavigate,
  useLocation,
  Navigate,
} from "react-router-dom";
import { fakeAuthProvider } from "./fakeAuthProvider";
import PublicPage from "../pages/PublicPage";
import ProtectedPage from "../pages/ProtectedPage";
import LoginPage from "../pages/LoginPage";
import { AuthContextType } from "../types/AuthContextType";
import { useAuth } from "../App";


// export const AuthContext = React.createContext<AuthContextType>(null!);

// export function AuthProvider({ children }: { children: React.ReactNode }) {
//   const [user, setUser] = React.useState<any>(null);
//   const [authState, setAuthState] = React.useState({
//     isAuthenticated: false,
//     isAdmin: false,
//   });

//   const signin = (newUser: string, callback: VoidFunction) => {
//     setUser(newUser);
//     if (newUser === 'admin') {
//       return fakeAuthProvider.signinAdmin(() => {
//         setAuthState({
//           isAuthenticated: fakeAuthProvider.isAuthenticated,
//           isAdmin: fakeAuthProvider.isAdmin,
//         });
//         callback();
//       });
//     }
//     return fakeAuthProvider.signin(() => {
//       setAuthState({
//         isAuthenticated: fakeAuthProvider.isAuthenticated,
//         isAdmin: fakeAuthProvider.isAdmin,
//       });
//       callback();
//     });
//   };

//   const signout = (callback: VoidFunction) => {
//     return fakeAuthProvider.signout(() => {
//       setUser(null);
//       setAuthState({
//         isAuthenticated: fakeAuthProvider.isAuthenticated,
//         isAdmin: fakeAuthProvider.isAdmin,
//       });
//       callback();
//     });
//   };

//   const value = { authState, user, signin, signout };

//   return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
// }

// export function useAuth() {
//   return React.useContext(AuthContext);
// }

// export function AuthStatus() {
//   const auth = useAuth();
//   const navigate = useNavigate();

//   if (!auth.user) {
//     return (<p>You are not logged in.</p>);
//   }

//   return (
//     <p>
//       Welcome {auth.user}!{" "}
//       <button
//         onClick={() => {
//           auth.signout(() => navigate("/"));
//         }}
//       >
//         Sign out
//       </button>
//     </p>
//   );
// }