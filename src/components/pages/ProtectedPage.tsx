import { Outlet } from 'react-router-dom';
import Dashboard from '../organisms/Dashboard/Dashbaord';
import styled from '@emotion/styled';

const DashboardContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	background-color: var(--another);
	width: 100%;
`;

export default function ProtectedPage() {
	return (
		<>
			<DashboardContainer>
				<Dashboard />
				<Outlet />
			</DashboardContainer>
		</>
	);
}
