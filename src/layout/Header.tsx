import { AuthStatus } from '../auth/AuthStatus';
import styled from '@emotion/styled';
import { StyledLink } from '../components/StyledLink/SyledLink';

const HeaderContainer = styled.header`
	background-color: #e8e874;
	color: black;
	font-weight: 700;
	display: flex;
	flex-direction: row;
	width: 100%;
	justify-content: center;
	align-items: center;
`;

export default function Header() {
	return (
		<HeaderContainer>
			<StyledLink to="/public">Public Page </StyledLink>
			<StyledLink to="/protected">Protected Page</StyledLink>
			<StyledLink to="/admin"> Admin Page</StyledLink>
			<AuthStatus />
		</HeaderContainer>
	);
}
