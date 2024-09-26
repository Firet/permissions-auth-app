import { AuthStatus } from '../../auth/AuthStatus';
import styled from '@emotion/styled';
import { StyledLink } from '../atoms/StyledLink/SyledLink';

const HeaderContainer = styled.header`
	background-color: var(--white);
	color: var(--black);
	font-weight: 700;
	display: flex;
	flex-direction: row;
	width: 100%;
	align-items: center;
	height: 100px;
`;

const LinksContainer = styled.header`
	background-color: var(--white);
	color: var(--black);
	display: flex;
	flex-direction: row;
	width: 80%;
	justify-content: space-around;
	align-items: center;
`;

const AuthStatusContainer = styled.header`
	background-color: var(--white);
	color: var(--white);
	font-size: 15px;
	display: flex;
	flex-direction: column;
	width: 20%;
	align-items: center;
	@media (max-width: 768px) {
		font-size: 10px;
		width: 40%;
	}
`;

export default function Header() {
	return (
		<HeaderContainer>
			<LinksContainer>
				<StyledLink to="/public">Home</StyledLink>
				<StyledLink to="/protected">User List</StyledLink>
				<StyledLink to="/admin">Admin Page</StyledLink>
			</LinksContainer>
			<AuthStatusContainer>
				<AuthStatus />
			</AuthStatusContainer>
		</HeaderContainer>
	);
}
