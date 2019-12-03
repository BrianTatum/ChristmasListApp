import Axios from 'axios';

import {
	CREATE_LOGIN,
	DELETE_LOGIN,
	LOGIN_ERROR,
} from './types';

export const logInUser = (username, password) => {
	return (dispatch) => {
		Axios.post('/auth', {username, password})
		 	 .then(({ data }) => {
		 		console.log(data);
		 		dispatch({
		 			type: CREATE_LOGIN,
		 			payload: data,
		 		})
		 	 }).catch(({ response }) => {
		 	 	dispatch({
		 	 		type: LOGIN_ERROR,
		 	 		payload: response.data.msg,
		 	 	})
		 	 });
	}
}

export const logOutUser = () => {
	return {
		type: DELETE_LOGIN
	}
}