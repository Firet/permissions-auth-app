import styled from '@emotion/styled';

export default function PublicPage() {
	const HomeContainer = styled.div`
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: flex-start;
		margin-top: 50px;
		width: 100%;
		min-height: 100vh;
		font-weight: 600;
	`;

	return (
		<>
			<h3>Home</h3>
			<HomeContainer>
				<p>This is an authentication app</p>
				<p>Click on Log In button and choose any username to enter as a User Role</p>
				<p>But you can login with the username 'admin' and password 'admin' to enter as an Administrator role</p>
			</HomeContainer>
		</>
	);
}
