import { CustomButton } from "../CustomButton/CustomButton";

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
			<CustomButton type="" color="primary" label="Add" onClick={handleOnSubmit}></CustomButton>
			<hr />
		</form>
	);
};
