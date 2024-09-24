import { connect } from 'react-redux';
import {
	addUser,
	deleteUserWithId,
	editUser,
} from '../../redux/actions/userActions';
import { AddUser } from '../Users/AddUser';
import UserCard from '../Users/UserCard';
import { useAuth } from '../../hooks/useAuth';
import styled from '@emotion/styled';

function Dashbaord({ dispatch, loading, users, hasErrors }) {
	const auth = useAuth();
	const isAdmin = auth.authState.isAdmin;

	const onAdd = (name, email) => {
		dispatch(addUser({ name, email }));
	};

	const onEdit = async (id, name, email) => {
		dispatch(editUser({ id, name, email }));
	};

	const onDelete = (id) => {
		dispatch(deleteUserWithId(id));
	};

	const RenderCardsContainer = styled.div`
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
		background-color: violet;
		width: 80%;
		min-height: 800px;
	`;
	const AddUserContainer = styled.div`
		display: flex;
		justify-content: center;
		width: 100%;
		background-color: grey;
	`;

	const renderUsers = () => {
		if (loading) return <p>Loading users...</p>;
		if (hasErrors) return <p>Unable to display users</p>;
		if (users) {
			return users.map((user) => (
				<UserCard
					id={user.id}
					key={user.id}
					name={user.name}
					email={user.email}
					onEdit={onEdit}
					onDelete={onDelete}
				/>
			));
		}
	};

	return (
		<RenderCardsContainer>
			{isAdmin && (
				<AddUserContainer>
					<AddUser onAdd={onAdd} />
				</AddUserContainer>
			)}
			{renderUsers()}
		</RenderCardsContainer>
	);
}

const mapStateToProps = (state) => ({
	loading: state.users.loading,
	users: state.users.users,
	hasErrors: state.users.hasErrors,
});

export default connect(mapStateToProps)(Dashbaord);
