import Axios from 'axios';

//User Action Types.
import {
	GET_USERS,
	CREATE_USER,
	SHOW_USER,
	UPDATE_USER,
	DELETE_USER,
} from '../actions/types';


// Actions gets users from server.
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