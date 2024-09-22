export const CREATE_USER = "CREATE_USER";
export const CREATE_USER_SUCCESS = "CREATE_USER_SUCCESS";
export const CREATE_USER_FAILURE = "CREATE_USER_FAILURE";
export const DELETE_USER = "DELETE_USER";
export const DELETE_USER_SUCCESS = "DELETE_USER_SUCCESS";
export const DELETE_USER_FAILURE = "DELETE_USER_FAILURE";
export const GET_USERS = "GET_USERS";
export const GET_USERS_SUCCESS = "GET_USERS_SUCCESS";
export const GET_USERS_FAILURE = "GET_USERS_FAILURE";
export const UPDATE_USER = "UPDATE_USER";
export const UPDATE_USER_SUCCESS = "UPDATE_USER_SUCCESS";
export const UPDATE_USER_FAILURE = "UPDATE_USER_FAILURE";

export const createUser = () => ({
  type: CREATE_USER
});

export const createUserSuccess = (user: any) => ({
  type: CREATE_USER_SUCCESS,
  payload: user
});

export const createUserFailure = () => ({
  type: CREATE_USER_FAILURE
});

export const deleteUser = () => ({
  type: DELETE_USER
});

export const deleteUserSuccess = (id: any) => ({
  type: DELETE_USER_SUCCESS,
  payload: id
});

export const deleteUserFailure = () => ({
  type: DELETE_USER_FAILURE
});

export const getUsers = () => ({
  type: GET_USERS
});

export const getUsersSuccess = (users: any) => ({
  type: GET_USERS_SUCCESS,
  payload: users
});

export const getUsersFailure = () => ({
  type: GET_USERS_FAILURE
});

export const updateUser = () => ({
  type: UPDATE_USER
});

export const updateUserSuccess = (user: any) => ({
  type: UPDATE_USER_SUCCESS,
  payload: user
});

export const updateUserFailure = () => ({
  type: UPDATE_USER_FAILURE
});

export const addUser = (user: any) => {
  return async (dispatch: any) => {
    dispatch(createUser());

    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users",
        {
          method: "POST",
          body: JSON.stringify({
            name: user.name,
            email: user.email
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8"
          }
        }
      );
      const data = await response.json();
      dispatch(createUserSuccess(data));
    } catch (error) {
      dispatch(createUserFailure());
    }
  };
};

export const fetchUsers = () => {
  return async (dispatch: any) => {
    dispatch(getUsers());

    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      dispatch(getUsersSuccess(data));
    } catch (error) {
      dispatch(getUsersFailure());
    }
  };
};

export const deleteUserWithId = (id: any) => {
  return async (dispatch: any) => {
    dispatch(deleteUser());
    try {
      await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
        method: "DELETE"
      });
      dispatch(deleteUserSuccess(id));
    } catch (error) {
      dispatch(deleteUserFailure());
    }
  };
};

export const editUser = (user: any) => {
  return async (dispatch: any) => {
    dispatch(updateUser());
    try {
      await fetch(`https://jsonplaceholder.typicode.com/users/${user.id}`, {
        method: "PUT",
        body: JSON.stringify({
          name: user.name,
          email: user.email
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      });
      dispatch(updateUserSuccess(user));
    } catch (error) {
      dispatch(updateUserFailure());
    }
  };
};
