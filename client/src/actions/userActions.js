import Axios from 'axios';

//User Action Types.
import {
	GET_USERS,
	CREATE_USER,
	SHOW_USER,
	UPDATE_USER,
	DELETE_USER,
	USER_SAVE_ERRORS,
} from '../actions/types';


// Action gets users from server.
export const getUsers = () => {
	return (dispatch) => {
		Axios.get('/users')
		 	.then(({ data }) => {
		 		dispatch({
		 			type: GET_USERS,
		 			payload: data,
		 		})
		 	}).catch(err => console.log(err));
	}
}

// Action creates a new user on the server.
export const creatUser = (user) => {
	return (dispatch) => {
		console.log('Sending Post req...');
		Axios.post('./users', { user })
			 .then(({ data }) => {
			 	console.log(data);
			 	if (data.userSaved) {
			 		dispatch({
			 			type: CREATE_USER,
			 		})
			 	} else {
			 		dispatch({
			 			type: USER_SAVE_ERRORS,
			 			payload: data.errors,
			 		})
			 	}
			 }).catch(err => console.log(err));
	}
}