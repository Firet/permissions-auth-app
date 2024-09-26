import Logout from '../components/molecules/Logout/Logout';
import { useAuth } from '../hooks/useAuth';
import { StyledLink } from '../components/atoms/StyledLink/SyledLink';
import styled from '@emotion/styled';

export function AuthStatus() {
	const auth = useAuth();
	const isAdmin = auth.authState.isAdmin;

	const StatusContainer = styled.div`
		display: flex;
		flex-direction: column;
		justify-items: center;
		align-items: center;
		color: var(--black);
	`;

	if (!auth.user) {
		return (
			<>
				<>
					<StyledLink to="/login">Log in </StyledLink>
				</>
			</>
		);
	}

	return (
		<>
			<StatusContainer>User: {auth.user} </StatusContainer>
			<StatusContainer>
				Role: {isAdmin ? 'Administrator' : 'User'}
			</StatusContainer>
			<Logout />
		</>
	);
}
