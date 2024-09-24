import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

export default function Logout() {
    const auth = useAuth();
    const navigate = useNavigate();

    return (
        <>
             {auth.user}{" "}
            <button
                onClick={() => {
                    auth.signout(() => navigate("/"));
                }}
            >
                Sign out
            </button>
        </>
    );
}