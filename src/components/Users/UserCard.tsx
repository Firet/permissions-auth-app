import { useState } from "react";
import { connect } from "react-redux";
import { useAuth } from "../../hooks/useAuth";
import { Button, Card, TextField } from '@mui/material';
import styled from '@emotion/styled';




const CardsContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: papayawhip;
  width: 100%;
  &:hover {
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  }
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const StyledButton = styled(Button)`
  background-color: #3f51b5;
  color: white;
  margin: 10px;
  &:hover {
    background-color: #303f9f;
  }
`;

const StyledCard = styled(Card)`
  background-color: #360845;
  color: white;
  text-align: center;
  width: 100%;
  height: 100px;
  margin: 10px;

  &:hover {
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
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
        <CardsContainer>
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
        </CardsContainer>
    );
};

export default connect()(UserCard);
