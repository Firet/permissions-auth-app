import { connect } from 'react-redux';
import { addUser, deleteUserWithId, editUser } from "../../redux/actions/userActions";
import { AddUser } from "../Users/AddUser";
import UserCard from "../Users/UserCard";
import { useAuth } from "../../hooks/useAuth";

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
        <div className="App">
            <h1>Dashboard</h1>
            {isAdmin && <AddUser onAdd={onAdd} />}
            {renderUsers()}
        </div>
    );

};

const mapStateToProps = (state) => ({
    loading: state.users.loading,
    users: state.users.users,
    hasErrors: state.users.hasErrors
});

export default connect(mapStateToProps)(Dashbaord);

