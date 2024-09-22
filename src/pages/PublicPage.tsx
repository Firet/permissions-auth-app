import { Link, Outlet } from "react-router-dom";
import { AuthStatus, useAuth } from "../App";
import { useEffect } from "react";
import fetchData from "../utils/fetch";

export default function PublicPage() {
  let auth = useAuth();

  useEffect(() => {
    fetchData('');
  }, []);

  return (
    <>
      <h3>Public</h3>
      <AuthStatus />
      <div>
        {auth.user && <h3>auth user is: {auth.user}</h3>}

        <ul>
          <li>
            <Link to="/login">Login </Link>
          </li>
          <li>
            <Link to="/protected">Protected Page (admin) </Link>
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