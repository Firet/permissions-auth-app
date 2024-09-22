import * as actions from "../actions/userActions";

export const initialState = {
  users: [],
  loading: false,
  hasErrors: false
};

export default function userReducer(state = initialState, action: any) {
  switch (action.type) {

    case actions.GET_USERS:
      return { ...state, loading: true };
    default:
      return state;
  }
}
