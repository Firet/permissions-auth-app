import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import CustomForm from "../components/CustomForm/CustomForm";
import styled from '@emotion/styled';
import { useAuth } from "../hooks/useAuth";

export default function LoginPage() {
    const navigate = useNavigate();
    const auth = useAuth();

    const FormContainer = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%; 
        height: 100vh;
    `;

    useEffect(() => {
        if (auth.user) {
            navigate('/');
        }
    }, [auth.user, navigate]);

    return (
        <FormContainer>
            <h3>Login Page</h3>
            <CustomForm />
        </FormContainer>
    );
}