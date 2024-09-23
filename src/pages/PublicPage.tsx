import { Link, Outlet } from "react-router-dom";
import { useAuth } from "../App";
import Dashboard from "../components/Dashboard/Dashbaord";

export default function PublicPage() {
  const auth = useAuth();

  return (
    <>
      <h3>Public</h3>
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
        <Dashboard />

        <Outlet />
      </div>
    </>
  )

}