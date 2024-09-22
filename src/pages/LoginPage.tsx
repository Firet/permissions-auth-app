import { useNavigate } from "react-router-dom";
import { useAuth } from "../App";
import { useEffect } from "react";
import CustomForm from "../components/CustomForm";
import styled from '@emotion/styled';

export default function LoginPage() {
    let navigate = useNavigate();
    let auth = useAuth();

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