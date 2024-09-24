import * as actions from '../actions/userActions';

export const initialState = {
	users: [],
	loading: false,
	hasErrors: false,
};

export default function userReducer(state = initialState, action: any) {
	switch (action.type) {
		case actions.CREATE_USER:
			return { ...state, loading: true };
		case actions.CREATE_USER_SUCCESS:
			return {
				users: [...state.users, action.payload],
				loading: false,
				hasErrors: false,
			};
		case actions.CREATE_USER_FAILURE:
			return {
				...state,
				loading: false,
				hasErrors: true,
			};

		case actions.GET_USERS:
			return { ...state, loading: true };
		case actions.GET_USERS_SUCCESS:
			return { users: action.payload, loading: false, hasErrors: false };
		case actions.GET_USERS_FAILURE:
			return { ...state, loading: false, hasErrors: true };

		case actions.DELETE_USER:
			return { ...state, loading: true };
		case actions.DELETE_USER_SUCCESS:
			return {
				users: state.users.filter((user) => user.id !== action.payload),
				loading: false,
				hasErrors: false,
			};
		case actions.DELETE_USER_FAILURE:
			return { ...state, loading: false, hasErrors: true };

		case actions.UPDATE_USER:
			return { ...state, loading: true };
		case actions.UPDATE_USER_SUCCESS:
			return {
				users: state.users.map((user) => {
					if (user.id === action.payload.id) {
						return {
							...user,
							name: action.payload.name,
							email: action.payload.email,
						};
					}
					return user;
				}),
				loading: false,
				hasErrors: false,
			};

		default:
			return state;
	}
}
