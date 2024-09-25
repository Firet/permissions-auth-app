import { AuthStatus } from '../../auth/AuthStatus';
import styled from '@emotion/styled';
import { StyledLink } from '../atoms/StyledLink/SyledLink';

const HeaderContainer = styled.header`
	background-color: var(--secondary);
	color: var(--white);
	font-weight: 700;
	display: flex;
	flex-direction: row;
	width: 100%;
	justify-content: space-between;
	align-items: center;
`;


const LinksContainer = styled.header`
	background-color: var(--secondary);
	color: var(--white);
	font-size: 20px;
	// font-weight: 500;
	display: flex;
	flex-direction: row;
	width: 100%;
	justify-content: space-between;
	align-items: center;
	padding: 30px;
	margin-left: 20%;
`;

const AuthStatusContainer = styled.header`
	background-color: var(--primary);
	color: var(--white);
	font-weight: 600;
	font-size: 10px;
	display: flex;
	flex-direction: column;
	border:1px solid var(--primary);
	// border-radius: 10px;
	width: 20%;
	align-items: center;
`;

export default function Header() {
	return (
		<HeaderContainer>
			<LinksContainer>
				<StyledLink to="/public">Home</StyledLink>
				<StyledLink to="/protected">Dashboard Center</StyledLink>
				<StyledLink to="/admin">Admin Page</StyledLink>
			</LinksContainer>
			<AuthStatusContainer>
				<AuthStatus />
			</AuthStatusContainer>
		</ HeaderContainer>
	);
}
