import { Routes, Route, Navigate } from 'react-router-dom';
import PublicPage from './components/pages/PublicPage';
import ProtectedPage from './components/pages/ProtectedPage';
import LoginPage from './components/pages/LoginPage';
import { RequireAdminAuth, RequireAuth } from './auth/RequireAuth';
import { AuthProvider } from './context/AuthContext';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import { addUser, fetchUsers } from './redux/actions/userActions';
import Layout from './components/templates/Layout';
import { AddUser } from './components/organisms/Users/AddUser';

const App = ({ dispatch }) => {
	useEffect(() => {
		dispatch(fetchUsers());
	}, [dispatch]);

	const onAdd = (name, email) => {
		dispatch(addUser({ name, email }));
	};

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
								<ProtectedPage title="Dashboard Center" />
							</RequireAuth>
						}
					/>
					<Route
						path="/admin"
						element={
							<RequireAdminAuth>
								<AddUser onAdd={onAdd} />
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
