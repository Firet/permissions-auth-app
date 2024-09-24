import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { CustomButton } from "../CustomButton/CustomButton";

export default function Logout() {
    const auth = useAuth();
    const navigate = useNavigate();

    return (
        <>
             {auth.user}{" "}
            <CustomButton
                label="Sign Out"
                onClick={() => {
                    auth.signout(() => navigate("/"));
                }}
            >
            </CustomButton>
        </>
    );
}