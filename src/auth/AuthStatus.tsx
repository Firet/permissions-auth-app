import Logout from "../components/Logout/Logout";
import { useAuth } from "../hooks/useAuth";

export function AuthStatus() {
    const auth = useAuth();

    if (!auth.user) {
        return <p>You are not logged in.</p>;
    }

    return (
        <Logout />
    );
}