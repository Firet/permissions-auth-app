import styled from '@emotion/styled';

const StyledFooter = styled.footer`
	background-color: #bdbfc0;
	color: white;
	width: 100%;
	margin-top: 20px;
	text-align: center;
`;

export default function Footer() {
	const currentYear = new Date().getFullYear();
	return <StyledFooter>{currentYear}</StyledFooter>;
}
