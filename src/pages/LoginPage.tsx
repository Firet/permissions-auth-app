import { useNavigate } from "react-router-dom";
import { useAuth } from "../App";
import { useEffect } from "react";
import CustomForm from "../components/CustomForm";

export default function LoginPage() {
    let navigate = useNavigate();
    let auth = useAuth();

    useEffect(() => {
        if (auth.user) {
            navigate('/');
        }
    }, [auth.user, navigate]);

    return (
        <div>
            <h3>Login Page</h3>
            <CustomForm />
        </div>
    );
}