import {
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import PublicPage from "./pages/PublicPage";
import ProtectedPage from "./pages/ProtectedPage";
import LoginPage from "./pages/LoginPage";
import { RequireAdminAuth, RequireAuth } from "./auth/RequireAuth";
import Layout from "./layout";
import { AuthProvider } from "./context/AuthContext";

export default function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route element={<Layout />}>
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
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </AuthProvider>
  );
}