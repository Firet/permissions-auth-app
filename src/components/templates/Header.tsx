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
	height: 100px;
	justify-content: space-around;
	align-items: center;
`;

export default function Header() {
	return (
		<HeaderContainer>
			<div>
				<StyledLink to="/public">Home</StyledLink>
				<StyledLink to="/protected">Dashboard Center</StyledLink>
				<StyledLink to="/admin">Admin Page</StyledLink>
			</div>
			<AuthStatus />
		</HeaderContainer>
	);
}
