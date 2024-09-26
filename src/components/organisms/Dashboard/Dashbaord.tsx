import { connect } from 'react-redux';
import {
	deleteUserWithId,
	editUser,
} from '../../../redux/actions/userActions';
import UserCard from '../Users/UserCard';
import styled from '@emotion/styled';

function Dashbaord({ dispatch, loading, users, hasErrors }) {

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
		background-color: var(--primary);
		width: 100%;
		min-height: 100vh;
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
