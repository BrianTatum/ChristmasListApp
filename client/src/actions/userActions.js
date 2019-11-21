import {
	GET_USERS,
	CREATE_USER,
	SHOW_USER,
	UPDATE_USER,
	DELETE_USER,
} from '../actions/types';

export const getUsers = () => {
	return {
		type: GET_USERS,
	}
}