import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import CustomForm from '../components/CustomForm/CustomForm';
import styled from '@emotion/styled';
import { useAuth } from '../hooks/useAuth';

export default function LoginPage() {
	const navigate = useNavigate();
	const auth = useAuth();

	const LoginContainer = styled.div`
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-top: 200px;
		width: 100%;
		height: 100vh;
	`;

	const LoginCard = styled.div`
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		background-color: #bdbfc0;
		color: white;
		min-height: 400px;
		width: 20%;
		border-radius: 30px;
		box-shadow: 10px 10px lightblue;
		padding: 5px;
`;

	useEffect(() => {
		if (auth.user) {
			navigate('/');
		}
	}, [auth.user, navigate]);

	return (
		<LoginContainer>
			<LoginCard>
				<h3>Login Page</h3>
				<CustomForm />
			</LoginCard>
		</LoginContainer>
	);
}
