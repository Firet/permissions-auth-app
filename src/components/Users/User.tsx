import { useState } from "react";
import { connect } from "react-redux";
import { useAuth } from "../../hooks/useAuth";

export const User = ({ name, email, id, onEdit, onDelete }) => {
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
        <div>
            {isEdit ? (
                <form onSubmit={handleOnEditSubmit}>
                    <input placeholder="Name" name="name" defaultValue={name} />
                    <input placeholder="Email" name="email" defaultValue={email} />
                    <button onSubmit={handleOnEditSubmit}>Save</button>
                </form>
            ) : (
                <div className="user">
                    <span className="user-name">{name}</span>
                    <span className="user-email">{email}</span>
                    {isAdmin && (
                        <div>
                            <button onClick={handleEdit}>Edit</button>
                            <button onClick={handleDelete}>Delete</button>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default connect()(User);
