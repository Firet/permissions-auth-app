import { Link, Outlet } from "react-router-dom";
import { AuthStatus, useAuth } from "../App";

export default function ProtectedPage() {
  let auth = useAuth();
  return (
    <>
      <h3>Protected</h3>
      <AuthStatus />
      <div>
        {auth.user && <h3>auth user is: {auth.user}</h3>}
        {auth.user === 'admin' && <h3>esto es re de admin porque auth user is: {auth.user}</h3>}
        <ul>
          <li>
            <Link to="/login">Log in </Link>
          </li>
          <li>
            <Link to="/public">Public Page (common user) </Link>
          </li>
          <li>
            <Link to="/3"> ir a 3 </Link>
          </li>
          <li>
            <Link to="/admin"> ir a admin </Link>
          </li>
        </ul>

        <Outlet />
      </div>
    </>
  )
}