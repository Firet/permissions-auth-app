import Logout from "../components/Logout/Logout";
import { useAuth } from "../hooks/useAuth";
import { StyledLink } from "../components/StyledLink/SyledLink";

export function AuthStatus() {
    const auth = useAuth();

    if (!auth.user) {
        return (
            <>
                <StyledLink to="/login">Log in </StyledLink>
            </>
        )
    }
    return (
        <Logout />
    );
}