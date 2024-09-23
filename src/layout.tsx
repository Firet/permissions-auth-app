import { Outlet } from "react-router-dom";
import { AuthStatus } from "./auth/AuthStatus";

export default function Layout() {
    return (
        <div>
            <h3> Layout</h3>
            <AuthStatus />
            {/* <ul>
                <li>
                    <Link to="/">Public Page</Link>
                </li>
                <li>
                    <Link to="/protected">Protected Page</Link>
                </li>
            </ul> */}
            <Outlet />
        </div>
    );
}
