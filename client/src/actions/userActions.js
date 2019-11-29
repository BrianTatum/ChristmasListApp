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
		Axios.post('./users', { user })
			 .then(({ data }) => {
			 	if (data.userSaved) {
			 		dispatch({
			 			type: CREATE_USER,
			 			payload: data.user,
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

// Action gets one user from server.
export const showUser = (id) => {
	return (dispatch) => {
		Axios.get(`/users/${id}`)
			 .then(({ data }) => {
			 	console.log(data);
			 	dispatch({
			 		type: SHOW_USER,
			 		payload: data.user,
			 	})
			 })
	}
}

// Action updates user on the server.
export const updateUser = (user) => {
	return (dispatch) => {
		Axios.put(`/users/${user._id}`, { user })
			 .then(({ data }) => {
			 	if (data.userSaved) {
			 		dispatch({
			 			type: UPDATE_USER,
			 			payload: data.user,
			 		});
			 	} else {
			 		dispatch({
			 			type: USER_SAVE_ERRORS,
			 			payload: data.errors,
			 		});
			 	}
			 }).catch(err => console.log(err));
	}
}

// Action delete a user on the server.
export const deleteUser = (userId) => {
	return (dispatch) => {
		Axios.delete(`/users/${userId}`)
			 .then(({ data }) => {
			 	dispatch({
			 		type: DELETE_USER,
			 		payload: data,
			 	})
			 }).catch(err => console.log(err));
	}
}