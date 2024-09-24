import styled from '@emotion/styled';

const NoAccessContainer = styled.div`
	margin-top: 100px;
	min-height: 100vh;
`;

const NoAccessCard = styled.div`
	background-color: #bdbfc0;
	margin-top: 200px;
	min-height: 40%;
	border-radius: 30px;
	padding: 30px;
	font-weight: 600;
`;

export function NoAccess() {
    return (<NoAccessContainer>
        <NoAccessCard>
			<p>
            You do not have access.
			</p>
			<p>
			Please login as administrator to be able to enter.
			</p>
        </NoAccessCard>
    </NoAccessContainer>);
}

