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

export default function ProtectedPage({ title }) {
	return (
		<>
			<h3>{title}</h3>
			<DashboardContainer>
				<Dashboard />
				<Outlet />
			</DashboardContainer>
		</>
	);
}
