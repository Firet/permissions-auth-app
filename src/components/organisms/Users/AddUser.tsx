export const AddUser = ({ onAdd }) => {
	const handleOnSubmit = (evt: any) => {
		evt.preventDefault();
		onAdd(evt.target.name.value, evt.target.email.value);
		evt.target.name.value = '';
		evt.target.email.value = '';
	};

	return (
		<form onSubmit={handleOnSubmit}>
			<h3>Add User</h3>
			<input placeholder="Name" name="name" />
			<input placeholder="Email" name="email" />
			<button type="submit">Add</button>
			<hr />
		</form>
	);
};
