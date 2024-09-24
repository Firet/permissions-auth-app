import { Outlet } from 'react-router-dom';
import Dashboard from '../components/Dashboard/Dashbaord';
import styled from '@emotion/styled';

const DashboardContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	background-color: #ffff80;
	width: 100%;
`;

export default function ProtectedPage() {
	return (
		<>
			<h3>Dashboard Center</h3>
			<DashboardContainer>
				<Dashboard />
				<Outlet />
			</DashboardContainer>
		</>
	);
}
