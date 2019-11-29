import {
	GET_USERS,
	CREATE_USER,
	SHOW_USER,
	UPDATE_USER,
	DELETE_USER,
	USER_SAVE_ERRORS,
} from '../actions/types';

const initState = {
	users: [],
	curUser: {},
	errors: {},
	userSaved: false,
};

export default function(state = initState, action) {
	switch (action.type) {
		case GET_USERS:
			return {
				...state,
				users: action.payload,
				userSaved: false,
				errors: {},
			}
		case CREATE_USER:
		case UPDATE_USER:
			return {
				...state,
				userSaved: true,
				errors: {},
			}
		case SHOW_USER:
			return {
				...state,
				curUser: action.payload
			}
		case DELETE_USER:
			return {
				...state,
				users: action.payload,
			}
		case USER_SAVE_ERRORS: 
			return {
				...state,
				userSaved: false,
				errors: action.payload,
			}
		default:
			return state
	}
}