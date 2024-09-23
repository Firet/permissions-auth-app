import { useNavigate } from "react-router-dom";
import { useAuth } from "../../App";

export default function Logout() {
    const auth = useAuth();
    const navigate = useNavigate();

    return (
        <p>
            Welcome {auth.user}!{" "}
            <button
                onClick={() => {
                    auth.signout(() => navigate("/"));
                }}
            >
                Sign out
            </button>
        </p>
    );
}