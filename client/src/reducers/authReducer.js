import {
	CREATE_LOGIN,
	DELETE_LOGIN,
	LOGIN_ERROR,
} from '../actions/types';

const initState = {
	authToken: '',
	user: {},
}

export default function(state = initState, action) {
	switch (action.type) {
		case CREATE_LOGIN:
			return state
		case DELETE_LOGIN:
			return state
		case LOGIN_ERROR:
			return state
		default:
			return state 
	}
}