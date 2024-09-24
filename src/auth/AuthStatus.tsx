import Logout from '../components/molecules/Logout/Logout';
import { useAuth } from '../hooks/useAuth';
import { StyledLink } from '../components/atoms/StyledLink/SyledLink';

export function AuthStatus() {
	const auth = useAuth();
	const isAdmin = auth.authState.isAdmin

	if (!auth.user) {
		return (
			<>
				<StyledLink to="/login">Log in </StyledLink>
			</>
		);
	}
	return (<>
		<p>
			Username: {auth.user}{' '}
		</p>
		<p>
			Role: {isAdmin ? 'Admintrator' : 'User'}
		</p>
		<Logout />
	</>
	);
}
