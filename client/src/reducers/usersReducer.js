import {
	GET_USERS,
	CREATE_USER,
	SHOW_USER,
	UPDATE_USER,
	DELETE_USER,
} from '../actions/types';

const initState = {
	users: [],
};

export default function(state = initState, action) {
	switch (action.type) {
		case GET_USERS:
			return {...state, users: action.payload}
		case CREATE_USER:
			return {...state}
		case SHOW_USER:
			return {...state}
		case UPDATE_USER:
			return {...state}
		case DELETE_USER:
			return {...state}
		default:
			return state
	}
}