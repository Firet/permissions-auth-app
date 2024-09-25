import styled from '@emotion/styled';

export default function PublicPage() {
	const HomeContainer = styled.div`
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		margin-top: 50px;
		margin-left:20%
		width: 100%;
		min-height: 100vh;
		font-weight: 600;
		border: 2px solid var(--primary);
		padding: 2rem;
	`;

	const HomeTitle = styled.h3`
		text-align: center;
	`;

	const HomeText = styled.p`
		margin-top: 2rem;
	`;

	const SpanText = styled.span`
		background-color: var(--primary);
	`;

	return (
		<>
			<HomeContainer>
				<HomeTitle>This is an authentication Demo</HomeTitle>
				<HomeText>
					Log in with any username to enter as a{' '}
					<SpanText>User Role</SpanText>
				</HomeText>
				<HomeText>
					Otherwise, you can log in with the username 'admin' and
					password 'admin' to enter as an{' '}
					<SpanText>Administrator role</SpanText>
				</HomeText>
			</HomeContainer>
		</>
	);
}
