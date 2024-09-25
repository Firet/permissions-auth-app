import styled from '@emotion/styled';

const StyledFooter = styled.footer`
	display: flex;
	background-color: var(--secondary);
	color: var(--white);
	font-weight: 600;
	width: 100%;
	height: 100px;
	margin-top: 20px;
	justify-content: center;
	align-items: center;
`;

export default function Footer() {
	const currentYear = new Date().getFullYear();
	return <StyledFooter>Copy Left {currentYear}, this page is open source.</StyledFooter>;
}
