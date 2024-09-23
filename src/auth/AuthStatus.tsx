import { useAuth } from "../App";
import Logout from "../components/Logout/Logout";

export function AuthStatus() {
    const auth = useAuth();

    if (!auth.user) {
        return <p>You are not logged in.</p>;
    }

    return (
        <Logout />
    );
}