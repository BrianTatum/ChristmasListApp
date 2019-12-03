import {
	CREATE_LOGIN,
	DELETE_LOGIN,
	LOGIN_ERROR,
} from '../actions/types';

const initState = {
	authToken: null,
	user: {},
	authMsg: {},
}

export default function(state = initState, action) {
	switch (action.type) {
		case CREATE_LOGIN:
			return {
				...state,
				authToken: action.payload.token,
				user: action.payload.user,
				authMsg: '',
			}
		case DELETE_LOGIN:
			return {
				...state,
				authToken: '',
				authMsg: {type: 'success', msg: 'You are now logged out!'},
			}
		case LOGIN_ERROR:
			return {
				...state,
				authToken: null,
				authMsg: {type: 'danger', msg: action.payload},
			}
		default:
			return state 
	}
}