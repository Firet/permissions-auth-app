import { Outlet } from 'react-router-dom';
import Dashboard from '../components/Dashboard/Dashbaord';
import styled from '@emotion/styled';

export default function PublicPage() {
	const DashboardContainer = styled.div`
		display: flex;
		flex-direction: row;
		justify-content: center;
		background-color: #ffff80;
		width: 100%;
	`;

	return (
		<>
			<h3>Public</h3>
			<DashboardContainer>
				<Dashboard />
				<Outlet />
			</DashboardContainer>
		</>
	);
}
