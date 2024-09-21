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
        <ul>
          <li>
            <Link to="/login">Log in </Link>
          </li>
          <li>
            <Link to="/public">Public Page (common user) </Link>
          </li>
        </ul>

        <Outlet />
      </div>
    </>
  )
}