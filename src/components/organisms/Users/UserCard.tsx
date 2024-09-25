import { useState } from 'react';
import { connect } from 'react-redux';
import { useAuth } from '../../../hooks/useAuth';
import { Card, TextField } from '@mui/material';
import styled from '@emotion/styled';
import { CustomButton } from '../../molecules/CustomButton/CustomButton';

const StyledForm = styled.form`
	display: flex;
	flex-direction: column;
	gap: 1rem;
`;

const StyledCard = styled(Card)`
	background-color: var(--primary);
	color: white;
	font-weight: 600;
	align-content: center;
	text-align: center;
	width: 30%;
	height: 100px;
	margin: 10px;
	padding: 10px;
	&:hover {
		box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
		background-color: var(--secondary);
		color: var(--black);
	}
	@media (max-width: 768px) {
	width: 50%;
  	}
`;

export const UserCard = ({ name, email, id, onEdit, onDelete }) => {
	const [isEdit, setIsEdit] = useState(false);
	const auth = useAuth();
	const isAdmin = auth.authState.isAdmin;
	const handleEdit = () => {
		setIsEdit(!isEdit);
	};

	const handleDelete = () => {
		onDelete(id);
	};

	const handleOnEditSubmit = (evt) => {
		evt.preventDefault();
		onEdit(id, evt.target.name.value, evt.target.email.value);
		setIsEdit(!isEdit);
	};

	return (
		<>
			{isEdit ? (
				<StyledForm onSubmit={handleOnEditSubmit}>
					<TextField
						label="Name"
						name="name"
						defaultValue={name}
						fullWidth
					/>
					<TextField
						label="Email"
						name="email"
						defaultValue={email}
						fullWidth
					/>
					<CustomButton 
						type="submit"
						color="error"
						label="Save"
						onClick={() => null}
						>
					</CustomButton>
				</StyledForm>
			) : (
				<StyledCard className="user">
					<div className="user-name">{name}</div>
					<div className="user-email">{email}</div>
					{isAdmin && (
						<div>
							<CustomButton
								type=""
								color="warning"
								label="Edit"
								onClick={handleEdit}
							>
							</CustomButton>
							<CustomButton
								type=""
								color="error"
								label="Delete"
								onClick={handleDelete}
							>
							</CustomButton>
						</div>
					)}
				</StyledCard>
			)}
		</>
	);
};

export default connect()(UserCard);