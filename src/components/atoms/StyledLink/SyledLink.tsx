import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
	color: var(--black);
	font-weight: 700;
	text-decoration: none;
	padding: 20px;
	border: 1px solid var(--accent);
	@media (max-width: 768px) {
		padding: 5px;
	}
`;
