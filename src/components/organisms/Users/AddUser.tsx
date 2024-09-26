import styled from "@emotion/styled";

export const AddUser = ({ onAdd }) => {

	const AddUserContainer = styled.div`
	display: flex;
	justify-content: center;
	width: 100%;
	height: 100vh;
	margin-top: 100px;
`;

	const handleOnSubmit = (evt: any) => {
		evt.preventDefault();
		onAdd(evt.target.name.value, evt.target.email.value);
		evt.target.name.value = '';
		evt.target.email.value = '';
	};

	return (
		<AddUserContainer>
			<form onSubmit={handleOnSubmit}>
				<h3>Add User</h3>
				<input placeholder="Name" name="name" />
				<input placeholder="Email" name="email" />
				<button type="submit">Add</button>
				<hr />
			</form>
		</AddUserContainer>
	);
};
