import { useState } from "react";
import { connect } from "react-redux";
import { useAuth } from "../../hooks/useAuth";
import { Button, Card, TextField } from '@mui/material';
import styled from '@emotion/styled';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const StyledButton = styled(Button)`
  background-color: #black;
  color: white;
  margin: 10px;
  &:hover {
    background-color: orange;
  }
`;

const StyledCard = styled(Card)`
  background-color: blue;
  color: white;
  align-content: center;
  text-align: center;
  width: 30%;
  height: 100px;
  margin: 10px;
  &:hover {
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
    background-color: red;
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
                    <StyledButton type="submit">Save</StyledButton>
                </StyledForm>
            ) : (
                <StyledCard className="user">
                    <div className="user-name">{name}</div>
                    <div className="user-email">{email}</div>
                    {isAdmin && (
                        <div>
                            <StyledButton variant="contained" color="primary" onClick={handleEdit}>
                                Edit
                            </StyledButton>
                            <StyledButton variant="contained" color="secondary" onClick={handleDelete}>
                                Delete
                            </StyledButton>
                        </div>
                    )}
                </StyledCard>
            )}
        </>
    );
};

export default connect()(UserCard);
