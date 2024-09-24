import { Routes, Route, Navigate } from 'react-router-dom';
import PublicPage from './pages/PublicPage';
import ProtectedPage from './pages/ProtectedPage';
import LoginPage from './pages/LoginPage';
import { RequireAdminAuth, RequireAuth } from './auth/RequireAuth';
import { AuthProvider } from './context/AuthContext';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import { fetchUsers } from './redux/actions/userActions';
import Layout from './layout/Layout';

const App = ({ dispatch }) => {
	useEffect(() => {
		dispatch(fetchUsers());
	}, [dispatch]);

	return (
		<AuthProvider>
			<Routes>
				<Route element={<Layout />}>
					<Route path="/" element={<PublicPage />} />
					<Route path="/login" element={<LoginPage />} />
					<Route path="/public" element={<PublicPage />} />
					<Route
						path="/protected"
						element={
							<RequireAuth>
								<ProtectedPage />
							</RequireAuth>
						}
					/>
					<Route
						path="/admin"
						element={
							<RequireAdminAuth>
								<div>You have access</div>
							</RequireAdminAuth>
						}
					/>
				</Route>
				<Route path="*" element={<Navigate to="/" />} />
			</Routes>
		</AuthProvider>
	);
};

const mapStateToProps = (state) => ({
	loading: state.users.loading,
	users: state.users.users,
	hasErrors: state.users.hasErrors,
});

export default connect(mapStateToProps)(App);
